"use strict";

function classify(value) {
  const code = value?.code ?? value?.error?.code;
  const detail = value?.detail;
  const expired = Number(code) === 410 || Number(detail?.status) === 3 || detail?.status === "expired";
  if (expired) return "expired";
  if (Number(code) === 403 || detail?.enable === false || detail?.enable === 0 || Number(detail?.status) === 2) return "blocked";
  const date = detail?.valid_until || detail?.validUntil || detail?.expire_at || detail?.expiresAt;
  if (date && Number.isFinite(Date.parse(date)) && Date.parse(date) <= Date.now()) return "expired";
  if (value?.status === true && detail?.enable && Number(detail.status) === 1 && value?.key) return "active";
  if (Number(code) >= 500 || code === "LICENSE_ERROR" || /server|gateway|timeout|network|connection/i.test(value?.message || "")) return "connection_error";
  if (!value?.key || code === "license_not_found" || Number(code) === 404) return "activation_required";
  return "activation_required";
}

function createLicenseCoordinator({ validate, activate, publish = () => {}, now = Date.now, ttl = 60000 }) {
  let state = { status: false, key: "", detail: null, state: "checking", revision: 0 };
  let checkedAt = 0;
  let queue = Promise.resolve();
  const pending = new Map();
  function commit(result, key) {
    const candidate = { ...result, key: result?.key || key || "" };
    const mode = classify(candidate);
    state = {
      ...candidate,
      status: mode === "active",
      detail: candidate.detail || null,
      state: mode,
      revision: state.revision + 1,
      error: mode === "active" ? null : { code: candidate.code || candidate.error?.code || mode, message: candidate.message || candidate.error?.message || "" }
    };
    checkedAt = now();
    publish(state);
    return state;
  }
  function enqueue(work) {
    const result = queue.then(work, work);
    queue = result.catch(() => {});
    return result;
  }
  function get(key, force = false) {
    key = String(key || "").trim().toUpperCase();
    if (pending.has(key)) return pending.get(key);
    if (!force && state.state !== "checking" && state.key === key && now() - checkedAt < ttl) return Promise.resolve(state);
    const request = enqueue(async () => {
      if (!key) return commit({ status: false, code: 404, detail: null }, "");
      try { return commit(await validate(key), key); }
      catch { return commit({ status: false, code: 504, message: "Server Error" }, key); }
    });
    pending.set(key, request);
    request.finally(() => { if (pending.get(key) === request) pending.delete(key); });
    return request;
  }
  function activateKey(data) {
    return enqueue(async () => {
      const key = String(data?.key || "").trim().toUpperCase();
      try {
        const response = await activate({ ...data, key });
        if (response?.status !== true) return { ...response, state: classify({ ...response, key }), key };
        return commit(response, key);
      } catch { return { status: false, code: 504, message: "Server Error", state: "connection_error", key }; }
    });
  }
  return { get, activateKey, snapshot: () => state };
}

module.exports = { classify, createLicenseCoordinator };
