(function () {
  const API_BASE = "https://deskpro.superzapmarketing.net";
  const HEADER_LOGO = "./assets/deskpro-header-logo.png";
  const LOGO = "./assets/deskpro-icon.png";
  const SIDEBAR_ROUTES = new Map([
    ["/", "dashboard"],
    ["/devices", "devices"],
    ["/send-message", "send-message"],
    ["/welcome-message", "welcome-message"],
    ["/auto-reply", "auto-reply"],
    ["/templates", "templates"],
    ["/contacts", "contacts"],
    ["/unsubscribes", "unsubscribes"],
    ["/number-filter", "number-filter"],
    ["/group-grabber", "group-grabber"],
    ["/report", "report"],
    ["/received-messages", "received-messages"],
    ["/integrations", "status"],
    ["/setting", "setting"]
  ]);

  let remoteDetail = null;
  let detailRequestRunning = false;
  let renewalPoll = null;
  let booted = false;
  let taskSendSync = null;

  function clearLegacyBrowserStorage() {
    for (const storage of [window.localStorage, window.sessionStorage]) {
      try {
        Object.keys(storage).forEach((key) => {
          if (/firebase|firestore|remote.?config|clarity|sentry/i.test(key)) storage.removeItem(key);
        });
      } catch {
        // Storage cleanup is best effort and never touches license or session keys.
      }
    }
    try {
      indexedDB.databases?.().then((databases) => {
        databases.forEach(({ name }) => {
          if (name && /firebase|firestore|remote.?config/i.test(name)) indexedDB.deleteDatabase(name);
        });
      }).catch(() => undefined);
    } catch {
      // Some Electron versions do not expose indexedDB.databases().
    }
  }

  function isUpdateTask(type) {
    return type === "check_update" ||
      type === "download_update" ||
      type === "download_latest_build" ||
      type === "download_latest_build_cancel";
  }

  function updateDisabledResponse() {
    return { status: true, blocked: true, code: "update_disabled" };
  }

  function isLegacyUpdateText(value) {
    const text = String(value || "");
    return text.includes("Invalid Version:") ||
      text.includes("desktop-v") ||
      text.includes("Atualizacao falhou") ||
      text.includes("AtualizaÃ§Ã£o falhou") ||
      text.includes("Atualização falhou");
  }

  function api(path, options) {
    return fetch(`${API_BASE}${path}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {})
      },
      ...options
    }).then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Não foi possível concluir a operação.");
      }
      return data;
    });
  }

  function getStoredLicense(originalSendSync) {
    if (window.__deskproLicenseState) return window.__deskproLicenseState;
    try {
      return originalSendSync("task", { type: "license.get" }) || {};
    } catch {
      return {};
    }
  }

  function normalizeLicenseDetail(originalSendSync) {
    const current = getStoredLicense(originalSendSync);
    const local = current.detail || current || {};
    const remote = {};
    const merged = {
      ...local,
      ...remote,
      plan: {
        ...(local.plan || {}),
        ...(remote.plan || {})
      }
    };

    merged.plan_name = merged.plan?.name || merged.plan_name || "DeskPro";
    merged.key = merged.key || merged.license_key || merged.licenseKey || local.key || local.license_key || remote.key || remote.license_key || "";
    merged.license_key = merged.license_key || merged.key;
    merged.valid_until = merged.valid_until || merged.validUntil || merged.expire_at || merged.expiresAt || null;
    merged.validUntil = merged.validUntil || merged.valid_until || merged.expire_at || merged.expiresAt || null;
    merged.expire_at = merged.expire_at || merged.valid_until || merged.validUntil || null;

    const limit = maximumWhatsapps(merged);

    merged.max_whatsapp_sessions = limit;
    merged.maxWhatsappSessions = limit;
    merged.plan.max_whatsapp_sessions = limit;
    merged.plan.maxWhatsappSessions = limit;
    return merged;
  }

  function maximumWhatsapps(detail) {
    return Number(
      detail?.whatsapps ||
      detail?.whatsapp ||
      detail?.whatsApps ||
      detail?.whatsApp ||
      detail?.seats ||
      detail?.seat ||
      detail?.devices ||
      detail?.deviceLimit ||
      detail?.limit ||
      detail?.whatsapp_limit ||
      detail?.whatsappLimit ||
      detail?.max_whatsapp_sessions ||
      detail?.maxWhatsappSessions ||
      detail?.plan?.whatsapps ||
      detail?.plan?.whatsapp ||
      detail?.plan?.whatsApps ||
      detail?.plan?.whatsApp ||
      detail?.plan?.seats ||
      detail?.plan?.seat ||
      detail?.plan?.devices ||
      detail?.plan?.deviceLimit ||
      detail?.plan?.limit ||
      detail?.plan?.whatsapp_limit ||
      detail?.plan?.whatsappLimit ||
      detail?.plan?.max_whatsapp_sessions ||
      detail?.plan?.maxWhatsappSessions ||
      0
    );
  }

  function licenseKey(originalSendSync) {
    const current = getStoredLicense(originalSendSync);
    return current.key ||
      current.license_key ||
      current.licenseKey ||
      current.detail?.key ||
      current.detail?.license_key ||
      current.detail?.licenseKey ||
      remoteDetail?.key ||
      remoteDetail?.license_key ||
      remoteDetail?.licenseKey ||
      "";
  }

  function formatDate(value) {
    if (!value) return "Não informada";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleDateString("pt-BR");
  }

  function planLabel(detail) {
    const name = String(detail?.plan?.name || detail?.plan_name || "DeskPro").trim();
    const limit = maximumWhatsapps(detail);
    return limit ? `${name} - ${limit} WhatsApps` : name;
  }

  function licenseExpired(detail) {
    if (!detail) return false;
    if (Number(detail.status) === 3 || detail.status === "expired") return true;
    const raw = detail.valid_until || detail.validUntil || detail.expire_at || detail.expiresAt;
    return raw ? new Date(raw).getTime() < Date.now() : false;
  }

  function getInstanceCount(originalSendSync) {
    try {
      const response = originalSendSync("task", { type: "instance.all" }) || {};
      const instances = response.instances || response.data?.instances || [];
      return Array.isArray(instances) ? instances.length : 0;
    } catch {
      return 0;
    }
  }

  function licenseStatusLabel(detail) {
    if (licenseExpired(detail)) return "Vencida";
    if (detail?.blocked || detail?.is_blocked || detail?.enable === false || Number(detail?.status) === 2) return "Bloqueada";
    return "Ativa";
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function findPanelCardFromTitle(titleNode) {
    const antCard = titleNode.closest?.(".ant-card");
    if (antCard) return antCard;

    let node = titleNode.parentElement;
    for (let depth = 0; node && depth < 6; depth += 1) {
      const text = String(node.textContent || "");
      if (text.includes("Ainda não há dados disponíveis por país") || text.includes("Ainda nÃ£o hÃ¡ dados disponÃ­veis por paÃ­s")) {
        return node;
      }
      node = node.parentElement;
    }
    return null;
  }

  function renderLicenseUsagePanel(originalSendSync) {
    if (!originalSendSync) return;

    const title = Array.from(document.querySelectorAll("div, span, h1, h2, h3, h4, h5")).find((node) => {
      const text = String(node.textContent || "").trim();
      return text === "Estatísticas dos países" ||
        text === "EstatÃ­sticas dos paÃ­ses" ||
        text === "Countries Statistics";
    });
    if (!title) return;

    const card = findPanelCardFromTitle(title);
    if (!card) return;

    const detail = normalizeLicenseDetail(originalSendSync);
    const limit = maximumWhatsapps(detail);
    const used = getInstanceCount(originalSendSync);
    const validUntil = detail.valid_until || detail.validUntil || detail.expire_at || detail.expiresAt;

    title.textContent = "Resumo de uso da licença";

    const body = card.querySelector?.(".ant-card-body") ||
      title.closest?.(".ant-card-head")?.nextElementSibling ||
      Array.from(card.children || []).find((child) => !child.contains(title));

    if (!body) return;

    body.innerHTML = `
      <div class="deskpro-license-usage">
        <div class="deskpro-license-usage-item">
          <span>Plano atual</span>
          <strong>${escapeHtml(planLabel(detail))}</strong>
        </div>
        <div class="deskpro-license-usage-item">
          <span>Validade da licença</span>
          <strong>${escapeHtml(formatDate(validUntil))}</strong>
        </div>
        <div class="deskpro-license-usage-item">
          <span>WhatsApps em uso</span>
          <strong>${used}${limit ? ` de ${limit}` : ""}</strong>
        </div>
        <div class="deskpro-license-usage-item">
          <span>Status da licença</span>
          <strong>${escapeHtml(licenseStatusLabel(detail))}</strong>
        </div>
      </div>
    `;
  }

  function syncDeviceHeadingLimit(originalSendSync) {
    if (!originalSendSync) return;

    const detail = normalizeLicenseDetail(originalSendSync);
    const limit = maximumWhatsapps(detail);
    if (!limit) return;

    const used = getInstanceCount(originalSendSync);
    document.querySelectorAll("h1, h2, h3, h4, h5, .ant-typography, [class*='title'], [class*='Title']").forEach((node) => {
      const text = String(node.textContent || "").trim();
      if (!/^(Dispositivos|Devices)\s*\(\d+\s*\/\s*\d+\)$/.test(text)) return;

      const label = text.startsWith("Devices") ? "Devices" : "Dispositivos";
      node.textContent = `${label} (${used}/${limit})`;
    });
  }

  function limitReached(originalSendSync) {
    const detail = normalizeLicenseDetail(originalSendSync);
    const limit = maximumWhatsapps(detail);
    return limit > 0 && getInstanceCount(originalSendSync) >= limit;
  }

  function showLimitWarning(originalSendSync) {
    const detail = normalizeLicenseDetail(originalSendSync);
    const limit = maximumWhatsapps(detail);
    const message = limit === 1
      ? "Seu plano permite apenas 1 WhatsApp."
      : `Seu plano permite até ${limit} WhatsApps.`;

    try {
      window.antdUtil?.message?.warning?.(message);
    } catch {
      window.alert(message);
    }
  }

  function ensureBrand() {
    if (document.getElementById("deskpro-app-brand")) return;
    const brand = document.createElement("div");
    brand.id = "deskpro-app-brand";
    brand.innerHTML = `<img src="${HEADER_LOGO}" alt="DeskPro">`;
    document.body.appendChild(brand);
  }

  function decorateLoadingScreens() {
    document.querySelectorAll(".app-loading-overlay").forEach((overlay) => {
      if (overlay.dataset.deskproLoadingModern === "true") return;
      overlay.dataset.deskproLoadingModern = "true";
      if (overlay.querySelector(".deskpro-loader")) return;
      overlay.innerHTML = `
        <main class="deskpro-loader" aria-live="polite" aria-label="Carregando o DeskPro">
          <div class="deskpro-loader-orbit"><img src="${LOGO}" alt=""></div>
          <h1>DeskPro</h1>
          <p class="deskpro-loader-kicker">Preparando seu ambiente...</p>
          <div class="deskpro-loader-track"><div class="deskpro-loader-progress"></div></div>
          <p class="deskpro-loader-note">Conectando seus recursos com segurança</p>
          <span class="deskpro-loader-version">versão 6.1.21</span>
        </main>`;
    });
  }

  function normalizeSidebarLabel(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function sidebarKeyFromItem(item) {
    const link = item.matches?.("a[href]") ? item : item.querySelector?.("a[href]");
    const href = String(link?.getAttribute?.("href") || "");
    const route = Array.from(SIDEBAR_ROUTES.keys())
      .filter((path) => path !== "/")
      .find((path) => href.includes(path));

    if (route) return SIDEBAR_ROUTES.get(route);

    const label = normalizeSidebarLabel(item.textContent);
    const labels = [
      ["disparo status", "status"],
      ["integracoes", "status"],
      ["integrations", "status"],
      ["mensagens recebidas", "received-messages"],
      ["received messages", "received-messages"],
      ["capturador de grupo", "group-grabber"],
      ["group grabber", "group-grabber"],
      ["filtro numerico", "number-filter"],
      ["number filter", "number-filter"],
      ["cancelar inscricao", "unsubscribes"],
      ["unsubscribes", "unsubscribes"],
      ["mensagem de boas-vindas", "welcome-message"],
      ["welcome message", "welcome-message"],
      ["resposta automatica", "auto-reply"],
      ["auto reply", "auto-reply"],
      ["enviar mensagem", "send-message"],
      ["send message", "send-message"],
      ["dispositivos", "devices"],
      ["devices", "devices"],
      ["modelos", "templates"],
      ["templates", "templates"],
      ["contatos", "contacts"],
      ["contacts", "contacts"],
      ["relatorio", "report"],
      ["report", "report"],
      ["contexto", "setting"],
      ["settings", "setting"],
      ["painel", "dashboard"],
      ["dashboard", "dashboard"]
    ];

    return labels.find(([text]) => label === text || label.startsWith(`${text} `))?.[1] || null;
  }

  function parseVisibleColor(value) {
    const match = String(value || "").match(/rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)(?:[, /]+([\d.]+))?\)/i);
    if (!match || (match[4] !== undefined && Number(match[4]) < 0.15)) return null;
    return [Number(match[1]), Number(match[2]), Number(match[3])];
  }

  function isDarkSurface(nodes) {
    if (document.querySelector("button .anticon-sun")) return true;
    if (document.querySelector("button .anticon-moon")) return false;

    for (const node of nodes) {
      if (!node) continue;
      const color = parseVisibleColor(getComputedStyle(node).backgroundColor);
      if (!color) continue;
      const [red, green, blue] = color.map((channel) => {
        const normalized = channel / 255;
        return normalized <= 0.04045
          ? normalized / 12.92
          : Math.pow((normalized + 0.055) / 1.055, 2.4);
      });
      return (0.2126 * red + 0.7152 * green + 0.0722 * blue) < 0.24;
    }
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches || false;
  }

  function decorateSidebar() {
    const sidebars = Array.from(document.querySelectorAll("aside.ant-layout-sider, .ant-layout-sider:not(.ant-layout-sider-children)"))
      .filter((node) => node.querySelector?.(".ant-menu, [role='menu']"));

    if (!sidebars.length) return;

    const sidebar = sidebars.find((node) => {
      const rect = node.getBoundingClientRect?.();
      return rect && rect.left < 10 && rect.width > 40;
    }) || sidebars[0];

    sidebar.dataset.deskproSidebar = "true";
    sidebar.querySelectorAll("li.ant-menu-item, [role='menuitem']").forEach((item) => {
      const key = sidebarKeyFromItem(item);
      if (key && item.dataset.deskproNav !== key) item.dataset.deskproNav = key;
    });

    const rect = sidebar.getBoundingClientRect?.();
    const collapsed = sidebar.classList.contains("ant-layout-sider-collapsed") || (rect && rect.width < 120);
    document.documentElement.dataset.deskproSidebarCollapsed = collapsed ? "true" : "false";
    document.documentElement.dataset.deskproTheme = isDarkSurface([
      document.querySelector("#test-pro-layout > .ant-layout"),
      document.querySelector(".ant-layout"),
      document.body
    ]) ? "dark" : "light";

    const brandImage = document.querySelector("#deskpro-app-brand img");
    if (brandImage) {
      const source = collapsed ? LOGO : HEADER_LOGO;
      if (!brandImage.getAttribute("src")?.endsWith(source.replace("./", ""))) brandImage.src = source;
    }
  }

  function hideLegacyUpdateModals() {
    document.querySelectorAll('[role="dialog"], .ant-modal, .ant-message-notice, .ant-notification-notice').forEach((node) => {
      const text = String(node.textContent || "");
      if (isLegacyUpdateText(text)) {
        node.dataset.deskproHidden = "true";
      }
    });

    const visibleDialogs = Array.from(document.querySelectorAll(".ant-modal, [role='dialog']")).filter((node) => {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      return rect.width > 20 && rect.height > 20 && style.display !== "none" && style.visibility !== "hidden";
    });

    if (!visibleDialogs.length) {
      document.querySelectorAll(".ant-modal-mask, .ant-modal-wrap").forEach((node) => {
        node.dataset.deskproHidden = "true";
        node.style.pointerEvents = "none";
      });
      document.body.classList.remove("ant-scrolling-effect");
      document.body.style.overflow = "";
      document.body.style.width = "";
    }
  }

  function hideLegacyUpdateControls() {
    const labels = [
      "verifique as atualizacoes",
      "verifique as atualizaÃ§Ãµes",
      "verifique as atualizações",
      "verificando atualizacao",
      "verificando atualização",
      "verificando atualizaÃ§Ã£o",
      "check update",
      "check updates"
    ];

    document.querySelectorAll("button, [role='button']").forEach((node) => {
      const text = String(node.textContent || "").trim().toLowerCase();
      if (labels.some((label) => text.includes(label))) {
        node.dataset.deskproHidden = "true";
        node.style.display = "none";
        node.style.pointerEvents = "none";
      }
    });
  }

  function hideLegacyUpdateStatus() {
    const updateTexts = [
      "verificando atualizacao",
      "verificando atualização",
      "verificando atualizaÃ§Ã£o",
      "checking update",
      "checking for update"
    ];

    document.querySelectorAll("div, span, p").forEach((node) => {
      const text = String(node.textContent || "").trim().toLowerCase();
      if (!text || !updateTexts.some((label) => text.includes(label))) return;

      let target = node;
      for (let depth = 0; target.parentElement && depth < 4; depth += 1) {
        const parentText = String(target.parentElement.textContent || "").trim().toLowerCase();
        if (parentText.includes(text) && parentText.length < 100) {
          target = target.parentElement;
        }
      }

      target.dataset.deskproHidden = "true";
      target.style.display = "none";
      target.style.pointerEvents = "none";
    });

    document.querySelectorAll(".ant-progress, .ant-progress-circle, .ant-progress-text").forEach((node) => {
      const text = String(node.textContent || "").trim().toLowerCase();
      if (text === "0%" || text.includes("verificando")) {
        node.dataset.deskproHidden = "true";
        node.style.display = "none";
        node.style.pointerEvents = "none";
      }
    });
  }

  function hideRenewAndSupportControls() {
    document.querySelectorAll("button, a, [role='button']").forEach((node) => {
      const text = String(node.textContent || "").trim().toLowerCase();
      const isHeaderValidityDate = /^\d{1,2}\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|jan|fev|abr|mai|ago|set|out|dez)\s+\d{4}$/i.test(text) ||
        /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(text);
      if (text === "renovar" || isHeaderValidityDate) {
        node.dataset.deskproHidden = "true";
        node.style.display = "none";
        node.style.pointerEvents = "none";
      }
    });

    document.querySelectorAll(
      "#deskpro-support-fab, .ant-float-btn, .ant-float-btn-group, .ant-float-btn-body"
    ).forEach((node) => {
      node.dataset.deskproHidden = "true";
      node.style.display = "none";
      node.style.pointerEvents = "none";
    });
  }

  function runStartupCleanup() {
    let attempts = 0;
    const tick = () => {
      hideLegacyUpdateControls();
      hideLegacyUpdateModals();
      hideLegacyUpdateStatus();
      hideRenewAndSupportControls();
      renderLicenseUsagePanel(taskSendSync);
      attempts += 1;
      if (attempts < 8) setTimeout(tick, 650);
    };
    tick();
  }

  function shouldBlockAntdPayload(payload) {
    if (!payload) return false;
    if (typeof payload === "string") return isLegacyUpdateText(payload);
    if (typeof payload !== "object") return false;
    return isLegacyUpdateText(payload.title) ||
      isLegacyUpdateText(payload.content) ||
      isLegacyUpdateText(payload.message) ||
      isLegacyUpdateText(payload.description);
  }

  function patchAntdUtilObject(value) {
    if (!value || typeof value !== "object" || value.__deskproPatched) return value;
    try {
      if (value.modal && typeof value.modal === "object") {
        ["error", "warning", "confirm", "info"].forEach((method) => {
          const original = value.modal[method];
          if (typeof original !== "function") return;
          value.modal[method] = function deskproModalGuard(payload, ...rest) {
            if (shouldBlockAntdPayload(payload)) {
              hideLegacyUpdateModals();
              return null;
            }
            return original.call(this, payload, ...rest);
          };
        });
      }
      if (value.message && typeof value.message === "object") {
        ["error", "warning"].forEach((method) => {
          const original = value.message[method];
          if (typeof original !== "function") return;
          value.message[method] = function deskproMessageGuard(payload, ...rest) {
            if (shouldBlockAntdPayload(payload)) return null;
            return original.call(this, payload, ...rest);
          };
        });
      }
      Object.defineProperty(value, "__deskproPatched", { value: true, enumerable: false });
    } catch {
      // UI patching must never block the original app.
    }
    return value;
  }

  function installAntdGuard() {
    let current = patchAntdUtilObject(window.antdUtil);
    try {
      Object.defineProperty(window, "antdUtil", {
        configurable: true,
        get() {
          return current;
        },
        set(value) {
          current = patchAntdUtilObject(value);
        }
      });
    } catch {
      patchAntdUtilObject(window.antdUtil);
    }
  }

  function showExpiredLicense(detail, originalSendSync) {
    window.__deskproExpiredLicenseRenewal = true;
    document.getElementById("deskpro-activation")?.remove();
    if (document.getElementById("deskpro-expired")) return;

    const validUntil = detail?.valid_until || detail?.validUntil || detail?.expire_at;
    const overlay = document.createElement("section");
    overlay.id = "deskpro-expired";
    overlay.innerHTML = `
      <div class="deskpro-renewal-card">
        <img class="deskpro-renewal-logo" src="${LOGO}" alt="DeskPro">
        <h2>Seu plano venceu</h2>
        <p>Renove seu plano para continuar usando todos os recursos do DeskPro.</p>
        <div class="deskpro-expired-badge">Vencimento: ${formatDate(validUntil)}</div>
        <p><strong>Plano:</strong> ${planLabel(detail)}</p>
        <p>Após a confirmação do Pix, a licença será liberada automaticamente pelo período contratado.</p>
        <button class="deskpro-renew-button" type="button">Gerar Pix para renovar</button>
        <div class="deskpro-pix-box">
          <img class="deskpro-pix-image" alt="QR Code Pix">
          <div class="deskpro-pix-code"></div>
          <button class="deskpro-copy-pix" type="button">Copiar código Pix</button>
          <p class="deskpro-renew-status">Aguardando confirmação do pagamento...</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const button = overlay.querySelector(".deskpro-renew-button");
    const pixBox = overlay.querySelector(".deskpro-pix-box");
    const status = overlay.querySelector(".deskpro-renew-status");
    const renewalLicenseKey = detail?.key ||
      detail?.license_key ||
      detail?.licenseKey ||
      licenseKey(originalSendSync);

    async function finishApprovedRenewal(state) {
      clearTimeout(renewalPoll);
      renewalPoll = null;
      status.textContent = "Pagamento aprovado. Atualizando sua licença...";

      if (state?.detail) remoteDetail = state.detail;

      for (let attempt = 0; attempt < 10; attempt += 1) {
        try {
          const response = originalSendSync("task", {
            type: "license.check",
            data: { key: renewalLicenseKey }
          });
          if (response?.status) {
            remoteDetail = response.detail || state?.detail || remoteDetail;
            window.__deskproExpiredLicenseRenewal = false;
            window.ipcRenderer?.send?.("deskpro-activation-state", { required: false });
            document.getElementById("deskpro-activation")?.remove();
            document.getElementById("deskpro-expired")?.remove();
            status.textContent = "Licença renovada. Abrindo o DeskPro...";
            setTimeout(() => window.location.reload(), 150);
            return;
          }
        } catch {
          // The server may still be completing the same database transaction.
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      status.textContent = "Pagamento aprovado. Sincronizando sua licença...";
      renewalPoll = setTimeout(() => finishApprovedRenewal(state), 1500);
    }

    function scheduleRenewalStatusCheck(renewalId) {
      clearTimeout(renewalPoll);
      renewalPoll = setTimeout(async () => {
        try {
          const state = await api(
            `/api/desktop/renew/${encodeURIComponent(renewalId)}/status?licenseKey=${encodeURIComponent(renewalLicenseKey)}`
          );
          if (state.status === "approved") {
            await finishApprovedRenewal(state);
            return;
          }
          if (state.status === "rejected" || state.status === "cancelled") {
            status.textContent = "Pagamento não aprovado. Gere um novo Pix.";
            button.disabled = false;
            button.textContent = "Gerar novo Pix";
            return;
          }
        } catch {
          // Keep polling while the payment provider or network is temporarily unavailable.
        }
        scheduleRenewalStatusCheck(renewalId);
      }, 1500);
    }

    button.addEventListener("click", async () => {
      button.disabled = true;
      button.textContent = "Gerando Pix...";
      try {
        const result = await api("/api/desktop/renew/create-pix", {
          method: "POST",
          body: JSON.stringify({ licenseKey: renewalLicenseKey })
        });
        if (!result.qrCodeBase64 || !result.qrCode) {
          throw new Error("O Mercado Pago não retornou o QR Code Pix.");
        }
        overlay.querySelector(".deskpro-pix-image").src = `data:image/png;base64,${result.qrCodeBase64}`;
        overlay.querySelector(".deskpro-pix-code").textContent = result.qrCode || "";
        pixBox.classList.add("visible");
        button.textContent = `Pix gerado - R$ ${Number(result.price).toFixed(2).replace(".", ",")}`;

        scheduleRenewalStatusCheck(result.renewalId);
      } catch (error) {
        status.textContent = error?.message || "Não foi possível gerar o Pix.";
        pixBox.classList.add("visible");
        overlay.querySelector(".deskpro-pix-image").style.display = "none";
        overlay.querySelector(".deskpro-pix-code").style.display = "none";
        overlay.querySelector(".deskpro-copy-pix").style.display = "none";
        button.disabled = false;
        button.textContent = "Tentar novamente";
      }
    });

    overlay.querySelector(".deskpro-copy-pix").addEventListener("click", async () => {
      const code = overlay.querySelector(".deskpro-pix-code").textContent;
      await navigator.clipboard.writeText(code);
      status.textContent = "Código Pix copiado.";
    });
  }

  function applyLicenseState(originalSendSync) {
    const current = getStoredLicense(originalSendSync);
    const detail = normalizeLicenseDetail(originalSendSync);
    if (current.state === "expired" && detail.key) {
      showExpiredLicense(detail, originalSendSync);
      window.__deskproRenderActivation?.();
      return;
    }
    window.__deskproExpiredLicenseRenewal = false;
    document.getElementById("deskpro-expired")?.remove();
  }

  async function refreshLicenseDetail(originalSendSync) {
    if (detailRequestRunning) return;
    detailRequestRunning = true;
    try {
      await window.__deskproRefreshLicense?.(true);
    } catch {
      // Keep local license details when offline.
    } finally {
      detailRequestRunning = false;
      applyLicenseState(originalSendSync);
    }
  }

  function readInstances(originalSendSync) {
    if (!originalSendSync) return [];
    try {
      const response = originalSendSync("task", { type: "instance.all" }) || {};
      const instances = response.instances || response.data?.instances || [];
      return Array.isArray(instances) ? instances : [];
    } catch {
      return [];
    }
  }

  function instanceKey(instance, index) {
    return String(instance?._id || instance?.id || instance?.key || instance?.name || index);
  }

  function instanceName(instance, index) {
    return String(instance?.name || instance?.phone || instance?.number || `Conexão ${index + 1}`);
  }

  function isReadyInstance(instance) {
    const status = String(instance?.status || "").toLowerCase();
    return status === "ready" || status === "connected" || status === "conectado";
  }

  function isStatusSidebarItem(node) {
    if (!(node instanceof HTMLElement)) return false;
    const clickable = node.closest?.("a, button, li, [role='menuitem']") || node;
    if (!(clickable instanceof HTMLElement)) return false;
    const rect = clickable.getBoundingClientRect?.();
    if (rect && rect.left > 245) return false;
    const raw = String(clickable.textContent || "").trim();
    const text = raw.toLowerCase();
    const normalizedText = text.normalize?.("NFD").replace(/[\u0300-\u036f]/g, "") || text;
    const compact = normalizedText.replace(/\s+/g, " ").trim();
    return compact === "integracoes" || compact === "disparo status" || compact === "integrations";
  }

  function replaceIntegrationsMenu() {
    document.querySelectorAll("a, button, li, [role='menuitem']").forEach((clickable) => {
      if (!isStatusSidebarItem(clickable)) return;
      const candidates = [clickable, ...clickable.querySelectorAll?.("span, div, p") || []];
      const labelHost = candidates.find((candidate) => {
        if (!(candidate instanceof HTMLElement) || candidate.children.length) return false;
        const text = String(candidate.textContent || "").normalize?.("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
        return text === "integracoes" || text === "integrations" || text === "disparo status";
      });
      if (labelHost && labelHost.textContent !== "Disparo Status") labelHost.textContent = "Disparo Status";
      clickable.classList?.add?.("deskpro-status-menu-item");
    });
  }

  function shouldRenderStatusPage() {
    return Boolean(window.__deskproStatusRouteRequested);
  }

  function findMainContent() {
    let host = document.getElementById("deskpro-status-host");
    if (!host) {
      host = document.createElement("section");
      host.id = "deskpro-status-host";
    }
    if (host.parentElement !== document.body) document.body.appendChild(host);
    document.getElementById("deskpro-status-shield")?.remove?.();
    host.setAttribute("aria-live", "polite");
    host.classList.add("visible");
    return host;
  }

  function startStatusIsolation() {
    replaceIntegrationsMenu();
    suppressStatusBackgroundNoise();
  }

  function stopStatusIsolation() {
    if (!window.__deskproStatusIsolationTimer) return;
    clearInterval(window.__deskproStatusIsolationTimer);
    window.__deskproStatusIsolationTimer = null;
  }

  function hideStatusBackgroundNoise() {
    return;
  }

  function suppressStatusBackgroundNoise() {
    const host = document.getElementById("deskpro-status-host");
    if (!host?.classList.contains("visible")) return;
    host.classList.add("visible");
  }

  function restoreStatusBackgroundNoise() {
    document.querySelectorAll("[data-deskpro-status-hidden='true']").forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      node.style.visibility = node.dataset.deskproStatusVisibility || "";
      node.style.pointerEvents = node.dataset.deskproStatusPointerEvents || "";
      node.style.opacity = node.dataset.deskproStatusOpacity || "";
      node.style.display = node.dataset.deskproStatusDisplay || "";
      delete node.dataset.deskproStatusHidden;
      delete node.dataset.deskproStatusVisibility;
      delete node.dataset.deskproStatusPointerEvents;
      delete node.dataset.deskproStatusOpacity;
      delete node.dataset.deskproStatusDisplay;
    });
  }

  function hideStatusPage() {
    stopStatusIsolation();
    const host = document.getElementById("deskpro-status-host");
    if (host) {
      host.classList.remove("visible");
      host.style.display = "none";
    }
    const shield = document.getElementById("deskpro-status-shield");
    if (shield) {
      shield.classList.remove("visible");
      shield.style.display = "none";
      shield.style.pointerEvents = "none";
    }
    document.body?.classList?.remove?.("deskpro-status-active");
    restoreStatusBackgroundNoise();
    window.__deskproStatusRouteRequested = false;
    window.__deskproStatusViewsRefreshedForRoute = false;
    delete window.__deskproRefreshStatusViews;
  }

  function statusFonts() {
    return [
      { label: "Padrão", value: 0 },
      { label: "Serif", value: 1 },
      { label: "Script", value: 2 },
      { label: "Monospace", value: 3 },
      { label: "Negrito", value: 4 },
      { label: "Itálico", value: 5 }
    ];
  }

  function statusColors() {
    return ["#22c55e", "#16a34a", "#2563eb", "#0ea5e9", "#9333ea", "#e11d48", "#f97316", "#facc15", "#111827", "#64748b", "#ffffff"];
  }

  const STATUS_HISTORY_KEY = "deskpro_status_history_v2";

  function statusTypeLabel(type) {
    const labels = { text: "Texto", image: "Imagem", video: "Vídeo", audio: "Áudio" };
    return labels[String(type || "text").toLowerCase()] || "Status";
  }

  function formatStatusDate(value) {
    try {
      return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(value));
    } catch {
      return "";
    }
  }

  function readStatusHistory() {
    try {
      const items = JSON.parse(localStorage.getItem(STATUS_HISTORY_KEY) || "[]");
      return Array.isArray(items) ? items : [];
    } catch {
      return [];
    }
  }

  function writeStatusHistory(items) {
    try {
      localStorage.setItem(STATUS_HISTORY_KEY, JSON.stringify(items.slice(0, 60)));
    } catch {}
  }

  function statusSummary(response) {
    const results = Array.isArray(response?.results) ? response.results : [];
    const ok = results.filter((item) => item.status).length;
    if (ok) {
      return `Status publicado em ${ok} ${ok === 1 ? "perfil" : "perfis"}.`;
    }
    return response?.message || "Não foi possível postar o status.";
  }

  function normalizeStatusHistoryMessage(item) {
    const text = String(item?.message || "").trim();
    if (!text) return "Aguardando nova ação.";
    if (/(contato|conex)/i.test(text) || /^enviado/i.test(text)) {
      const count = Math.max(1, Array.isArray(item?.instanceIds) ? item.instanceIds.length : Number(item?.successCount || 1));
      return `Status publicado em ${count} ${count === 1 ? "perfil" : "perfis"}.`;
    }
    return text;
  }

  async function postStatusPayload(originalSendSync, record) {
    const data = {
      instanceIds: record.instanceIds || [],
      statusType: record.statusType,
      text: record.text || "",
      caption: record.text || "",
      backgroundColor: record.backgroundColor || "#22c55e",
      font: Number(record.font || 0),
      filePath: record.filePath || ""
    };
    try {
      const contactsResponse = originalSendSync("task", { type: "contact.all" }) || {};
      data.visibilityContacts = Array.isArray(contactsResponse.contacts)
        ? contactsResponse.contacts
        : Array.isArray(contactsResponse.data?.contacts)
          ? contactsResponse.data.contacts
          : [];
    } catch {
      data.visibilityContacts = [];
    }
    if (window.__deskproIpcRenderer?.invoke) {
      return await window.__deskproIpcRenderer.invoke("deskpro-status-post", data);
    }
    return originalSendSync("task", {
      type: "deskpro.status.post",
      data
    }) || {};
  }

  async function readStatusViewsPayload(originalSendSync, posts) {
    if (window.__deskproIpcRenderer?.invoke) {
      return await window.__deskproIpcRenderer.invoke("deskpro-status-views", { posts });
    }
    return originalSendSync("task", {
      type: "deskpro.status.views",
      data: { posts }
    }) || {};
  }

  function clearStatusTimer(id) {
    if (window.__deskproStatusRepostTimers?.[id]) {
      clearInterval(window.__deskproStatusRepostTimers[id]);
      delete window.__deskproStatusRepostTimers[id];
    }
  }

  function scheduleStatusRepost(originalSendSync, record, onUpdate) {
    window.__deskproStatusRepostTimers = window.__deskproStatusRepostTimers || {};
    clearStatusTimer(record.id);
    if (!record.repost || !record.active) return;
    window.__deskproStatusRepostTimers[record.id] = setInterval(async () => {
      try {
        const response = await postStatusPayload(originalSendSync, record);
        const items = readStatusHistory();
        const index = items.findIndex((item) => item.id === record.id);
        if (index >= 0) {
          items[index] = {
            ...items[index],
            lastPostAt: Date.now(),
            status: response.status ? "Publicado" : "Erro",
            message: statusSummary(response),
            results: response.results || []
          };
          writeStatusHistory(items);
          onUpdate?.();
        }
      } catch {}
    }, 24 * 60 * 60 * 1000);
  }

  function renderStatusPage(originalSendSync) {
    if (!shouldRenderStatusPage() || !originalSendSync) {
      if (!window.__deskproStatusRouteRequested) hideStatusPage();
      return;
    }
    const stableHost = document.getElementById("deskpro-status-host");
    if (stableHost?.dataset?.deskproStatusPage === "true" && stableHost.classList.contains("visible")) {
      replaceIntegrationsMenu();
      suppressStatusBackgroundNoise();
      startStatusIsolation();
      void window.__deskproRefreshStatusViews?.();
      return;
    }
    const main = findMainContent();
    if (!main) return;
    if (main.dataset.deskproStatusPage === "true") return;
    const instances = readInstances(originalSendSync);
    const ready = instances.filter(isReadyInstance);
    const selected = ready.map((instance, index) => instanceKey(instance, index));
    const readyNames = new Map(ready.map((instance, index) => [instanceKey(instance, index), instanceName(instance, index)]));
    main.dataset.deskproStatusPage = "true";
    main.innerHTML = `
      <section class="deskpro-status-page">
        <div class="deskpro-status-header">
          <div>
            <h1>Disparo Status</h1>
            <p>Escolha as conexões e publique texto, imagem, vídeo ou áudio no status do WhatsApp.</p>
          </div>
          <div class="deskpro-status-header-actions">
            <button class="deskpro-status-back" type="button" title="Voltar para o sistema">
              <span aria-hidden="true">←</span> Voltar ao menu
            </button>
            <button class="deskpro-status-refresh" type="button">Atualizar conexões</button>
            <button class="deskpro-status-close-app" type="button" title="Fechar o DeskPro">
              <span aria-hidden="true">×</span> Fechar DeskPro
            </button>
          </div>
        </div>

        <div class="deskpro-status-card">
          <h2>Conexões</h2>
          <div class="deskpro-status-instances">
            ${ready.length ? ready.map((instance, index) => {
              const key = instanceKey(instance, index);
              return `
                <label class="deskpro-status-instance">
                  <input type="checkbox" value="${escapeHtml(key)}" checked>
                  <span>
                    <strong>${escapeHtml(instanceName(instance, index))}</strong>
                    <small>Pronta para postar status</small>
                  </span>
                </label>
              `;
            }).join("") : `<div class="deskpro-status-empty">Nenhuma conexão pronta. Conecte um WhatsApp em Dispositivos primeiro.</div>`}
          </div>
        </div>

        <div class="deskpro-status-card">
          <div class="deskpro-status-tabs">
            <button class="active" type="button" data-status-type="text">Texto</button>
            <button type="button" data-status-type="image">Imagem</button>
            <button type="button" data-status-type="video">Vídeo</button>
            <button type="button" data-status-type="audio">Áudio</button>
          </div>

          <label class="deskpro-status-label" data-text-label>Legenda / texto</label>
          <textarea class="deskpro-status-text" placeholder="Digite o conteúdo do status"></textarea>

          <div class="deskpro-status-media" hidden>
            <button class="deskpro-status-file" type="button">Selecionar arquivo</button>
            <span class="deskpro-status-file-name">Nenhum arquivo selecionado</span>
          </div>

          <div class="deskpro-status-options" data-text-options>
            <span>Cor de fundo</span>
            <div class="deskpro-status-colors">
              ${statusColors().map((color, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-color="${color}" style="background:${color}"></button>`).join("")}
            </div>
            <span>Estilo da fonte</span>
            <div class="deskpro-status-fonts">
              ${statusFonts().map((font, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-font="${font.value}">${escapeHtml(font.label)}</button>`).join("")}
            </div>
          </div>

          <label class="deskpro-status-repost">
            <input type="checkbox">
            <span>
              <strong>Repostar a cada 24h</strong>
              <small>Funciona enquanto o DeskPro estiver aberto.</small>
            </span>
          </label>

          <button class="deskpro-status-submit" type="button" ${selected.length ? "" : "disabled"}>Postar status em ${selected.length} ${selected.length === 1 ? "perfil" : "perfis"}</button>
          <div class="deskpro-status-result"></div>
        </div>

        <div class="deskpro-status-card deskpro-status-history-card">
          <div class="deskpro-status-history-head">
            <div>
              <h2>Relatório de status</h2>
              <p>Veja as postagens feitas pelo DeskPro e controle as repostagens automáticas.</p>
            </div>
            <button class="deskpro-status-clear-history" type="button">Limpar relatório</button>
          </div>
          <div class="deskpro-status-history"></div>
        </div>
      </section>
    `;

    const state = {
      statusType: "text",
      backgroundColor: "#22c55e",
      font: 0,
      filePath: "",
      fileName: "",
      editingId: ""
    };
    const renderHistory = () => {
      const history = main.querySelector(".deskpro-status-history");
      if (!history) return;
      const items = readStatusHistory();
      if (!items.length) {
        history.innerHTML = `<div class="deskpro-status-empty">Nenhum status postado ainda.</div>`;
        return;
      }
      history.innerHTML = `
        <div class="deskpro-status-history-table">
          <div class="deskpro-status-history-row deskpro-status-history-title">
            <span>Tipo</span>
            <span>Conteúdo</span>
            <span>Perfis</span>
            <span>Visualiza&ccedil;&otilde;es</span>
            <span>Resultado</span>
            <span>Ações</span>
          </div>
          ${items.map((item) => {
            const active = item.repost && item.active;
            const status = item.status || (active ? "Repostagem ativa" : "Publicado");
            const content = item.fileName || item.text || "Sem legenda";
            const trackedResults = (item.results || []).filter((entry) => entry?.messageKey?.id);
            const viewerCount = trackedResults.reduce((total, entry) => total + Math.max(0, Number(entry.viewerCount || 0)), 0);
            const viewsText = trackedResults.length
              ? `${viewerCount} ${viewerCount === 1 ? "visualiza\u00e7\u00e3o" : "visualiza\u00e7\u00f5es"}`
              : "Aguardando dados";
            return `
              <div class="deskpro-status-history-row" data-history-id="${escapeHtml(item.id)}">
                <span>
                  <strong>${escapeHtml(statusTypeLabel(item.statusType))}</strong>
                  <small>${escapeHtml(formatStatusDate(item.lastPostAt || item.createdAt))}</small>
                </span>
                <span>
                  <strong>${escapeHtml(content)}</strong>
                  <small>${item.repost ? "Repostar a cada 24h" : "Postagem única"}</small>
                </span>
                <span>${escapeHtml((item.instanceNames || []).join(", ") || `${(item.instanceIds || []).length} ${(item.instanceIds || []).length === 1 ? "perfil" : "perfis"}`)}</span>
                <span>
                  <strong>${escapeHtml(viewsText)}</strong>
                  <small>Atualizado ao abrir esta aba</small>
                </span>
                <span>
                  <strong class="${item.status === "Erro" ? "deskpro-status-bad" : "deskpro-status-good"}">${escapeHtml(status)}</strong>
                  <small>${escapeHtml(normalizeStatusHistoryMessage(item))}</small>
                </span>
                <span class="deskpro-status-actions">
                  <button type="button" data-action="edit">Editar</button>
                  <button type="button" data-action="pause">${active ? "Pausar" : "Ativar"}</button>
                  <button type="button" data-action="delete">Apagar</button>
                </span>
              </div>
            `;
          }).join("")}
        </div>
      `;
      history.querySelectorAll("[data-action]").forEach((button) => {
        button.addEventListener("click", () => {
          const row = button.closest("[data-history-id]");
          const id = row?.dataset.historyId || "";
          const itemsNow = readStatusHistory();
          const item = itemsNow.find((entry) => entry.id === id);
          if (!item) return;
          const action = button.dataset.action;
          if (action === "edit") {
            state.editingId = item.id;
            state.statusType = item.statusType || "text";
            state.backgroundColor = item.backgroundColor || "#22c55e";
            state.font = Number(item.font || 0);
            state.filePath = item.filePath || "";
            state.fileName = item.fileName || "";
            main.querySelectorAll("[data-status-type]").forEach((tab) => {
              tab.classList.toggle("active", tab.dataset.statusType === state.statusType);
            });
            main.querySelector(".deskpro-status-text").value = item.text || "";
            main.querySelector(".deskpro-status-repost input").checked = Boolean(item.repost);
            main.querySelector(".deskpro-status-media").hidden = state.statusType === "text";
            main.querySelector("[data-text-options]").hidden = state.statusType !== "text";
            main.querySelector("[data-text-label]").textContent = state.statusType === "text" ? "Legenda / texto" : "Legenda";
            main.querySelector(".deskpro-status-file-name").textContent = state.fileName || "Nenhum arquivo selecionado";
            main.querySelectorAll(".deskpro-status-instance input").forEach((input) => {
              input.checked = (item.instanceIds || []).includes(input.value);
            });
            updateSubmit();
            setResult("Postagem carregada para edição.", true);
            return;
          }
          if (action === "pause") {
            const updated = itemsNow.map((entry) => entry.id === id ? { ...entry, active: !entry.active } : entry);
            writeStatusHistory(updated);
            clearStatusTimer(id);
            const changed = updated.find((entry) => entry.id === id);
            if (changed?.active) scheduleStatusRepost(originalSendSync, changed, renderHistory);
            renderHistory();
            return;
          }
          if (action === "delete") {
            clearStatusTimer(id);
            try {
              const posts = (item.results || []).filter((entry) => entry.messageKey).map((entry) => ({
                instanceId: entry.id,
                messageKey: entry.messageKey
              }));
              if (posts.length) originalSendSync("task", { type: "deskpro.status.delete", data: { posts } });
            } catch {}
            writeStatusHistory(itemsNow.filter((entry) => entry.id !== id));
            renderHistory();
          }
        });
      });
    };
    const refreshStatusViewsOnce = async () => {
      if (window.__deskproStatusViewsRefreshedForRoute) return;
      window.__deskproStatusViewsRefreshedForRoute = true;
      const items = readStatusHistory();
      const posts = [];
      items.forEach((item) => {
        (item.results || []).forEach((result, resultIndex) => {
          if (!result?.messageKey?.id) return;
          posts.push({
            historyId: item.id,
            resultIndex,
            instanceId: result.id || result.instanceId || "",
            messageKey: result.messageKey
          });
        });
      });
      if (!posts.length) return;
      try {
        const response = await readStatusViewsPayload(originalSendSync, posts);
        const results = Array.isArray(response?.results) ? response.results : [];
        if (!response?.status || !results.length) return;
        const viewsByPost = new Map(results.map((result) => [
          `${result.instanceId || ""}:${result.messageId || ""}`,
          result
        ]));
        const updated = items.map((item) => ({
          ...item,
          results: (item.results || []).map((result) => {
            const key = `${result.id || result.instanceId || ""}:${result.messageKey?.id || ""}`;
            const views = viewsByPost.get(key);
            return views ? {
              ...result,
              viewerCount: Math.max(0, Number(views.viewerCount || 0)),
              viewsUpdatedAt: views.updatedAt || Date.now()
            } : result;
          })
        }));
        writeStatusHistory(updated);
        renderHistory();
      } catch (error) {
        console.warn("[DeskPro] Nao foi possivel atualizar as visualizacoes do status.", error);
      }
    };
    window.__deskproRefreshStatusViews = refreshStatusViewsOnce;
    const updateSubmit = () => {
      const count = main.querySelectorAll(".deskpro-status-instance input:checked").length;
      const button = main.querySelector(".deskpro-status-submit");
      button.disabled = count === 0;
      button.textContent = `Postar status em ${count} ${count === 1 ? "perfil" : "perfis"}`;
    };
    const setResult = (message, ok = true) => {
      const result = main.querySelector(".deskpro-status-result");
      result.textContent = message || "";
      result.className = `deskpro-status-result ${ok ? "success" : "error"}`;
    };
    const post = async () => {
      const instanceIds = Array.from(main.querySelectorAll(".deskpro-status-instance input:checked")).map((input) => input.value);
      const text = main.querySelector(".deskpro-status-text").value.trim();
      const repost = main.querySelector(".deskpro-status-repost input").checked;
      const now = Date.now();
      const baseRecord = {
        id: state.editingId || `${now.toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        statusType: state.statusType,
        text,
        backgroundColor: state.backgroundColor,
        font: state.font,
        filePath: state.filePath,
        fileName: state.fileName,
        instanceIds,
        instanceNames: instanceIds.map((id) => readyNames.get(id) || id),
        repost,
        active: repost,
        createdAt: now,
        lastPostAt: now
      };
      const submit = main.querySelector(".deskpro-status-submit");
      submit.disabled = true;
      setResult("Postando status...", true);
      try {
        const response = await postStatusPayload(originalSendSync, baseRecord);
        const message = statusSummary(response);
        setResult(message, Boolean(response.status));
        const items = readStatusHistory();
        const previous = items.find((item) => item.id === baseRecord.id);
        const record = {
          ...previous,
          ...baseRecord,
          createdAt: previous?.createdAt || baseRecord.createdAt,
          status: response.status ? (repost ? "Repostagem ativa" : "Publicado") : "Erro",
          active: repost && Boolean(response.status),
          message,
          results: response.results || []
        };
        writeStatusHistory([record, ...items.filter((item) => item.id !== record.id)]);
        clearStatusTimer(record.id);
        if (record.active) scheduleStatusRepost(originalSendSync, record, renderHistory);
        state.editingId = "";
        renderHistory();
        try {
          if (response.status) window.antdUtil?.message?.success?.("Status postado com sucesso.");
          else window.antdUtil?.message?.error?.(response.message || "Não foi possível postar o status.");
        } catch {}
      } catch (error) {
        setResult(error?.message || "Erro ao postar status.", false);
      } finally {
        updateSubmit();
      }
    };

    main.querySelector(".deskpro-status-refresh").addEventListener("click", () => {
      main.dataset.deskproStatusPage = "";
      renderStatusPage(originalSendSync);
    });
    main.querySelector(".deskpro-status-back").addEventListener("click", () => {
      hideStatusPage();
      replaceIntegrationsMenu();
      requestAnimationFrame(() => {
        document.querySelector("[data-deskpro-sidebar='true'] .ant-menu-item-selected")?.focus?.();
      });
    });
    main.querySelector(".deskpro-status-close-app").addEventListener("click", () => {
      try {
        const ipc = window.__deskproIpcRenderer || window.ipcRenderer;
        ipc?.send?.("deskpro-status-close-app");
        setTimeout(() => window.close(), 180);
      } catch {
        window.close();
      }
    });
    main.querySelectorAll(".deskpro-status-instance input").forEach((input) => input.addEventListener("change", updateSubmit));
    main.querySelectorAll("[data-status-type]").forEach((button) => {
      button.addEventListener("click", () => {
        state.statusType = button.dataset.statusType;
        main.querySelectorAll("[data-status-type]").forEach((item) => item.classList.toggle("active", item === button));
        const media = state.statusType !== "text";
        main.querySelector(".deskpro-status-media").hidden = !media;
        main.querySelector("[data-text-options]").hidden = media;
        main.querySelector("[data-text-label]").textContent = media ? "Legenda" : "Legenda / texto";
      });
    });
    main.querySelectorAll("[data-color]").forEach((button) => {
      button.addEventListener("click", () => {
        state.backgroundColor = button.dataset.color;
        main.querySelectorAll("[data-color]").forEach((item) => item.classList.toggle("active", item === button));
      });
    });
    main.querySelectorAll("[data-font]").forEach((button) => {
      button.addEventListener("click", () => {
        state.font = Number(button.dataset.font || 0);
        main.querySelectorAll("[data-font]").forEach((item) => item.classList.toggle("active", item === button));
      });
    });
    main.querySelector(".deskpro-status-file").addEventListener("click", () => {
      const response = originalSendSync("task", { type: "deskpro.status.pick-file", data: { statusType: state.statusType } }) || {};
      if (!response.status || !response.filePath) {
        if (response.message) setResult(response.message, false);
        return;
      }
      state.filePath = response.filePath;
      state.fileName = response.filePath.split(/[\\/]/).pop();
      main.querySelector(".deskpro-status-file-name").textContent = state.fileName;
      setResult("");
    });
    main.querySelector(".deskpro-status-submit").addEventListener("click", () => {
      void post();
    });
    main.querySelector(".deskpro-status-clear-history").addEventListener("click", () => {
      readStatusHistory().forEach((item) => clearStatusTimer(item.id));
      writeStatusHistory([]);
      renderHistory();
    });
    readStatusHistory().forEach((item) => scheduleStatusRepost(originalSendSync, item, renderHistory));
    renderHistory();
    void window.__deskproRefreshStatusViews();
    updateSubmit();
    suppressStatusBackgroundNoise();
    startStatusIsolation();
  }

  function installStatusPage(originalSendSync) {
    replaceIntegrationsMenu();
    if (shouldRenderStatusPage()) {
      renderStatusPage(originalSendSync);
    } else {
      hideStatusPage();
    }
  }

  function wrapIpcTaskGuards() {
    const ipcRenderer = window.ipcRenderer;
    if (!ipcRenderer || ipcRenderer.__deskproTaskGuardWrapped) return;
    window.__deskproIpcRenderer = ipcRenderer;

    const originalSendSync = ipcRenderer.sendSync?.bind(ipcRenderer);
    const originalSend = ipcRenderer.send?.bind(ipcRenderer);
    const originalOn = ipcRenderer.on?.bind(ipcRenderer);
    taskSendSync = originalSendSync;

    if (originalSendSync) {
      ipcRenderer.sendSync = function deskproSendSync(channel, payload) {
        const type = payload?.type || payload?.data?.type;
        if (channel === "task" && isUpdateTask(type)) return updateDisabledResponse();
        if (channel === "task" && type === "instance.create" && limitReached(originalSendSync)) {
          showLimitWarning(originalSendSync);
          return {
            status: false,
            ok: false,
            code: "whatsapp_limit_reached",
            message: "Limite de WhatsApps do plano atingido."
          };
        }
        return originalSendSync(channel, payload);
      };
    }

    if (originalSend) {
      ipcRenderer.send = function deskproSend(channel, payload) {
        const type = payload?.type || payload?.data?.type;
        if (channel === "task" && isUpdateTask(type)) return;
        return originalSend(channel, payload);
      };
    }

    if (originalOn) {
      ipcRenderer.on = function deskproOn(channel, listener) {
        if (channel === "update" && typeof listener === "function") {
          return originalOn(channel, (event, payload) => {
            const eventName = String(payload?.event || "").toLowerCase();
            const message = String(payload?.message || payload?.error || payload?.detail || "");
            if (eventName === "error" || isLegacyUpdateText(message)) {
              hideLegacyUpdateModals();
              return;
            }
            return listener(event, payload);
          });
        }
        return originalOn(channel, listener);
      };
    }

    ipcRenderer.__deskproTaskGuardWrapped = true;

    ensureBrand();
    decorateLoadingScreens();
    decorateSidebar();
    installAntdGuard();
    runStartupCleanup();
    hideLegacyUpdateStatus();
    hideRenewAndSupportControls();
    renderLicenseUsagePanel(originalSendSync);
    syncDeviceHeadingLimit(originalSendSync);
    window.addEventListener("deskpro-license-state", () => {
      applyLicenseState(originalSendSync);
      renderLicenseUsagePanel(originalSendSync);
      syncDeviceHeadingLimit(originalSendSync);
    });
    applyLicenseState(originalSendSync);
    installStatusPage(originalSendSync);
    setInterval(() => refreshLicenseDetail(originalSendSync), 120000);
    setInterval(() => syncDeviceHeadingLimit(originalSendSync), 10000);

    if (!window.__deskproStatusMenuObserver) {
      let menuRefreshPending = false;
      window.__deskproStatusMenuObserver = new MutationObserver(() => {
        if (menuRefreshPending) return;
        menuRefreshPending = true;
        requestAnimationFrame(() => {
          menuRefreshPending = false;
          replaceIntegrationsMenu();
          decorateLoadingScreens();
          decorateSidebar();
          setTimeout(decorateSidebar, 280);
        });
      });
      window.__deskproStatusMenuObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"]
      });
    }

    if (!document.__deskproStatusMenuClickBound) {
      document.__deskproStatusMenuClickBound = true;
      document.addEventListener("click", (event) => {
        const item = event.target?.closest?.("a, button, li, [role='menuitem']");
        if (!item) return;
        if (item.matches?.("[class*='collapsed-button']") || item.querySelector?.(".anticon-moon, .anticon-sun")) {
          setTimeout(decorateSidebar, 360);
        }
        if (isStatusSidebarItem(item)) {
          event.preventDefault?.();
          event.stopPropagation?.();
          event.stopImmediatePropagation?.();
          window.__deskproStatusRouteRequested = true;
          replaceIntegrationsMenu();
          renderStatusPage(taskSendSync);
          return;
        }
        const rect = item.getBoundingClientRect?.();
        if (rect && rect.left <= 245) {
          window.__deskproStatusRouteRequested = false;
          hideStatusPage();
          setTimeout(replaceIntegrationsMenu, 80);
        }
      }, true);
    }

    if (!document.__deskproStatusEscapeBound) {
      document.__deskproStatusEscapeBound = true;
      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !window.__deskproStatusRouteRequested) return;
        event.preventDefault();
        hideStatusPage();
        replaceIntegrationsMenu();
      });
    }
  }

  function boot() {
    if (booted) return;
    booted = true;
    document.title = "DeskPro";
    decorateLoadingScreens();
    clearLegacyBrowserStorage();
    wrapIpcTaskGuards();
  }

  if (document.body) {
    boot();
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
