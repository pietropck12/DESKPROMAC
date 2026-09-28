(function () {
  "use strict";
  const LOGO = "./assets/deskpro-icon.png";
  let state = { status: false, state: "checking", revision: -1, key: "", detail: null };
  let refreshPending = null;
  let submitting = false;
  let lastMode = null;
  let draft = "";

  function closeWindow() {
    try { window.ipcRenderer.send("deskpro-activation-close"); }
    catch { window.close(); }
  }
  function sendRequired(required) {
    try { window.ipcRenderer.send("deskpro-activation-state", { required }); } catch {}
  }
  function accept(next) {
    if (!next || !Number.isFinite(next.revision) || next.revision < state.revision) return false;
    state = next;
    window.__deskproLicenseState = state;
    render();
    window.dispatchEvent(new CustomEvent("deskpro-license-state", { detail: state }));
    return true;
  }
  function render() {
    if (!document.body) return;
    const mode = state.state;
    sendRequired(mode !== "active" && mode !== "expired");
    if (mode === "active" || (mode === "expired" && document.getElementById("deskpro-expired"))) {
      document.getElementById("deskpro-activation")?.remove();
      lastMode = null;
      return;
    }
    const existing = document.getElementById("deskpro-activation");
    if (existing && lastMode === mode) return;
    const oldInput = existing?.querySelector("#dp-license-key");
    if (oldInput) draft = oldInput.value;
    existing?.remove();
    lastMode = mode;
    const messages = {
      checking: ["Verificando sua licença", "Aguarde enquanto consultamos seu plano com segurança."],
      connection_error: ["Não foi possível verificar a licença", "Verifique sua conexão e tente novamente. Sua chave e seus dados continuam salvos."],
      blocked: ["Licença bloqueada", "O acesso foi bloqueado no painel. Entre em contato com o suporte para regularizar sua licença."],
      expired: ["Seu plano venceu", "Preparando as opções de renovação do seu plano."],
      activation_required: ["Ative seu DeskPro", "Insira sua chave de ativação para continuar."]
    };
    const [title, description] = messages[mode] || messages.connection_error;
    const overlay = document.createElement("section");
    overlay.id = "deskpro-activation";
    overlay.dataset.state = mode;
    overlay.innerHTML = `
      <div class="dp-activation-window">
        <button class="dp-close" type="button" aria-label="Fechar DeskPro">×</button>
        <span class="dp-window-title">DeskPro</span>
        <div class="dp-card">
          <div class="dp-logo-frame"><img class="dp-logo" src="${LOGO}" alt="DeskPro"></div>
          <h1>${title}</h1><p>${description}</p>
          ${mode === "activation_required" ? `<form class="dp-form">
            <label for="dp-license-key">CHAVE DE LICENÇA</label>
            <button class="dp-paste" type="button">Colar</button>
            <input id="dp-license-key" autocomplete="off" spellcheck="false" placeholder="DPD-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX">
            <button class="dp-submit" type="submit">Ativar licença</button>
            <div class="dp-message" role="status" aria-live="polite"></div>
          </form>` : `<div class="dp-state-message" role="status" aria-live="polite"></div>
            ${mode === "checking" || mode === "expired" ? `<div class="dp-checking-track"><span></span></div>` : `<button class="dp-submit dp-retry" type="button">Tentar novamente</button>
              <button class="dp-change-key dp-paste" type="button">Usar outra chave</button>`}`}
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector(".dp-close").addEventListener("click", closeWindow);
    overlay.querySelector(".dp-retry")?.addEventListener("click", () => refresh(true));
    overlay.querySelector(".dp-change-key")?.addEventListener("click", () => {
      state = { ...state, status: false, detail: null, state: "activation_required" };
      render();
    });
    const form = overlay.querySelector(".dp-form");
    if (!form) return;
    const input = overlay.querySelector("#dp-license-key");
    const message = overlay.querySelector(".dp-message");
    const button = overlay.querySelector(".dp-submit");
    input.value = draft;
    input.addEventListener("input", () => { draft = input.value; });
    overlay.querySelector(".dp-paste").addEventListener("click", async () => {
      try { input.value = draft = String(await navigator.clipboard.readText()).trim().toUpperCase(); input.focus(); }
      catch { message.textContent = "Não foi possível acessar a área de transferência."; }
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (submitting) return;
      const key = String(input.value || "").trim().toUpperCase();
      if (!key) { message.textContent = "Informe sua chave de licença."; input.focus(); return; }
      submitting = true;
      button.disabled = true;
      button.textContent = "Ativando...";
      message.textContent = "Validando sua licença no painel...";
      try {
        const result = await window.ipcRenderer.invoke("deskpro-license-activate", { key });
        if (result?.status === true && result?.state === "active") {
          message.textContent = "Licença ativada. Abrindo DeskPro...";
          window.location.reload();
          return;
        }
        if (Number.isFinite(result?.revision)) accept(result);
        message.textContent = result?.state === "connection_error" ? "Não foi possível conectar ao painel. Seus dados foram preservados. Tente novamente." : result?.message || "Não foi possível ativar esta chave. Verifique sua licença.";
      } catch { message.textContent = "Não foi possível conectar ao painel. Tente novamente."; }
      finally { submitting = false; button.disabled = false; button.textContent = "Ativar licença"; }
    });
    input.focus();
  }
  async function refresh(force = false) {
    if (refreshPending) return refreshPending;
    const retry = document.querySelector("#deskpro-activation .dp-retry");
    if (retry) { retry.disabled = true; retry.textContent = "Verificando..."; }
    refreshPending = (async () => {
      try { accept(await window.ipcRenderer.invoke("deskpro-license-state", { force })); }
      catch {
        state = { ...state, status: false, detail: null, state: "connection_error" };
        window.__deskproLicenseState = state;
        render();
      } finally {
        refreshPending = null;
        const current = document.querySelector("#deskpro-activation .dp-retry");
        if (current) { current.disabled = false; current.textContent = "Tentar novamente"; }
      }
      return state;
    })();
    return refreshPending;
  }
  window.__deskproRefreshLicense = refresh;
  window.__deskproRenderActivation = render;
  window.__deskproLicenseState = state;
  window.ipcRenderer?.on("license", (_event, payload) => accept(payload));
  const boot = () => { document.title = "DeskPro"; render(); refresh(); };
  if (document.body) boot(); else document.addEventListener("DOMContentLoaded", boot, { once: true });
})();
