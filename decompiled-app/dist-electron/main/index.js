const { createRequire } = require("node:module");
const Module = require("node:module");
const { pathToFileURL } = require("node:url");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const os = require("node:os");

const __loaderRequire = createRequire(__filename);
const __deskproApiBase = (process.env.DESKPRO_API_BASE || "https://deskpro.superzapmarketing.net/").replace(/\/?$/, "/");
const __deskproBlockedHosts = new Set([
  "clarity.ms",
  "google-analytics.com",
  "analytics.google.com",
  "googletagmanager.com",
  "firestore.googleapis.com",
  "firebaseremoteconfig.googleapis.com",
  "firebaseinstallations.googleapis.com",
  "identitytoolkit.googleapis.com",
  "securetoken.googleapis.com"
]);
const __deskproBlockedHostSuffixes = [
  ".clarity.ms",
  ".firebaseio.com",
  ".firebaseapp.com",
  ".firebasestorage.app"
];
let __deskproActivationRequired = true;
let __deskproUserCloseRequested = false;
const __deskproDataRoot = process.platform === "darwin"
  ? path.join(os.homedir(), "Library", "Application Support", "DeskPro")
  : path.join(process.env.APPDATA || process.cwd(), "DeskPro");

const __shouldBlockDeskproClose = () => __deskproActivationRequired && !__deskproUserCloseRequested;
const __shouldBlockDeskproExit = (code) => !__deskproUserCloseRequested && (code === undefined || code === 0);

const __deskproGuardLog = (event, detail = {}) => {
  try {
    const dir = path.join(__deskproDataRoot, "logs");
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(
      path.join(dir, "deskpro-guard.log"),
      JSON.stringify({
        ts: new Date().toISOString(),
        event,
        activationRequired: __deskproActivationRequired,
        userCloseRequested: __deskproUserCloseRequested,
        ...detail
      }) + "\n"
    );
  } catch {
    // Guard logging must never affect the app startup.
  }
};

const __deskproStatusLog = (event, detail = {}) => {
  try {
    const dir = path.join(__deskproDataRoot, "logs");
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(
      path.join(dir, "deskpro-status.log"),
      JSON.stringify({
        ts: new Date().toISOString(),
        event,
        ...detail
      }) + "\n"
    );
  } catch {
    // Status logging must never block WhatsApp usage.
  }
};

const __originalProcessExit = process.exit.bind(process);
process.exit = (code) => {
  __deskproGuardLog("process.exit", {
    code,
    blocked: __shouldBlockDeskproExit(code),
    stack: new Error("DeskPro process.exit trace").stack
  });
  if (__shouldBlockDeskproExit(code)) return;
  return __originalProcessExit(code);
};

process.on("beforeExit", (code) => __deskproGuardLog("process.beforeExit", { code }));
process.on("exit", (code) => __deskproGuardLog("process.exit-event", { code }));
process.on("uncaughtException", (error) => {
  __deskproGuardLog("process.uncaughtException", {
    message: error?.message,
    stack: error?.stack
  });
});
process.on("unhandledRejection", (reason) => {
  __deskproGuardLog("process.unhandledRejection", {
    message: reason?.message || String(reason),
    stack: reason?.stack
  });
});

const __rewriteDeskproUrl = (value) => {
  return value;
};

const __rewriteAxiosConfig = (config) => {
  if (!config || typeof config !== "object") return __rewriteDeskproUrl(config);
  return {
    ...config,
    baseURL: config.baseURL ? __deskproApiBase : config.baseURL,
    url: __rewriteDeskproUrl(config.url)
  };
};

const __rewriteAxiosArgs = (args) => {
  if (!args.length) return args;
  const next = [...args];
  next[0] = __rewriteAxiosConfig(next[0]);
  if (next[1] && typeof next[1] === "object") {
    next[1] = __rewriteAxiosConfig(next[1]);
  }
  return next;
};

const __normalizeDeskproResponse = (response) => response;

const __deskproIsBlockedUrl = (value) => {
  try {
    const hostname = new URL(String(value || "")).hostname.toLowerCase();
    return __deskproBlockedHosts.has(hostname)
      || __deskproBlockedHostSuffixes.some((suffix) => hostname.endsWith(suffix));
  } catch {
    return false;
  }
};

const __deskproInstallNetworkGuard = (session) => {
  if (!session || session.__deskproNetworkGuardInstalled) return;
  session.webRequest.onBeforeRequest({ urls: ["*://*/*"] }, (details, callback) => {
    const cancel = __deskproIsBlockedUrl(details?.url);
    if (cancel) __deskproGuardLog("network.legacy-provider-blocked", { url: details.url });
    callback({ cancel });
  });
  session.__deskproNetworkGuardInstalled = true;
};

const __deskproClearLegacyTelemetryCache = () => {
  const root = __deskproDataRoot;
  const migrationMarker = path.join(root, ".security-migration-6.1.22");
  if (fs.existsSync(migrationMarker)) return;
  for (const relative of [
    "sentry",
    "Cache/Cache_Data",
    "IndexedDB/app_._0.indexeddb.leveldb",
    "Network/Network Persistent State",
    "logs/app.log"
  ]) {
    try {
      fs.rmSync(path.join(root, relative), { recursive: true, force: true });
    } catch {
      // Cache cleanup is best effort and never touches databases or WhatsApp sessions.
    }
  }
  try {
    fs.mkdirSync(root, { recursive: true });
    fs.writeFileSync(migrationMarker, new Date().toISOString(), "utf8");
  } catch {
    // A failed marker only means the safe cleanup will be retried next start.
  }
};

const __wrapDeskproPromise = (value) => {
  if (!value || typeof value.then !== "function") return value;
  return value.then((response) => __normalizeDeskproResponse(response));
};

const __wrapDeskproAxios = (axiosModule) => {
  if (!axiosModule || axiosModule.__deskproApiWrapped) return axiosModule;
  const proxy = new Proxy(axiosModule, {
    apply(target, thisArg, args) {
      return __wrapDeskproPromise(Reflect.apply(target, thisArg, __rewriteAxiosArgs(args)));
    },
    get(target, prop, receiver) {
      if (prop === "__deskproApiWrapped") return true;
      if (prop === "create") {
        return (config = {}) => {
          const instance = target.create(__rewriteAxiosConfig(config));
          try {
            instance.interceptors?.response?.use?.((response) => __normalizeDeskproResponse(response));
          } catch {
            // Optional interceptor support.
          }
          return __wrapDeskproAxios(instance);
        };
      }
      const value = Reflect.get(target, prop, receiver);
      if (typeof value === "function" && prop === "request") {
        return (config) => __wrapDeskproPromise(value.call(target, __rewriteAxiosConfig(config)));
      }
      if (typeof value === "function" && ["get", "delete", "head", "options"].includes(prop)) {
        return (url, config) => __wrapDeskproPromise(value.call(target, __rewriteDeskproUrl(url), __rewriteAxiosConfig(config)));
      }
      if (typeof value === "function" && ["post", "put", "patch"].includes(prop)) {
        return (url, data, config) => __wrapDeskproPromise(value.call(target, __rewriteDeskproUrl(url), data, __rewriteAxiosConfig(config)));
      }
      return value;
    }
  });
  return proxy;
};

const __deskproFeedOptions = () => {
  return {
    provider: "github",
    owner: "pietropck12",
    repo: process.platform === "darwin" ? "DESKPROMAC" : "deskpro-updates",
    private: false
  };
};

const __deskproSilentUpdateResult = () => Promise.resolve({
  updateInfo: null,
  cancellationToken: null,
  downloadPromise: null
});

let __deskproUpdateWindow = null;
let __deskproUpdateWindowReady = false;
let __deskproLatestUpdateState = { phase: "available" };
let __deskproModernUpdaterWired = false;
let __deskproUpdateInstallFallback = null;

const __deskproUpdateHtml = () => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Atualização do DeskPro</title>
  <style>
    :root { color-scheme: dark; font-family: "Segoe UI", Inter, Arial, sans-serif; }
    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; overflow: hidden; }
    body {
      background:
        radial-gradient(circle at 12% 4%, rgba(32, 220, 139, .18), transparent 34%),
        radial-gradient(circle at 92% 88%, rgba(41, 121, 255, .18), transparent 38%),
        linear-gradient(145deg, #07111f, #0b1726 52%, #07121e);
      color: #f8fafc;
      display: grid;
      place-items: center;
      user-select: none;
    }
    body::before {
      background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px), linear-gradient(90deg,rgba(148,163,184,.045) 1px,transparent 1px);
      background-size: 44px 44px;
      content: "";
      inset: 0;
      mask-image: radial-gradient(circle at center, #000, transparent 78%);
      position: fixed;
    }
    .shell {
      -webkit-app-region: drag;
      background: linear-gradient(145deg, rgba(15,31,48,.96), rgba(9,23,38,.96));
      border: 1px solid rgba(148,163,184,.18);
      border-radius: 28px;
      box-shadow: 0 32px 90px rgba(0,0,0,.5), inset 0 1px rgba(255,255,255,.04);
      padding: 34px;
      position: relative;
      width: min(650px, calc(100vw - 38px));
      z-index: 1;
    }
    .top { align-items: center; display: flex; gap: 17px; }
    .brand {
      align-items: center;
      background: linear-gradient(145deg, #26dc8c, #0c9f66);
      border-radius: 18px;
      box-shadow: 0 12px 32px rgba(25,203,126,.28);
      display: flex;
      font-size: 22px;
      font-weight: 850;
      height: 58px;
      justify-content: center;
      letter-spacing: -.07em;
      width: 58px;
    }
    .eyebrow { color: #65e7ad; font-size: 12px; font-weight: 750; letter-spacing: .14em; margin: 0 0 5px; text-transform: uppercase; }
    h1 { font-size: 25px; letter-spacing: -.035em; margin: 0; }
    .version { background: rgba(101,231,173,.1); border: 1px solid rgba(101,231,173,.2); border-radius: 999px; color: #8cf1c2; font-size: 12px; margin-left: auto; padding: 7px 11px; }
    .message { color: #cbd5e1; font-size: 14px; line-height: 1.55; margin: 26px 0 18px; min-height: 44px; }
    .progress-row { align-items: end; display: flex; justify-content: space-between; margin-bottom: 10px; }
    .status { font-size: 14px; font-weight: 700; }
    .percent { color: #75edb7; font-size: 27px; font-variant-numeric: tabular-nums; font-weight: 800; letter-spacing: -.04em; }
    .track { background: rgba(148,163,184,.14); border: 1px solid rgba(148,163,184,.12); border-radius: 999px; height: 12px; overflow: hidden; position: relative; }
    .bar { background: linear-gradient(90deg, #0fa86a, #3ee49a, #38a8ff); border-radius: inherit; box-shadow: 0 0 24px rgba(62,228,154,.42); height: 100%; min-width: 2%; transition: width .38s ease; width: 2%; }
    .bar.indeterminate { animation: indeterminate 1.45s ease-in-out infinite; width: 38%; }
    .meta { color: #7f93aa; display: flex; font-size: 11px; justify-content: space-between; margin-top: 9px; min-height: 16px; }
    .steps { display: grid; gap: 9px; grid-template-columns: repeat(4, 1fr); margin-top: 27px; }
    .step { align-items: center; color: #71839a; display: flex; font-size: 11px; font-weight: 650; gap: 7px; white-space: nowrap; }
    .dot { background: #26384a; border: 1px solid #3a4b5e; border-radius: 50%; height: 10px; transition: .25s ease; width: 10px; }
    .step.active { color: #dce7f2; }
    .step.active .dot { background: #27d98c; border-color: #79efbd; box-shadow: 0 0 13px rgba(39,217,140,.6); }
    .step.done { color: #83eebb; }
    .step.done .dot { background: #23b977; border-color: #45e59d; }
    .notice { align-items: center; background: rgba(14,165,233,.07); border: 1px solid rgba(56,189,248,.12); border-radius: 14px; color: #91a8bf; display: flex; font-size: 11px; gap: 9px; margin-top: 25px; padding: 12px 14px; }
    .shield { color: #5ee9aa; font-size: 16px; }
    body.error .bar { background: linear-gradient(90deg, #ef4444, #fb7185); box-shadow: 0 0 20px rgba(239,68,68,.28); }
    body.error .percent, body.error .eyebrow { color: #fda4af; }
    @keyframes indeterminate { 0% { transform: translateX(-110%); } 100% { transform: translateX(270%); } }
    @media (prefers-reduced-motion: reduce) { * { animation-duration: .001ms !important; transition-duration: .001ms !important; } }
  </style>
</head>
<body>
  <main class="shell" role="status" aria-live="polite">
    <div class="top">
      <div class="brand">DP</div>
      <div><p class="eyebrow">Atualização segura</p><h1>Estamos preparando o novo DeskPro</h1></div>
      <span class="version" id="version">nova versão</span>
    </div>
    <p class="message" id="message">Encontramos uma atualização. Ela será instalada automaticamente, sem apagar seus dados.</p>
    <div class="progress-row"><span class="status" id="status">Preparando download...</span><strong class="percent" id="percent">0%</strong></div>
    <div class="track"><div class="bar indeterminate" id="bar"></div></div>
    <div class="meta"><span id="detail">Conectando ao servidor de atualização</span><span id="remaining">Aguarde</span></div>
    <div class="steps">
      <div class="step done" data-step="verify"><span class="dot"></span>Verificada</div>
      <div class="step active" data-step="download"><span class="dot"></span>Baixando</div>
      <div class="step" data-step="install"><span class="dot"></span>Instalando</div>
      <div class="step" data-step="reopen"><span class="dot"></span>Reabrindo</div>
    </div>
    <div class="notice"><span class="shield">&#9670;</span><span>Não feche o computador. Seus contatos, sessões e configurações serão preservados.</span></div>
  </main>
  <script>
    const byId = (id) => document.getElementById(id);
    const setSteps = (current) => {
      const order = ["verify", "download", "install", "reopen"];
      const currentIndex = order.indexOf(current);
      document.querySelectorAll(".step").forEach((element) => {
        const index = order.indexOf(element.dataset.step);
        element.classList.toggle("done", index < currentIndex);
        element.classList.toggle("active", index === currentIndex);
      });
    };
    const formatBytes = (value) => {
      const bytes = Number(value || 0);
      if (!bytes) return "";
      if (bytes >= 1073741824) return (bytes / 1073741824).toFixed(1) + " GB";
      if (bytes >= 1048576) return (bytes / 1048576).toFixed(1) + " MB";
      return Math.round(bytes / 1024) + " KB";
    };
    window.deskproUpdate = (payload = {}) => {
      const phase = payload.phase || "download";
      const percent = Math.max(0, Math.min(100, Math.round(Number(payload.percent || 0))));
      if (payload.version) byId("version").textContent = "versão " + payload.version;
      document.body.classList.toggle("error", phase === "error");
      byId("bar").classList.toggle("indeterminate", phase === "available" || phase === "install");
      if (phase === "available") {
        setSteps("download");
        byId("status").textContent = "Iniciando atualização...";
        byId("message").textContent = "Nova versão encontrada. O download começa agora e o DeskPro abrirá novamente sozinho ao terminar.";
        byId("percent").textContent = "0%";
        byId("detail").textContent = "Preparando conexão segura";
        byId("remaining").textContent = "Aguarde";
      } else if (phase === "download") {
        setSteps("download");
        byId("status").textContent = "Baixando atualização...";
        byId("percent").textContent = percent + "%";
        byId("bar").style.width = Math.max(2, percent) + "%";
        const transferred = formatBytes(payload.transferred);
        const total = formatBytes(payload.total);
        byId("detail").textContent = transferred && total ? transferred + " de " + total : "Recebendo os novos componentes";
        byId("remaining").textContent = payload.speed ? formatBytes(payload.speed) + "/s" : "Não feche o DeskPro";
      } else if (phase === "install") {
        setSteps("install");
        byId("status").textContent = "Instalando atualização...";
        byId("message").textContent = "Download concluído. Estamos aplicando as melhorias com segurança. O DeskPro será reaberto automaticamente.";
        byId("percent").textContent = "100%";
        byId("bar").style.width = "100%";
        byId("detail").textContent = "Finalizando os arquivos";
        byId("remaining").textContent = "Abrirá automaticamente";
      } else if (phase === "reopen") {
        setSteps("reopen");
        byId("status").textContent = "Reabrindo o DeskPro...";
        byId("detail").textContent = "Atualização concluída";
      } else if (phase === "error") {
        setSteps("download");
        byId("status").textContent = "Não foi possível atualizar agora";
        byId("message").textContent = "Sua internet pode ter oscilado. O DeskPro continuará abrindo normalmente e tentará novamente na próxima inicialização.";
        byId("percent").textContent = "!";
        byId("bar").classList.remove("indeterminate");
        byId("bar").style.width = "100%";
        byId("detail").textContent = "Nenhum dado foi alterado";
        byId("remaining").textContent = "Continuando...";
      }
    };
  </script>
</body>
</html>`;

const __deskproSendUpdateWindowState = (payload = {}) => {
  const safePayload = {
    phase: String(payload.phase || "available"),
    version: payload.version ? String(payload.version) : "",
    percent: Number(payload.percent || 0),
    transferred: Number(payload.transferred || 0),
    total: Number(payload.total || 0),
    speed: Number(payload.speed || 0)
  };
  __deskproLatestUpdateState = safePayload;
  if (!__deskproUpdateWindow || __deskproUpdateWindow.isDestroyed() || !__deskproUpdateWindowReady) return;
  __deskproUpdateWindow.webContents.executeJavaScript(
    `window.deskproUpdate && window.deskproUpdate(${JSON.stringify(safePayload)})`,
    true
  ).catch((error) => __deskproGuardLog("update-window.state-error", { message: error?.message || String(error) }));
  if (safePayload.phase === "download") {
    __deskproUpdateWindow.setProgressBar(Math.max(0, Math.min(1, safePayload.percent / 100)));
  } else if (safePayload.phase === "install") {
    __deskproUpdateWindow.setProgressBar(1, { mode: "indeterminate" });
  } else if (safePayload.phase === "error") {
    __deskproUpdateWindow.setProgressBar(-1);
  }
};

const __deskproShowUpdateWindow = (payload = {}) => {
  try {
    __deskproSendUpdateWindowState(payload);
    const electron = __loaderRequire("electron");
    if (!__deskproUpdateWindow || __deskproUpdateWindow.isDestroyed()) {
      __deskproUpdateWindowReady = false;
      __deskproUpdateWindow = new electron.BrowserWindow({
        width: 720,
        height: 530,
        minWidth: 680,
        minHeight: 500,
        maxWidth: 780,
        maxHeight: 590,
        center: true,
        frame: false,
        resizable: false,
        maximizable: false,
        minimizable: false,
        closable: false,
        alwaysOnTop: true,
        skipTaskbar: false,
        show: false,
        backgroundColor: "#07111f",
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          sandbox: true,
          webSecurity: true,
          devTools: false
        }
      });
      __deskproUpdateWindow.setMenuBarVisibility(false);
      __deskproUpdateWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(__deskproUpdateHtml())}`).catch((error) => {
        __deskproGuardLog("update-window.load-error", { message: error?.message || String(error) });
      });
      __deskproUpdateWindow.once("ready-to-show", () => {
        if (!__deskproUpdateWindow || __deskproUpdateWindow.isDestroyed()) return;
        __deskproUpdateWindowReady = true;
        __deskproUpdateWindow.show();
        __deskproUpdateWindow.focus();
        __deskproSendUpdateWindowState(__deskproLatestUpdateState);
      });
      __deskproUpdateWindow.on("closed", () => {
        __deskproUpdateWindow = null;
        __deskproUpdateWindowReady = false;
      });
    } else if (__deskproUpdateWindowReady) {
      __deskproUpdateWindow.show();
      __deskproUpdateWindow.focus();
    }
  } catch (error) {
    __deskproGuardLog("update-window.open-error", { message: error?.message || String(error) });
  }
};

const __deskproWireModernUpdater = (updater) => {
  if (!updater || __deskproModernUpdaterWired) return;
  __deskproModernUpdaterWired = true;
  updater.disableDifferentialDownload = false;
  updater.autoDownload = true;
  updater.autoInstallOnAppQuit = true;
  updater.on("update-available", (info = {}) => {
    __deskproShowUpdateWindow({ phase: "available", version: info.version });
    __deskproGuardLog("modern-update.available", { version: info.version });
  });
  updater.on("download-progress", (progress = {}) => {
    __deskproShowUpdateWindow({
      phase: "download",
      version: progress.version,
      percent: progress.percent,
      transferred: progress.transferred,
      total: progress.total,
      speed: progress.bytesPerSecond
    });
  });
  updater.on("update-downloaded", (info = {}) => {
    __deskproUserCloseRequested = true;
    __deskproShowUpdateWindow({ phase: "install", version: info.version });
    __deskproGuardLog("modern-update.installing", { version: info.version });
    clearTimeout(__deskproUpdateInstallFallback);
    __deskproUpdateInstallFallback = setTimeout(() => {
      try {
        __deskproSendUpdateWindowState({ phase: "reopen", version: info.version });
        updater.quitAndInstall(true, true);
      } catch (error) {
        __deskproGuardLog("modern-update.install-fallback-error", { message: error?.message || String(error) });
      }
    }, 4500);
  });
  updater.on("error", (error) => {
    if (!__deskproUpdateWindow || __deskproUpdateWindow.isDestroyed()) return;
    __deskproUserCloseRequested = false;
    __deskproSendUpdateWindowState({ phase: "error" });
    __deskproGuardLog("modern-update.error", { message: error?.message || String(error) });
    setTimeout(() => {
      if (__deskproUpdateWindow && !__deskproUpdateWindow.isDestroyed()) __deskproUpdateWindow.destroy();
    }, 8500);
  });
};

const __deskproShouldIgnoreUpdateError = (value) => {
  const text = String(value || "");
  return text.includes("Invalid Version:")
    || text.includes("desktop-v")
    || text.includes("Atualizacao falhou")
    || text.includes("Atualização falhou")
    || text.includes("Update Error");
};

let __deskproUpdateCheckStarted = false;

const __deskproShouldSuppressRendererMessage = (channel, payload) => {
  if (channel !== "update") return false;
  if (payload && typeof payload === "object") {
    const eventName = String(payload.event || "").toLowerCase();
    if (["checking", "not-available", "download-progress", "error"].includes(eventName)) return true;
    const message = payload.message || payload.error || payload.detail || "";
    if (eventName === "error") return true;
    if (__deskproShouldIgnoreUpdateError(message)) return true;
  }
  return __deskproShouldIgnoreUpdateError(payload);
};

const __wrapDeskproAutoUpdater = (autoUpdater) => {
  if (!autoUpdater || autoUpdater.__deskproUpdateWrapped) return autoUpdater;
  __deskproWireModernUpdater(autoUpdater);
  return new Proxy(autoUpdater, {
    get(target, prop, receiver) {
      if (prop === "__deskproUpdateWrapped") return true;
      if (prop === "setFeedURL") {
        return () => {
          __deskproGuardLog("autoUpdater.setFeedURL-redirected", __deskproFeedOptions());
          return target.setFeedURL(__deskproFeedOptions());
        };
      }
      if (prop === "checkForUpdates" || prop === "checkForUpdatesAndNotify") {
        return async (...args) => {
          __deskproUpdateCheckStarted = true;
          __deskproGuardLog("autoUpdater.check-allowed", { method: String(prop) });
          try {
            target.setFeedURL(__deskproFeedOptions());
          } catch (error) {
            __deskproGuardLog("autoUpdater.feed-ensure-failed", { message: error?.message || String(error) });
          }
          try {
            const result = Reflect.get(target, prop, receiver).apply(target, args);
            if (!result || typeof result.then !== "function") return result;
            return result.catch((error) => {
              if (__deskproShouldIgnoreUpdateError(error?.message || error)) {
                __deskproGuardLog("autoUpdater.legacy-error-ignored", { message: error?.message || String(error) });
                return __deskproSilentUpdateResult();
              }
              throw error;
            });
          } catch (error) {
            if (__deskproShouldIgnoreUpdateError(error?.message || error)) {
              __deskproGuardLog("autoUpdater.legacy-error-ignored-sync", { message: error?.message || String(error) });
              return __deskproSilentUpdateResult();
            }
            throw error;
          }
        };
      }
      if (prop === "emit") {
        return (eventName, ...args) => {
          if (eventName === "error" && __deskproShouldIgnoreUpdateError(args[0]?.message || args[0])) {
            __deskproGuardLog("autoUpdater.error-event-ignored", { message: args[0]?.message || String(args[0]) });
            return false;
          }
          return Reflect.get(target, prop, receiver).call(target, eventName, ...args);
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  });
};

const __wrapDeskproElectronUpdater = (updaterModule) => {
  if (!updaterModule || updaterModule.__deskproUpdateModuleWrapped) return updaterModule;
  return new Proxy(updaterModule, {
    get(target, prop, receiver) {
      if (prop === "__deskproUpdateModuleWrapped") return true;
      if (prop === "autoUpdater") return __wrapDeskproAutoUpdater(Reflect.get(target, prop, receiver));
      return Reflect.get(target, prop, receiver);
    }
  });
};

const __deskproNormalizeStatusJid = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const isValidPhoneDigits = (digits) => digits.length >= 8 && digits.length <= 15;
  const isValidLidDigits = (digits) => digits.length >= 8 && digits.length <= 25;
  if (raw.includes("@")) {
    const [left, ...domainParts] = raw.split("@");
    const domainPart = domainParts.join("@");
    const domain = String(domainPart || "").toLowerCase();
    const normalizedDomain = domain.replace(/\./g, "");
    const digits = String(left || "").split(":")[0].replace(/\D/g, "");
    if (!digits) return "";
    if (normalizedDomain === "lid" || normalizedDomain.includes("lid")) {
      return isValidLidDigits(digits) ? `${digits}@lid` : "";
    }
    if (domain.includes("s.whatsapp.net") || normalizedDomain.includes("c.us")) {
      return isValidPhoneDigits(digits) ? `${digits}@s.whatsapp.net` : "";
    }
    return "";
  }
  const digits = raw.split(":")[0].replace(/\D/g, "");
  return isValidPhoneDigits(digits) ? `${digits}@s.whatsapp.net` : "";
};

const __deskproInstanceId = (waInstance) => String(
  waInstance?._id ||
  waInstance?.id ||
  waInstance?.instanceId ||
  waInstance?.instance?._id ||
  waInstance?.instance?.id ||
  waInstance?.instance?.instanceId ||
  ""
).trim();

const __deskproStatusViewsFile = path.join(
  __deskproDataRoot,
  "database",
  "status-views.json"
);
const __deskproStatusViewSockets = new WeakSet();
let __deskproStatusViewsState;
let __deskproStatusViewsWriteTimer;

const __deskproStatusPostId = (instanceId, messageId) => `${String(instanceId || "").trim()}:${String(messageId || "").trim()}`;

const __deskproReadStatusViewsState = () => {
  if (__deskproStatusViewsState) return __deskproStatusViewsState;
  try {
    const parsed = JSON.parse(fs.readFileSync(__deskproStatusViewsFile, "utf8"));
    __deskproStatusViewsState = parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    __deskproStatusViewsState = {};
  }
  if (!__deskproStatusViewsState.posts || typeof __deskproStatusViewsState.posts !== "object") {
    __deskproStatusViewsState.posts = {};
  }
  __deskproStatusViewsState.version = 1;
  return __deskproStatusViewsState;
};

const __deskproPruneStatusViews = (state) => {
  const cutoff = Date.now() - (60 * 24 * 60 * 60 * 1000);
  const posts = Object.entries(state.posts || {})
    .filter(([, post]) => Number(post?.createdAt || post?.updatedAt || 0) >= cutoff)
    .sort((a, b) => Number(b[1]?.updatedAt || b[1]?.createdAt || 0) - Number(a[1]?.updatedAt || a[1]?.createdAt || 0))
    .slice(0, 500);
  state.posts = Object.fromEntries(posts);
};

const __deskproWriteStatusViewsState = () => {
  const state = __deskproReadStatusViewsState();
  __deskproPruneStatusViews(state);
  try {
    fs.mkdirSync(path.dirname(__deskproStatusViewsFile), { recursive: true });
    const temporaryFile = `${__deskproStatusViewsFile}.tmp`;
    fs.writeFileSync(temporaryFile, JSON.stringify(state), "utf8");
    try {
      fs.renameSync(temporaryFile, __deskproStatusViewsFile);
    } catch (renameError) {
      if (process.platform !== "win32") throw renameError;
      fs.rmSync(__deskproStatusViewsFile, { force: true });
      fs.renameSync(temporaryFile, __deskproStatusViewsFile);
    }
  } catch (error) {
    __deskproStatusLog("status.views.write-error", { message: error?.message || String(error) });
  }
};

const __deskproScheduleStatusViewsWrite = () => {
  if (__deskproStatusViewsWriteTimer) clearTimeout(__deskproStatusViewsWriteTimer);
  __deskproStatusViewsWriteTimer = setTimeout(() => {
    __deskproStatusViewsWriteTimer = null;
    __deskproWriteStatusViewsState();
  }, 250);
  __deskproStatusViewsWriteTimer.unref?.();
};

const __deskproRegisterStatusPost = (instanceId, messageKey = {}) => {
  const normalizedInstanceId = String(instanceId || "").trim();
  const messageId = String(messageKey?.id || messageKey?.messageId || "").trim();
  if (!normalizedInstanceId || !messageId) return null;
  const state = __deskproReadStatusViewsState();
  const postId = __deskproStatusPostId(normalizedInstanceId, messageId);
  const previous = state.posts[postId] || {};
  state.posts[postId] = {
    instanceId: normalizedInstanceId,
    messageId,
    remoteJid: "status@broadcast",
    createdAt: Number(previous.createdAt || Date.now()),
    updatedAt: Number(previous.updatedAt || Date.now()),
    viewers: previous.viewers && typeof previous.viewers === "object" ? previous.viewers : {}
  };
  __deskproScheduleStatusViewsWrite();
  return state.posts[postId];
};

const __deskproHashStatusViewer = (jid) => crypto
  .createHash("sha256")
  .update(String(jid || ""))
  .digest("hex");

const __deskproTrackStatusReceipt = (instanceId, ownJid, update) => {
  const updates = Array.isArray(update) ? update : [update];
  const state = __deskproReadStatusViewsState();
  let changed = false;
  for (const item of updates) {
    const key = item?.key || item?.messageKey || {};
    const receipt = item?.receipt || item?.update || {};
    if (!receipt.readTimestamp && !receipt.playedTimestamp) continue;
    const messageId = String(key?.id || key?.messageId || "").trim();
    if (!messageId) continue;
    const post = state.posts[__deskproStatusPostId(instanceId, messageId)];
    if (!post) continue;
    const viewerJid = __deskproNormalizeStatusJid(receipt.userJid || key.participant || receipt.participant || "");
    if (!viewerJid || viewerJid === ownJid) continue;
    const viewerHash = __deskproHashStatusViewer(viewerJid);
    if (post.viewers[viewerHash]) continue;
    post.viewers[viewerHash] = Number(receipt.readTimestamp || receipt.playedTimestamp || Date.now());
    post.updatedAt = Date.now();
    changed = true;
    __deskproStatusLog("status.views.read", {
      instanceId,
      messageId,
      viewerCount: Object.keys(post.viewers).length
    });
  }
  if (changed) __deskproScheduleStatusViewsWrite();
};

const __deskproAttachStatusViewListener = (instanceId, sock) => {
  if (!instanceId || !sock?.ev?.on || __deskproStatusViewSockets.has(sock)) return;
  const ownJid = __deskproNormalizeStatusJid(sock?.user?.id || sock?.user?.jid || "");
  sock.ev.on("message-receipt.update", (update) => {
    try {
      __deskproTrackStatusReceipt(instanceId, ownJid, update);
    } catch (error) {
      __deskproStatusLog("status.views.receipt-error", { instanceId, message: error?.message || String(error) });
    }
  });
  __deskproStatusViewSockets.add(sock);
  __deskproStatusLog("status.views.listener-attached", { instanceId });
};

const __deskproAttachStatusViewListeners = () => {
  for (const [fallbackId, wa] of Object.entries(globalThis.WhatsAppInstances || {})) {
    const instanceId = __deskproInstanceId(wa) || String(fallbackId || "").trim();
    const sock = wa?.instance?.sock || wa?.sock || wa?.client;
    __deskproAttachStatusViewListener(instanceId, sock);
  }
};

const __deskproGetWhatsAppStatusViews = async (data = {}) => {
  __deskproAttachStatusViewListeners();
  const posts = Array.isArray(data.posts) ? data.posts : [];
  const state = __deskproReadStatusViewsState();
  const results = posts.map((entry) => {
    const instanceId = String(entry?.instanceId || entry?.id || "").trim();
    const messageKey = entry?.messageKey || entry?.key || {};
    const messageId = String(messageKey?.id || entry?.messageId || "").trim();
    if (instanceId && messageId) __deskproRegisterStatusPost(instanceId, { ...messageKey, id: messageId });
    const post = state.posts[__deskproStatusPostId(instanceId, messageId)];
    return {
      instanceId,
      messageId,
      viewerCount: Object.keys(post?.viewers || {}).length,
      updatedAt: Number(post?.updatedAt || 0)
    };
  }).filter((entry) => entry.instanceId && entry.messageId);
  return { status: true, results };
};

const __deskproStatusViewsAttachTimer = setInterval(__deskproAttachStatusViewListeners, 5000);
__deskproStatusViewsAttachTimer.unref?.();

const __deskproReadStatusContactCaches = (instanceId) => {
  const payloads = [];
  if (!instanceId) return payloads;
  try {
    const appData = path.dirname(__deskproDataRoot);
    const files = [
      path.join(appData, "DeskPro", "sessions", instanceId, "cache", "contacts.json"),
      path.join(appData, "DeskPro", "sessions", `${instanceId}-backup`, "cache", "contacts.json")
    ];
    for (const filePath of files) {
      if (!fs.existsSync(filePath)) continue;
      const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
      payloads.push({ filePath, parsed });
    }
  } catch (error) {
    __deskproStatusLog("status.contacts.cache-error", {
      instanceId,
      message: error?.message || String(error)
    });
  }
  return payloads;
};

const __deskproReadStatusPersistentContacts = (instanceId) => {
  const contacts = [];
  const sources = { numberDatabase: 0, sessionMappings: 0 };
  try {
    const appData = path.dirname(__deskproDataRoot);
    const databasePath = path.join(appData, "DeskPro", "database", "numbers.db");
    if (fs.existsSync(databasePath)) {
      const rows = fs.readFileSync(databasePath, "utf8").split(/\r?\n/).filter(Boolean);
      for (const row of rows) {
        try {
          const parsed = JSON.parse(row);
          if (parsed?.number) {
            contacts.push({ number: parsed.number, name: parsed.name || "" });
            sources.numberDatabase += 1;
          }
        } catch {}
      }
    }

    if (instanceId) {
      const sessionDirectories = [
        path.join(appData, "DeskPro", "sessions", instanceId),
        path.join(appData, "DeskPro", "sessions", `${instanceId}-backup`)
      ];
      const seenPhones = new Set();
      for (const directory of sessionDirectories) {
        if (!fs.existsSync(directory)) continue;
        for (const fileName of fs.readdirSync(directory)) {
          const match = /^lid-mapping-(\d+)\.json$/i.exec(fileName);
          if (!match || seenPhones.has(match[1])) continue;
          seenPhones.add(match[1]);
          contacts.push({ number: match[1] });
          sources.sessionMappings += 1;
        }
      }
    }
  } catch (error) {
    __deskproStatusLog("status.contacts.persistent-error", {
      instanceId,
      message: error?.message || String(error)
    });
  }
  return { contacts, sources };
};

const __deskproMaskJid = (jid) => {
  const text = String(jid || "");
  return text.replace(/^(\d{2,4})\d+(@.*)$/i, "$1***$2");
};

const __deskproMimeFromFile = (filePath, fallback) => {
  const ext = path.extname(String(filePath || "")).toLowerCase();
  const map = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".mp4": "video/mp4",
    ".mov": "video/quicktime",
    ".m4v": "video/x-m4v",
    ".mp3": "audio/mpeg",
    ".m4a": "audio/mp4",
    ".aac": "audio/aac",
    ".ogg": "audio/ogg",
    ".opus": "audio/ogg"
  };
  return map[ext] || fallback || "application/octet-stream";
};

const __deskproCollectStatusJids = (sock, waInstance, persistedContacts = []) => {
  const contacts = new Set();
  const sourceCounts = {};
  const instanceId = __deskproInstanceId(waInstance);
  let nativeStore = null;
  try {
    nativeStore = typeof waInstance?.ensureContactStoreCache === "function"
      ? waInstance.ensureContactStoreCache(true)
      : waInstance?.contactStoreCache;
  } catch (error) {
    __deskproStatusLog("status.contacts.native-cache-error", {
      instanceId,
      message: error?.message || String(error)
    });
  }
  const nativeLidToPhone = nativeStore?.lidToPhone instanceof Map
    ? nativeStore.lidToPhone
    : new Map();
  const ownJids = new Set([
    __deskproNormalizeStatusJid(sock?.user?.id),
    __deskproNormalizeStatusJid(sock?.user?.jid),
    __deskproNormalizeStatusJid(sock?.authState?.creds?.me?.id),
    __deskproNormalizeStatusJid(sock?.authState?.creds?.me?.jid),
    __deskproNormalizeStatusJid(waInstance?.instance?.sock?.user?.id),
    __deskproNormalizeStatusJid(waInstance?.sock?.user?.id),
    __deskproNormalizeStatusJid(waInstance?.phone),
    __deskproNormalizeStatusJid(waInstance?.number),
    __deskproNormalizeStatusJid(waInstance?.name),
    __deskproNormalizeStatusJid(waInstance?.label),
    __deskproNormalizeStatusJid(waInstance?.displayName),
    __deskproNormalizeStatusJid(waInstance?.instanceName),
    __deskproNormalizeStatusJid(waInstance?.instance?.phone),
    __deskproNormalizeStatusJid(waInstance?.instance?.number),
    __deskproNormalizeStatusJid(waInstance?.instance?.name),
    __deskproNormalizeStatusJid(waInstance?.instance?.label),
    __deskproNormalizeStatusJid(waInstance?.instance?.displayName),
    __deskproNormalizeStatusJid(waInstance?.instance?.instanceName),
    __deskproNormalizeStatusJid(waInstance?.instance?.user?.phone),
    __deskproNormalizeStatusJid(waInstance?.instance?.user?.number)
  ].filter(Boolean));
  const addJid = (value, source = "unknown") => {
    let jid = __deskproNormalizeStatusJid(value);
    if (!jid) return;
    if (jid.endsWith("@lid")) {
      jid = __deskproNormalizeStatusJid(nativeLidToPhone.get(jid));
      if (!jid) return;
    }
    if (jid.includes("@g.us") || jid.includes("@broadcast") || jid.includes("@newsletter") || jid === "status@broadcast") return;
    contacts.add(jid);
    sourceCounts[source] = (sourceCounts[source] || 0) + 1;
  };
  const addContactJid = (item, source) => {
    if (!item || typeof item !== "object") return;
    addJid(
      item.id ||
      item.jid ||
      item.lid ||
      item.remoteJid ||
      item.waId ||
      item.wid ||
      item.phone ||
      item.phoneNumber ||
      item.number ||
      item.user ||
      item.contactId ||
      item.key?.remoteJid ||
      (typeof item.key === "string" ? item.key : ""),
      source
    );
  };
  const visitContactList = (value, depth = 0, source = "unknown") => {
    if (!value) return;
    if (depth > 6) return;
    if (typeof value === "string") {
      addJid(value, source);
      return;
    }
    if (value instanceof Map) {
      value.forEach((item, key) => {
        addJid(key, `${source}.map-key`);
        addContactJid(item, source);
        if (item && typeof item === "object") visitContactList(item, depth + 1, source);
      });
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (typeof item === "string") {
          addJid(item, source);
          return;
        }
        addJid(typeof item?.key === "string" ? item.key : item?.key?.remoteJid, `${source}.entry-key`);
        addContactJid(item, source);
        if (item?.value && typeof item.value === "object") visitContactList(item.value, depth + 1, `${source}.entry-value`);
        if (item && typeof item === "object") visitContactList(item, depth + 1, source);
      });
      return;
    }
    if (typeof value === "object") {
      addJid(typeof value.key === "string" ? value.key : value.key?.remoteJid, `${source}.key`);
      addContactJid(value, source);
      Object.keys(value).forEach((key) => {
        if (["key", "id", "jid", "lid", "remoteJid", "waId", "wid", "phone", "phoneNumber", "number", "user", "contactId"].includes(key)) return;
        if (key.includes("@s.whatsapp.net") || key.includes("@lid") || key.includes("@l.id")) {
          addJid(key, `${source}.object-key`);
          const item = value[key];
          addContactJid(item, source);
          if (item && typeof item === "object") visitContactList(item, depth + 1, source);
          return;
        }
        const child = value[key];
        if (child && typeof child === "object" && (
          key === "contacts" ||
          key === "chats" ||
          key === "entries" ||
          key === "presences" ||
          key === "messages" ||
          key === "value"
        )) {
          visitContactList(child, depth + 1, `${source}.${key}`);
        }
      });
    }
  };

  if (nativeStore) {
    visitContactList(nativeStore.byPhoneJid, 0, "native.byPhoneJid");
    visitContactList(nativeStore.lidToPhone, 0, "native.lidToPhone");
    visitContactList(nativeStore.byJid, 0, "native.byJid");
  }
  if (waInstance?.contactMetadataCache instanceof Map) {
    visitContactList(waInstance.contactMetadataCache, 0, "native.contactMetadataCache");
  }

  visitContactList(sock?.contacts, 0, "sock.contacts");
  visitContactList(sock?.chats, 0, "sock.chats");
  visitContactList(sock?.store?.contacts, 0, "sock.store.contacts");
  visitContactList(sock?.store?.chats, 0, "sock.store.chats");
  visitContactList(waInstance?.instance?.store?.contacts, 0, "instance.store.contacts");
  visitContactList(waInstance?.instance?.store?.chats, 0, "instance.store.chats");
  visitContactList(waInstance?.instance?.contacts, 0, "instance.contacts");
  visitContactList(waInstance?.instance?.chats, 0, "instance.chats");
  visitContactList(waInstance?.store?.contacts, 0, "wa.store.contacts");
  visitContactList(waInstance?.store?.chats, 0, "wa.store.chats");
  visitContactList(waInstance?.store?.state?.contacts, 0, "wa.store.state.contacts");
  visitContactList(waInstance?.store?.state?.chats, 0, "wa.store.state.chats");
  visitContactList(waInstance?.contacts, 0, "wa.contacts");
  visitContactList(waInstance?.chats, 0, "wa.chats");
  visitContactList(persistedContacts, 0, "desktop.database.contacts");

  const persistentContacts = __deskproReadStatusPersistentContacts(instanceId);
  visitContactList(persistentContacts.contacts, 0, "desktop.database.numbers");

  const cachePayloads = __deskproReadStatusContactCaches(instanceId);
  cachePayloads.forEach(({ filePath, parsed }) => {
    visitContactList(parsed?.entries, 0, "cache.entries");
    visitContactList(parsed?.contacts, 0, "cache.contacts");
    visitContactList(parsed?.chats, 0, "cache.chats");
    visitContactList(parsed, 0, "cache.root");
    __deskproStatusLog("status.contacts.cache-read", {
      instanceId,
      file: path.basename(path.dirname(path.dirname(filePath))) || instanceId,
      entries: Array.isArray(parsed?.entries) ? parsed.entries.length : 0
    });
  });

  const contactsWithoutOwn = [...contacts].filter((jid) => !ownJids.has(jid));
  __deskproStatusLog("status.contacts.collected", {
    instanceId,
    total: contactsWithoutOwn.length,
    own: ownJids.size,
    nativeCacheSize: Number(nativeStore?.size || nativeStore?.byJid?.size || 0),
    nativePhoneCount: Number(nativeStore?.byPhoneJid?.size || 0),
    nativeLidMappings: Number(nativeStore?.lidToPhone?.size || 0),
    cacheFiles: cachePayloads.length,
    persistentSources: persistentContacts.sources,
    sourceCounts,
    sample: contactsWithoutOwn.slice(0, 8).map(__deskproMaskJid)
  });
  return {
    jids: contactsWithoutOwn,
    ownJids: [...ownJids],
    cacheFiles: cachePayloads.length,
    usedOwnFallback: false
  };
};

const __deskproUniqueStatusRecipients = (jids = []) => {
  const list = Array.isArray(jids) ? jids : [];
  return [...new Set(list.map((jid) => __deskproNormalizeStatusJid(jid)).filter((jid) => {
    return jid && jid.endsWith("@s.whatsapp.net");
  }))];
};

const __deskproBuildStatusContent = (data = {}) => {
  const type = String(data.statusType || "text").toLowerCase();
  const caption = String(data.caption || data.text || "").trim();
  if (type === "text") {
    const text = String(data.text || "").trim();
    if (!text) throw new Error("Informe o texto do status.");
    return {
      content: { text },
      options: {
        backgroundColor: data.backgroundColor || "#22c55e",
        font: Number(data.font || 0)
      }
    };
  }

  const filePath = String(data.filePath || "").trim();
  if (!filePath) throw new Error("Selecione um arquivo para o status.");
  if (!fs.existsSync(filePath)) throw new Error("Arquivo do status não encontrado.");

  const stat = fs.statSync(filePath);
  if (!stat.size) throw new Error("Arquivo do status esta vazio.");

  const mediaBuffer = fs.readFileSync(filePath);

  if (type === "image") {
    const mimetype = data.mimetype || __deskproMimeFromFile(filePath, "image/png");
    return { content: { image: mediaBuffer, mimetype, caption }, fileInfo: { filePath, size: stat.size, mimetype } };
  }
  if (type === "video") {
    const mimetype = data.mimetype || __deskproMimeFromFile(filePath, "video/mp4");
    return { content: { video: mediaBuffer, mimetype, caption }, fileInfo: { filePath, size: stat.size, mimetype } };
  }
  if (type === "audio") {
    const mimetype = data.mimetype || __deskproMimeFromFile(filePath, "audio/mp4");
    return { content: { audio: mediaBuffer, mimetype, ptt: false }, fileInfo: { filePath, size: stat.size, mimetype } };
  }
  throw new Error("Tipo de status inválido.");
};

const __deskproPostWhatsAppStatus = async (data = {}) => {
  const instanceIds = Array.isArray(data.instanceIds) ? data.instanceIds.map(String) : [];
  if (!instanceIds.length) {
    return { status: false, message: "Selecione ao menos uma conexão." };
  }

  const { content, options = {}, fileInfo = null } = __deskproBuildStatusContent(data);
  const results = [];
  __deskproStatusLog("status.post.request", {
    type: data.statusType,
    instanceIds,
    fileInfo: fileInfo ? {
      fileName: path.basename(fileInfo.filePath || ""),
      size: fileInfo.size,
      mimetype: fileInfo.mimetype
    } : null,
    contentKeys: Object.keys(content || {}),
    optionKeys: Object.keys(options || {}),
    hasText: Boolean(String(data.text || data.caption || "").trim())
  });

  for (const id of instanceIds) {
    const wa = globalThis.WhatsAppInstances?.[id];
    const sock = wa?.instance?.sock || wa?.sock || wa?.client;
    const name = wa?.name || wa?.instance?.name || id;
    if (!sock || typeof sock.sendMessage !== "function" || !sock.user) {
      __deskproStatusLog("status.post.instance-not-ready", {
        id,
        name,
        hasSock: Boolean(sock),
        hasUser: Boolean(sock?.user)
      });
      results.push({ id, name, status: false, message: "Conexão não está pronta." });
      continue;
    }

    __deskproAttachStatusViewListener(id, sock);

    const contactInfo = __deskproCollectStatusJids(sock, wa, data.visibilityContacts);
    const visibilityJidList = __deskproUniqueStatusRecipients(contactInfo.jids);
    __deskproStatusLog("status.post.recipients", {
      id,
      name,
      profiles: 1,
      visibilityCount: visibilityJidList.length,
      sample: visibilityJidList.slice(0, 8).map(__deskproMaskJid),
      user: __deskproMaskJid(__deskproNormalizeStatusJid(sock?.user?.id || sock?.user?.jid || ""))
    });

    try {
      const statusJidList = visibilityJidList;
      if (!statusJidList.length) {
        throw new Error("Não encontrei contatos sincronizados para definir a visibilidade do status. Abra Dispositivos, mantenha a conexão ativa por alguns segundos e tente novamente.");
      }
      const sendOptions = {
        ...options,
        broadcast: true,
        statusJidList,
        mediaUploadTimeoutMs: 120000
      };
      const usedMode = "status-visibility-list";
      __deskproStatusLog("status.post.send-start", {
        id,
        name,
        profiles: 1,
        audienceMode: usedMode,
        audienceCount: statusJidList.length,
        type: data.statusType,
        contentKeys: Object.keys(content || {}),
        optionKeys: Object.keys(sendOptions || {})
      });
      const sent = await sock.sendMessage("status@broadcast", content, sendOptions);
      if (!sent?.key || (sent.key.remoteJid && sent.key.remoteJid !== "status@broadcast")) {
        throw new Error("O WhatsApp não confirmou a publicação do status. Atualize as conexões, abra Dispositivos e tente novamente.");
      }
      __deskproRegisterStatusPost(id, sent.key);
      __deskproStatusLog("status.post.send-ok", {
        id,
        name,
        profiles: 1,
        audienceCount: statusJidList.length,
        contactAudienceCount: visibilityJidList.length,
        usedOwnFallback: false,
        mode: usedMode,
        sentKeys: Object.keys(sent || {}),
        messageKey: {
          id: sent?.key?.id,
          remoteJid: sent?.key?.remoteJid,
          participant: sent?.key?.participant
        }
      });
      results.push({
        id,
        name,
        status: true,
        profiles: 1,
        viewers: 0,
        audienceCount: statusJidList.length,
        contactAudienceCount: visibilityJidList.length,
        usedOwnFallback: false,
        mode: usedMode,
        messageKey: sent?.key || null,
        fileInfo: fileInfo ? { fileName: path.basename(fileInfo.filePath || ""), size: fileInfo.size, mimetype: fileInfo.mimetype } : null,
        message: "Status publicado no perfil selecionado."
      });
    } catch (error) {
      __deskproStatusLog("status.post.send-error", {
        id,
        name,
        message: error?.message || String(error),
        stack: error?.stack
      });
      results.push({ id, name, status: false, message: error?.message || String(error) });
    }
  }

  const successCount = results.filter((item) => item.status).length;
  __deskproGuardLog("status.post", {
    successCount,
    failCount: results.length - successCount,
    type: data.statusType
  });
  if (!successCount) {
    return {
      status: false,
      message: results.find((item) => item.message)?.message || "Não foi possível postar o status.",
      results
    };
  }
  return {
    status: successCount > 0,
    message: successCount > 0
      ? `Status publicado em ${successCount} ${successCount === 1 ? "perfil" : "perfis"}.`
      : "Não foi possível postar o status.",
    results
  };
};

const __deskproDeleteWhatsAppStatus = async (data = {}) => {
  const posts = Array.isArray(data.posts) ? data.posts : [];
  const results = [];
  for (const post of posts) {
    const id = String(post.instanceId || post.id || "");
    const messageKey = post.messageKey || post.key;
    const wa = globalThis.WhatsAppInstances?.[id];
    const sock = wa?.instance?.sock || wa?.sock || wa?.client;
    const name = wa?.name || wa?.instance?.name || id;
    if (!id || !messageKey || !sock || typeof sock.sendMessage !== "function") {
      results.push({ id, name, status: false, message: "Não foi possível apagar este status no WhatsApp." });
      continue;
    }
    try {
      await sock.sendMessage("status@broadcast", { delete: messageKey });
      results.push({ id, name, status: true });
    } catch (error) {
      results.push({ id, name, status: false, message: error?.message || String(error) });
    }
  }
  const successCount = results.filter((item) => item.status).length;
  return {
    status: successCount > 0,
    message: successCount > 0 ? "Status apagado do WhatsApp quando possível." : "Registro removido do relatório.",
    results
  };
};

const __wrapDeskproElectron = (electronModule) => {
  if (!electronModule || electronModule.__deskproElectronWrapped) return electronModule;
  return new Proxy(electronModule, {
    get(target, prop, receiver) {
      if (prop === "__deskproElectronWrapped") return true;
      if (prop === "app" && target.app && !target.app.__deskproQuitGuardWrapped) {
        const app = target.app;
        app.setName("DeskPro");
        if (process.platform === "win32") {
          app.setAppUserModelId("online.linksite.deskpro");
        }
        const originalQuit = app.quit.bind(app);
        const originalExit = app.exit.bind(app);
        app.quit = () => {
          __deskproGuardLog("app.quit", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) return;
          return originalQuit();
        };
        app.exit = (code) => {
          __deskproGuardLog("app.exit", { code, blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) return;
          return originalExit(code);
        };
        app.on("before-quit", (event) => {
          __deskproGuardLog("app.before-quit", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) event.preventDefault();
        });
        app.on("will-quit", (event) => {
          __deskproGuardLog("app.will-quit", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) event.preventDefault();
        });
        app.on("window-all-closed", (event) => {
          __deskproGuardLog("app.window-all-closed", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) event.preventDefault();
        });
        app.on("browser-window-created", (_event, window) => {
          __deskproGuardLog("app.browser-window-created");
          window.on("show", () => __deskproGuardLog("window.show"));
          window.on("hide", () => {
            __deskproGuardLog("window.hide-event", { blocked: __shouldBlockDeskproClose() });
            if (__shouldBlockDeskproClose() && !window.isDestroyed()) {
              setTimeout(() => {
                if (!window.isDestroyed()) {
                  window.setSkipTaskbar(false);
                  window.show();
                  window.focus();
                }
              }, 50);
            }
          });
          window.on("minimize", () => {
            __deskproGuardLog("window.minimize-event", { blocked: __shouldBlockDeskproClose() });
            if (__shouldBlockDeskproClose() && !window.isDestroyed()) {
              setTimeout(() => {
                if (!window.isDestroyed()) {
                  window.restore();
                  window.show();
                  window.focus();
                }
              }, 50);
            }
          });
          window.on("close", (event) => {
            __deskproGuardLog("window.close-event", { blocked: __shouldBlockDeskproClose() });
            if (__shouldBlockDeskproClose()) {
              event.preventDefault();
              window.setSkipTaskbar(false);
              window.show();
              window.focus();
            }
          });
        });
        app.__deskproQuitGuardWrapped = true;
        return app;
      }
      if (prop === "dialog" && target.dialog && !target.dialog.__deskproDialogWrapped) {
        const dialog = target.dialog;
        const originalShowErrorBox = dialog.showErrorBox?.bind(dialog);
        const originalShowMessageBox = dialog.showMessageBox.bind(dialog);
        const originalShowMessageBoxSync = dialog.showMessageBoxSync.bind(dialog);
        const brandOptions = (options = {}) => ({
          ...options,
          title: "DeskPro",
          message: String(options.message || ""),
          detail: String(options.detail || "")
        });
        dialog.showMessageBox = (...args) => {
          const optionsIndex = typeof args[0]?.isDestroyed === "function" ? 1 : 0;
          args[optionsIndex] = brandOptions(args[optionsIndex]);
          const text = `${args[optionsIndex]?.message || ""}\n${args[optionsIndex]?.detail || ""}`;
          if (__deskproShouldIgnoreUpdateError(text)) {
            __deskproGuardLog("dialog.update-error-suppressed", { text });
            return Promise.resolve({ response: 0, checkboxChecked: false });
          }
          return originalShowMessageBox(...args);
        };
        dialog.showMessageBoxSync = (...args) => {
          const optionsIndex = typeof args[0]?.isDestroyed === "function" ? 1 : 0;
          args[optionsIndex] = brandOptions(args[optionsIndex]);
          const text = `${args[optionsIndex]?.message || ""}\n${args[optionsIndex]?.detail || ""}`;
          if (__deskproShouldIgnoreUpdateError(text)) {
            __deskproGuardLog("dialog.update-error-suppressed-sync", { text });
            return 0;
          }
          return originalShowMessageBoxSync(...args);
        };
        if (originalShowErrorBox) {
          dialog.showErrorBox = (title, content) => {
            const text = `${title || ""}\n${content || ""}`;
            if (__deskproShouldIgnoreUpdateError(text)) {
              __deskproGuardLog("dialog.update-errorbox-suppressed", { text });
              return;
            }
            return originalShowErrorBox(title, content);
          };
        }
        dialog.__deskproDialogWrapped = true;
        return dialog;
      }
      if (prop === "ipcMain" && target.ipcMain && !target.ipcMain.__deskproActivationGuardWrapped) {
        const originalOn = target.ipcMain.on?.bind(target.ipcMain);
        const originalHandle = target.ipcMain.handle?.bind(target.ipcMain);
        if (originalHandle && !target.ipcMain.__deskproStatusAsyncHandlers) {
          try {
            originalHandle("deskpro-status-post", async (_event, data = {}) => __deskproPostWhatsAppStatus(data || {}));
            originalHandle("deskpro-status-delete", async (_event, data = {}) => __deskproDeleteWhatsAppStatus(data || {}));
            originalHandle("deskpro-status-views", async (_event, data = {}) => __deskproGetWhatsAppStatusViews(data || {}));
            target.ipcMain.__deskproStatusAsyncHandlers = true;
          } catch (error) {
            __deskproStatusLog("status.ipc.handle-register-error", { message: error?.message || String(error) });
          }
        }
        if (originalOn) {
          target.ipcMain.on = function deskproIpcMainOn(channel, listener) {
            if (channel === "task" && typeof listener === "function") {
              return originalOn(channel, async (event, payload) => {
                const type = payload?.type || payload?.data?.type;
                if (type === "deskpro.status.post" || type === "status.post") {
                  try {
                    event.returnValue = await __deskproPostWhatsAppStatus(payload?.data || {});
                  } catch (error) {
                    event.returnValue = { status: false, message: error?.message || String(error) };
                  }
                  return;
                }
                if (type === "deskpro.status.delete" || type === "status.delete") {
                  try {
                    event.returnValue = await __deskproDeleteWhatsAppStatus(payload?.data || {});
                  } catch (error) {
                    event.returnValue = { status: false, message: error?.message || String(error) };
                  }
                  return;
                }
                if (type === "deskpro.status.views" || type === "status.views") {
                  try {
                    event.returnValue = await __deskproGetWhatsAppStatusViews(payload?.data || {});
                  } catch (error) {
                    event.returnValue = { status: false, message: error?.message || String(error), results: [] };
                  }
                  return;
                }
                if (type === "deskpro.status.pick-file") {
                  try {
                    const statusType = String(payload?.data?.statusType || "image").toLowerCase();
                    const filters = statusType === "video"
                      ? [{ name: "Videos", extensions: ["mp4", "mov", "mkv", "webm"] }]
                      : statusType === "audio"
                        ? [{ name: "Audios", extensions: ["mp3", "m4a", "ogg", "opus", "wav"] }]
                        : [{ name: "Imagens", extensions: ["png", "jpg", "jpeg", "webp"] }];
                    const result = await target.dialog.showOpenDialog({
                      title: "Selecionar arquivo do status",
                      properties: ["openFile"],
                      filters
                    });
                    event.returnValue = {
                      status: !result.canceled && Boolean(result.filePaths?.[0]),
                      filePath: result.filePaths?.[0] || ""
                    };
                  } catch (error) {
                    event.returnValue = { status: false, message: error?.message || String(error) };
                  }
                  return;
                }
                if (type === "check_update" || type === "download_update" || type === "download_latest_build" || type === "download_latest_build_cancel") {
                  __deskproGuardLog("ipc.task.update-blocked", { type });
                  event.returnValue = { status: true, blocked: true, code: "update_disabled" };
                  return;
                }
                return listener(event, payload);
              });
            }
            return originalOn(channel, listener);
          };
        }
        target.ipcMain.on("deskpro-activation-state", (_event, state = {}) => {
          __deskproActivationRequired = Boolean(state.required);
          if (!__deskproActivationRequired) {
            __deskproUserCloseRequested = false;
          }
        });
        target.ipcMain.on("deskpro-activation-close", () => {
          __deskproUserCloseRequested = true;
          target.app?.quit();
        });
        target.ipcMain.on("deskpro-status-close-app", (event) => {
          __deskproUserCloseRequested = true;
          try {
            const sourceWindow = target.BrowserWindow?.fromWebContents?.(event.sender);
            if (sourceWindow && !sourceWindow.isDestroyed()) sourceWindow.close();
          } catch (error) {
            __deskproGuardLog("status.close-window-error", { message: error?.message || String(error) });
          }
          target.app?.quit();
        });
        target.ipcMain.__deskproActivationGuardWrapped = true;
        return target.ipcMain;
      }
      if (prop === "BrowserWindow" && target.BrowserWindow && !target.BrowserWindow.__deskproWindowGuardWrapped) {
        const OriginalBrowserWindow = target.BrowserWindow;
        const DeskProBrowserWindow = class extends OriginalBrowserWindow {
          constructor(options = {}) {
            const icon = path.join(process.resourcesPath || path.dirname(process.execPath), "icon.png");
            super({
              ...options,
              title: "DeskPro",
              icon,
              webPreferences: {
                ...(options.webPreferences || {}),
                webSecurity: true
              }
            });
            __deskproInstallNetworkGuard(this.webContents?.session);
            try { this.setTitle("DESK PRO"); this.on("page-title-updated", (event) => { event.preventDefault(); this.setTitle("DESK PRO"); }); } catch {}
            if (this.webContents && !this.webContents.__deskproSendWrapped) {
              const originalWebContentsSend = this.webContents.send.bind(this.webContents);
              this.webContents.send = (channel, payload, ...rest) => {
                if (__deskproShouldSuppressRendererMessage(channel, payload)) {
                  __deskproGuardLog("webContents.update-message-suppressed", { channel, payload });
                  return;
                }
                return originalWebContentsSend(channel, payload, ...rest);
              };
              this.webContents.__deskproSendWrapped = true;
            }
          }
        };
        const originalHide = OriginalBrowserWindow.prototype.hide;
        const originalMinimize = OriginalBrowserWindow.prototype.minimize;
        const originalClose = OriginalBrowserWindow.prototype.close;
        const originalSetSkipTaskbar = OriginalBrowserWindow.prototype.setSkipTaskbar;
        OriginalBrowserWindow.prototype.hide = function deskproHide() {
          __deskproGuardLog("BrowserWindow.hide", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) {
            this.show();
            this.focus();
            return;
          }
          return originalHide.apply(this, arguments);
        };
        OriginalBrowserWindow.prototype.minimize = function deskproMinimize() {
          __deskproGuardLog("BrowserWindow.minimize", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) {
            this.show();
            this.focus();
            return;
          }
          return originalMinimize.apply(this, arguments);
        };
        OriginalBrowserWindow.prototype.close = function deskproClose() {
          __deskproGuardLog("BrowserWindow.close", { blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) {
            this.show();
            this.focus();
            return;
          }
          return originalClose.apply(this, arguments);
        };
        OriginalBrowserWindow.prototype.setSkipTaskbar = function deskproSetSkipTaskbar(skip) {
          __deskproGuardLog("BrowserWindow.setSkipTaskbar", { skip, blocked: __shouldBlockDeskproClose() });
          if (__shouldBlockDeskproClose()) {
            return originalSetSkipTaskbar.call(this, false);
          }
          return originalSetSkipTaskbar.apply(this, arguments);
        };
        OriginalBrowserWindow.__deskproWindowGuardWrapped = true;
        DeskProBrowserWindow.__deskproWindowGuardWrapped = true;
        return DeskProBrowserWindow;
      }
      return Reflect.get(target, prop, receiver);
    }
  });
};

const __originalModuleLoad = Module._load;
Module._load = function deskproModuleLoad(request, parent, isMain) {
  const loaded = __originalModuleLoad.apply(this, arguments);
  if (request === "electron") return __wrapDeskproElectron(loaded);
  if (request === "axios") return __wrapDeskproAxios(loaded);
  if (request === "electron-updater") return __wrapDeskproElectronUpdater(loaded);
  return loaded;
};

const __ensureBaileys = async () => {
  try {
    return await import("baileys");
  } catch (error) {
    if (
      error instanceof SyntaxError &&
      typeof error.message === "string" &&
      error.message.includes("Unexpected token 'with'")
    ) {
      const resolvedPath = __loaderRequire.resolve("baileys/lib/index.js");
      return await import(pathToFileURL(resolvedPath).href);
    }
    throw error;
  }
};

if (!globalThis.__baileysModulePromise) {
  globalThis.__baileysModulePromise = __ensureBaileys();
}

__deskproClearLegacyTelemetryCache();
__deskproGuardLog("main.cjs require start");
try {
  module.exports = require("./main.cjs");
  __deskproGuardLog("main.cjs require complete");
} catch (error) {
  __deskproGuardLog("main.cjs require failed", {
    message: error?.message,
    stack: error?.stack
  });
  setTimeout(() => {
    throw error;
  }, 0);
}



