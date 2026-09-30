"use strict";
const { createLicenseCoordinator } = require("./deskpro-license-state.cjs");
const { DEFAULT_COUNTRY_SETTING, normalizeCountrySetting, sameCountrySetting } = require("./deskpro-localization.cjs");
let deskproLicenseCoordinator;
function getDeskproLicenseCoordinator() {
  if (!deskproLicenseCoordinator) {
    deskproLicenseCoordinator = createLicenseCoordinator({
      validate: (key) => licUtil._validateLicenseRemote(key),
      activate: (data) => licUtil._activateKeyRemote(data),
      publish: (state) => {
        updateLicenseValidationState(state, { source: "license-coordinator" });
        if (global.win && !global.win.isDestroyed()) {
          Promise.resolve(sendMessage("license", state)).catch(() => {});
        }
      }
    });
  }
  return deskproLicenseCoordinator;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// recovered-main-src/electron/main/index.js
var index_exports = {};
__export(index_exports, {
  MAIN_DIST: () => MAIN_DIST,
  RENDERER_DIST: () => RENDERER_DIST,
  USER_DATA_PATH: () => USER_DATA_PATH,
  VITE_DEV_SERVER_URL: () => VITE_DEV_SERVER_URL
});
module.exports = __toCommonJS(index_exports);

// recovered-main-src/electron/main/polyfills/graceful-fs.js
var import_node_fs = __toESM(require("node:fs"));
var import_node_module = require("node:module");
var import_graceful_fs = __toESM(require("graceful-fs"));
var GLOBAL_FLAG = "__deskproGracefulFsPatched";
var RETRYABLE_CODES = /* @__PURE__ */ new Set(["EMFILE", "ENFILE", "EBUSY"]);
var PROMISE_METHODS = [
  "access",
  "appendFile",
  "chmod",
  "chown",
  "copyFile",
  "lstat",
  "mkdir",
  "mkdtemp",
  "open",
  "opendir",
  "readdir",
  "readFile",
  "realpath",
  "rename",
  "rm",
  "rmdir",
  "stat",
  "symlink",
  "truncate",
  "unlink",
  "utimes",
  "writeFile"
];
var MAX_PROMISE_CONCURRENCY = Number(
  process?.env?.GRACEFUL_FS_PROMISE_LIMIT ?? (process.platform === "win32" ? 32 : 96)
);
var MAX_RETRIES = Number(process?.env?.GRACEFUL_FS_PROMISE_RETRIES ?? 5);
var BASE_BACKOFF_MS = 25;
var MAX_BACKOFF_MS = 750;
var requireFn = (0, import_node_module.createRequire)(__filename);
var wait = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
var createLimiter = (limit) => {
  let active = 0;
  const queue = [];
  const runNext = () => {
    if (!queue.length || active >= limit) {
      return;
    }
    const next = queue.shift();
    if (next) {
      active++;
      next().finally(() => {
        active--;
        runNext();
      });
    }
  };
  return (task) => new Promise((resolve, reject) => {
    const wrappedTask = async () => {
      try {
        const result = await task();
        resolve(result);
      } catch (error2) {
        reject(error2);
      }
    };
    if (active < limit) {
      active++;
      wrappedTask().finally(() => {
        active--;
        runNext();
      });
    } else {
      queue.push(() => wrappedTask());
    }
  });
};
var limiter = createLimiter(Math.max(1, MAX_PROMISE_CONCURRENCY));
var wrapWithRetry = (fn) => {
  const invoke = async (attempt = 0) => {
    try {
      return await fn();
    } catch (error2) {
      if (!RETRYABLE_CODES.has(error2?.code) || attempt >= MAX_RETRIES) {
        throw error2;
      }
      const delay = Math.min(
        BASE_BACKOFF_MS * Math.max(1, 2 ** attempt),
        MAX_BACKOFF_MS
      );
      await wait(delay);
      return invoke(attempt + 1);
    }
  };
  return () => limiter(invoke);
};
var patchFsPromises = () => {
  const targets = [];
  if (import_node_fs.default?.promises) {
    targets.push(import_node_fs.default.promises);
  }
  try {
    const cached = requireFn("node:fs/promises");
    if (cached && !targets.includes(cached)) {
      targets.push(cached);
    }
  } catch {
  }
  for (const target of targets) {
    for (const method of PROMISE_METHODS) {
      const original = target?.[method];
      if (typeof original !== "function") {
        continue;
      }
      if (original.__gracefulWrapped) {
        continue;
      }
      const wrapped = async (...args) => {
        return wrapWithRetry(
          () => Reflect.apply(original, target, args)
        )();
      };
      Object.defineProperty(wrapped, "__gracefulWrapped", {
        value: true,
        enumerable: false
      });
      target[method] = wrapped;
    }
  }
};
if (!globalThis[GLOBAL_FLAG]) {
  try {
    import_graceful_fs.default.gracefulify(import_node_fs.default);
    patchFsPromises();
    globalThis[GLOBAL_FLAG] = {
      patchedAt: Date.now(),
      processPid: process?.pid,
      promiseLimit: MAX_PROMISE_CONCURRENCY,
      promiseRetries: MAX_RETRIES
    };
    if (process?.env?.LOG_GRACEFUL_FS === "true") {
      console.info(
        "[graceful-fs] Applied global fs patch to avoid EMFILE limits",
        globalThis[GLOBAL_FLAG]
      );
    }
  } catch (error2) {
    console.warn("[graceful-fs] Failed to apply patch", error2);
  }
}

// recovered-main-src/electron/main/sentry.js
var import_electron = require("electron");
var Sentry = {
  IPCMode: { Protocol: "protocol" },
  init() {},
  addBreadcrumb() {},
  captureException() {},
  captureMessage() {},
  setContext() {},
  setTag() {},
  setUser() {}
};
var import_node_module2 = require("node:module");
var import_node_url = require("node:url");

// recovered-main-src/electron/main/helper/baileysNoise.js
var CONNECTION_ERROR_KEYWORDS = [
  "connection closed",
  "connection lost",
  "websocket is not open",
  "websocket was closed",
  "not connected",
  "socket is closing",
  "socket hang up",
  "econnreset",
  "timed out",
  "timeout waiting",
  "ping timeout",
  "stream closed",
  "transport closed",
  "restart required",
  "logged out",
  "bad session",
  "invalid session"
];
var SESSION_ERROR_KEYWORDS = [
  "messagecountererror",
  "failed to decrypt message with any known session",
  "key used already or never filled",
  "no keys for given direction",
  "skipped retry for sender key",
  "sender key is missing",
  "duplicate or old message"
];
var GENERIC_BAILEYS_KEYWORDS = [
  "baileys",
  "wa sock",
  "wa-sock",
  "wasocket",
  "sock:",
  "whatsappinstance",
  "whatsapp instance",
  "connection update",
  "signal identity",
  "mdsync",
  "proto:iq",
  "qr retry",
  "qrcode",
  "multi-device",
  "device removed"
];
var SOURCE_HINTS = [
  "baileys",
  "whatsapp",
  "wa socket",
  "wa-socket",
  "wasocket",
  "whatsappinstance",
  "whatsapp-instance",
  "whatsappinstance",
  "wa-instance",
  "sock:",
  "mdsync",
  "proto:iq",
  "signal"
];
var LOGGER_HINTS = [
  "baileys",
  "whatsapp",
  "wa-instance",
  "wa.connection",
  "whatsapp-instance"
];
var SOURCE_TAG_FIELDS = [
  "component",
  "category",
  "module",
  "source",
  "pipeline",
  "scope",
  "family"
];
var toLower = (value) => typeof value === "string" ? value.toLowerCase() : String(value ?? "").toLowerCase();
var includesKeyword = (text, keywords) => Boolean(text) && keywords.some((keyword) => text.includes(keyword));
var collectObjectValues = (input) => {
  if (!input) {
    return [];
  }
  if (Array.isArray(input)) {
    return input.map((entry) => {
      if (Array.isArray(entry)) {
        return entry.map((item) => item === null || item === void 0 ? "" : String(item)).join(" ");
      }
      if (typeof entry === "object") {
        return Object.values(entry || {}).filter((value) => value !== null && value !== void 0).map((value) => String(value));
      }
      return entry === null || entry === void 0 ? "" : String(entry);
    }).flat().filter(Boolean);
  }
  if (typeof input === "object") {
    return Object.values(input).map((value) => {
      if (value === null || value === void 0) {
        return "";
      }
      if (typeof value === "object") {
        return Object.values(value).filter((entry) => entry !== null && entry !== void 0).map((entry) => String(entry));
      }
      return String(value);
    }).flat().filter(Boolean);
  }
  return [String(input)];
};
var collectCandidateStringsFromError = (error2) => {
  const candidates = [];
  if (!error2) {
    return candidates;
  }
  if (typeof error2 === "string") {
    candidates.push(error2);
  }
  if (typeof error2?.message === "string") {
    candidates.push(error2.message);
  }
  if (typeof error2?.stack === "string") {
    candidates.push(error2.stack);
  }
  if (typeof error2?.reason === "string") {
    candidates.push(error2.reason);
  }
  if (typeof error2?.data?.message === "string") {
    candidates.push(error2.data.message);
  }
  if (typeof error2?.output?.payload?.message === "string") {
    candidates.push(error2.output.payload.message);
  }
  if (typeof error2?.output?.payload?.error === "string") {
    candidates.push(error2.output.payload.error);
  }
  return candidates;
};
var collectCandidateStringsFromContext = (context = {}) => {
  const candidates = [];
  SOURCE_TAG_FIELDS.forEach((field) => {
    const extraValue = context?.extra?.[field];
    if (typeof extraValue === "string") {
      candidates.push(extraValue);
    }
    const tagValue = context?.tags?.[field];
    if (typeof tagValue === "string") {
      candidates.push(tagValue);
    }
  });
  candidates.push(...collectObjectValues(context?.tags));
  candidates.push(...collectObjectValues(context?.extra));
  candidates.push(...collectObjectValues(context?.contexts));
  return candidates;
};
var collectCandidateStringsFromEvent = (event = {}) => {
  const values = [];
  if (typeof event?.message === "string") {
    values.push(event.message);
  }
  if (typeof event?.logentry?.formatted === "string") {
    values.push(event.logentry.formatted);
  }
  if (Array.isArray(event?.breadcrumbs)) {
    event.breadcrumbs.forEach((crumb) => {
      if (crumb?.message) {
        values.push(crumb.message);
      }
    });
  }
  if (Array.isArray(event?.exception?.values)) {
    event.exception.values.forEach((exception) => {
      if (exception) {
        if (exception.value) {
          values.push(exception.value);
        }
        if (exception.type) {
          values.push(exception.type);
        }
      }
    });
  }
  values.push(...collectObjectValues(event?.tags));
  values.push(...collectObjectValues(event?.extra));
  return values;
};
var hasExplicitHintFromContext = (context = {}) => {
  const pool = [];
  SOURCE_TAG_FIELDS.forEach((field) => {
    const extraValue = context?.extra?.[field];
    if (typeof extraValue === "string") {
      pool.push(extraValue);
    }
    const tagValue = context?.tags?.[field];
    if (typeof tagValue === "string") {
      pool.push(tagValue);
    }
  });
  return pool.map((value) => value.toLowerCase()).some((value) => includesKeyword(value, SOURCE_HINTS));
};
var hasExplicitHintFromEvent = (event = {}) => {
  const pool = [];
  if (event?.logger) {
    pool.push(event.logger);
  }
  if (event?.transaction) {
    pool.push(event.transaction);
  }
  if (event?.exception?.values) {
    event.exception.values.forEach((exception) => {
      if (exception?.type) {
        pool.push(exception.type);
      }
    });
  }
  SOURCE_TAG_FIELDS.forEach((field) => {
    const tagValue = event?.tags?.[field];
    if (typeof tagValue === "string") {
      pool.push(tagValue);
    }
  });
  pool.push(...collectObjectValues(event?.tags));
  pool.push(...collectObjectValues(event?.extra));
  return pool.map((value) => value.toLowerCase()).some((value) => includesKeyword(value, SOURCE_HINTS));
};
var shouldDropFromText = (text, { hasHint = false } = {}) => {
  if (!text) {
    return false;
  }
  const target = text.toLowerCase();
  if (includesKeyword(target, SESSION_ERROR_KEYWORDS)) {
    return true;
  }
  const connectionMatch = includesKeyword(target, CONNECTION_ERROR_KEYWORDS);
  const genericMatch = includesKeyword(target, GENERIC_BAILEYS_KEYWORDS);
  const hintMatch = hasHint || includesKeyword(target, SOURCE_HINTS);
  if ((connectionMatch || genericMatch) && hintMatch) {
    return true;
  }
  return false;
};
var shouldIgnoreBaileysError = (error2, context = {}) => {
  const errorStrings = collectCandidateStringsFromError(error2);
  const contextStrings = collectCandidateStringsFromContext(context);
  const haystack = [...errorStrings, ...contextStrings].filter(Boolean).join(" | ");
  const hasHint = hasExplicitHintFromContext(context) || LOGGER_HINTS.some((hint) => toLower(context?.logger || "").includes(hint));
  return shouldDropFromText(haystack, { hasHint });
};
var shouldIgnoreBaileysEvent = (event = {}) => {
  const values = collectCandidateStringsFromEvent(event);
  if (event?.logger) {
    values.push(event.logger);
  }
  const haystack = values.filter(Boolean).join(" | ");
  const hasHint = hasExplicitHintFromEvent(event) || LOGGER_HINTS.some((hint) => toLower(event?.logger || "").includes(hint));
  return shouldDropFromText(haystack, { hasHint });
};

// recovered-main-src/electron/main/sentry.js
var import_meta = {};
var SentryLevels = Object.freeze({
  Fatal: "fatal",
  Error: "error",
  Warning: "warning",
  Log: "log",
  Info: "info",
  Debug: "debug"
});
try {
  Object.defineProperty(Sentry, "Severity", {
    value: SentryLevels,
    configurable: true,
    enumerable: false,
    writable: false
  });
} catch {
}
var initialized = false;
var require2 = (0, import_node_module2.createRequire)(__filename);
var baileysModulePromise = null;
var cachedBaileysPackageVersion;
var resolvedBaileysPackageVersion = false;
function safeGetEnvValue(key, fallback = "") {
  try {
    const value = import_meta?.env?.[key];
    return value ?? fallback;
  } catch {
    return fallback;
  }
}
function configureDefaultContext() {
  try {
    Sentry.setTag(
      "app.name",
      safeGetEnvValue("VITE_APP_TITLE", "deskpro")
    );
    Sentry.setTag("product.id", safeGetEnvValue("VITE_APP_PRODUCT_ID"));
    Sentry.setTag("reseller.id", safeGetEnvValue("VITE_APP_USER_ID"));
    const appVersion = safeGetEnvValue("VITE_APP_VERSION", import_electron.app?.getVersion?.());
    if (appVersion) {
      Sentry.setTag("app.version", appVersion);
    }
    Sentry.setTag("app.packaged", import_electron.app?.isPackaged ? "true" : "false");
    Sentry.setTag("platform", process.platform);
    Sentry.setTag("arch", process.arch);
    Sentry.setTag(
      "env",
      process.env.NODE_ENV || safeGetEnvValue("MODE") || "development"
    );
    Sentry.setContext("electron", {
      version: process.versions.electron,
      node: process.versions.node,
      chrome: process.versions.chrome,
      v8: process.versions.v8
    });
  } catch {
  }
}
var loadBaileysModuleForTags = async () => {
  if (!baileysModulePromise) {
    baileysModulePromise = (async () => {
      try {
        return await import(
          /* @vite-ignore */
          "baileys"
        );
      } catch (error2) {
        if (error2 instanceof SyntaxError && typeof error2.message === "string" && error2.message.includes("Unexpected token 'with'")) {
          const resolvedPath = require2.resolve("baileys/lib/index.js");
          return await import((0, import_node_url.pathToFileURL)(resolvedPath).href);
        }
        throw error2;
      }
    })().catch(() => {
      baileysModulePromise = null;
      return null;
    });
  }
  return baileysModulePromise;
};
var resolveBaileysPackageVersion = () => {
  if (resolvedBaileysPackageVersion) {
    return cachedBaileysPackageVersion ?? null;
  }
  resolvedBaileysPackageVersion = true;
  try {
    const pkg = require2("baileys/package.json");
    if (pkg && typeof pkg.version === "string") {
      cachedBaileysPackageVersion = pkg.version;
    }
  } catch {
    cachedBaileysPackageVersion = null;
  }
  return cachedBaileysPackageVersion ?? null;
};
async function applyDynamicVersionTags() {
  try {
    const baileysPackageVersion = resolveBaileysPackageVersion();
    if (baileysPackageVersion) {
      Sentry.setTag("baileys.version", baileysPackageVersion);
    }
    const module2 = await loadBaileysModuleForTags();
    const fetchLatestBaileysVersion = module2?.fetchLatestBaileysVersion;
    if (typeof fetchLatestBaileysVersion === "function") {
      try {
        const { version, isLatest } = await fetchLatestBaileysVersion();
        if (Array.isArray(version) && version.length) {
          const waVersion = version.join(".");
          Sentry.setTag("whatsapp.version", waVersion);
          Sentry.setTag("whatsapp.version.isLatest", String(Boolean(isLatest)));
          Sentry.setContext("whatsapp.version", {
            values: version,
            formatted: waVersion,
            isLatest: Boolean(isLatest)
          });
        }
      } catch {
      }
    }
  } catch {
  }
}
function initSentry() {
  return Sentry;
}
initSentry();

// recovered-main-src/electron/main/index.js
var import_electron8 = require("electron");
var import_electron_debug = __toESM(require("electron-debug"));

// recovered-main-src/electron/main/db.js
var import_electron4 = require("electron");
var import_nedb_promises = __toESM(require("nedb-promises"));

// recovered-main-src/electron/main/patch.js
var import_fs_extra2 = __toESM(require("fs-extra"));
var import_electron3 = require("electron");

// recovered-main-src/electron/main/helper/common-utils.js
var import_axios = __toESM(require("axios"));
var import_fs_extra = __toESM(require("fs-extra"));
var import_node_path2 = __toESM(require("node:path"));
var import_uuid = require("uuid");
var import_sharp = __toESM(require("sharp"));

// recovered-main-src/electron/main/helper/logger.js
var import_pino = __toESM(require("pino"));
var import_node_fs2 = __toESM(require("node:fs"));
var import_node_path = __toESM(require("node:path"));
var import_node_url2 = require("node:url");
var import_node_module3 = require("node:module");
var import_electron2 = require("electron");
var __dirname = import_node_path.default.dirname(__filename);
var NODE_ENV = process.env.NODE_ENV || (process.env.VITE_DEV_SERVER_URL ? "development" : "production");
var LOG_LEVEL = process.env.LOG_LEVEL || (NODE_ENV === "production" ? "info" : "debug");
var LOG_PRETTY = (process.env.LOG_PRETTY ?? "").toLowerCase() === "true" || NODE_ENV !== "production";
var APP_ROOT = process.env.APP_ROOT || import_node_path.default.join(__dirname, "../..");
var resolveLogDir = () => {
  const envDir = typeof process.env.LOG_DIR === "string" ? process.env.LOG_DIR.trim() : "";
  if (envDir) {
    return envDir;
  }
  try {
    const userDataPath = typeof import_electron2.app?.getPath === "function" ? import_electron2.app.getPath("userData") : "";
    if (userDataPath) {
      return import_node_path.default.join(userDataPath, "logs");
    }
  } catch {
  }
  return import_node_path.default.join(process.cwd(), "logs");
};
var LOG_DIR = resolveLogDir();
var resolvePrettyTarget = () => {
  if (!LOG_PRETTY) {
    return null;
  }
  try {
    const req = (0, import_node_module3.createRequire)(__filename);
    return req.resolve("pino-pretty");
  } catch {
    return null;
  }
};
var LOG_PRETTY_TARGET = resolvePrettyTarget();
var buildTransport = () => {
  if (LOG_PRETTY_TARGET) {
    return {
      target: LOG_PRETTY_TARGET,
      options: {
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
        singleLine: false,
        colorize: true
      }
    };
  }
  import_node_fs2.default.mkdirSync(LOG_DIR, { recursive: true });
  return {
    target: "pino/file",
    options: {
      destination: import_node_path.default.join(LOG_DIR, "app.log"),
      mkdir: true,
      append: true
    }
  };
};
var deriveFunctionName = () => {
  const rawStack = new Error().stack;
  if (!rawStack) {
    return "unknown";
  }
  const frames = rawStack.split("\n").slice(3);
  for (const frame of frames) {
    const trimmed = frame.trim();
    if (!trimmed) {
      continue;
    }
    const match = trimmed.match(/^at\s+([^ (]+).*$/);
    if (match && match[1]) {
      const fnName = match[1];
      if (fnName.includes("Pino.") || fnName.includes("deriveFunctionName") || fnName.includes("logMethod")) {
        continue;
      }
      return fnName.trim();
    }
  }
  return "unknown";
};
var baseLogger = (0, import_pino.default)(
  {
    level: LOG_LEVEL,
    base: { service: process.env.LOG_SERVICE || "deskpro" },
    timestamp: import_pino.default.stdTimeFunctions.isoTime,
    hooks: {
      logMethod(inputArgs, method) {
        if (!Array.isArray(inputArgs)) {
          return method.apply(this, inputArgs);
        }
        const args = [...inputArgs];
        const firstArg = args[0];
        const existingFn = (firstArg && typeof firstArg === "object" && firstArg !== null ? firstArg.fn || firstArg.functionName || firstArg.function_name : null) ?? null;
        if (existingFn) {
          if (typeof firstArg === "object" && firstArg !== null) {
            args[0] = { ...firstArg, fn: existingFn };
          }
        } else if (typeof firstArg === "object" && firstArg !== null && !Array.isArray(firstArg)) {
          args[0] = {
            ...firstArg,
            fn: deriveFunctionName()
          };
        } else {
          args.unshift({ fn: deriveFunctionName() });
        }
        return method.apply(this, args);
      }
    }
  },
  import_pino.default.transport(buildTransport())
);
var getLogger = (name = "app", bindings = {}) => {
  if (!name || typeof name !== "string") {
    name = "app";
  }
  const normalizedBindings = bindings && typeof bindings === "object" ? bindings : {};
  return baseLogger.child({ logger: name, ...normalizedBindings });
};
var createNoopLogger = () => {
  const noop = () => {
  };
  return {
    level: "silent",
    fatal: noop,
    error: noop,
    warn: noop,
    info: noop,
    debug: noop,
    trace: noop,
    child: () => createNoopLogger()
  };
};
var createSocketLogger = (options = {}) => {
  const level = options.level || process.env.SOCKET_LOG_LEVEL || "silent";
  if (level === "silent") {
    return createNoopLogger();
  }
  return (0, import_pino.default)(
    {
      level,
      base: { service: "baileys-socket" },
      timestamp: import_pino.default.stdTimeFunctions.isoTime
    },
    import_pino.default.transport(buildTransport())
  );
};
var logger_default = getLogger;

// recovered-main-src/electron/main/helper/common-utils.js
var helperLogger = logger_default("helper-common-utils");
function flipCoin() {
  return Math.random() < 0.5;
}
function randomString(strLength, charSet) {
  var result = [];
  strLength = strLength || 5;
  charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  while (strLength--) {
    result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
  }
  return result.join("");
}
var MESSAGE_COLUMNS = [
  "name",
  "number",
  "var1",
  "var2",
  "var3",
  "var4",
  "var5",
  "var6",
  "var7",
  "var8",
  "var9",
  "var10"
];
function isValidWhatsappNumber(number) {
  if (number.includes("@s.whatsapp.net") || number.includes("@c.us")) {
    return true;
  } else if (number.includes("@lid")) {
    return true;
  }
  return false;
}
function applyVariable(message, data = {}) {
  let msg = message;
  for (const column of MESSAGE_COLUMNS) {
    const newValue = data[column];
    if (newValue && newValue !== "Enter Here") {
      msg = msg.replaceAll(`{{${column}}}`, newValue);
    }
  }
  msg = msg.replaceAll(`{{index}}`, data.index ?? 0).replaceAll(`{{randomText}}`, randomString(5));
  msg = msg?.replace(/{{(.*?)}}/g, (_, variable) => {
    if (variable.includes("|")) {
      const options = variable.split("|");
      return options[Math.floor(Math.random() * options.length)];
    }
    return `{{${variable}}}`;
  });
  return msg;
}
var BLANK_SPACE = "\u200E ";
function fixMessage(message, data = {}, useBlankSpace = true) {
  try {
    if (isEmpty(message)) {
      return message;
    }
    const msg = applyVariable(message, data);
    if (useBlankSpace) {
      let dummy = "";
      msg.split(" ").forEach((word) => {
        const isFix = flipCoin();
        dummy += word + (isFix ? BLANK_SPACE : " ");
      });
      return dummy.trim();
    } else {
      return msg.trim();
    }
  } catch (error2) {
    helperLogger.error({ err: error2 }, "Error in fixMessage");
    return message;
  }
}
function trimPhoneNumber(value) {
  const raw = String(value ?? "").trim();
  if (!raw.length) {
    return "";
  }
  const digitsOnly = raw.replace(/\D/g, "");
  if (!digitsOnly.length) {
    return "";
  }
  const withoutLeadingZeros = digitsOnly.replace(/^0+/, "");
  return withoutLeadingZeros || digitsOnly;
}
async function readFileData(path7, encoding) {
  return new Promise(async (resolve) => {
    try {
      await import_fs_extra.default.access(path7, import_fs_extra.default.constants.W_OK).catch(() => {
      });
      import_fs_extra.default.readFile(path7, encoding, (err, data) => {
        if (err) {
          return resolve(null);
        }
        return resolve(data);
      });
    } catch (err) {
      helperLogger.error({ err }, "readFileData access error");
      return resolve(null);
    }
  });
}
async function writeFileData(path7, content) {
  helperLogger.debug({ path: path7 }, "writeFileData started");
  return new Promise(async (resolve) => {
    try {
      await import_fs_extra.default.access(path7, import_fs_extra.default.constants.W_OK).catch(() => {
      });
      import_fs_extra.default.writeFile(path7, content, function(err) {
        if (err) {
          helperLogger.error({ err }, "writeFileData error");
          return resolve(false);
        } else {
          return resolve(true);
        }
      });
    } catch (err) {
      helperLogger.error({ err }, "writeFileData access error");
      return resolve(false);
    }
  });
}
function copyFileOrDir(src, dest) {
  try {
    const stats = import_fs_extra.default.statSync(src);
    if (stats.isDirectory()) {
      import_fs_extra.default.copySync(src, dest, { recursive: true });
    } else {
      import_fs_extra.default.copySync(src, dest);
    }
    import_fs_extra.default.access(src, import_fs_extra.default.constants.R_OK);
    return true;
  } catch (err) {
    helperLogger.error({ err }, "copyFileOrDir error");
    return false;
  }
}
function createDir(dir) {
  try {
    import_fs_extra.default.mkdirSync(dir, { recursive: true });
    helperLogger.info({ dir }, "Folder created");
    import_fs_extra.default.accessSync(dir, import_fs_extra.default.constants.R_OK);
    return true;
  } catch (err) {
    helperLogger.error({ err }, "createDir error");
    return false;
  }
}
function deleteFileOrDir(targetPath) {
  try {
    if (!import_fs_extra.default.existsSync(targetPath)) {
      return true;
    }
    const stats = import_fs_extra.default.statSync(targetPath);
    if (stats.isDirectory()) {
      import_fs_extra.default.removeSync(targetPath);
    } else {
      import_fs_extra.default.unlinkSync(targetPath);
    }
    return true;
  } catch (err) {
    if (err.code !== "ENOENT") {
      helperLogger.error({ err }, "deleteFileOrDir error");
    }
    return false;
  }
}
function randomMilliseconds(max, min = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
function sentryAddBreadcrumb(category, message, data = {}, level) {
  try {
    const crumb = { category, message };
    if (data && Object.keys(data).length) crumb.data = data;
    if (level) crumb.level = level;
    Sentry.addBreadcrumb(crumb);
  } catch {
  }
}
function sentryCaptureMetric(metricName, opts = {}) {
  try {
    Sentry.captureMessage(metricName, opts);
  } catch {
  }
}
function sentryCaptureException(err, extra = {}) {
  try {
    if (shouldIgnoreBaileysError(err, extra)) {
      helperLogger.debug(
        { message: err?.message, source: extra?.extra?.source },
        "Skipped noisy Baileys error for Sentry"
      );
      return null;
    }
    return Sentry.captureException(err, extra);
  } catch {
    return null;
  }
}
function sentrySetUser(user) {
  try {
    Sentry.setUser(user);
  } catch {
  }
}
function sentrySetContext(key, value) {
  try {
    Sentry.setContext(key, value);
  } catch {
  }
}
function shortKey(key) {
  try {
    return String(key).slice(0, 8);
  } catch {
    return "";
  }
}
function randomRange(myMin, myMax) {
  return Math.floor(
    Math.random() * (Math.ceil(myMax) - Math.floor(myMin) + 1) + myMin
  );
}
function validateJSON(body) {
  try {
    var data = JSON.parse(body);
    return data;
  } catch (error2) {
    helperLogger.error({ err: error2 }, "Invalid JSON payload");
    return null;
  }
}
function checkFileOrDirExists(filePath) {
  try {
    import_fs_extra.default.accessSync(filePath, import_fs_extra.default.constants.F_OK | import_fs_extra.default.constants.R_OK);
    const stats = import_fs_extra.default.statSync(filePath);
    helperLogger.debug(
      {
        filePath,
        type: stats.isFile() ? "file" : stats.isDirectory() ? "directory" : "other"
      },
      "Path exists and is accessible"
    );
    return true;
  } catch (error2) {
    if (error2?.code === "ENOENT") {
      helperLogger.debug(
        { filePath },
        "checkFileOrDirExists: path missing"
      );
    } else {
      helperLogger.warn(
        { err: error2, filePath },
        "File or directory does not exist or is inaccessible"
      );
    }
    return false;
  }
}
function isEmpty(value) {
  return value === void 0 || value === null || typeof value === "string" && value.trim() === "" || Array.isArray(value) && value.length === 0 || typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0;
}
function downloadFile(url2, fileName) {
  return new Promise(async (resolve) => {
    try {
      const response = await (0, import_axios.default)({
        method: "get",
        url: url2,
        responseType: "arraybuffer"
        // Set the response type to stream
      });
      const fileData = Buffer.from(response.data, "binary");
      if (!checkFileOrDirExists(downloadPath)) {
        createDir(downloadPath);
      }
      const filePath = import_node_path2.default.join(downloadPath, fileName);
      await writeFileData(filePath, fileData);
      helperLogger.info({ filePath }, "File saved successfully");
      resolve({
        status: true,
        filePath
      });
    } catch (error2) {
      helperLogger.error({ err: error2 }, "Error saving file");
      resolve({
        status: false,
        message: "download failed: " + error2.message
      });
    }
  });
}
function isReplyButtonOnly(buttons) {
  const result = buttons.find((button) => {
    return button.type != "replyButton";
  });
  return result ? false : true;
}
function processButton({
  buttons = [],
  format = "interactive",
  unsubscribeText = "Unsubscribe",
  data = {}
}) {
  if (!Array.isArray(buttons)) {
    throw new Error("Buttons must be an array");
  }
  if (!["reply", "template", "interactive"].includes(format)) {
    throw new Error(
      `Invalid format: ${format}. Must be reply, template, or interactive`
    );
  }
  const preparedButtons = [];
  const buttonConfig = {
    callButton: {
      formats: ["template", "interactive"],
      template: (btn) => ({
        callButton: {
          displayText: btn.title,
          phoneNumber: btn.payload ?? ""
        }
      }),
      interactive: (btn, id) => ({
        name: "cta_call",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title,
          phone_number: btn.payload ?? "",
          id
        }
      })
    },
    urlButton: {
      formats: ["template", "interactive"],
      template: (btn) => ({
        urlButton: {
          displayText: btn.title,
          url: btn.payload ?? ""
        }
      }),
      interactive: (btn, id) => ({
        name: "cta_url",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title,
          url: btn.payload ?? "",
          merchant_url: btn.payload ?? "",
          id
        }
      })
    },
    replyButton: {
      formats: ["reply", "template", "interactive"],
      reply: (btn, id) => ({
        buttonId: id,
        buttonText: { displayText: btn.title },
        type: 1
      }),
      template: (btn, id) => ({
        quickReplyButton: { displayText: btn.title, id }
      }),
      interactive: (btn, id) => ({
        name: "quick_reply",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title,
          id
        }
      })
    },
    copyButton: {
      formats: ["template", "interactive"],
      template: (btn, id) => ({
        quickReplyButton: {
          displayText: btn.title ?? "Copy",
          id,
          copyCode: btn.payload ?? ""
        }
      }),
      interactive: (btn, id) => ({
        name: "quick_reply",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title ?? "Copy",
          copy_code: btn.payload ?? "",
          id
        }
      })
    },
    reminderButton: {
      formats: ["template", "interactive"],
      template: (btn, id) => ({
        quickReplyButton: {
          displayText: btn.title ?? "Set Reminder",
          id,
          reminder: btn.payload ?? {}
        }
      }),
      interactive: (btn, id) => ({
        name: "quick_reply",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title ?? "Set Reminder",
          reminder: btn.payload ?? {},
          id
        }
      })
    },
    locationButton: {
      formats: ["template", "interactive"],
      template: (btn, id) => ({
        quickReplyButton: {
          displayText: btn.title ?? "Share Location",
          id,
          location: btn.payload ?? {}
        }
      }),
      interactive: (btn, id) => ({
        name: "quick_reply",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title ?? "Share Location",
          location: btn.payload ?? {},
          id
        }
      })
    },
    cancelReminderButton: {
      formats: ["template", "interactive"],
      template: (btn, id) => ({
        quickReplyButton: {
          displayText: btn.title ?? "Cancel Reminder",
          id,
          cancelReminder: btn.payload ?? ""
        }
      }),
      interactive: (btn, id) => ({
        name: "quick_reply",
        buttonParamsJson: {
          fix: true,
          display_text: btn.title ?? "Cancel Reminder",
          cancel_reminder: btn.payload ?? "",
          id
        }
      })
    },
    unsubscribeButton: {
      formats: ["reply", "template", "interactive"],
      reply: (btn, id) => ({
        buttonId: id,
        buttonText: { displayText: unsubscribeText ?? "Unsubscribe" },
        type: 1
      }),
      template: (btn, id) => ({
        quickReplyButton: { displayText: unsubscribeText ?? "Unsubscribe", id }
      }),
      interactive: (btn, id) => ({
        name: "quick_reply",
        buttonParamsJson: {
          fix: true,
          display_text: unsubscribeText ?? "Unsubscribe",
          id
        }
      })
    }
  };
  buttons.forEach((button, index) => {
    const config = buttonConfig[button.type];
    button.title = fixMessage(button.title, data, false);
    if (!config || !config.formats.includes(format)) return;
    const id = `${button.type}-button-${index}`;
    const buttonData = config[format](button, id);
    if (buttonData.buttonParamsJson) {
      buttonData.buttonParamsJson = JSON.stringify(buttonData.buttonParamsJson);
    }
    helperLogger.debug({ buttonData }, "Prepared interactive button");
    preparedButtons.push(buttonData);
  });
  return preparedButtons;
}
async function convertSingleToMultiFileAuthState(inputFile, outputDir) {
  try {
    const rawData = await import_fs_extra.default.readFile(inputFile, "utf-8");
    const authData = JSON.parse(rawData);
    if (!authData.creds || !authData.keys) {
      throw new Error("Invalid auth file: Missing creds or keys");
    }
    await import_fs_extra.default.mkdir(outputDir, { recursive: true });
    await import_fs_extra.default.writeFile(
      import_node_path2.default.join(outputDir, "creds.json"),
      JSON.stringify(authData.creds, null, 2),
      "utf-8"
    );
    await import_fs_extra.default.writeFile(
      import_node_path2.default.join(outputDir, "keys.json"),
      JSON.stringify(authData.keys, null, 2),
      "utf-8"
    );
    const otherKeys = Object.keys(authData).filter(
      (key) => key !== "creds" && key !== "keys"
    );
    for (const key of otherKeys) {
      await import_fs_extra.default.writeFile(
        import_node_path2.default.join(outputDir, `${key}.json`),
        JSON.stringify(authData[key], null, 2),
        "utf-8"
      );
    }
    helperLogger.info(
      { inputFile, outputDir },
      "Converted auth state to multi-file structure"
    );
  } catch (error2) {
    helperLogger.error({ err: error2 }, "Error converting auth state");
    throw error2;
  }
}
function isValidProxyUrl(proxyUrl) {
  const proxyRegex = /^(http|https|socks5):\/\/(?:([^\s:]+):([^\s@]+)@)?([^\s:]+):(\d{1,5})$/;
  const [, protocol2, username, password, host, port] = proxyUrl.match(proxyRegex) || [];
  const portNum = parseInt(port, 10);
  if (!proxyRegex.test(proxyUrl))
    return { valid: false, error: "Invalid proxy URL format" };
  if (portNum < 1 || portNum > 65535)
    return { valid: false, error: "Invalid port range" };
  const hostRegex = /^(?:(?:[a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/;
  if (!hostRegex.test(host))
    return { valid: false, error: "Invalid host format" };
  if (!["http", "https", "socks5"].includes(protocol2))
    return { valid: false, error: "Unsupported protocol" };
  return { valid: true, protocol: protocol2, username, password, host, port };
}

// recovered-main-src/electron/main/patch.js
var import_path = __toESM(require("path"));
var import_moment = __toESM(require("moment"));
var import_moment_timezone = require("moment-timezone");
var patchLogger = logger_default("db-patch");
async function databasePatchBefore() {
  patchLogger.info({ version: "4.0.0" }, "applying database patch");
  const autoRepliesPath = import_electron3.app.getPath("userData") + "/database/autoreplies.db";
  if (checkFileOrDirExists(autoRepliesPath)) {
    const newPath = import_electron3.app.getPath("userData") + "/database/auto-replies.db";
    import_fs_extra2.default.renameSync(autoRepliesPath, newPath);
  }
  const unsubscibesPath = import_electron3.app.getPath("userData") + "/database/unsubscribers.db";
  if (checkFileOrDirExists(unsubscibesPath)) {
    const newPath = import_electron3.app.getPath("userData") + "/database/unsubscribes.db";
    import_fs_extra2.default.renameSync(unsubscibesPath, newPath);
  }
}
async function databasePatchAfter(db2) {
  await db2.autoReplies.update(
    {
      messageType: "WelcomeMessage"
    },
    {
      $set: {
        messageType: "welcome"
      }
    },
    { multi: true }
  );
  await db2.autoReplies.update(
    {
      messageType: "autoReply"
    },
    {
      $set: {
        messageType: "auto-reply"
      }
    },
    { multi: true }
  );
  await db2.instances.update(
    {},
    {
      $set: {
        isMultiFileAuth: true
      }
    },
    {
      multi: true
    }
  );
  const setting = await db2.setting.findOne({});
  if (setting && setting.switchAccount !== void 0) {
    const data = setting;
    const newData = {
      _id: "app-setting",
      sending: {
        instance: {
          random: false,
          switchAccount: data?.switchAccount
          //Messages
        },
        delay: {
          enable: true,
          duration: {
            minimum: data?.waitFromTime ?? 5,
            maximum: data?.waitToTime ?? 10
          }
        },
        sleep: {
          enable: data?.sleep ?? false,
          afterMessages: data?.sleepAfter ?? 10,
          duration: {
            minimum: data?.sleepTime ?? 30,
            maximum: data?.sleepTime ?? 60
          }
        },
        welcomeMessage: {
          enable: data?.welcomeMessage ?? false,
          templateId: "",
          duration: data?.welcomeMessageDays ?? 7
          //Days
        },
        configuration: {
          sendParallel: data?.sendParallel ?? false,
          showNotification: data?.showMessageNotification ?? true,
          autoReply: data?.autoReply ?? true,
          autoRead: false,
          sendMedia: data?.sendMediaBeforeMessage ? "before" : "after"
        },
        unsubscribe: {
          enable: true,
          keyword: data?.unsubscribe ?? "STOP",
          templateId: ""
        },
        autoRejectCalls: {
          enable: false,
          templateId: ""
        }
      },
      country: {
        code: data?.country ?? "IN",
        dialCode: data?.countryCode ?? "91",
        language: data?.language ?? "en",
        timezone: data?.timezone ?? import_moment.default.tz.guess()
        // Default to user's local timezone
      },
      integration: {
        chatGPT: {
          enable: false,
          apiKey: "",
          model: "gpt-5",
          temperature: 0.6,
          systemMessage: ""
        },
        gemini: {
          enable: false,
          apiKey: "",
          model: "gemini-2.5-pro",
          temperature: 0.4,
          systemMessage: "",
          safetyLevel: "default"
        },
        grok: {
          enable: false,
          apiKey: "",
          model: "grok-4",
          temperature: 0.7,
          systemMessage: "",
          baseUrl: "https://api.x.ai/v1"
        }
      },
      whatsHook: {
        enable: data?.hookNumber ? true : false,
        phoneNumbers: data?.hookNumber ? [...data.hookNumber] : []
      },
      storage: {
        autoClear: data?.dataExpire ?? true,
        clearInDays: data?.dataExpireInDays ?? 30,
        // Days
        capacity: data?.dataClearInMB ?? 512,
        // MB
        showAlert: data?.dataClearAlert ?? true
      }
    };
    await db2.setting.update(
      {
        _id: newData._id
      },
      newData,
      { upsert: true }
    );
    patchLogger.info("settings migrated successfully");
  }
  const sessionPath3 = import_path.default.join(import_electron3.app.getPath("userData"), "sessions");
  const sessionsFiles = await import_fs_extra2.default.readdir(sessionPath3);
  await asyncForEach(sessionsFiles, async (file) => {
    const filePath = import_path.default.join(sessionPath3, file);
    if (checkFileOrDirExists(filePath)) {
      const stats = await import_fs_extra2.default.stat(filePath);
      if (stats.isFile()) {
        const fileName = file.split(".")[0];
        if (!fileName.includes("backup")) {
          const instance = await db2.instances.findOne({ _id: fileName });
          if (instance && instance.status != "Ready") {
            await convertSingleToMultiFileAuthState(
              filePath,
              import_path.default.join(sessionPath3, fileName)
            );
          }
        }
      }
    }
  });
}

// recovered-main-src/electron/main/db.js
var dbLogger = logger_default("db");
dbLogger.debug({ cwd: process.cwd() }, "initializing nedb stores from cwd");
dbLogger.debug({ userDataPath: import_electron4.app.getPath("userData") }, "nedb userData path");
import_fs_extra2.default.ensureDirSync(import_path.default.join(import_electron4.app.getPath("userData"), "database"));
import_fs_extra2.default.ensureDirSync(import_path.default.join(import_electron4.app.getPath("userData"), "sessions"));
databasePatchBefore();
var dbFactory = (fileName, timestampData) => import_nedb_promises.default.create({
  filename: import_electron4.app.getPath("userData") + "/database/" + fileName,
  timestampData: timestampData ?? true,
  autoload: true,
  corruptAlertThreshold: 1
});
var db = {
  instances: dbFactory("instances.db"),
  autoReplies: dbFactory("auto-replies.db"),
  messages: dbFactory("messages.db"),
  receivedMessages: dbFactory("received-messages.db"),
  templates: dbFactory("templates.db"),
  setting: dbFactory("setting.db"),
  campaigns: dbFactory("campaign.db"),
  contacts: dbFactory("contacts.db"),
  unsubscribes: dbFactory("unsubscribes.db"),
  numbers: dbFactory("numbers.db", false),
  chatBot: dbFactory("chatBot.db")
};
db.messages.ensureIndex({ fieldName: "campaignId" }, function(err) {
});
db.messages.ensureIndex({ fieldName: "instanceId" }, function(err) {
});
db.autoReplies.ensureIndex({ fieldName: "keyword" }, function(err) {
});
db.chatBot.ensureIndex({ fieldName: "instanceKey" }, function(err) {
});
db.chatBot.ensureIndex({ fieldName: "contactKey" }, function(err) {
});
db.chatBot.ensureIndex({ fieldName: "timestamp" }, function(err) {
});
databasePatchAfter(db).catch((error2) => {
  patchLogger.error({ err: error2?.message || error2 }, "database patch after failed");
});
var db_default = db;

// recovered-main-src/electron/main/db.action.js
var import_electron5 = require("electron");
var import_node_path3 = __toESM(require("node:path"));
var dbLogger2 = logger_default("db-action");
var dbAction = class {
  db;
  constructor(db2) {
    dbLogger2.info("dbAction initialized");
    this.db = db2;
  }
  getHelloWorld() {
    return "Hello World";
  }
  async ensureIndex() {
    const setting = await this.getSetting();
    if (setting) {
      this.db.messages.ensureIndex(
        {
          fieldName: "createdAt",
          expireAfterSeconds: (setting?.storage?.autoClear ?? true ? setting?.storage?.clearInDays ?? 30 : 30) * 86400
        },
        function(err) {
        }
      );
      this.db.campaigns.ensureIndex(
        {
          fieldName: "createdAt",
          expireAfterSeconds: (setting?.storage?.autoClear ?? true ? setting?.storage?.clearInDays ?? 30 : 30) * 86400
        },
        function(err) {
        }
      );
      this.db.receivedMessages.ensureIndex(
        {
          fieldName: "createdAt",
          expireAfterSeconds: (setting?.storage?.autoClear ?? true ? setting?.storage?.clearInDays ?? 30 : 30) * 86400
        },
        function(err) {
        }
      );
    } else {
      dbLogger2.warn("database setting not found; skipping TTL indexes");
    }
  }
  //numbers
  async addNumber(data) {
    const exist = await this.db.numbers.findOne({ number: data.number });
    if (exist) {
      await this.db.numbers.update({ number: data.number }, { $set: data }, {});
    } else {
      await this.db.numbers.insert(data);
    }
    return;
  }
  async findName(number) {
    const exist = await this.db.numbers.findOne({ number });
    if (exist) {
      return exist.name;
    } else {
      return "";
    }
  }
  //instance
  async createInstance(data) {
    const tag = await this.db.instances.insert(data);
    return tag;
  }
  async getInstance(data) {
    const instance = await this.db.instances.findOne(data);
    return instance;
  }
  async getAllInstances(where) {
    const instances = await this.db.instances.find(where ?? {}).sort({ createdAt: 1 });
    return { instances };
  }
  async updateInstance(where, data) {
    const result = await this.db.instances.update(where, { $set: data }, {});
    return result;
  }
  async removeInstance(where) {
    const result = await this.db.instances.remove(where, {});
    return result;
  }
  //template
  async createTemplate(data) {
    const tag = await this.db.templates.insert(data);
    return tag;
  }
  async getTemplate(data) {
    const instance = await this.db.templates.findOne(data);
    return instance;
  }
  async clearAllTemplates() {
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "templates.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      await writeFileData(dbPath, "");
    }
    await this.db.templates.loadDatabase();
    return true;
  }
  async getAllTemplates() {
    const templates = await this.db.templates.find({}).sort({ createdAt: -1 });
    return { templates };
  }
  async updateTemplate(where, data) {
    const result = await this.db.templates.update(where, { $set: data }, {});
    return result;
  }
  async removeTemplate(where) {
    const result = await this.db.templates.remove(where, {});
    return result;
  }
  async createAutoReply(data) {
    const tag = await this.db.autoReplies.insert(data);
    return tag;
  }
  async getAutoReply(data) {
    const ar = await this.db.autoReplies.findOne(data);
    return ar;
  }
  async getAllAutoReplies() {
    const autoReplies = await this.db.autoReplies.find({
      keyword: {
        $ne: "bs-welcome"
      }
    }).sort({ createdAt: -1 });
    return { autoReplies };
  }
  //welcome message
  async getAllWelcomeMessage() {
    const autoReplies = await this.db.autoReplies.find({
      keyword: "bs-welcome"
    }).sort({ createdAt: -1 });
    return { autoReplies };
  }
  async updateAutoReply(where, data) {
    const result = await this.db.autoReplies.update(
      where,
      { $set: data },
      { multi: false }
    );
    return result;
  }
  async removeAutoReply(where) {
    const result = await this.db.autoReplies.remove(where, {});
    return result;
  }
  async clearAutoReplyMessage() {
    const result = await this.db.messages.remove(
      { messageType: "autoReply" },
      { multi: true }
    );
    return result;
  }
  //campaigns
  async getAllCampaigns() {
    const campaigns = await this.db.campaigns.find({}).sort({ createdAt: -1 });
    return { campaigns };
  }
  async getCampaign(data) {
    const campaign = await this.db.campaigns.findOne(data);
    return campaign;
  }
  async getMessageResponse(id) {
    const msg = await this.db.messages.findOne({ "response.id": id });
    if (msg) {
      dbLogger2.debug({ responseId: id }, "message response found");
      return msg.response;
    }
    dbLogger2.debug({ responseId: id }, "message response not found");
    return null;
  }
  async updateMessagePoll(id, data) {
    const result = await this.db.messages.update(
      { "response.id": id },
      { $set: data },
      { multi: false }
    );
    return result;
  }
  async createCampaign(data) {
    const tag = await this.db.campaigns.insert(data);
    return tag;
  }
  async updateCampaign(where, data) {
    const result = await this.db.campaigns.update(
      where,
      { $set: data },
      { multi: false }
    );
    return result;
  }
  async removeCampaign(where) {
    const result = await this.db.campaigns.remove(where, {});
    return result;
  }
  async clearAllCampaign() {
    const result = await this.db.campaigns.remove({}, { multi: true });
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "campaigns.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      writeFileData(dbPath, "");
    }
    await this.db.campaigns.loadDatabase();
    this.db.messages.remove(
      { campaignId: { $exists: true } },
      { multi: true },
      function(err, numRemoved) {
        dbLogger2.info({ removedMessages: numRemoved }, "campaign-linked messages cleared");
      }
    );
    return true;
  }
  async clearAllAutoReplies() {
    const result = await this.db.autoReplies.remove({}, { multi: true });
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "auto-replies.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      await writeFileData(dbPath, "");
    }
    await this.db.autoReplies.loadDatabase();
    return true;
  }
  //Received Messages
  async getAllReceivedMessage() {
    const messages = await this.db.receivedMessages.find({}).sort({ createdAt: -1 });
    return { messages };
  }
  async clearAllReceivedMessage() {
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "received-messages.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      await writeFileData(dbPath, "");
    }
    await this.db.receivedMessages.loadDatabase();
    return true;
  }
  //Sent Messages
  async getAllMessage() {
    const messages = await this.db.messages.find({});
    return { messages };
  }
  async getMessage(data) {
    const msg = await this.db.messages.findOne(data);
    return msg;
  }
  //setting
  async createSetting(data) {
    const setting = await this.db.setting.insert(data);
    return setting;
  }
  async getSetting() {
    const setting = await this.db.setting.findOne({
      _id: "app-setting"
    }).sort({ createdAt: -1 });
    return setting;
  }
  async saveSetting(data) {
    dbLogger2.info({ data }, "saving app setting");
    const result = await this.db.setting.update(
      { _id: "app-setting" },
      {
        $set: data
      },
      {
        multi: false
      }
    );
    return result;
  }
  async clear() {
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "campaign.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      await writeFileData(dbPath, "");
    }
    await this.db.campaigns.loadDatabase();
    const dbPath2 = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "messages.db"
    );
    if (checkFileOrDirExists(dbPath2)) {
      await writeFileData(dbPath, "");
    }
    await this.db.messages.loadDatabase();
    dbLogger2.info("campaigns cleared");
    return true;
  }
  //contacts
  async getAllContact() {
    const contacts = await this.db.contacts.find({});
    return { contacts };
  }
  async clearAllContact() {
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "contacts.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      await writeFileData(dbPath, "");
    }
    await this.db.contacts.loadDatabase();
    return true;
  }
  async getContact(id) {
    const contact = await this.db.contacts.findOne({ _id: id });
    return contact;
  }
  async createContact(data) {
    const tag = await this.db.contacts.insert(data);
    return tag;
  }
  async saveContact(where, data) {
    const result = await this.db.contacts.update(
      where,
      { $set: data },
      { multi: false }
    );
    return result;
  }
  async removeContact(where) {
    const result = await this.db.contacts.remove(where, {});
    return result;
  }
  //unsubscribes
  async clearAllUnsubscribes() {
    const dbPath = import_node_path3.default.join(
      import_electron5.app.getPath("userData"),
      "database",
      "unsubscribes.db"
    );
    if (checkFileOrDirExists(dbPath)) {
      await writeFileData(dbPath, "");
    }
    await this.db.unsubscribes.loadDatabase();
    return true;
  }
  async getAllUnsubscribes() {
    const unsubscribes = await this.db.unsubscribes.find({});
    return { unsubscribes };
  }
  async addUnsubscribesList(data) {
    await this.db.unsubscribes.insert(data);
    return true;
  }
  async addUnsubscribe(data) {
    const tag = await this.db.unsubscribes.insert(data);
    return tag;
  }
  async removeUnsubscribe(where) {
    const result = await this.db.unsubscribes.remove(where, {});
    return result;
  }
  async getUnsubscribe(id) {
    const unsubscribe = await this.db.unsubscribes.findOne({ _id: id });
    return unsubscribe;
  }
  async getUnsubscribeByNumber(number) {
    const unsubscribe = await this.db.unsubscribes.findOne({
      number
    });
    return unsubscribe;
  }
  // ChatBot conversation log helpers
  normalizeChatBotSenderType(senderType) {
    if (!senderType) {
      return "customer";
    }
    const normalized = String(senderType).toLowerCase();
    if (normalized === "owner" || normalized === "ai") {
      return normalized;
    }
    return "customer";
  }
  normalizeChatBotMessageType(messageType) {
    if (typeof messageType === "string" && messageType.trim().length > 0) {
      return messageType.trim();
    }
    return "text";
  }
  sanitizeChatBotPayload(payload) {
    if (payload === null || payload === void 0) {
      return null;
    }
    if (typeof payload === "object") {
      try {
        return JSON.parse(JSON.stringify(payload));
      } catch (err) {
        dbLogger2.warn({ err: err?.message }, "failed to clone chatbot payload");
        return payload;
      }
    }
    return String(payload);
  }
  sanitizeChatBotMetadata(metadata) {
    const sanitized = this.sanitizeChatBotPayload(metadata);
    if (sanitized && typeof sanitized === "object") {
      return sanitized;
    }
    return {};
  }
  async appendChatBotConversationEntry(entry = {}) {
    const instanceKey = String(entry.instanceKey || "").trim();
    const contactKey = String(entry.contactKey || "").trim();
    if (!instanceKey || !contactKey) {
      throw new Error("instanceKey and contactKey are required");
    }
    const doc = {
      instanceKey,
      contactKey,
      timestamp: Number.isFinite(entry.timestamp) ? entry.timestamp : Date.now(),
      senderType: this.normalizeChatBotSenderType(entry.senderType),
      messageType: this.normalizeChatBotMessageType(entry.messageType),
      payload: this.sanitizeChatBotPayload(entry.payload),
      metadata: this.sanitizeChatBotMetadata(entry.metadata)
    };
    if (entry.referenceId) {
      doc.referenceId = String(entry.referenceId);
    }
    return await this.db.chatBot.insert(doc);
  }
  async getChatBotConversationEntries(instanceKey, contactKey, options = {}) {
    const normalizedInstance = String(instanceKey || "").trim();
    const normalizedContact = String(contactKey || "").trim();
    if (!normalizedInstance || !normalizedContact) {
      return [];
    }
    const limit = Number.isFinite(options.limit) ? options.limit : null;
    const useLatestWindow = Number.isFinite(limit) && limit > 0;
    let cursor = this.db.chatBot.find({ instanceKey: normalizedInstance, contactKey: normalizedContact }).sort({ timestamp: useLatestWindow ? -1 : 1 });
    if (useLatestWindow) {
      cursor = cursor.limit(limit);
    }
    const results = await cursor;
    if (useLatestWindow && Array.isArray(results) && results.length > 1) {
      return results.slice().sort((a, b) => Number(a?.timestamp ?? 0) - Number(b?.timestamp ?? 0));
    }
    return results;
  }
  async getLatestChatBotConversationEntry(instanceKey, contactKey) {
    const normalizedInstance = String(instanceKey || "").trim();
    const normalizedContact = String(contactKey || "").trim();
    if (!normalizedInstance || !normalizedContact) {
      return null;
    }
    const result = await this.db.chatBot.find({ instanceKey: normalizedInstance, contactKey: normalizedContact }).sort({ timestamp: -1 }).limit(1);
    if (Array.isArray(result) && result.length) {
      return result[0];
    }
    return null;
  }
};
var db_action_default = dbAction;

// recovered-main-src/electron/main/helper/axiosInstance.js
var import_axios2 = __toESM(require("axios"));
var import_https = __toESM(require("https"));
var httpsAgent = new import_https.default.Agent({
  rejectUnauthorized: true
});
var axiosInstance = import_axios2.default.create({
  baseURL: `https://deskpro.superzapmarketing.net/`,
  //baseURL: `https://deskpro.superzapmarketing.net/`,
  timeout: 1e3 * 60 * 2
  // 2 minutes,
});
axiosInstance.interceptors.request.use(async (config) => {
  try {
    sentryAddBreadcrumb("http.request", `${config.method?.toUpperCase?.() ?? "REQUEST"} ${config.url}`, { url: config.url, method: config.method });
  } catch {
  }
  config.headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
  config.httpsAgent = httpsAgent;
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    try {
      sentryAddBreadcrumb("http.response", `${response.config.method?.toUpperCase?.() ?? "RESPONSE"} ${response.config.url}`, { status: response.status });
    } catch {
    }
    return response;
  },
  (error2) => {
    try {
      sentryAddBreadcrumb("http.error", error2?.message ?? "axios error", {}, SentryLevels.Error);
      sentryCaptureException(error2);
    } catch {
    }
    return Promise.reject(error2);
  }
);
var axiosInstance_default = axiosInstance;

// recovered-main-src/electron/main/lic.util.js
var import_node_machine_id = require("node-machine-id");

// recovered-main-src/electron/main/system.info.js
var import_node_os = __toESM(require("node:os"));
var import_os_name = __toESM(require("os-name"));
var _platform = process.platform;
var osInfo = async () => {
  var hostname = "";
  var release = "";
  var arch = "";
  var name = "";
  var release = "";
  var version = "";
  var memory = 0;
  var cpuModel = "";
  var cpuCount = 0;
  try {
    name = (0, import_os_name.default)(import_node_os.default.platform(), import_node_os.default.release());
    hostname = import_node_os.default.hostname();
    release = import_node_os.default.release();
    arch = import_node_os.default.arch();
    memory = import_node_os.default.totalmem();
    const cpus = import_node_os.default.cpus?.();
    if (Array.isArray(cpus) && cpus.length) {
      cpuModel = cpus[0]?.model ?? "";
      cpuCount = cpus.length;
    }
  } catch (e) {
  }
  return {
    name,
    version,
    platform: _platform === "win32" ? "Windows" : _platform,
    arch,
    release,
    hostname,
    memory,
    cpuModel,
    cpuCount
  };
};
var system_info_default = { osInfo };

// recovered-main-src/electron/main/lic.util.js
var import_electron6 = require("electron");

// recovered-main-src/electron/main/secure-keys.js
var import_crypto = __toESM(require("crypto"));
var json = {
  stringify: function(obj, replacer, spacing) {
    return JSON.stringify(obj, replacer || null, spacing || 2);
  },
  parse: JSON.parse
};
var secure_keys_default = Secure;
function Secure(opts) {
  opts = opts || {};
  this.secret = typeof opts === "string" ? opts : opts.secret;
  this.format = opts.format || json;
  this.alg = opts.alg || "aes-256-ctr";
  this.keyLength = 32;
  this.ivLength = 16;
  if (!this.secret) throw new Error("Secret is a required option");
}
Secure.prototype.deriveKey = function deriveKey(secret) {
  return import_crypto.default.pbkdf2Sync(secret, "salt", 1e5, this.keyLength, "sha256");
};
Secure.prototype.encrypt = function encrypt(data) {
  const self = this;
  const key = self.deriveKey(self.secret);
  return Object.keys(data).reduce(function(acc, keyName) {
    const value = self.format.stringify(data[keyName]);
    const { iv, encrypted } = cipherConvert(value, {
      alg: self.alg,
      key,
      encs: { input: "utf8", output: "hex" },
      ivLength: self.ivLength
    });
    acc[keyName] = {
      alg: self.alg,
      iv: iv.toString("hex"),
      // Store IV as hex
      value: encrypted
    };
    return acc;
  }, {});
};
Secure.prototype.decrypt = function decrypt(data) {
  const self = this;
  const key = self.deriveKey(self.secret);
  return Object.keys(data).reduce(function(acc, keyName) {
    let decrypted;
    if (data[keyName].iv) {
      decrypted = cipherConvert(data[keyName].value, {
        alg: data[keyName].alg || self.alg,
        key,
        iv: Buffer.from(data[keyName].iv, "hex"),
        // Convert hex IV back to Buffer
        encs: { input: "hex", output: "utf8" }
      });
    } else {
      decrypted = legacyCipherConvert(data[keyName].value, {
        alg: data[keyName].alg || self.alg,
        secret: self.secret,
        // Use raw secret for legacy
        encs: { input: "hex", output: "utf8" }
      });
    }
    acc[keyName] = self.format.parse(decrypted);
    return acc;
  }, {});
};
function cipherConvert(contents, opts) {
  const encs = opts.encs;
  if (encs.output === "hex") {
    const iv = import_crypto.default.randomBytes(opts.ivLength);
    const cipher = import_crypto.default.createCipheriv(opts.alg, opts.key, iv);
    const encrypted = cipher.update(contents, encs.input, encs.output) + cipher.final(encs.output);
    return { iv, encrypted };
  } else {
    const decipher = import_crypto.default.createDecipheriv(opts.alg, opts.key, opts.iv);
    return decipher.update(contents, encs.input, encs.output) + decipher.final(encs.output);
  }
}
function legacyCipherConvert(contents, opts) {
  const encs = opts.encs;
  const decipher = import_crypto.default.createDecipher(opts.alg, opts.secret);
  return decipher.update(contents, encs.input, encs.output) + decipher.final(encs.output);
}

// recovered-main-src/electron/main/lic.util.js
var import_electron_store = __toESM(require("electron-store"));
var licLogger = logger_default("lic-util");
var LicUtil = class {
  deviceId;
  seck;
  store;
  systemInfo = null;
  softwareInfo = null;
  licKey = null;
  #initialized = false;
  // Flag to track initialization
  // NOTE: Sentry helpers are provided by ./helper/common-utils
  constructor() {
    this.init();
  }
  async init() {
    if (this.#initialized) return;
    licLogger.debug(
      { productId: "deskpro" },
      "initializing license util"
    );
    try {
      this.deviceId = await (0, import_node_machine_id.machineId)() ?? "deskpro";
      licLogger.debug({ deviceId: this.deviceId }, "device id resolved");
      try {
        sentrySetUser({ id: this.deviceId });
        sentryAddBreadcrumb("session", "license.init", {
          deviceId: this.deviceId
        });
        sentryCaptureMetric("metric.session", {
          level: "info",
          tags: { deviceId: this.deviceId },
          extra: { action: "init" }
        });
      } catch {
      }
    } catch (error2) {
      licLogger.error({ err: error2 }, "error getting machine id");
      this.deviceId = "deskpro";
    }
    this.store = new import_electron_store.default({ encryptionKey: this.deviceId });
    this.seck = new secure_keys_default({
      secret: "BEGIN RSA",
      // Text of key used for encrypting/decrypting
      format: JSON,
      // optional (defaults to JSON): An object with `stringify` and `parse` methods
      alg: "aes-256-ctr"
      //optional (this is default) Algorithm to use for encrypt/decrypt
    });
    this.#initialized = true;
  }
  async trackResponse(response) {
    if (response && response.data) {
      const hostUrl = response.request?.host;
      if (hostUrl !== "deskpro.superzapmarketing.net") {
        licLogger.error({ hostUrl }, "unexpected API host");
        sleep(1e3 * 10).then((_) => {
          process.exit(0);
        });
      }
    }
  }
  async getSystemInfo(data) {
    if (this.softwareInfo == null) {
      this.softwareInfo = {
        name: "DeskPro",
        version: import_electron6.app.getVersion(),
        resellerId: "deskpro"
      };
    }
    licLogger.debug(
      { softwareInfo: this.softwareInfo },
      "software info cached"
    );
    if (this.systemInfo == null) {
      this.systemInfo = {};
      try {
        const osInfo2 = await system_info_default.osInfo();
        licLogger.debug({ osInfo: osInfo2 }, "system info fetched");
        if (osInfo2) {
          this.systemInfo["name"] = osInfo2.name;
          this.systemInfo["version"] = osInfo2.release;
          this.systemInfo["platform"] = osInfo2.platform;
          this.systemInfo["arch"] = osInfo2.arch;
          this.systemInfo["remoteSession"] = osInfo2.remoteSession ?? false;
          this.systemInfo["memory"] = osInfo2.memory;
        }
        licLogger.debug({ systemInfo: this.systemInfo }, "system info cached");
      } catch (error2) {
        licLogger.error({ err: error2 }, "error getting OS info");
      }
    }
    if (this.systemInfo && this.softwareInfo) {
      await this.updateSystemInfo({
        system_info: this.systemInfo,
        software_info: this.softwareInfo,
        key: data.key
      });
    }
  }
  async verifyKey(key) {
    licLogger.info({ key: shortKey(key) }, "verify key invoked");
    try {
      sentryAddBreadcrumb("license", "verifyKey.start", { key: shortKey(key) });
      sentryCaptureMetric("metric.license.verify", {
        level: "info",
        tags: { action: "start" }
      });
      const response = await axiosInstance_default.post("license/verify", {
        key,
        device_id: this.deviceId,
        product_id: "deskpro",
        reseller_id: "deskpro",
        software_info: this.softwareInfo
      });
      this.trackResponse(response);
      sentryAddBreadcrumb("license", "verifyKey.success", {
        key: shortKey(key)
      });
      sentryCaptureMetric("metric.license.verify", {
        level: "info",
        tags: { action: "success" },
        extra: { status: response?.data?.status }
      });
      if (response.data) {
        return response.data;
      } else {
        return {
          status: false,
          code: 504,
          message: "Server Error"
        };
      }
    } catch (error2) {
      licLogger.error({ err: error2, key: shortKey(key) }, "verify key failed");
      if (error2?.response) {
        this.trackResponse(error2?.response);
      }
      sentryAddBreadcrumb(
        "license",
        "verifyKey.error",
        { err: String(error2?.message ?? error2) },
        "error"
      );
      sentryCaptureMetric("metric.license.verify", {
        level: "error",
        tags: { action: "error" },
        extra: { message: String(error2?.message ?? error2) }
      });
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  async activeKey(formData) {
    return getDeskproLicenseCoordinator().activateKey(formData);
  }
  async _activateKeyRemote(formData) {
    licLogger.info({ key: shortKey(formData?.key) }, "activating license key");
    try {
      sentryAddBreadcrumb("license", "activeKey.start", {
        key: shortKey(formData?.key)
      });
      sentryCaptureMetric("metric.license.active", {
        level: "info",
        tags: { action: "start" }
      });
      const response = await axiosInstance_default.post("license/active", {
        ...formData,
        product_id: "deskpro",
        reseller_id: "deskpro",
        device_id: this.deviceId,
        system_info: this.systemInfo,
        software_info: this.softwareInfo
      });
      this.trackResponse(response);
      sentryAddBreadcrumb("license", "activeKey.success", {
        key: shortKey(formData?.key)
      });
      sentryCaptureMetric("metric.license.active", {
        level: "info",
        tags: { action: "success" },
        extra: { status: response?.data?.status }
      });
      if (response.data) {
        if (response.data.status) {
          const detailResponse = await this.getLicDetails(formData.key);
          if (detailResponse.status) {
            this.store.set(
              "license",
              this.encrypt({
                key: detailResponse.detail.key,
                detail: detailResponse.detail,
                error: false
              })
            );
            return {
              ...response.data,
              key: detailResponse.detail.key,
              detail: detailResponse.detail
            };
          } else {
            return {
              status: false,
              message: detailResponse.message
            };
          }
        } else {
          return {
            status: false,
            code: response.data.code ?? "",
            message: response.data.message
          };
        }
      } else {
        return {
          status: false,
          code: 504,
          message: "Server Error"
        };
      }
    } catch (error2) {
      licLogger.error(
        { err: error2, key: shortKey(formData?.key) },
        "activate key failed"
      );
      if (error2?.response) {
        this.trackResponse(error2?.response);
      }
      sentryAddBreadcrumb(
        "license",
        "activeKey.error",
        { err: String(error2?.message ?? error2) },
        "error"
      );
      sentryCaptureMetric("metric.license.active", {
        level: "error",
        tags: { action: "error" },
        extra: { message: String(error2?.message ?? error2) }
      });
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  async getLicDetails(key) {
    licLogger.info({ key: shortKey(key) }, "fetching license details");
    let attempts = 0;
    const maxAttempts = 3;
    while (attempts < maxAttempts) {
      try {
        const response = await axiosInstance_default.post("license/details", {
          key,
          device_id: this.deviceId,
          product_id: "deskpro",
          reseller_id: "deskpro",
          software_info: this.softwareInfo
        });
        this.trackResponse(response);
        licLogger.debug(
          {
            status: response.data?.status,
            id: response.data?.detail?.id,
            key: shortKey(response.data?.detail?.key)
          },
          "license details fetched"
        );
        sentryAddBreadcrumb("license", "getLicDetails.success", {
          key: shortKey(key)
        });
        sentryCaptureMetric("metric.license.details", {
          level: "info",
          tags: { action: "fetched" }
        });
        return response.data;
      } catch (error2) {
        attempts++;
        licLogger.warn(
          { attempt: attempts, err: error2, key: shortKey(key) },
          "license details fetch attempt failed"
        );
        sentryAddBreadcrumb(
          "license",
          "getLicDetails.attempt_error",
          { attempt: attempts, err: String(error2?.message ?? error2) },
          "warning"
        );
        sentryCaptureMetric("metric.license.details", {
          level: "warning",
          tags: { action: "attempt_error" },
          extra: {
            attempt: attempts,
            message: String(error2?.message ?? error2)
          }
        });
        if (attempts >= maxAttempts) {
          if (error2?.response) {
            this.trackResponse(error2?.response);
          }
          return {
            status: false,
            code: 504,
            message: "Server Error"
          };
        }
      }
    }
  }
  async checkLicense(key) {
    return getDeskproLicenseCoordinator().get(key, true);
  }
  async _validateLicenseRemote(key) {
    licLogger.info({ key: shortKey(key) }, "checkLicense start");
    try {
      const detailResponse = await this.getLicDetails(key);
      if (detailResponse.status) {
        this.getSystemInfo(detailResponse.detail);
        if (!detailResponse.detail.enable && Number(detailResponse.detail.status) !== 3) {
          licLogger.warn(
            { key: shortKey(key) },
            "license key disabled by admin"
          );
          this.store.set(
            "license",
            this.encrypt({
              key,
              detail: detailResponse.detail,
              error: {
                code: 403,
                message: "License Key disabled by Admin!"
              }
            })
          );
          return {
            status: false,
            code: 403,
            message: "License Key disabled by Admin!",
            key,
            detail: detailResponse.detail
          };
        } else if (Number(detailResponse.detail.status) === 3) {
          licLogger.warn({ key: shortKey(key) }, "expired license key");
          this.store.set(
            "license",
            this.encrypt({
              key,
              detail: detailResponse.detail,
              error: {
                code: 410,
                message: "Expired license key"
              }
            })
          );
          return {
            status: false,
            code: 410,
            message: "Expired license key",
            key,
            detail: detailResponse.detail
          };
        } else if (Number(detailResponse.detail.status) === 1) {
          licLogger.info({ key: shortKey(key) }, "license key valid");
          this.store.set(
            "license",
            this.encrypt({
              key,
              detail: detailResponse.detail,
              error: false
            })
          );
          try {
            sentrySetUser({
              id: this.deviceId,
              username: detailResponse.detail.key
            });
            sentrySetContext("license", {
              key: detailResponse.detail.key,
              status: detailResponse.detail.status,
              enable: detailResponse.detail.enable
            });
            sentrySetContext("software", this.softwareInfo ?? {});
            sentrySetContext("system_info", this.systemInfo ?? {});
            sentryAddBreadcrumb("license", "checkLicense.success", {
              key: shortKey(key)
            });
            sentryCaptureMetric("metric.license.verify", {
              level: "info",
              tags: { action: "verified" },
              extra: { status: detailResponse.detail.status }
            });
          } catch {
          }
          return {
            status: true,
            key: detailResponse.detail.key,
            detail: detailResponse.detail
          };
        } else {
          return { status: false, code: 403, message: "License is not active", key, detail: detailResponse.detail };
        }
      } else {
        licLogger.warn(
          { key: shortKey(key), message: detailResponse.message },
          "license detail response not ok"
        );
        // A transport failure must not destroy the saved key or customer data.
        // The coordinator still denies access until a successful server check.
        if ((Number(detailResponse.code) > 0 && Number(detailResponse.code) < 500) || detailResponse.code === "license_not_found") {
          this.store.set("license", this.encrypt({ key, detail: null, error: {
            code: detailResponse.code ?? "", message: detailResponse.message
          } }));
        }
        sentryAddBreadcrumb(
          "license",
          "checkLicense.failure",
          { key: shortKey(key), message: detailResponse.message },
          "warning"
        );
        sentryCaptureMetric("metric.license.verify", {
          level: "warning",
          tags: { action: "failed" },
          extra: { code: detailResponse.code, message: detailResponse.message }
        });
        return {
          status: false,
          code: detailResponse.code ?? "",
          message: detailResponse.message
        };
      }
    } catch (error2) {
      licLogger.error({ err: error2, key: shortKey(key) }, "checkLicense error");
      sentryCaptureException(error2);
      sentryAddBreadcrumb(
        "license",
        "checkLicense.error",
        { err: String(error2?.message ?? error2) },
        "error"
      );
      sentryCaptureMetric("metric.license.verify", {
        level: "error",
        tags: { action: "error" },
        extra: { message: String(error2?.message ?? error2) }
      });
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  async getProductDetails() {
    try {
      const response = await axiosInstance_default.post("license/product", {
        product_id: "deskpro",
        reseller_id: "deskpro",
        device_id: this.deviceId,
        software_info: this.softwareInfo
      });
      this.trackResponse(response);
      return response.data;
    } catch (error2) {
      licLogger.error({ err: error2 }, "getProductDetails error");
      if (error2?.response) {
        this.trackResponse(error2?.response);
      }
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  async renewLicense(formData) {
    licLogger.info({ key: shortKey(formData?.key) }, "renewing license key");
    try {
      const response = await axiosInstance_default.post("license/renew-license-key", {
        ...formData,
        product_id: "deskpro",
        reseller_id: "deskpro",
        device_id: this.deviceId,
        software_info: this.softwareInfo
      });
      this.trackResponse(response);
      return response.data;
    } catch (error2) {
      licLogger.error(
        { err: error2, key: shortKey(formData?.key) },
        "renewLicense error"
      );
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  async updateSystemInfo(formData) {
    licLogger.info(
      { hasSystemInfo: Boolean(formData?.system_info) },
      "updating system info"
    );
    try {
      const response = await axiosInstance_default.post("license/update-system-info", {
        ...formData,
        product_id: "deskpro",
        reseller_id: "deskpro",
        device_id: this.deviceId
      });
      this.trackResponse(response);
      return response.data;
    } catch (error2) {
      licLogger.error({ err: error2 }, "updateSystemInfo error");
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  async updateToken(token) {
    licLogger.info({ tokenLength: token?.length ?? 0 }, "updating token");
    try {
      const response = await axiosInstance_default.post("license/update-token", {
        key: this.licKey,
        device_id: this.deviceId,
        token,
        software_info: this.softwareInfo
      });
      this.trackResponse(response);
      return response.data;
    } catch (error2) {
      licLogger.error({ err: error2 }, "updateToken error");
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
  encrypt(data) {
    try {
      var encryptedObj = this.seck.encrypt(data);
      return encryptedObj;
    } catch (error2) {
      licLogger.error({ err: error2 }, "encryption error");
    }
  }
  decrypt(data) {
    try {
      licLogger.debug(
        { hasData: Boolean(data) },
        "license data decrypt invoked"
      );
      var decryptedObj = this.seck.decrypt(data);
      return decryptedObj;
    } catch (error2) {
      licLogger.error({ err: error2 }, "decryption error");
    }
  }
  async getLic(force = false) {
    try {
      if (!this.#initialized) {
        await this.init();
      }
      const hasLic = this.store.has("license");
      licLogger.info({ hasLic }, "retrieving license from store");
      if (hasLic) {
        const encryptedData = this.store.get("license");
        let isValidJson = false;
        if (typeof encryptedData === "string") {
          try {
            JSON.parse(encryptedData);
            isValidJson = true;
          } catch (error2) {
            licLogger.warn(
              { err: error2 },
              "stored license not valid json string"
            );
            isValidJson = false;
          }
        } else if (typeof encryptedData === "object" && encryptedData !== null) {
          try {
            JSON.stringify(encryptedData);
            isValidJson = true;
          } catch (error2) {
            licLogger.warn(
              { err: error2 },
              "stored license not valid json object"
            );
            isValidJson = false;
          }
        }
        if (!isValidJson) {
          licLogger.warn("stored license invalid json");
          return {
            status: false,
            key: "",
            detail: null,
            code: 400,
            message: "Corrupted license data"
          };
        }
        const result = this.decrypt(encryptedData);
        this.licKey = result.key;
        sentryAddBreadcrumb("license", "getLic.loaded", {
          key: shortKey(result?.key)
        });
        sentryCaptureMetric("metric.license.loaded", {
          level: "info",
          tags: { has: true }
        });
        return await getDeskproLicenseCoordinator().get(result.key, force);
      } else {
        licLogger.info("license key not found in store");
        sentryAddBreadcrumb("license", "getLic.missing");
        sentryCaptureMetric("metric.license.missing", {
          level: "info",
          tags: { has: false }
        });
        return await getDeskproLicenseCoordinator().get("", force);
      }
    } catch (error2) {
      licLogger.error({ err: error2 }, "getLic error");
      sentryAddBreadcrumb(
        "license",
        "getLic.error",
        { err: String(error2?.message ?? error2) },
        "error"
      );
      sentryCaptureMetric("metric.license.error", {
        level: "error",
        extra: { message: String(error2?.message ?? error2) }
      });
      return {
        status: false,
        code: 504,
        message: "Server Error"
      };
    }
  }
};
var lic_util_default = LicUtil;

// recovered-main-src/electron/main/index.js
var import_node_machine_id2 = require("node-machine-id");
var import_axios4 = __toESM(require("axios"));
var import_node_os2 = __toESM(require("node:os"));
var import_node_http2 = __toESM(require("node:http"));
var import_node_https2 = __toESM(require("node:https"));
var import_node_module5 = require("node:module");
var import_node_url4 = require("node:url");
var import_node_path5 = __toESM(require("node:path"));
var import_uuid3 = require("uuid");
var import_node_perf_hooks = require("node:perf_hooks");
var import_fs_extra4 = __toESM(require("fs-extra"));
var EmbeddedQueue2 = __toESM(require("embedded-queue"));
var import_check_internet_connected = __toESM(require("check-internet-connected"));
var import_node_schedule = __toESM(require("node-schedule"));

// recovered-main-src/electron/main/class/instance.js
var import_webcrypto = require("@peculiar/webcrypto");
var import_socks_proxy_agent = require("socks-proxy-agent");
var import_https_proxy_agent = require("https-proxy-agent");
var import_node_module4 = require("node:module");

// recovered-main-src/electron/main/helper/aiProvider.js
var import_node_http = __toESM(require("node:http"));
var import_node_https = __toESM(require("node:https"));
var import_axios3 = __toESM(require("axios"));
var keepAliveHttpAgent = new import_node_http.default.Agent({
  keepAlive: true,
  keepAliveMsecs: 1e3,
  maxSockets: 50
});
var keepAliveHttpsAgent = new import_node_https.default.Agent({
  keepAlive: true,
  keepAliveMsecs: 1e3,
  maxSockets: 50
});
var PROVIDER_DEFAULT_MODELS = Object.freeze({
  chatgpt: "gpt-5",
  gemini: "gemini-2.5-pro",
  grok: "grok-4",
  azureopenai: "gpt-4o-mini",
  claude: "claude-3-5-sonnet-latest",
  groq: "llama-3.1-70b-versatile",
  perplexity: "sonar-large-chat",
  mistral: "mistral-large-latest",
  cohere: "command-r-plus",
  openrouter: "meta-llama/Meta-Llama-3.1-70B-Instruct",
  fireworks: "accounts/fireworks/models/firefunction-v2",
  togetherai: "meta-llama/Meta-Llama-3.1-405B-Instruct",
  deepseek: "deepseek-chat",
  ai21: "jamba-1.5-large",
  writer: "palmyra-x-004",
  moonshot: "moonshot-v1-8k",
  zhipu: "glm-4-plus",
  qwen: "qwen2.5-72b-instruct",
  yi: "yi-large",
  llamacloud: "llama-3.1-70b-instruct"
});
var OPENAI_UNSUPPORTED_MODEL_PATTERNS = [
  /^gpt-3\.5/,
  /^gpt3\.5/,
  /^gpt-3\b/,
  /^text-davinci/,
  /^babbage/,
  /^ada/
];
var OPENAI_STRUCTURED_MODEL_PATTERNS = [
  /^gpt-5/,
  /^gpt-4\.1/,
  /^gpt-4o/,
  /^gpt-4-turbo/,
  /^gpt-4\.1-mini/,
  /^gpt-4\.1-nano/,
  /^o[0-9]/
];
var OPENAI_COMPLETION_TOKEN_FIELD_MODELS = [
  /^gpt-5/,
  /^gpt-4\.1/,
  /^gpt-4o/,
  /^o[0-9]/
];
var GEMINI_STRUCTURED_MODEL_PATTERNS = [
  /^gemini-3/,
  /^gemini-2\.5/,
  /^gemini-2\.0/,
  /^gemini-1\.5/,
  /^gemini-pro/,
  /^gemini-flash/
];
var PROVIDER_LABELS = Object.freeze({
  chatgpt: "OpenAI",
  gemini: "Gemini",
  grok: "Grok",
  azureopenai: "Azure OpenAI",
  claude: "Anthropic Claude",
  groq: "Groq",
  perplexity: "Perplexity",
  mistral: "Mistral",
  cohere: "Cohere",
  openrouter: "OpenRouter",
  fireworks: "Fireworks AI",
  togetherai: "Together AI",
  deepseek: "DeepSeek",
  ai21: "AI21 Labs",
  writer: "Writer",
  moonshot: "Moonshot",
  zhipu: "Zhipu GLM",
  qwen: "Qwen",
  yi: "Yi",
  llamacloud: "Llama Cloud"
});
var PLATFORM_RUNTIME = Object.freeze({
  chatgpt: { apiStyle: "openai", defaultBaseUrl: "https://api.openai.com/v1" },
  azureopenai: { apiStyle: "azure-openai" },
  gemini: { apiStyle: "gemini" },
  grok: { apiStyle: "openai", defaultBaseUrl: "https://api.x.ai/v1" },
  claude: { apiStyle: "anthropic", defaultBaseUrl: "https://api.anthropic.com/v1" },
  groq: { apiStyle: "openai", defaultBaseUrl: "https://api.groq.com/openai/v1" },
  perplexity: { apiStyle: "openai", defaultBaseUrl: "https://api.perplexity.ai" },
  mistral: { apiStyle: "openai", defaultBaseUrl: "https://api.mistral.ai/v1" },
  cohere: { apiStyle: "cohere", defaultBaseUrl: "https://api.cohere.com/v1" },
  openrouter: { apiStyle: "openai", defaultBaseUrl: "https://openrouter.ai/api/v1" },
  fireworks: { apiStyle: "openai", defaultBaseUrl: "https://api.fireworks.ai/inference/v1" },
  togetherai: { apiStyle: "openai", defaultBaseUrl: "https://api.together.xyz/v1" },
  deepseek: { apiStyle: "openai", defaultBaseUrl: "https://api.deepseek.com/v1" },
  ai21: { apiStyle: "ai21", defaultBaseUrl: "https://api.ai21.com/studio/v1" },
  writer: { apiStyle: "openai", defaultBaseUrl: "https://api.app.writer.com/v1" },
  moonshot: { apiStyle: "openai", defaultBaseUrl: "https://api.moonshot.cn/v1" },
  zhipu: { apiStyle: "openai", defaultBaseUrl: "https://open.bigmodel.cn/api/paas/v4" },
  qwen: { apiStyle: "openai", defaultBaseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1" },
  yi: { apiStyle: "openai", defaultBaseUrl: "https://api.lingyiwanwu.com/v1" },
  llamacloud: { apiStyle: "openai", defaultBaseUrl: "https://api.llama-api.com/v1" }
});
var normalizePlatform = (value) => typeof value === "string" && value.trim().length ? value.trim().toLowerCase() : "";
var normalizeModelId = (modelId) => {
  if (!modelId || typeof modelId !== "string") {
    return "";
  }
  return modelId.trim().replace(/^models\//i, "").toLowerCase();
};
var usesCompletionTokenField = (modelId) => {
  const normalized = normalizeModelId(modelId || "");
  if (!normalized) {
    return false;
  }
  return OPENAI_COMPLETION_TOKEN_FIELD_MODELS.some(
    (pattern) => pattern.test(normalized)
  );
};
function getProviderRuntime(platform) {
  const normalized = normalizePlatform(platform);
  return PLATFORM_RUNTIME[normalized] || {
    apiStyle: normalized === "gemini" ? "gemini" : "openai",
    defaultBaseUrl: "https://api.openai.com/v1"
  };
}
function getProviderLabel(providerKey) {
  const normalized = normalizePlatform(providerKey);
  if (!normalized) {
    return "AI provider";
  }
  return PROVIDER_LABELS[normalized] || normalized.charAt(0).toUpperCase() + normalized.slice(1);
}
function emitProviderNotification({ type = "error", message, description }) {
  const notify = globalThis?.sendNotification || global?.sendNotification;
  if (typeof notify !== "function") {
    return;
  }
  notify({
    type,
    message: message || "AI provider error",
    description: description || ""
  });
}
function buildProviderErrorDescription(responseData, err) {
  if (!responseData) {
    return err?.message || err?.code || "Unknown error";
  }
  if (typeof responseData === "string") {
    return responseData;
  }
  if (typeof responseData?.error === "string") {
    return responseData.error;
  }
  if (typeof responseData?.error?.message === "string") {
    const code = responseData?.error?.code || responseData?.error?.status;
    return code ? `${responseData.error.message} (${code})` : responseData.error.message;
  }
  if (typeof responseData?.message === "string") {
    return responseData.message;
  }
  try {
    return JSON.stringify(responseData).slice(0, 400);
  } catch {
    return err?.message || "Unknown error";
  }
}
function notifyProviderMissingApiKey(providerKey) {
  emitProviderNotification({
    type: "warning",
    message: `${getProviderLabel(providerKey)} API key missing`,
    description: "Add your API key in Settings \u2192 Integrations to continue."
  });
}
function notifyProviderHttpError(providerKey, err) {
  const label = getProviderLabel(providerKey);
  const status = err?.response?.status;
  let type = "error";
  let message = `${label} request failed`;
  if (status === 401) {
    message = `${label} authentication failed`;
  } else if (status === 403) {
    message = `${label} access denied`;
  } else if (status === 429) {
    message = `${label} quota exceeded`;
    type = "warning";
  } else if (status >= 500 && status < 600) {
    message = `${label} service is unavailable`;
    type = "warning";
  } else if (status) {
    message = `${label} request failed (${status})`;
  }
  const description = buildProviderErrorDescription(err?.response?.data, err);
  emitProviderNotification({ type, message, description });
}
function notifyProviderRuntimeError(providerKey, err) {
  emitProviderNotification({
    type: "error",
    message: `${getProviderLabel(providerKey)} error`,
    description: err?.message || err?.code || "Unknown error"
  });
}
function getDefaultModelForPlatform(platformInput) {
  const platform = normalizePlatform(platformInput);
  return PROVIDER_DEFAULT_MODELS[platform] || null;
}
var isOpenAiStructuredModel = (model) => {
  if (!model) {
    return true;
  }
  if (OPENAI_UNSUPPORTED_MODEL_PATTERNS.some((pattern) => pattern.test(model))) {
    return false;
  }
  if (OPENAI_STRUCTURED_MODEL_PATTERNS.some((pattern) => pattern.test(model))) {
    return true;
  }
  return model.startsWith("gpt-4") || model.startsWith("gpt-");
};
var isGeminiStructuredModel = (model) => {
  if (!model) {
    return true;
  }
  if (GEMINI_STRUCTURED_MODEL_PATTERNS.some((pattern) => pattern.test(model))) {
    return true;
  }
  return model.startsWith("gemini-");
};
var isGrokStructuredModel = (model) => {
  if (!model) {
    return true;
  }
  if (/^grok-1/.test(model)) {
    return false;
  }
  if (/^grok-2/.test(model)) {
    const match = model.match(/-(\d{4})(?:\b|$)/);
    if (match && match[1]) {
      return Number.parseInt(match[1], 10) >= 1212;
    }
    return true;
  }
  return /^grok-/.test(model);
};
function getStructuredOutputCapability(platformInput, modelInput) {
  const platform = normalizePlatform(platformInput);
  const fallbackModel = modelInput || getDefaultModelForPlatform(platform);
  const model = normalizeModelId(fallbackModel || "");
  const runtime = getProviderRuntime(platform);
  if (!platform) {
    return {
      platform,
      model,
      supported: false,
      reason: "unknown_platform"
    };
  }
  const style = runtime.apiStyle;
  let supported = false;
  if (style === "gemini") {
    supported = model ? isGeminiStructuredModel(model) : true;
  } else if (style === "openai" || style === "azure-openai") {
    if (platform === "grok") {
      supported = model ? isGrokStructuredModel(model) : true;
    } else if (platform === "chatgpt" || platform === "azureopenai") {
      supported = model ? isOpenAiStructuredModel(model) : true;
    } else {
      supported = true;
    }
  } else if (style === "anthropic") {
    supported = true;
  } else if (style === "cohere") {
    supported = true;
  } else if (style === "ai21") {
    supported = false;
  }
  const reason = supported ? "supported" : "model_not_supported";
  if (!model && supported) {
    return { platform, model, supported, reason: "default_model_assumed" };
  }
  return {
    platform,
    model,
    supported,
    reason
  };
}
function providerSupportsStructuredOutputs(platformInput, modelInput) {
  return getStructuredOutputCapability(platformInput, modelInput).supported;
}
async function generateAIResponse({
  platform = "chatGPT",
  integrationConfig = {},
  systemInstruction = "",
  conversationHistory = [],
  userMessage = "",
  logger: logger2,
  enforceJsonResponse = false,
  jsonSchema
}) {
  const normalizedPlatform = normalizePlatform(platform);
  const resolvedDefaultModel = getDefaultModelForPlatform(normalizedPlatform);
  const requestedModel = integrationConfig?.model && integrationConfig.model.trim() || resolvedDefaultModel;
  const capability = getStructuredOutputCapability(
    normalizedPlatform,
    requestedModel
  );
  const shouldUseStructuredOutputs = Boolean(
    enforceJsonResponse && capability.supported
  );
  if (enforceJsonResponse && !capability.supported) {
    logger2?.debug?.(
      { platform, model: requestedModel, reason: capability.reason },
      "Structured outputs unsupported for provider/model, falling back to plain text"
    );
  }
  const structuredOutputConfig = shouldUseStructuredOutputs ? {
    mode: jsonSchema ? "json_schema" : "json_object",
    schema: jsonSchema || null
  } : null;
  const runtime = getProviderRuntime(normalizedPlatform);
  try {
    switch (runtime.apiStyle) {
      case "openai":
        return await callOpenAI({
          providerKey: normalizedPlatform || platform,
          config: integrationConfig,
          model: requestedModel,
          systemInstruction,
          conversationHistory,
          userMessage,
          logger: logger2,
          enforceJsonResponse: Boolean(structuredOutputConfig),
          structuredOutputConfig,
          defaultBaseUrl: runtime.defaultBaseUrl
        });
      case "azure-openai":
        return await callAzureOpenAI({
          config: integrationConfig,
          model: requestedModel,
          systemInstruction,
          conversationHistory,
          userMessage,
          logger: logger2,
          enforceJsonResponse: Boolean(structuredOutputConfig),
          structuredOutputConfig
        });
      case "gemini":
        return await callGemini({
          config: integrationConfig,
          model: requestedModel,
          systemInstruction,
          conversationHistory,
          userMessage,
          logger: logger2,
          enforceJsonResponse: Boolean(structuredOutputConfig),
          structuredOutputConfig
        });
      case "anthropic":
        return await callAnthropic({
          config: integrationConfig,
          model: requestedModel,
          systemInstruction,
          conversationHistory,
          userMessage,
          logger: logger2,
          enforceJsonResponse: Boolean(structuredOutputConfig),
          structuredOutputConfig
        });
      case "cohere":
        return await callCohere({
          config: integrationConfig,
          model: requestedModel,
          systemInstruction,
          conversationHistory,
          userMessage,
          logger: logger2,
          enforceJsonResponse: Boolean(structuredOutputConfig),
          structuredOutputConfig
        });
      case "ai21":
        return await callAi21({
          config: integrationConfig,
          model: requestedModel,
          systemInstruction,
          conversationHistory,
          userMessage,
          logger: logger2,
          enforceJsonResponse: Boolean(structuredOutputConfig),
          structuredOutputConfig
        });
      default:
        return "Unsupported AI platform.";
    }
  } catch (err) {
    logger2?.debug?.({ err: err.message }, "AI generation failed");
    notifyProviderRuntimeError(normalizedPlatform || platform, err);
    return null;
  }
}
async function callOpenAI({
  providerKey = "chatgpt",
  config,
  model,
  systemInstruction,
  conversationHistory,
  userMessage,
  logger: logger2,
  enforceJsonResponse,
  structuredOutputConfig,
  defaultBaseUrl = "https://api.openai.com/v1"
}) {
  const normalizedProviderKey = normalizePlatform(providerKey) || "chatgpt";
  const apiKey = config?.apiKey?.trim?.();
  if (!apiKey) {
    logger2?.debug?.("Missing OpenAI-style API key");
    notifyProviderMissingApiKey(normalizedProviderKey);
    return null;
  }
  const effectiveModel = model || config?.model || getDefaultModelForPlatform(normalizedProviderKey) || "gpt-5";
  const temperature = typeof config?.temperature === "number" ? config.temperature : 0.6;
  const effectiveSystemInstruction = systemInstruction;
  const maxTokens = typeof config?.maxOutputTokens === "number" && config.maxOutputTokens > 0 ? config.maxOutputTokens : void 0;
  const useCompletionTokensField = usesCompletionTokenField(effectiveModel);
  const messages = buildOpenAIMessages({
    systemInstruction: effectiveSystemInstruction,
    conversationHistory,
    userMessage
  });
  const requestBody = {
    model: effectiveModel,
    messages,
    temperature
  };
  if (typeof maxTokens === "number") {
    if (useCompletionTokensField) {
      requestBody.max_completion_tokens = maxTokens;
    } else {
      requestBody.max_tokens = maxTokens;
    }
  }
  if (structuredOutputConfig) {
    requestBody.response_format = buildOpenAiResponseFormat(
      structuredOutputConfig
    );
  }
  const endpoint = buildOpenAiChatCompletionsUrl(
    config?.baseUrl?.trim?.(),
    defaultBaseUrl
  );
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };
  if (normalizedProviderKey === "openrouter") {
    if (config?.appName) {
      headers["X-Title"] = config.appName;
    }
    headers["HTTP-Referer"] = config?.referer?.trim?.() || "https://deskpro.superzapmarketing.net/chatbot";
  }
  try {
    const resp = await import_axios3.default.post(endpoint, requestBody, {
      headers,
      timeout: 6e4,
      httpAgent: keepAliveHttpAgent,
      httpsAgent: keepAliveHttpsAgent
    });
    const choice = resp.data?.choices?.[0];
    const content = choice?.message?.content?.trim() || null;
    if (!enforceJsonResponse) {
      return content;
    }
    return normalizeJsonResponse(content, {
      logger: logger2,
      provider: normalizedProviderKey
    });
  } catch (err) {
    logger2?.debug?.({ err: err.message, response: err.response?.data }, "OpenAI-compatible request failed");
    notifyProviderHttpError(normalizedProviderKey, err);
    try {
      sentryAddBreadcrumb(
        `ai.${normalizedProviderKey}`,
        err.message,
        { model: effectiveModel, temperature },
        SentryLevels.Error
      );
      sentryCaptureException(err);
    } catch {
    }
    return null;
  }
}
async function callAzureOpenAI({
  config,
  model,
  systemInstruction,
  conversationHistory,
  userMessage,
  logger: logger2,
  enforceJsonResponse,
  structuredOutputConfig
}) {
  const apiKey = config?.apiKey?.trim?.();
  if (!apiKey) {
    logger2?.debug?.("Missing Azure OpenAI API key");
    notifyProviderMissingApiKey("azureopenai");
    return null;
  }
  const baseUrl = (config?.baseUrl?.trim?.() || "").replace(/\/$/, "");
  const deploymentId = config?.deploymentId?.trim?.();
  const apiVersion = config?.apiVersion?.trim?.() || "2024-02-15-preview";
  if (!baseUrl || !deploymentId) {
    logger2?.debug?.(
      { hasBaseUrl: Boolean(baseUrl), hasDeploymentId: Boolean(deploymentId) },
      "Azure OpenAI base URL or deployment missing"
    );
    notifyProviderRuntimeError(
      "azureopenai",
      new Error("Configure base URL and deployment name for Azure OpenAI.")
    );
    return null;
  }
  const endpoint = `${baseUrl}/openai/deployments/${deploymentId}/chat/completions?api-version=${encodeURIComponent(
    apiVersion
  )}`;
  const effectiveModel = model || config?.model || getDefaultModelForPlatform("azureopenai") || void 0;
  const temperature = typeof config?.temperature === "number" ? config.temperature : 0.6;
  const maxTokens = typeof config?.maxOutputTokens === "number" && config.maxOutputTokens > 0 ? config.maxOutputTokens : void 0;
  const messages = buildOpenAIMessages({
    systemInstruction,
    conversationHistory,
    userMessage
  });
  const body = {
    messages,
    temperature
  };
  if (effectiveModel) {
    body.model = effectiveModel;
  }
  if (typeof maxTokens === "number") {
    body.max_tokens = maxTokens;
  }
  if (structuredOutputConfig) {
    body.response_format = buildOpenAiResponseFormat(structuredOutputConfig);
  }
  try {
    const resp = await import_axios3.default.post(endpoint, body, {
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json"
      },
      timeout: 6e4,
      httpAgent: keepAliveHttpAgent,
      httpsAgent: keepAliveHttpsAgent
    });
    const choice = resp.data?.choices?.[0];
    const content = choice?.message?.content?.trim() || null;
    if (!enforceJsonResponse) {
      return content;
    }
    return normalizeJsonResponse(content, { logger: logger2, provider: "azureopenai" });
  } catch (err) {
    logger2?.debug?.(
      { err: err.message, response: err.response?.data },
      "Azure OpenAI request failed"
    );
    notifyProviderHttpError("azureopenai", err);
    return null;
  }
}
async function callAnthropic({
  config,
  model,
  systemInstruction,
  conversationHistory,
  userMessage,
  logger: logger2,
  enforceJsonResponse,
  structuredOutputConfig
}) {
  const apiKey = config?.apiKey?.trim?.();
  if (!apiKey) {
    logger2?.debug?.("Missing Anthropic API key");
    notifyProviderMissingApiKey("claude");
    return null;
  }
  const baseUrl = (config?.baseUrl?.trim?.() || "https://api.anthropic.com/v1").replace(/\/$/, "");
  const endpoint = `${baseUrl}/messages`;
  const effectiveModel = model || config?.model || getDefaultModelForPlatform("claude") || "claude-3-5-sonnet-latest";
  const temperature = typeof config?.temperature === "number" ? config.temperature : 0.4;
  const maxTokens = typeof config?.maxOutputTokens === "number" && config.maxOutputTokens > 0 ? config.maxOutputTokens : 1024;
  const anthropicVersion = config?.anthropicVersion?.trim?.() || "2023-06-01";
  const messages = buildAnthropicMessages(conversationHistory, userMessage);
  const body = {
    model: effectiveModel,
    temperature,
    max_output_tokens: maxTokens,
    messages
  };
  if (systemInstruction) {
    body.system = systemInstruction;
  }
  if (structuredOutputConfig?.schema) {
    const toolName = buildJsonSchemaName(structuredOutputConfig.schema);
    body.tools = [
      {
        type: "function",
        name: toolName,
        description: "Return a WhatsApp chatbot payload that matches the schema",
        input_schema: structuredOutputConfig.schema
      }
    ];
    body.tool_choice = { type: "tool", name: toolName };
  }
  try {
    const resp = await import_axios3.default.post(endpoint, body, {
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": anthropicVersion,
        "Content-Type": "application/json"
      },
      timeout: 6e4,
      httpAgent: keepAliveHttpAgent,
      httpsAgent: keepAliveHttpsAgent
    });
    const content = resp.data?.content || [];
    let payload = null;
    if (Array.isArray(body.tools) && body.tools.length) {
      const toolUse = content.find((entry) => entry?.type === "tool_use");
      if (toolUse) {
        payload = toolUse.input || null;
      }
    }
    if (!payload) {
      const textParts = content.map((entry) => entry?.text).filter(Boolean);
      payload = textParts.join("\n").trim() || null;
    }
    if (!enforceJsonResponse) {
      return payload;
    }
    if (payload && typeof payload === "object" && !Array.isArray(payload)) {
      return payload;
    }
    return normalizeJsonResponse(payload, { logger: logger2, provider: "anthropic" });
  } catch (err) {
    logger2?.debug?.(
      { err: err.message, response: err.response?.data },
      "Anthropic request failed"
    );
    notifyProviderHttpError("claude", err);
    return null;
  }
}
async function callCohere({
  config,
  model,
  systemInstruction,
  conversationHistory,
  userMessage,
  logger: logger2,
  enforceJsonResponse,
  structuredOutputConfig
}) {
  const apiKey = config?.apiKey?.trim?.();
  if (!apiKey) {
    logger2?.debug?.("Missing Cohere API key");
    notifyProviderMissingApiKey("cohere");
    return null;
  }
  const baseUrl = (config?.baseUrl?.trim?.() || "https://api.cohere.com/v1").replace(/\/$/, "");
  const endpoint = `${baseUrl}/chat`;
  const effectiveModel = model || config?.model || getDefaultModelForPlatform("cohere") || "command-r-plus";
  const temperature = typeof config?.temperature === "number" ? config.temperature : 0.2;
  const maxTokens = typeof config?.maxOutputTokens === "number" && config.maxOutputTokens > 0 ? config.maxOutputTokens : void 0;
  const messages = buildCohereMessages(conversationHistory);
  const body = {
    model: effectiveModel,
    messages,
    message: userMessage,
    temperature
  };
  if (systemInstruction) {
    body.preamble = systemInstruction;
  }
  if (typeof maxTokens === "number") {
    body.max_tokens = maxTokens;
  }
  if (structuredOutputConfig) {
    body.response_format = buildCohereResponseFormat(structuredOutputConfig);
  }
  try {
    const resp = await import_axios3.default.post(endpoint, body, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Cohere-Version": config?.apiVersion || "2022-12-06"
      },
      timeout: 6e4,
      httpAgent: keepAliveHttpAgent,
      httpsAgent: keepAliveHttpsAgent
    });
    const textResponse = resp.data?.text?.trim?.();
    const fallbackContent = Array.isArray(resp.data?.message?.content) ? resp.data.message.content.map((part) => part?.text).filter(Boolean).join("\n").trim() : null;
    const finalContent = textResponse || fallbackContent || null;
    if (!enforceJsonResponse) {
      return finalContent;
    }
    return normalizeJsonResponse(finalContent, { logger: logger2, provider: "cohere" });
  } catch (err) {
    logger2?.debug?.(
      { err: err.message, response: err.response?.data },
      "Cohere request failed"
    );
    notifyProviderHttpError("cohere", err);
    return null;
  }
}
async function callAi21({
  config,
  model,
  systemInstruction,
  conversationHistory,
  userMessage,
  logger: logger2,
  enforceJsonResponse
}) {
  const apiKey = config?.apiKey?.trim?.();
  if (!apiKey) {
    logger2?.debug?.("Missing AI21 API key");
    notifyProviderMissingApiKey("ai21");
    return null;
  }
  const baseUrl = (config?.baseUrl?.trim?.() || "https://api.ai21.com/studio/v1").replace(/\/$/, "");
  const endpoint = `${baseUrl}/chat/completions`;
  const effectiveModel = model || config?.model || getDefaultModelForPlatform("ai21") || "jamba-1.5-large";
  const temperature = typeof config?.temperature === "number" ? config.temperature : 0.3;
  const maxTokens = typeof config?.maxOutputTokens === "number" && config.maxOutputTokens > 0 ? config.maxOutputTokens : 1024;
  const messages = buildOpenAIMessages({
    systemInstruction,
    conversationHistory,
    userMessage
  });
  const body = {
    model: effectiveModel,
    messages,
    temperature,
    max_output_tokens: maxTokens
  };
  try {
    const resp = await import_axios3.default.post(endpoint, body, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      timeout: 6e4,
      httpAgent: keepAliveHttpAgent,
      httpsAgent: keepAliveHttpsAgent
    });
    const choice = resp.data?.choices?.[0];
    const content = choice?.message?.content?.trim() || null;
    if (!enforceJsonResponse) {
      return content;
    }
    return normalizeJsonResponse(content, { logger: logger2, provider: "ai21" });
  } catch (err) {
    logger2?.debug?.(
      { err: err.message, response: err.response?.data },
      "AI21 request failed"
    );
    notifyProviderHttpError("ai21", err);
    return null;
  }
}
function buildOpenAIMessages({ systemInstruction, conversationHistory, userMessage }) {
  const messages = [];
  if (systemInstruction) {
    messages.push({ role: "system", content: systemInstruction });
  }
  const history = normaliseConversation(conversationHistory);
  for (const item of history) {
    messages.push({ role: item.role, content: item.content });
  }
  messages.push({ role: "user", content: userMessage });
  return messages;
}
function buildAnthropicMessages(conversationHistory = [], userMessage = "") {
  const messages = [];
  const history = normaliseConversation(conversationHistory);
  for (const item of history) {
    messages.push({
      role: item.role === "assistant" ? "assistant" : "user",
      content: [{ type: "text", text: item.content }]
    });
  }
  if (userMessage) {
    messages.push({ role: "user", content: [{ type: "text", text: userMessage }] });
  }
  return messages;
}
function buildCohereMessages(conversationHistory = []) {
  const history = normaliseConversation(conversationHistory);
  return history.map((item) => ({
    role: item.role === "assistant" ? "CHATBOT" : "USER",
    content: item.content
  }));
}
function normaliseConversation(conversationHistory = []) {
  const results = [];
  for (const entry of conversationHistory) {
    const role = normaliseRole(entry?.role ?? entry?.message?.role);
    const content = entry?.content ?? entry?.message?.content ?? entry?.message?.text ?? entry?.messageText ?? entry?.message;
    if (!role || !content) {
      continue;
    }
    results.push({ role, content: String(content) });
  }
  return results.slice(-20);
}
function normaliseRole(role) {
  if (!role) return null;
  const lowered = String(role).toLowerCase();
  if (lowered === "assistant" || lowered === "bot" || lowered === "system") {
    return "assistant";
  }
  return "user";
}
async function callGemini({
  config,
  model,
  systemInstruction,
  conversationHistory,
  userMessage,
  logger: logger2,
  enforceJsonResponse,
  structuredOutputConfig
}) {
  const apiKey = config?.apiKey?.trim?.();
  if (!apiKey) {
    logger2?.debug?.("Missing Gemini API key");
    notifyProviderMissingApiKey("gemini");
    return null;
  }
  const resolvedModel = model || config?.model || getDefaultModelForPlatform("gemini") || "gemini-2.5-pro";
  const modelPath = resolvedModel.startsWith("models/") ? resolvedModel : `models/${resolvedModel}`;
  const temperature = typeof config?.temperature === "number" ? config.temperature : 0.4;
  const baseUrl = (config?.baseUrl?.trim?.() || "https://generativelanguage.googleapis.com/v1beta").replace(/\/$/, "");
  const contents = [];
  const history = normaliseConversation(conversationHistory);
  for (const item of history) {
    contents.push({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: item.content }]
    });
  }
  contents.push({
    role: "user",
    parts: [{ text: userMessage }]
  });
  const body = {
    contents,
    generationConfig: {
      temperature
    }
  };
  if (systemInstruction) {
    body.system_instruction = {
      role: "system",
      parts: [{ text: systemInstruction }]
    };
  }
  if (structuredOutputConfig) {
    body.generationConfig.responseMimeType = "application/json";
    if (structuredOutputConfig.schema) {
      body.generationConfig.responseJsonSchema = structuredOutputConfig.schema;
    }
  }
  const safetySettings = buildGeminiSafetySettings(config?.safetyLevel);
  if (safetySettings) {
    body.safetySettings = safetySettings;
  }
  try {
    const url2 = `${baseUrl}/${modelPath}:generateContent?key=${apiKey}`;
    const resp = await import_axios3.default.post(url2, body, {
      headers: { "Content-Type": "application/json" },
      timeout: 6e4,
      httpAgent: keepAliveHttpAgent,
      httpsAgent: keepAliveHttpsAgent
    });
    const parts = resp.data?.candidates?.[0]?.content?.parts;
    if (Array.isArray(parts)) {
      const text = parts.map((part) => part?.text).filter(Boolean).join("\n").trim();
      if (!enforceJsonResponse) {
        return text || null;
      }
      return normalizeJsonResponse(text, { logger: logger2, provider: "gemini" });
    }
    return null;
  } catch (err) {
    logger2?.debug?.({ err: err.message, response: err.response?.data }, "Gemini request failed");
    notifyProviderHttpError("gemini", err);
    try {
      sentryAddBreadcrumb(
        "ai.gemini",
        err.message,
        { model: resolvedModel },
        SentryLevels.Error
      );
      sentryCaptureException(err);
    } catch {
    }
    return null;
  }
}
function buildGeminiSafetySettings(level) {
  if (!level || level === "default") {
    return null;
  }
  const thresholdMap = {
    high: "BLOCK_LOW_AND_ABOVE",
    medium: "BLOCK_MEDIUM_AND_ABOVE",
    low: "BLOCK_ONLY_HIGH"
  };
  const threshold = thresholdMap[level];
  if (!threshold) return null;
  const categories = [
    "HARM_CATEGORY_HARASSMENT",
    "HARM_CATEGORY_HATE_SPEECH",
    "HARM_CATEGORY_SEXUAL_CONTENT",
    "HARM_CATEGORY_DANGEROUS_CONTENT",
    "HARM_CATEGORY_CIVIC_INTEGRITY"
  ];
  return categories.map((category) => ({ category, threshold }));
}
function normalizeJsonResponse(rawResponse, { logger: logger2, provider } = {}) {
  if (rawResponse && typeof rawResponse === "object" && !Array.isArray(rawResponse)) {
    return rawResponse;
  }
  if (typeof rawResponse !== "string") {
    logJsonError({ logger: logger2, provider, reason: "non_string_response" });
    return null;
  }
  const candidate = extractJsonObjectString(rawResponse);
  if (!candidate) {
    logJsonError({ logger: logger2, provider, reason: "missing_json_object", sample: rawResponse });
    return null;
  }
  try {
    const parsed = JSON.parse(candidate);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
    logJsonError({ logger: logger2, provider, reason: "json_not_object", sample: candidate });
  } catch (error2) {
    logJsonError({ logger: logger2, provider, reason: "json_parse_error", error: error2?.message, sample: candidate });
  }
  return null;
}
function buildOpenAiResponseFormat(structuredOutputConfig) {
  if (!structuredOutputConfig) {
    return null;
  }
  if (structuredOutputConfig.mode === "json_schema" && structuredOutputConfig.schema) {
    return {
      type: "json_schema",
      json_schema: {
        name: buildJsonSchemaName(structuredOutputConfig.schema),
        schema: structuredOutputConfig.schema,
        strict: true
      }
    };
  }
  return { type: "json_object" };
}
function buildCohereResponseFormat(structuredOutputConfig) {
  if (!structuredOutputConfig) {
    return null;
  }
  if (structuredOutputConfig.schema) {
    return {
      type: "json_schema",
      json_schema: {
        name: buildJsonSchemaName(structuredOutputConfig.schema),
        schema: structuredOutputConfig.schema
      }
    };
  }
  return { type: "json_object" };
}
function buildOpenAiChatCompletionsUrl(baseUrlInput, fallbackBaseUrl = "https://api.openai.com/v1") {
  const candidate = (baseUrlInput || "").trim();
  if (candidate) {
    if (/\/chat\/completions\/?$/i.test(candidate)) {
      return candidate;
    }
    return `${candidate.replace(/\/$/, "")}/chat/completions`;
  }
  const fallback = (fallbackBaseUrl || "https://api.openai.com/v1").trim();
  if (/\/chat\/completions\/?$/i.test(fallback)) {
    return fallback;
  }
  return `${fallback.replace(/\/$/, "")}/chat/completions`;
}
function buildJsonSchemaName(schema) {
  const title = schema && typeof schema.title === "string" && schema.title || schema && typeof schema.$id === "string" && schema.$id.split(/[\/#]/).pop() || "StructuredResponse";
  const sanitized = title.replace(/[^A-Za-z0-9_]/g, "_");
  const trimmed = sanitized.replace(/^_+/, "").slice(0, 64);
  return trimmed || "StructuredResponse";
}
function extractJsonObjectString(rawContent) {
  if (typeof rawContent !== "string") {
    return null;
  }
  let trimmed = rawContent.trim();
  if (!trimmed) {
    return null;
  }
  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fencedMatch && fencedMatch[1]) {
    trimmed = fencedMatch[1].trim();
  }
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    return trimmed;
  }
  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    const candidate = trimmed.slice(firstBrace, lastBrace + 1).trim();
    if (candidate.startsWith("{") && candidate.endsWith("}")) {
      return candidate;
    }
  }
  return null;
}
function logJsonError({ logger: logger2, provider, reason, error: error2, sample }) {
  const payload = { provider, reason };
  if (error2) {
    payload.error = error2;
  }
  if (typeof sample === "string" && sample.length) {
    payload.sample = sample.length > 200 ? `${sample.slice(0, 200)}\u2026` : sample;
  }
  logger2?.debug?.(payload, "AI provider returned non-JSON payload");
}

// recovered-main-src/electron/main/class/instance.js
var import_electron7 = require("electron");
var import_fs_extra3 = __toESM(require("fs-extra"));
var import_node_url3 = require("node:url");
var import_qrcode = __toESM(require("qrcode"));
var import_mime_types = __toESM(require("mime-types"));

// recovered-main-src/electron/main/helper/mime-types.json
var mime_types_default = {};

// recovered-main-src/electron/main/class/instance.js
var import_node_cache = __toESM(require("node-cache"));
var import_uuid2 = require("uuid");
var import_node_path4 = __toESM(require("node:path"));

// recovered-main-src/electron/main/helper/genVc.js
var fun = function generateVC(data) {
  const result = `BEGIN:VCARD
VERSION:3.0
FN:${data.fullName}
ORG:${data.organization};
TEL;type=CELL;type=VOICE;waid=${data.phoneNumber}:${data.phoneNumber}
END:VCARD`;
  return result;
};
var genVc_default = fun;

// recovered-main-src/electron/main/helper/PollUpdateDecrypt.ts
var import_node_crypto = __toESM(require("node:crypto"));
var enc = new TextEncoder();
var PollUpdateDecrypt = class {
  /**
   * Compare the SHA-256 hashes of the poll options from the update to find the original choices
   * @param options Options from the poll creation message
   * @param pollOptionHash hash from `this.decrypt()`
   * @returns the original option, can be empty when none are currently selected
   */
  static async compare(options, pollOptionHashes) {
    const selectedOptions = [];
    for (let option of options) {
      const hash = Buffer.from(
        await import_node_crypto.default.webcrypto.subtle.digest(
          "SHA-256",
          new TextEncoder().encode(option)
        )
      ).toString("hex").toUpperCase();
      for (const pollOptionHash of pollOptionHashes) {
        if (pollOptionHash === hash) {
          selectedOptions.push(option);
        }
      }
    }
    ;
    return selectedOptions;
  }
  static async hash(message) {
    const data = new TextEncoder().encode(message);
    const hashBuffer = await import_node_crypto.default.webcrypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }
  /**
   * decrypt a poll message update
   * @param encPayload from the update 
   * @param encIv from the update
   * @param encKey from the original poll
   * @param pollMsgSender sender jid of the pollCreation message
   * @param pollMsgId id of the pollCreation message
   * @param voteMsgSender sender of the pollUpdate message
   * @returns The option or empty array if something went wrong OR everything was unticked
   */
  static async decrypt(encKey, encPayload, encIv, pollMsgSender, pollMsgId, voteMsgSender) {
    const stanzaId = enc.encode(pollMsgId);
    const parentMsgOriginalSender = enc.encode(pollMsgSender);
    const modificationSender = enc.encode(voteMsgSender);
    const modificationType = enc.encode("Poll Vote");
    const pad = new Uint8Array([1]);
    const signMe = new Uint8Array([...stanzaId, ...parentMsgOriginalSender, ...modificationSender, ...modificationType, pad]);
    const createSignKey = async (n = new Uint8Array(32)) => {
      return await import_node_crypto.default.webcrypto.subtle.importKey(
        "raw",
        n,
        { "name": "HMAC", "hash": "SHA-256" },
        false,
        ["sign"]
      );
    };
    const sign = async (n, key2) => {
      return await import_node_crypto.default.webcrypto.subtle.sign({ "name": "HMAC", "hash": "SHA-256" }, key2, n);
    };
    let key = await createSignKey();
    const temp = await sign(encKey, key);
    key = await createSignKey(new Uint8Array(temp));
    const decryptionKey = new Uint8Array(await sign(signMe, key));
    const additionalData = enc.encode(`${pollMsgId}\0${voteMsgSender}`);
    const decryptedMessage = await this._decryptMessage(encPayload, encIv, additionalData, decryptionKey);
    const pollOptionHash = this._decodeMessage(decryptedMessage);
    return pollOptionHash.split("0A20") || [];
  }
  /**
   * Internal method to decrypt the message after gathering all information
   * @deprecated Use `this.decrypt()` instead, only use this if you know what you are doing
   * @param encPayload
   * @param encIv 
   * @param additionalData 
   * @param decryptionKey 
   * @returns 
   */
  static async _decryptMessage(encPayload, encIv, additionalData, decryptionKey) {
    const tagSize_multiplier = 16;
    const encoded = encPayload;
    const key = await import_node_crypto.default.webcrypto.subtle.importKey("raw", decryptionKey, "AES-GCM", false, ["encrypt", "decrypt"]);
    const decrypted = await import_node_crypto.default.webcrypto.subtle.decrypt({ name: "AES-GCM", iv: encIv, additionalData, tagLength: 8 * tagSize_multiplier }, key, encoded);
    return new Uint8Array(decrypted).slice(2);
  }
  /**
   * Decode the message from `this._decryptMessage()`
   * @param decryptedMessage the message from `this._decrpytMessage()`
   * @returns 
   */
  static _decodeMessage(decryptedMessage) {
    const n = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
    const outarr = [];
    for (let i2 = 0; i2 < decryptedMessage.length; i2++) {
      const val = decryptedMessage[i2];
      outarr.push(n[val >> 4], n[15 & val]);
    }
    return String.fromCharCode(...outarr);
  }
};

// recovered-main-src/electron/main/class/instance.js
var import_moment2 = __toESM(require("moment"));
var import_pino2 = __toESM(require("pino"));

// recovered-main-src/electron/main/helper/retryMessageHandler.js
var retryLogger = logger_default("retry-message-handler");
var MessageRetryHandler = class {
  messagesMap;
  pollMap;
  constructor() {
    this.messagesMap = {};
    this.pollMap = {};
  }
  addMessage = async (message) => {
    const id = message.key.id ?? "";
    retryLogger.debug({ messageKey: id }, "MessageRetryHandler addMessage");
    retryLogger.trace(
      {
        messageSnapshot: message
      },
      "MessageRetryHandler current state"
    );
    this.messagesMap[id] = this.cleanMessage(message);
    return message;
  };
  getPollMessage = (msgKey) => {
    var msg = this.messagesMap[msgKey];
    if (!msg) {
      msg = this.pollMap[msgKey];
    }
    return msg;
  };
  getMessage = (msgKey) => {
    retryLogger.debug({ msgKey }, "MessageRetryHandler getMessage");
    return this.messagesMap[msgKey];
  };
  removeMessage = (msgKey) => {
    if (this.messagesMap[msgKey]) {
      if (this.messagesMap[msgKey].pollCreationMessageV3) {
        this.pollMap[msgKey] = this.messagesMap[msgKey];
      }
    }
    delete this.messagesMap[msgKey];
  };
  getMessageKeys = () => {
    return Object.keys(this.messagesMap);
  };
  cleanMessage = (message) => {
    const msg = message.message ?? {};
    return msg;
  };
  messageRetryHandler = async (message) => {
    const msg = this.getMessage(message.id ?? "");
    this.removeMessage(message.id ?? "");
    return msg;
  };
};
var retryMessageHandler_default = MessageRetryHandler;

// recovered-main-src/electron/main/class/instance.js
var import_libphonenumber_js = require("libphonenumber-js");
var import_crypto2 = require("crypto");
var EmbeddedQueue = __toESM(require("embedded-queue"));
var import_node_crypto2 = require("node:crypto");

// recovered-main-src/electron/main/helper/chatbotPayloadSchema.js
var import_zod = require("zod");
var CHATBOT_MAX_BUTTONS = 3;
var OPENAI_CHATBOT_RESPONSE_SCHEMA = Object.freeze({
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "WhatsAppChatBotResponse",
  type: "object",
  additionalProperties: false,
  required: [
    "type",
    "message",
    "title",
    "text",
    "footer",
    "buttons",
    "description",
    "buttonText",
    "sections",
    "question",
    "options",
    "selectableCount",
    "isAnonymous"
  ],
  properties: {
    type: {
      type: "string",
      enum: ["text", "buttons", "list", "poll"]
    },
    // TEXT
    message: { type: ["string", "null"] },
    // BUTTONS
    title: { type: ["string", "null"] },
    text: { type: ["string", "null"] },
    footer: { type: ["string", "null"] },
    buttons: {
      type: ["array", "null"],
      items: {
        type: "object",
        required: ["type", "label", "phone", "url", "payload"],
        properties: {
          type: { type: "string", enum: ["CALL", "URL", "REPLY"] },
          label: { type: ["string", "null"] },
          phone: { type: ["string", "null"] },
          url: { type: ["string", "null"] },
          payload: { type: ["string", "null"] }
        },
        additionalProperties: false
      },
      minItems: 0
    },
    // LIST
    description: { type: ["string", "null"] },
    buttonText: { type: ["string", "null"] },
    sections: {
      type: ["array", "null"],
      items: {
        type: "object",
        required: ["title", "rows"],
        properties: {
          title: { type: ["string", "null"] },
          rows: {
            type: ["array", "null"],
            items: {
              type: "object",
              required: ["title", "description", "rowId"],
              properties: {
                title: { type: ["string", "null"] },
                description: { type: ["string", "null"] },
                rowId: { type: ["string", "null"] }
              },
              additionalProperties: false
            }
          }
        },
        additionalProperties: false
      },
      minItems: 0
    },
    // POLL
    question: { type: ["string", "null"] },
    options: {
      type: ["array", "null"],
      items: { type: ["string", "null"] },
      minItems: 0
    },
    selectableCount: { type: ["integer", "null"] },
    isAnonymous: { type: ["boolean", "null"] }
  }
});
var GEMINI_CHATBOT_RESPONSE_SCHEMA = Object.freeze({
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "WhatsAppChatBotResponse-GeminiOptimized",
  type: "object",
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: { type: "string", enum: ["text", "buttons", "list", "poll"] },
    message: { type: ["string", "null"] },
    title: { type: ["string", "null"] },
    text: { type: ["string", "null"] },
    footer: { type: ["string", "null"] },
    description: { type: ["string", "null"] },
    buttonText: { type: ["string", "null"] },
    buttons: {
      type: ["array", "null"],
      items: {
        type: "object",
        required: ["type", "label"],
        properties: {
          type: { type: "string", enum: ["CALL", "URL", "REPLY"] },
          label: { type: ["string", "null"] },
          phone: { type: ["string", "null"] },
          url: { type: ["string", "null"] },
          payload: { type: ["string", "null"] }
        },
        additionalProperties: false
      }
    },
    listItems: {
      type: ["array", "null"],
      items: {
        type: "object",
        required: ["title"],
        properties: {
          title: { type: "string" },
          rowId: { type: ["string", "null"] },
          description: { type: ["string", "null"] }
        },
        additionalProperties: false
      }
    },
    question: { type: ["string", "null"] },
    options: {
      type: ["array", "null"],
      items: { type: ["string", "null"] }
    },
    selectableCount: { type: ["integer", "null"] },
    isAnonymous: { type: ["boolean", "null"] }
  }
});
var GROK_CHATBOT_RESPONSE_SCHEMA = Object.freeze({
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "WhatsAppChatBotResponse-GrokSafe",
  type: "object",
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: { type: "string", enum: ["text", "buttons", "list", "poll"] },
    message: { type: ["string", "null"] },
    title: { type: ["string", "null"] },
    text: { type: ["string", "null"] },
    footer: { type: ["string", "null"] },
    buttons: {
      type: ["array", "null"],
      items: {
        type: "object",
        required: ["type", "label"],
        properties: {
          type: { type: "string", enum: ["CALL", "URL", "REPLY"] },
          label: { type: ["string", "null"] },
          phone: { type: ["string", "null"] },
          url: { type: ["string", "null"] },
          payload: { type: ["string", "null"] }
        },
        additionalProperties: false
      }
    },
    description: { type: ["string", "null"] },
    buttonText: { type: ["string", "null"] },
    sections: {
      type: ["array", "null"],
      items: {
        type: "object",
        required: ["title", "rows"],
        properties: {
          title: { type: ["string", "null"] },
          rows: {
            type: ["array", "null"],
            items: {
              type: "object",
              required: ["title", "rowId"],
              properties: {
                title: { type: ["string", "null"] },
                description: { type: ["string", "null"] },
                rowId: { type: ["string", "null"] }
              },
              additionalProperties: false
            }
          }
        },
        additionalProperties: false
      }
    },
    question: { type: ["string", "null"] },
    options: {
      type: ["array", "null"],
      items: { type: ["string", "null"] }
    },
    selectableCount: { type: ["integer", "null"] },
    isAnonymous: { type: ["boolean", "null"] }
  }
});
var CHATBOT_SCHEMA_VARIANTS = Object.freeze({
  openai: Object.freeze({
    key: "openai",
    label: "OpenAI-compatible JSON object",
    description: "Used by providers that implement the Chat Completions JSON/object mode (OpenAI, Azure, Anthropic, Groq, etc.)",
    responseFormat: "json_schema",
    schema: OPENAI_CHATBOT_RESPONSE_SCHEMA
  }),
  gemini: Object.freeze({
    key: "gemini",
    label: "Gemini JSON payload",
    description: "Optimized for Google Gemini models where button/list metadata is flattened into primitive arrays.",
    responseFormat: "application/json",
    schema: GEMINI_CHATBOT_RESPONSE_SCHEMA
  }),
  grok: Object.freeze({
    key: "grok",
    label: "Grok relaxed JSON",
    description: "Targets Grok models which require minimal constraints on array lengths or property requirements.",
    responseFormat: "json_object",
    schema: GROK_CHATBOT_RESPONSE_SCHEMA
  })
});
var PLATFORM_SCHEMA_VARIANT_MAP = Object.freeze({
  chatgpt: "openai",
  openai: "openai",
  gpt: "openai",
  azureopenai: "openai",
  claude: "openai",
  groq: "openai",
  perplexity: "openai",
  mistral: "openai",
  cohere: "openai",
  openrouter: "openai",
  fireworks: "openai",
  togetherai: "openai",
  deepseek: "openai",
  ai21: "openai",
  writer: "openai",
  moonshot: "openai",
  zhipu: "openai",
  qwen: "openai",
  yi: "openai",
  llamacloud: "openai",
  gemini: "gemini",
  google: "gemini",
  grok: "grok",
  xai: "grok",
  "x.ai": "grok"
});
function getChatBotSchemaVariant(platform) {
  const normalized = String(platform || "").trim().toLowerCase();
  const variantKey = PLATFORM_SCHEMA_VARIANT_MAP[normalized] || "openai";
  return CHATBOT_SCHEMA_VARIANTS[variantKey];
}
function getChatBotSchemaForPlatform(platform) {
  return getChatBotSchemaVariant(platform).schema;
}
var buttonZ = import_zod.z.object({
  type: import_zod.z.enum(["CALL", "URL", "REPLY"]),
  label: import_zod.z.string().min(1),
  phone: import_zod.z.string().nullable(),
  url: import_zod.z.string().nullable(),
  payload: import_zod.z.string().nullable()
});
var textZ = import_zod.z.object({
  type: import_zod.z.literal("text"),
  message: import_zod.z.string().min(1)
});
var buttonsZ = import_zod.z.object({
  type: import_zod.z.literal("buttons"),
  text: import_zod.z.string().min(1),
  buttons: import_zod.z.array(buttonZ).min(1).max(CHATBOT_MAX_BUTTONS),
  title: import_zod.z.string().nullable().optional(),
  footer: import_zod.z.string().nullable().optional()
});
var listZ = import_zod.z.object({
  type: import_zod.z.literal("list"),
  title: import_zod.z.string().min(1),
  description: import_zod.z.string().min(1),
  buttonText: import_zod.z.string().min(1),
  sections: import_zod.z.array(
    import_zod.z.object({
      title: import_zod.z.string().nullable(),
      rows: import_zod.z.array(
        import_zod.z.object({
          title: import_zod.z.string().min(1),
          description: import_zod.z.string().nullable(),
          rowId: import_zod.z.string().min(1)
        })
      ).min(1)
    })
  ).min(1),
  footer: import_zod.z.string().nullable().optional()
});
var pollZ = import_zod.z.object({
  type: import_zod.z.literal("poll"),
  question: import_zod.z.string().min(1),
  options: import_zod.z.array(import_zod.z.string().min(1)).min(2),
  selectableCount: import_zod.z.number().int().min(1).optional(),
  isAnonymous: import_zod.z.boolean().optional()
});
var chatBotPayloadZodSchema = import_zod.z.discriminatedUnion("type", [
  textZ,
  buttonsZ,
  listZ,
  pollZ
]);
function validateChatBotPayloadShape(payload, logger2 = null) {
  const res = chatBotPayloadZodSchema.safeParse(payload);
  if (!res.success) {
    logger2?.debug?.({ validationIssues: res.error.issues }, "Payload rejected");
    return null;
  }
  return res.data;
}

// recovered-main-src/electron/main/class/instance.js
var require3 = (0, import_node_module4.createRequire)(__filename);
if (!globalThis.crypto) {
  globalThis.crypto = new import_webcrypto.Crypto();
}
var dbUtil = new db_action_default(db_default);
var baileysModulePromise2;
var resolveGlobalBaileysPromise = () => {
  const globalPromise = globalThis?.__baileysModulePromise;
  if (globalPromise && typeof globalPromise.then === "function") {
    return globalPromise;
  }
  return null;
};
var loadBaileysModule = async () => {
  if (!baileysModulePromise2) {
    const existingPromise = resolveGlobalBaileysPromise();
    if (existingPromise) {
      baileysModulePromise2 = existingPromise;
      return existingPromise;
    }
    baileysModulePromise2 = (async () => {
      try {
        const imported = await import(
          /* @vite-ignore */
          "baileys"
        );
        return imported;
      } catch (error2) {
        if (error2 instanceof SyntaxError && typeof error2.message === "string" && error2.message.includes("Unexpected token 'with'")) {
          const resolvedPath = require3.resolve("baileys/lib/index.js");
          const imported = await import((0, import_node_url3.pathToFileURL)(resolvedPath).href);
          return imported;
        }
        throw error2;
      }
    })().catch((error2) => {
      baileysModulePromise2 = null;
      try {
        sentryCaptureException(error2);
        try {
          sentryCaptureMetric("metric.wa.load_error", {
            level: SentryLevels.Error,
            extra: { message: error2?.message }
          });
        } catch {
        }
      } catch {
      }
      throw error2;
    });
  }
  return baileysModulePromise2;
};
var handler = new retryMessageHandler_default();
var deriveFunctionName2 = () => {
  const rawStack = new Error().stack;
  if (!rawStack) {
    return "unknown";
  }
  const ignoredSubstrings = [
    "deriveFunctionName",
    "logMethod",
    "Pino.",
    "emitLog"
    // pino internals
  ];
  const frames = rawStack.split("\n").slice(2);
  for (const frame of frames) {
    const cleaned = frame.trim();
    if (!cleaned.length) {
      continue;
    }
    const match = cleaned.match(/^at\s+([^\s(]+).*$/);
    if (!match || !match[1]) {
      continue;
    }
    const candidate = match[1];
    if (candidate === "Object.<anonymous>" || ignoredSubstrings.some((str) => candidate.includes(str))) {
      continue;
    }
    return candidate;
  }
  return "unknown";
};
var isDev = !import_electron7.app.isPackaged;
var LOG_LEVEL2 = isDev ? "debug" : "info";
var SOCKET_LOG_LEVEL = (process.env.SOCKET_LOG_LEVEL || "silent").toString().toLowerCase();
var SIGNAL_STORE_LOG_LEVEL = (process.env.SIGNAL_STORE_LOG_LEVEL || "silent").toString().toLowerCase();
var LOG_CONNECTION_UPDATES = (process.env.LOG_CONNECTION_UPDATES || "").toString().toLowerCase() === "true";
var SILENCE_SIGNAL_SESSION_LOGS = (process.env.SILENCE_SIGNAL_SESSION_LOGS ?? "true").toString().toLowerCase() !== "false";
var getSocketLogger = () => createSocketLogger({ level: SOCKET_LOG_LEVEL });
var socketBaseLogger = getSocketLogger();
var signalStoreLogger = createSocketLogger({ level: SIGNAL_STORE_LOG_LEVEL });
var HEADER_TYPE = {
  UNKNOWN: 0,
  EMPTY: 1,
  TEXT: 2,
  DOCUMENT: 3,
  IMAGE: 4,
  VIDEO: 5,
  LOCATION: 6
};
var resolveInstancePrettyTarget = () => {
  if (!isDev) {
    return null;
  }
  try {
    return require3.resolve("pino-pretty");
  } catch {
    return null;
  }
};
var INSTANCE_PRETTY_TARGET = resolveInstancePrettyTarget();
var loggerOptions = {
  level: LOG_LEVEL2,
  base: { service: "whatsapp-instance" },
  timestamp: import_pino2.default.stdTimeFunctions.isoTime,
  ...INSTANCE_PRETTY_TARGET ? {
    transport: {
      target: INSTANCE_PRETTY_TARGET,
      options: {
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
        singleLine: false,
        colorize: true
      }
    }
  } : {},
  hooks: {
    logMethod(inputArgs, method) {
      if (!Array.isArray(inputArgs)) {
        return method.apply(this, inputArgs);
      }
      const args = [...inputArgs];
      const firstArg = args[0];
      const existingFn = (firstArg && typeof firstArg === "object" && firstArg !== null ? firstArg.fn || firstArg.functionName || firstArg.function_name : null) ?? null;
      if (existingFn) {
        if (typeof firstArg === "object" && firstArg !== null) {
          args[0] = { ...firstArg, fn: existingFn };
        }
      } else if (typeof firstArg === "object" && firstArg !== null && !Array.isArray(firstArg)) {
        args[0] = {
          ...firstArg,
          fn: deriveFunctionName2()
        };
      } else {
        args.unshift({ fn: deriveFunctionName2() });
      }
      return method.apply(this, args);
    }
  }
};
var logger = (0, import_pino2.default)(loggerOptions);
var LIBSIGNAL_SESSION_LOG_PREFIXES = [
  "closing session:",
  "opening session:",
  "removing old closed session:",
  "migrating session to:"
];
var libSignalConsoleSilenced = false;
var suppressLibSignalSessionLogs = () => {
  if (libSignalConsoleSilenced || !SILENCE_SIGNAL_SESSION_LOGS) {
    return;
  }
  const originalInfo = typeof console.info === "function" ? console.info.bind(console) : null;
  if (!originalInfo) {
    return;
  }
  const shouldSuppress = (value) => {
    if (typeof value !== "string" || !value.length) {
      return false;
    }
    const normalized = value.toLowerCase();
    return LIBSIGNAL_SESSION_LOG_PREFIXES.some(
      (prefix) => normalized.startsWith(prefix)
    );
  };
  console.info = (...args) => {
    try {
      if (shouldSuppress(args[0])) {
        return void 0;
      }
    } catch (error2) {
      logger.debug(
        { error: error2?.message },
        "signal log suppression predicate failed"
      );
    }
    return originalInfo(...args);
  };
  libSignalConsoleSilenced = true;
  logger.debug(
    { prefixes: LIBSIGNAL_SESSION_LOG_PREFIXES },
    "Silenced libsignal session console.info logs"
  );
};
suppressLibSignalSessionLogs();
var ensureDirectoryExists = (targetPath) => {
  try {
    import_fs_extra3.default.ensureDirSync(targetPath);
  } catch (error2) {
    logger.error({ error: error2, targetPath }, "ensureDirectoryExists failed");
  }
};
var sessionPath = (() => {
  try {
    const resolved = globalThis.sessionPath || import_node_path4.default.join(import_electron7.app.getPath("userData"), "sessions");
    ensureDirectoryExists(resolved);
    globalThis.sessionPath = resolved;
    return resolved;
  } catch (error2) {
    logger.debug({ error: error2 }, "Failed to resolve session path");
    try {
      sentryCaptureException(error2);
    } catch {
    }
    throw error2;
  }
})();
var extractErrorMessage = (error2) => {
  if (!error2) {
    return "";
  }
  if (typeof error2 === "string") {
    return error2;
  }
  const messageSource = error2?.output?.payload?.message ?? error2?.output?.payload?.error ?? error2?.data?.message ?? error2?.message ?? error2?.reason ?? (typeof error2?.toString === "function" ? error2.toString() : "");
  if (messageSource) {
    return String(messageSource);
  }
  if (error2?.stack) {
    return String(error2.stack);
  }
  return "";
};
var CONNECTION_ERROR_KEYWORDS2 = [
  "connection closed",
  "connection lost",
  "websocket is not open",
  "websocket was closed",
  "not connected",
  "socket is closing"
];
var shouldSuppressConnectionIssue = (error2) => {
  const normalized = extractErrorMessage(error2)?.toLowerCase?.() ?? "";
  if (!normalized) {
    return false;
  }
  return CONNECTION_ERROR_KEYWORDS2.some(
    (keyword) => normalized.includes(keyword)
  );
};
var SESSION_DECRYPT_ERROR_KEYWORDS = [
  "messagecountererror",
  "failed to decrypt message with any known session",
  "key used already or never filled",
  "no keys for given direction",
  "skipped retry for sender key"
];
var shouldAttemptSessionRepair = (error2) => {
  const normalized = extractErrorMessage(error2)?.toLowerCase?.() ?? "";
  if (!normalized) {
    return false;
  }
  return SESSION_DECRYPT_ERROR_KEYWORDS.some(
    (keyword) => normalized.includes(keyword)
  );
};
var CHATBOT_DELAY_DEFAULT_SECONDS = Object.freeze({
  initial: 1,
  typing: 2,
  lead: 10
});
var CHATBOT_INITIAL_WAIT_MS = CHATBOT_DELAY_DEFAULT_SECONDS.initial * 1e3;
var CHATBOT_COMPOSING_DELAY_MS = CHATBOT_DELAY_DEFAULT_SECONDS.typing * 1e3;
var CHATBOT_LEAD_DELAY_MS = CHATBOT_DELAY_DEFAULT_SECONDS.lead * 1e3;
var TYPING_GRACE_DELAY_MS = CHATBOT_COMPOSING_DELAY_MS;
var CHATBOT_CONTACT_IDLE_BUFFER_CEILING_MS = 5e3;
var CHATBOT_AI_ECHO_TTL_MS = 5 * 60 * 1e3;
var CHATBOT_AI_ECHO_TEXT_WINDOW_MS = 15e3;
var CHATBOT_SUMMARY_HISTORY_LIMIT = 100;
var CHATBOT_SENTIMENT_KEYWORDS = Object.freeze({
  positive: [
    "great",
    "amazing",
    "good",
    "love",
    "happy",
    "thank you",
    "thanks",
    "perfect",
    "awesome",
    "satisfied"
  ],
  negative: [
    "angry",
    "upset",
    "frustrated",
    "bad",
    "terrible",
    "issue",
    "problem",
    "disappointed",
    "complain",
    "sad"
  ]
});
var CHATBOT_INTENT_KEYWORDS = Object.freeze([
  "need",
  "looking",
  "interested",
  "require",
  "want",
  "plan",
  "order",
  "buy",
  "purchase",
  "support",
  "issue",
  "problem",
  "help",
  "subscribe",
  "trial",
  "demo",
  "price",
  "quote",
  "email",
  "service",
  "integration"
]);
var SELF_TYPING_KEY = "__self__";
var CONTACT_METADATA_TTL_SECONDS = 600;
var CONTACT_STATUS_TTL_SECONDS = 300;
var GROUP_METADATA_TTL_SECONDS = 300;
var CACHE_PERSIST_DEBOUNCE_MS = 1500;
var CONTACT_CACHE_SNAPSHOT_LIMIT = 5e3;
var STATUS_CACHE_SNAPSHOT_LIMIT = 8e3;
var GROUP_CACHE_SNAPSHOT_LIMIT = 1e3;
var additionalNodes = [
  {
    tag: "biz",
    attrs: {},
    content: [
      {
        tag: "interactive",
        attrs: {
          v: "1",
          type: "native_flow"
        },
        content: [
          {
            tag: "native_flow",
            attrs: {
              v: "2",
              name: "mixed"
            },
            content: []
          }
        ]
      }
    ]
  }
];
var additionalNodesForList = [
  {
    tag: "biz",
    attrs: {},
    content: [
      {
        tag: "list",
        attrs: {
          v: "2",
          type: "product_list"
        }
      }
    ]
  }
];
var inferIsCommunityGroup = (group) => {
  if (!group || typeof group !== "object") {
    return false;
  }
  const communityFlagKeys = [
    "isCommunity",
    "isCommunityAnnounce",
    "isCommunityParent",
    "isCommunitySubgroup",
    "isDefaultSubgroup",
    "isCommunitySettings",
    "isParentCommunity",
    "defaultSubgroup"
  ];
  if (communityFlagKeys.some((key) => Boolean(group?.[key]))) {
    return true;
  }
  if (Array.isArray(group?.communityLinkedGroups) && group.communityLinkedGroups.length > 0) {
    return true;
  }
  if (Array.isArray(group?.communityParticipants) && group.communityParticipants.length > 0) {
    return true;
  }
  const metadataCandidates = [
    group?.community,
    group?.communityInfo,
    group?.communityMetadata,
    group?.parent,
    group?.parentGroup,
    group?.parentJid,
    group?.parentGroupId,
    group?.communityJid,
    group?.parentGroupJid
  ];
  if (metadataCandidates.some((entry) => Boolean(entry))) {
    return true;
  }
  const typeCandidates = [group?.groupType, group?.groupTypeV2, group?.type];
  for (const candidate of typeCandidates) {
    if (typeof candidate === "string") {
      if (candidate.toLowerCase().includes("community")) {
        return true;
      }
    }
  }
  if (typeof group?.id === "string" && group.id.includes("@lidg")) {
    return true;
  }
  return false;
};
var WA_VERSION = "2.24.6.77";
var WA_VERSION_HASH = (0, import_node_crypto2.createHash)("md5").update(WA_VERSION).digest("hex");
var MOBILE_TOKEN = Buffer.from(
  "0a1mLfGUIBVrMKF1RdvLI5lkRBvof6vn0fD2QRSM" + WA_VERSION_HASH
);
var MOBILE_USERAGENT = `WhatsApp/${WA_VERSION} iOS/15.3.1 Device/Apple-iPhone_7`;
var WhatsAppInstance = class {
  baileysLib = null;
  async ensureBaileys() {
    if (!this.baileysLib) {
      this.baileysLib = await loadBaileysModule();
      if (this.baileysLib?.default && typeof this.baileysLib.default === "function" && !this.baileysLib.makeWASocket) {
        this.baileysLib.makeWASocket = this.baileysLib.default;
      }
    }
    return this.baileysLib;
  }
  socketConfig = {
    //version: [2, 3000, 1014080102], // add latest version this is example version
    //version: [ 2, 3000, 1015901307 ],
    //agent:agent,
    printQRInTerminal: false,
    markOnlineOnConnect: false,
    generateHighQualityLinkPreview: true,
    //browser: [APP_TITLE, "", "10"],
    //browser: [APP_TITLE, "Chrome", "10"],
    //version: [2, 2413, 1],
    //browser: Browsers.windows("Google Chrome"),
    //browser: Browsers.macOS("Desktop"),
    //browser: ['L', 'Safari', '1.0.0'],
    //browser: Browsers.macOS(import.meta.env.VITE_APP_TITLE),
    //browser: Browsers.appropriate(APP_TITLE),
    logger: socketBaseLogger,
    msgRetryCounterCache: new import_node_cache.default(),
    userDevicesCache: new import_node_cache.default({ stdTTL: 300 }),
    generateHighQualityLinkPreview: true,
    getMessage: handler.messageRetryHandler,
    connectTimeoutMs: 9e4,
    //emitOwnEvents: false,
    keepAliveIntervalMs: 2e4,
    shouldSyncHistoryMessage: () => false,
    downloadHistory: false,
    syncFullHistory: false,
    defaultQueryTimeoutMs: 9e4,
    retryRequestDelayMs: 2e3,
    qrTimeout: 12e4,
    connectCooldownMs: 5e3,
    transactionOpts: { maxCommitRetries: 15, delayBetweenTriesMs: 5e3 }
  };
  isMultiFileAuth = true;
  useMobile = false;
  registration = null;
  paringCode = null;
  key = "";
  name = "wa-instance";
  number = "";
  authState;
  allowWebhook = false;
  store;
  maxQrRetry = 6;
  qrRetry = 0;
  eventLoaded = false;
  restart = false;
  isConnected = false;
  qrTimeout = false;
  cronTask;
  status = "";
  message = "";
  instance = {
    key: this.key,
    chats: [],
    qr: "",
    messages: [],
    online: false,
    wuid: null,
    profilePictureUrl: null,
    qrcode: {
      count: 0,
      code: null,
      base64: null,
      pairingCode: null
    }
  };
  connectionState = {
    state: "close",
    updatedAt: Date.now(),
    reason: null,
    reasonCode: null
  };
  lastConnectionNotification = 0;
  phoneExtra = {
    mobileCodeEndpoint: "https://v.whatsapp.net/v2/code",
    mobileRegEndpoint: "https://v.whatsapp.net/v2/register",
    mobileUserAgent: MOBILE_USERAGENT,
    mobileToken: MOBILE_TOKEN,
    mcc: "404",
    locale: "en",
    platform: "ios"
    // Default to android
  };
  queue;
  chatBotReplyBuffer = /* @__PURE__ */ new Map();
  typingState = /* @__PURE__ */ new Map();
  chatBotOwnerHoldMap = /* @__PURE__ */ new Map();
  chatBotConversationState = /* @__PURE__ */ new Map();
  chatBotLeadSummaryTimers = /* @__PURE__ */ new Map();
  chatBotLastAiEchoes = /* @__PURE__ */ new Map();
  chatBotRuntimeConfig = {
    enable: false,
    platform: "chatGPT",
    systemInstruction: "",
    leadPhone: "",
    delays: {
      initialMs: CHATBOT_INITIAL_WAIT_MS,
      typingMs: CHATBOT_COMPOSING_DELAY_MS,
      leadMs: CHATBOT_LEAD_DELAY_MS
    }
  };
  chatBotRuntimeConfigLastLoadedAt = 0;
  chatBotConfigTtlMs = 3e4;
  contactMetadataCache = new import_node_cache.default({
    stdTTL: CONTACT_METADATA_TTL_SECONDS,
    useClones: false,
    checkperiod: Math.max(30, Math.floor(CONTACT_METADATA_TTL_SECONDS / 2))
  });
  contactStatusCache = new import_node_cache.default({
    stdTTL: CONTACT_STATUS_TTL_SECONDS,
    useClones: false,
    checkperiod: Math.max(20, Math.floor(CONTACT_STATUS_TTL_SECONDS / 2))
  });
  groupMetadataCache = new import_node_cache.default({
    stdTTL: GROUP_METADATA_TTL_SECONDS,
    useClones: false,
    checkperiod: Math.max(15, Math.floor(GROUP_METADATA_TTL_SECONDS / 3))
  });
  contactStoreCache = this.createEmptyContactStoreCache();
  _onContactsUpsert = (payload) => {
    this.handleContactsMutation(payload, "upsert");
  };
  _onContactsUpdate = (payload) => {
    this.handleContactsMutation(payload, "update");
  };
  _onContactsDelete = (payload) => {
    this.handleContactsMutation(payload, "delete");
  };
  _onGroupsUpsert = (payload) => {
    this.handleGroupsUpsert(payload);
  };
  _onGroupsUpdate = (payload) => {
    this.handleGroupsUpdate(payload);
  };
  _onGroupParticipantsUpdate = (payload) => {
    this.handleGroupParticipantsUpdate(payload);
  };
  typingGracePeriodMs = TYPING_GRACE_DELAY_MS;
  _presenceListener = null;
  cacheSnapshotDir = null;
  cacheSnapshotFiles = null;
  _cachePersistTimer = null;
  _cachePersistPromise = null;
  _cachePersistPending = false;
  _loadingCacheSnapshots = false;
  cacheSnapshotsLoaded = false;
  lastCachePersistTs = null;
  lastCachePersistReason = null;
  lastCacheLoadTs = null;
  lastCacheLoadSummary = null;
  lastCacheClearTs = null;
  lastCacheClearSummary = null;
  lastCacheReloadTs = null;
  lastCacheReloadSummary = null;
  cachePersistDebounceMs = CACHE_PERSIST_DEBOUNCE_MS;
  pollU;
  _sessionRepairInProgress = false;
  constructor(key, name, useMobile, isMultiFileAuth = true) {
    this.isMultiFileAuth = isMultiFileAuth;
    this.useMobile = useMobile;
    this.key = key ? key : (0, import_uuid2.v4)();
    this.name = name ? name : "wa-instance";
    this.metrics = {};
    this._metricFlushInterval = null;
    this.incrementMetric = (metricName, n = 1, extra = {}) => {
      try {
        this.metrics[metricName] = (this.metrics[metricName] || 0) + n;
        sentryAddBreadcrumb("metric", `${metricName} +${n}`, {
          value: this.metrics[metricName],
          ...extra
        });
      } catch {
      }
    };
    this.flushMetric = (metricName) => {
      try {
        const value = this.metrics[metricName] || 0;
        sentryCaptureMetric(`metric.${metricName}`, {
          level: SentryLevels.Info,
          tags: { instance: this.key, metric: metricName },
          extra: { value, deviceId: this.deviceId ?? null }
        });
      } catch {
      }
      this.metrics[metricName] = 0;
    };
    this.flushMetrics = () => {
      try {
        const metricsSnapshot = { ...this.metrics || {} };
        sentryCaptureMetric(`metric.flush`, {
          level: SentryLevels.Info,
          tags: { instance: this.key },
          extra: { metrics: metricsSnapshot, deviceId: this.deviceId ?? null }
        });
      } catch {
      }
      this.metrics = {};
    };
    this.cacheSnapshotDir = import_node_path4.default.join(sessionPath, this.key, "cache");
    this.cacheSnapshotFiles = {
      contacts: import_node_path4.default.join(this.cacheSnapshotDir, "contacts.json"),
      status: import_node_path4.default.join(this.cacheSnapshotDir, "status.json"),
      groups: import_node_path4.default.join(this.cacheSnapshotDir, "groups.json")
    };
    logger.debug({ key: this.key }, "Start Session:");
    this.recordMessageType = (messageContent, explicitType = null) => {
      try {
        const type = explicitType ? String(explicitType) : function inferType(content) {
          if (!content) return "unknown";
          if (typeof content === "string") return "text";
          if (content?.text || content?.conversation || content?.extendedText)
            return "text";
          if (content?.template || content?.hydratedTemplate)
            return "template";
          if (content?.buttons || content?.interactive && content.interactive.type === "button_list")
            return "buttons";
          if (content?.poll) return "poll";
          if (content?.list || content?.interactive && content.interactive.type === "list")
            return "list";
          if (content?.contacts || content?.contact) return "contact";
          if (content?.image || content?.video || content?.document || content?.audio || content?.sticker)
            return "media";
          if (content?.forward) return "forward";
          return "unknown";
        }(messageContent);
        const metricName = `wa.message.sent.${type}`;
        this.incrementMetric(metricName, 1, { type });
      } catch (err) {
        logger.error({ error: err }, "recordMessageType failed");
        try {
          this.incrementMetric("wa.message.sent.unknown", 1);
        } catch {
        }
      }
    };
  }
  async createNewClient() {
    try {
      try {
        sentryAddBreadcrumb("wa.instance", `createNewClient start ${this.key}`);
      } catch {
      }
      const authState = await this.defineAuthState();
      if (authState?.saveCreds) {
        await authState.saveCreds();
      }
      try {
        this.incrementMetric("wa.connection.session", 1);
        this.flushMetric("wa.connection.session");
      } catch {
      }
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "createNewClient error");
      try {
        sentryAddBreadcrumb(
          "wa.instance.error",
          String(error2),
          {},
          SentryLevels.Error
        );
        sentryCaptureException(error2);
      } catch {
      }
    }
  }
  async defineAuthState() {
    const { useMultiFileAuthState } = await this.ensureBaileys();
    const sessionDir = import_node_path4.default.join(sessionPath, this.key);
    const backupDir = import_node_path4.default.join(sessionPath, `${this.key}-backup`);
    ensureDirectoryExists(sessionDir);
    ensureDirectoryExists(backupDir);
    await this.prepareSessionDirectories(sessionDir, backupDir);
    await this.loadCacheSnapshots();
    const ensureSessionDir = async () => {
      try {
        await import_fs_extra3.default.ensureDir(sessionDir);
      } catch (error2) {
        logger.debug(
          { key: this.key, sessionDir, error: error2 },
          "defineAuthState: ensureDir failed"
        );
        throw error2;
      }
    };
    const wrapWithDirCheck = (fn, label) => {
      if (typeof fn !== "function") {
        return fn;
      }
      return async (...args) => {
        await ensureSessionDir();
        try {
          return await fn(...args);
        } catch (error2) {
          if (error2?.code === "ENOENT") {
            logger.debug(
              { key: this.key, label, error: error2 },
              "defineAuthState: ENOENT, retrying"
            );
            await ensureSessionDir();
            return await fn(...args);
          }
          throw error2;
        }
      };
    };
    const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
    if (state?.keys?.set && typeof state.keys.set === "function") {
      const originalSet = state.keys.set.bind(state.keys);
      state.keys.set = wrapWithDirCheck(originalSet, "keys.set");
    }
    const wrappedSaveCreds = wrapWithDirCheck(saveCreds, "saveCreds");
    this.authState = {
      state,
      saveCreds: wrappedSaveCreds
    };
    logger.debug(
      { key: this.key, sessionDir },
      "defineAuthState: using multi-file auth state"
    );
    try {
      this.incrementMetric("wa.connection.define_auth_state", 1);
    } catch {
    }
    return this.authState;
  }
  async ensureAuthStateReady() {
    if (this.authState?.state && this.authState?.saveCreds) {
      return this.authState;
    }
    return this.defineAuthState();
  }
  async prepareSessionDirectories(sessionDir, backupDir) {
    try {
      await import_fs_extra3.default.ensureDir(sessionDir);
      await import_fs_extra3.default.ensureDir(backupDir);
      await import_fs_extra3.default.ensureDir(import_node_path4.default.join(sessionDir, "cache"));
    } catch (error2) {
      logger.debug(
        { key: this.key, sessionDir, backupDir, error: error2 },
        "prepareSessionDirectories: ensureDir failed"
      );
      throw error2;
    }
    await this.restoreSessionFromBackup(sessionDir, backupDir);
    await this.cleanSessionArtifacts(sessionDir);
    const corruptEntries = await this.validateSessionFiles(sessionDir);
    if (corruptEntries.length) {
      await this.resetCorruptSession(sessionDir, backupDir, corruptEntries);
    } else {
      await this.ensureBackupSnapshot(sessionDir, backupDir);
    }
  }
  async restoreSessionFromBackup(sessionDir, backupDir) {
    try {
      const [sessionEntries, backupEntries] = await Promise.all([
        import_fs_extra3.default.readdir(sessionDir).catch(() => []),
        import_fs_extra3.default.readdir(backupDir).catch(() => [])
      ]);
      if (sessionEntries.length || !backupEntries.length) {
        return false;
      }
      await import_fs_extra3.default.copy(backupDir, sessionDir, { overwrite: true });
      logger.debug({ key: this.key }, "Restored session directory from backup");
      return true;
    } catch (error2) {
      logger.debug(
        { key: this.key, sessionDir, backupDir, error: error2 },
        "restoreSessionFromBackup error"
      );
      return false;
    }
  }
  async cleanSessionArtifacts(sessionDir) {
    try {
      const entries = await import_fs_extra3.default.readdir(sessionDir).catch(() => []);
      await Promise.all(
        entries.map(async (entry) => {
          const entryPath = import_node_path4.default.join(sessionDir, entry);
          const stat = await import_fs_extra3.default.stat(entryPath).catch(() => null);
          if (!stat) {
            return;
          }
          const lower = entry.toLowerCase();
          if (stat.isDirectory()) {
            if (lower === "tmp" || lower.endsWith(".tmp")) {
              await import_fs_extra3.default.remove(entryPath).catch(() => {
              });
            }
            return;
          }
          if (lower === ".ds_store" || lower.endsWith(".tmp") || lower.endsWith(".log")) {
            await import_fs_extra3.default.remove(entryPath).catch(() => {
            });
            return;
          }
          if (stat.size === 0) {
            await import_fs_extra3.default.remove(entryPath).catch(() => {
            });
          }
        })
      );
    } catch (error2) {
      logger.debug(
        { key: this.key, sessionDir, error: error2 },
        "cleanSessionArtifacts error"
      );
    }
  }
  async validateSessionFiles(sessionDir) {
    const corruptEntries = [];
    try {
      const entries = await import_fs_extra3.default.readdir(sessionDir).catch(() => []);
      await Promise.all(
        entries.map(async (entry) => {
          if (!entry.toLowerCase().endsWith(".json")) {
            return;
          }
          const entryPath = import_node_path4.default.join(sessionDir, entry);
          const stat = await import_fs_extra3.default.stat(entryPath).catch(() => null);
          if (!stat || !stat.isFile()) {
            return;
          }
          try {
            await import_fs_extra3.default.readJson(entryPath);
          } catch (error2) {
            logger.debug(
              { key: this.key, entry, error: error2 },
              "validateSessionFiles: corrupt JSON detected"
            );
            corruptEntries.push(entry);
          }
        })
      );
    } catch (error2) {
      logger.debug(
        { key: this.key, sessionDir, error: error2 },
        "validateSessionFiles error"
      );
    }
    if (corruptEntries.length) {
      logger.debug(
        { key: this.key, corruptEntries },
        "validateSessionFiles: corrupt entries found"
      );
    }
    return corruptEntries;
  }
  async resetCorruptSession(sessionDir, backupDir, corruptEntries) {
    try {
      const quarantineDir = import_node_path4.default.join(
        backupDir,
        `corrupt-${Date.now().toString()}`
      );
      await import_fs_extra3.default.ensureDir(quarantineDir);
      const entries = await import_fs_extra3.default.readdir(sessionDir).catch(() => []);
      for (const entry of entries) {
        const source = import_node_path4.default.join(sessionDir, entry);
        const target = import_node_path4.default.join(quarantineDir, entry);
        await import_fs_extra3.default.move(source, target, { overwrite: true }).catch(() => {
        });
      }
      await import_fs_extra3.default.emptyDir(sessionDir);
      logger.debug(
        { key: this.key, corruptEntries },
        "resetCorruptSession: quarantined corrupt session"
      );
    } catch (error2) {
      logger.debug(
        { key: this.key, sessionDir, error: error2 },
        "resetCorruptSession error"
      );
    }
  }
  async ensureBackupSnapshot(sessionDir, backupDir) {
    try {
      const [sessionEntries, backupEntries] = await Promise.all([
        import_fs_extra3.default.readdir(sessionDir).catch(() => []),
        import_fs_extra3.default.readdir(backupDir).catch(() => [])
      ]);
      if (!sessionEntries.length) {
        return;
      }
      if (!backupEntries.length) {
        await import_fs_extra3.default.copy(sessionDir, backupDir, { overwrite: true });
        logger.debug({ key: this.key }, "Seeded session backup snapshot");
        return;
      }
      const elapsed = await import_fs_extra3.default.stat(backupDir).then((stats) => Date.now() - stats.mtimeMs).catch(() => null);
      if (elapsed !== null && elapsed > 12 * 60 * 60 * 1e3) {
        await import_fs_extra3.default.emptyDir(backupDir);
        await import_fs_extra3.default.copy(sessionDir, backupDir, { overwrite: true });
        logger.debug({ key: this.key }, "Refreshed session backup snapshot");
      }
    } catch (error2) {
      logger.debug(
        { key: this.key, sessionDir, backupDir, error: error2 },
        "ensureBackupSnapshot error"
      );
    }
  }
  async cleanStore() {
    try {
      logger.debug({ key: this.key }, "cleanStore: resetting memory caches");
      if (this.socketConfig?.msgRetryCounterCache?.flushAll) {
        this.socketConfig.msgRetryCounterCache.flushAll();
      }
      if (this.socketConfig?.userDevicesCache?.flushAll) {
        this.socketConfig.userDevicesCache.flushAll();
      }
      this.typingState?.clear?.();
      this.chatBotReplyBuffer?.clear?.();
      if (this.contactMetadataCache?.flushAll) {
        this.contactMetadataCache.flushAll();
        this.recordCacheMetric("wa.cache.contacts.clear");
      }
      if (this.contactStatusCache?.flushAll) {
        this.contactStatusCache.flushAll();
        this.recordCacheMetric("wa.cache.status.clear");
      }
      if (this.groupMetadataCache?.flushAll) {
        this.groupMetadataCache.flushAll();
        this.recordCacheMetric("wa.cache.groups.clear");
      }
      this.resetContactStoreCache?.();
      if (Array.isArray(this.instance?.messages)) {
        this.instance.messages.length = 0;
      }
      if (Array.isArray(this.instance?.chats)) {
        this.instance.chats.length = 0;
      }
      this.instance.qr = "";
      this.instance.qrcode = {
        count: 0,
        code: null,
        base64: null,
        pairingCode: null
      };
      this.instance.online = false;
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "cleanStore error");
    }
  }
  clearContactMetadataCache() {
    try {
      if (this.contactMetadataCache?.flushAll) {
        this.contactMetadataCache.flushAll();
      }
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "clearContactMetadataCache error");
    }
    this.recordCacheMetric("wa.cache.contacts.clear");
    this.scheduleCachePersist("contacts-clear");
  }
  recordCacheMetric(metricName, extra = {}) {
    if (typeof metricName !== "string" || !metricName.length) {
      return;
    }
    const normalized = metricName.startsWith("wa.") ? metricName : `wa.${metricName}`;
    this.incrementMetric(normalized, 1, extra);
  }
  describeNodeCache(cache, defaultTtlSeconds) {
    if (!cache || typeof cache.keys !== "function") {
      return {
        size: 0,
        active: 0,
        defaultTtlSeconds,
        stats: null,
        nearestExpiryMs: null,
        furthestExpiryMs: null
      };
    }
    const keys = cache.keys();
    const stats = typeof cache.getStats === "function" ? cache.getStats() : null;
    const now = Date.now();
    let active = 0;
    let nearestExpiryMs = null;
    let furthestExpiryMs = null;
    if (typeof cache.getTtl === "function") {
      for (const key of keys) {
        const ttl = cache.getTtl(key);
        if (typeof ttl !== "number" || ttl <= 0) {
          continue;
        }
        const remaining = ttl - now;
        if (!Number.isFinite(remaining) || remaining <= 0) {
          continue;
        }
        active += 1;
        if (nearestExpiryMs === null || remaining < nearestExpiryMs) {
          nearestExpiryMs = remaining;
        }
        if (furthestExpiryMs === null || remaining > furthestExpiryMs) {
          furthestExpiryMs = remaining;
        }
      }
    } else {
      active = keys.length;
    }
    return {
      size: keys.length,
      active,
      defaultTtlSeconds,
      stats,
      nearestExpiryMs,
      furthestExpiryMs
    };
  }
  getCacheDiagnostics() {
    return {
      key: this.key,
      cacheSnapshotsLoaded: this.cacheSnapshotsLoaded,
      lastCachePersistTs: this.lastCachePersistTs,
      lastCachePersistReason: this.lastCachePersistReason,
      lastCacheLoadTs: this.lastCacheLoadTs,
      lastCacheLoadSummary: this.lastCacheLoadSummary,
      lastCacheClearTs: this.lastCacheClearTs,
      lastCacheClearSummary: this.lastCacheClearSummary,
      lastCacheReloadTs: this.lastCacheReloadTs,
      lastCacheReloadSummary: this.lastCacheReloadSummary,
      cachePersistDebounceMs: this.cachePersistDebounceMs,
      cacheSnapshotDir: this.cacheSnapshotDir,
      cacheSnapshotFiles: this.cacheSnapshotFiles,
      persistenceState: {
        timerActive: Boolean(this._cachePersistTimer),
        pendingFlag: Boolean(this._cachePersistPending),
        inflight: Boolean(this._cachePersistPromise)
      },
      caches: {
        contactMetadata: this.describeNodeCache(
          this.contactMetadataCache,
          CONTACT_METADATA_TTL_SECONDS
        ),
        contactStatus: this.describeNodeCache(
          this.contactStatusCache,
          CONTACT_STATUS_TTL_SECONDS
        ),
        groupMetadata: this.describeNodeCache(
          this.groupMetadataCache,
          GROUP_METADATA_TTL_SECONDS
        )
      }
    };
  }
  async flushCachesToDisk(reason = "manual") {
    this.recordCacheMetric("wa.cache.persist.manual", { reason });
    await this.flushCacheSnapshots(reason, { force: true });
    return this.getCacheDiagnostics();
  }
  scheduleCachePersist(reason = "update") {
    if (this._loadingCacheSnapshots) {
      return;
    }
    try {
      this.incrementMetric("wa.cache.persist.schedule", 1, { reason });
    } catch {
    }
    this._cachePersistPending = true;
    if (this._cachePersistTimer) {
      return;
    }
    this._cachePersistTimer = setTimeout(() => {
      this._cachePersistTimer = null;
      this.flushCacheSnapshots(reason).catch((error2) => {
        logger.debug(
          { key: this.key, error: error2, reason },
          "scheduleCachePersist flush error"
        );
      });
    }, this.cachePersistDebounceMs);
  }
  getCacheSnapshotEntries(cache, defaultTtlSeconds, now, limit, label) {
    if (!cache || typeof cache.keys !== "function") {
      return [];
    }
    const entries = [];
    const keys = cache.keys();
    for (const key of keys) {
      if (typeof key !== "string" || !key.length) {
        continue;
      }
      let value;
      try {
        value = cache.get(key);
      } catch (error2) {
        logger.debug(
          { key: this.key, cacheKey: key, error: error2, label },
          "getCacheSnapshotEntries: cache.get failed"
        );
        continue;
      }
      if (value === void 0) {
        continue;
      }
      const ttlMs = typeof cache.getTtl === "function" ? cache.getTtl(key) : void 0;
      const expiresAt = typeof ttlMs === "number" && ttlMs > 0 ? ttlMs : now + defaultTtlSeconds * 1e3;
      if (!Number.isFinite(expiresAt) || expiresAt <= now) {
        continue;
      }
      const freshness = typeof value === "object" && value !== null && typeof value.cachedAt === "number" ? value.cachedAt : expiresAt;
      entries.push({ key, value, expiresAt, freshness });
    }
    if (limit && entries.length > limit) {
      entries.sort(
        (a, b) => (b.freshness ?? b.expiresAt) - (a.freshness ?? a.expiresAt)
      );
      entries.length = limit;
    }
    return entries.map(({ freshness: _freshness, ...entry }) => entry);
  }
  async writeSnapshotFile(filePath, entries, generatedAt, label) {
    if (!filePath) {
      return;
    }
    try {
      if (!Array.isArray(entries) || !entries.length) {
        await import_fs_extra3.default.remove(filePath).catch(() => {
        });
        return;
      }
      await import_fs_extra3.default.writeJson(
        filePath,
        {
          version: 1,
          generatedAt,
          entries
        },
        { spaces: 0 }
      );
    } catch (error2) {
      logger.debug(
        { key: this.key, filePath, label, error: error2, entries: entries?.length },
        "writeSnapshotFile error"
      );
    }
  }
  async writeCacheSnapshots(reason = "update") {
    try {
      await import_fs_extra3.default.ensureDir(this.cacheSnapshotDir);
    } catch (error2) {
      logger.debug(
        { key: this.key, error: error2 },
        "writeCacheSnapshots: ensureDir failed"
      );
    }
    const now = Date.now();
    const contactEntries = this.getCacheSnapshotEntries(
      this.contactMetadataCache,
      CONTACT_METADATA_TTL_SECONDS,
      now,
      CONTACT_CACHE_SNAPSHOT_LIMIT,
      "contacts"
    );
    const statusEntries = this.getCacheSnapshotEntries(
      this.contactStatusCache,
      CONTACT_STATUS_TTL_SECONDS,
      now,
      STATUS_CACHE_SNAPSHOT_LIMIT,
      "status"
    );
    const groupEntries = this.getCacheSnapshotEntries(
      this.groupMetadataCache,
      GROUP_METADATA_TTL_SECONDS,
      now,
      GROUP_CACHE_SNAPSHOT_LIMIT,
      "groups"
    );
    await Promise.all([
      this.writeSnapshotFile(
        this.cacheSnapshotFiles?.contacts,
        contactEntries,
        now,
        "contacts"
      ),
      this.writeSnapshotFile(
        this.cacheSnapshotFiles?.status,
        statusEntries,
        now,
        "status"
      ),
      this.writeSnapshotFile(
        this.cacheSnapshotFiles?.groups,
        groupEntries,
        now,
        "groups"
      )
    ]);
    this.lastCachePersistTs = now;
    this.lastCachePersistReason = reason;
    try {
      this.incrementMetric("wa.cache.persist.write", 1, {
        reason,
        contacts: contactEntries.length,
        status: statusEntries.length,
        groups: groupEntries.length
      });
    } catch {
    }
  }
  async flushCacheSnapshots(reason = "scheduled", options = {}) {
    const { force = false } = options ?? {};
    if (this._cachePersistTimer) {
      clearTimeout(this._cachePersistTimer);
      this._cachePersistTimer = null;
    }
    if (this._cachePersistPromise) {
      if (force) {
        this._cachePersistPending = true;
      }
      return this._cachePersistPromise;
    }
    if (!this._cachePersistPending && !force) {
      return Promise.resolve();
    }
    this._cachePersistPending = true;
    const run = async () => {
      try {
        do {
          this._cachePersistPending = false;
          await this.writeCacheSnapshots(reason);
        } while (this._cachePersistPending);
      } catch (error2) {
        logger.debug(
          { key: this.key, error: error2, reason },
          "flushCacheSnapshots error"
        );
      }
    };
    this._cachePersistPromise = run().finally(() => {
      this._cachePersistPromise = null;
      this._cachePersistPending = false;
    });
    return this._cachePersistPromise;
  }
  async loadCacheSnapshots() {
    const fallbackSummary = {
      contacts: 0,
      status: 0,
      groups: 0,
      loaded: false,
      executedAt: Date.now(),
      error: null
    };
    if (!this.cacheSnapshotFiles) {
      fallbackSummary.error = "snapshot-files-missing";
      this.lastCacheLoadSummary = { ...fallbackSummary };
      this.cacheSnapshotsLoaded = false;
      this.lastCacheLoadTs = null;
      return this.lastCacheLoadSummary;
    }
    this._loadingCacheSnapshots = true;
    try {
      await import_fs_extra3.default.ensureDir(this.cacheSnapshotDir).catch(() => {
      });
      const now = Date.now();
      const [contactsLoaded, statusLoaded, groupsLoaded] = await Promise.all([
        this.loadSnapshotFile(
          this.cacheSnapshotFiles.contacts,
          CONTACT_METADATA_TTL_SECONDS,
          (key, value, ttl) => {
            try {
              this.contactMetadataCache.set(key, value, ttl);
            } catch (error2) {
              logger.debug(
                { key: this.key, cacheKey: key, error: error2 },
                "loadCacheSnapshots: contactMetadataCache set failed"
              );
            }
          },
          CONTACT_CACHE_SNAPSHOT_LIMIT,
          now
        ),
        this.loadSnapshotFile(
          this.cacheSnapshotFiles.status,
          CONTACT_STATUS_TTL_SECONDS,
          (key, value, ttl) => {
            try {
              this.contactStatusCache.set(key, value, ttl);
            } catch (error2) {
              logger.debug(
                { key: this.key, cacheKey: key, error: error2 },
                "loadCacheSnapshots: contactStatusCache set failed"
              );
            }
          },
          STATUS_CACHE_SNAPSHOT_LIMIT,
          now
        ),
        this.loadSnapshotFile(
          this.cacheSnapshotFiles.groups,
          GROUP_METADATA_TTL_SECONDS,
          (key, value, ttl) => {
            try {
              this.groupMetadataCache.set(key, value, ttl);
            } catch (error2) {
              logger.debug(
                { key: this.key, cacheKey: key, error: error2 },
                "loadCacheSnapshots: groupMetadataCache set failed"
              );
            }
          },
          GROUP_CACHE_SNAPSHOT_LIMIT,
          now
        )
      ]);
      const executedAt = Date.now();
      const summary = {
        contacts: contactsLoaded ?? 0,
        status: statusLoaded ?? 0,
        groups: groupsLoaded ?? 0,
        loaded: true,
        executedAt,
        error: null
      };
      try {
        this.incrementMetric("wa.cache.persist.load", 1, {
          contacts: summary.contacts,
          status: summary.status,
          groups: summary.groups
        });
      } catch {
      }
      this.lastCacheLoadTs = executedAt;
      this.cacheSnapshotsLoaded = true;
      this.lastCacheLoadSummary = summary;
      return summary;
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "loadCacheSnapshots error");
      const executedAt = Date.now();
      const summary = {
        ...fallbackSummary,
        executedAt,
        loaded: false,
        error: error2 instanceof Error ? error2.message : String(error2 ?? "error")
      };
      this.lastCacheLoadSummary = summary;
      this.cacheSnapshotsLoaded = false;
      this.lastCacheLoadTs = null;
      return summary;
    } finally {
      this._loadingCacheSnapshots = false;
    }
  }
  async loadSnapshotFile(filePath, defaultTtlSeconds, setter, limit, now) {
    if (!filePath || typeof setter !== "function") {
      return;
    }
    const snapshot = await import_fs_extra3.default.readJson(filePath).catch(() => null);
    if (!snapshot || !Array.isArray(snapshot.entries)) {
      return 0;
    }
    let applied = 0;
    for (const entry of snapshot.entries) {
      if (!entry || typeof entry.key !== "string" || !entry.key.length) {
        continue;
      }
      if (limit && applied >= limit) {
        break;
      }
      const expiresAt = typeof entry.expiresAt === "number" && entry.expiresAt > 0 ? entry.expiresAt : now + defaultTtlSeconds * 1e3;
      const ttlSeconds = Math.floor((expiresAt - now) / 1e3);
      if (!Number.isFinite(ttlSeconds) || ttlSeconds <= 0) {
        continue;
      }
      try {
        setter(entry.key, entry.value, ttlSeconds);
        applied += 1;
      } catch (error2) {
        logger.debug(
          { key: this.key, cacheKey: entry.key, error: error2 },
          "loadSnapshotFile setter error"
        );
      }
    }
    return applied;
  }
  flushRuntimeCaches(scopesInput, options = {}) {
    const defaultScopes = ["contacts", "status", "groups"];
    const resolvedScopes = /* @__PURE__ */ new Set();
    const addScope = (value) => {
      if (typeof value !== "string") {
        return;
      }
      const parts = value.split(",");
      for (const part of parts) {
        const normalized = part.trim().toLowerCase();
        if (!normalized.length) {
          continue;
        }
        if (["*", "all", "cache", "caches"].includes(normalized)) {
          defaultScopes.forEach((scope) => resolvedScopes.add(scope));
          resolvedScopes.add("store");
          continue;
        }
        if (["contact", "contacts", "metadata", "contact-metadata"].includes(
          normalized
        )) {
          resolvedScopes.add("contacts");
          continue;
        }
        if (["status", "statuses", "presence", "contact-status"].includes(
          normalized
        )) {
          resolvedScopes.add("status");
          continue;
        }
        if (["group", "groups", "group-metadata", "group-participants"].includes(
          normalized
        )) {
          resolvedScopes.add("groups");
          continue;
        }
        if (["store", "contact-store", "store-cache"].includes(normalized)) {
          resolvedScopes.add("store");
          continue;
        }
      }
    };
    if (Array.isArray(scopesInput)) {
      scopesInput.forEach(addScope);
    } else if (typeof scopesInput === "string") {
      addScope(scopesInput);
    }
    if (!resolvedScopes.size) {
      defaultScopes.forEach((scope) => resolvedScopes.add(scope));
    }
    const shouldResetStore = resolvedScopes.has("store") || resolvedScopes.has("contacts") || resolvedScopes.has("status");
    const summary = {
      contacts: 0,
      status: 0,
      groups: 0
    };
    const reason = options?.reason ?? "manual-clear";
    const recordMetrics = options?.recordMetrics !== false;
    const flushCache = (cache, label, metricName) => {
      if (!cache || typeof cache.flushAll !== "function") {
        return;
      }
      let size = 0;
      if (typeof cache.keys === "function") {
        try {
          const keys = cache.keys();
          size = Array.isArray(keys) ? keys.length : 0;
        } catch {
          size = 0;
        }
      }
      try {
        cache.flushAll();
      } catch (error2) {
        logger.debug(
          { key: this.key, error: error2 },
          `flushRuntimeCaches: ${label} flush error`
        );
      }
      summary[label] = size;
      if (recordMetrics) {
        this.recordCacheMetric(metricName, { reason, entries: size });
      }
    };
    if (resolvedScopes.has("contacts")) {
      flushCache(
        this.contactMetadataCache,
        "contacts",
        "wa.cache.contacts.clear"
      );
    }
    if (resolvedScopes.has("status")) {
      flushCache(this.contactStatusCache, "status", "wa.cache.status.clear");
    }
    if (resolvedScopes.has("groups")) {
      flushCache(this.groupMetadataCache, "groups", "wa.cache.groups.clear");
    }
    if (shouldResetStore) {
      this.resetContactStoreCache();
    }
    if (options?.cancelPendingPersist) {
      if (this._cachePersistTimer) {
        clearTimeout(this._cachePersistTimer);
        this._cachePersistTimer = null;
      }
      if (!this._cachePersistPromise) {
        this._cachePersistPending = false;
      }
    }
    if (options?.schedulePersist) {
      this.scheduleCachePersist(options?.persistReason ?? reason);
    }
    if (recordMetrics) {
      this.incrementMetric("wa.cache.persist.clear", 1, {
        reason,
        scopes: Array.from(resolvedScopes).filter((scope) => scope !== "store").join(",") || "all"
      });
    }
    return {
      entries: summary,
      scopes: Array.from(resolvedScopes)
    };
  }
  async clearCacheStores(options = {}) {
    const reason = options?.reason ?? "manual-clear";
    const persistFlag = options?.persist;
    const removeSnapshots = Boolean(
      options?.removeSnapshots ?? options?.deleteSnapshots ?? false
    );
    const recordMetrics = options?.recordMetrics !== false;
    const scopeInput = options?.scopes ?? options?.scope ?? options?.targets ?? null;
    const cleared = this.flushRuntimeCaches(scopeInput, {
      reason,
      recordMetrics,
      cancelPendingPersist: true
    });
    let persistMode = "flushed";
    if (persistFlag === false) {
      persistMode = "skipped";
    } else if (options?.schedulePersist) {
      persistMode = "scheduled";
      this.scheduleCachePersist(options?.persistReason ?? reason);
    } else {
      await this.flushCacheSnapshots(reason, { force: true });
    }
    if (removeSnapshots && this.cacheSnapshotFiles) {
      const snapshotPaths = Object.values(this.cacheSnapshotFiles).filter(
        Boolean
      );
      await Promise.all(
        snapshotPaths.map((filePath) => import_fs_extra3.default.remove(filePath).catch(() => {
        }))
      );
    }
    const diagnostics = this.getCacheDiagnostics();
    const executedAt = Date.now();
    const effectiveScopes = cleared.scopes.filter((scope) => scope !== "store");
    this.lastCacheClearTs = executedAt;
    this.lastCacheClearSummary = {
      executedAt,
      reason,
      scopes: effectiveScopes,
      persistMode,
      removeSnapshots,
      clearedEntries: cleared.entries
    };
    if (recordMetrics) {
      this.recordCacheMetric("wa.cache.persist.clear.completed", {
        reason,
        persistMode,
        removeSnapshots: removeSnapshots ? 1 : 0
      });
    }
    return {
      cleared: cleared.entries,
      scopes: effectiveScopes,
      persistMode,
      removeSnapshots,
      diagnostics
    };
  }
  async reloadCacheSnapshots(options = {}) {
    const reason = options?.reason ?? "manual-reload";
    const clearBefore = options?.clearBefore !== false;
    const recordMetrics = options?.recordMetrics !== false;
    const scopeInput = options?.scopes ?? options?.scope ?? options?.targets ?? null;
    let cleared = null;
    if (clearBefore) {
      cleared = this.flushRuntimeCaches(scopeInput, {
        reason,
        recordMetrics,
        cancelPendingPersist: true
      });
    }
    const loadSummary = await this.loadCacheSnapshots();
    const diagnostics = this.getCacheDiagnostics();
    const executedAt = Date.now();
    this.lastCacheReloadTs = executedAt;
    this.lastCacheReloadSummary = {
      executedAt,
      reason,
      clearBefore,
      clearedScopes: cleared?.scopes?.filter((scope) => scope !== "store") ?? null,
      clearedEntries: cleared?.entries ?? null,
      loadSummary
    };
    if (recordMetrics) {
      this.recordCacheMetric("wa.cache.persist.reload", {
        reason,
        clearBefore: clearBefore ? 1 : 0,
        contacts: loadSummary?.contacts ?? 0,
        status: loadSummary?.status ?? 0,
        groups: loadSummary?.groups ?? 0
      });
    }
    return {
      cleared: cleared?.entries ?? null,
      scopes: cleared?.scopes?.filter((scope) => scope !== "store") ?? (clearBefore ? ["contacts", "status", "groups"] : []),
      loadSummary,
      diagnostics
    };
  }
  cacheContactStatus(key, value) {
    if (!this.contactStatusCache?.set || typeof key !== "string") {
      return;
    }
    const trimmed = key.trim();
    if (!trimmed.length) {
      return;
    }
    const variants = this.getContactKeyVariants(trimmed);
    variants.add(trimmed);
    try {
      for (const variant of variants) {
        this.contactStatusCache.set(variant, value ?? null);
      }
      this.recordCacheMetric("wa.cache.status.store", {
        variants: variants.size,
        hasValue: value !== void 0 && value !== null && value !== "" ? 1 : 0
      });
    } catch (error2) {
      logger.debug(
        { key: this.key, jid: trimmed, error: error2?.message },
        "cacheContactStatus error"
      );
    }
    this.scheduleCachePersist("status-update");
  }
  getCachedContactStatus(key) {
    if (!this.contactStatusCache?.get || typeof key !== "string") {
      return void 0;
    }
    const trimmed = key.trim();
    if (!trimmed.length) {
      return void 0;
    }
    const variants = this.getContactKeyVariants(trimmed);
    variants.add(trimmed);
    let hit = false;
    for (const variant of variants) {
      let cached;
      try {
        cached = this.contactStatusCache.get(variant);
      } catch {
        cached = void 0;
      }
      if (cached !== void 0) {
        hit = true;
        if (typeof this.contactStatusCache.ttl === "function") {
          try {
            this.contactStatusCache.ttl(variant, CONTACT_STATUS_TTL_SECONDS);
          } catch {
          }
        }
        this.recordCacheMetric("wa.cache.status.hit");
        return cached;
      }
    }
    if (!hit) {
      this.recordCacheMetric("wa.cache.status.miss");
    }
    return void 0;
  }
  cacheContactMetadata(keys, payload, ttl = CONTACT_METADATA_TTL_SECONDS) {
    if (!payload || !this.contactMetadataCache?.set) {
      return;
    }
    const variants = /* @__PURE__ */ new Set();
    const registerKey = (candidate) => {
      if (typeof candidate !== "string") {
        return;
      }
      const trimmed = candidate.trim();
      if (!trimmed.length) {
        return;
      }
      variants.add(trimmed);
      for (const variant of this.getContactKeyVariants(trimmed)) {
        variants.add(variant);
      }
    };
    (keys ?? []).forEach(registerKey);
    if (!variants.size) {
      return;
    }
    const cachePayload = {
      ...payload,
      cachedAt: Date.now()
    };
    variants.forEach((variant) => {
      try {
        this.contactMetadataCache.set(variant, cachePayload, ttl);
      } catch (error2) {
        logger.debug(
          { key: this.key, variant, error: error2?.message },
          "cacheContactMetadata error"
        );
      }
    });
    this.recordCacheMetric("wa.cache.contacts.store", {
      variants: variants.size,
      includesStatus: cachePayload.status ? 1 : 0,
      includesProfile: cachePayload.profile_pic ? 1 : 0,
      includesBusiness: cachePayload.business_profile ? 1 : 0
    });
    if (typeof cachePayload.status === "string" && cachePayload.status.length) {
      variants.forEach(
        (variant) => this.cacheContactStatus(variant, cachePayload.status)
      );
    }
    this.scheduleCachePersist("contacts-update");
  }
  deleteCachedContactMetadata(key) {
    if (!this.contactMetadataCache?.del || typeof key !== "string") {
      return;
    }
    const variants = Array.from(this.getContactKeyVariants(key));
    variants.push(key);
    try {
      this.contactMetadataCache.del(variants);
      this.recordCacheMetric("wa.cache.contacts.delete", {
        variants: variants.length
      });
    } catch (error2) {
      logger.debug(
        { key: this.key, target: key, error: error2?.message },
        "deleteCachedContactMetadata error"
      );
    }
    this.scheduleCachePersist("contacts-delete");
  }
  getCachedContactMetadata(key) {
    if (!this.contactMetadataCache?.get || typeof key !== "string") {
      return null;
    }
    const variants = Array.from(this.getContactKeyVariants(key));
    variants.unshift(key);
    let hit = false;
    for (const variant of variants) {
      try {
        const cached = this.contactMetadataCache.get(variant);
        if (cached) {
          hit = true;
          if (typeof this.contactMetadataCache.ttl === "function") {
            try {
              this.contactMetadataCache.ttl(
                variant,
                CONTACT_METADATA_TTL_SECONDS
              );
            } catch {
            }
          }
          this.recordCacheMetric("wa.cache.contacts.hit");
          return cached;
        }
      } catch {
      }
    }
    if (!hit) {
      this.recordCacheMetric("wa.cache.contacts.miss");
    }
    return null;
  }
  cacheGroupMetadata(metadata, ttl = GROUP_METADATA_TTL_SECONDS) {
    if (!metadata || typeof metadata !== "object" || !metadata.id) {
      return;
    }
    if (!this.groupMetadataCache?.set) {
      return;
    }
    const payload = {
      ...metadata,
      cachedAt: Date.now()
    };
    try {
      this.groupMetadataCache.set(metadata.id, payload, ttl);
      this.recordCacheMetric("wa.cache.groups.store", {
        hasParticipants: Array.isArray(payload.participants) ? 1 : 0
      });
    } catch (error2) {
      logger.debug(
        { key: this.key, id: metadata.id, error: error2?.message },
        "cacheGroupMetadata error"
      );
    }
    this.scheduleCachePersist("groups-update");
  }
  getCachedGroupMetadata(jid) {
    if (!this.groupMetadataCache?.get || typeof jid !== "string") {
      return null;
    }
    try {
      const cached = this.groupMetadataCache.get(jid);
      if (cached && typeof this.groupMetadataCache.ttl === "function") {
        try {
          this.groupMetadataCache.ttl(jid, GROUP_METADATA_TTL_SECONDS);
        } catch {
        }
      }
      if (cached) {
        this.recordCacheMetric("wa.cache.groups.hit");
      } else {
        this.recordCacheMetric("wa.cache.groups.miss");
      }
      return cached ?? null;
    } catch {
      this.recordCacheMetric("wa.cache.groups.miss");
      return null;
    }
  }
  async refreshGroupMetadata(jid, reason = "event") {
    const sock = this.instance?.sock;
    if (!sock || typeof sock.groupMetadata !== "function" || !jid) {
      return null;
    }
    try {
      const metadata = await sock.groupMetadata(jid);
      if (metadata) {
        this.cacheGroupMetadata({ ...metadata, refreshReason: reason });
        this.recordCacheMetric("wa.cache.groups.refresh", { success: 1 });
      } else {
        this.recordCacheMetric("wa.cache.groups.refresh", { success: 0 });
      }
      return metadata ?? null;
    } catch (error2) {
      this.recordCacheMetric("wa.cache.groups.refresh_error");
      logger.debug(
        { key: this.key, jid, reason, error: error2?.message },
        "refreshGroupMetadata error"
      );
      return null;
    }
  }
  getHelloWorld() {
    return "Hello World";
  }
  async regenerateQR() {
    this.qrTimeout = false;
    this.qrRetry = 0;
    try {
      const { delay } = await this.ensureBaileys();
      const sock = this.instance.sock;
      sock?.ev.removeAllListeners("connection.update");
      sock?.ev.removeAllListeners();
      sock?.ws.close();
      logger.debug({ key: this.key }, "regenerateQR:");
      await delay(2e3);
      await this.init();
    } catch (e) {
      logger.debug({ key: this.key }, "regenerateQR Error: " + e);
      if (!shouldSuppressConnectionIssue(e)) {
        try {
          sentryCaptureException(e);
        } catch {
        }
      }
    }
  }
  async waLogout() {
    try {
      const sock = this.instance.sock;
      sock?.logout();
    } catch (e) {
      logger.debug({ key: this.key }, "waLogout Error: " + e);
      if (!shouldSuppressConnectionIssue(e)) {
        try {
          sentryCaptureException(e);
        } catch {
        }
      }
    }
  }
  async stopAll() {
    try {
      this.qrTimeout = false;
      this.qrRetry = 0;
      await this.flushCacheSnapshots("stop-all", { force: true });
      const sock = this.instance.sock;
      sock?.ev.removeAllListeners("creds.update");
      sock?.ev.removeAllListeners("connection.update");
      sock?.ev.removeAllListeners("messages.upsert");
      sock?.ev.removeAllListeners();
      sock?.ws.close();
      if (this.cronTask) {
        this.cronTask.stop();
      }
    } catch (e) {
      logger.debug({ key: this.key }, "stopAll Error: " + e);
      if (!shouldSuppressConnectionIssue(e)) {
        try {
          sentryCaptureException(e);
        } catch {
        }
      }
      try {
        if (this._metricFlushInterval) {
          clearInterval(this._metricFlushInterval);
          this._metricFlushInterval = null;
        }
      } catch {
      }
    }
  }
  async init() {
    try {
      const {
        fetchLatestBaileysVersion,
        Browsers,
        makeCacheableSignalKeyStore,
        makeWASocket
      } = await this.ensureBaileys();
      await this.cleanStore();
      await this.ensureAuthStateReady();
      const instanceData = await dbUtil.getInstance({ _id: this.key });
      var usePairingCode = false;
      if (instanceData && instanceData.loginType == "paringCode") {
        logger.debug({ key: this.key }, "paringCode found");
        usePairingCode = true;
      }
      const { version, isLatest } = await fetchLatestBaileysVersion();
      logger.debug(
        { key: this.key, version, isLatest },
        "Fetched Baileys version"
      );
      if (this.authState.state) {
        logger.debug({ key: this.key }, "AuthState state found");
      } else {
        logger.debug({ key: this.key }, "AuthState state not found");
      }
      this.socketConfig.mobile = this.useMobile == true ? true : null;
      this.socketConfig.version = version;
      this.socketConfig.browser = Browsers.windows("Chrome");
      this.socketConfig.auth = {
        creds: this.authState.state.creds,
        keys: makeCacheableSignalKeyStore(
          this.authState.state.keys,
          signalStoreLogger
        )
      };
      const proxyUrl = instanceData?.proxy || "";
      const { valid, protocol: protocol2 } = isValidProxyUrl(proxyUrl);
      logger.debug({ key: this.key }, "Proxy: isValid: " + valid);
      logger.debug({ key: this.key }, "Proxy: protocol: " + protocol2);
      const agent = valid ? protocol2 === "socks5" ? new import_socks_proxy_agent.SocksProxyAgent(proxyUrl) : new import_https_proxy_agent.HttpsProxyAgent(proxyUrl) : null;
      logger.debug({ key: this.key }, "Proxy: agent: " + agent);
      this.socketConfig.agent = agent;
      this.instance.sock = makeWASocket(this.socketConfig);
      this.resetContactStoreCache();
      await this.initQueue();
      try {
        if (!this._metricFlushInterval) {
          this._metricFlushInterval = setInterval(() => {
            try {
              this.flushMetrics();
            } catch {
            }
          }, 60 * 1e3);
        }
      } catch {
      }
      const isRegistered = this.instance.sock.authState.creds.registered;
      logger.debug({ key: this.key }, "usePairingCode:" + usePairingCode);
      logger.debug({ key: this.key }, "isRegistered:" + isRegistered);
      if (usePairingCode && !isRegistered) {
        return this;
      }
      this.setHandler();
      return this;
    } catch (error2) {
      logger.error({ key: this.key, error: error2 }, "Failed to initialize instance");
      try {
        sentryAddBreadcrumb(
          "wa.instance.init",
          String(error2?.message),
          {},
          SentryLevels.Error
        );
        sentryCaptureException(error2);
      } catch {
      }
      return null;
    }
  }
  async initQueue() {
    logger.debug({ key: this.key }, "initQueue Started");
    const { getDevice } = await this.ensureBaileys();
    this.queue = await EmbeddedQueue.Queue.createQueue({ inMemoryOnly: false });
    this.queue.process(
      "instanceMessage",
      async (job) => {
        try {
          const {
            message: msg,
            setting,
            instanceId,
            name,
            msgBody,
            number,
            targetJid
          } = job.data;
          const trimmedMsgBody = msgBody.trim();
          const instance = await WhatsAppInstances[instanceId];
          const instanceNumber = instance.number;
          let messageSource = "unknown";
          try {
            const derivedSource = getDevice?.(msg.key.id);
            if (derivedSource) {
              messageSource = String(derivedSource).toLowerCase();
            }
          } catch {
            messageSource = "unknown";
          }
          logger.debug({ key: instance.key }, `Instance Id: ${instanceId}`);
          logger.debug({ key: instance.key }, `From: ${name}`);
          logger.debug({ key: instance.key }, `Number: ${number}`);
          logger.debug({ key: instance.key }, `To: ${targetJid}`);
          logger.debug(
            { key: instance.key },
            `Message remoteJid: ${msg.key.remoteJid}`
          );
          logger.debug(
            { key: instance.key },
            `Message body: ${trimmedMsgBody}`
          );
          try {
            instance?.touchChatBotConversationState?.(
              number,
              { lastDeviceSource: messageSource },
              { skipSummarySchedule: true }
            );
          } catch (stateError) {
            logger.debug(
              { key: instance.key, err: stateError?.message },
              "Failed to store device source in conversation state"
            );
          }
          let ar = null, unsubscribe = null, isWM = false;
          if (setting?.sending?.configuration?.autoRead ?? true) {
            const instanceData = await dbUtil.getInstance({ _id: instanceId });
            if (instanceData?.autoRead) {
              await instance.readMessages([msg.key]);
            }
          }
          if (setting?.sending?.unsubscribe?.enable && setting?.sending?.unsubscribe?.keyword === trimmedMsgBody) {
            unsubscribe = await db_default.unsubscribes.findOne({ number });
            if (!unsubscribe) {
              unsubscribe = await db_default.unsubscribes.insert({
                name,
                number,
                instanceId,
                instanceNumber
              });
            }
            const template = await dbUtil.getTemplate({
              _id: setting?.sending?.unsubscribe?.templateId
            });
            if (template) {
              const result = await instance.sendTemplateMessage({
                template,
                to: targetJid,
                data: {
                  name,
                  number
                }
              });
            }
          } else {
            unsubscribe = await db_default.unsubscribes.findOne({ number });
          }
          if (!unsubscribe) {
            ar = await db_default.autoReplies.findOne({
              $or: [{ instances: "all" }, { instances: instanceId }],
              keyword: trimmedMsgBody
            });
            if (!ar) {
              const last7Days = (0, import_moment2.default)().utc().subtract(
                setting?.sending?.welcomeMessage?.duration ?? 7,
                "days"
              ).toDate();
              const prevMessage = await db_default.messages.findOne({
                number,
                $or: [{ instanceId: "all" }, { instanceId }],
                createdAt: { $gte: last7Days }
              });
              const prevMessage2 = await db_default.receivedMessages.findOne({
                number,
                $or: [{ instanceId: "all" }, { instanceId }],
                createdAt: { $gte: last7Days }
              });
              if (!prevMessage && !prevMessage2 && (setting?.sending?.welcomeMessage?.enable ?? true)) {
                ar = await db_default.autoReplies.findOne({
                  $or: [{ instances: "all" }, { instances: instanceId }],
                  keyword: "bs-welcome"
                });
                isWM = true;
              }
            }
            if (ar && (ar.enable ?? true) && (setting?.sending?.configuration?.autoReply ?? true)) {
              logger.debug(
                { key: instance.key },
                "Auto Reply Found: " + ar._id
              );
              const message = ar.message || "";
              let status = 0, msgResult;
              const m = await db_default.messages.insert({
                instanceId,
                instanceNumber,
                keyword: trimmedMsgBody,
                message: fixMessage(message, { name, number }),
                number,
                type: ar.type,
                buttons: ar.buttons,
                menus: ar.menus,
                menuTitle: ar.menuTitle,
                menuMiddle: ar.menuMiddle,
                footer: ar.footer ?? "",
                mediaType: ar.mediaType ?? "gallery",
                media: ar.media ?? [],
                mediaUrls: ar.mediaUrls ?? [],
                messageType: isWM ? "welcome" : "auto-reply",
                status: 0
              });
              const mediaList = (m.mediaType ?? "gallery") === "gallery" ? m.media ?? [] : m.mediaUrls ?? [];
              logger.debug(
                { key: instance.key },
                "SEND MEDIA: " + mediaList.length
              );
              if (setting?.sending?.configuration?.sendMedia === "before" && [1, 3, 5, 7].includes(m.type)) {
                await asyncForEach(mediaList, async (media, _idx) => {
                  const mediaObj = media.path ? media : { path: media, caption: null };
                  await instance.sendMediaFile(targetJid, mediaObj, {
                    name,
                    number
                  });
                });
                status = 1;
              }
              if ([0, 1].includes(ar.type)) {
                logger.debug({ key: instance.key }, "SEND TEXT");
                if (!isEmpty(message)) {
                  const result = await instance.sendTextMessage(
                    targetJid,
                    message,
                    { name, number }
                  );
                  status = result ? 1 : 2;
                }
              } else if ([2, 3].includes(ar.type)) {
                logger.debug({ key: instance.key }, "SEND BUTTONS");
                const btnData = {
                  text: message,
                  buttons: ar.buttons,
                  footerText: ar.footer
                };
                const result = await instance.sendButtonMessage(
                  targetJid,
                  btnData,
                  { name, number }
                );
                status = result ? 1 : 2;
              } else if ([4, 5].includes(ar.type)) {
                logger.debug({ key: instance.key }, "SEND MENU");
                const menuList = (ar.menus || []).map(
                  (menuItem, i2) => menuItem && {
                    title: menuItem.title ?? "",
                    description: menuItem.description ?? "",
                    rowId: "menu-" + i2
                  }
                ).filter(Boolean);
                const listData = {
                  title: ar.menuTitle ?? "",
                  description: message ?? "",
                  footer: ar.footer ?? "",
                  buttonText: ar.buttonText ?? "",
                  sections: [{ title: ar.menuMiddle, rows: menuList }],
                  listType: 0
                };
                const result = await instance.sendListMessage(
                  targetJid,
                  listData,
                  { name, number }
                );
                status = result ? 1 : 2;
              } else if ([6, 7].includes(ar.type)) {
                if (!isEmpty(message)) {
                  await instance.sendTextMessage(targetJid, message, {
                    name,
                    number
                  });
                }
                const pollMessage = {
                  name: ar.poll.question,
                  values: ar.poll.options,
                  selectableCount: ar.poll.multiSelect === true ? 0 : 1
                };
                const result = await instance.sendPollMessage(
                  targetJid,
                  pollMessage,
                  { name, number }
                );
                status = result ? 1 : 2;
                msgResult = result?.pollResult ?? {};
              }
              if (setting?.sending?.configuration.sendMedia === "after" && [1, 3, 5, 7].includes(m.type)) {
                await asyncForEach(mediaList, async (media, _idx) => {
                  const mediaObj = media.path ? media : { path: media, caption: null };
                  await instance.sendMediaFile(targetJid, mediaObj, {
                    name,
                    number
                  });
                });
                status = 1;
              }
              await db_default.messages.update(
                { _id: m._id },
                {
                  $set: {
                    status,
                    instanceNumber,
                    sentAt: /* @__PURE__ */ new Date(),
                    response: msgResult
                  }
                },
                { multi: false }
              );
              try {
                if (status === 1) {
                  instance.incrementMetric("wa.replies", 1);
                }
              } catch {
              }
            } else {
              logger.debug(
                { key: instance.key },
                "Auto Reply Not Found: " + trimmedMsgBody
              );
              try {
                await instance.scheduleChatBotReply({
                  contact: {
                    id: targetJid,
                    name,
                    number,
                    lastDeviceSource: messageSource
                  },
                  msgBody
                });
              } catch (chatErr) {
                logger.debug(
                  { key: instance.key, err: chatErr?.message },
                  "ChatBot auto-reply scheduling failed"
                );
                try {
                  sentryAddBreadcrumb(
                    "wa.chatbot",
                    String(chatErr?.message),
                    {},
                    SentryLevels.Error
                  );
                  sentryCaptureException(chatErr);
                } catch {
                }
              }
            }
          } else {
            logger.debug(
              { key: instance.key },
              `${number} is from unsubscribe list`
            );
            return {
              status: false,
              message: `${number} is from unsubscribe list`
            };
          }
          const rm = await db_default.receivedMessages.insert({
            instanceId,
            instanceNumber,
            message: trimmedMsgBody,
            number,
            name,
            source: messageSource
          });
          if (rm) {
            if (setting?.sending?.configuration?.showNotification ?? true) {
              sendNotification({
                type: "info",
                message: `${number} (${name})`,
                description: trimmedMsgBody
              });
            }
          }
          return { status: true, message: "Message successfully sent" };
        } catch (e) {
          logger.debug({ key: this.key }, "Send Message Job Error: " + e);
          try {
            sentryAddBreadcrumb(
              "queue.job",
              String(e?.message),
              {},
              SentryLevels.Error
            );
            sentryCaptureException(e);
          } catch {
          }
          return { status: false, message: e.message };
        }
      },
      100
    );
    this.queue.on(EmbeddedQueue.Event.Failure, (job) => {
      const payloadKeys = job?.data ? Object.keys(job.data) : [];
      logger.error(
        {
          key: this.key,
          jobId: job?.id,
          reason: job?.failedReason,
          payloadKeys
        },
        "Queue job failed"
      );
      try {
        try {
          this.incrementMetric("wa.message.error", 1, {
            jobId: job.id,
            reason: job.failedReason
          });
        } catch {
        }
        sentryAddBreadcrumb("queue.failure", `Job Failed ID:${job.id}`, {
          reason: job.failedReason
        });
      } catch {
      }
    });
    this.queue.on(EmbeddedQueue.Event.Error, (job, error2) => {
      logger.error(
        {
          key: this.key,
          jobId: job?.id ?? null,
          error: error2 instanceof Error ? error2.message : String(error2 ?? "")
        },
        "Queue error encountered"
      );
      try {
        try {
          this.incrementMetric("wa.message.error", 1, {
            jobId: job?.id,
            message: String(error2?.message ?? error2)
          });
        } catch {
        }
        sentryAddBreadcrumb(
          "queue.error",
          String(error2?.message ?? error2),
          {},
          SentryLevels.Error
        );
        sentryCaptureException(error2);
      } catch {
      }
    });
    this.queue.on(EmbeddedQueue.Event.Complete, (job, result) => {
      logger.info(
        {
          key: this.key,
          jobId: job?.id,
          hasResult: Boolean(result),
          resultType: typeof result
        },
        "Queue job completed"
      );
    });
  }
  getSessionPathInfo() {
    if (this.isMultiFileAuth) {
      return {
        sessionEntry: import_node_path4.default.join(sessionPath, this.key),
        backupEntry: import_node_path4.default.join(sessionPath, `${this.key}-backup`),
        isDirectory: true
      };
    }
    return {
      sessionEntry: import_node_path4.default.join(sessionPath, `${this.key}.json`),
      backupEntry: import_node_path4.default.join(sessionPath, `${this.key}-backup.json`),
      isDirectory: false
    };
  }
  async removeSessions() {
    try {
      const { sessionEntry, backupEntry } = this.getSessionPathInfo();
      for (const pathToDelete of [sessionEntry, backupEntry]) {
        if (checkFileOrDirExists(pathToDelete)) {
          deleteFileOrDir(pathToDelete);
        }
      }
    } catch (e) {
      logger.debug({ key: this.key }, "Session File Delete Error: " + e);
    }
  }
  async backupSession() {
    const instanceId = this.key;
    try {
      logger.debug(
        { key: this.key },
        "backupSession: isMultiFileAuth:" + this.isMultiFileAuth
      );
      const filePath = this.isMultiFileAuth ? import_node_path4.default.join(sessionPath, instanceId) : import_node_path4.default.join(sessionPath, `${instanceId}.json`);
      const backupFilePath = this.isMultiFileAuth ? import_node_path4.default.join(sessionPath, `${instanceId}-backup`) : import_node_path4.default.join(sessionPath, `${instanceId}-backup.json`);
      if (this.isMultiFileAuth) {
        if (!checkFileOrDirExists(backupFilePath)) {
          createDir(backupFilePath);
        }
        copyFileOrDir(filePath, backupFilePath);
        return true;
      }
      const sessionData = await readFileData(filePath, "utf-8");
      if (sessionData && validateJSON(sessionData)) {
        await writeFileData(backupFilePath, sessionData);
        return true;
      }
      if (checkFileOrDirExists(backupFilePath)) {
        const backupSessionData = await readFileData(backupFilePath, "utf-8");
        await writeFileData(filePath, backupSessionData);
        return true;
      }
      deleteFileOrDir(filePath);
      return false;
    } catch (e) {
      logger.debug({ key: this.key }, "backupSession Error: " + e);
      return false;
    }
  }
  async restoreSessionSnapshotFromBackup(reason = "auto") {
    const { sessionEntry, backupEntry, isDirectory } = this.getSessionPathInfo();
    try {
      const backupExists = await import_fs_extra3.default.pathExists(backupEntry);
      if (!backupExists) {
        return false;
      }
      if (isDirectory) {
        const backupEntries = await import_fs_extra3.default.readdir(backupEntry).catch(() => []);
        if (!backupEntries.length) {
          return false;
        }
        await import_fs_extra3.default.ensureDir(sessionEntry);
        await import_fs_extra3.default.emptyDir(sessionEntry).catch(() => {
        });
        await import_fs_extra3.default.copy(backupEntry, sessionEntry, { overwrite: true });
      } else {
        await import_fs_extra3.default.ensureDir(import_node_path4.default.dirname(sessionEntry));
        await import_fs_extra3.default.copy(backupEntry, sessionEntry, { overwrite: true });
      }
      logger.debug(
        { key: this.key, reason },
        "restoreSessionSnapshotFromBackup completed"
      );
      return true;
    } catch (error2) {
      logger.debug(
        { key: this.key, reason, error: error2 },
        "restoreSessionSnapshotFromBackup error"
      );
      return false;
    }
  }
  async handleMessageDecryptFailure(error2) {
    if (this._sessionRepairInProgress) {
      logger.debug(
        { key: this.key },
        "handleMessageDecryptFailure skipped; repair in progress"
      );
      return;
    }
    this._sessionRepairInProgress = true;
    const reasonMessage = extractErrorMessage(error2) || "message-counter-error";
    try {
      logger.debug(
        { key: this.key, reason: reasonMessage },
        "handleMessageDecryptFailure triggered"
      );
      try {
        sentryAddBreadcrumb(
          "wa.session",
          "message_decrypt_failure",
          { reason: reasonMessage },
          SentryLevels.Warning
        );
      } catch {
      }
      await this.persistConnectionState("repairing", {
        status: "Repairing Session",
        message: "Recovering WhatsApp keys after decrypt failure"
      });
      await this.stopAll();
      const restored = await this.restoreSessionSnapshotFromBackup(
        "message-decrypt-auto"
      );
      if (!restored) {
        await this.removeSessions();
      }
      await sleep(1e3);
      await this.init();
    } catch (repairError) {
      logger.debug(
        { key: this.key, error: repairError?.message },
        "handleMessageDecryptFailure error"
      );
      try {
        sentryCaptureException(repairError);
      } catch {
      }
    } finally {
      this._sessionRepairInProgress = false;
    }
  }
  async setHandler() {
    logger.debug({ key: this.key }, "setHandler:");
    const { delay, DisconnectReason, fetchLatestBaileysVersion } = await this.ensureBaileys();
    this.eventLoaded = true;
    this.qrRetry = 0;
    const sock = this.instance.sock;
    this.typingState.clear();
    this.resetContactStoreCache();
    if (this.contactMetadataCache?.flushAll) {
      this.contactMetadataCache.flushAll();
    }
    if (this.contactStatusCache?.flushAll) {
      this.contactStatusCache.flushAll();
    }
    if (this.groupMetadataCache?.flushAll) {
      this.groupMetadataCache.flushAll();
    }
    sock?.ev.off?.("contacts.upsert", this._onContactsUpsert);
    sock?.ev.off?.("contacts.update", this._onContactsUpdate);
    sock?.ev.off?.("contacts.delete", this._onContactsDelete);
    sock?.ev.removeListener?.("contacts.upsert", this._onContactsUpsert);
    sock?.ev.removeListener?.("contacts.update", this._onContactsUpdate);
    sock?.ev.removeListener?.("contacts.delete", this._onContactsDelete);
    sock?.ev.off?.("groups.upsert", this._onGroupsUpsert);
    sock?.ev.off?.("groups.update", this._onGroupsUpdate);
    sock?.ev.off?.(
      "group-participants.update",
      this._onGroupParticipantsUpdate
    );
    sock?.ev.removeListener?.("groups.upsert", this._onGroupsUpsert);
    sock?.ev.removeListener?.("groups.update", this._onGroupsUpdate);
    sock?.ev.removeListener?.(
      "group-participants.update",
      this._onGroupParticipantsUpdate
    );
    sock?.ev.on("contacts.upsert", this._onContactsUpsert);
    sock?.ev.on("contacts.update", this._onContactsUpdate);
    sock?.ev.on("contacts.delete", this._onContactsDelete);
    sock?.ev.on("groups.upsert", this._onGroupsUpsert);
    sock?.ev.on("groups.update", this._onGroupsUpdate);
    sock?.ev.on("group-participants.update", this._onGroupParticipantsUpdate);
    sock?.ev.on(
      "creds.update",
      this.isMultiFileAuth ? this.authState.saveCreds : this.authState.saveState
    );
    if (this._presenceListener) {
      sock?.ev.off?.("presence.update", this._presenceListener);
      sock?.ev.removeListener?.("presence.update", this._presenceListener);
    }
    this._presenceListener = (update) => {
      this.handlePresenceUpdate(update).catch((error2) => {
        logger.debug(
          { key: this.key, err: error2?.message },
          "presence.update handler error"
        );
        try {
          sentryAddBreadcrumb(
            "wa.presence",
            String(error2?.message),
            {},
            SentryLevels.Error
          );
          sentryCaptureException(error2);
        } catch {
        }
      });
    };
    sock?.ev.on("presence.update", this._presenceListener);
    sock?.ev.on("connection.update", async (update) => {
      try {
        await this.handleConnectionUpdate(update, {
          delay,
          DisconnectReason,
          fetchLatestBaileysVersion
        });
      } catch (error2) {
        logger.debug({ key: this.key }, "connection.update Error: " + error2);
      }
    });
    sock?.ev.on("call", async (calls) => {
      try {
        const setting = await dbUtil.getSetting();
        const instanceData = await dbUtil.getInstance({ _id: this.key });
        if (instanceData?.autoRejectCalls) {
          await asyncForEach(calls, async (call) => {
            if (!call?.id || !call.from || call.status !== "offer") {
              logger.debug(
                { key: this.key },
                "call event: invalid call object"
              );
              return;
            } else {
              logger.debug(
                { key: this.key, from: call.from },
                "call event: incoming call detected"
              );
              if (setting?.sending?.autoRejectCalls?.enable ?? false) {
                await sock.rejectCall(call.id, call.from);
                try {
                  this.incrementMetric("wa.call.rejects", 1, {
                    from: call.from
                  });
                } catch {
                }
                const template = await dbUtil.getTemplate({
                  _id: setting?.sending?.autoRejectCalls?.templateId
                });
                if (template) {
                  this.sendTemplateMessage({
                    template,
                    to: call.from,
                    data: {}
                  }).then((result) => {
                  }).catch((err) => {
                    logger.debug(
                      { key: this.key, from: call.from, err: err?.message },
                      "call event: auto reject call message failed"
                    );
                  });
                }
              }
            }
          });
        } else {
          logger.debug({ key: this.key }, "call event: autoRejectCalls is OFF");
        }
      } catch (error2) {
        logger.debug({ key: this.key }, "call event Error: " + error2);
      }
    });
    this.startMessageListen();
  }
  async handleConnectionUpdate(update, helpers) {
    const { connection, lastDisconnect, qr, receivedPendingNotifications } = update || {};
    const instanceData = await dbUtil.getInstance({ _id: this.key }).catch(() => null);
    if (LOG_CONNECTION_UPDATES) {
      logger.debug(
        { key: this.key, state: connection, hasQr: Boolean(qr) },
        "connection.update"
      );
    }
    if (qr) {
      await this.processQrCodeUpdate(qr, instanceData?.name);
      return;
    }
    if (!connection) {
      return;
    }
    if (connection === "close") {
      await this.processConnectionClose({
        lastDisconnect,
        DisconnectReason: helpers.DisconnectReason,
        delay: helpers.delay
      });
      return;
    }
    if (connection === "open") {
      await this.processConnectionOpen({
        receivedPendingNotifications,
        fetchLatestBaileysVersion: helpers.fetchLatestBaileysVersion,
        delay: helpers.delay
      });
      return;
    }
    if (connection === "connecting") {
      await this.persistConnectionState("connecting", {
        status: "Connecting...",
        message: "Connecting to WhatsApp..."
      });
      try {
        this.incrementMetric("wa.connection.connecting", 1);
      } catch {
      }
      return;
    }
    await this.persistConnectionState(connection, {});
  }
  async processQrCodeUpdate(qr, instanceName) {
    this.qrRetry++;
    this.instance.qrcode.count = this.qrRetry;
    this.instance.qrcode.code = qr;
    if (this.qrRetry >= this.maxQrRetry) {
      this.qrRetry = 0;
      this.instance.qrcode.count = 0;
      const sock = this.instance.sock;
      if (!(this.isConnected || this.restart)) {
        logger.debug({ key: this.key }, "QR connection is not connected");
        sock?.ev.removeAllListeners("connection.update");
        this.qrTimeout = true;
        sock?.logout();
        await this.persistConnectionState("close", {
          status: "QR Timeout",
          message: "QR code expired. Please request a new code.",
          clearQr: true,
          clearNumber: true
        });
      } else {
        logger.debug({ key: this.key }, "QR connection is connected");
      }
      this.instance.qr = "";
      logger.debug({ key: this.key }, "socket connection terminated");
      return;
    }
    logger.debug(
      { key: this.key, attempt: this.qrRetry },
      `QR Retry: ${instanceName ?? this.name}`
    );
    try {
      const url2 = await import_qrcode.default.toDataURL(qr);
      this.instance.qr = url2;
      this.instance.qrcode.base64 = url2;
      await this.persistConnectionState("qr", {
        status: "QR",
        message: "QR Generated",
        qr: url2,
        clearNumber: true
      });
    } catch (error2) {
      logger.debug({ key: this.key }, "QR generation error: " + error2);
      await this.persistConnectionState("qr", {
        status: "QR",
        message: "QR generation failed",
        clearNumber: true
      });
    }
  }
  async processConnectionClose({ lastDisconnect, DisconnectReason, delay }) {
    const statusCode = this.extractStatusCode(lastDisconnect);
    const reasonMessage = this.extractDisconnectMessage(lastDisconnect);
    const fatalCodes = /* @__PURE__ */ new Set([
      DisconnectReason?.loggedOut,
      DisconnectReason?.forbidden,
      401,
      402,
      403,
      406
    ]);
    let shouldReconnect = !fatalCodes.has(statusCode);
    let triggerReconnect = false;
    let clearSessions = false;
    const setState = (status, message) => {
      this.status = status;
      this.message = message;
    };
    this.instance.online = false;
    this.isConnected = false;
    switch (statusCode) {
      case DisconnectReason?.badSession:
        setState("badSession", "Bad session file, delete and run again");
        shouldReconnect = true;
        triggerReconnect = true;
        break;
      case DisconnectReason?.connectionClosed:
        setState("connectionClosed", "Connection closed, reconnecting....");
        triggerReconnect = true;
        break;
      case DisconnectReason?.connectionLost:
        setState("connectionLost", "Connection lost, reconnecting....");
        triggerReconnect = true;
        break;
      case DisconnectReason?.connectionReplaced:
        setState(
          "connectionReplaced",
          "Connection Replaced, Another New Session Opened, Please Close Current Session First"
        );
        triggerReconnect = true;
        break;
      case DisconnectReason?.loggedOut:
        if (this.qrTimeout) {
          setState("QR Timeout", "Click on Show QR to connect WhatsApp");
          shouldReconnect = false;
        } else {
          setState("loggedOut", "Device Logged Out, Deleting Session.");
          if (shouldReconnect) {
            triggerReconnect = true;
          } else {
            clearSessions = true;
          }
        }
        break;
      case DisconnectReason?.restartRequired:
        setState("Connecting...", "Restart required, restarting...");
        this.restart = true;
        triggerReconnect = true;
        break;
      case DisconnectReason?.timedOut:
        setState("timedOut", "Connection timedOut, reconnecting...");
        triggerReconnect = true;
        break;
      default:
        setState("error", reasonMessage || "Unknown error");
        triggerReconnect = shouldReconnect;
    }
    await this.persistConnectionState("close", {
      status: this.status,
      message: this.message,
      reason: reasonMessage,
      reasonCode: statusCode,
      clearNumber: true,
      clearQr: true
    });
    try {
      try {
        this.incrementMetric("wa.connection.disconnect", 1, {
          reason: reasonMessage,
          reasonCode: statusCode
        });
      } catch {
      }
      try {
        sentryAddBreadcrumb("wa.connection", "connection.close", {
          instance: this.key,
          reason: reasonMessage,
          reasonCode: statusCode
        });
        sentryCaptureMetric(
          `wa.connection.disconnect - instance:${this.key} reason:${reasonMessage} code:${statusCode}`,
          {
            level: SentryLevels.Warning
          }
        );
      } catch {
      }
      this.flushMetric("wa.connection.disconnect");
    } catch {
    }
    this.instance.qr = "";
    if (clearSessions) {
      await sleep(1e3);
      await this.removeSessions();
    }
    if (triggerReconnect && shouldReconnect) {
      await delay(2e3);
      await this.init();
    }
  }
  async processConnectionOpen({
    receivedPendingNotifications,
    fetchLatestBaileysVersion,
    delay
  }) {
    const sock = this.instance.sock;
    await delay(2e3);
    if (receivedPendingNotifications && !sock?.authState?.creds?.myAppStateKeyId) {
      sock?.ev.flush();
    }
    this.qrRetry = 0;
    this.qrTimeout = false;
    this.instance.online = true;
    this.isConnected = true;
    this.restart = false;
    this.instance.qrcode = {
      count: 0,
      code: null,
      base64: null,
      pairingCode: null
    };
    const { version, isLatest } = await fetchLatestBaileysVersion();
    logger.info(
      { key: this.key },
      `Started using WA v${version.join(".")}, isLatest: ${isLatest}`
    );
    const user = typeof sock?.user === "object" ? sock.user : null;
    if (user?.id) {
      this.instance.wuid = user.id.replace(/:\d+/, "");
      this.number = user.id.split(":")[0];
    }
    await this.persistConnectionState("open", {
      status: "Ready",
      message: "Connected",
      qr: "",
      extra: {
        ownerJid: this.instance.wuid
      }
    });
    try {
      this.incrementMetric("wa.connection.connect", 1);
      this.incrementMetric("wa.connection.session", 1);
      this.flushMetric("wa.connection.connect");
      this.flushMetric("wa.connection.session");
      try {
        sentryAddBreadcrumb("wa.connection", "connection.open", {
          instance: this.key,
          wuid: this.instance.wuid,
          name: this.name,
          number: this.number
        });
      } catch {
      }
    } catch {
    }
    this.instance.qr = "";
    if (user?.id) {
      const jid = `${this.number}@s.whatsapp.net`;
      try {
        const [profileImageUrl, statusInfo] = await Promise.all([
          sock.profilePictureUrl(jid, "image").catch(() => ""),
          sock.fetchStatus(jid).catch(() => [])
        ]);
        const about = statusInfo?.[0]?.status?.status ?? "";
        this.instance.profilePictureUrl = profileImageUrl ?? null;
        await dbUtil.updateInstance(
          { _id: this.key },
          {
            number: this.number,
            ppUrl: profileImageUrl,
            profileName: user.name ?? "",
            about
          }
        );
        syncInstance();
      } catch (error2) {
        logger.debug({ key: this.key }, "Logged user status error: " + error2);
      }
    }
    this.logConnectionSuccessBanner();
    await this.backupSession();
  }
  async persistConnectionState(state, details = {}) {
    this.connectionState = {
      state,
      updatedAt: Date.now(),
      reason: details.reason ?? null,
      reasonCode: details.reasonCode ?? null
    };
    const payload = {
      connectionState: this.connectionState
    };
    const allowList = [
      "status",
      "message",
      "qr",
      "number",
      "ppUrl",
      "profileName",
      "about"
    ];
    allowList.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(details, key)) {
        payload[key] = details[key];
      }
    });
    if (details.clearNumber) {
      payload.number = "";
    }
    if (details.clearQr) {
      payload.qr = "";
    }
    if (details.extra && typeof details.extra === "object") {
      Object.assign(payload, details.extra);
    }
    await dbUtil.updateInstance({ _id: this.key }, payload);
    syncInstance();
  }
  extractStatusCode(lastDisconnect) {
    const error2 = lastDisconnect?.error;
    return error2?.output?.statusCode ?? error2?.output?.payload?.statusCode ?? error2?.statusCode ?? error2?.status ?? 0;
  }
  extractDisconnectMessage(lastDisconnect) {
    const error2 = lastDisconnect?.error;
    if (!error2) {
      return "Unknown error";
    }
    return error2?.output?.payload?.message ?? error2?.output?.payload?.error ?? error2?.message ?? error2?.toString() ?? "Unknown error";
  }
  logConnectionSuccessBanner() {
    if (!this.instance?.wuid) {
      return;
    }
    const formattedWuid = this.instance.wuid.split("@")[0].padEnd(30, " ");
    const formattedName = (this.name ?? "").padEnd(30, " ");
    logger.info(`CONNECTED TO WHATSAPP`);
    logger.info(`WUID: ${formattedWuid}`);
    logger.info(`NAME: ${formattedName}`);
  }
  async stopMessageListen() {
    try {
      const sock = this.instance.sock;
      sock?.ev.removeAllListeners("messages.upsert");
      logger.debug({ key: this.key }, "stopMessageListen done");
    } catch (e) {
      logger.debug({ key: this.key }, "stopMessageListen Error:" + e);
    }
  }
  async readMessages(msgs) {
    try {
      this.instance.sock?.readMessages(msgs);
    } catch (error2) {
      logger.debug({ key: this.key }, "readMessages Error: " + error2);
    }
  }
  async startAutoRead(lastMsg) {
    return true;
    try {
      const instanceData = await dbUtil.getInstance({ _id: this.key });
      if (instanceData.autoRead ?? false) {
        logger.debug({ key: this.key }, "startAutoRead is ON");
        var randomSleep = randomRange(500, 1e3);
        await sleep(randomSleep);
        logger.debug({ key: this.key }, "startAutoRead Sleep: " + randomSleep);
        await this.instance.sock?.chatModify(
          {
            markRead: true,
            lastMessages: [
              {
                key: lastMsg.key,
                messageTimestamp: lastMsg.messageTimestamp
              }
            ]
          },
          lastMsg.key.remoteJid
        );
        return true;
      } else {
        logger.debug({ key: this.key }, "startAutoRead is OFF");
        return false;
      }
    } catch (e) {
      logger.debug({ key: this.key }, "startAutoRead Error: " + e);
      return false;
    }
  }
  JsonToArray = function(json2) {
    var str = JSON.stringify(json2, null, 0);
    var ret = new Uint8Array(str.length);
    for (var i2 = 0; i2 < str.length; i2++) {
      ret[i2] = str.charCodeAt(i2);
    }
    return ret;
  };
  str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i2 = 0, strLen = str.length; i2 < strLen; i2++) {
      bufView[i2] = str.charCodeAt(i2);
    }
    return buf;
  }
  async enterPhoneNumber(phone) {
    logger.debug({ key: this.key }, "enterPhoneNumber start:", phone);
    return new Promise(async (resolve, _reject) => {
      return resolve({
        status: false,
        message: "This feature is not available in this version"
      });
      try {
        sentryAddBreadcrumb(
          "wa.send",
          String(error?.message ?? error),
          {},
          SentryLevels.Error
        );
        sentryCaptureException(error);
      } catch {
      }
    });
  }
  async enterOTP(_otp) {
    return new Promise(async (resolve, _reject) => {
      return resolve({
        status: false,
        message: "This feature is not available in this version"
      });
    });
  }
  async extractMessageContent(msg) {
    try {
      let msgBody = "";
      const sock = this.instance.sock;
      if (msg.message) {
        if (msg.message.buttonsResponseMessage) {
          msgBody = msg.message.buttonsResponseMessage.selectedDisplayText;
        } else if (msg.message.extendedTextMessage) {
          msgBody = msg.message.extendedTextMessage.text;
        } else if (msg.message.conversation) {
          msgBody = msg.message.conversation;
        } else if (msg.message.templateButtonReplyMessage) {
          msgBody = msg.message.templateButtonReplyMessage.selectedDisplayText;
        } else if (msg.message.listResponseMessage) {
          msgBody = msg.message.listResponseMessage.title;
        } else if (msg.message.imageMessage) {
          msgBody = {
            caption: msg.message.imageMessage.caption,
            imageUrl: msg.message.imageMessage.url,
            thumbnailUrl: Buffer.from(
              msg.message.imageMessage.jpegThumbnail
            ).toString("base64"),
            mimeType: msg.message.imageMessage.mimetype
          };
        } else if (msg.message.videoMessage) {
          msgBody = {
            caption: msg.message.videoMessage.caption,
            videoUrl: msg.message.videoMessage.url,
            mimeType: msg.message.videoMessage.mimetype
          };
        } else if (msg.message.audioMessage) {
          msgBody = {
            audioUrl: msg.message.audioMessage.url,
            mimeType: msg.message.audioMessage.mimetype
          };
        } else if (msg.message.stickerMessage) {
          msgBody = {
            stickerUrl: msg.message.stickerMessage.url,
            mimeType: msg.message.stickerMessage.mimetype
          };
        } else if (msg.message.documentMessage) {
          msgBody = {
            fileName: msg.message.documentMessage.fileName,
            mimeType: msg.message.documentMessage.mimetype,
            title: msg.message.documentMessage.title,
            pageCount: msg.message.documentMessage.pageCount,
            thumbnailUrl: msg.message.documentMessage.jpegThumbnail,
            documentUrl: msg.message.documentMessage.url
          };
        } else if (msg.message.contactMessage) {
          msgBody = {
            displayName: msg.message.contactMessage.displayName,
            vCard: msg.message.contactMessage.vCard
          };
        } else if (msg.message.locationMessage) {
          msgBody = {
            latitude: msg.message.locationMessage.degreesLatitude,
            longitude: msg.message.locationMessage.degreesLongitude,
            name: msg.message.locationMessage.name,
            address: msg.message.locationMessage.address,
            url: msg.message.locationMessage.url,
            thumbnailUrl: msg.message.locationMessage.jpegThumbnail
          };
        } else if (msg.message.liveLocationMessage) {
          msgBody = {
            latitude: msg.message.liveLocationMessage.degreesLatitude,
            longitude: msg.message.liveLocationMessage.degreesLongitude,
            name: msg.message.liveLocationMessage.name,
            address: msg.message.liveLocationMessage.address,
            url: msg.message.liveLocationMessage.url,
            thumbnailUrl: msg.message.liveLocationMessage.jpegThumbnail
          };
        } else if (msg.message.pollUpdateMessage) {
          try {
            const pollMsgId = msg.message.pollUpdateMessage.pollCreationMessageKey.id;
            const pollCreation = await dbUtil.getMessageResponse(pollMsgId);
            if (pollCreation) {
              let encKey;
              if (pollCreation.messageSecret?.data) {
                encKey = Buffer.from(pollCreation.messageSecret.data);
              } else if (pollCreation.messageSecret) {
                encKey = Buffer.from(Object.values(pollCreation.messageSecret));
              } else {
                logger.debug(
                  { key: this.key },
                  "No messageSecret found for poll"
                );
                return;
              }
              const { jidNormalizedUser: jidNormalizedUser2 } = await this.ensureBaileys();
              const pollUpdate = msg.message.pollUpdateMessage;
              const pollResult = await PollUpdateDecrypt.decrypt(
                encKey,
                pollUpdate.vote.encPayload,
                pollUpdate.vote.encIv,
                jidNormalizedUser2(sock?.user.id),
                pollMsgId,
                jidNormalizedUser2(msg.key.remoteJid)
              );
              const pollOptions = pollCreation.pollMessage?.options?.map((x) => x.optionName) || [];
              const pollAns = (await PollUpdateDecrypt.compare(pollOptions, pollResult)).map(String);
              logger.debug({ key: this.key }, "pollAns: " + pollAns);
              const cm = await dbUtil.getMessage({ "response.id": pollMsgId });
              if (cm) {
                const prevPoll = cm.response?.poll ?? [];
                const diffArr = pollAns.filter((o) => !prevPoll.includes(o));
                logger.debug({ key: this.key }, "poll diff: " + diffArr);
                if (diffArr.length > 0) {
                  msgBody = diffArr[0];
                }
              } else {
                logger.debug(
                  { key: this.key },
                  "poll message report not found"
                );
              }
              await dbUtil.updateMessagePoll(pollMsgId, {
                "response.poll": pollAns
              });
            }
          } catch (e) {
            logger.debug({ key: this.key }, "POLL ERROR: " + e);
          }
        }
      }
      return msgBody;
    } catch (error2) {
      logger.error({ key: this.key, error: error2 }, "Failed to extract message content");
      return null;
    }
  }
  async getPairingCode(phone) {
    logger.debug({ key: this.key }, "sendPairingCode: " + phone);
    return new Promise(async (resolve) => {
      try {
        const pairingCode = await this.instance.sock.requestPairingCode(
          trimPhoneNumber(phone)
        );
        logger.debug({ key: this.key }, "Pairing Code: " + pairingCode);
        if (!pairingCode) {
          resolve({
            status: false,
            message: "Failed to request pairing code. Please try again"
          });
        } else {
          resolve({
            status: true,
            code: pairingCode,
            message: "Pairing code sent successfully"
          });
          if (!this.eventLoaded) {
            setTimeout(() => {
              this.setHandler();
            }, 5e3);
          }
        }
      } catch (error2) {
        logger.error({ key: this.key, error: error2 }, "Failed to request pairing code");
        resolve({
          status: true,
          message: "Failed to request paring code. Please try again"
        });
      }
    });
  }
  async startMessageListen() {
    const { isJidBroadcast, isJidGroup } = await this.ensureBaileys();
    logger.debug({ key: this.key }, "startMessageListen start");
    const sock = this.instance.sock;
    sock?.ev.on("messages.upsert", async (m) => {
      try {
        if (m.type !== "notify") return;
        const setting = await dbUtil.getSetting();
        const instanceData = await dbUtil.getInstance({ _id: this.key });
        await asyncForEach(m.messages, async (msg, index) => {
          logger.debug(
            {
              key: this.key,
              messageId: msg?.key?.id,
              messageType: Object.keys(msg?.message ?? {})[0] ?? "unknown"
            },
            "Inbound message received"
          );
          const conversationJid = this.resolvePhoneNumberJidFromMessageKey(msg.key) || msg.key.remoteJid;
          if (!conversationJid || isJidBroadcast(conversationJid) || isJidGroup(conversationJid)) {
            logger.debug({ key: this.key }, "Skipping broadcast/group message");
            return;
          }
          const isWhatAppNumber = isValidWhatsappNumber(conversationJid);
          if (!isWhatAppNumber) {
            logger.debug(
              { key: this.key },
              "Not a valid WhatsApp number:",
              conversationJid
            );
            return;
          }
          const number = await this.getPhoneNumberFromJid(conversationJid) || trimPhoneNumber(conversationJid?.split("@")[0] || "") || conversationJid?.split("@")[0] || "";
          let name = msg.pushName ?? msg.notify ?? "";
          if (!name) {
            name = this.getCachedContactName(conversationJid) ?? "";
          }
          await dbUtil.addNumber({ number, name });
          const msgBody = await this.extractMessageContent(msg);
          const messageType = this.deriveChatBotMessageType(msg);
          await this.ensureChatBotConfigFresh();
          logger.debug({ key: this.key }, "MsgBody:", msgBody);
          const baseMetadata = {
            jid: conversationJid,
            messageId: msg.key?.id,
            messageType
          };
          if (!msg.key.fromMe) {
            await this.recordChatBotConversationMessage(number, {
              senderType: "customer",
              messageType,
              payload: {
                text: typeof msgBody === "string" ? msgBody : "",
                messageId: msg.key?.id
              },
              metadata: {
                ...baseMetadata,
                source: "customer"
              }
            });
            if (setting?.whatsHook?.enable && instanceData?.whatsHook) {
              await asyncForEach(
                setting?.whatsHook?.phoneNumbers,
                async (hookNumber) => {
                  logger.debug({ key: this.key }, "whatsHook:", hookNumber);
                  try {
                    try {
                      this.incrementMetric("wa.webhook.forward", 1, {
                        hookNumber
                      });
                      try {
                        this.incrementMetric("wa.webhook.count", 1, {
                          hookNumber
                        });
                      } catch {
                      }
                    } catch {
                    }
                    await this.sendTextMessage(
                      await this.getWhatsAppId(trimPhoneNumber(hookNumber)),
                      "*Message: \u{1F447}*"
                    );
                    await sock?.sendMessage(
                      await this.getWhatsAppId(trimPhoneNumber(hookNumber)),
                      { forward: msg }
                    );
                    await this.sendContactMessage(trimPhoneNumber(hookNumber), {
                      fullName: name,
                      organization: msg.verifiedBizName ?? "",
                      phoneNumber: number
                    });
                  } catch (err) {
                    logger.debug(
                      { key: this.key },
                      "whatsHook forward error:",
                      err
                    );
                    try {
                      this.incrementMetric("wa.webhook.errors", 1, {
                        hookNumber
                      });
                    } catch {
                    }
                  }
                }
              );
            }
            if (typeof msgBody === "string" && !isEmpty(msgBody)) {
              logger.debug({ key: this.key }, "Starting Job");
              const jobResult = await this.queue.createJob({
                type: "instanceMessage",
                data: {
                  message: msg,
                  name,
                  msgBody,
                  targetJid: conversationJid,
                  number,
                  index,
                  totalMessages: m.messages.length,
                  setting,
                  instanceId: this.key
                },
                priority: EmbeddedQueue.Priority.LOW
              });
              if (jobResult)
                logger.debug({ key: this.key }, "Job Created:", jobResult.id);
            } else {
              logger.debug({ key: this.key }, "No message body found");
            }
          } else {
            const aiEchoDetected = this.consumePendingAiEcho(number, {
              messageId: msg.key?.id,
              text: typeof msgBody === "string" ? msgBody : ""
            });
            if (aiEchoDetected) {
              logger.debug(
                { key: this.key, contactKey: number },
                "Skipping owner interception for AI echo"
              );
              return;
            }
            await this.recordChatBotConversationMessage(number, {
              senderType: "owner",
              messageType,
              payload: {
                text: typeof msgBody === "string" ? msgBody : "",
                messageId: msg.key?.id
              },
              metadata: {
                ...baseMetadata,
                source: "owner"
              }
            });
            this.applyOwnerConversationHold(number);
            await this.cancelPendingChatBotReply(number, "owner_message");
            logger.debug({ key: this.key }, "IsFromME");
          }
        });
      } catch (e) {
        logger.error({ key: this.key, error: e }, "startMessageListen error");
        if (shouldAttemptSessionRepair(e)) {
          await this.handleMessageDecryptFailure(e);
        }
      }
    });
  }
  resolvePhoneNumberJidFromMessageKey(messageKey) {
    if (!messageKey || typeof messageKey !== "object") {
      return null;
    }
    const remoteJid = typeof messageKey.remoteJid === "string" ? messageKey.remoteJid : null;
    const remoteJidAlt = typeof messageKey.remoteJidAlt === "string" ? messageKey.remoteJidAlt : null;
    const participant = typeof messageKey.participant === "string" ? messageKey.participant : null;
    const addressingMode = String(
      messageKey.addressingMode || ""
    ).toLowerCase();
    if (addressingMode === "lid") {
      return remoteJidAlt ?? remoteJid ?? participant ?? null;
    }
    if (addressingMode === "pn") {
      return remoteJid ?? remoteJidAlt ?? participant ?? null;
    }
    const candidates = [remoteJidAlt, remoteJid, participant].filter(
      (value) => typeof value === "string" && value.length
    );
    const pnCandidate = candidates.find(
      (jid) => typeof jid === "string" && jid.includes("@s.whatsapp.net")
    );
    if (pnCandidate) {
      return pnCandidate;
    }
    return candidates[0] ?? null;
  }
  getDefaultChatBotDelayConfig() {
    return {
      initialMs: CHATBOT_INITIAL_WAIT_MS,
      typingMs: CHATBOT_COMPOSING_DELAY_MS,
      leadMs: CHATBOT_LEAD_DELAY_MS
    };
  }
  normalizeChatBotDelayConfig(delayConfig = {}) {
    const defaults = this.getDefaultChatBotDelayConfig();
    const toMilliseconds = (value, fallback) => {
      const numeric = Number(value);
      if (!Number.isFinite(numeric) || numeric < 0) {
        return fallback;
      }
      return Math.round(numeric * 1e3);
    };
    if (!delayConfig || typeof delayConfig !== "object") {
      return defaults;
    }
    return {
      initialMs: toMilliseconds(delayConfig.initial, defaults.initialMs),
      typingMs: toMilliseconds(delayConfig.typing, defaults.typingMs),
      leadMs: toMilliseconds(delayConfig.lead, defaults.leadMs)
    };
  }
  applyChatBotRuntimeConfig(chatBotCfg = {}) {
    const normalizedDelays = this.normalizeChatBotDelayConfig(
      chatBotCfg.delay || {}
    );
    this.chatBotRuntimeConfig = {
      ...this.chatBotRuntimeConfig,
      enable: Boolean(chatBotCfg.enable),
      platform: chatBotCfg.platform || chatBotCfg.provider || "chatGPT",
      systemInstruction: chatBotCfg.systemInstruction || "",
      leadPhone: typeof chatBotCfg.leadPhone === "string" ? chatBotCfg.leadPhone.trim() : "",
      delays: normalizedDelays
    };
    this.typingGracePeriodMs = normalizedDelays.typingMs || TYPING_GRACE_DELAY_MS;
  }
  getActiveChatBotDelays() {
    const defaults = this.getDefaultChatBotDelayConfig();
    const delays = this.chatBotRuntimeConfig?.delays || defaults;
    return {
      initialMs: Number.isFinite(delays.initialMs) ? delays.initialMs : defaults.initialMs,
      typingMs: Number.isFinite(delays.typingMs) ? delays.typingMs : defaults.typingMs,
      leadMs: Number.isFinite(delays.leadMs) ? delays.leadMs : defaults.leadMs
    };
  }
  getFollowUpHoldDelayMs(delaysOverride = null) {
    const delays = delaysOverride || this.getActiveChatBotDelays();
    const typingMs = Math.max(0, delays?.typingMs || CHATBOT_COMPOSING_DELAY_MS);
    return typingMs;
  }
  platformSupportsStructuredOutputs(platform, providerCfg = null) {
    if (!platform) {
      return false;
    }
    const normalizedPlatform = String(platform).trim().toLowerCase();
    const configuredModel = typeof providerCfg?.model === "string" ? providerCfg.model.trim() : "";
    const fallbackModel = configuredModel || getDefaultModelForPlatform(normalizedPlatform) || null;
    return providerSupportsStructuredOutputs(
      normalizedPlatform,
      fallbackModel
    );
  }
  async ensureChatBotConfigFresh(force = false) {
    const now = Date.now();
    if (!force && now - this.chatBotRuntimeConfigLastLoadedAt < this.chatBotConfigTtlMs) {
      return this.chatBotRuntimeConfig;
    }
    try {
      const instanceData = await dbUtil.getInstance({ _id: this.key });
      this.applyChatBotRuntimeConfig(instanceData?.chatBot || {});
      this.chatBotRuntimeConfigLastLoadedAt = now;
    } catch (error2) {
      logger.debug(
        { key: this.key, err: error2?.message },
        "Failed to refresh chatbot config"
      );
      try {
        sentryCaptureException(error2);
      } catch {
      }
      this.applyChatBotRuntimeConfig({});
      this.chatBotRuntimeConfigLastLoadedAt = now;
    }
    return this.chatBotRuntimeConfig;
  }
  truncateSummaryText(value, maxLength = 320) {
    if (!value) {
      return "";
    }
    const normalized = String(value).replace(/\s+/g, " ").trim();
    if (normalized.length <= maxLength) {
      return normalized;
    }
    return `${normalized.slice(0, maxLength - 1)}\u2026`;
  }
  extractConversationText(entry) {
    if (!entry) {
      return "";
    }
    const payload = entry.payload || {};
    if (typeof payload === "string") {
      return payload;
    }
    const textCandidate = payload.message ?? payload.text ?? payload.content ?? payload.description ?? payload.title ?? "";
    return typeof textCandidate === "string" ? textCandidate : JSON.stringify(textCandidate);
  }
  mapConversationHistory(entries = []) {
    const history = [];
    for (const entry of entries) {
      if (!entry || entry.metadata?.summary) {
        continue;
      }
      if (entry.senderType === "ai" || entry.senderType === "customer") {
        const content = this.extractConversationText(entry).trim();
        if (!content) {
          continue;
        }
        history.push({
          role: entry.senderType === "ai" ? "assistant" : "user",
          content
        });
      }
    }
    return history.slice(-20);
  }
  extractConversationContext(entries = []) {
    for (const entry of entries) {
      if (entry?.metadata?.summary) {
        continue;
      }
      if (entry.senderType === "customer") {
        const text = this.extractConversationText(entry);
        if (text) {
          return this.truncateSummaryText(text, 200);
        }
      }
    }
    return "";
  }
  extractCustomerIntent(entries = []) {
    const customerEntries = entries.map((entry, index) => ({ entry, index })).filter(
      ({ entry }) => entry && !entry?.metadata?.summary && entry.senderType === "customer"
    ).map(({ entry, index }) => {
      const text = this.extractConversationText(entry).trim();
      return text ? { text, index } : null;
    }).filter(Boolean);
    if (!customerEntries.length) {
      return "";
    }
    const highlightCandidates = [];
    const seenTexts = /* @__PURE__ */ new Set();
    for (const candidate of customerEntries) {
      const lowered = candidate.text.toLowerCase();
      const hasKeyword = CHATBOT_INTENT_KEYWORDS.some(
        (keyword) => lowered.includes(keyword)
      );
      const isDetailed = candidate.text.length >= 40;
      if (hasKeyword || isDetailed) {
        if (!seenTexts.has(lowered)) {
          highlightCandidates.push(candidate);
          seenTexts.add(lowered);
        }
      }
    }
    const earliestHighlight = highlightCandidates[0]?.text;
    const latestHighlight = highlightCandidates[highlightCandidates.length - 1]?.text;
    if (earliestHighlight && latestHighlight && earliestHighlight !== latestHighlight) {
      return this.truncateSummaryText(
        `${earliestHighlight} \u2022 Latest: ${latestHighlight}`,
        200
      );
    }
    if (earliestHighlight) {
      return this.truncateSummaryText(earliestHighlight, 200);
    }
    const keywordFallback = customerEntries.slice().reverse().find(
      ({ text }) => CHATBOT_INTENT_KEYWORDS.some(
        (keyword) => text.toLowerCase().includes(keyword)
      )
    );
    if (keywordFallback) {
      return this.truncateSummaryText(keywordFallback.text, 200);
    }
    const earliest = customerEntries[0]?.text || "";
    const latest = customerEntries[customerEntries.length - 1]?.text || "";
    if (earliest && latest && earliest !== latest) {
      return this.truncateSummaryText(`${earliest} \u2022 Latest: ${latest}`, 200);
    }
    return this.truncateSummaryText(latest || earliest || "", 200);
  }
  analyzeConversationSentiment(entries = []) {
    const texts = entries.filter(
      (entry) => entry.senderType === "customer" && !entry?.metadata?.summary
    ).map(
      (entry) => (this.extractConversationText(entry) || "").toLowerCase()
    );
    let score = 0;
    for (const text of texts) {
      if (!text) {
        continue;
      }
      for (const keyword of CHATBOT_SENTIMENT_KEYWORDS.positive) {
        if (text.includes(keyword)) {
          score += 1;
        }
      }
      for (const keyword of CHATBOT_SENTIMENT_KEYWORDS.negative) {
        if (text.includes(keyword)) {
          score -= 1;
        }
      }
    }
    let label = "neutral";
    if (score >= 2) {
      label = "positive";
    } else if (score <= -2) {
      label = "negative";
    }
    return { label, score };
  }
  extractPromisedFollowUps(entries = []) {
    const commitments = [];
    const followUpIndicators = [
      /follow[- ]?up/,
      /schedule/,
      /arrange/,
      /send/,
      /share/,
      /call you/,
      /reach out/,
      /will\s+(?:do|share|confirm|update)/
    ];
    for (const entry of entries) {
      if (!entry || entry.metadata?.summary) {
        continue;
      }
      if (entry.senderType !== "ai" && entry.senderType !== "owner") {
        continue;
      }
      const text = this.extractConversationText(entry);
      if (!text) {
        continue;
      }
      const lowered = text.toLowerCase();
      if (followUpIndicators.some((pattern) => pattern.test(lowered))) {
        commitments.push(this.truncateSummaryText(text, 200));
      }
    }
    return commitments.slice(-3);
  }
  extractUnresolvedQuestions(entries = []) {
    const pending = [];
    for (const entry of entries) {
      if (!entry || entry.metadata?.summary) {
        continue;
      }
      if (entry.senderType === "customer") {
        const text = this.extractConversationText(entry);
        if (text && text.includes("?")) {
          pending.push({
            text,
            timestamp: entry.timestamp || Date.now()
          });
        }
      } else if (pending.length && (entry.senderType === "ai" || entry.senderType === "owner")) {
        pending.pop();
      }
    }
    return pending.slice(-3).map((item) => this.truncateSummaryText(item.text, 200));
  }
  recommendNextOwnerAction({
    unresolvedQuestions = [],
    followUps = [],
    sentiment = { label: "neutral" }
  }) {
    if (Array.isArray(unresolvedQuestions) && unresolvedQuestions.length) {
      return `Answer outstanding question(s): ${unresolvedQuestions.join(
        "; "
      )}`;
    }
    if (Array.isArray(followUps) && followUps.length) {
      return `Confirm progress on: ${followUps[followUps.length - 1]}`;
    }
    if (sentiment.label === "negative") {
      return "Reach out quickly to improve the customer experience.";
    }
    return "Send a friendly check-in to confirm everything is resolved.";
  }
  buildStructuredConversationSummary(contactKey, entries = []) {
    if (!entries.length) {
      return null;
    }
    const conversationEntries = entries.filter(
      (entry) => !entry?.metadata?.summary
    );
    if (!conversationEntries.length) {
      return null;
    }
    const contextLine = this.extractConversationContext(conversationEntries);
    const intentLine = this.extractCustomerIntent(conversationEntries);
    const sentiment = this.analyzeConversationSentiment(conversationEntries);
    const followUps = this.extractPromisedFollowUps(conversationEntries);
    const unresolvedQuestions = this.extractUnresolvedQuestions(conversationEntries);
    const recommendedNextAction = this.recommendNextOwnerAction({
      unresolvedQuestions,
      followUps,
      sentiment
    });
    const analysis = {
      context: contextLine || "",
      customerIntent: intentLine || "",
      sentiment,
      promisedFollowUps: followUps,
      unresolvedQuestions,
      recommendedNextAction
    };
    const summaryLines = [
      `Summary for ${contactKey}`,
      `Context: ${analysis.context || "Not captured"}`,
      `Customer intent: ${analysis.customerIntent || "Not captured"}`,
      `Sentiment: ${sentiment.label} (score ${sentiment.score})`,
      `Promised follow-ups: ${analysis.promisedFollowUps.length ? analysis.promisedFollowUps.join("; ") : "None"}`,
      `Unresolved questions: ${analysis.unresolvedQuestions.length ? analysis.unresolvedQuestions.join("; ") : "None"}`,
      `Recommended next action: ${analysis.recommendedNextAction || "Send a friendly check-in."}`
    ];
    return {
      text: summaryLines.join("\n"),
      analysis
    };
  }
  buildLeadSummaryTranscript(entries = [], limit = CHATBOT_SUMMARY_HISTORY_LIMIT) {
    const usableEntries = entries.filter((entry) => entry && !entry?.metadata?.summary).slice(-limit);
    const lines = [];
    for (const entry of usableEntries) {
      const text = this.extractConversationText(entry).trim();
      if (!text) {
        continue;
      }
      const timestampValue = Number(entry.timestamp);
      const timestamp = Number.isFinite(timestampValue) ? new Date(timestampValue).toISOString() : null;
      let senderLabel = "Participant";
      if (entry.senderType === "customer") {
        senderLabel = "Customer";
      } else if (entry.senderType === "owner") {
        senderLabel = "Owner";
      } else if (entry.senderType === "ai") {
        senderLabel = "AI";
      }
      lines.push(
        `${timestamp ? `[${timestamp}] ` : ""}${senderLabel}: ${text}`
      );
    }
    return lines.join("\n");
  }
  buildLeadSummaryInstruction(summaryContext = {}) {
    const displayName = summaryContext.displayName || "the customer";
    const phoneNumber = summaryContext.phoneNumber || "unknown";
    const numberPart = phoneNumber ? ` (${phoneNumber})` : "";
    const accountTypeLabel = summaryContext.accountTypeLabel || "Personal";
    const profilePhotoText = summaryContext.profilePhotoText || "Unavailable";
    const businessSummary = summaryContext.businessSummary || (accountTypeLabel === "Business" ? "Business profile present without publicly shared details." : "Personal account (no public business profile).");
    const deviceLabel = summaryContext.deviceLabel || "an unknown device";
    const rawDeviceSource = summaryContext.rawDeviceSource || "unknown";
    const deviceDetail = rawDeviceSource ? `${deviceLabel} (reported as ${rawDeviceSource})` : deviceLabel;
    return `You are an expert sales enablement assistant who produces concise WhatsApp-ready internal lead briefs.

Mandatory formatting:
\u2022 Output plain text only. No bullets, emojis, quotes, symbols, or markdown.
\u2022 Always write every section in the primary language used within the conversation transcript; never switch to English unless the chat was English.
\u2022 Use these EXACT section headers and order:
  Lead Summary for ${displayName}${numberPart}
  Customer Details:
  Context:
  Intent:
  Sentiment:
  Follow-up commitments:
  Open details:
  Next sales action:
\u2022 \u201CCustomer Details\u201D must be a single sentence that lists: Name ${displayName}; Phone ${phoneNumber}; WhatsApp account type ${accountTypeLabel}; Device source ${deviceDetail}; Profile photo URL ${profilePhotoText}; Business info ${businessSummary}. Translate only the connective words\u2014copy the factual values exactly.
\u2022 \u201CIntent\u201D must summarize the customer\u2019s business objective clearly, including the requested product or service and immediate expectation (10\u201325 words).
\u2022 Each section must be exactly one commercially relevant sentence (max 25 words).
\u2022 Sentiment must be positive, neutral, or negative with a short business justification.
\u2022 Do not copy or echo bot messages, marketing lines, emojis, or filler dialogue from the transcript.
\u2022 Combine follow-ups into one clear business commitment, not multiple chat snippets.
\u2022 \u201COpen details\u201D must identify missing information needed to advance the opportunity.
\u2022 \u201CNext sales action\u201D must be a direct instruction to sales.
\u2022 Base every statement strictly on transcript evidence \u2014 do not invent anything.
\u2022 Do not include greetings, closing lines, disclaimers, or meta commentary.`;
  }
  getAiPayloadDisplayText(payload = {}) {
    if (!payload || typeof payload !== "object") {
      return "";
    }
    switch (payload.type) {
      case "text":
        return this.coerceAiString(payload.message);
      case "buttons":
        return this.coerceAiString(payload.text);
      case "list":
        return this.coerceAiString(payload.description) || this.coerceAiString(payload.title);
      case "poll":
        return this.coerceAiString(payload.question);
      default:
        return "";
    }
  }
  rememberLastAiMessage(contactKey, { messageId, text, messageType } = {}) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    this.chatBotLastAiEchoes.set(key, {
      messageId: messageId || null,
      text: typeof text === "string" ? text.trim() : "",
      messageType: messageType || "text",
      recordedAt: Date.now()
    });
  }
  consumePendingAiEcho(contactKey, { messageId, text } = {}) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return false;
    }
    const entry = this.chatBotLastAiEchoes.get(key);
    if (!entry) {
      return false;
    }
    const now = Date.now();
    if (now - entry.recordedAt > CHATBOT_AI_ECHO_TTL_MS) {
      this.chatBotLastAiEchoes.delete(key);
      return false;
    }
    const normalizedText = typeof text === "string" ? text.trim() : "";
    const matchById = messageId && entry.messageId && messageId === entry.messageId;
    const matchByText = normalizedText && entry.text && normalizedText === entry.text && now - entry.recordedAt <= CHATBOT_AI_ECHO_TEXT_WINDOW_MS;
    if (matchById || matchByText) {
      this.chatBotLastAiEchoes.delete(key);
      return true;
    }
    return false;
  }
  async generateLeadSummaryPayload({
    contactKey,
    conversationEntries = [],
    providerConfig,
    platform,
    customerContext = {},
    callPhone,
    chatPhoneDigits,
    analysis
  }) {
    if (!providerConfig?.enable || !providerConfig?.apiKey || !Array.isArray(conversationEntries) || !conversationEntries.length) {
      return null;
    }
    const transcript = this.buildLeadSummaryTranscript(conversationEntries);
    if (!transcript) {
      return null;
    }
    const summaryContext = {
      displayName: customerContext.displayName || customerContext.name || "the customer",
      phoneNumber: customerContext.phoneNumber || contactKey,
      accountTypeLabel: customerContext.accountTypeLabel || (customerContext.accountType === "business" ? "Business" : "Personal"),
      businessSummary: customerContext.businessSummary || (customerContext.accountType === "business" ? "Business profile present without publicly shared details." : "Personal account (no public business profile)."),
      deviceLabel: customerContext.deviceLabel || "an unknown device",
      rawDeviceSource: customerContext.rawDeviceSource || "unknown",
      profilePhotoText: customerContext.profilePhotoText || "Unavailable"
    };
    const systemInstruction = this.buildLeadSummaryPayloadInstruction({
      summaryContext,
      analysis,
      callPhone,
      chatPhoneDigits
    });
    const analysisSection = JSON.stringify(
      {
        context: analysis?.context || "Not captured",
        intent: analysis?.customerIntent || "Not captured",
        sentiment: analysis?.sentiment || { label: "neutral", score: 0 },
        followUps: analysis?.promisedFollowUps || [],
        unresolvedQuestions: analysis?.unresolvedQuestions || [],
        nextAction: analysis?.recommendedNextAction || "Send a friendly follow-up."
      },
      null,
      2
    );
    const userMessage = `Conversation transcript (chronological, latest last):
${transcript}

Structured analysis hints:
${analysisSection}

Remember: produce a single JSON object for a WhatsApp BUTTON message following the system rules.`;
    const aiRequestStartedAt = Date.now();
    try {
      const schemaContract = getChatBotSchemaForPlatform(platform);
      const aiResponse = await generateAIResponse({
        platform,
        integrationConfig: providerConfig,
        systemInstruction,
        userMessage,
        conversationHistory: [],
        logger,
        enforceJsonResponse: true,
        jsonSchema: schemaContract
      });
      logger.debug(
        {
          key: this.key,
          contactKey,
          aiDurationMs: Date.now() - aiRequestStartedAt
        },
        "Lead summary payload AI provider responded"
      );
      const normalized = this.normalizeAiResponsePayload(aiResponse);
      if (!normalized) {
        return null;
      }
      const validated = validateChatBotPayloadShape(normalized, logger);
      if (!validated) {
        return null;
      }
      if (validated.type !== "buttons") {
        logger.debug(
          { key: this.key, contactKey, payloadType: validated.type },
          "Lead summary AI payload not buttons"
        );
        return null;
      }
      return validated;
    } catch (error2) {
      logger.debug(
        {
          key: this.key,
          contactKey,
          aiDurationMs: Date.now() - aiRequestStartedAt,
          err: error2?.message
        },
        "Lead summary AI payload request failed"
      );
      logger.error(
        { key: this.key, contactKey, err: error2?.message },
        "AI lead summary payload generation failed"
      );
      return null;
    }
  }
  normalizePhoneNumberForCall(number) {
    if (!number) {
      return "";
    }
    const raw = String(number).trim();
    if (!raw) {
      return "";
    }
    const digits = raw.replace(/\D/g, "");
    if (!digits) {
      return raw;
    }
    return raw.startsWith("+") ? `+${digits}` : `+${digits}`;
  }
  buildCustomerChatUrl(number) {
    if (!number) {
      return "https://wa.me/";
    }
    const raw = String(number).trim();
    const digits = raw.replace(/\D/g, "");
    if (digits) {
      return `https://wa.me/${digits}`;
    }
    const sanitized = raw.replace(/^\+/, "");
    return sanitized ? `https://wa.me/${encodeURIComponent(sanitized)}` : "https://wa.me/";
  }
  buildConversationSummaryText(contactKey, entries = []) {
    const summary = this.buildStructuredConversationSummary(
      contactKey,
      entries
    );
    return summary?.text || "";
  }
  async recordChatBotConversationMessage(contactKey, entry = {}, { skipSummarySchedule = false } = {}) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return null;
    }
    await this.ensureChatBotConfigFresh();
    try {
      const doc = await dbUtil.appendChatBotConversationEntry({
        instanceKey: this.key,
        contactKey: key,
        senderType: entry.senderType,
        messageType: entry.messageType || "text",
        payload: entry.payload ?? null,
        metadata: entry.metadata ?? {},
        timestamp: entry.timestamp || Date.now()
      });
      this.touchChatBotConversationState(
        key,
        {
          lastSenderType: entry.senderType,
          lastMessageType: entry.messageType,
          timestamp: entry.timestamp || Date.now(),
          lastSummaryAt: entry.metadata?.summary ? Date.now() : void 0
        },
        { skipSummarySchedule }
      );
      return doc;
    } catch (error2) {
      logger.debug(
        { key: this.key, contactKey: key, err: error2?.message },
        "Failed to append chatbot conversation entry"
      );
      try {
        sentryCaptureException(error2);
      } catch {
      }
    }
    return null;
  }
  touchChatBotConversationState(contactKey, context = {}, { skipSummarySchedule = false } = {}) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    const now = context.timestamp || Date.now();
    const previous = this.chatBotConversationState.get(key) || {};
    const previousEpoch = Number.isFinite(previous.leadSummaryEpoch) ? previous.leadSummaryEpoch : 0;
    const shouldScheduleSummary = !skipSummarySchedule;
    const nextEpoch = shouldScheduleSummary ? previousEpoch + 1 : previousEpoch;
    const next = {
      ...previous,
      lastActivityAt: now,
      lastSenderType: context.lastSenderType || previous.lastSenderType,
      lastMessageType: context.lastMessageType || previous.lastMessageType,
      lastSummaryAt: Number.isFinite(context.lastSummaryAt) ? context.lastSummaryAt : previous.lastSummaryAt,
      lastSummaryForMessageAt: Number.isFinite(context.lastSummaryForMessageAt) ? context.lastSummaryForMessageAt : previous.lastSummaryForMessageAt,
      lastDeviceSource: Object.prototype.hasOwnProperty.call(
        context,
        "lastDeviceSource"
      ) ? context.lastDeviceSource : previous.lastDeviceSource,
      leadSummaryEpoch: nextEpoch
    };
    this.chatBotConversationState.set(key, next);
    if (shouldScheduleSummary) {
      this.scheduleLeadSummaryCountdown(key, nextEpoch);
    }
  }
  scheduleLeadSummaryCountdown(contactKey, epochOverride = null) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    const delays = this.getActiveChatBotDelays();
    const leadDelay = delays.leadMs;
    if (!this.chatBotRuntimeConfig.enable || !leadDelay) {
      return;
    }
    const existing = this.chatBotLeadSummaryTimers.get(key);
    if (existing?.timeout) {
      clearTimeout(existing.timeout);
    }
    const state = this.chatBotConversationState.get(key) || {};
    const resolvedEpoch = Number.isFinite(epochOverride) ? epochOverride : Number.isFinite(state.leadSummaryEpoch) ? state.leadSummaryEpoch : 0;
    const timeout = setTimeout(() => {
      const timerEntry = this.chatBotLeadSummaryTimers.get(key);
      if (timerEntry?.timeout === timeout) {
        this.chatBotLeadSummaryTimers.delete(key);
      }
      this.dispatchLeadSummary(key, { expectedEpoch: resolvedEpoch }).catch(
        (error2) => {
          logger.debug(
            { key: this.key, contactKey: key, err: error2?.message },
            "Lead summary dispatch failed"
          );
          try {
            sentryCaptureException(error2);
          } catch {
          }
        }
      );
    }, leadDelay);
    this.chatBotLeadSummaryTimers.set(key, {
      timeout,
      leadDelay,
      scheduledAt: Date.now(),
      epoch: resolvedEpoch
    });
    logger.debug(
      { key: this.key, contactKey: key, leadDelay, epoch: resolvedEpoch },
      "Lead summary scheduled"
    );
  }
  cancelLeadSummaryCountdown(contactKey) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    const entry = this.chatBotLeadSummaryTimers.get(key);
    if (entry?.timeout) {
      clearTimeout(entry.timeout);
    }
    if (entry) {
      this.chatBotLeadSummaryTimers.delete(key);
      logger.debug(
        { key: this.key, contactKey: key },
        "Lead summary countdown cleared"
      );
    }
  }
  markChatBotSummarySnapshot(contactKey, messageTimestamp) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    const now = Date.now();
    const previous = this.chatBotConversationState.get(key) || {};
    const next = {
      ...previous,
      lastSummaryAt: now,
      lastSummaryForMessageAt: Number.isFinite(messageTimestamp) ? messageTimestamp : previous.lastActivityAt || now
    };
    this.chatBotConversationState.set(key, next);
  }
  async dispatchLeadSummary(contactKey, { expectedEpoch = null } = {}) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    const state = this.chatBotConversationState.get(key) || {};
    const currentEpoch = Number.isFinite(state.leadSummaryEpoch) ? state.leadSummaryEpoch : 0;
    const baselineEpoch = Number.isFinite(expectedEpoch) ? expectedEpoch : currentEpoch;
    if (baselineEpoch !== currentEpoch) {
      logger.debug(
        {
          key: this.key,
          contactKey: key,
          expectedEpoch: baselineEpoch,
          currentEpoch
        },
        "Lead summary aborted before start due to newer activity"
      );
      if (!this.chatBotLeadSummaryTimers.has(key)) {
        this.scheduleLeadSummaryCountdown(key, currentEpoch);
      }
      return;
    }
    await this.ensureChatBotConfigFresh();
    const delays = this.getActiveChatBotDelays();
    const now = Date.now();
    if (state?.lastActivityAt && now - state.lastActivityAt < delays.leadMs) {
      this.scheduleLeadSummaryCountdown(key, currentEpoch);
      return;
    }
    const entries = await dbUtil.getChatBotConversationEntries(this.key, key, {
      limit: CHATBOT_SUMMARY_HISTORY_LIMIT
    }) || [];
    const conversationEntries = entries.filter(
      (entry) => !entry?.metadata?.summary
    );
    if (!conversationEntries.length) {
      return;
    }
    const lastEntryTimestamp = conversationEntries[conversationEntries.length - 1]?.timestamp;
    if (Number.isFinite(state?.lastSummaryForMessageAt) && Number.isFinite(lastEntryTimestamp) && state.lastSummaryForMessageAt >= lastEntryTimestamp) {
      logger.debug(
        { key: this.key, contactKey: key },
        "Lead summary already sent for latest conversation"
      );
      return;
    }
    const lastSummaryEntry = entries.slice().reverse().find((entry) => entry?.metadata?.summary);
    const lastSummaryCoverage = Number(
      lastSummaryEntry?.metadata?.coveredUntil ?? lastSummaryEntry?.timestamp
    );
    if (Number.isFinite(lastSummaryCoverage) && Number.isFinite(lastEntryTimestamp) && lastSummaryCoverage >= lastEntryTimestamp) {
      logger.debug(
        {
          key: this.key,
          contactKey: key,
          lastSummaryCoverage,
          lastEntryTimestamp
        },
        "Lead summary already stored for current transcript snapshot"
      );
      return;
    }
    const summaryBundle = this.buildStructuredConversationSummary(
      key,
      conversationEntries
    );
    if (!summaryBundle?.analysis) {
      logger.debug(
        { key: this.key, contactKey: key },
        "No analyzable conversation entries for lead summary"
      );
      return;
    }
    const analysis = summaryBundle?.analysis || {
      context: "",
      customerIntent: "",
      sentiment: { label: "neutral", score: 0 },
      promisedFollowUps: [],
      unresolvedQuestions: [],
      recommendedNextAction: ""
    };
    const contactJid = `${key}@s.whatsapp.net`;
    let contactName = "";
    try {
      contactName = await this.resolveContactName(contactJid, {
        fallbackToNetwork: false
      }) || this.getCachedContactName(contactJid) || "";
    } catch {
      contactName = this.getCachedContactName(contactJid) || "";
    }
    let summaryText = summaryBundle?.text || "";
    let aiSummaryUsed = false;
    let buttonPayload = null;
    let providerCfg = null;
    let platform = this.chatBotRuntimeConfig.platform || "chatGPT";
    try {
      const setting = await dbUtil.getSetting();
      providerCfg = setting?.integration?.[platform];
    } catch (error2) {
      logger.debug(
        { key: this.key, err: error2?.message },
        "Failed to load provider config for lead summary"
      );
    }
    const conversationStateSnapshot = this.chatBotConversationState.get(key) || {};
    const rawDeviceSource = conversationStateSnapshot.lastDeviceSource || null;
    const deviceInstruction = this.describeDeviceSourceForInstruction(
      rawDeviceSource
    );
    const contactInstructionContext = await this.resolveContactInstructionContext(
      {
        id: contactJid,
        number: key,
        name: contactName,
        lastDeviceSource: rawDeviceSource
      },
      { deviceInstruction, rawDeviceSource }
    );
    const leadPhone = this.chatBotRuntimeConfig.leadPhone;
    const callButtonPhone = this.normalizePhoneNumberForCall(
      contactInstructionContext.phoneNumber
    ) || this.normalizePhoneNumberForCall(leadPhone) || key;
    const chatPhoneDigits = trimPhoneNumber(contactInstructionContext.phoneNumber || "") || trimPhoneNumber(key) || "";
    try {
      const aiSummaryPayload = await this.generateLeadSummaryPayload({
        contactKey: key,
        conversationEntries,
        providerConfig: providerCfg,
        platform,
        customerContext: contactInstructionContext,
        callPhone: callButtonPhone,
        chatPhoneDigits,
        analysis
      });
      if (aiSummaryPayload) {
        buttonPayload = aiSummaryPayload;
        const payloadText = this.coerceAiString(
          aiSummaryPayload.text || aiSummaryPayload.message
        ) || this.getAiPayloadDisplayText(aiSummaryPayload);
        if (payloadText) {
          summaryText = payloadText;
        }
        aiSummaryUsed = true;
      }
    } catch (error2) {
      logger.debug(
        { key: this.key, contactKey: key, err: error2?.message },
        "AI summary payload generation threw"
      );
    }
    if (!summaryText) {
      summaryText = "Lead summary unavailable. Please review the conversation manually.";
    }
    const latestState = this.chatBotConversationState.get(key) || {};
    const latestEpoch = Number.isFinite(latestState.leadSummaryEpoch) ? latestState.leadSummaryEpoch : currentEpoch;
    if (latestEpoch !== baselineEpoch) {
      logger.debug(
        {
          key: this.key,
          contactKey: key,
          expectedEpoch: baselineEpoch,
          latestEpoch
        },
        "Lead summary aborted after generation due to new activity"
      );
      if (!this.chatBotLeadSummaryTimers.has(key)) {
        this.scheduleLeadSummaryCountdown(key, latestEpoch);
      }
      return;
    }
    if (!leadPhone) {
      logger.debug(
        { key: this.key, contactKey: key },
        "Lead phone missing, logging summary warning"
      );
      await this.recordChatBotConversationMessage(
        key,
        {
          senderType: "ai",
          messageType: "summary",
          payload: { text: summaryText, analysis },
          metadata: {
            summary: true,
            skipped: true,
            reason: "lead_phone_missing",
            analysis,
            coveredUntil: lastEntryTimestamp
          }
        },
        { skipSummarySchedule: true }
      );
      this.markChatBotSummarySnapshot(key, lastEntryTimestamp);
      return;
    }
    const displayName = contactInstructionContext.displayName || contactName || key;
    const fallbackTextPayload = { type: "text", message: summaryText };
    const normalizedTextPayload = this.normalizeAiResponsePayload(fallbackTextPayload) || fallbackTextPayload;
    const textPayload = validateChatBotPayloadShape(normalizedTextPayload, logger) || fallbackTextPayload;
    const baseLeadContact = {
      number: leadPhone,
      name: displayName
    };
    const preSendState = this.chatBotConversationState.get(key) || {};
    const preSendEpoch = Number.isFinite(preSendState.leadSummaryEpoch) ? preSendState.leadSummaryEpoch : currentEpoch;
    if (preSendEpoch !== baselineEpoch) {
      logger.debug(
        {
          key: this.key,
          contactKey: key,
          expectedEpoch: baselineEpoch,
          latestEpoch: preSendEpoch
        },
        "Lead summary aborted before delivery due to new activity"
      );
      if (!this.chatBotLeadSummaryTimers.has(key)) {
        this.scheduleLeadSummaryCountdown(key, preSendEpoch);
      }
      return;
    }
    let sendResult = null;
    let usedButtonDelivery = false;
    let leadJid = null;
    try {
      leadJid = await this.getWhatsAppId(leadPhone).catch(() => null);
    } catch {
      leadJid = null;
    }
    if (leadJid && buttonPayload) {
      try {
        sendResult = await this.sendAiPayload(
          { ...baseLeadContact, id: leadJid },
          buttonPayload
        );
        usedButtonDelivery = Boolean(sendResult);
      } catch (error2) {
        logger.debug(
          { key: this.key, contactKey: key, err: error2?.message },
          "Lead summary button send failed"
        );
      }
    } else if (!leadJid) {
      logger.debug(
        { key: this.key, contactKey: key, leadPhone },
        "Unable to resolve lead phone JID for button summary"
      );
    } else if (!buttonPayload) {
      logger.debug(
        { key: this.key, contactKey: key },
        "Lead summary button payload unavailable"
      );
    }
    if (!sendResult) {
      try {
        const contactId = leadJid || leadPhone;
        sendResult = await this.sendAiPayload(
          { ...baseLeadContact, id: contactId },
          textPayload
        );
      } catch (error2) {
        logger.debug(
          { key: this.key, contactKey: key, err: error2?.message },
          "Lead summary text send failed"
        );
      }
    }
    if (!sendResult) {
      throw new Error("Lead summary message send failed");
    }
    await this.recordChatBotConversationMessage(
      key,
      {
        senderType: "ai",
        messageType: "summary",
        payload: { text: summaryText, analysis },
        metadata: {
          summary: true,
          leadPhone,
          analysis,
          delivery: usedButtonDelivery ? "button" : "text",
          aiSummary: aiSummaryUsed || void 0,
          coveredUntil: lastEntryTimestamp
        }
      },
      { skipSummarySchedule: true }
    );
    this.markChatBotSummarySnapshot(key, lastEntryTimestamp);
    logger.debug(
      {
        key: this.key,
        contactKey: key,
        leadPhone,
        delivery: usedButtonDelivery ? "button" : "text"
      },
      "Lead summary delivered"
    );
  }
  coerceAiString(value) {
    if (value === null || value === void 0) {
      return "";
    }
    return String(value).trim();
  }
  extractAiJsonObjectString(rawContent) {
    if (typeof rawContent !== "string") {
      return null;
    }
    let trimmed = rawContent.trim();
    if (!trimmed) {
      return null;
    }
    const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (fencedMatch && fencedMatch[1]) {
      trimmed = fencedMatch[1].trim();
    }
    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      return trimmed;
    }
    const firstBrace = trimmed.indexOf("{");
    const lastBrace = trimmed.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      const candidate = trimmed.slice(firstBrace, lastBrace + 1).trim();
      if (candidate.startsWith("{") && candidate.endsWith("}")) {
        return candidate;
      }
    }
    return null;
  }
  parseAiResponseContent(rawResponse) {
    if (rawResponse === null || rawResponse === void 0) {
      return null;
    }
    if (typeof rawResponse === "string") {
      const candidate = this.extractAiJsonObjectString(rawResponse);
      if (!candidate) {
        return null;
      }
      try {
        const parsed = JSON.parse(candidate);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          return parsed;
        }
        return null;
      } catch {
        return null;
      }
    }
    if (typeof rawResponse === "object" && !Array.isArray(rawResponse)) {
      return rawResponse;
    }
    return null;
  }
  isSupportedAiPayloadType(type) {
    const normalized = String(type || "").toLowerCase();
    return ["text", "buttons", "list", "poll"].includes(normalized);
  }
  describeAiPayloadFailure(rawResponse) {
    if (rawResponse === null || rawResponse === void 0) {
      return "empty_response";
    }
    if (typeof rawResponse === "string") {
      const trimmed = rawResponse.trim();
      if (!trimmed) {
        return "empty_string";
      }
      const candidate = this.extractAiJsonObjectString(trimmed);
      if (!candidate) {
        return "missing_json_object";
      }
      try {
        const parsed = JSON.parse(candidate);
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
          return "json_not_object";
        }
        if (!parsed.type) {
          return "missing_type";
        }
        if (!this.isSupportedAiPayloadType(parsed.type)) {
          return "unsupported_type";
        }
        return "invalid_schema";
      } catch {
        return "json_parse_error";
      }
    }
    if (typeof rawResponse === "object") {
      if (Array.isArray(rawResponse)) {
        return "array_not_supported";
      }
      if (!rawResponse.type) {
        return "missing_type";
      }
      if (!this.isSupportedAiPayloadType(rawResponse.type)) {
        return "unsupported_type";
      }
      return "invalid_schema";
    }
    return "unsupported_payload_form";
  }
  normalizeAiResponsePayload(rawResponse) {
    if (typeof rawResponse === "string") {
      const fallbackMessage = this.coerceAiString(rawResponse);
      if (!fallbackMessage) {
        return null;
      }
      return { type: "text", message: fallbackMessage };
    }
    const parsed = this.parseAiResponseContent(rawResponse);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }
    const type = String(parsed.type || "").toLowerCase();
    if (!type || !this.isSupportedAiPayloadType(type)) {
      return null;
    }
    if (type === "text") {
      const message = this.coerceAiString(parsed.message || parsed.text);
      return message ? { type: "text", message } : null;
    }
    if (type === "buttons") {
      return this.sanitizeAiButtonPayload(parsed);
    }
    if (type === "list") {
      return this.sanitizeAiListPayload(parsed);
    }
    if (type === "poll") {
      return this.sanitizeAiPollPayload(parsed);
    }
    return null;
  }
  sanitizeAiButtonPayload(raw) {
    const text = this.coerceAiString(raw.text || raw.message);
    const footer = this.coerceAiString(raw.footer || raw.footerText || "");
    const title = this.coerceAiString(raw.title || "");
    const rawButtons = Array.isArray(raw.buttons) ? raw.buttons : [];
    const buttons = [];
    for (const button of rawButtons) {
      if (buttons.length >= CHATBOT_MAX_BUTTONS) {
        break;
      }
      const rawType = this.coerceAiString(
        button?.type || button?.kind || button?.variant || button?.name || ""
      ).toLowerCase();
      const label = this.coerceAiString(
        button?.label || button?.title || button?.text || ""
      );
      if (!rawType || !label) {
        continue;
      }
      let normalizedType = null;
      if (["call", "phone", "callbutton", "call_button", "cta_call"].includes(rawType)) {
        normalizedType = "CALL";
      } else if (["url", "link", "urlbutton", "url_button", "cta_url", "website"].includes(rawType)) {
        normalizedType = "URL";
      } else if ([
        "reply",
        "replybutton",
        "reply_button",
        "quick_reply",
        "quickreply",
        "text",
        "textbutton",
        "response"
      ].includes(rawType)) {
        normalizedType = "REPLY";
      } else if (["callButton", "urlButton", "replyButton"].includes(button?.type)) {
        normalizedType = button.type.replace("Button", "").toUpperCase();
      } else if (["CALL", "URL", "REPLY"].includes(button?.type)) {
        normalizedType = String(button.type).toUpperCase();
      }
      if (!normalizedType) {
        continue;
      }
      if (normalizedType === "CALL") {
        const phone = this.normalizePhoneNumberForCall(
          button.phone || button.payload || button.value || label
        );
        if (!phone) {
          continue;
        }
        buttons.push({
          type: "CALL",
          label,
          phone,
          url: null,
          payload: null
        });
      } else if (normalizedType === "URL") {
        const url2 = this.coerceAiString(
          button.url || button.payload || button.value || ""
        );
        if (!url2) {
          continue;
        }
        buttons.push({
          type: "URL",
          label,
          phone: null,
          url: url2,
          payload: null
        });
      } else if (normalizedType === "REPLY") {
        const payloadValue = this.coerceAiString(
          button.payload || button.value || label
        );
        buttons.push({
          type: "REPLY",
          label,
          phone: null,
          url: null,
          payload: payloadValue
        });
      }
    }
    if (!text || !buttons.length) {
      return null;
    }
    return {
      type: "buttons",
      text,
      footer: footer || null,
      title: title || null,
      buttons
    };
  }
  sanitizeAiListPayload(raw) {
    const header = this.coerceAiString(raw.header || raw.heading || "");
    const title = this.coerceAiString(raw.title || header || "Menu");
    const description = this.coerceAiString(
      raw.description || raw.message || raw.text || raw.body || header || ""
    );
    const footer = this.coerceAiString(raw.footer || raw.footerText || "");
    const buttonText = this.coerceAiString(
      raw.buttonText || raw.button || "Select"
    );
    const defaultSectionTitle = this.coerceAiString(
      raw.sectionTitle || raw.menuTitle || header || title || "Options"
    );
    const listSectionTitle = this.coerceAiString(
      raw.listSectionTitle || raw.listTitle || raw.listHeading || ""
    ) || defaultSectionTitle;
    let sectionsSource = Array.isArray(raw.sections) ? raw.sections : [];
    if (!sectionsSource.length) {
      const listItems = Array.isArray(raw.listItems) ? raw.listItems : [];
      if (listItems.length) {
        sectionsSource = [
          {
            title: listSectionTitle,
            rows: listItems
          }
        ];
      } else {
        const items = Array.isArray(raw.items) ? raw.items : Array.isArray(raw.rows) ? raw.rows : [];
        if (items.length) {
          sectionsSource = [
            {
              title: defaultSectionTitle,
              rows: items
            }
          ];
        }
      }
    }
    const sections = [];
    sectionsSource.forEach((section, sectionIdx) => {
      const rowsInput = Array.isArray(section?.rows) ? section.rows : [];
      const rows = rowsInput.map((row, rowIdx) => {
        let rowTitle;
        let rowDescription;
        let rowId;
        if (typeof row === "string") {
          rowTitle = this.coerceAiString(row);
          rowDescription = "";
          rowId = `row-${sectionIdx}-${rowIdx}`;
        } else {
          rowTitle = this.coerceAiString(
            row?.title || row?.label || row?.name || ""
          );
          rowDescription = this.coerceAiString(
            row?.description || row?.subtitle || row?.detail || ""
          );
          rowId = row?.rowId || row?.id || row?.value || `row-${sectionIdx}-${rowIdx}`;
        }
        if (!rowTitle) {
          return null;
        }
        return {
          title: rowTitle,
          description: rowDescription,
          rowId
        };
      }).filter(Boolean);
      if (!rows.length) {
        return;
      }
      sections.push({
        title: this.coerceAiString(section?.title || defaultSectionTitle),
        rows
      });
    });
    if (!sections.length) {
      return null;
    }
    return {
      type: "list",
      title,
      description,
      footer,
      buttonText,
      sections
    };
  }
  sanitizeAiPollPayload(raw) {
    const question = this.coerceAiString(raw.question || raw.name || "");
    const optionSource = Array.isArray(raw.options) ? raw.options : Array.isArray(raw.values) ? raw.values : [];
    const values = optionSource.map((opt) => this.coerceAiString(opt)).filter(Boolean);
    if (!question || values.length < 2) {
      return null;
    }
    const selectableCount = Number.isFinite(raw.selectableCount) ? Math.max(1, Math.floor(raw.selectableCount)) : 1;
    return {
      type: "poll",
      question,
      options: values,
      selectableCount,
      isAnonymous: Boolean(raw.isAnonymous)
    };
  }
  buildButtonDeliveryPayload(buttonPayload = {}) {
    const buttons = [];
    const rawButtons = Array.isArray(buttonPayload.buttons) ? buttonPayload.buttons : [];
    for (const button of rawButtons) {
      if (buttons.length >= CHATBOT_MAX_BUTTONS) {
        break;
      }
      const label = this.coerceAiString(button?.label);
      if (!label) {
        continue;
      }
      if (button.type === "CALL") {
        const phone = this.normalizePhoneNumberForCall(button.phone || button.payload || "");
        if (!phone) {
          continue;
        }
        buttons.push({ type: "callButton", title: label, payload: phone });
      } else if (button.type === "URL") {
        const url2 = this.coerceAiString(button.url || button.payload || "");
        if (!url2) {
          continue;
        }
        buttons.push({ type: "urlButton", title: label, payload: url2 });
      } else if (button.type === "REPLY") {
        const payloadValue = this.coerceAiString(button.payload || label);
        buttons.push({ type: "replyButton", title: label, payload: payloadValue });
      }
    }
    if (!buttons.length) {
      return null;
    }
    const footerText = this.coerceAiString(buttonPayload.footer);
    const title = this.coerceAiString(buttonPayload.title);
    return {
      title: title || void 0,
      text: buttonPayload.text,
      footerText: footerText || void 0,
      buttons
    };
  }
  normalizeDeviceSourceLabel(source) {
    if (!source) {
      return "unknown";
    }
    const normalized = String(source).trim().toLowerCase();
    if (!normalized) {
      return "unknown";
    }
    if (normalized.includes("desktop")) {
      return "desktop";
    }
    if (normalized.includes("web")) {
      return "web";
    }
    if (normalized.includes("android")) {
      return "android";
    }
    if (normalized.includes("ios")) {
      return "ios";
    }
    return normalized;
  }
  describeDeviceSourceForInstruction(source) {
    const normalized = this.normalizeDeviceSourceLabel(source);
    if (["web", "desktop"].includes(normalized)) {
      return {
        label: normalized === "web" ? "WhatsApp Web" : "WhatsApp Desktop",
        description: "Customer is chatting from WhatsApp Web/Desktop.",
        buttonRule: "Send button sets that are either CALL/URL buttons only or REPLY buttons only\u2014never mix types for Web/Desktop users."
      };
    }
    if (normalized === "android") {
      return {
        label: "WhatsApp Android",
        description: "Customer is chatting from WhatsApp on Android.",
        buttonRule: "Android users can receive any mix of CALL, URL, and REPLY buttons in one message."
      };
    }
    if (normalized === "ios") {
      return {
        label: "WhatsApp iOS",
        description: "Customer is chatting from WhatsApp on iOS.",
        buttonRule: "iOS users can receive any mix of CALL, URL, and REPLY buttons in one message."
      };
    }
    return {
      label: "an unknown device",
      description: "Customer device is unknown; assume the safer Web/Desktop rule (single-type button sets).",
      buttonRule: "When unsure, keep button sets to a single type (only CALL/URL or only REPLY)."
    };
  }
  buildLeadSummaryChatUrl(phoneNumber, startMessage = "") {
    const digits = trimPhoneNumber(phoneNumber || "");
    if (!digits) {
      return this.buildCustomerChatUrl(phoneNumber);
    }
    const encodedMessage = encodeURIComponent(startMessage || "");
    return encodedMessage ? `https://wa.me/${digits}?text=${encodedMessage}` : `https://wa.me/${digits}`;
  }
  buildLeadSummaryPayloadInstruction({
    summaryContext = {},
    analysis = {},
    callPhone = "",
    chatPhoneDigits = ""
  }) {
    const displayName = summaryContext.displayName || "the customer";
    const phoneNumber = summaryContext.phoneNumber || "unknown";
    const accountTypeLabel = summaryContext.accountTypeLabel || "Personal";
    const businessSummary = summaryContext.businessSummary || (accountTypeLabel === "Business" ? "Business profile present without publicly shared details." : "Personal account (no public business profile).");
    const deviceLabel = summaryContext.deviceLabel || "an unknown device";
    const rawDeviceSource = summaryContext.rawDeviceSource || "unknown";
    const profilePhotoText = summaryContext.profilePhotoText || "Unavailable";
    const sentimentLabel = analysis?.sentiment?.label || "neutral";
    const sentimentScore = analysis?.sentiment?.score ?? 0;
    const followUps = Array.isArray(analysis?.promisedFollowUps) ? analysis.promisedFollowUps.filter(Boolean).join("; ") || "None" : "None";
    const unresolved = Array.isArray(analysis?.unresolvedQuestions) ? analysis.unresolvedQuestions.filter(Boolean).join("; ") || "None" : "None";
    const recommendedNextAction = analysis?.recommendedNextAction || "Send a friendly follow-up.";
    const contextLine = analysis?.context || "Not captured";
    const intentLine = analysis?.customerIntent || "Not captured";
    const digitsOnly = trimPhoneNumber(chatPhoneDigits || phoneNumber || "");
    const safeCallPhone = callPhone || `+${digitsOnly}` || phoneNumber;
    return `You are an expert sales enablement assistant. Respond ONLY with a valid JSON object that adheres to the WhatsApp chatbot payload schema. The payload MUST describe a BUTTON message (type="buttons"). Follow every rule strictly:

1. type MUST be "buttons".
2. text MUST contain a concise lead summary written entirely in the primary language used throughout the conversation. Use up to 3 short lines covering: Customer Details, Context, Intent, Sentiment, Follow-ups, Open details, Next sales action. Mention customer name, phone, WhatsApp account type (${accountTypeLabel}), business info, device used (${deviceLabel}).
3. title should be "Lead Summary" (translate if needed). footer may reference the business or owner.
4. Buttons array MUST contain exactly two buttons in this order:
   a) CALL button labeled "Call ${displayName}" with phone="${safeCallPhone}", url=null, payload=null.
   b) URL button labeled "Chat on WhatsApp" with phone=null, payload=null, and url constructed as https://wa.me/${digitsOnly}?text=<encoded_message>. The <encoded_message> must be a short invitation (\u226415 words) written in the same language as the summary, URL-encoded using encodeURIComponent (spaces become %20, etc.).
5. Every button object MUST include the keys type, label, phone, url, payload. Unused fields MUST be null.
6. Do NOT add extra buttons or other message types.
7. Never include markdown, emojis beyond practical use, or internal/system commentary.

Customer facts to weave into the summary text:
- Name: ${displayName}
- Phone: ${phoneNumber}
- WhatsApp account type: ${accountTypeLabel}
- Business info: ${businessSummary}
- Device source: ${deviceLabel} (reported as ${rawDeviceSource})
- Profile photo URL: ${profilePhotoText}

Conversation analysis hints:
- Context: ${contextLine}
- Intent: ${intentLine}
- Sentiment: ${sentimentLabel} (score ${sentimentScore})
- Promised follow-ups: ${followUps}
- Unresolved questions: ${unresolved}
- Recommended next action: ${recommendedNextAction}

Respond with JSON only\u2014no extra prose.`;
  }
  normalizeInstructionDetail(value, fallback = "Not provided") {
    if (value === null || value === void 0) {
      return fallback;
    }
    const str = typeof value === "string" ? value : String(value);
    const normalized = str.replace(/\s+/g, " ").trim();
    return normalized.length ? normalized : fallback;
  }
  describeBusinessProfileForInstruction(profile) {
    if (!profile || typeof profile !== "object") {
      return "Personal account (no public business profile).";
    }
    const segments = [];
    const businessName = profile.businessName || profile.name || profile.verifiedName || null;
    if (businessName) {
      segments.push(`Name: ${this.normalizeInstructionDetail(businessName, "")}`.trim());
    }
    const categories = Array.isArray(profile.categories) ? profile.categories.filter(Boolean).join(", ") : profile.category || profile.categoryId || null;
    if (categories) {
      segments.push(`Category: ${this.normalizeInstructionDetail(categories, "")}`.trim());
    }
    if (profile.description) {
      segments.push(
        `Description: ${this.normalizeInstructionDetail(profile.description, "")}`.trim()
      );
    }
    if (profile.email) {
      segments.push(`Email: ${this.normalizeInstructionDetail(profile.email, "")}`.trim());
    }
    if (profile.address) {
      segments.push(
        `Address: ${this.normalizeInstructionDetail(profile.address, "")}`.trim()
      );
    }
    if (profile.website) {
      segments.push(
        `Website: ${this.normalizeInstructionDetail(profile.website, "")}`.trim()
      );
    }
    return segments.length ? segments.join("; ") : "Business profile present without publicly shared details.";
  }
  async resolveContactInstructionContext(contact = {}, { deviceInstruction = null, rawDeviceSource = null } = {}) {
    const normalizedNumber = contact?.number ? trimPhoneNumber(String(contact.number)) : "";
    const contactJid = typeof contact?.id === "string" && contact.id.includes("@") ? contact.id : normalizedNumber ? `${normalizedNumber}@s.whatsapp.net` : null;
    let details = null;
    if (contactJid) {
      try {
        details = await this.getContactDetails(contactJid);
      } catch (error2) {
        logger.debug(
          { key: this.key, jid: contactJid, err: error2?.message },
          "resolveContactInstructionContext: detail lookup failed"
        );
      }
    }
    const resolvedName = contact?.name || details?.name || details?.notify || "the customer";
    const resolvedNumber = normalizedNumber || details?.phone || (contactJid ? contactJid.split("@")[0] : "") || "unknown";
    const profilePhotoUrl = details?.profile_pic || "";
    const isBusiness = Boolean(details?.is_business || details?.business_profile);
    const accountTypeLabel = isBusiness ? "Business" : "Personal";
    const businessSummary = this.describeBusinessProfileForInstruction(
      details?.business_profile
    );
    const resolvedDeviceInstruction = deviceInstruction || this.describeDeviceSourceForInstruction(
      rawDeviceSource || contact?.lastDeviceSource
    );
    return {
      displayName: this.normalizeInstructionDetail(resolvedName, "the customer"),
      phoneNumber: this.normalizeInstructionDetail(resolvedNumber, "unknown"),
      profilePhotoUrl: profilePhotoUrl || "",
      profilePhotoText: profilePhotoUrl || "Unavailable",
      accountType: isBusiness ? "business" : "personal",
      accountTypeLabel,
      businessSummary,
      businessProfile: details?.business_profile || null,
      deviceLabel: resolvedDeviceInstruction.label,
      deviceDescription: resolvedDeviceInstruction.description,
      deviceRule: resolvedDeviceInstruction.buttonRule,
      rawDeviceSource: rawDeviceSource || contact?.lastDeviceSource || "unknown"
    };
  }
  classifyButtonPolicyType(button) {
    const rawType = button?.type || button?.buttonType || button?.name || button?.kind || "";
    const normalized = String(rawType || "").trim().toLowerCase();
    if ([
      "reply",
      "replybutton",
      "reply_button",
      "quick_reply",
      "quickreply",
      "response",
      "text",
      "textbutton",
      "copy",
      "copybutton"
    ].includes(normalized)) {
      return "reply";
    }
    if (["call", "callbutton", "call_button", "cta_call", "phone"].includes(normalized)) {
      return "call";
    }
    if ([
      "url",
      "urlbutton",
      "url_button",
      "cta_url",
      "link",
      "website"
    ].includes(normalized)) {
      return "url";
    }
    return "other";
  }
  enforceButtonPolicyForDevice(buttons = [], source = null) {
    if (!Array.isArray(buttons) || buttons.length < 2) {
      return Array.isArray(buttons) ? buttons : [];
    }
    const normalizedSource = this.normalizeDeviceSourceLabel(source);
    if (!["web", "desktop"].includes(normalizedSource)) {
      return buttons;
    }
    const classified = buttons.map((button) => ({
      button,
      category: this.classifyButtonPolicyType(button)
    }));
    const hasCallOrUrl = classified.some(
      ({ category }) => ["call", "url"].includes(category)
    );
    const hasReply = classified.some(({ category }) => category === "reply");
    if (!hasCallOrUrl || !hasReply) {
      return buttons;
    }
    const callUrlCount = classified.filter(
      ({ category }) => ["call", "url"].includes(category)
    ).length;
    const replyCount = classified.filter(({ category }) => category === "reply").length;
    const keepReply = replyCount > callUrlCount;
    const allowedCategories = keepReply ? /* @__PURE__ */ new Set(["reply"]) : /* @__PURE__ */ new Set(["call", "url"]);
    const filteredButtons = classified.filter(({ category }) => allowedCategories.has(category)).map(({ button }) => button);
    if (!filteredButtons.length) {
      return buttons;
    }
    logger.debug(
      {
        key: this.key,
        source: normalizedSource,
        keptCategory: keepReply ? "reply" : "call_url",
        originalButtons: buttons.length,
        filteredButtons: filteredButtons.length
      },
      "Adjusted button payload to satisfy device constraints"
    );
    return filteredButtons;
  }
  applyButtonPolicyToPayload(payload, source = null) {
    if (!payload || payload.type !== "buttons") {
      return payload;
    }
    const originalButtons = Array.isArray(payload.buttons) ? payload.buttons : [];
    const filteredButtons = this.enforceButtonPolicyForDevice(
      originalButtons,
      source
    );
    if (!Array.isArray(filteredButtons) || filteredButtons.length === originalButtons.length) {
      return payload;
    }
    return {
      ...payload,
      buttons: filteredButtons
    };
  }
  async sendAiPayload(contact, payload) {
    if (!contact?.id) {
      throw new Error("Missing contact identifier for AI payload");
    }
    if (!payload || !payload.type) {
      throw new Error("Invalid AI payload");
    }
    switch (payload.type) {
      case "text":
        return await this.sendTextMessage(contact.id, payload.message);
      case "buttons": {
        const buttonDeliveryPayload = this.buildButtonDeliveryPayload(
          payload
        );
        if (!buttonDeliveryPayload) {
          throw new Error("Invalid button payload after normalization");
        }
        return await this.sendButtonMessage(
          contact.id,
          buttonDeliveryPayload,
          {}
        );
      }
      case "list":
        return await this.sendListMessage(
          contact.id,
          {
            title: payload.title,
            description: payload.description,
            footer: payload.footer,
            buttonText: payload.buttonText,
            sections: payload.sections
          },
          {}
        );
      case "poll":
        return await this.sendPollMessage(
          contact.id,
          {
            name: payload.question,
            values: payload.options,
            selectableCount: payload.selectableCount
          },
          {}
        );
      default:
        throw new Error(`Unsupported AI payload type: ${payload.type}`);
    }
  }
  deriveChatBotMessageType(message) {
    const content = message?.message || message;
    if (!content || typeof content !== "object") {
      return "unknown";
    }
    const docWrappedMessage = content.documentWithCaptionMessage?.message;
    if (docWrappedMessage?.buttonsMessage) {
      return "buttons";
    }
    if (docWrappedMessage?.listMessage) {
      return "list";
    }
    if (content.interactiveMessage) {
      const nativeButtons = content.interactiveMessage.nativeFlowMessage?.buttons;
      if (Array.isArray(nativeButtons) && nativeButtons.length) {
        return "buttons";
      }
      if (content.interactiveMessage?.listMessage) {
        return "list";
      }
    }
    if (content.buttonsMessage || content.templateButtonReplyMessage) {
      return "buttons";
    }
    if (content.listMessage || content.listResponseMessage) {
      return "list";
    }
    if (content.pollCreationMessage || content.pollCreationMessageV3 || content.poll) {
      return "poll";
    }
    if (content.imageMessage || content.videoMessage || content.documentMessage || content.audioMessage || content.stickerMessage) {
      return "media";
    }
    if (content.conversation || content.extendedTextMessage || content.text || content.message?.conversation) {
      return "text";
    }
    return "unknown";
  }
  async scheduleChatBotReply({ contact, msgBody }) {
    const [instanceData, setting] = await Promise.all([
      dbUtil.getInstance({ _id: this.key }),
      dbUtil.getSetting()
    ]);
    if (!instanceData) {
      logger.debug({ key: this.key }, "Instance data not found");
      return false;
    }
    if (!setting) {
      logger.debug({ key: this.key }, "Setting data not found");
    }
    const chatBotCfg = instanceData?.chatBot || {};
    this.applyChatBotRuntimeConfig(chatBotCfg);
    this.chatBotRuntimeConfigLastLoadedAt = Date.now();
    if (this.chatBotRuntimeConfig.enable) {
      logger.debug(
        { key: this.key, contactKey: contact.id },
        "Scheduling ChatBot reply"
      );
      logger.debug({ key: this.key }, `Message Body: ${msgBody}`);
      const trimmed = typeof msgBody === "string" ? msgBody.trim() : "";
      if (!trimmed) {
        return false;
      }
      if (!contact?.number) {
        return false;
      }
      const platform = this.chatBotRuntimeConfig.platform || "chatGPT";
      const providerCfg = setting?.integration?.[platform];
      if (!(providerCfg?.enable && providerCfg?.apiKey)) {
        logger.debug(
          { key: this.key },
          "Provider config missing or disabled for platform",
          platform
        );
        return false;
      }
      const now = Date.now();
      const contactKey = String(contact.number);
      let entry = this.chatBotReplyBuffer.get(contactKey);
      if (!entry) {
        entry = { messages: [], createdAt: now };
      }
      if (entry.timeout) {
        clearTimeout(entry.timeout);
        entry.timeout = null;
      }
      entry.messages.push(trimmed);
      entry.platform = platform;
      entry.contact = contact;
      entry.updatedAt = now;
      entry.lastMessageAt = now;
      entry.lastCustomerMessageAt = now;
      entry.messageCount = entry.messages.length;
      this.chatBotReplyBuffer.set(contactKey, entry);
      if (contact?.lastDeviceSource) {
        this.touchChatBotConversationState(
          contactKey,
          { lastDeviceSource: contact.lastDeviceSource },
          { skipSummarySchedule: true }
        );
      }
      const delays = this.getActiveChatBotDelays();
      const initialDelayMs = Math.max(0, delays.initialMs);
      const scheduledDelayMs = initialDelayMs;
      logger.debug(
        {
          key: this.key,
          contactKey,
          messageCount: entry.messageCount,
          scheduledDelayMs
        },
        "Queued ChatBot reply window"
      );
      this.scheduleChatBotFlush(contact, entry, scheduledDelayMs);
      if (entry.messageCount > 1) {
        const followUpDelayMs = this.getFollowUpHoldDelayMs(delays);
        this.deferChatBotReplyForContact(
          contactKey,
          "additional_message_buffer",
          followUpDelayMs
        );
      }
      this.applyTypingConstraintsForContact(contactKey);
      return true;
    } else {
      logger.debug({ key: this.key }, "ChatBot disabled at schedule time");
      return false;
    }
  }
  async flushChatBotBuffer(contact) {
    const contactKey = String(contact.number);
    const entry = this.chatBotReplyBuffer.get(contactKey);
    if (!entry) {
      return;
    }
    if (entry.timeout) {
      clearTimeout(entry.timeout);
      entry.timeout = null;
    }
    entry.contact = contact;
    const now = Date.now();
    const scheduledDelay = entry.nextAttemptAt ? Math.max(0, entry.nextAttemptAt - now) : 0;
    const typingDelay = this.resolveTypingDelayMs(contactKey);
    const ownerHoldDelay = this.resolveOwnerHoldDelayMs(contactKey);
    const customerIdleDelay = this.resolveContactMessageIdleDelay(entry, now);
    const effectiveDelay = Math.max(
      scheduledDelay,
      typingDelay,
      ownerHoldDelay,
      customerIdleDelay
    );
    if (effectiveDelay > 0) {
      this.chatBotReplyBuffer.set(contactKey, entry);
      this.scheduleChatBotFlush(contact, entry, effectiveDelay);
      return;
    }
    this.chatBotReplyBuffer.delete(contactKey);
    const messages = entry.messages?.filter(Boolean) || [];
    if (!messages.length) {
      return;
    }
    try {
      const trimmedMessages = messages.map((content) => typeof content === "string" ? content.trim() : "").filter(Boolean);
      if (!trimmedMessages.length) {
        return;
      }
      const entries = await dbUtil.getChatBotConversationEntries(this.key, contactKey, {
        limit: CHATBOT_SUMMARY_HISTORY_LIMIT
      }) || [];
      const lastEntry = entries[entries.length - 1];
      if (lastEntry?.senderType === "owner") {
        logger.debug(
          { key: this.key, contactKey },
          "Skipping AI reply because owner was the last responder"
        );
        return;
      }
      const history = this.mapConversationHistory(entries);
      const historyEntryCount = Array.isArray(history) ? history.length : 0;
      const [instanceData, setting] = await Promise.all([
        dbUtil.getInstance({ _id: this.key }),
        dbUtil.getSetting()
      ]);
      const chatBotCfg = instanceData?.chatBot || {};
      this.applyChatBotRuntimeConfig(chatBotCfg);
      this.chatBotRuntimeConfigLastLoadedAt = Date.now();
      if (!this.chatBotRuntimeConfig.enable) {
        logger.debug(
          { key: this.key },
          "ChatBot disabled at flush time, skipping AI reply"
        );
        return;
      }
      const platform = this.chatBotRuntimeConfig.platform || entry.platform || "chatGPT";
      const providerCfg = setting?.integration?.[platform];
      if (!(providerCfg?.enable && providerCfg?.apiKey)) {
        logger.debug(
          { key: this.key },
          "Provider config missing or disabled at flush time",
          platform
        );
        return;
      }
      const countryConfig = setting?.country ?? {};
      const {
        code: countryCode = "",
        dialCode: countryDialCode = "",
        language: countryLanguage = "",
        timezone: countryTimezone = ""
      } = countryConfig;
      const localizationLines = [];
      if (countryCode || countryDialCode) {
        const parts = [];
        if (countryCode) {
          parts.push(`code ${countryCode}`);
        }
        if (countryDialCode) {
          parts.push(`dial +${countryDialCode}`);
        }
        localizationLines.push(`Country preference: ${parts.join(", ")}`);
      }
      if (countryLanguage) {
        localizationLines.push(`Primary language: ${countryLanguage}`);
      }
      if (countryTimezone) {
        localizationLines.push(`Preferred timezone: ${countryTimezone}`);
      }
      const localizationSection = localizationLines.length ? `
      Localization:
${localizationLines.map((line) => `        - ${line}`).join("\n")}` : "";
      const conversationStateSnapshot = this.chatBotConversationState.get(contactKey) || {};
      const resolvedContact = contact && typeof contact === "object" ? contact : { number: contactKey, id: `${contactKey}@s.whatsapp.net` };
      const rawDeviceSource = resolvedContact?.lastDeviceSource || conversationStateSnapshot.lastDeviceSource || null;
      const deviceInstruction = this.describeDeviceSourceForInstruction(
        rawDeviceSource
      );
      const contactInstructionContext = await this.resolveContactInstructionContext(
        { ...resolvedContact, lastDeviceSource: rawDeviceSource },
        { deviceInstruction, rawDeviceSource }
      );
      const customerProfileSection = `
      Customer Profile:
        - Name: ${contactInstructionContext.displayName}
        - Phone: ${contactInstructionContext.phoneNumber}
        - WhatsApp number type: ${contactInstructionContext.accountTypeLabel}
        - Device source: ${contactInstructionContext.deviceLabel} (reported as ${contactInstructionContext.rawDeviceSource || "unknown"})
        - Profile photo URL: ${contactInstructionContext.profilePhotoText}
        - Business profile: ${contactInstructionContext.businessSummary}`;
      const outputInstructions = `WhatsApp AI Agent Brief:
      Roles:
        - You speak for the business/owner. The other person is customer ${contactInstructionContext.displayName} at ${contactInstructionContext.phoneNumber}; that phone number belongs to them, never the business.
      Guidance:
        - Warm, human, \u22642 emojis, greet by name when known.
        - Keep replies under three concise lines and close with a clear next step or clarifying question.
        - Share phone numbers or website links through interactive options (buttons/lists/polls) when available; otherwise summarize them clearly in text.
        - Device context: ${deviceInstruction.description}
        - Button policy: ${deviceInstruction.buttonRule}
        - Buttons must always include the keys phone, url, and payload; populate the field relevant to the button type and set the others to null.
        - Prefer plain text for everyday support and only escalate to buttons/lists/polls when it helps the customer decide faster.
        - Never leak internal-only context or invent commitments.${customerProfileSection}${localizationSection}`;
      const systemInstruction = fixMessage(
        `${providerCfg.systemInstruction || ""}
${this.chatBotRuntimeConfig.systemInstruction || ""}
${outputInstructions}`.trim(),
        contact,
        false
      );
      const userMessage = trimmedMessages.join("\n");
      const structuredOutputEnabled = this.platformSupportsStructuredOutputs(platform, providerCfg);
      if (!structuredOutputEnabled) {
        logger.debug(
          { key: this.key, contactKey, platform },
          "Structured outputs unavailable for platform; falling back to plain text"
        );
      }
      const schemaContract = structuredOutputEnabled ? getChatBotSchemaForPlatform(platform) : void 0;
      try {
        this.incrementMetric("wa.replies.ai.requests", 1);
      } catch {
      }
      const aiRequestStartedAt = Date.now();
      const aiRequestStartIso = new Date(aiRequestStartedAt).toISOString();
      const promptMessageCount = trimmedMessages.length;
      let aiResponse;
      logger.debug(
        {
          key: this.key,
          contactKey,
          platform,
          promptMessages: promptMessageCount,
          historyEntries: historyEntryCount,
          aiRequestStart: aiRequestStartIso,
          structuredSchema: schemaContract?.title || null
        },
        "AI provider request initiated"
      );
      try {
        aiResponse = await generateAIResponse({
          platform,
          integrationConfig: providerCfg,
          systemInstruction,
          conversationHistory: history,
          userMessage,
          logger,
          enforceJsonResponse: structuredOutputEnabled,
          jsonSchema: schemaContract
        });
        const aiRequestEndedAt = Date.now();
        const aiDurationMs = aiRequestEndedAt - aiRequestStartedAt;
        const aiDurationSeconds = Number((aiDurationMs / 1e3).toFixed(3));
        logger.debug(
          {
            key: this.key,
            contactKey,
            aiDurationMs,
            aiDurationSeconds,
            aiRequestStart: aiRequestStartIso,
            aiRequestEnd: new Date(aiRequestEndedAt).toISOString(),
            platform,
            model: providerCfg.model || null,
            promptMessages: promptMessageCount,
            historyEntries: historyEntryCount,
            jsonSchema: structuredOutputEnabled ? true : false
          },
          "AI provider responded"
        );
      } catch (error2) {
        const aiRequestEndedAt = Date.now();
        const aiDurationMs = aiRequestEndedAt - aiRequestStartedAt;
        const aiDurationSeconds = Number((aiDurationMs / 1e3).toFixed(3));
        logger.debug(
          {
            key: this.key,
            contactKey,
            aiDurationMs,
            aiDurationSeconds,
            aiRequestStart: aiRequestStartIso,
            aiRequestEnd: new Date(aiRequestEndedAt).toISOString(),
            platform,
            promptMessages: promptMessageCount,
            historyEntries: historyEntryCount,
            err: error2?.message
          },
          "AI provider request failed"
        );
        throw error2;
      }
      logger.debug(
        { key: this.key, contactKey, responseType: typeof aiResponse, aiResponse },
        "AI response received"
      );
      const normalizedPayload = this.normalizeAiResponsePayload(aiResponse);
      let payloadErrorReason = null;
      let effectivePayload = normalizedPayload;
      if (!effectivePayload) {
        payloadErrorReason = this.describeAiPayloadFailure(aiResponse);
        logger.debug(
          {
            key: this.key,
            contactKey,
            payloadErrorReason,
            rawResponseType: typeof aiResponse
          },
          "AI payload invalid, no response sent"
        );
        await this.recordChatBotConversationMessage(
          contactKey,
          {
            senderType: "ai",
            messageType: "error",
            payload: { raw: aiResponse ?? null },
            metadata: {
              error: "invalid_ai_payload",
              reason: payloadErrorReason || "unknown",
              rawType: typeof aiResponse
            }
          },
          { skipSummarySchedule: true }
        );
        return;
      }
      const validatedPayload = validateChatBotPayloadShape(
        effectivePayload,
        logger
      );
      if (!validatedPayload) {
        payloadErrorReason = "schema_validation_failed";
        logger.debug(
          {
            key: this.key,
            contactKey,
            payloadErrorReason
          },
          "AI payload rejected after schema validation"
        );
        await this.recordChatBotConversationMessage(
          contactKey,
          {
            senderType: "ai",
            messageType: "error",
            payload: { raw: aiResponse ?? null },
            metadata: {
              error: "invalid_ai_payload",
              reason: payloadErrorReason,
              rawType: typeof aiResponse
            }
          },
          { skipSummarySchedule: true }
        );
        return;
      }
      effectivePayload = validatedPayload;
      if (effectivePayload?.type === "buttons") {
        effectivePayload = this.applyButtonPolicyToPayload(
          effectivePayload,
          rawDeviceSource
        );
      }
      let sendResult = null;
      try {
        sendResult = await this.sendAiPayload(contact, effectivePayload);
      } catch (error2) {
        logger.debug(
          { key: this.key, err: error2?.message },
          "Failed to send AI payload"
        );
        try {
          sentryCaptureException(error2);
        } catch {
        }
      }
      const sendSucceeded = Boolean(
        sendResult && (typeof sendResult.success === "boolean" ? sendResult.success : true)
      );
      if (sendSucceeded) {
        this.chatBotOwnerHoldMap.delete(contactKey);
        const responseId = sendResult?.result?.key?.id || sendResult?.key?.id || sendResult?.message?.key?.id || null;
        await this.recordChatBotConversationMessage(contactKey, {
          senderType: "ai",
          messageType: effectivePayload.type,
          payload: effectivePayload.type === "text" ? { text: effectivePayload.message } : effectivePayload,
          metadata: {
            responseId
          }
        });
        this.rememberLastAiMessage(contactKey, {
          messageId: responseId,
          text: this.getAiPayloadDisplayText(effectivePayload),
          messageType: effectivePayload.type
        });
        try {
          this.incrementMetric("wa.replies.ai.answers", 1);
          try {
            this.incrementMetric("wa.replies.ai", 1);
          } catch {
          }
        } catch {
        }
        logger.debug(
          { key: this.key },
          `AI reply sent after delay (${trimmedMessages.length} message chunk)`
        );
      } else {
        logger.debug(
          {
            key: this.key,
            contactKey,
            payloadType: effectivePayload.type,
            sendResultSuccess: sendResult?.success ?? null,
            sendResultDefined: Boolean(sendResult)
          },
          "AI payload send failed, no message delivered"
        );
      }
    } catch (error2) {
      logger.debug(
        { key: this.key, err: error2?.message },
        "ChatBot auto-reply failed during flush"
      );
    }
  }
  async cancelPendingChatBotReply(contact, reason = "cancelled") {
    const key = typeof contact === "string" ? contact.trim() : contact?.number ? String(contact.number).trim() : "";
    const entry = this.chatBotReplyBuffer.get(key);
    if (!entry) {
      return;
    }
    if (entry.timeout) {
      clearTimeout(entry.timeout);
    }
    this.chatBotReplyBuffer.delete(key);
    logger.debug(
      { key: this.key, number: key, reason },
      "Cancelled pending AI reply"
    );
  }
  derivePresenceStatus(presenceData) {
    if (typeof presenceData === "string") {
      return presenceData;
    }
    if (!presenceData || typeof presenceData !== "object") {
      return null;
    }
    return presenceData.lastKnownPresence || presenceData.presence || presenceData.status || presenceData.show || null;
  }
  isTypingPresence(status) {
    if (!status) {
      return false;
    }
    const normalized = String(status).toLowerCase();
    return normalized === "composing" || normalized === "recording";
  }
  isPresenceIdle(status) {
    if (!status) {
      return false;
    }
    const normalized = String(status).toLowerCase();
    return normalized === "paused" || normalized === "available" || normalized === "unavailable" || normalized === "idle";
  }
  async handlePresenceUpdate(update) {
    try {
      const { isJidBroadcast, isJidGroup } = await this.ensureBaileys();
      if (!update) {
        return;
      }
      const sock = this.instance?.sock;
      const selfJid = sock?.user?.id;
      const updateId = typeof update?.id === "string" ? update.id : "";
      const presenceEntries = [];
      if (update.presences && typeof update.presences === "object") {
        for (const [participantJid, presenceData] of Object.entries(
          update.presences
        )) {
          presenceEntries.push({
            jid: participantJid,
            presence: this.derivePresenceStatus(presenceData),
            isGroup: isJidGroup(updateId) || isJidBroadcast(updateId)
          });
        }
      } else if (updateId) {
        presenceEntries.push({
          jid: update.participant || updateId,
          presence: this.derivePresenceStatus(update),
          isGroup: isJidGroup(updateId) || isJidBroadcast(updateId)
        });
      }
      for (const entry of presenceEntries) {
        const { jid, presence, isGroup } = entry;
        if (!jid || !presence) {
          continue;
        }
        const normalizedPresence = String(presence).toLowerCase();
        if (!this.isTypingPresence(normalizedPresence) && !this.isPresenceIdle(normalizedPresence)) {
          continue;
        }
        const isOwner = selfJid && jid === selfJid;
        if (isOwner) {
          this.updateTypingState(SELF_TYPING_KEY, {
            typing: this.isTypingPresence(normalizedPresence),
            rawPresence: normalizedPresence,
            jid,
            isOwner: true
          });
          continue;
        }
        if (isGroup && (jid === updateId || !jid.includes("@"))) {
          continue;
        }
        const phoneNumber = await this.getPhoneNumberFromJid(jid).catch(
          () => null
        );
        const fallbackJid = jid.includes("@") ? jid.split("@")[0] : jid;
        const contactKey = phoneNumber || trimPhoneNumber(fallbackJid) || fallbackJid || jid;
        const normalizedKey = String(contactKey);
        this.updateTypingState(normalizedKey, {
          typing: this.isTypingPresence(normalizedPresence),
          rawPresence: normalizedPresence,
          jid,
          isOwner: false
        });
      }
    } catch (error2) {
      logger.debug(
        { key: this.key, err: error2?.message },
        "Failed to process presence.update"
      );
    }
  }
  updateTypingState(key, { typing, rawPresence, jid, isOwner }) {
    if (!key) {
      return;
    }
    const normalizedPresence = typeof rawPresence === "string" ? rawPresence.toLowerCase() : null;
    const computedTyping = typeof normalizedPresence === "string" ? this.isTypingPresence(normalizedPresence) : Boolean(typing);
    logger.debug(
      {
        key: this.key,
        contactKey: key,
        typing: computedTyping,
        rawPresence: normalizedPresence || rawPresence,
        isOwner
      },
      "Updating typing state"
    );
    const previous = this.typingState.get(key) || {};
    const now = Date.now();
    const wasTyping = Boolean(previous.typing);
    const hadTypingHistory = Boolean(
      previous.lastTypingStart || previous.lastTypingEnd
    );
    const previousTypingEnd = typeof previous.lastTypingEnd === "number" ? previous.lastTypingEnd : void 0;
    const previousHoldUntil = Number.isFinite(previous.nextAllowedReplyAt) ? previous.nextAllowedReplyAt : null;
    const isReleasePresence = normalizedPresence === "available" || normalizedPresence === "unavailable" || normalizedPresence === "idle";
    let nextAllowedReplyAt = previousHoldUntil;
    const typingDelayMs = this.getActiveChatBotDelays().typingMs;
    if (computedTyping) {
      nextAllowedReplyAt = now + typingDelayMs;
    } else if (isReleasePresence) {
      nextAllowedReplyAt = previousHoldUntil && previousHoldUntil > now ? previousHoldUntil : null;
    }
    const nextTyping = computedTyping;
    const shouldStampTypingEnd = !nextTyping && wasTyping && (!isReleasePresence || nextAllowedReplyAt && nextAllowedReplyAt > now);
    const nextState = {
      typing: nextTyping,
      rawPresence: normalizedPresence || rawPresence,
      jid,
      isOwner,
      lastTypingStart: nextTyping ? now : previous.lastTypingStart,
      lastTypingEnd: shouldStampTypingEnd ? now : previousTypingEnd,
      nextAllowedReplyAt,
      lastPresence: normalizedPresence || rawPresence
    };
    this.typingState.set(key, nextState);
    const hasTypingHistory = nextTyping || wasTyping || hadTypingHistory || Boolean(nextState.lastTypingEnd);
    const holdRemainder = Math.max(
      0,
      (Number.isFinite(nextAllowedReplyAt) ? nextAllowedReplyAt : 0) - now
    );
    if (nextTyping) {
      if (isOwner) {
        this.deferAllChatBotReplies("self_typing", holdRemainder);
      } else {
        this.deferChatBotReplyForContact(key, "contact_typing", holdRemainder);
      }
    } else if (hasTypingHistory && this.isPresenceIdle(normalizedPresence || rawPresence)) {
      const deferDelay = holdRemainder;
      if (isOwner) {
        this.deferAllChatBotReplies("self_typing_idle", deferDelay);
      } else {
        this.deferChatBotReplyForContact(
          key,
          "contact_typing_idle",
          deferDelay
        );
      }
    }
  }
  normalizeTypingState(key, now = Date.now()) {
    if (!key) {
      return null;
    }
    const state = this.typingState.get(key);
    if (!state) {
      return null;
    }
    const grace = this.typingGracePeriodMs;
    let typing = Boolean(state.typing);
    let lastTypingStart = Number.isFinite(state.lastTypingStart) ? state.lastTypingStart : null;
    let lastTypingEnd = Number.isFinite(state.lastTypingEnd) ? state.lastTypingEnd : null;
    let nextAllowedReplyAt = Number.isFinite(state.nextAllowedReplyAt) ? state.nextAllowedReplyAt : null;
    if (typing && lastTypingStart && now - lastTypingStart > grace) {
      typing = false;
      if (!lastTypingEnd) {
        lastTypingEnd = lastTypingStart;
      }
    }
    if (!typing && lastTypingEnd && now - lastTypingEnd > grace) {
      lastTypingEnd = null;
    }
    if (nextAllowedReplyAt && nextAllowedReplyAt <= now) {
      nextAllowedReplyAt = null;
    }
    const stateChanged = typing !== state.typing || lastTypingStart !== state.lastTypingStart || lastTypingEnd !== state.lastTypingEnd || nextAllowedReplyAt !== state.nextAllowedReplyAt;
    if (!typing && !lastTypingStart && !lastTypingEnd && !nextAllowedReplyAt) {
      this.typingState.delete(key);
      return null;
    }
    if (stateChanged) {
      this.typingState.set(key, {
        ...state,
        typing,
        lastTypingStart,
        lastTypingEnd,
        nextAllowedReplyAt
      });
    }
    if (!typing && !lastTypingEnd && !nextAllowedReplyAt) {
      return null;
    }
    return {
      ...state,
      typing,
      lastTypingStart,
      lastTypingEnd,
      nextAllowedReplyAt
    };
  }
  resolveTypingDelayMs(contactKey) {
    const key = contactKey ? String(contactKey) : contactKey;
    const now = Date.now();
    let maxDelay = 0;
    const considerState = (stateKey) => {
      const state = this.normalizeTypingState(stateKey, now);
      if (!state) {
        return;
      }
      const holdRemainder = Math.max(
        0,
        (Number.isFinite(state.nextAllowedReplyAt) ? state.nextAllowedReplyAt : 0) - now
      );
      if (state.typing) {
        const delay = holdRemainder || this.typingGracePeriodMs;
        maxDelay = Math.max(maxDelay, delay);
        return;
      }
      if (holdRemainder > 0) {
        maxDelay = Math.max(maxDelay, holdRemainder);
        return;
      }
      if (state.lastTypingEnd) {
        const elapsed = now - state.lastTypingEnd;
        if (elapsed < this.typingGracePeriodMs) {
          maxDelay = Math.max(maxDelay, this.typingGracePeriodMs - elapsed);
        }
      }
    };
    considerState(key);
    considerState(SELF_TYPING_KEY);
    return maxDelay;
  }
  applyOwnerConversationHold(contactKey, reason = "owner_message") {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return;
    }
    this.chatBotOwnerHoldMap.set(key, {
      reason,
      recordedAt: Date.now()
    });
  }
  resolveOwnerHoldDelayMs(contactKey) {
    const key = contactKey ? String(contactKey).trim() : "";
    if (!key) {
      return 0;
    }
    if (this.chatBotOwnerHoldMap.has(key)) {
      this.chatBotOwnerHoldMap.delete(key);
    }
    return 0;
  }
  resolveContactMessageIdleDelay(entry, now = Date.now()) {
    if (!entry) {
      return 0;
    }
    const lastMessageAt = Number.isFinite(entry.lastCustomerMessageAt) ? entry.lastCustomerMessageAt : Number.isFinite(entry.lastMessageAt) ? entry.lastMessageAt : null;
    if (!lastMessageAt) {
      return 0;
    }
    const delays = this.getActiveChatBotDelays();
    const followUpDelayMs = this.getFollowUpHoldDelayMs(delays);
    const idleWindowMs = Math.min(
      CHATBOT_CONTACT_IDLE_BUFFER_CEILING_MS,
      followUpDelayMs
    );
    if (!idleWindowMs) {
      return 0;
    }
    const quietUntil = lastMessageAt + idleWindowMs;
    if (quietUntil <= now) {
      return 0;
    }
    return quietUntil - now;
  }
  scheduleChatBotFlush(contact, entry, delayMs) {
    if (!entry || !contact?.number) {
      return;
    }
    if (entry.timeout) {
      clearTimeout(entry.timeout);
    }
    const waitMs = Math.max(0, Number(delayMs) || 0);
    entry.nextAttemptAt = Date.now() + waitMs;
    entry.timeout = setTimeout(() => {
      this.flushChatBotBuffer(contact).catch((err) => {
        logger.debug(
          { key: this.key, err: err?.message },
          "ChatBot flush failed"
        );
      });
    }, waitMs);
  }
  deferChatBotReplyForContact(contactKey, reason, minDelayMs = this.typingGracePeriodMs) {
    const key = String(contactKey);
    const entry = this.chatBotReplyBuffer.get(key);
    if (!entry || !entry.contact?.number) {
      return;
    }
    const now = Date.now();
    const typingDelay = this.resolveTypingDelayMs(key);
    const effectiveDelay = Math.max(minDelayMs || 0, typingDelay);
    const desiredTimestamp = now + effectiveDelay;
    if ((entry.nextAttemptAt || 0) >= desiredTimestamp) {
      return;
    }
    logger.debug(
      { key: this.key, contactKey: key, reason, effectiveDelay },
      "Deferring ChatBot reply"
    );
    this.scheduleChatBotFlush(entry.contact, entry, effectiveDelay);
    this.chatBotReplyBuffer.set(key, entry);
  }
  deferAllChatBotReplies(reason, minDelayMs = this.typingGracePeriodMs) {
    const entries = Array.from(this.chatBotReplyBuffer.entries());
    if (!entries.length) {
      return;
    }
    const now = Date.now();
    for (const [contactKey, entry] of entries) {
      if (!entry?.contact?.number) {
        continue;
      }
      const typingDelay = this.resolveTypingDelayMs(contactKey);
      const effectiveDelay = Math.max(minDelayMs || 0, typingDelay);
      if ((entry.nextAttemptAt || 0) >= now + effectiveDelay) {
        continue;
      }
      logger.debug(
        { key: this.key, contactKey, reason, effectiveDelay },
        "Deferring all ChatBot replies"
      );
      this.scheduleChatBotFlush(entry.contact, entry, effectiveDelay);
      this.chatBotReplyBuffer.set(contactKey, entry);
    }
  }
  applyTypingConstraintsForContact(contactKey) {
    const delay = this.resolveTypingDelayMs(contactKey);
    if (delay > 0) {
      this.deferChatBotReplyForContact(contactKey, "typing_constraint", delay);
    }
  }
  getMessageFromStore = (from, msgId) => {
    return this.store.messages[from].array.find((all) => all.key.id == msgId);
  };
  async getMessage(key) {
    const { proto } = await this.ensureBaileys();
    return handler.getMessage(key.id);
    if (this.store) {
      logger.debug({ key: this.key }, "getMessage store found");
      const msg = await this.store.loadMessage(key.remoteJid, key.id);
      logger.debug({ key: this.key }, "getMessage msg: " + msg);
      return msg?.message || void 0;
    }
    return proto.Message.create({});
  }
  async getInstanceDetail(key) {
    return {
      instance_key: key,
      phone_connected: this.instance?.online,
      user: this.instance?.online ? this.instance.sock?.user : {}
    };
  }
  get lidMappingStore() {
    return this.instance?.sock?.signalRepository?.lidMapping ?? null;
  }
  async getWhatsAppId(id, { preferLid = false, dialCode = "", mappingOnly = false } = {}) {
    logger.debug(
      { key: this.key, id, preferLid, dialCode, mappingOnly },
      "Resolving WhatsApp ID"
    );
    const rawId = typeof id === "string" ? id.trim() : "";
    if (!rawId) {
      return rawId;
    }
    if (rawId.includes("@g.us") || rawId.includes("@newsletter")) {
      return rawId;
    }
    const baileys = await this.ensureBaileys();
    const isPnUser = baileys?.isPnUser;
    const isLidUser = baileys?.isLidUser;
    const normalizeLidFormat = (value) => {
      if (typeof value !== "string") {
        return value;
      }
      if (value.endsWith("@l.id")) {
        return `${value.slice(0, -5)}@lid`;
      }
      return value;
    };
    const normalizePnJid = (value) => {
      if (typeof value !== "string") {
        return value;
      }
      if (value.endsWith("@s.whatsapp.net")) {
        return value;
      }
      return `${trimPhoneNumber(value) || value}@s.whatsapp.net`;
    };
    if (rawId.includes("@")) {
      if (preferLid && isPnUser?.(rawId)) {
        const lid = await this.lidMappingStore?.getLIDForPN(rawId);
        if (lid) {
          return normalizeLidFormat(lid);
        }
      }
      if (!preferLid && (isLidUser?.(rawId) || rawId.endsWith("@lid"))) {
        const lidCandidates = [];
        lidCandidates.push(rawId);
        if (rawId.endsWith("@lid")) {
          lidCandidates.push(rawId.replace(/@lid$/, "@l.id"));
        } else if (rawId.endsWith("@l.id")) {
          lidCandidates.push(`${rawId.slice(0, -5)}@lid`);
        }
        for (const candidate of lidCandidates) {
          const mapped = await this.lidMappingStore?.getPNForLID(candidate);
          if (mapped) {
            const normalizedPn = baileys?.jidNormalizedUser?.(mapped) ?? mapped.replace(/:\d+@/, "@");
            return normalizedPn;
          }
        }
      }
      return normalizeLidFormat(rawId);
    }
    if (rawId.includes("-")) {
      return `${rawId}@g.us`;
    }
    const digits = trimPhoneNumber(rawId);
    if (!digits) {
      return rawId;
    }
    const digitsWithoutLeadingZero = rawId.startsWith("0") || digits.startsWith("0") ? digits.replace(/^0+/, "") : digits;
    const normalizedDigits = digitsWithoutLeadingZero || digits;
    if (!normalizedDigits) {
      return rawId;
    }
    return normalizePnJid(`${normalizedDigits}@s.whatsapp.net`);
  }
  async getPhoneNumberJid(id) {
    const rawId = typeof id === "string" ? id.trim() : "";
    if (!rawId) {
      return null;
    }
    const baileys = await this.ensureBaileys();
    const isPnUser = baileys?.isPnUser;
    const isLidUser = baileys?.isLidUser;
    if (isPnUser?.(rawId)) {
      return rawId;
    }
    const looksLikeLid = rawId.endsWith("@lid") || rawId.endsWith("@l.id") || isLidUser?.(rawId);
    if (looksLikeLid && this.lidMappingStore) {
      const lidCandidates = [rawId];
      if (rawId.endsWith("@lid")) {
        lidCandidates.push(rawId.replace(/@lid$/, "@l.id"));
      } else if (rawId.endsWith("@l.id")) {
        lidCandidates.push(`${rawId.slice(0, -5)}@lid`);
      }
      for (const candidate of lidCandidates) {
        if (typeof candidate !== "string" || !candidate.length) {
          continue;
        }
        const mapped = await this.lidMappingStore.getPNForLID(candidate);
        if (mapped) {
          const normalizedMapped = baileys?.jidNormalizedUser?.(mapped) ?? mapped.replace(/:\d+@/, "@");
          return normalizedMapped;
        }
      }
    }
    if (rawId.includes("@")) {
      return rawId;
    }
    if (rawId.includes("-")) {
      return `${rawId}@g.us`;
    }
    const digits = trimPhoneNumber(rawId);
    if (!digits) {
      return null;
    }
    const digitsWithoutLeadingZero = rawId.startsWith("0") || digits.startsWith("0") ? digits.replace(/^0+/, "") : digits;
    const normalizedDigits = digitsWithoutLeadingZero || digits;
    if (!normalizedDigits) {
      return null;
    }
    return `${normalizedDigits}@s.whatsapp.net`;
  }
  async getPhoneNumberFromJid(jid) {
    if (!jid) {
      return null;
    }
    const baileys = await this.ensureBaileys();
    const { isPnUser, isLidUser, jidNormalizedUser: jidNormalizedUser2 } = baileys ?? {};
    const extractUserFromJid = (candidate) => {
      if (!candidate || typeof candidate !== "string") {
        return null;
      }
      let normalized = candidate;
      if (typeof jidNormalizedUser2 === "function") {
        try {
          normalized = jidNormalizedUser2(candidate);
        } catch (error2) {
          logger.debug(
            { key: this.key, jid: candidate, err: error2?.message },
            "getPhoneNumberFromJid: jidNormalizedUser failed"
          );
        }
      } else if (candidate.includes(":")) {
        normalized = candidate.replace(/:\d+@/, "@");
      }
      const atIndex = normalized.indexOf("@");
      const userPart = atIndex >= 0 ? normalized.slice(0, atIndex) : normalized;
      if (!userPart) {
        return null;
      }
      const colonIndex = userPart.indexOf(":");
      const baseUser = colonIndex >= 0 ? userPart.slice(0, colonIndex) : userPart;
      return baseUser || null;
    };
    const looksLikeLid = typeof jid === "string" && (jid.endsWith("@lid") || jid.endsWith("@l.id")) || isLidUser?.(jid);
    if (isPnUser?.(jid)) {
      return extractUserFromJid(jid);
    }
    if (looksLikeLid && this.lidMappingStore) {
      const lidCandidates = [];
      if (typeof jid === "string" && jid.length) {
        lidCandidates.push(jid);
        if (jid.endsWith("@lid")) {
          lidCandidates.push(jid.replace(/@lid$/, "@l.id"));
        } else if (jid.endsWith("@l.id")) {
          lidCandidates.push(`${jid.slice(0, -5)}@lid`);
        }
      }
      for (const candidate of lidCandidates) {
        try {
          const pnJid = await this.lidMappingStore.getPNForLID(candidate);
          if (!pnJid) {
            continue;
          }
          const mappedUser = extractUserFromJid(pnJid);
          if (mappedUser) {
            return mappedUser;
          }
        } catch (error2) {
          logger.debug(
            { key: this.key, lidJid: candidate, err: error2?.message },
            "getPhoneNumberFromJid: LID lookup failed"
          );
        }
      }
    }
    if (typeof jid === "string") {
      return extractUserFromJid(jid);
    }
    return null;
  }
  async mapLidToPhoneJid(lidJid) {
    if (typeof lidJid !== "string") {
      return null;
    }
    const sanitizeLid = (value) => {
      if (typeof value !== "string") {
        return null;
      }
      const trimmed = value.trim();
      if (!trimmed.length) {
        return null;
      }
      if (trimmed.endsWith("@lid")) {
        return trimmed;
      }
      if (trimmed.endsWith("@l.id")) {
        return `${trimmed.slice(0, -5)}@lid`;
      }
      return null;
    };
    const canonicalLid = sanitizeLid(lidJid);
    if (!canonicalLid) {
      return null;
    }
    const mappingStore = this.lidMappingStore;
    if (!mappingStore) {
      return null;
    }
    const lidCandidates = [canonicalLid];
    const legacyVariant = canonicalLid.replace(/@lid$/, "@l.id");
    if (legacyVariant !== canonicalLid) {
      lidCandidates.push(legacyVariant);
    }
    for (const candidate of lidCandidates) {
      try {
        const pnFromLid = await mappingStore.getPNForLID(candidate);
        if (!pnFromLid) {
          continue;
        }
        const baileys = await this.ensureBaileys().catch(() => null);
        const normalizeJid = baileys?.jidNormalizedUser;
        return normalizeJid?.(pnFromLid) ?? pnFromLid.replace(/:\d+@/, "@");
      } catch (error2) {
        logger.debug(
          { key: this.key, lidJid: candidate, err: error2?.message },
          "mapLidToPhoneJid failed"
        );
      }
    }
    return null;
  }
  async verifyIds(ids, { preferLid = true, dialCode = "" } = {}) {
    const normalizeCandidateJid = (jid) => {
      if (!jid) {
        return "";
      }
      if (typeof jid === "string") {
        return jid;
      }
      if (typeof jid === "object") {
        if (typeof jid.jid === "string") {
          return jid.jid;
        }
        if (typeof jid.id === "string") {
          return jid.id;
        }
        if (typeof jid.user === "string") {
          const server = typeof jid.server === "string" ? jid.server : "s.whatsapp.net";
          return `${jid.user}@${server}`;
        }
      }
      if (typeof jid === "number" || typeof jid === "bigint") {
        return String(jid);
      }
      return "";
    };
    const ensureResultShape = (res, jid) => {
      const normalizedJid = normalizeCandidateJid(res?.jid ?? jid);
      if (res) {
        if (res.jid === normalizedJid) {
          return res;
        }
        return { ...res, jid: normalizedJid };
      }
      return { exists: false, jid: normalizedJid };
    };
    const toRawId = (value) => {
      if (value === null || value === void 0) {
        return "";
      }
      if (typeof value === "string") {
        return value.trim();
      }
      return String(value).trim();
    };
    const buildPhoneNumberCandidates = (rawValue, sanitizedDialCode) => {
      const seenNumbers = /* @__PURE__ */ new Set();
      const allNumbers = [];
      const verifiableNumbers = [];
      const registerNumber = (value, { forceVerifiable = false } = {}) => {
        const digits = trimPhoneNumber(value || "");
        if (!digits || seenNumbers.has(digits)) {
          return { digits: null, isValid: false };
        }
        seenNumbers.add(digits);
        allNumbers.push(digits);
        const isValid = (0, import_libphonenumber_js.isValidPhoneNumber)(`+${digits}`);
        if (isValid || forceVerifiable) {
          verifiableNumbers.push(digits);
        }
        return { digits, isValid };
      };
      const ensureRegionalVariants = (digits) => {
        if (!digits) {
          return [];
        }
        const variants = [];
        const pushVariant = (value, options = {}) => {
          if (!value) {
            return;
          }
          const normalizedOptions = Object.keys(options).length ? { value, ...options } : value;
          variants.push(normalizedOptions);
        };
        if (digits.startsWith("55")) {
          if (digits.length === 12) {
            pushVariant(`${digits.slice(0, 4)}9${digits.slice(4)}`);
          } else if (digits.length >= 13 && digits.charAt(4) === "9") {
            pushVariant(`${digits.slice(0, 4)}${digits.slice(5)}`);
          }
        }
        if (digits.startsWith("52")) {
          const remainder = digits.slice(2);
          if (remainder.length) {
            if (remainder.startsWith("1")) {
              const withoutOne = remainder.slice(1);
              if (withoutOne.length) {
                pushVariant(`52${withoutOne}`, { forceVerifiable: true });
              }
            } else {
              pushVariant(`521${remainder}`, { forceVerifiable: true });
            }
          }
        }
        return variants;
      };
      const base = registerNumber(rawValue);
      const queueForVariants = [];
      if (base.digits) {
        queueForVariants.push(base.digits);
      }
      if (!base.isValid && base.digits && sanitizedDialCode) {
        if (!base.digits.startsWith(sanitizedDialCode)) {
          const combined = registerNumber(`${sanitizedDialCode}${base.digits}`);
          if (combined.digits) {
            queueForVariants.push(combined.digits);
          }
        }
      }
      for (let idx = 0; idx < queueForVariants.length; idx += 1) {
        const digits = queueForVariants[idx];
        const variants = ensureRegionalVariants(digits);
        for (const variantEntry of variants) {
          const variantValue = typeof variantEntry === "string" ? variantEntry : typeof variantEntry?.value === "string" ? variantEntry.value : "";
          if (!variantValue) {
            continue;
          }
          const forceVerifiable = typeof variantEntry === "object" && variantEntry !== null ? Boolean(variantEntry.forceVerifiable) : false;
          const registered = registerNumber(variantValue, {
            forceVerifiable
          });
          if (registered.digits) {
            queueForVariants.push(registered.digits);
          }
        }
      }
      const verifiableJids = verifiableNumbers.map(
        (digits) => `${digits}@s.whatsapp.net`
      );
      return {
        allNumbers,
        verifiableJids
      };
    };
    const inputs = Array.isArray(ids) ? ids : [ids];
    if (!inputs.length) {
      return [];
    }
    let jidNormalizer = null;
    try {
      const baileysModule = await this.ensureBaileys();
      if (typeof baileysModule?.jidNormalizedUser === "function") {
        jidNormalizer = baileysModule.jidNormalizedUser;
      }
    } catch {
    }
    const buildPlan = async (input) => {
      const rawId = toRawId(input);
      const plan = {
        rawId,
        candidates: [],
        retryMap: /* @__PURE__ */ new Map(),
        possibleNumbers: []
      };
      if (!rawId) {
        return plan;
      }
      const sanitizedDialCode = trimPhoneNumber(dialCode || "");
      const seen = /* @__PURE__ */ new Set();
      const addCandidate = (jid, { prepend = false } = {}) => {
        const normalized = normalizeCandidateJid(jid);
        if (typeof normalized !== "string" || !normalized || seen.has(normalized)) {
          return;
        }
        if (prepend) {
          plan.candidates.splice(0, 0, normalized);
        } else {
          plan.candidates.push(normalized);
        }
        seen.add(normalized);
      };
      const registerFallback = (source, target) => {
        const normalizedSource = normalizeCandidateJid(source);
        const normalizedTarget = normalizeCandidateJid(target);
        if (!normalizedSource || !normalizedTarget || normalizedSource === normalizedTarget) {
          return;
        }
        const existing = plan.retryMap.get(normalizedSource);
        if (existing) {
          if (!existing.includes(normalizedTarget)) {
            existing.push(normalizedTarget);
          }
        } else {
          plan.retryMap.set(normalizedSource, [normalizedTarget]);
        }
      };
      if (rawId.includes("@")) {
        const normalizedInput = normalizeCandidateJid(rawId);
        if (!normalizedInput) {
          return plan;
        }
        const looksLikeLid = normalizedInput.endsWith("@lid") || normalizedInput.endsWith("@l.id");
        const looksLikePn = normalizedInput.endsWith("@s.whatsapp.net");
        if (looksLikePn) {
          if (preferLid) {
            const lid = await this.getWhatsAppId(normalizedInput, {
              preferLid: true,
              dialCode,
              mappingOnly: true
            });
            if (lid && lid !== normalizedInput) {
              addCandidate(lid, { prepend: true });
              registerFallback(lid, normalizedInput);
              registerFallback(normalizedInput, lid);
            }
          }
          addCandidate(normalizedInput);
        } else if (looksLikeLid) {
          if (!preferLid) {
            const pn = await this.getWhatsAppId(normalizedInput, {
              preferLid: false,
              dialCode,
              mappingOnly: true
            });
            if (pn && pn !== normalizedInput) {
              addCandidate(pn, { prepend: true });
              registerFallback(pn, normalizedInput);
              registerFallback(normalizedInput, pn);
            }
          }
          addCandidate(normalizedInput, { prepend: preferLid });
        } else {
          addCandidate(normalizedInput);
        }
        plan.possibleJids = [...plan.candidates];
        return plan;
      }
      const phonePlan = buildPhoneNumberCandidates(rawId, sanitizedDialCode);
      plan.possibleNumbers = phonePlan.allNumbers.slice();
      for (const pnJid of phonePlan.verifiableJids) {
        addCandidate(pnJid);
      }
      for (const digits of phonePlan.allNumbers) {
        if (typeof digits !== "string" || !digits.length) {
          continue;
        }
        addCandidate(`${digits}@s.whatsapp.net`);
      }
      if (preferLid && phonePlan.verifiableJids.length) {
        const mapped = await Promise.all(
          phonePlan.verifiableJids.map(
            (jid) => this.getWhatsAppId(jid, {
              preferLid: true,
              dialCode,
              mappingOnly: true
            })
          )
        );
        for (let i2 = 0; i2 < mapped.length; i2 += 1) {
          const lid = mapped[i2];
          const pnJid = phonePlan.verifiableJids[i2];
          if (lid && lid !== pnJid) {
            addCandidate(lid, { prepend: true });
            registerFallback(lid, pnJid);
            registerFallback(pnJid, lid);
          }
        }
      }
      if (!plan.candidates.length) {
        const fallbackDigits = plan.possibleNumbers[0] || trimPhoneNumber(rawId);
        if (fallbackDigits) {
          addCandidate(`${fallbackDigits}@s.whatsapp.net`);
        } else {
          addCandidate(rawId);
        }
      }
      return plan;
    };
    try {
      const plans = await Promise.all(inputs.map((input) => buildPlan(input)));
      const toLookupKey = (value) => {
        const normalized = normalizeCandidateJid(value);
        if (!normalized) {
          return "";
        }
        if (jidNormalizer && normalized.includes("@")) {
          try {
            const normalizedUser = jidNormalizer(normalized);
            if (normalizedUser) {
              return normalizeCandidateJid(normalizedUser);
            }
          } catch {
          }
        }
        return normalized;
      };
      const candidateKeyCache = /* @__PURE__ */ new Map();
      const getLookupKey = (value) => {
        if (candidateKeyCache.has(value)) {
          return candidateKeyCache.get(value);
        }
        const key = toLookupKey(value);
        candidateKeyCache.set(value, key);
        return key;
      };
      const sanitizeJidList = (values) => {
        const sanitized = [];
        for (const value of values || []) {
          const normalized = normalizeCandidateJid(value);
          if (typeof normalized === "string" && normalized) {
            sanitized.push(normalized);
          }
        }
        return sanitized;
      };
      const candidateOrder = [];
      const candidateSeen = /* @__PURE__ */ new Set();
      for (const plan of plans) {
        for (const candidate of plan.candidates) {
          if (typeof candidate !== "string") {
            continue;
          }
          if (!candidateSeen.has(candidate)) {
            candidateSeen.add(candidate);
            candidateOrder.push(candidate);
          }
        }
      }
      const sock = this.instance.sock;
      const resultMap = /* @__PURE__ */ new Map();
      const callOnWhatsApp = async (candidates, stageLabel) => {
        if (!candidates.length || !sock?.onWhatsApp) {
          return { mapByKey: /* @__PURE__ */ new Map(), error: null };
        }
        try {
          const rawResults = await sock.onWhatsApp(...candidates);
          const entries = Array.isArray(rawResults) ? rawResults : rawResults ? [rawResults] : [];
          const mapByKey = /* @__PURE__ */ new Map();
          for (const entry of entries) {
            const key = toLookupKey(entry?.jid ?? entry);
            if (!key) {
              continue;
            }
            mapByKey.set(key, ensureResultShape(entry, key));
          }
          return { mapByKey, error: null };
        } catch (lookupError) {
          logger.debug(
            {
              key: this.key,
              err: lookupError?.message,
              stack: lookupError?.stack,
              candidateTypes: candidates.map((c) => typeof c)
            },
            stageLabel === "primary" ? "verifyIds primary lookup failed" : "verifyIds fallback lookup failed"
          );
          return { mapByKey: /* @__PURE__ */ new Map(), error: lookupError };
        }
      };
      const safePrimaryCandidates = sanitizeJidList(candidateOrder);
      const { mapByKey: primaryLookup } = await callOnWhatsApp(
        safePrimaryCandidates,
        "primary"
      );
      for (const candidate of safePrimaryCandidates) {
        const lookupKey = getLookupKey(candidate);
        const lookup = lookupKey ? primaryLookup.get(lookupKey) : null;
        const shaped = lookup ? ensureResultShape(lookup, candidate) : ensureResultShape(null, candidate);
        resultMap.set(candidate, shaped);
      }
      const finalResults = new Array(plans.length);
      const defaultResults = new Array(plans.length);
      const fallbackRefs = /* @__PURE__ */ new Map();
      const fallbackOrder = [];
      for (let index = 0; index < plans.length; index += 1) {
        const plan = plans[index];
        if (!plan.candidates.length) {
          const fallback = { exists: false, jid: plan.rawId };
          defaultResults[index] = fallback;
          finalResults[index] = fallback;
          continue;
        }
        let resolved = null;
        let fallbackResult = { exists: false, jid: plan.candidates[0] };
        for (const candidate of plan.candidates) {
          if (typeof candidate !== "string") {
            continue;
          }
          const lookup = resultMap.get(candidate) ?? ensureResultShape(null, candidate);
          if (lookup?.exists) {
            resolved = lookup;
            break;
          }
          fallbackResult = lookup;
          const fallbackTargets = plan.retryMap.get(candidate) || [];
          for (const fallbackJid of fallbackTargets) {
            if (typeof fallbackJid !== "string") {
              continue;
            }
            let refs = fallbackRefs.get(fallbackJid);
            if (!refs) {
              refs = [];
              fallbackRefs.set(fallbackJid, refs);
              fallbackOrder.push(fallbackJid);
            }
            refs.push(index);
          }
        }
        if (resolved) {
          finalResults[index] = resolved;
          defaultResults[index] = resolved;
        } else {
          finalResults[index] = fallbackResult;
          defaultResults[index] = fallbackResult;
        }
      }
      const safeFallbackOrder = sanitizeJidList(fallbackOrder);
      if (safeFallbackOrder.length) {
        const { mapByKey: fallbackLookup } = await callOnWhatsApp(
          safeFallbackOrder,
          "fallback"
        );
        for (const fallbackJid of safeFallbackOrder) {
          const lookupKey = getLookupKey(fallbackJid);
          const lookup = lookupKey ? fallbackLookup.get(lookupKey) : null;
          if (!lookup) {
            continue;
          }
          const shaped = ensureResultShape(lookup, fallbackJid);
          const refs = fallbackRefs.get(fallbackJid) || [];
          for (const planIndex of refs) {
            if (shaped?.exists) {
              finalResults[planIndex] = shaped;
            } else if (!finalResults[planIndex]?.exists) {
              finalResults[planIndex] = shaped;
            }
          }
        }
      }
      for (let i2 = 0; i2 < finalResults.length; i2 += 1) {
        if (!finalResults[i2]) {
          finalResults[i2] = defaultResults[i2] ?? {
            exists: false,
            jid: plans[i2]?.rawId ?? ""
          };
        }
      }
      for (let i2 = 0; i2 < finalResults.length; i2 += 1) {
        const plan = plans[i2];
        const possibleJids = Array.isArray(plan?.candidates) ? [...plan.candidates] : [];
        const possibleNumbers = Array.isArray(plan?.possibleNumbers) ? [...plan.possibleNumbers] : [];
        finalResults[i2] = {
          ...finalResults[i2],
          possibleJids,
          possibleNumbers
        };
      }
      return finalResults;
    } catch (error2) {
      logger.debug({ key: this.key }, "verifyIds Error: " + error2);
      logger.debug(
        {
          key: this.key,
          err: error2?.message,
          stack: error2?.stack,
          inputs: inputs.map((input) => toRawId(input))
        },
        "verifyIds Error"
      );
      return inputs.map((input) => {
        const rawId = toRawId(input);
        return { exists: false, jid: normalizeCandidateJid(rawId) };
      });
    }
  }
  async verifyId(id, { preferLid = true, dialCode = "" } = {}) {
    const rawId = typeof id === "string" ? id.trim() : "";
    const [result] = await this.verifyIds([id], { preferLid, dialCode });
    if (result) {
      return result.jid ? result : { ...result, jid: rawId };
    }
    return { exists: false, jid: rawId };
  }
  //update profile name
  async updateProfileName(name) {
    try {
      const result = await this.instance.sock?.updateProfileName(name);
      if (result) {
        await dbUtil.updateInstance({ _id: this.key }, { profileName: name });
      }
      return result;
    } catch (e) {
      logger.debug({ key: this.key }, `updateProfileName Error: ${e}`);
      return null;
    }
  }
  //update profile status
  async updateProfileStatus(status) {
    try {
      const result = await this.instance.sock?.updateProfileStatus(status);
      if (result) {
        await dbUtil.updateInstance({ _id: this.key }, { about: status });
      }
      return result;
    } catch (e) {
      logger.debug({ key: this.key }, `updateProfileStatus Error: ${e}`);
      return null;
    }
  }
  async getProfilePicture(id) {
    try {
      return await this.instance.sock?.profilePictureUrl(id, "image");
    } catch {
      try {
        return await this.instance.sock?.profilePictureUrl(id);
      } catch {
        return "";
      }
    }
  }
  //update profile picture
  async updateProfilePicture(id, filePath) {
    try {
      const result = await this.instance.sock?.updateProfilePicture(id, {
        url: filePath
      });
      const ppUrl = await this.getProfilePicture(id).catch(() => "");
      await dbUtil.updateInstance({ _id: this.key }, { ppUrl });
      return result;
    } catch (e) {
      logger.debug({ key: this.key }, "updateProfilePicture Error: " + e);
      return null;
    }
  }
  // Optimized function to send a relay message with simulated typing/presence
  async sendMessageWithDelay(jid, messageContent, typingDelay = 50, isRelayMessage = true) {
    const baileys = await this.ensureBaileys();
    const { delay, isPnUser, isLidUser } = baileys;
    const startTime = performance.now();
    if (!this.instance?.sock) {
      logger.debug({ key: this.key }, "Invalid instance: sock is missing");
      return {
        success: false,
        error: "Invalid instance: sock is missing"
      };
    }
    if (!isPnUser?.(jid) && !isLidUser?.(jid)) {
      logger.debug({ key: this.key }, "Invalid user JID: " + jid);
      return {
        success: false,
        error: "Invalid user JID: " + jid
      };
    }
    if (!messageContent) {
      logger.debug({ key: this.key }, "Invalid messageContent");
      return {
        success: false,
        error: "Invalid messageContent"
      };
    }
    try {
      const sock = this.instance.sock;
      await sock.presenceSubscribe(jid);
      await delay(randomMilliseconds(150, 300));
      await sock.sendPresenceUpdate("available", jid);
      await delay(randomMilliseconds(200, 500));
      await sock.sendPresenceUpdate("paused", jid);
      await delay(randomMilliseconds(300, 600));
      await sock.sendPresenceUpdate("composing", jid);
      await delay(randomMilliseconds(200, 500));
      await sock.sendPresenceUpdate("paused", jid);
      await delay(typingDelay);
      let result;
      if (isRelayMessage) {
        result = await sock.relayMessage(
          jid,
          messageContent.message,
          messageContent.options
        );
      } else {
        result = await sock.sendMessage(jid, messageContent).then(handler.addMessage);
      }
      await sock.sendPresenceUpdate("paused", jid);
      try {
        this.incrementMetric("wa.message.sent", 1);
        try {
          this.recordMessageType(messageContent);
        } catch {
        }
      } catch {
      }
      return {
        success: true,
        totalTimeMs: Math.round(performance.now() - startTime),
        jid,
        messageContent,
        result
      };
    } catch (error2) {
      logger.debug({ key: this.key }, `sendMessageWithDelay error: ${error2}`);
      try {
        this.incrementMetric("wa.message.error", 1, {
          messageContentType: messageContent && typeof messageContent === "object" && messageContent.message ? Object.keys(messageContent.message)[0] : "unknown"
        });
      } catch {
      }
      try {
        sentryAddBreadcrumb(
          "wa.send",
          String(error2?.message ?? error2),
          {},
          SentryLevels.Error
        );
        sentryCaptureException(error2);
      } catch {
      }
      return {
        success: false,
        error: error2.message,
        totalTimeMs: Math.round(performance.now() - startTime)
      };
    }
  }
  async wuid() {
    return this.instance.sock?.user?.id?.replace(/:\d+/, "");
  }
  async sendTemplateMessage({ to, template, data }) {
    return new Promise(async (resolve, _reject) => {
      try {
        let success = false;
        var targetJid = to;
        const setting = await dbUtil.getSetting();
        const mediaList = (template.mediaType ?? "gallery") === "gallery" ? template.media ?? [] : template.mediaUrls ?? [];
        if (setting?.sending?.configuration?.sendMedia === "before" && [1, 3, 5, 7].includes(template.type)) {
          await asyncForEach(mediaList, async (media, _idx) => {
            const mediaObj = media.path ? media : { path: media, caption: null };
            await this.sendMediaFile(targetJid, mediaObj, data);
            success = true;
          });
        }
        if ([0, 1].includes(template.type)) {
          logger.debug({ key: this.key }, "SEND TEXT");
          if (!isEmpty(template.message)) {
            const result = await this.sendTextMessage(
              targetJid,
              template.message,
              data
            );
            success = result ? true : false;
          }
        } else if ([2, 3].includes(template.type)) {
          logger.debug({ key: this.key }, "SEND BUTTONS");
          const btnData = {
            text: template.message,
            buttons: template.buttons,
            footerText: template.footer
          };
          const result = await this.sendButtonMessage(targetJid, btnData, data);
          success = result ? true : false;
        } else if ([4, 5].includes(template.type)) {
          logger.debug({ key: this.key }, "SEND MENU");
          const menuList = (template.menus || []).map(
            (menuItem, i2) => menuItem && {
              title: menuItem.title ?? "",
              description: menuItem.description ?? "",
              rowId: "menu-" + i2
            }
          ).filter(Boolean);
          const listData = {
            title: template.menuTitle ?? "",
            description: template.message ?? "",
            footer: template.footer ?? "",
            buttonText: template.buttonText ?? "",
            sections: [{ title: template.menuMiddle, rows: menuList }],
            listType: 0
          };
          const result = await this.sendListMessage(targetJid, listData, data);
          success = result ? true : false;
        } else if ([6, 7].includes(template.type)) {
          if (!isEmpty(template.message)) {
            await this.sendTextMessage(targetJid, template.message, data);
          }
          const pollMessage = {
            name: template.poll.question,
            values: template.poll.options,
            selectableCount: template.poll.multiSelect === true ? 0 : 1
          };
          const result = await this.sendPollMessage(
            targetJid,
            pollMessage,
            data
          );
          success = result ? true : false;
        }
        if (setting?.sending?.configuration.sendMedia === "after" && [1, 3, 5, 7].includes(template.type)) {
          await asyncForEach(mediaList, async (media, _idx) => {
            const mediaObj = media.path ? media : { path: media, caption: null };
            await this.sendMediaFile(targetJid, mediaObj, data);
            success = true;
          });
        }
        return resolve({
          status: success,
          message: success ? "Template message sent" : "Failed to send template message"
        });
      } catch (error2) {
        logger.debug({ key: this.key }, `sendTemplateMessage Error: ${error2}`);
        return resolve({
          status: false,
          message: "Failed to send template message",
          error: error2.message
        });
      }
    });
  }
  async sendTextMessage(to, message, data = {}) {
    try {
      const { generateMessageID } = await this.ensureBaileys();
      const targetJid = await this.getWhatsAppId(to).catch((err) => {
        logger.debug(
          { key: this.key, err: err?.message, to },
          "sendTextMessage: failed to resolve WhatsApp ID"
        );
        return null;
      });
      if (!targetJid) {
        throw new Error(`Invalid target JID for recipient: ${to}`);
      }
      logger.info({ key: this.key, to, targetJid }, "Sending text message");
      logger.debug({ key: this.key }, "sendTextMessage body prepared");
      const result = await this.sendMessageWithDelay(targetJid, {
        message: {
          conversation: fixMessage(message, data)
        },
        options: {
          messageId: generateMessageID()
          //additionalNodes:[]
        }
      });
      return result;
    } catch (error2) {
      logger.debug({ key: this.key }, "sendTextMessage Error: " + error2);
      return false;
    }
  }
  getMimeType(p) {
    p = p.trim();
    const ext = import_node_path4.default.extname(p).toLowerCase();
    if (mime_types_default[ext]) {
      return mime_types_default[ext];
    }
    const MIME_TYPE = import_mime_types.default.lookup(p);
    return false !== MIME_TYPE ? MIME_TYPE : "application/octet-stream";
  }
  generateUploadMessage = async ({ type, path: path7, mimeType, thumb }) => {
    logger.debug({ key: this.key }, `generateUploadMessage type: ${type}`);
    const { generateWAMessageContent } = await this.ensureBaileys();
    const buffer = await readFileData(path7);
    const filter = { [type]: buffer };
    filter.contextInfo = { disappearingMode: { initiator: 0 } };
    filter.viewOnce = false;
    if (type === "audio") {
      filter.mimetype = mimeType;
      if (mimeType?.includes("ogg") || mimeType?.includes("opus")) {
        filter.mimetype = "audio/ogg; codecs=opus";
        filter.ptt = true;
      }
    }
    if ((type === "image" || type === "video") && thumb) {
      filter.jpegThumbnail = thumb;
    }
    logger.debug({ key: this.key }, "generateUploadMessage: Filter:", filter);
    const generated = await generateWAMessageContent(filter, {
      upload: this.instance.sock.waUploadToServer
    });
    logger.debug(
      { key: this.key },
      "generateUploadMessage Message:",
      generated
    );
    return generated?.[`${type}Message`] || null;
  };
  async sendMediaFile(to, mediaData, data = {}) {
    try {
      const { proto, generateMessageID } = await this.ensureBaileys();
      let { path: filePath, caption, thumb } = mediaData;
      filePath = fixMessage(filePath, data, false);
      const targetJid = to;
      logger.debug({ key: this.key }, `Media :: Path :: ${filePath}`);
      logger.debug({ key: this.key }, `Media :: Thumb :: ${thumb}`);
      let isValidFile = false;
      const setting = await dbUtil.getSetting();
      if (filePath.startsWith("http")) {
        const ext = import_node_path4.default.extname(filePath);
        const baseName = import_node_path4.default.basename(filePath, ext);
        const downloadFilename = `${baseName}-${(0, import_uuid2.v4)()}${ext}`;
        const result2 = await downloadFile(filePath, downloadFilename);
        if (result2.status) {
          isValidFile = true;
          filePath = result2.filePath;
        }
      } else {
        if (!filePath.startsWith(downloadPath)) {
          const ext = import_node_path4.default.extname(filePath);
          const baseName = import_node_path4.default.basename(filePath, ext);
          const destPath = import_node_path4.default.join(
            downloadPath,
            `${baseName}-${(0, import_uuid2.v4)()}${ext}`
          );
          copyFileOrDir(filePath, destPath);
          filePath = destPath;
        }
        isValidFile = checkFileOrDirExists(filePath);
      }
      logger.debug({ key: this.key }, `Media :: Is Valid :: ${isValidFile}`);
      if (!isValidFile) {
        logger.debug({ key: this.key }, "Send media file not exist");
        return false;
      }
      const mimeType = this.getMimeType(filePath);
      const fileType = mimeType.split("/")[0];
      let mediaType = "document", headerType = HEADER_TYPE.DOCUMENT;
      if (fileType === "image") {
        mediaType = "image";
        headerType = HEADER_TYPE.IMAGE;
      } else if (fileType === "video") {
        mediaType = "video";
        headerType = HEADER_TYPE.VIDEO;
      } else if (fileType === "audio") {
        mediaType = "audio";
        headerType = HEADER_TYPE.EMPTY;
      }
      let buffer = mediaCache[filePath]?.buffer;
      if (!buffer) {
        buffer = await readFileData(filePath);
        mediaCache[filePath] = { buffer };
      }
      var fileName = mediaData.fileName || import_node_path4.default.basename(filePath);
      if (fileName.includes("$$")) {
        fileName = `${fileName.split("$$")[0]}${import_node_path4.default.extname(filePath)}`;
      }
      const mediaMessage = await this.generateUploadMessage({
        type: mediaType,
        path: filePath,
        thumb: null,
        mimeType,
        fileName: fileName || import_node_path4.default.basename(filePath)
      });
      if (mediaType === "document") {
        mediaMessage.fileName = fileName || import_node_path4.default.basename(filePath);
      }
      let message = {};
      const isSendWithButtons = caption?.showButton;
      if (isSendWithButtons) {
        const isReplyButton = isReplyButtonOnly(caption.buttons);
        const buttons = processButton({
          buttons: caption.buttons,
          format: isReplyButton ? "reply" : "interactive",
          unsubscribeText: setting?.sending?.unsubscribe?.keyword,
          data
        });
        if (isReplyButton) {
          message = {
            documentWithCaptionMessage: {
              message: {
                buttonsMessage: {
                  [`${mediaType}Message`]: mediaMessage,
                  contentText: fixMessage(caption.message ?? "", data),
                  footerText: fixMessage(caption.footer ?? "", data),
                  contextInfo: { disappearingMode: { initiator: 2 } },
                  buttons,
                  headerType
                }
              }
            }
          };
        } else {
          message = {
            interactiveMessage: proto.Message.InteractiveMessage.create({
              header: proto.Message.InteractiveMessage.Body.create({
                title: `${BLANK_SPACE}`,
                [`${mediaType}Message`]: mediaMessage,
                hasMediaAttachment: true
              }),
              body: proto.Message.InteractiveMessage.Body.create({
                text: fixMessage(caption.message ?? "", data)
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: fixMessage(caption.footer ?? "", data)
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons
              })
            })
          };
        }
      } else {
        if (!isEmpty(caption)) {
          mediaMessage.caption = fixMessage(caption.message ?? "", data);
        }
        message = { [`${mediaType}Message`]: mediaMessage };
      }
      message.messageContextInfo = { messageSecret: (0, import_crypto2.randomBytes)(32) };
      logger.debug({ key: this.key }, "sendMediaFile: message:", message);
      const result = await this.sendMessageWithDelay(targetJid, {
        message,
        options: {
          messageId: generateMessageID(),
          additionalNodes
        }
      });
      logger.debug({ key: this.key }, "sendMediaFile result: " + result);
      return result;
    } catch (error2) {
      logger.debug({ key: this.key }, "sendMediaFile Error: " + error2);
      return false;
    }
  }
  async downloadProfile(of) {
    try {
      const { jidNormalizedUser: jidNormalizedUser2 } = await this.ensureBaileys();
      const ppUrl = await this.instance.sock?.profilePictureUrl(
        jidNormalizedUser2(of),
        "image"
      );
      logger.debug({ key: this.key }, "DownloadProfile: " + ppUrl);
      return ppUrl;
    } catch {
      try {
        const ppUrl = await this.instance.sock?.profilePictureUrl(
          jidNormalizedUser(of)
        );
        logger.debug({ key: this.key }, "DownloadProfile: " + ppUrl);
        return ppUrl;
      } catch {
        logger.debug({ key: this.key }, "DownloadProfile: failed");
        return "";
      }
    }
  }
  async getUserStatus(of) {
    const pnJid = await this.getPhoneNumberJid(of);
    if (!pnJid) {
      return null;
    }
    await this.verifyId(pnJid);
    const status = await this.instance.sock?.fetchStatus(pnJid);
    return status;
  }
  async blockUnblock(to, data) {
    const pnJid = await this.getPhoneNumberJid(to);
    if (!pnJid) {
      return null;
    }
    await this.verifyId(pnJid);
    const status = await this.instance.sock?.updateBlockStatus(pnJid, data);
    return status;
  }
  sender() {
    const userId = this.instance.sock?.user;
    if (!userId) {
      return "";
    }
    if (userId.phoneNumber) {
      return `${userId.phoneNumber}`;
    }
    return userId.id;
  }
  async sendButtonMessage(to, btnData, data = {}) {
    try {
      const { proto, generateMessageID } = await this.ensureBaileys();
      const targetJid = to;
      const setting = await dbUtil.getSetting();
      logger.debug({ key: this.key }, "sendButtonMessage :: " + btnData);
      const isReplyButton = isReplyButtonOnly(btnData.buttons);
      logger.debug({ key: this.key }, "isReplyButton :: " + isReplyButton);
      var message = {};
      if (isReplyButton) {
        const buttons = processButton({
          buttons: btnData.buttons,
          format: "reply",
          unsubscribeText: setting?.sending?.unsubscribe?.keyword,
          data
        });
        message = {
          documentWithCaptionMessage: {
            message: {
              buttonsMessage: {
                contentText: fixMessage(btnData.text ?? "", data),
                footerText: fixMessage(btnData.footerText ?? "", data),
                contextInfo: {
                  disappearingMode: {
                    initiator: 2
                  }
                },
                buttons,
                headerType: HEADER_TYPE.EMPTY
              }
            }
          }
        };
      } else {
        const buttons = processButton({
          buttons: btnData.buttons,
          format: "interactive",
          unsubscribeText: setting?.sending?.unsubscribe?.keyword,
          data
        });
        message = {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            // header: proto.Message.InteractiveMessage.Header.create({
            //   title: `${BLANK_SPACE}`,
            //   hasMediaAttachment: false,
            // }),
            body: proto.Message.InteractiveMessage.Body.create({
              text: fixMessage(btnData.text ?? "", data)
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: fixMessage(btnData.footerText ?? "", data)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons
            })
          })
        };
      }
      logger.debug({ key: this.key }, "sendButtonMessage :: " + message);
      const result = await this.sendMessageWithDelay(targetJid, {
        message,
        options: {
          messageId: generateMessageID(),
          additionalNodes
        }
      });
      return result;
    } catch (error2) {
      logger.error({ key: this.key, error: error2 }, "sendButtonMessage error");
      return false;
    }
  }
  async sendPollMessage(to, pollData, data = {}) {
    try {
      const targetJid = to;
      logger.info({ key: this.key, to }, "Sending poll message");
      const message = {
        poll: {
          name: fixMessage(pollData.name ?? "", data),
          values: pollData.values.map((x) => {
            return fixMessage(x, data, false);
          }),
          selectableCount: pollData.selectableCount
        }
      };
      logger.debug({ key: this.key }, "sendPollMessage payload prepared");
      const result = await this.sendMessageWithDelay(
        targetJid,
        message,
        // {
        //   message,
        //   options: {
        //     messageId: generateMessageID(),
        //     additionalNodes: additionalNodesForPoll,
        //   },
        // },
        50,
        false
      );
      return {
        ...result?.result,
        pollResult: {
          id: result?.result?.key?.id,
          messageSecret: result?.result?.message?.messageContextInfo?.messageSecret,
          pollMessage: result?.result?.message?.pollCreationMessage || result?.result?.message?.pollCreationMessageV3,
          poll: []
        }
      };
    } catch (e) {
      logger.debug({ key: this.key }, "sendPollMessage: Error: " + e);
      return false;
    }
  }
  async sendContactMessage(to, data = {}) {
    try {
      const targetJid = await this.getWhatsAppId(to);
      if (!targetJid) {
        throw new Error(`Unable to resolve contact JID for ${to}`);
      }
      const fullName = data.fullName || data.name || "Unknown";
      const contactPayload = {
        fullName,
        organization: data.organization || "",
        phoneNumber: trimPhoneNumber(
          data.phoneNumber ?? data.number ?? (typeof to === "string" ? to : "")
        ) || "",
        ...data
      };
      if (!contactPayload.phoneNumber) {
        throw new Error("Contact phone number missing");
      }
      const vcard = genVc_default(contactPayload);
      const result = await this.instance.sock?.sendMessage(targetJid, {
        contacts: {
          displayName: fullName,
          contacts: [{ displayName: fullName, vcard }]
        }
      }).then(handler.addMessage);
      logger.debug(
        { key: this.key, targetJid },
        "sendContactMessage result: " + result
      );
      return result;
    } catch (e) {
      logger.debug(
        { key: this.key, to },
        "sendContactMessage: Error: " + e
      );
      return false;
    }
  }
  async sendListMessage(to, listData, data = {}) {
    try {
      const { proto, generateMessageID } = await this.ensureBaileys();
      const targetJid = to;
      const isInteractiveMessage = false;
      var message = {};
      if (isInteractiveMessage) {
        const buttons = [
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: fixMessage(listData.buttonText, data),
              sections: [
                {
                  title: fixMessage(listData.sections[0].title, data),
                  highlight_label: "",
                  rows: listData.sections[0].rows.map((x) => {
                    return {
                      header: BLANK_SPACE,
                      title: fixMessage(x.title, data, false),
                      description: fixMessage(x.description, data),
                      id: x.rowId
                    };
                  })
                }
              ]
            })
          }
        ];
        message = {
          interactiveMessage: proto.Message.InteractiveMessage.create({
            // header: proto.Message.InteractiveMessage.Header.create({
            //   title: `${BLANK_SPACE} Menu`,
            //   hasMediaAttachment: false, // false if you don't want to send media with it
            // }),
            body: proto.Message.InteractiveMessage.Body.create({
              text: fixMessage(listData.description ?? "", data)
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: fixMessage(listData.footer ?? "", data)
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons
            })
          })
        };
      } else {
        message = {
          messageContextInfo: {
            deviceListMetadataVersion: 2,
            deviceListMetadata: {}
          },
          listMessage: proto.Message.ListMessage.create({
            title: fixMessage(listData.title, data),
            description: fixMessage(listData.description, data),
            buttonText: fixMessage(listData.buttonText, data),
            footerText: fixMessage(listData.footer, data),
            listType: 1,
            sections: listData.sections.map((x) => {
              return {
                title: fixMessage(x.title, data),
                rows: x.rows.map((y) => {
                  return {
                    title: fixMessage(y.title, data, false),
                    description: fixMessage(y.description, data),
                    rowId: y.rowId
                  };
                })
              };
            })
            //headerType: 0,
          })
        };
      }
      logger.debug({ key: this.key }, "sendListMessage :: " + message);
      const result = await this.sendMessageWithDelay(targetJid, {
        message,
        options: {
          messageId: generateMessageID(),
          additionalNodes: isInteractiveMessage ? additionalNodes : additionalNodesForList
        }
      });
      return result;
    } catch (error2) {
      logger.debug({ key: this.key }, "sendListMessage: Error: " + error2);
      return false;
    }
  }
  /// Group Creator ///
  parseParticipants = async (users) => {
    return await Promise.all(
      users.map(async (user) => await this.getWhatsAppId(user))
    );
  };
  async getAllGroups() {
    let groups = Object.values(
      await this.instance.sock?.groupFetchAllParticipating()
    );
    return groups;
  }
  async getGroups() {
    try {
      logger.debug({ key: this.key }, "getGroups started");
      const rawGroups = await this.instance.sock?.groupFetchAllParticipating();
      if (!rawGroups || Object.keys(rawGroups).length === 0) {
        return [];
      }
      const groups = Object.values(rawGroups);
      const result = await Promise.all(
        groups.map(async (group) => {
          let owner_details = null;
          if (group.owner) {
            try {
              owner_details = await this.getContactDetails(group.owner);
            } catch (err) {
              logger.debug(
                { key: this.key, owner: group.owner, err: err.message },
                "Owner resolve failed"
              );
            }
          }
          const computedSize = typeof group.size === "number" ? group.size : Array.isArray(group.participants) ? group.participants.length : 0;
          return {
            id: group.id,
            subject: group.subject,
            size: computedSize,
            creation: group.creation,
            owner: group.owner,
            owner_details,
            isCommunity: inferIsCommunityGroup(group),
            desc: group.desc,
            descId: group.descId,
            restrict: group.restrict,
            announce: group.announce
          };
        })
      );
      logger.debug(
        { key: this.key, count: result.length },
        "getGroups finished"
      );
      return result;
    } catch (error2) {
      logger.debug({ key: this.key }, "getGroups Error: " + error2);
      return [];
    }
  }
  async getGroupsMembers(groupIds = []) {
    try {
      logger.debug({ key: this.key, groupIds }, "getGroupsMembers started");
      const sock = this.instance.sock;
      if (!sock || !Array.isArray(groupIds) || !groupIds.length) {
        return [];
      }
      const normalizeGroupId = async (rawId) => {
        const candidate = typeof rawId === "string" ? rawId.trim() : "";
        if (!candidate) {
          return null;
        }
        if (candidate.endsWith("@g.us")) {
          return candidate;
        }
        if (candidate.includes("-")) {
          return `${candidate.replace(/@.*$/, "")}@g.us`;
        }
        try {
          const resolved = await this.getWhatsAppId(candidate, {
            preferLid: false
          });
          if (typeof resolved === "string" && resolved.endsWith("@g.us")) {
            return resolved;
          }
        } catch (error2) {
          logger.debug(
            { key: this.key, id: candidate, err: error2?.message },
            "getGroupsMembers: normalizeGroupId failed"
          );
        }
        return candidate.endsWith("@g.us") ? candidate : null;
      };
      const normalizedGroupIds = (await Promise.all(groupIds.map((id) => normalizeGroupId(id)))).filter(Boolean);
      if (!normalizedGroupIds.length) {
        return [];
      }
      const metadatas = await Promise.all(
        normalizedGroupIds.map(async (id) => {
          const cachedMeta = this.getCachedGroupMetadata(id);
          if (cachedMeta) {
            return cachedMeta;
          }
          try {
            const fetched = await sock.groupMetadata(id);
            if (fetched) {
              this.cacheGroupMetadata(fetched, GROUP_METADATA_TTL_SECONDS);
            }
            return fetched;
          } catch (error2) {
            logger.debug(
              { key: this.key, id, err: error2?.message },
              "getGroupsMembers: groupMetadata failed"
            );
            return null;
          }
        })
      );
      const validGroups = metadatas.filter(Boolean);
      if (!validGroups.length) {
        return [];
      }
      const result = await Promise.all(
        validGroups.map(async (group, _index) => {
          const participants = Array.isArray(group.participants) ? group.participants : [];
          const members = await Promise.all(
            participants.map(async (participant) => {
              const participantEntry = participant && typeof participant === "object" ? participant : { id: participant };
              const participantId = typeof participantEntry.id === "string" ? participantEntry.id : typeof participantEntry.jid === "string" ? participantEntry.jid : typeof participantEntry.phoneNumber === "string" ? participantEntry.phoneNumber : String(participantEntry.id ?? "");
              const canonicalLid = this.toCanonicalLidJid(
                participantEntry.id ?? participantId
              );
              const normalizePhoneCandidate = (candidate) => {
                if (typeof candidate !== "string") {
                  return null;
                }
                const trimmed = candidate.trim();
                if (!trimmed.length) {
                  return null;
                }
                let canonical = this.toCanonicalPhoneJid(trimmed);
                if (!canonical) {
                  const digitsOnly = trimPhoneNumber(trimmed);
                  if (digitsOnly.length) {
                    canonical = this.toCanonicalPhoneJid(
                      `${digitsOnly}@s.whatsapp.net`
                    );
                  }
                }
                return canonical;
              };
              const phoneCandidates = [];
              if (typeof participantEntry.phoneNumber === "string") {
                phoneCandidates.push(participantEntry.phoneNumber);
              }
              if (typeof participantEntry.jid === "string") {
                phoneCandidates.push(participantEntry.jid);
              }
              if (typeof participantId === "string") {
                phoneCandidates.push(participantId);
              }
              let phoneJid = null;
              for (const candidate of phoneCandidates) {
                const canonical = normalizePhoneCandidate(candidate);
                if (canonical) {
                  phoneJid = canonical;
                  break;
                }
              }
              if (!phoneJid && canonicalLid) {
                try {
                  const mapped = await this.mapLidToPhoneJid(canonicalLid);
                  const normalizedMapped = normalizePhoneCandidate(mapped);
                  if (normalizedMapped) {
                    phoneJid = normalizedMapped;
                  }
                } catch (error2) {
                  logger.debug(
                    { key: this.key, lid: canonicalLid, err: error2?.message },
                    "getGroupsMembers: mapLidToPhoneJid failed"
                  );
                }
              }
              const detailsLookupJid = phoneJid ?? canonicalLid ?? participantId;
              const rawDetails = await this.getContactDetails(detailsLookupJid);
              let details = rawDetails ?? {
                jid: detailsLookupJid,
                name: null,
                phone: null,
                lid: canonicalLid ?? null,
                is_business: false,
                status: null,
                profile_pic: null,
                verified_name: null,
                notify: null,
                business_profile: null
              };
              const ensurePhoneDigits = (candidateJid) => {
                if (typeof candidateJid !== "string") {
                  return null;
                }
                const digits = trimPhoneNumber(candidateJid);
                if (!digits.length) {
                  return null;
                }
                let isValidDigits = false;
                try {
                  isValidDigits = (0, import_libphonenumber_js.isValidPhoneNumber)(`+${digits}`);
                } catch {
                  isValidDigits = false;
                }
                if (!isValidDigits && digits.length < 6) {
                  return null;
                }
                return digits;
              };
              const preferredDigits = ensurePhoneDigits(phoneJid) ?? ensurePhoneDigits(detailsLookupJid);
              if (preferredDigits && !details.phone) {
                details = { ...details, phone: preferredDigits };
              }
              if (phoneJid && (!details.jid || details.jid === participantId || details.jid === detailsLookupJid)) {
                details = { ...details, jid: phoneJid };
              }
              if (!details.lid && canonicalLid) {
                details = { ...details, lid: canonicalLid };
              }
              const role = (() => {
                if (participantEntry.admin === "superadmin" || participantEntry.isSuperAdmin) {
                  return "superadmin";
                }
                if (participantEntry.admin === "admin" || participantEntry.isAdmin) {
                  return "admin";
                }
                if (participantEntry?.admin) {
                  return String(participantEntry.admin).toLowerCase();
                }
                return "member";
              })();
              const accountType = details?.is_business ? "business" : "personal";
              const profilePic = details?.profile_pic || details?.profilePictureUrl || details?.profilePicture || null;
              return {
                ...details,
                groupId: group.id,
                groupSubject: group.subject,
                role,
                accountType,
                profilePic
              };
            })
          );
          let ownerDetails = null;
          if (group.owner) {
            try {
              ownerDetails = await this.getContactDetails(group.owner);
            } catch (error2) {
              logger.debug(
                { key: this.key, owner: group.owner, err: error2?.message },
                "getGroupsMembers: owner resolve failed"
              );
            }
          }
          let profilePictureUrl = null;
          if (sock?.profilePictureUrl) {
            try {
              profilePictureUrl = await sock.profilePictureUrl(group.id).catch(() => null);
            } catch (error2) {
              logger.debug(
                { key: this.key, id: group.id, err: error2?.message },
                "getGroupsMembers: profilePictureUrl fetch failed"
              );
            }
          }
          return {
            id: group.id,
            subject: group.subject,
            size: members.length,
            owner: group.owner ?? null,
            owner_details: ownerDetails,
            desc: group.desc ?? null,
            descId: group.descId ?? null,
            restrict: Boolean(group.restrict),
            announce: Boolean(group.announce),
            creation: group.creation ?? null,
            isCommunity: inferIsCommunityGroup(group),
            profilePictureUrl,
            participants: members
          };
        })
      );
      logger.debug(
        { key: this.key, count: result.length },
        "getGroupsMembers finished"
      );
      return result;
    } catch (err) {
      logger.debug(
        { key: this.key, err: err.message },
        "getGroupsMembers failed"
      );
      return [];
    }
  }
  createEmptyContactStoreCache() {
    return {
      dirty: true,
      lastBuildAt: 0,
      size: 0,
      byJid: /* @__PURE__ */ new Map(),
      byPhoneJid: /* @__PURE__ */ new Map(),
      byLidJid: /* @__PURE__ */ new Map(),
      lidToPhone: /* @__PURE__ */ new Map(),
      phoneToLid: /* @__PURE__ */ new Map(),
      nameByJid: /* @__PURE__ */ new Map()
    };
  }
  resetContactStoreCache() {
    this.contactStoreCache = this.createEmptyContactStoreCache();
  }
  handleContactsMutation(payload, mutationType = "update") {
    try {
      this.resetContactStoreCache();
      const records = Array.isArray(payload) ? payload : [payload];
      if (!records.length) {
        return;
      }
      const normalizeStatus = (status) => {
        if (typeof status !== "string") {
          return null;
        }
        const trimmed = status.trim();
        return trimmed.length ? trimmed : null;
      };
      const normalizePhoneDigits = (value) => {
        if (typeof value !== "string") {
          return null;
        }
        const digits = trimPhoneNumber(value);
        return digits.length ? digits : null;
      };
      for (const record of records) {
        const entry = record && typeof record === "object" ? { ...record } : { id: record };
        const candidateKeys = /* @__PURE__ */ new Set();
        const registerKey = (value) => {
          if (typeof value !== "string") {
            return;
          }
          const trimmed = value.trim();
          if (!trimmed.length) {
            return;
          }
          candidateKeys.add(trimmed);
        };
        registerKey(entry.id);
        registerKey(entry.jid);
        registerKey(entry.wid);
        registerKey(entry.user);
        registerKey(entry.contactId);
        registerKey(entry.participant);
        registerKey(entry.lid);
        registerKey(entry.lid_jid);
        registerKey(entry.lidJid);
        const phoneDigits = normalizePhoneDigits(
          entry.phoneNumber ?? entry.phone ?? entry.number ?? null
        );
        if (phoneDigits) {
          registerKey(phoneDigits);
          registerKey(`${phoneDigits}@s.whatsapp.net`);
        }
        if (!candidateKeys.size) {
          continue;
        }
        if (String(mutationType).toLowerCase() === "delete") {
          for (const key of candidateKeys) {
            this.deleteCachedContactMetadata(key);
            this.cacheContactStatus(key, null);
          }
          continue;
        }
        const status = normalizeStatus(entry.status ?? entry.statusMessage);
        const name = this.resolveContactDisplayName(entry);
        const notifyValue = entry.notify ?? entry.displayName ?? entry.pushName ?? entry.pushname ?? entry.name ?? null;
        const verifiedName = entry.verifiedName ?? entry.verified_name ?? null;
        const profilePic = entry.profilePictureUrl ?? entry.profile_pic ?? entry.profilePicture ?? entry.picture ?? null;
        const lidValue = entry.lid ?? entry.lidJid ?? entry.lid_jid ?? entry.lidjid ?? null;
        const businessProfile = entry.businessProfile ?? entry.business_profile ?? null;
        const isBusiness = Boolean(
          entry.isBusiness ?? entry.is_business ?? verifiedName ?? (businessProfile ? true : false)
        );
        const shouldCacheMetadata = Boolean(
          name || notifyValue || verifiedName || profilePic || status || businessProfile || phoneDigits || lidValue
        );
        if (!shouldCacheMetadata) {
          continue;
        }
        const metadataPayload = {
          name,
          notify: notifyValue,
          is_business: isBusiness,
          verified_name: verifiedName,
          profile_pic: profilePic,
          status,
          phone: phoneDigits,
          lid: lidValue,
          business_profile: businessProfile
        };
        this.cacheContactMetadata(Array.from(candidateKeys), metadataPayload);
      }
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "handleContactsMutation error");
    }
  }
  handleGroupsUpsert(payload) {
    try {
      const records = Array.isArray(payload) ? payload : [payload];
      if (!records.length) {
        return;
      }
      for (const entry of records) {
        if (!entry || typeof entry !== "object") {
          continue;
        }
        const id = typeof entry.id === "string" ? entry.id : typeof entry.jid === "string" ? entry.jid : typeof entry.key === "string" ? entry.key : null;
        if (!id) {
          continue;
        }
        const cached = this.getCachedGroupMetadata(id) ?? {};
        const normalizedEntry = {
          ...cached,
          ...entry,
          id,
          lastUpsertTs: Date.now()
        };
        this.cacheGroupMetadata(normalizedEntry, GROUP_METADATA_TTL_SECONDS);
      }
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "handleGroupsUpsert error");
    }
  }
  async handleGroupsUpdate(payload) {
    try {
      const records = Array.isArray(payload) ? payload : [payload];
      if (!records.length) {
        return;
      }
      for (const entry of records) {
        if (!entry || typeof entry !== "object") {
          continue;
        }
        const id = typeof entry.id === "string" ? entry.id : typeof entry.jid === "string" ? entry.jid : typeof entry.key === "string" ? entry.key : null;
        if (!id) {
          continue;
        }
        const cached = this.getCachedGroupMetadata(id);
        const effectiveKeys = Object.keys(entry).filter(
          (key) => !["id", "jid", "key"].includes(key)
        );
        if (!cached && !effectiveKeys.length) {
          await this.refreshGroupMetadata(id, "update-empty");
          continue;
        }
        if (!cached && effectiveKeys.length) {
          const normalized = { ...entry, id };
          this.cacheGroupMetadata(normalized, GROUP_METADATA_TTL_SECONDS);
          continue;
        }
        if (!cached) {
          await this.refreshGroupMetadata(id, "update-cache-miss");
          continue;
        }
        const merged = {
          ...cached,
          ...entry,
          id,
          lastUpdateTs: Date.now()
        };
        this.cacheGroupMetadata(merged, GROUP_METADATA_TTL_SECONDS);
      }
    } catch (error2) {
      logger.debug({ key: this.key, error: error2 }, "handleGroupsUpdate error");
    }
  }
  async handleGroupParticipantsUpdate(payload) {
    try {
      const records = Array.isArray(payload) ? payload : [payload];
      if (!records.length) {
        return;
      }
      for (const entry of records) {
        if (!entry || typeof entry !== "object") {
          continue;
        }
        const id = typeof entry.id === "string" ? entry.id : typeof entry.jid === "string" ? entry.jid : typeof entry.groupId === "string" ? entry.groupId : null;
        if (!id) {
          continue;
        }
        const participantsRaw = Array.isArray(entry.participants) ? entry.participants : entry.participants ? [entry.participants] : [];
        if (!participantsRaw.length) {
          await this.refreshGroupMetadata(id, "participants-empty");
          continue;
        }
        const cached = this.getCachedGroupMetadata(id);
        if (!cached || !Array.isArray(cached.participants)) {
          await this.refreshGroupMetadata(id, "participants-cache-miss");
          continue;
        }
        const resolveParticipantId = (participant) => {
          if (typeof participant === "string") {
            return participant;
          }
          if (!participant || typeof participant !== "object") {
            return null;
          }
          return participant.id ?? participant.participant ?? participant.jid ?? participant.user ?? null;
        };
        const participantMap = /* @__PURE__ */ new Map();
        for (const participant of cached.participants) {
          const participantId = resolveParticipantId(participant);
          if (!participantId) {
            continue;
          }
          participantMap.set(participantId, {
            ...typeof participant === "object" ? participant : {},
            id: participantId
          });
        }
        const action = String(entry.action ?? entry.type ?? "").toLowerCase();
        let requiresRefresh = false;
        for (const participant of participantsRaw) {
          const participantId = resolveParticipantId(participant);
          if (!participantId) {
            requiresRefresh = true;
            break;
          }
          if (action === "add" || action === "join") {
            const existing = participantMap.get(participantId) ?? {};
            participantMap.set(participantId, {
              ...existing,
              ...typeof participant === "object" ? participant : {},
              id: participantId
            });
          } else if (action === "remove" || action === "leave") {
            participantMap.delete(participantId);
          } else if (action === "promote") {
            const existing = participantMap.get(participantId) ?? {
              id: participantId
            };
            participantMap.set(participantId, {
              ...existing,
              admin: existing.admin === "superadmin" ? existing.admin : "admin"
            });
          } else if (action === "demote") {
            const existing = participantMap.get(participantId);
            if (existing) {
              participantMap.set(participantId, {
                ...existing,
                admin: null
              });
            }
          } else {
            requiresRefresh = true;
            break;
          }
        }
        if (requiresRefresh) {
          await this.refreshGroupMetadata(
            id,
            `participants-${action || "unknown"}`
          );
          continue;
        }
        const updatedParticipants = Array.from(participantMap.values());
        this.cacheGroupMetadata(
          {
            ...cached,
            participants: updatedParticipants,
            participantsCachedAt: Date.now(),
            participantsLastAction: action || null
          },
          GROUP_METADATA_TTL_SECONDS
        );
      }
    } catch (error2) {
      logger.debug(
        { key: this.key, error: error2 },
        "handleGroupParticipantsUpdate error"
      );
    }
  }
  toCanonicalPhoneJid(value) {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    if (!trimmed.length) {
      return null;
    }
    const cleaned = trimmed.replace(/::\d+@/, "@").replace(/:\d+@/, "@");
    if (cleaned.endsWith("@s.whatsapp.net")) {
      return cleaned;
    }
    if (cleaned.endsWith("@c.us")) {
      return cleaned.replace(/@c\.us$/, "@s.whatsapp.net");
    }
    return null;
  }
  toCanonicalLidJid(value) {
    if (typeof value !== "string") {
      return null;
    }
    const trimmed = value.trim();
    if (!trimmed.length) {
      return null;
    }
    const cleaned = trimmed.replace(/::\d+@/, "@").replace(/:\d+@/, "@");
    if (cleaned.endsWith("@lid")) {
      return cleaned;
    }
    if (cleaned.endsWith("@l.id")) {
      return `${cleaned.slice(0, -5)}@lid`;
    }
    return null;
  }
  getContactKeyVariants(value) {
    const variants = /* @__PURE__ */ new Set();
    if (typeof value !== "string") {
      return variants;
    }
    const trimmed = value.trim();
    if (!trimmed.length) {
      return variants;
    }
    const add = (candidate) => {
      if (typeof candidate !== "string") {
        return;
      }
      const normalized = candidate.trim();
      if (normalized.length) {
        variants.add(normalized);
      }
    };
    add(trimmed);
    add(trimmed.toLowerCase());
    const normalizeJidFn = typeof this.baileysLib?.jidNormalizedUser === "function" ? this.baileysLib.jidNormalizedUser : null;
    if (normalizeJidFn) {
      try {
        const normalized = normalizeJidFn(trimmed);
        add(normalized);
      } catch {
      }
    }
    if (trimmed.includes("::")) {
      add(trimmed.replace(/::\d+@/, "@"));
    }
    if (trimmed.includes(":")) {
      add(trimmed.replace(/:\d+@/, "@"));
    }
    if (trimmed.endsWith("@s.whatsapp.net")) {
      add(trimmed.replace(/@s\.whatsapp\.net$/, "@c.us"));
    }
    if (trimmed.endsWith("@c.us")) {
      add(trimmed.replace(/@c\.us$/, "@s.whatsapp.net"));
    }
    if (trimmed.endsWith("@lid")) {
      add(trimmed.replace(/@lid$/, "@l.id"));
    } else if (trimmed.endsWith("@l.id")) {
      add(`${trimmed.slice(0, -5)}@lid`);
    }
    return variants;
  }
  resolveContactDisplayName(contact) {
    if (!contact || typeof contact !== "object") {
      return null;
    }
    const keys = [
      "displayName",
      "name",
      "pushName",
      "pushname",
      "notify",
      "verifiedName",
      "businessName",
      "shortName",
      "formattedName",
      "fullName",
      "givenName",
      "username",
      "vname"
    ];
    for (const key of keys) {
      const value = contact[key];
      if (typeof value === "string") {
        const trimmed = value.trim();
        if (trimmed.length) {
          return trimmed;
        }
      }
    }
    return null;
  }
  ensureContactStoreCache(force = false) {
    if (!this.contactStoreCache || force) {
      this.resetContactStoreCache();
    }
    const cache = this.contactStoreCache;
    if (!force && !cache.dirty) {
      return cache;
    }
    cache.byJid.clear();
    cache.byPhoneJid.clear();
    cache.byLidJid.clear();
    cache.lidToPhone.clear();
    cache.phoneToLid.clear();
    cache.nameByJid.clear();
    const sock = this.instance?.sock;
    if (!sock) {
      cache.dirty = false;
      cache.size = 0;
      cache.lastBuildAt = Date.now();
      return cache;
    }
    const sources = [];
    const contactsSource = sock.contacts ?? null;
    const storeContacts = this.instance?.store?.contacts ?? sock.store?.contacts ?? null;
    if (contactsSource) {
      sources.push(contactsSource);
    }
    if (storeContacts) {
      sources.push(storeContacts);
    }
    const addJidCandidates = (collector, value) => {
      if (value === null || value === void 0) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach((item) => addJidCandidates(collector, item));
        return;
      }
      if (typeof value === "object") {
        const maybe = value?.id ?? value?.jid ?? value?.wid ?? value?.user ?? value?.lid;
        if (typeof maybe === "string") {
          addJidCandidates(collector, maybe);
        }
        return;
      }
      for (const variant of this.getContactKeyVariants(String(value))) {
        collector.add(variant);
      }
    };
    const addPhoneDigits = (collector, raw) => {
      if (raw === null || raw === void 0) {
        return;
      }
      const digits = trimPhoneNumber(String(raw));
      if (!digits) {
        return;
      }
      addJidCandidates(collector, `${digits}@s.whatsapp.net`);
    };
    const processContactEntry = (contact, key) => {
      if (!contact && !key) {
        return;
      }
      const entry = contact ?? {};
      const variants = /* @__PURE__ */ new Set();
      addJidCandidates(variants, key);
      addJidCandidates(variants, entry.id);
      addJidCandidates(variants, entry.jid);
      addJidCandidates(variants, entry.wid);
      addJidCandidates(variants, entry.lid);
      addJidCandidates(variants, entry.lid_jid);
      addJidCandidates(variants, entry.lidJid);
      addJidCandidates(variants, entry.participant);
      addJidCandidates(variants, entry.recipient);
      addPhoneDigits(variants, entry.phoneNumber);
      addPhoneDigits(variants, entry.number);
      addPhoneDigits(variants, entry.phone);
      addPhoneDigits(variants, entry.user);
      if (!variants.size) {
        return;
      }
      const name = this.resolveContactDisplayName(entry);
      const phoneJids = /* @__PURE__ */ new Set();
      const lidJids = /* @__PURE__ */ new Set();
      for (const variant of variants) {
        cache.byJid.set(variant, entry);
        if (name && !cache.nameByJid.has(variant)) {
          cache.nameByJid.set(variant, name);
        }
        const canonicalPhone = this.toCanonicalPhoneJid(variant);
        if (canonicalPhone) {
          cache.byPhoneJid.set(canonicalPhone, entry);
          if (name && !cache.nameByJid.has(canonicalPhone)) {
            cache.nameByJid.set(canonicalPhone, name);
          }
          phoneJids.add(canonicalPhone);
        }
        const canonicalLid = this.toCanonicalLidJid(variant);
        if (canonicalLid) {
          cache.byLidJid.set(canonicalLid, entry);
          if (name && !cache.nameByJid.has(canonicalLid)) {
            cache.nameByJid.set(canonicalLid, name);
          }
          const legacyVariant = `${canonicalLid.slice(0, -4)}@l.id`;
          cache.byJid.set(legacyVariant, entry);
          if (name && !cache.nameByJid.has(legacyVariant)) {
            cache.nameByJid.set(legacyVariant, name);
          }
          lidJids.add(canonicalLid);
        }
      }
      if (lidJids.size && phoneJids.size) {
        for (const lid of lidJids) {
          for (const phone of phoneJids) {
            if (!cache.lidToPhone.has(lid)) {
              cache.lidToPhone.set(lid, phone);
            }
            if (!cache.phoneToLid.has(phone)) {
              cache.phoneToLid.set(phone, lid);
            }
          }
        }
      }
    };
    const processSource = (source) => {
      if (!source) {
        return;
      }
      if (typeof source.forEach === "function") {
        source.forEach((value, key) => processContactEntry(value, key));
        return;
      }
      if (Array.isArray(source)) {
        source.forEach((value, index) => processContactEntry(value, index));
        return;
      }
      if (typeof source === "object") {
        for (const [key, value] of Object.entries(source)) {
          processContactEntry(value, key);
        }
      }
    };
    sources.forEach(processSource);
    cache.size = cache.byJid.size;
    cache.dirty = false;
    cache.lastBuildAt = Date.now();
    return cache;
  }
  getCachedJidMapping(jid, cacheRef = null) {
    const cache = cacheRef ?? this.ensureContactStoreCache();
    const variants = this.getContactKeyVariants(jid);
    let phoneJid = null;
    let lidJid = null;
    for (const variant of variants) {
      const canonicalPhone = this.toCanonicalPhoneJid(variant);
      if (canonicalPhone && cache.phoneToLid.has(canonicalPhone)) {
        phoneJid = canonicalPhone;
        lidJid = cache.phoneToLid.get(canonicalPhone);
        break;
      }
      const canonicalLid = this.toCanonicalLidJid(variant);
      if (canonicalLid && cache.lidToPhone.has(canonicalLid)) {
        lidJid = canonicalLid;
        phoneJid = cache.lidToPhone.get(canonicalLid);
        break;
      }
    }
    return {
      phoneJid: phoneJid ?? null,
      lidJid: lidJid ?? null
    };
  }
  getCachedContactFromStore(jid) {
    if (!jid) {
      return null;
    }
    const cache = this.ensureContactStoreCache();
    for (const variant of this.getContactKeyVariants(jid)) {
      const canonicalPhone = this.toCanonicalPhoneJid(variant);
      const canonicalLid = this.toCanonicalLidJid(variant);
      const legacyLid = canonicalLid && canonicalLid.endsWith("@lid") ? `${canonicalLid.slice(0, -4)}@l.id` : null;
      const contact = cache.byJid.get(variant) ?? (canonicalPhone ? cache.byPhoneJid.get(canonicalPhone) : null) ?? (canonicalLid ? cache.byLidJid.get(canonicalLid) : null) ?? (legacyLid ? cache.byJid.get(legacyLid) : null);
      if (contact) {
        return contact;
      }
      if (canonicalPhone && cache.phoneToLid.has(canonicalPhone)) {
        const mappedLid = cache.phoneToLid.get(canonicalPhone);
        const bridged = cache.byLidJid.get(mappedLid) ?? cache.byJid.get(`${mappedLid.slice(0, -4)}@l.id`);
        if (bridged) {
          return bridged;
        }
      }
      if (canonicalLid && cache.lidToPhone.has(canonicalLid)) {
        const mappedPhone = cache.lidToPhone.get(canonicalLid);
        const bridged = cache.byPhoneJid.get(mappedPhone) ?? cache.byJid.get(mappedPhone);
        if (bridged) {
          return bridged;
        }
      }
    }
    return null;
  }
  getCachedContactName(jid) {
    if (!jid) {
      return null;
    }
    const cache = this.ensureContactStoreCache();
    for (const variant of this.getContactKeyVariants(jid)) {
      const canonicalPhone = this.toCanonicalPhoneJid(variant);
      const canonicalLid = this.toCanonicalLidJid(variant);
      const legacyLid = canonicalLid && canonicalLid.endsWith("@lid") ? `${canonicalLid.slice(0, -4)}@l.id` : null;
      const directName = cache.nameByJid.get(variant) ?? (canonicalPhone ? cache.nameByJid.get(canonicalPhone) : null) ?? (canonicalLid ? cache.nameByJid.get(canonicalLid) : null) ?? (legacyLid ? cache.nameByJid.get(legacyLid) : null);
      if (directName) {
        return directName;
      }
      const mapping = this.getCachedJidMapping(variant, cache);
      if (mapping.phoneJid) {
        const phoneName = cache.nameByJid.get(mapping.phoneJid);
        if (phoneName) {
          return phoneName;
        }
      }
      if (mapping.lidJid) {
        const lidName = cache.nameByJid.get(mapping.lidJid) ?? cache.nameByJid.get(`${mapping.lidJid.slice(0, -4)}@l.id`);
        if (lidName) {
          return lidName;
        }
      }
    }
    const contact = this.getCachedContactFromStore(jid);
    if (contact) {
      const resolvedName = this.resolveContactDisplayName(contact);
      if (resolvedName) {
        const cacheRef = this.ensureContactStoreCache();
        for (const variant of this.getContactKeyVariants(jid)) {
          if (!cacheRef.nameByJid.has(variant)) {
            cacheRef.nameByJid.set(variant, resolvedName);
          }
        }
        return resolvedName;
      }
    }
    return null;
  }
  async resolveContactName(jid, { fallbackToNetwork = true } = {}) {
    const cached = this.getCachedContactName(jid);
    if (cached) {
      return cached;
    }
    if (!fallbackToNetwork) {
      return null;
    }
    const details = await this.getContactDetails(jid);
    return details?.name ?? null;
  }
  async fetchWhatsAppContactCandidates(rawCandidates) {
    const sock = this.instance?.sock;
    if (!sock || typeof sock.onWhatsApp !== "function") {
      return { contact: null, jid: null };
    }
    const baileys = await this.ensureBaileys().catch(() => null);
    const normalizeJid = baileys?.jidNormalizedUser;
    const contactsSource = sock?.contacts ?? null;
    const storeContacts = this.instance?.store?.contacts ?? sock?.store?.contacts ?? null;
    const contactCaches = [];
    if (contactsSource) {
      contactCaches.push(contactsSource);
    }
    if (storeContacts) {
      contactCaches.push(storeContacts);
    }
    const getContactFromCaches = (candidate) => {
      if (!candidate) {
        return null;
      }
      const storeContact = this.getCachedContactFromStore(candidate);
      if (storeContact) {
        return storeContact;
      }
      if (!contactCaches.length) {
        return null;
      }
      for (const variant of this.getContactKeyVariants(candidate)) {
        for (const cache of contactCaches) {
          if (!cache) {
            continue;
          }
          let found = null;
          if (typeof cache.get === "function") {
            const lowerVariant = typeof variant === "string" ? variant.toLowerCase() : variant;
            found = cache.get(variant) ?? cache.get(lowerVariant);
          } else if (typeof cache === "object") {
            if (Object.prototype.hasOwnProperty.call(cache, variant)) {
              found = cache[variant];
            } else {
              const lowerKey = typeof variant === "string" ? variant.toLowerCase() : variant;
              if (lowerKey && Object.prototype.hasOwnProperty.call(cache, lowerKey)) {
                found = cache[lowerKey];
              }
            }
          }
          if (found) {
            return found;
          }
        }
      }
      return null;
    };
    const uniqueCandidates = [];
    const seenCandidates = /* @__PURE__ */ new Set();
    const enqueueCandidate = (value) => {
      if (typeof value !== "string") {
        return;
      }
      const trimmed = value.trim();
      if (!trimmed.length || seenCandidates.has(trimmed)) {
        return;
      }
      seenCandidates.add(trimmed);
      uniqueCandidates.push(trimmed);
      try {
        if (normalizeJid) {
          const normalized = normalizeJid(trimmed);
          if (normalized && !seenCandidates.has(normalized)) {
            seenCandidates.add(normalized);
            uniqueCandidates.push(normalized);
          }
        }
      } catch {
      }
      if (trimmed.includes(":")) {
        const cleaned = trimmed.replace(/:\d+@/, "@");
        if (!seenCandidates.has(cleaned)) {
          seenCandidates.add(cleaned);
          uniqueCandidates.push(cleaned);
        }
      }
    };
    if (Array.isArray(rawCandidates)) {
      rawCandidates.forEach(enqueueCandidate);
    } else {
      enqueueCandidate(rawCandidates);
    }
    if (!uniqueCandidates.length) {
      return { contact: null, jid: null };
    }
    const getMetadataEntry = (jid) => {
      if (typeof jid !== "string") {
        return null;
      }
      return this.getCachedContactMetadata(jid);
    };
    for (const candidate of uniqueCandidates) {
      let waResults = null;
      try {
        waResults = await sock.onWhatsApp(candidate);
      } catch (error2) {
        logger.debug(
          { key: this.key, candidate, err: error2?.message },
          "fetchWhatsAppContactCandidates: onWhatsApp failed"
        );
      }
      if (!Array.isArray(waResults)) {
        continue;
      }
      for (const entry of waResults) {
        if (!entry || entry.exists !== true) {
          continue;
        }
        let canonicalJid = typeof entry.jid === "string" && entry.jid.length ? entry.jid : null;
        if (!canonicalJid) {
          try {
            canonicalJid = normalizeJid?.(candidate) ?? candidate;
          } catch {
            canonicalJid = candidate;
          }
        }
        let contact = getContactFromCaches(canonicalJid);
        if (!contact && typeof sock.userFetch === "function") {
          try {
            contact = await sock.userFetch(canonicalJid);
          } catch (error2) {
            logger.debug(
              { key: this.key, jid: canonicalJid, err: error2?.message },
              "fetchWhatsAppContactCandidates: userFetch failed"
            );
          }
        }
        if (!contact) {
          const cached = getMetadataEntry(canonicalJid);
          if (cached) {
            contact = {
              jid: canonicalJid,
              notify: cached?.notify,
              verifiedName: cached?.verified_name,
              isBusiness: cached?.is_business,
              name: cached?.name
            };
          }
        }
        if (contact && !contact.jid) {
          contact.jid = canonicalJid;
        }
        if (contact) {
          return { contact, jid: canonicalJid };
        }
        if (canonicalJid) {
          return { contact: null, jid: canonicalJid };
        }
      }
    }
    return { contact: null, jid: null };
  }
  async getContactDetails(inputJid) {
    logger.debug({ key: this.key, jid: inputJid }, "getContactDetails started");
    const baileys = await this.ensureBaileys().catch(() => null);
    const normalizeJid = baileys?.jidNormalizedUser;
    const sock = this.instance.sock;
    const contactsSource = sock?.contacts ?? null;
    const storeContacts = this.instance?.store?.contacts ?? sock?.store?.contacts ?? null;
    const contactCaches = [];
    if (contactsSource) {
      contactCaches.push(contactsSource);
    }
    if (storeContacts) {
      contactCaches.push(storeContacts);
    }
    const mappingStore = this.lidMappingStore;
    if (!inputJid || !sock) {
      return {
        jid: inputJid,
        name: null,
        phone: null,
        lid: null,
        is_business: false,
        status: null
      };
    }
    const canonicalizeLid = (value) => {
      if (typeof value !== "string") {
        return null;
      }
      const trimmed = value.trim();
      if (!trimmed.length) {
        return null;
      }
      if (trimmed.endsWith("@lid")) {
        return trimmed;
      }
      if (trimmed.endsWith("@l.id")) {
        return `${trimmed.slice(0, -5)}@lid`;
      }
      return null;
    };
    const normalizeCandidate = (value) => {
      if (typeof value !== "string") {
        return null;
      }
      const trimmed = value.trim();
      if (!trimmed.length) {
        return null;
      }
      if (!normalizeJid) {
        return trimmed;
      }
      try {
        const normalized = normalizeJid(trimmed);
        return typeof normalized === "string" && normalized.length ? normalized : trimmed;
      } catch {
        return trimmed;
      }
    };
    const getContactFromCaches = (candidate) => {
      if (!candidate) {
        return null;
      }
      const storeContact = this.getCachedContactFromStore(candidate);
      if (storeContact) {
        return storeContact;
      }
      if (!contactCaches.length) {
        return null;
      }
      for (const variant of this.getContactKeyVariants(candidate)) {
        for (const cache of contactCaches) {
          if (!cache) {
            continue;
          }
          let found = null;
          if (typeof cache.get === "function") {
            const lowerVariant = typeof variant === "string" ? variant.toLowerCase() : variant;
            found = cache.get(variant) ?? cache.get(lowerVariant);
          } else if (typeof cache === "object") {
            if (Object.prototype.hasOwnProperty.call(cache, variant)) {
              found = cache[variant];
            } else {
              const lowerKey = typeof variant === "string" ? variant.toLowerCase() : variant;
              if (lowerKey && Object.prototype.hasOwnProperty.call(cache, lowerKey)) {
                found = cache[lowerKey];
              }
            }
          }
          if (found) {
            return found;
          }
        }
      }
      return null;
    };
    const rawInputJid = typeof inputJid === "string" ? inputJid : "";
    const rawJid = normalizeJid ? normalizeJid(inputJid) : inputJid;
    const jid = typeof rawJid === "string" ? rawJid : "";
    const canonicalJidLid = canonicalizeLid(jid);
    const isLid = Boolean(canonicalJidLid);
    const isPn = typeof jid === "string" && jid.endsWith("@s.whatsapp.net");
    const isGroup = typeof jid === "string" && jid.endsWith("@g.us");
    if (isGroup) {
      try {
        const meta = this.getCachedGroupMetadata(jid) ?? await this.refreshGroupMetadata(jid, "contact-details");
        if (!meta) {
          throw new Error("group metadata unavailable");
        }
        const owner_details = meta.owner ? await this.getContactDetails(meta.owner) : null;
        return {
          jid: inputJid,
          name: meta.subject,
          phone: null,
          lid: null,
          is_business: false,
          status: null,
          profile_pic: null,
          group_info: {
            size: meta.size,
            owner: meta.owner,
            owner_details,
            creation: meta.creation,
            desc: meta.desc
          }
        };
      } catch {
        return {
          jid: inputJid,
          name: null,
          phone: null,
          lid: null,
          is_business: false
        };
      }
    }
    let lid = null;
    let phoneJid = null;
    let metadataCacheEntry = null;
    const contactLookupCandidates = /* @__PURE__ */ new Set();
    const addLookupCandidate = (value) => {
      if (typeof value !== "string") {
        return;
      }
      const trimmed = value.trim();
      if (!trimmed.length) {
        return;
      }
      contactLookupCandidates.add(trimmed);
      if (trimmed.endsWith("@lid")) {
        contactLookupCandidates.add(trimmed.replace(/@lid$/, "@l.id"));
      }
      if (trimmed.endsWith("@l.id")) {
        contactLookupCandidates.add(`${trimmed.slice(0, -5)}@lid`);
      }
      if (/::\d+@/.test(trimmed)) {
        contactLookupCandidates.add(trimmed.replace(/::\d+@/, "@"));
      }
      if (/:\d+@/.test(trimmed)) {
        contactLookupCandidates.add(trimmed.replace(/:\d+@/, "@"));
      }
      if (trimmed.endsWith("@s.whatsapp.net")) {
        contactLookupCandidates.add(
          trimmed.replace(/@s\.whatsapp\.net$/, "@c.us")
        );
      }
      if (trimmed.endsWith("@c.us")) {
        contactLookupCandidates.add(
          trimmed.replace(/@c\.us$/, "@s.whatsapp.net")
        );
      }
      contactLookupCandidates.add(trimmed.toLowerCase());
    };
    const assignLid = (value) => {
      const normalized = canonicalizeLid(value);
      if (normalized) {
        lid = normalized;
        addLookupCandidate(normalized);
      }
    };
    const assignPhoneJid = (value) => {
      if (typeof value !== "string") {
        return;
      }
      const trimmed = value.trim();
      if (!trimmed.length) {
        return;
      }
      if (!this.toCanonicalPhoneJid(trimmed)) {
        return;
      }
      phoneJid = trimmed;
      addLookupCandidate(trimmed);
    };
    addLookupCandidate(rawInputJid);
    addLookupCandidate(jid);
    if (isLid && canonicalJidLid) {
      assignLid(canonicalJidLid);
    }
    if (!isGroup) {
      const baseLookupValue = rawInputJid.length ? rawInputJid : jid;
      const lookupValueForWhatsAppId = isValidWhatsappNumber(rawInputJid) ? rawInputJid : baseLookupValue;
      try {
        const [pnCandidate, lidCandidate] = await Promise.all([
          this.getWhatsAppId(lookupValueForWhatsAppId, { preferLid: false }),
          this.getWhatsAppId(lookupValueForWhatsAppId, { preferLid: true })
        ]);
        if (typeof pnCandidate === "string" && pnCandidate.includes("@")) {
          if (pnCandidate.endsWith("@s.whatsapp.net")) {
            assignPhoneJid(pnCandidate);
          } else if (!lid && (pnCandidate.endsWith("@l.id") || pnCandidate.endsWith("@lid"))) {
            assignLid(pnCandidate);
          } else {
            addLookupCandidate(pnCandidate);
          }
        }
        if (typeof lidCandidate === "string" && lidCandidate.includes("@")) {
          if (lidCandidate.endsWith("@l.id") || lidCandidate.endsWith("@lid")) {
            assignLid(lidCandidate);
          } else if (!phoneJid && lidCandidate.endsWith("@s.whatsapp.net")) {
            assignPhoneJid(lidCandidate);
          } else {
            addLookupCandidate(lidCandidate);
          }
        }
      } catch (error2) {
        logger.debug(
          { key: this.key, jid: baseLookupValue, err: error2?.message },
          "getContactDetails: getWhatsAppId resolution failed"
        );
      }
    }
    if (isLid) {
      if (!lid && canonicalJidLid) {
        assignLid(canonicalJidLid);
      }
      if (!phoneJid) {
        const mappedPhone = await this.mapLidToPhoneJid(lid ?? jid);
        assignPhoneJid(mappedPhone);
      }
      if (!phoneJid && mappingStore) {
        const lidForLookup = lid ?? canonicalJidLid ?? canonicalizeLid(rawInputJid) ?? canonicalizeLid(jid) ?? jid;
        const lidCandidates = [];
        if (typeof lidForLookup === "string") {
          lidCandidates.push(lidForLookup);
          const legacyVariant = lidForLookup.replace(/@lid$/, "@l.id");
          if (legacyVariant !== lidForLookup) {
            lidCandidates.push(legacyVariant);
          }
        }
        if (typeof jid === "string" && !lidCandidates.includes(jid)) {
          lidCandidates.push(jid);
        }
        for (const candidateLid of lidCandidates) {
          if (typeof candidateLid !== "string" || !candidateLid.length) {
            continue;
          }
          try {
            const pnFromLid = await mappingStore.getPNForLID(candidateLid);
            if (!pnFromLid) {
              continue;
            }
            const normalizedPn = normalizeJid?.(pnFromLid) ?? pnFromLid.replace(/:\d+@/, "@");
            assignPhoneJid(normalizedPn);
            break;
          } catch (error2) {
            logger.debug(
              { key: this.key, jid: candidateLid, err: error2?.message },
              "LID\u2192PN failed"
            );
          }
        }
      }
    } else if (isPn) {
      if (!phoneJid) {
        assignPhoneJid(jid);
      }
      if (!lid && mappingStore) {
        try {
          const mappedLid = await mappingStore.getLIDForPN(jid).catch(() => null);
          if (mappedLid) {
            assignLid(mappedLid);
          }
        } catch (error2) {
          logger.debug(
            { key: this.key, jid, err: error2?.message },
            "PN\u2192LID failed"
          );
        }
      }
    }
    addLookupCandidate(phoneJid);
    const prioritizedCandidates = [];
    const canonicalPhoneCandidate = phoneJid ? this.toCanonicalPhoneJid(phoneJid) : null;
    if (canonicalPhoneCandidate) {
      prioritizedCandidates.push(phoneJid);
      const normalizedPhoneCandidate = phoneJid.replace(/:\d+@/, "@");
      if (normalizedPhoneCandidate !== phoneJid) {
        prioritizedCandidates.push(normalizedPhoneCandidate);
      }
    }
    if (lid) {
      prioritizedCandidates.push(lid);
    }
    prioritizedCandidates.push(...contactLookupCandidates);
    const uniqueContactCandidates = [];
    const seenCandidates = /* @__PURE__ */ new Set();
    for (const candidate of prioritizedCandidates) {
      if (typeof candidate !== "string" || !candidate.trim().length) {
        continue;
      }
      if (seenCandidates.has(candidate)) {
        continue;
      }
      seenCandidates.add(candidate);
      uniqueContactCandidates.push(candidate);
    }
    let contact = null;
    for (const candidate of uniqueContactCandidates) {
      const found = getContactFromCaches(candidate);
      if (found) {
        contact = found;
        break;
      }
    }
    let profile = contact;
    if (!profile && typeof sock.userFetch === "function") {
      const profileFetchOrder = [];
      if (phoneJid) {
        profileFetchOrder.push(phoneJid);
        const normalizedPhoneCandidate = phoneJid.replace(/:\d+@/, "@");
        if (normalizedPhoneCandidate !== phoneJid) {
          profileFetchOrder.push(normalizedPhoneCandidate);
        }
      }
      if (!profileFetchOrder.includes(jid)) {
        profileFetchOrder.push(jid);
      }
      for (const candidate of profileFetchOrder) {
        try {
          profile = await sock.userFetch(candidate);
          if (profile) {
            break;
          }
        } catch (error2) {
          logger.debug(
            { key: this.key, jid: candidate, err: error2?.message },
            "userFetch failed"
          );
        }
      }
    }
    if (!metadataCacheEntry && phoneJid) {
      metadataCacheEntry = this.getCachedContactMetadata(phoneJid);
    }
    if (!metadataCacheEntry && lid) {
      metadataCacheEntry = this.getCachedContactMetadata(lid);
    }
    if (!metadataCacheEntry && rawInputJid) {
      metadataCacheEntry = this.getCachedContactMetadata(rawInputJid);
    }
    if (!metadataCacheEntry && jid) {
      metadataCacheEntry = this.getCachedContactMetadata(jid);
    }
    let name = contact?.name ?? contact?.pushname ?? contact?.verifiedName ?? profile?.name ?? profile?.pushname ?? profile?.verifiedName ?? metadataCacheEntry?.name ?? metadataCacheEntry?.notify ?? null;
    let is_business = !!contact?.isBusiness || !!profile?.isBusiness || (typeof metadataCacheEntry?.is_business === "boolean" ? metadataCacheEntry.is_business : false);
    let status = contact?.status || profile?.status || metadataCacheEntry?.status || null;
    let verifiedName = contact?.verifiedName ?? profile?.verifiedName ?? metadataCacheEntry?.verified_name ?? null;
    let business_profile = metadataCacheEntry?.business_profile ?? null;
    const notifyFallback = contact?.notify ?? profile?.notify ?? metadataCacheEntry?.notify ?? null;
    let notify = notifyFallback;
    if (!is_business) {
      if (contact?.verifiedName || profile?.verifiedName || metadataCacheEntry?.verified_name) {
        is_business = true;
      }
    }
    let networkResolvedJid = null;
    const shouldFetchNetworkMetadata = (!name || !verifiedName || !notify || !business_profile) && typeof sock?.onWhatsApp === "function";
    if (shouldFetchNetworkMetadata) {
      const lookupCandidates = [];
      const enqueueLookupCandidate = (value) => {
        if (typeof value !== "string") {
          return;
        }
        const trimmed = value.trim();
        if (!trimmed.length) {
          return;
        }
        lookupCandidates.push(trimmed);
        const normalizedVariant = normalizeCandidate(trimmed);
        if (normalizedVariant && normalizedVariant !== trimmed) {
          lookupCandidates.push(normalizedVariant);
        }
      };
      enqueueLookupCandidate(phoneJid);
      enqueueLookupCandidate(jid);
      enqueueLookupCandidate(rawInputJid);
      enqueueLookupCandidate(lid);
      const { contact: waContact, jid: waJid } = await this.fetchWhatsAppContactCandidates(lookupCandidates);
      if (waContact) {
        const waName = waContact.verifiedName ?? waContact.notify ?? waContact.name ?? null;
        if (!name && waName) {
          name = waName;
        }
        if (!notify && waContact.notify) {
          notify = waContact.notify;
        }
        if (!verifiedName && waContact.verifiedName) {
          verifiedName = waContact.verifiedName;
        }
        if (!phoneJid && typeof waContact.jid === "string" && waContact.jid.endsWith("@s.whatsapp.net")) {
          phoneJid = waContact.jid;
        }
        if (!is_business && (waContact.verifiedName || waContact.isBusiness)) {
          is_business = true;
        }
        if (typeof sock.contactAddOrUpdate === "function" && typeof waContact.jid === "string" && waContact.jid.length) {
          try {
            sock.contactAddOrUpdate({
              id: waContact.jid,
              jid: waContact.jid,
              notify: waContact.notify,
              verifiedName: waContact.verifiedName,
              isBusiness: Boolean(
                waContact.isBusiness || waContact.verifiedName
              )
            });
          } catch (error2) {
            logger.debug(
              { key: this.key, jid: waContact.jid, err: error2?.message },
              "getContactDetails: contactAddOrUpdate failed"
            );
          }
        }
      }
      if (waJid) {
        networkResolvedJid = waJid;
      }
    }
    if (!networkResolvedJid && phoneJid) {
      networkResolvedJid = normalizeCandidate(phoneJid) ?? phoneJid;
    }
    if (!networkResolvedJid && lid) {
      networkResolvedJid = canonicalizeLid(lid) ?? normalizeCandidate(lid) ?? lid;
    }
    if (!networkResolvedJid && jid) {
      networkResolvedJid = normalizeCandidate(jid) ?? jid;
    }
    const businessProfileTarget = networkResolvedJid ?? (phoneJid ? normalizeCandidate(phoneJid) ?? phoneJid : null) ?? (lid ? canonicalizeLid(lid) ?? normalizeCandidate(lid) ?? lid : null) ?? (jid ? normalizeCandidate(jid) ?? jid : null);
    if (businessProfileTarget && typeof sock.getBusinessProfile === "function" && (!business_profile || !is_business || !verifiedName)) {
      try {
        const businessResult = await sock.getBusinessProfile(
          businessProfileTarget
        );
        const profileData = businessResult?.profile ?? businessResult?.businessProfile ?? businessResult ?? null;
        if (profileData) {
          business_profile = business_profile ?? profileData;
          const businessName = profileData.businessName ?? profileData.name ?? profileData.verifiedName ?? null;
          if (businessName) {
            if (!name) {
              name = businessName;
            }
            if (!verifiedName) {
              verifiedName = businessName;
            }
            if (!notify) {
              notify = businessName;
            }
          }
          is_business = true;
        }
      } catch (error2) {
        logger.debug(
          {
            key: this.key,
            jid: businessProfileTarget,
            err: error2?.message
          },
          "getContactDetails: business profile lookup failed"
        );
      }
    }
    const canonicalPhoneForStatus = phoneJid ? this.toCanonicalPhoneJid(phoneJid) : null;
    if (canonicalPhoneForStatus) {
      let cachedStatusValue;
      if (!status) {
        cachedStatusValue = this.getCachedContactStatus(phoneJid);
        if (cachedStatusValue !== void 0) {
          status = cachedStatusValue;
        }
      }
      const shouldFetchStatus = !status && cachedStatusValue === void 0 && typeof sock.fetchStatus === "function";
      if (shouldFetchStatus) {
        try {
          const fetchedStatus = await sock.fetchStatus(phoneJid);
          let extractedStatus = null;
          if (typeof fetchedStatus === "string") {
            const trimmed = fetchedStatus.trim();
            extractedStatus = trimmed.length ? trimmed : null;
          } else if (fetchedStatus && typeof fetchedStatus.status === "string") {
            const trimmed = fetchedStatus.status.trim();
            extractedStatus = trimmed.length ? trimmed : null;
          } else if (fetchedStatus && fetchedStatus.status !== void 0 && fetchedStatus.status !== null) {
            extractedStatus = fetchedStatus.status;
          }
          status = extractedStatus ?? null;
        } catch (error2) {
          status = null;
          logger.debug(
            { key: this.key, jid: phoneJid, err: error2?.message },
            "getContactDetails: status fetch failed"
          );
        }
      }
      if (typeof status === "string") {
        const trimmedStatus = status.trim();
        status = trimmedStatus.length ? trimmedStatus : null;
      }
      if (status !== void 0) {
        this.cacheContactStatus(phoneJid, status ?? null);
      }
    }
    if (!status && networkResolvedJid && networkResolvedJid !== phoneJid && typeof sock.fetchStatus === "function") {
      const cachedNetworkStatus = this.getCachedContactStatus(networkResolvedJid);
      if (cachedNetworkStatus !== void 0) {
        status = cachedNetworkStatus;
      } else {
        try {
          const fetchedStatus = await sock.fetchStatus(networkResolvedJid);
          let extractedStatus = null;
          if (typeof fetchedStatus === "string") {
            const trimmed = fetchedStatus.trim();
            extractedStatus = trimmed.length ? trimmed : null;
          } else if (fetchedStatus && typeof fetchedStatus.status === "string") {
            const trimmed = fetchedStatus.status.trim();
            extractedStatus = trimmed.length ? trimmed : null;
          } else if (fetchedStatus && fetchedStatus.status !== void 0 && fetchedStatus.status !== null) {
            extractedStatus = fetchedStatus.status;
          }
          const normalizedStatus = typeof extractedStatus === "string" ? extractedStatus.trim() || null : extractedStatus ?? null;
          if (normalizedStatus !== null && normalizedStatus !== void 0) {
            status = normalizedStatus;
          }
          this.cacheContactStatus(networkResolvedJid, normalizedStatus);
        } catch (error2) {
          this.cacheContactStatus(networkResolvedJid, null);
          logger.debug(
            { key: this.key, jid: networkResolvedJid, err: error2?.message },
            "getContactDetails: secondary status fetch failed"
          );
        }
      }
    }
    let profile_pic = metadataCacheEntry?.profile_pic ?? null;
    const profilePicFetchOrder = [];
    const enqueueProfilePicCandidate = (value) => {
      if (typeof value !== "string") {
        return;
      }
      const trimmed = value.trim();
      if (!trimmed.length) {
        return;
      }
      if (!profilePicFetchOrder.includes(trimmed)) {
        profilePicFetchOrder.push(trimmed);
      }
    };
    enqueueProfilePicCandidate(networkResolvedJid);
    enqueueProfilePicCandidate(phoneJid);
    if (typeof phoneJid === "string") {
      const normalizedPhoneCandidate = phoneJid.replace(/:\d+@/, "@");
      enqueueProfilePicCandidate(normalizedPhoneCandidate);
    }
    enqueueProfilePicCandidate(jid);
    enqueueProfilePicCandidate(lid);
    for (const candidate of profilePicFetchOrder) {
      if (profile_pic) {
        break;
      }
      try {
        profile_pic = await sock.profilePictureUrl(candidate, "image").catch(() => null);
      } catch {
        profile_pic = null;
      }
    }
    let phoneNumber = metadataCacheEntry?.phone ?? null;
    let phoneNumberFromLid = false;
    const canonicalPhoneForNumber = phoneJid ? this.toCanonicalPhoneJid(phoneJid) : null;
    if (canonicalPhoneForNumber) {
      try {
        phoneNumber = await this.getPhoneNumberFromJid(phoneJid);
        if (phoneNumber) {
          phoneNumberFromLid = false;
        }
      } catch (error2) {
        logger.debug(
          { key: this.key, jid: phoneJid, err: error2?.message },
          "getContactDetails: phone decode failed"
        );
      }
    }
    if (!phoneNumber && canonicalPhoneForNumber) {
      phoneNumber = trimPhoneNumber(canonicalPhoneForNumber);
      if (phoneNumber) {
        phoneNumberFromLid = false;
      }
    }
    if (!phoneNumber && isPn) {
      phoneNumber = trimPhoneNumber(jid);
      if (phoneNumber) {
        phoneNumberFromLid = false;
      }
    }
    if (!phoneNumber && lid) {
      try {
        const decodedFromLid = await this.getPhoneNumberFromJid(lid);
        if (decodedFromLid) {
          phoneNumber = decodedFromLid;
          phoneNumberFromLid = true;
        }
      } catch (error2) {
        logger.debug(
          { key: this.key, lid, err: error2?.message },
          "getContactDetails: lid phone decode fallback failed"
        );
      }
    }
    if (!phoneNumber && networkResolvedJid && networkResolvedJid !== phoneJid && networkResolvedJid !== lid) {
      try {
        const decodedFromNetwork = await this.getPhoneNumberFromJid(
          networkResolvedJid
        );
        if (decodedFromNetwork) {
          phoneNumber = decodedFromNetwork;
          if (canonicalizeLid(networkResolvedJid)) {
            phoneNumberFromLid = true;
          }
        }
      } catch (error2) {
        logger.debug(
          { key: this.key, jid: networkResolvedJid, err: error2?.message },
          "getContactDetails: network jid phone decode failed"
        );
      }
    }
    let normalizedPhoneDigits = null;
    if (typeof phoneNumber === "string") {
      const digitsOnly = trimPhoneNumber(phoneNumber);
      if (digitsOnly.length) {
        normalizedPhoneDigits = digitsOnly;
      }
    }
    let isValidPhoneDigits = false;
    if (normalizedPhoneDigits) {
      try {
        isValidPhoneDigits = (0, import_libphonenumber_js.isValidPhoneNumber)(`+${normalizedPhoneDigits}`);
      } catch {
        isValidPhoneDigits = false;
      }
    }
    if (normalizedPhoneDigits && normalizedPhoneDigits !== phoneNumber) {
      phoneNumber = normalizedPhoneDigits;
    }
    if (!isValidPhoneDigits && !phoneNumberFromLid) {
      phoneNumber = null;
    }
    if (!name && notify) {
      name = notify;
    }
    const resolvedJid = isGroup ? inputJid : phoneJid || networkResolvedJid || lid || canonicalizeLid(inputJid) || canonicalizeLid(jid) || jid || inputJid;
    const result = {
      jid: resolvedJid,
      name,
      phone: phoneNumber,
      lid: lid || null,
      is_business,
      status,
      profile_pic,
      verified_name: verifiedName,
      notify,
      business_profile
    };
    const shouldCacheMetadata = Boolean(
      phoneJid || lid || name || notify || profile_pic || verifiedName || status || business_profile || phoneNumber
    );
    if (shouldCacheMetadata) {
      const cachePayload = {
        name,
        notify,
        is_business,
        verified_name: verifiedName,
        profile_pic,
        status,
        phone: phoneNumber,
        lid: lid || null,
        business_profile
      };
      const cacheKeys = /* @__PURE__ */ new Set();
      if (typeof phoneJid === "string" && phoneJid.length) {
        cacheKeys.add(phoneJid);
      }
      if (typeof lid === "string" && lid.length) {
        cacheKeys.add(lid);
      }
      if (typeof networkResolvedJid === "string" && networkResolvedJid.length) {
        cacheKeys.add(networkResolvedJid);
      }
      if (typeof jid === "string" && jid.length) {
        cacheKeys.add(jid);
      }
      if (typeof rawInputJid === "string" && rawInputJid.length) {
        cacheKeys.add(rawInputJid);
      }
      if (cacheKeys.size) {
        this.cacheContactMetadata(Array.from(cacheKeys), cachePayload);
      }
    }
    logger.debug(
      { key: this.key, jid: inputJid },
      "getContactDetails finished"
    );
    return result;
  }
  async getAllGroupsWithMembers() {
    logger.debug({ key: this.key }, "getAllGroups started");
    const rawGroups = await this.instance.sock?.groupFetchAllParticipating();
    const groupCount = rawGroups ? Object.keys(rawGroups).length : 0;
    logger.debug({ key: this.key, groupCount }, "Fetched raw group metadata");
    const groups = Object.values(rawGroups ?? {});
    if (!groups.length) {
      return [];
    }
    const baileys = await this.ensureBaileys().catch(() => null);
    const normalizeJid = baileys?.jidNormalizedUser;
    const mappingStore = this.lidMappingStore;
    const resolveParticipant = async (participant, index) => {
      logger.debug(
        {
          key: this.key,
          participantIndex: index,
          participantId: participant?.id ?? participant
        },
        "Resolving group participant"
      );
      const participantId = participant?.id ?? participant;
      if (!participantId) {
        return { id: participantId, phoneNumber: participantId };
      }
      try {
        const pnFromLid = await mappingStore?.getPNForLID(participantId);
        if (!pnFromLid) {
          return { id: participantId, phoneNumber: participantId };
        }
        const normalizedPn = normalizeJid?.(pnFromLid) ?? (typeof pnFromLid === "string" ? pnFromLid.replace(/:\d+@/, "@") : pnFromLid);
        return {
          id: participantId,
          phoneNumber: typeof normalizedPn === "string" && normalizedPn.length ? normalizedPn : participantId
        };
      } catch (error2) {
        logger.debug(
          { key: this.key, participantId, err: error2?.message },
          "getAllGroupsWithMembers: lid mapping failed"
        );
        return { id: participantId, phoneNumber: participantId };
      }
    };
    const filteredGroups = await Promise.all(
      groups.map(async (group) => {
        const participants = Array.isArray(group.participants) ? group.participants : [];
        const filteredParticipants = await Promise.all(
          participants.map((participant) => resolveParticipant(participant))
        );
        return {
          ...group,
          participants: filteredParticipants
        };
      })
    );
    return filteredGroups;
  }
  async createNewGroup(name, users) {
    const group = await this.instance.sock?.groupCreate(
      name,
      await Promise.all(
        users.map(async (user) => await this.getWhatsAppId(user))
      )
    );
    return group;
  }
  async groupSettingUpdate(id, setting) {
    const group = await this.instance.sock?.groupSettingUpdate(id, setting);
    return group;
  }
  async addNewParticipant(id, users) {
    try {
      const res = await this.instance.sock?.groupAdd(
        await this.getWhatsAppId(id),
        await this.parseParticipants(users)
      );
      return res;
    } catch {
      return {
        error: true,
        message: "Unable to add participant, you must be an admin in this group"
      };
    }
  }
  async getInviteCodeGroup(id) {
    const group = this.instance.chats.find((c) => c.id === id);
    if (!group) {
      logger.debug({ key: this.key }, "getInviteCodeGroup: Group not found");
      return false;
    }
    return await this.instance.sock?.groupInviteCode(id);
  }
  async groupUpdateSubject(id, subject) {
    try {
      const result = await this.instance.sock?.groupUpdateSubject(id, subject);
      return result;
    } catch (e) {
      logger.debug({ key: this.key }, "groupUpdateSubject Error: " + e);
      return false;
    }
  }
  async groupUpdateDescription(id, desc) {
    try {
      const result = await this.instance.sock?.groupUpdateDescription(id, desc);
      return result;
    } catch (e) {
      logger.debug({ key: this.key }, "groupUpdateDescription Error: " + e);
      return false;
    }
  }
  async groupUpdateProfilePicture(id, filePath) {
    try {
      const result = await this.instance.sock?.updateProfilePicture(id, {
        url: filePath
      });
      return result;
    } catch (e) {
      logger.debug({ key: this.key }, "groupUpdateProfilePicture Error: " + e);
      return false;
    }
  }
  async groupLeave(id) {
    try {
      const result = await this.instance.sock?.groupLeave(id);
      if (result) {
        logger.debug({ key: this.key }, "Group left successfully");
        return result;
      } else {
        logger.debug({ key: this.key }, "Failed to leave group");
        return false;
      }
    } catch (error2) {
      logger.debug({ key: this.key }, "groupLeave Error: " + error2);
      return false;
    }
  }
  async removeGroupUser(id, users) {
    try {
      const response = await this.instance.sock?.groupParticipantsUpdate(
        await this.getWhatsAppId(id),
        users,
        "remove"
        // replace this parameter with "remove", "demote" or "promote"
      );
      return response;
    } catch {
      return {
        error: true,
        message: "unable to demote some participants, check if you are admin in group or participants exists"
      };
    }
  }
  async addGroupUser(id, users) {
    try {
      const response = await this.instance.sock?.groupParticipantsUpdate(
        await this.getWhatsAppId(id),
        users,
        "add"
        // replace this parameter with "remove", "demote" or "promote"
      );
      return response;
    } catch {
      return {
        error: true,
        message: "unable to demote some participants, check if you are admin in group or participants exists"
      };
    }
  }
  async makeGroupAdmin(id, users) {
    try {
      const res = await this.instance.sock?.groupMakeAdmin(
        await this.getWhatsAppId(id),
        await this.parseParticipants(users)
      );
      return res;
    } catch {
      return {
        error: true,
        message: "unable to promote some participants, check if you are admin in group or participants exists"
      };
    }
  }
  async demoteGroupAdmin(id, users) {
    try {
      const res = await this.instance.sock?.groupDemoteAdmin(
        await this.getWhatsAppId(id),
        await this.parseParticipants(users)
      );
      return res;
    } catch {
      return {
        error: true,
        message: "unable to demote some participants, check if you are admin in group or participants exists"
      };
    }
  }
  /// Group Creator ///
};
var instance_default = WhatsAppInstance;

// recovered-main-src/electron/main/index.js
var import_moment3 = __toESM(require("moment"));
var import_moment_timezone2 = require("moment-timezone");

// recovered-main-src/electron/main/constant.js
var LANGUAGE = "pt_br";
var COUNTRY_CODE = "BR";
var DIAL_CODE = "55";

// recovered-main-src/electron/main/index.js
var import_libphonenumber_js2 = require("libphonenumber-js");
var import_meta2 = {};
var { join } = import_node_path5.default;
var mainLogger = logger_default("electron-main", { key: "main" });
mainLogger.info(
  {
    productId: "deskpro",
    userId: "deskpro",
    softwareName: "DeskPro",
    companyName: "DeskPro",
    githubUsername: "pietropck12",
    githubRepo: "deskpro-updates",
    appVersion: import_electron8.app.getVersion()
  },
  "App started"
);
var require4 = (0, import_node_module5.createRequire)(__filename);
var { autoUpdater } = require4("electron-updater");
var { screen } = require4("electron");
autoUpdater.disableDifferentialDownload = false;
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;
autoUpdater.fullChangelog = true;
autoUpdater.verifyUpdateCodeSignature = false;
autoUpdater.setFeedURL({
  provider: "github",
  owner: "pietropck12",
  repo: "deskpro-updates",
  private: false
});
var AUTO_UPDATE_IDLE_THRESHOLD_MS = 5 * 60 * 1e3;
var AUTO_UPDATE_MAX_DELAY_MS = 10 * 60 * 1e3;
var AUTO_UPDATE_IDLE_POLL_INTERVAL_MS = 30 * 1e3;
var STARTUP_UPDATE_CHECK_DELAY_MS = 1200;
var autoUpdateScheduled = false;
var autoUpdateGuardsInitialized = false;
var autoUpdateIdleIntervalId = null;
var autoUpdateFallbackTimeoutId = null;
var autoUpdaterEventsWired = false;
var updateCheckStarted = false;
var installTriggered = false;
var manualDownloadInFlight = false;
var manualDownloadAbortController = null;
var manualDownloadWriter = null;
var manualDownloadTargetPath = null;
var manualDownloadLastProgress = { percent: 0, at: 0 };
var manualDownloadCancelled = false;
var triggerDownloadedUpdateInstall = (source = "auto") => {
  if (installTriggered) {
    autoUpdaterLogger.info(
      { source },
      "autoUpdater: install skipped (already triggered)"
    );
    return false;
  }
  installTriggered = true;
  updateRestart = true;
  autoUpdaterLogger.info(
    { source },
    "autoUpdater: silent quitAndInstall scheduled"
  );
  setTimeout(() => {
    try {
      autoUpdater.quitAndInstall(true, true);
    } catch (error) {
      installTriggered = false;
      updateRestart = false;
      const message = error instanceof Error ? error.message : String(error ?? "Update Error");
      autoUpdaterLogger.error(
        { err: message, source },
        "autoUpdater: quitAndInstall failed"
      );
      sendMessage("update", { event: "error", message });
    }
  }, 1500);
  return true;
};
var isLegacyUpdateError = (value) => {
  const text = String(value || "");
  return text.includes("Invalid Version:") || text.includes("desktop-v") || text.includes("Atualizacao falhou") || text.includes("Atualiza\xE7\xE3o falhou");
};
var wireAutoUpdater = () => {
  if (autoUpdaterEventsWired) {
    return;
  }
  autoUpdaterEventsWired = true;
  autoUpdater.on("checking-for-update", () => {
    autoUpdaterLogger.info("autoUpdater: checking-for-update");
    sendMessage("update", { event: "checking" });
    try {
      sentryAddBreadcrumb("auto-update", "checking-for-update");
      sentryCaptureMetric("metric.auto-update", {
        level: SentryLevels.Info,
        tags: { event: "checking" }
      });
    } catch {
    }
  });
  autoUpdater.on("update-available", (info) => {
    autoUpdaterLogger.info(
      { version: info?.version },
      "autoUpdater: update-available"
    );
    sendMessage("update", { event: "available", info });
    try {
      sentryAddBreadcrumb("auto-update", "update-available");
      sentryCaptureMetric("metric.auto-update", {
        level: SentryLevels.Info,
        tags: { event: "available" }
      });
    } catch {
    }
  });
  autoUpdater.on("update-not-available", (info) => {
    autoUpdaterLogger.info(
      { version: info?.version },
      "autoUpdater: update-not-available"
    );
    sendMessage("update", { event: "not-available", info });
    try {
      sentryAddBreadcrumb("auto-update", "update-not-available");
      sentryCaptureMetric("metric.auto-update", {
        level: SentryLevels.Info,
        tags: { event: "not-available" }
      });
    } catch {
    }
  });
  autoUpdater.on("download-progress", (progressObj) => {
    autoUpdaterLogger.info(
      { percent: progressObj?.percent },
      "autoUpdater: download-progress"
    );
    sendMessage("update", {
      event: "download-progress",
      percent: progressObj?.percent,
      progress: progressObj
    });
    try {
      sentryAddBreadcrumb("auto-update", "download-progress", {
        percent: progressObj?.percent
      });
      sentryCaptureMetric("metric.auto-update", {
        level: SentryLevels.Info,
        tags: { event: "download-progress" },
        extra: { percent: progressObj?.percent }
      });
    } catch {
    }
  });
  autoUpdater.on("update-downloaded", (info) => {
    autoUpdaterLogger.info(
      { version: info?.version },
      "autoUpdater: update-downloaded"
    );
    sendMessage("update", { event: "downloaded", info });
    try {
      sentryAddBreadcrumb("auto-update", "update-downloaded");
      sentryCaptureMetric("metric.auto-update", {
        level: SentryLevels.Info,
        tags: { event: "downloaded" }
      });
    } catch {
    }
    triggerDownloadedUpdateInstall("update-downloaded");
  });
  autoUpdater.on("error", (err) => {
    if (isLegacyUpdateError(err?.message || err)) {
      autoUpdaterLogger.warn({ err: err?.message || err }, "autoUpdater: legacy update error suppressed");
      return;
    }
    autoUpdaterLogger.error({ err: err?.message || err }, "autoUpdater: error");
    sendMessage("update", {
      event: "error",
      message: err && typeof err === "object" && "message" in err ? err.message : String(err ?? "Update Error")
    });
  });
};
var triggerUpdateCheck = (reason = "manual") => {
  if (updateCheckStarted) {
    mainLogger.info({ reason }, "autoUpdater: check skipped (already started)");
    return;
  }
  updateCheckStarted = true;
  autoUpdateScheduled = true;
  try {
    mainLogger.info({ reason }, "autoUpdater: checkForUpdates start");
    autoUpdater.setFeedURL({
      provider: "github",
      owner: "pietropck12",
      repo: "deskpro-updates",
      private: false
    });
    autoUpdater.checkForUpdates().catch((error2) => {
      if (isLegacyUpdateError(error2?.message || error2)) {
        autoUpdaterLogger.warn({ err: error2?.message || error2 }, "autoUpdater: legacy check error suppressed");
        return;
      }
      throw error2;
    });
  } catch (error2) {
    if (isLegacyUpdateError(error2?.message || error2)) {
      autoUpdaterLogger.warn({ err: error2?.message || error2 }, "autoUpdater: legacy check error suppressed");
      return;
    }
    mainLogger.error(
      { err: error2?.message || error2, reason },
      "autoUpdater.checkForUpdates error"
    );
  }
};
var scheduleAutoUpdateCheck = (reason = "manual", delayMs = 0) => {
  if (updateCheckStarted || autoUpdateScheduled) {
    return;
  }
  autoUpdateScheduled = true;
  if (autoUpdateIdleIntervalId) {
    clearInterval(autoUpdateIdleIntervalId);
    autoUpdateIdleIntervalId = null;
  }
  if (autoUpdateFallbackTimeoutId) {
    clearTimeout(autoUpdateFallbackTimeoutId);
    autoUpdateFallbackTimeoutId = null;
  }
  const safeDelay = Math.max(0, delayMs);
  setTimeout(() => {
    mainLogger.info({ reason }, "autoUpdater: deferred check start");
    triggerUpdateCheck(reason);
  }, safeDelay);
};
var initializeAutoUpdateCheckGuards = () => {
  if (autoUpdateGuardsInitialized || autoUpdateScheduled || updateCheckStarted) {
    return;
  }
  autoUpdateGuardsInitialized = true;
  mainLogger.info("autoUpdater: idle guards disabled; startup check only");
};
var __dirname2 = import_node_path5.default.dirname(__filename);
process.env.APP_ROOT = import_node_path5.default.join(__dirname2, "../..");
var MAIN_DIST = import_node_path5.default.join(process.env.APP_ROOT, "dist-electron");
var RENDERER_DIST = import_node_path5.default.join(process.env.APP_ROOT, "dist");
var VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;
var USER_DATA_PATH = import_electron8.app.getPath("userData");
mainLogger.info(
  {
    appRoot: process.env.APP_ROOT,
    mainDist: MAIN_DIST,
    rendererDist: RENDERER_DIST,
    viteDevServer: VITE_DEV_SERVER_URL,
    userDataPath: USER_DATA_PATH
  },
  "Resolved application paths"
);
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? import_node_path5.default.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
import_electron8.ipcMain.on("react-ready", async () => {
  try {
    const isFirstSignal = markRendererReady("react-ready");
    if (isFirstSignal) {
      await syncProduct();
      mainLogger.info("Renderer reported ready");
    } else {
      mainLogger.debug("Renderer reported ready (duplicate signal)");
    }
    if (global.win && typeof global.win.show === "function") {
      global.win.show();
    }
  } catch (e) {
    mainLogger.error({ err: e }, "Error handling react-ready event");
  }
});
if (import_electron8.protocol?.registerSchemesAsPrivileged) {
  import_electron8.protocol.registerSchemesAsPrivileged([
    {
      scheme: "app",
      privileges: {
        standard: true,
        secure: true,
        supportFetchAPI: true,
        corsEnabled: true,
        allowServiceWorkers: true
      }
    }
  ]);
}
if (import_node_os2.default.release().startsWith("6.1")) import_electron8.app.disableHardwareAcceleration();
if (process.platform === "win32") {
  import_electron8.app.setAppUserModelId("online.linksite.deskpro");
}
if (!import_electron8.app.requestSingleInstanceLock()) {
  import_electron8.app.quit();
  process.exit(0);
}
var isDev2 = !import_electron8.app.isPackaged;
mainLogger.info(
  { mode: isDev2 ? "development" : "production" },
  "Application mode resolved"
);
var secretArg = "--track";
var isTrackMode = process.argv.includes(secretArg);
var prodLogKeyRaw = process.env.VITE_PROD_LOG_KEY ?? import_meta2.env?.VITE_PROD_LOG_KEY ?? null;
var prodLogKey = typeof prodLogKeyRaw === "string" ? prodLogKeyRaw.trim() : prodLogKeyRaw;
var prodLogKeyArg = process.argv.find(
  (arg = "") => arg.startsWith("--log-key=")
);
var providedProdLogKeyRaw = prodLogKeyArg?.split("=")[1] ?? null;
var providedProdLogKey = typeof providedProdLogKeyRaw === "string" ? providedProdLogKeyRaw.trim() : providedProdLogKeyRaw;
var isProdLogUnlock = Boolean(
  prodLogKey && prodLogKey.length && providedProdLogKey === prodLogKey
);
mainLogger.info(
  {
    hasProdLogKey: Boolean(prodLogKey),
    prodLogUnlock: isProdLogUnlock
  },
  "Logging unlock key evaluated"
);
var PROD_CATEGORY_WHITELIST = /* @__PURE__ */ new Set([
  "license",
  "autoUpdater",
  "task",
  "campaign",
  "session",
  "startup"
]);
var shouldLogCategory = (category = "general") => {
  if (isDev2 || isTrackMode || isProdLogUnlock) {
    return true;
  }
  return PROD_CATEGORY_WHITELIST.has(category);
};
var createScopedLogger = (category) => {
  const scoped = mainLogger.child({ category });
  const wrap = (method) => (...args) => {
    if (!shouldLogCategory(category)) {
      return;
    }
    scoped[method](...args);
  };
  return {
    trace: wrap("trace"),
    debug: wrap("debug"),
    info: wrap("info"),
    warn: wrap("warn"),
    error: wrap("error"),
    fatal: wrap("fatal")
  };
};
var loggers = {
  general: createScopedLogger("general"),
  license: createScopedLogger("license"),
  autoUpdater: createScopedLogger("autoUpdater"),
  task: createScopedLogger("task"),
  campaign: createScopedLogger("campaign"),
  session: createScopedLogger("session"),
  startup: createScopedLogger("startup")
};
var licenseLogger = loggers.license;
var autoUpdaterLogger = loggers.autoUpdater;
var taskLogger = loggers.task;
var campaignLogger = loggers.campaign;
var sessionLogger = loggers.session;
var LICENSE_SYNC_MIN_INTERVAL_MINUTES = 45;
var LICENSE_SYNC_MAX_INTERVAL_MINUTES = 90;
var LICENSE_SYNC_MIN_INTERVAL_MS = LICENSE_SYNC_MIN_INTERVAL_MINUTES * 60 * 1e3;
var LICENSE_SYNC_MAX_INTERVAL_MS = LICENSE_SYNC_MAX_INTERVAL_MINUTES * 60 * 1e3;
var licenseSyncTimer = null;
var licenseSyncShutdown = false;
var computeNextLicenseSyncDelay = () => randomRange(LICENSE_SYNC_MIN_INTERVAL_MS, LICENSE_SYNC_MAX_INTERVAL_MS);
function scheduleLicenseSyncJob(reason = "initial") {
  if (licenseSyncShutdown) {
    licenseLogger.debug(
      { reason },
      "license sync scheduling skipped due to shutdown"
    );
    return;
  }
  if (licenseSyncTimer) {
    clearTimeout(licenseSyncTimer);
    licenseSyncTimer = null;
  }
  const delayMs = computeNextLicenseSyncDelay();
  const scheduledFor = new Date(Date.now() + delayMs).toISOString();
  licenseLogger.info(
    { reason, delayMs, scheduledFor },
    "license sync scheduled"
  );
  licenseSyncTimer = setTimeout(() => {
    runLicenseSyncJob("timer").catch((error2) => {
      licenseLogger.error(
        { err: error2?.message || error2 },
        "license sync timer execution failed"
      );
      scheduleLicenseSyncJob("recover");
    });
  }, delayMs);
}
async function runLicenseSyncJob(trigger = "timer") {
  licenseLogger.info({ trigger }, "license sync started");
  try {
    await checkLic();
    await syncProduct();
    licenseLogger.info({ trigger }, "license sync finished");
  } catch (error2) {
    licenseLogger.error(
      { err: error2?.message || error2, trigger },
      "license sync error"
    );
  } finally {
    if (!licenseSyncShutdown) {
      scheduleLicenseSyncJob("recurring");
    }
  }
}
if (!isTrackMode && !isDev2 && !isProdLogUnlock) {
  console.log = () => {
  };
  console.error = () => {
  };
  console.warn = () => {
  };
  console.info = () => {
  };
}
if (isDev2) {
  (0, import_electron_debug.default)();
}
if (process.platform === "win32") {
  import_electron8.app.setAppUserModelId("online.linksite.deskpro");
}
if (!import_electron8.app.requestSingleInstanceLock()) {
  import_electron8.app.quit();
  process.exit(0);
}
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
var licUtil = new lic_util_default();
var dbUtil2 = new db_action_default(db_default);
var INSTANCE_LIMIT = 10;
function getDeskproLicenseInstanceLimit(licensePayload) {
  const detail = licensePayload?.detail || licensePayload || {};
  const plan = detail?.plan || {};
  const rawLimit = detail?.instance ?? detail?.instances ?? detail?.whatsapp ?? detail?.whatsapps ?? detail?.whatsApp ?? detail?.whatsApps ?? detail?.seats ?? detail?.seat ?? detail?.devices ?? detail?.deviceLimit ?? detail?.limit ?? detail?.max_whatsapp_sessions ?? detail?.maxWhatsappSessions ?? detail?.whatsapp_limit ?? detail?.whatsappLimit ?? plan?.instance ?? plan?.instances ?? plan?.whatsapp ?? plan?.whatsapps ?? plan?.whatsApp ?? plan?.whatsApps ?? plan?.seats ?? plan?.seat ?? plan?.devices ?? plan?.deviceLimit ?? plan?.limit ?? plan?.max_whatsapp_sessions ?? plan?.maxWhatsappSessions ?? plan?.whatsapp_limit ?? plan?.whatsappLimit;
  const limit = Number(rawLimit);
  return Number.isFinite(limit) && limit > 0 ? limit : INSTANCE_LIMIT;
}
async function getDeskproCurrentInstanceLimit() {
  try {
    const licensePayload = await licUtil.getLic();
    const limit = getDeskproLicenseInstanceLimit(licensePayload);
    if (Number.isFinite(limit) && limit > 0) {
      INSTANCE_LIMIT = limit;
    }
    return INSTANCE_LIMIT;
  } catch (error2) {
    mainLogger.warn({ err: error2 }, "DeskPro license instance limit fallback");
    return INSTANCE_LIMIT;
  }
}
var numberFilterJobs = /* @__PURE__ */ new Map();
var updateSentryLicenseUser = (licenseKey, licenseId) => {
  try {
    if (licenseKey || licenseId) {
      sentrySetUser({
        id: licenseId ?? licenseKey ?? "license",
        licenseKey: licenseKey ?? null
      });
    } else {
      sentrySetUser(null);
    }
  } catch {
  }
};
global.internet = false;
global.WhatsAppInstances = {};
global.waList = {};
global.mediaCache = {};
global.queueList = {};
global.win = null;
global.product = null;
global.defaultSetting = {
  sending: {
    instance: {
      random: false,
      switchAccount: 1
      //Messages
    },
    delay: {
      enable: true,
      duration: {
        minimum: 3,
        maximum: 5
      }
    },
    sleep: {
      enable: false,
      afterMessages: 20,
      duration: {
        minimum: 5,
        maximum: 10
      }
    },
    welcomeMessage: {
      enable: true,
      templateId: "",
      duration: 7
      //Days
    },
    configuration: {
      sendParallel: false,
      showNotification: true,
      autoReply: true,
      autoRead: false,
      sendMedia: "before"
      //before, after
    },
    unsubscribe: {
      enable: true,
      keyword: "STOP",
      templateId: ""
    },
    autoRejectCalls: {
      enable: false,
      templateId: ""
    }
  },
  country: { ...DEFAULT_COUNTRY_SETTING },
  integration: {
    chatGPT: {
      enable: false,
      apiKey: "",
      model: "gpt-5",
      temperature: 0.6,
      systemMessage: ""
    },
    gemini: {
      enable: false,
      apiKey: "",
      model: "gemini-2.5-pro",
      temperature: 0.4,
      systemMessage: "",
      safetyLevel: "default"
    },
    grok: {
      enable: false,
      apiKey: "",
      model: "grok-4",
      temperature: 0.7,
      systemMessage: "",
      baseUrl: "https://api.x.ai/v1"
    }
  },
  whatsHook: {
    enable: false,
    phoneNumbers: []
  },
  storage: {
    autoClear: false,
    clearInDays: 30,
    // Days
    capacity: 512,
    // MB
    showAlert: true
  }
};
var normalizeBooleanFromEnv = (value, fallback = false) => {
  if (value === void 0 || value === null) {
    return fallback;
  }
  const normalized = String(value).trim().toLowerCase();
  if (!normalized.length) {
    return fallback;
  }
  return ["1", "true", "yes", "on"].includes(normalized);
};
var parseNumberFromEnv = (value, fallback) => {
  const candidate = Number(value);
  return Number.isFinite(candidate) ? candidate : fallback;
};
var SESSION_BOOTSTRAP_DELAY_MS = Math.max(
  0,
  parseNumberFromEnv(
    process.env.SESSION_BOOTSTRAP_DELAY_MS ?? import_meta2.env?.VITE_SESSION_BOOTSTRAP_DELAY_MS,
    120
  )
);
var SESSION_BOOTSTRAP_JITTER_MS = Math.max(
  0,
  parseNumberFromEnv(
    process.env.SESSION_BOOTSTRAP_JITTER_MS ?? import_meta2.env?.VITE_SESSION_BOOTSTRAP_JITTER_MS,
    80
  )
);
var RENDERER_READY_TIMEOUT_MS = Math.max(
  0,
  parseNumberFromEnv(
    process.env.RENDERER_READY_TIMEOUT_MS ?? import_meta2.env?.VITE_RENDERER_READY_TIMEOUT_MS,
    1e4
  )
);
var AUTO_DELETE_FLAGGED_SESSIONS = normalizeBooleanFromEnv(
  process.env.DEL_TEMP_INSTANCES ?? import_meta2.env?.VITE_DEL_TEMP_INSTANCES ?? false,
  false
);
var AUTO_DELETE_INSTANCE_STATUSES = new Set(
  String(
    process.env.DEL_TEMP_INSTANCE_STATUSES ?? import_meta2.env?.VITE_DEL_TEMP_INSTANCE_STATUSES ?? "loggedout,badsession"
  ).split(",").map((entry) => entry.trim().toLowerCase()).filter(Boolean)
);
var updateRestart = false;
var sessionPath2 = import_node_path5.default.join(USER_DATA_PATH, "sessions");
global.sessionPath = sessionPath2;
var downloadPath2 = import_node_path5.default.join(USER_DATA_PATH, "downloads");
global.downloadPath = downloadPath2;
var manualDownloadPath = import_node_path5.default.join(USER_DATA_PATH, "updates");
import_fs_extra4.default.ensureDirSync(sessionPath2);
import_fs_extra4.default.ensureDirSync(downloadPath2);
import_fs_extra4.default.ensureDirSync(manualDownloadPath);
var resetManualDownloadTracking = () => {
  manualDownloadAbortController = null;
  manualDownloadWriter = null;
  manualDownloadTargetPath = null;
  manualDownloadLastProgress = { percent: 0, at: 0 };
  manualDownloadCancelled = false;
  manualDownloadInFlight = false;
};
var cancelManualDownloadLatestBuild = async () => {
  if (!manualDownloadInFlight) {
    sendMessage("update", { event: "cancelled" });
    return { cancelled: false };
  }
  manualDownloadCancelled = true;
  try {
    if (manualDownloadAbortController) {
      manualDownloadAbortController.abort();
    }
  } catch (abortError) {
    mainLogger.warn(
      { err: abortError?.message || abortError },
      "manual download abort failed"
    );
  }
  try {
    if (manualDownloadWriter) {
      manualDownloadWriter.destroy(new Error("Download cancelled"));
    }
  } catch (writerError) {
    mainLogger.warn(
      { err: writerError?.message || writerError },
      "manual download writer destroy failed"
    );
  }
  try {
    if (manualDownloadTargetPath && await import_fs_extra4.default.pathExists(manualDownloadTargetPath)) {
      await import_fs_extra4.default.remove(manualDownloadTargetPath);
    }
  } catch (cleanupError) {
    mainLogger.warn(
      { err: cleanupError?.message || cleanupError, manualDownloadTargetPath },
      "manual download cleanup failed"
    );
  }
  sendMessage("update", { event: "cancelled" });
  resetManualDownloadTracking();
  return { cancelled: true };
};
var manualDownloadLatestBuild = async ({ url: url2, fileName } = {}) => {
  if (manualDownloadInFlight) {
    sendMessage("update", {
      event: "error",
      message: "Download already in progress"
    });
    return;
  }
  if (!url2) {
    sendMessage("update", {
      event: "error",
      message: "Download URL missing"
    });
    return;
  }
  manualDownloadCancelled = false;
  manualDownloadInFlight = true;
  manualDownloadLastProgress = { percent: 0, at: Date.now() };
  sendMessage("update", { event: "checking" });
  const safeFileName = (() => {
    try {
      const parsed = new URL(url2);
      const base = import_node_path5.default.basename(parsed.pathname || "").trim();
      if (base) return base;
    } catch {
    }
    return fileName || `installer-${Date.now()}.exe`;
  })();
  const targetPath = import_node_path5.default.join(manualDownloadPath, safeFileName);
  manualDownloadTargetPath = targetPath;
  const agentOptions = { keepAlive: true, maxSockets: 12 };
  const httpAgent = new import_node_http2.default.Agent(agentOptions);
  const httpsAgent2 = new import_node_https2.default.Agent(agentOptions);
  manualDownloadAbortController = new AbortController();
  try {
    const response = await (0, import_axios4.default)({
      method: "get",
      url: url2,
      responseType: "stream",
      timeout: 15 * 60 * 1e3,
      signal: manualDownloadAbortController.signal,
      httpAgent,
      httpsAgent: httpsAgent2,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      validateStatus: (status) => status >= 200 && status < 300
    });
    const totalBytes = Number(response.headers["content-length"] || 0);
    let receivedBytes = 0;
    await new Promise((resolve, reject) => {
      const writer = import_fs_extra4.default.createWriteStream(targetPath, {
        highWaterMark: 1024 * 1024
      });
      manualDownloadWriter = writer;
      writer.on("close", () => {
        manualDownloadWriter = null;
      });
      sendMessage("update", { event: "download-progress", percent: 0 });
      response.data.on("data", (chunk) => {
        receivedBytes += chunk.length;
        if (totalBytes > 0) {
          const percent = Math.min(
            100,
            Math.round(receivedBytes / totalBytes * 100)
          );
          const now = Date.now();
          const shouldEmit = percent >= 100 || percent >= manualDownloadLastProgress.percent + 1 || now - manualDownloadLastProgress.at >= 500;
          if (shouldEmit) {
            manualDownloadLastProgress = { percent, at: now };
            sendMessage("update", { event: "download-progress", percent });
          }
        }
      });
      response.data.on("error", (err) => {
        writer.destroy(err);
      });
      writer.on("finish", resolve);
      writer.on("error", reject);
      response.data.pipe(writer);
    });
    sendMessage("update", {
      event: "downloaded",
      info: { filePath: targetPath, fileName: safeFileName }
    });
    try {
      await import_electron8.shell.showItemInFolder(targetPath);
    } catch (openErr) {
      mainLogger.warn(
        { err: openErr?.message || openErr, targetPath },
        "manual download showItemInFolder failed"
      );
    }
  } catch (error2) {
    const isCancelledError = manualDownloadCancelled || error2?.code === "ERR_CANCELED" || error2?.name === "CanceledError" || String(error2?.message || "").toLowerCase().includes("canceled");
    if (isCancelledError) {
      try {
        if (manualDownloadTargetPath && await import_fs_extra4.default.pathExists(manualDownloadTargetPath)) {
          await import_fs_extra4.default.remove(manualDownloadTargetPath);
        }
      } catch (cleanupError) {
        mainLogger.warn(
          { err: cleanupError?.message || cleanupError, manualDownloadTargetPath },
          "manual download cancelled cleanup failed"
        );
      }
      sendMessage("update", { event: "cancelled" });
    } else {
      mainLogger.error(
        { err: error2?.message || error2, url: url2 },
        "manual download failed"
      );
      sendMessage("update", {
        event: "error",
        message: String(error2?.message || error2 || "Download failed")
      });
    }
  } finally {
    resetManualDownloadTracking();
  }
};
var preload = import_node_path5.default.join(__dirname2, "../preload/index.js");
var indexHtml = import_node_path5.default.join(RENDERER_DIST, "index.html");
var loadingHtml = import_electron8.app.isPackaged ? import_node_path5.default.join(RENDERER_DIST, "loading.html") : import_node_path5.default.join(process.env.APP_ROOT, "loading.html");
var iconPath = join(process.env.VITE_PUBLIC, "icon.ico");
mainLogger.debug(
  {
    appName: import_electron8.app.name,
    userDataPath: USER_DATA_PATH,
    sessionPath: global.sessionPath,
    downloadPath: global.downloadPath,
    preloadPath: preload,
    indexHtml,
    loadingHtml,
    iconPath
  },
  "Resolved UI asset paths"
);
var hasReactAppLoaded = false;
var rendererReadyWaiters = /* @__PURE__ */ new Set();
var flushRendererReadyWaiters = (source = "renderer-ready") => {
  if (!rendererReadyWaiters.size) {
    return;
  }
  const waiters = Array.from(rendererReadyWaiters);
  rendererReadyWaiters.clear();
  for (const waiter of waiters) {
    try {
      waiter();
    } catch (error2) {
      mainLogger.warn(
        { source, err: error2?.message || error2 },
        "Renderer ready waiter callback failed"
      );
    }
  }
};
var markRendererReady = (source = "renderer-ready") => {
  const isFirstSignal = !hasReactAppLoaded;
  hasReactAppLoaded = true;
  flushRendererReadyWaiters(source);
  return isFirstSignal;
};
async function waitForRendererReady({
  timeoutMs = RENDERER_READY_TIMEOUT_MS
} = {}) {
  if (hasReactAppLoaded) {
    return true;
  }
  return new Promise((resolve) => {
    let settled = false;
    const settle = (state) => {
      if (settled) {
        return;
      }
      settled = true;
      resolve(state);
    };
    let timeoutId = null;
    const waiter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      rendererReadyWaiters.delete(waiter);
      settle(true);
    };
    rendererReadyWaiters.add(waiter);
    if (Number.isFinite(timeoutMs) && timeoutMs > 0) {
      timeoutId = setTimeout(() => {
        rendererReadyWaiters.delete(waiter);
        settle(false);
      }, timeoutMs);
    }
  });
}
var startupLogger = loggers.startup;
var startupSequencePromise = null;
var startupSequenceCompleted = false;
var cachedLicensePayload = null;
var POST_LICENSE_PHASES = Object.freeze([
  "backup-sessions",
  "load-sessions",
  "campaigns"
]);
var licenseValidationState = {
  status: "pending",
  detail: null,
  key: null,
  error: null,
  lastUpdatedAt: 0,
  source: "bootstrap"
};
var deferredPostLicensePhases = /* @__PURE__ */ new Set();
var completedPostLicensePhases = /* @__PURE__ */ new Set();
var pendingDeferredPhaseRun = false;
var selectPhaseLogger = (phaseName) => {
  switch (phaseName) {
    case "campaigns":
      return campaignLogger;
    case "load-sessions":
    case "backup-sessions":
      return sessionLogger;
    default:
      return startupLogger;
  }
};
var isLicensePayloadValid = (payload) => Boolean(payload?.status === true && payload?.detail);
var normalizeLicensePayload = (payload) => {
  if (!payload) {
    return null;
  }
  if (payload.status === true) {
    return payload;
  }
  if (payload.error || payload.detail || payload.key) {
    return payload;
  }
  return null;
};
function updateLicenseValidationState(payload, { source = "unknown" } = {}) {
  const normalized = normalizeLicensePayload(payload);
  const previousStatus = licenseValidationState.status;
  const isValid = isLicensePayloadValid(normalized);
  const errorPayload = normalized?.error ?? (normalized?.status === false || normalized?.message ? {
    code: normalized?.code ?? normalized?.error?.code ?? "LICENSE_ERROR",
    message: normalized?.message ?? normalized?.error?.message ?? "License validation failed"
  } : null);
  const nextStatus = isValid ? "valid" : errorPayload ? "error" : "pending";
  licenseValidationState = {
    status: nextStatus,
    detail: normalized?.detail ?? null,
    key: normalized?.key ?? null,
    error: errorPayload,
    lastUpdatedAt: Date.now(),
    source,
    raw: normalized ?? null
  };
  if (nextStatus === "valid" && previousStatus !== "valid") {
    scheduleDeferredPhaseFlush(source);
  }
  return licenseValidationState;
}
function deferPhaseUntilLicenseReady(phaseName, reason = "general") {
  if (!POST_LICENSE_PHASES.includes(phaseName)) {
    return;
  }
  if (completedPostLicensePhases.has(phaseName)) {
    return;
  }
  if (!deferredPostLicensePhases.has(phaseName)) {
    deferredPostLicensePhases.add(phaseName);
  }
  const logger2 = selectPhaseLogger(phaseName);
  logger2.warn(
    {
      phase: phaseName,
      reason,
      licenseStatus: licenseValidationState.status
    },
    "Phase deferred until license validation completes"
  );
}
function shouldAllowPhaseExecution(phaseName, reason = "general") {
  if (!POST_LICENSE_PHASES.includes(phaseName)) {
    return true;
  }
  if (licenseValidationState.status === "valid") {
    return true;
  }
  deferPhaseUntilLicenseReady(phaseName, reason);
  return false;
}
async function flushDeferredPostLicensePhases(reason = "license-valid") {
  if (licenseValidationState.status !== "valid") {
    return;
  }
  const ordered = ["backup-sessions", "load-sessions", "campaigns"];
  for (const phaseName of ordered) {
    if (!deferredPostLicensePhases.has(phaseName) || completedPostLicensePhases.has(phaseName)) {
      continue;
    }
    try {
      if (phaseName === "backup-sessions") {
        await backupSessionsSnapshot();
      } else if (phaseName === "load-sessions") {
        await loadSessionsAfterUiReady(false, {
          reason: `${reason}-deferred`,
          ignoreLicenseGate: true
        });
      } else if (phaseName === "campaigns") {
        await scheduleJobs();
        await startJob();
      }
      completedPostLicensePhases.add(phaseName);
    } catch (error2) {
      selectPhaseLogger(phaseName).error(
        { phase: phaseName, reason, err: error2?.message || error2 },
        "Deferred phase execution failed"
      );
    } finally {
      deferredPostLicensePhases.delete(phaseName);
    }
  }
}
function scheduleDeferredPhaseFlush(reason = "license-valid") {
  if (!deferredPostLicensePhases.size) {
    return;
  }
  if (pendingDeferredPhaseRun) {
    return;
  }
  pendingDeferredPhaseRun = true;
  setTimeout(() => {
    pendingDeferredPhaseRun = false;
    flushDeferredPostLicensePhases(reason).catch((error2) => {
      startupLogger.error(
        { reason, err: error2?.message || error2 },
        "Deferred phase flush failed"
      );
    });
  }, 0);
}
var STARTUP_PHASE_ORDER = [
  { name: "patch-setting", handler: runPatchAndSettingPhase },
  { name: "license-check", handler: runLicensePhase },
  { name: "ui-ready", handler: runUiReadyPhase },
  { name: "statistics-license", handler: runPostUiDataPhase },
  { name: "backup-sessions", handler: runSessionBackupPhase },
  { name: "load-sessions", handler: runSessionLoadPhase },
  { name: "campaigns", handler: runCampaignPhase }
];
async function ensureStartupSequence(reason = "initial-startup") {
  if (startupSequenceCompleted) {
    return;
  }
  if (!startupSequencePromise) {
    startupSequencePromise = (async () => {
      try {
        await runStartupSequence(reason);
        startupSequenceCompleted = true;
      } catch (error2) {
        startupLogger.error(
          { reason, err: error2?.message || error2 },
          "startup sequence aborted"
        );
        throw error2;
      }
    })();
    startupSequencePromise.finally(() => {
      startupSequencePromise = null;
    });
  }
  return startupSequencePromise;
}
async function runStartupSequence(reason = "initial-startup") {
  startupLogger.info({ reason }, "startup sequence begin");
  for (const phase of STARTUP_PHASE_ORDER) {
    const startedAt = Date.now();
    startupLogger.info({ reason, phase: phase.name }, "startup phase start");
    try {
      await phase.handler();
      startupLogger.info(
        {
          reason,
          phase: phase.name,
          durationMs: Date.now() - startedAt
        },
        "startup phase complete"
      );
    } catch (error2) {
      startupLogger.error(
        { reason, phase: phase.name, err: error2?.message || error2 },
        "startup phase failed"
      );
    }
  }
  startupLogger.info({ reason }, "startup sequence end");
}
async function runPatchAndSettingPhase() {
  await dbUtil2.ensureIndex();
  await syncProduct();
  await syncSetting();
}
async function runLicensePhase() {
  const result = await checkLic({ emitToRenderer: false });
  cachedLicensePayload = result?.payload ?? null;
}
async function runUiReadyPhase() {
  await waitForRendererReady({ timeoutMs: RENDERER_READY_TIMEOUT_MS });
}
async function runPostUiDataPhase() {
  await syncStatistics();
  if (cachedLicensePayload) {
    // Use the current coordinated state, not a response captured before UI startup.
    cachedLicensePayload = await licUtil.getLic();
    sendMessage("license", cachedLicensePayload);
  } else {
    const refresh = await checkLic();
    cachedLicensePayload = refresh?.payload ?? null;
  }
}
async function runSessionBackupPhase() {
  if (!shouldAllowPhaseExecution("backup-sessions", "startup-sequence")) {
    return;
  }
  await backupSessionsSnapshot();
  completedPostLicensePhases.add("backup-sessions");
}
async function runSessionLoadPhase() {
  await loadSessionsAfterUiReady(false, { reason: "startup-sequence" });
}
async function runCampaignPhase() {
  if (!shouldAllowPhaseExecution("campaigns", "startup-sequence")) {
    return;
  }
  await scheduleJobs();
  await startJob();
  completedPostLicensePhases.add("campaigns");
}
async function createWindow() {
  mainLogger.debug("createWindow invoked");
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;
  let winWidth = 1440;
  let winHeight = 800;
  let minWidth = 1200;
  let minHeight = 700;
  if (screenWidth <= 1366 && screenHeight <= 800) {
    winWidth = 1280;
    winHeight = 720;
    minWidth = 1024;
    minHeight = 600;
  }
  const win2 = new import_electron8.BrowserWindow({
    width: winWidth,
    height: winHeight,
    minWidth,
    minHeight,
    title: "DeskPro",
    icon: iconPath,
    autoHideMenuBar: !isDev2,
    webPreferences: {
      preload,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      devTools: isDev2
    }
  });
  try {
    win2.setTitle("DeskPro");
    win2.on("page-title-updated", (event) => {
      event.preventDefault();
      win2.setTitle("DeskPro");
    });
  } catch {}
  mainLogger.debug(
    { loadingHtml, isPackaged: import_electron8.app.isPackaged },
    "Loading screen asset info"
  );
  if (import_fs_extra4.default.existsSync(loadingHtml)) {
    mainLogger.debug("Loading screen file exists, loading");
    win2.loadFile(loadingHtml).then(() => {
      mainLogger.debug("Loading screen loaded successfully");
    }).catch((error2) => {
      mainLogger.error({ err: error2 }, "Failed to load loading screen");
    });
  } else {
    mainLogger.error({ loadingHtml }, "Loading screen file missing");
    const fallbackPaths = [
      import_node_path5.default.join(process.env.APP_ROOT, "loading.html"),
      // Original location
      import_node_path5.default.join(process.env.APP_ROOT, "dist", "loading.html"),
      // Alternative dist location
      import_node_path5.default.join(__dirname2, "../../loading.html")
      // Relative to main process
    ];
    let fallbackLoaded = false;
    for (const fallbackPath of fallbackPaths) {
      mainLogger.debug(
        { fallbackPath },
        "Attempting fallback loading screen path"
      );
      if (import_fs_extra4.default.existsSync(fallbackPath)) {
        mainLogger.debug(
          { fallbackPath },
          "Found loading screen at fallback path"
        );
        win2.loadFile(fallbackPath);
        fallbackLoaded = true;
        break;
      }
    }
    if (!fallbackLoaded) {
      mainLogger.error("No loading screen file found in any location");
      win2.loadURL(
        "data:text/html;charset=utf-8," + encodeURIComponent(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                margin: 0; 
                padding: 0; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                font-family: Arial, sans-serif; 
                background: #f9fbff;
              }
              .loading { text-align: center; }
              .spinner { 
                border: 4px solid #f3f3f3; 
                border-top: 4px solid #5c8df6; 
                border-radius: 50%; 
                width: 50px; 
                height: 50px; 
                animation: spin 2s linear infinite; 
                margin: 0 auto 20px;
              }
              @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            </style>
          </head>
          <body>
            <div class="loading">
              <div class="spinner"></div>
              <h2>Loading...</h2>
            </div>
          </body>
        </html>
      `)
      );
    }
  }
  if (VITE_DEV_SERVER_URL) {
    setTimeout(() => {
      win2.loadURL(VITE_DEV_SERVER_URL);
    }, 2e3);
  } else {
    mainLogger.info("Production mode: Serving renderer via custom protocol");
    const APP_SCHEME = "app";
    const APP_HOST = ".";
    const APP_URL = `${APP_SCHEME}://${APP_HOST}/index.html`;
    const normalizedRendererDist = import_node_path5.default.normalize(RENDERER_DIST);
    const registerAppProtocol = async () => {
      const alreadyHandled = typeof import_electron8.protocol.isProtocolHandled === "function" ? await import_electron8.protocol.isProtocolHandled(APP_SCHEME) : false;
      if (alreadyHandled) {
        return;
      }
      await new Promise((resolve, reject) => {
        import_electron8.protocol.registerFileProtocol(
          APP_SCHEME,
          (request, callback) => {
            try {
              const requestUrl = new URL(request.url);
              const decodedPath = decodeURIComponent(
                requestUrl.pathname || "/"
              );
              const relativePath = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");
              let absolutePath = import_node_path5.default.normalize(
                import_node_path5.default.join(normalizedRendererDist, relativePath)
              );
              const withinRendererDist = absolutePath === normalizedRendererDist || absolutePath.startsWith(normalizedRendererDist + import_node_path5.default.sep);
              if (!withinRendererDist || !import_fs_extra4.default.existsSync(absolutePath)) {
                absolutePath = indexHtml;
              }
              callback({ path: absolutePath });
            } catch (error2) {
              mainLogger.error(
                {
                  err: error2,
                  requestUrl: request.url
                },
                "Failed to resolve app protocol path"
              );
              callback({ path: indexHtml });
            }
          },
          (error2) => {
            if (error2) {
              reject(error2);
            } else {
              resolve();
            }
          }
        );
      });
    };
    try {
      await registerAppProtocol();
    } catch (error2) {
      if (!(error2 instanceof Error) || !/registered/i.test(error2.message || "")) {
        mainLogger.error({ err: error2 }, "Unable to register app protocol");
      }
    }
    setTimeout(() => {
      win2.loadURL(APP_URL).catch((error2) => {
        mainLogger.error(
          { err: error2 },
          "Failed to load renderer via custom protocol"
        );
      });
    }, 500);
    import_electron8.ipcMain.on("loading-screen-displayed", () => {
      mainLogger.info("Loading screen displayed");
    });
    import_electron8.ipcMain.on("react-app-loaded", async () => {
      const isFirstSignal = markRendererReady("react-app-loaded");
      if (isFirstSignal) {
        await syncProduct();
        mainLogger.info("React renderer reported loaded");
      } else {
        mainLogger.debug("React renderer load event received again");
      }
    });
  }
  if (isDev2) {
    win2.webContents.openDevTools();
  }
  win2.once("ready-to-show", () => {
    try {
      mainLogger.debug("win ready-to-show event");
      if (win2 && typeof win2.show === "function") {
        win2.show();
      }
    } catch (e) {
      mainLogger.error({ err: e }, "Error during ready-to-show");
    }
  });
  win2.on("show", () => {
    mainLogger.debug("win show event");
  });
  win2.on("minimize", () => {
    mainLogger.debug("win minimize event");
  });
  win2.on("maximize", () => {
    mainLogger.debug("win maximize event");
  });
  win2.webContents.on("did-fail-load", (event, errorCode, errorDescription) => {
    mainLogger.error({ errorDescription }, "win did-fail-load event");
  });
  import_electron8.app.on("browser-window-blur", () => {
    mainLogger.debug("browser-window blur event");
  });
  win2.webContents.on("did-finish-load", async () => {
    mainLogger.debug("win did-finish-load event");
    try {
      win2.webContents.send("app-init", { status: "main-loaded" });
    } catch (e) {
      mainLogger.error({ err: e }, "send app-init failed");
    }
    ensureStartupSequence("did-finish-load").catch((error2) => {
      startupLogger.error(
        { err: error2?.message || error2 },
        "startup sequence promise rejected"
      );
    });
  });
  win2.webContents.setWindowOpenHandler(({ url: url2 }) => {
    if (url2.startsWith("https:")) import_electron8.shell.openExternal(url2);
    return { action: "deny" };
  });
  const allowedDomains = [
    "deskpro.superzapmarketing.net",
    "firebaseio.com",
    "firestore.googleapis.com",
    "firebaseapp.com",
    "firebase.com",
    "googleapis.com",
    "google-analytics.com",
    "analytics.google.com",
    "googletagmanager.com",
    "pps.whatsapp.net",
    "usc1.contabostorage.com",
    "gstatic.com",
    "fonts.googleapis.com",
    "fonts.gstatic.com",
    "cloudfunctions.net",
    "firebasestorage.googleapis.com",
    "stats.g.doubleclick.net",
    "google.com"
  ];
  win2.webContents.on("will-navigate", (event, url2) => {
    const parsedUrl = new URL(url2);
    const hostname = parsedUrl.hostname;
    if (!allowedDomains.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    )) {
      mainLogger.warn({ url: url2 }, "Navigation blocked");
      event.preventDefault();
    }
  });
  import_electron8.ipcMain.handle("deskpro-license-state", async (_event, options = {}) => {
    return await licUtil.getLic(options.force === true);
  });
  import_electron8.ipcMain.handle("deskpro-license-activate", async (_event, data = {}) => {
    return await licUtil.activeKey({ name: "Cliente DeskPro", email: "cliente@deskpro.local", phone: "+5500000000000", place: "Brasil", country: "BR", key: String(data.key || "").trim().toUpperCase() });
  });
  const executeDeskproTask = async (event, task) => {
    const { type, data, id } = task;
    taskLogger.info({ type }, "ipcMain task received");
    if (type == "get.all") {
      event.returnValue = { status: false, blocked: true, code: "remote_task_disabled" };
    } else if (type == "upload.file") {
      const { name, file } = data;
      const ext = import_node_path5.default.extname(name);
      const baseName = import_node_path5.default.basename(name, ext);
      const filename = `${baseName}$$${(0, import_uuid3.v4)()}${ext}`;
      mainLogger.debug({ filename }, "Upload file name generated");
      const savePath = import_node_path5.default.join(global.downloadPath, filename);
      mainLogger.trace(
        { dataPreview: Object.keys(data || {}) },
        "Upload file data received"
      );
      try {
        await writeFileData(savePath, Buffer.from(file));
        mainLogger.info({ savePath }, "File uploaded successfully");
        event.returnValue = {
          status: true,
          message: "File uploaded successfully",
          path: savePath
        };
      } catch (error2) {
        mainLogger.error({ err: error2 }, "Error saving uploaded file");
        event.returnValue = {
          status: false,
          message: "File upload failed"
        };
      }
    } else if (type == "sync-product") {
      const response = await syncProduct();
      event.returnValue = response;
    } else if (type == "web-content-send") {
      const { channel, payload } = data;
      if (win2 && win2.webContents) {
        win2.webContents.send(channel, payload);
        event.returnValue = { status: true, message: "Message sent" };
      } else {
        event.returnValue = { status: false, message: "Window not available" };
      }
    } else if (type == "reset-setting") {
      try {
        await this.db.setting.remove({});
        await syncSetting();
        event.returnValue = {
          status: true,
          message: "Settings reset successfully"
        };
      } catch (error2) {
        event.returnValue = {
          status: false,
          message: "Error resetting settings"
        };
      }
    } else if (type == "license.get") {
      const response = await licUtil.getLic();
      event.returnValue = response;
    } else if (type == "license.verify") {
      const response = await licUtil.verifyKey(data.key);
      event.returnValue = response;
    } else if (type == "license.activeKey") {
      const response = await licUtil.activeKey(data);
      event.returnValue = response;
    } else if (type == "license.check") {
      const response = await licUtil.checkLicense(data.key);
      event.returnValue = response;
    } else if (type == "license.renew") {
      const response = await licUtil.renewLicense(data);
      event.returnValue = response;
    } else if (type == "app_info") {
      var info = {};
      info.name = import_electron8.app.getName();
      info.version = import_electron8.app.getVersion();
      info.userDataPath = import_electron8.app.getPath("userData");
      info.exePath = import_electron8.app.getPath("exe");
      info.appName = "DeskPro";
      info.appOwner = "DeskPro";
      info.productId = "deskpro";
      info.userId = "deskpro";
      info.githubRepo = `${"pietropck12"}/${"deskpro-updates"}`;
      try {
        info.electronInfo = {
          version: process.versions.electron,
          node: process.versions.node,
          chrome: process.versions.chrome,
          v8: process.versions.v8,
          uv: process.versions.uv,
          zlib: process.versions.zlib,
          modules: process.versions.modules
        };
      } catch (error2) {
        mainLogger.error({ err: error2 }, "Error getting electron info");
      }
      try {
        info.loggedInUser = import_node_os2.default.userInfo().username;
        info.homeDir = import_node_os2.default.homedir();
      } catch (error2) {
        mainLogger.error({ err: error2 }, "Error getting user info");
        info.loggedInUser = "unknown";
        info.homeDir = "unknown";
      }
      try {
        info.deviceId = await (0, import_node_machine_id2.machineId)();
      } catch (error2) {
        mainLogger.error({ err: error2 }, "Error getting device ID");
        info.deviceId = "deskpro";
      }
      try {
        const osInfo2 = await system_info_default.osInfo();
        info.os = osInfo2;
      } catch (error2) {
        mainLogger.error({ err: error2 }, "Error getting OS info");
      }
      try {
        const cpus = import_node_os2.default.cpus?.();
        info.hardware = {
          cpuModel: cpus && cpus.length ? cpus[0]?.model : null,
          cpuCount: Array.isArray(cpus) ? cpus.length : null,
          totalMemory: import_node_os2.default.totalmem?.() ?? null,
          freeMemory: import_node_os2.default.freemem?.() ?? null
        };
      } catch (error2) {
        mainLogger.error({ err: error2 }, "Error getting hardware info");
      }
      if (!info.hardware) {
        info.hardware = {
          cpuModel: info?.os?.cpuModel ?? null,
          cpuCount: info?.os?.cpuCount ?? null,
          totalMemory: info?.os?.memory ?? null,
          freeMemory: null
        };
      } else {
        if (!info.hardware.cpuModel) {
          info.hardware.cpuModel = info?.os?.cpuModel ?? null;
        }
        if (!info.hardware.cpuCount) {
          info.hardware.cpuCount = info?.os?.cpuCount ?? null;
        }
        if (!info.hardware.totalMemory) {
          info.hardware.totalMemory = info?.os?.memory ?? null;
        }
      }
      info.display = {
        width: screen?.width || 0,
        height: screen?.height || 0,
        scaleFactor: screen?.scaleFactor || 1
      };
      event.returnValue = info;
    } else if (type === "app.hardReload") {
      const targetWin = global.win ?? import_electron8.BrowserWindow.getFocusedWindow();
      if (!targetWin || !targetWin.webContents) {
        event.returnValue = {
          status: false,
          message: "Renderer window unavailable"
        };
        return;
      }
      try {
        const targetSession = targetWin.webContents.session;
        if (targetSession?.clearCache) {
          await targetSession.clearCache();
        }
        if (targetSession?.clearStorageData) {
          await targetSession.clearStorageData({
            storages: ["appcache", "serviceworkers", "caches"]
          });
        }
        event.returnValue = { status: true };
        setImmediate(() => {
          try {
            targetWin.webContents.reloadIgnoringCache();
          } catch (reloadError) {
            mainLogger.error(
              { err: reloadError },
              "app.hardReload reloadIgnoringCache failed"
            );
            try {
              targetWin.webContents.reload();
            } catch (fallbackError) {
              mainLogger.error(
                { err: fallbackError },
                "app.hardReload fallback reload failed"
              );
            }
          }
        });
      } catch (error2) {
        mainLogger.error({ err: error2 }, "app.hardReload failed");
        event.returnValue = {
          status: false,
          message: error2 instanceof Error ? error2.message : String(error2 ?? "Error")
        };
      }
    } else if (type == "check_update") {
      triggerUpdateCheck("ipc-check_update");
      event.returnValue = { status: true };
    } else if (type == "download_update") {
      triggerUpdateCheck("ipc-download_update");
      event.returnValue = { status: true };
    } else if (type == "download_latest_build") {
      manualDownloadLatestBuild(data);
      event.returnValue = { status: true };
    } else if (type == "download_latest_build_cancel") {
      await cancelManualDownloadLatestBuild();
      event.returnValue = { status: true };
    } else if (type == "restart_app") {
      const triggered = triggerDownloadedUpdateInstall("ipc-restart_app");
      event.returnValue = triggered ? { status: true } : {
        status: false,
        message: "Install already triggered"
      };
    } else if (type == "open.url") {
      event.returnValue = { status: true, message: "URL opened" };
      setImmediate(() => {
        import_electron8.shell.openExternal(data);
      });
    } else if (type == "close") {
      updateRestart = false;
      await onCloseWindows();
    } else if (type == "number.filter.bulk") {
      bulkNumberFilter(data);
    } else if (type == "number.filter.stop") {
      const jobId = typeof data?.jobId === "string" && data.jobId.trim().length ? data.jobId.trim() : null;
      if (!jobId) {
        event.returnValue = { status: false, message: "jobId missing" };
        return;
      }
      const job = numberFilterJobs.get(jobId);
      if (!job) {
        event.returnValue = { status: false, message: "Job not found" };
        return;
      }
      job.cancelled = true;
      job.cancelledAt = Date.now();
      sendMessage("number.filter", {
        jobId,
        items: [],
        total: job.total,
        completed: job.completed,
        cancelled: true,
        timestamp: Date.now(),
        final: true
      });
      event.returnValue = { status: true };
      return;
    } else if (type == "number.filter") {
      const result = await numberFilter(data);
      event.returnValue = {
        status: true,
        isValid: result
      };
    } else if (type == "instance.all") {
      const result = await dbUtil2.getAllInstances();
      if (result) {
        event.returnValue = {
          status: true,
          message: "Instance Found",
          instances: result.instances
        };
      } else {
        event.returnValue = { status: false, message: "No Instance Found!" };
      }
    } else if (type === "instance.cache.diagnostics") {
      const instanceKey = data?.key ?? data?.instanceId ?? data?.id ?? data?.instanceKey ?? id;
      const instance = WhatsAppInstances[instanceKey];
      if (!instance || typeof instance.getCacheDiagnostics !== "function") {
        event.returnValue = {
          status: false,
          message: "Instance cache diagnostics unavailable"
        };
      } else {
        event.returnValue = {
          status: true,
          diagnostics: instance.getCacheDiagnostics()
        };
      }
    } else if (type === "instance.cache.flush") {
      const instanceKey = data?.key ?? data?.instanceId ?? data?.id ?? data?.instanceKey ?? id;
      const instance = WhatsAppInstances[instanceKey];
      if (!instance || typeof instance.flushCachesToDisk !== "function") {
        event.returnValue = {
          status: false,
          message: "Instance cache flush unavailable"
        };
      } else {
        try {
          const diagnostics = await instance.flushCachesToDisk(
            data?.reason ?? "manual-ipc"
          );
          event.returnValue = { status: true, diagnostics };
        } catch (error2) {
          mainLogger.error(
            { err: error2, instanceKey },
            "instance.cache.flush error"
          );
          event.returnValue = {
            status: false,
            message: error2 instanceof Error ? error2.message : String(error2 ?? "Error")
          };
        }
      }
    } else if (type === "instance.cache.clear") {
      const instanceKey = data?.key ?? data?.instanceId ?? data?.id ?? data?.instanceKey ?? id;
      const instance = WhatsAppInstances[instanceKey];
      if (!instance || typeof instance.clearCacheStores !== "function") {
        event.returnValue = {
          status: false,
          message: "Instance cache clear unavailable"
        };
      } else {
        try {
          const result = await instance.clearCacheStores({
            scopes: data?.scopes ?? data?.scope ?? data?.targets ?? null,
            removeSnapshots: Boolean(
              data?.removeSnapshots ?? data?.deleteSnapshots ?? false
            ),
            persist: data?.persist,
            schedulePersist: data?.schedulePersist,
            persistReason: data?.persistReason ?? data?.reason ?? "manual-ipc",
            reason: data?.reason ?? "manual-ipc",
            recordMetrics: data?.recordMetrics !== false
          });
          event.returnValue = { status: true, ...result };
        } catch (error2) {
          mainLogger.error(
            { err: error2, instanceKey },
            "instance.cache.clear error"
          );
          event.returnValue = {
            status: false,
            message: error2 instanceof Error ? error2.message : String(error2 ?? "Error")
          };
        }
      }
    } else if (type === "instance.cache.reload") {
      const instanceKey = data?.key ?? data?.instanceId ?? data?.id ?? data?.instanceKey ?? id;
      const instance = WhatsAppInstances[instanceKey];
      if (!instance || typeof instance.reloadCacheSnapshots !== "function") {
        event.returnValue = {
          status: false,
          message: "Instance cache reload unavailable"
        };
      } else {
        try {
          const result = await instance.reloadCacheSnapshots({
            scopes: data?.scopes ?? data?.scope ?? data?.targets ?? null,
            clearBefore: data?.clearBefore !== false,
            reason: data?.reason ?? "manual-ipc",
            recordMetrics: data?.recordMetrics !== false
          });
          event.returnValue = { status: true, ...result };
        } catch (error2) {
          mainLogger.error(
            { err: error2, instanceKey },
            "instance.cache.reload error"
          );
          event.returnValue = {
            status: false,
            message: error2 instanceof Error ? error2.message : String(error2 ?? "Error")
          };
        }
      }
    } else if (type == "instance.create") {
      const instances = await dbUtil2.getAllInstances();
      const deskproInstanceLimit = await getDeskproCurrentInstanceLimit();
      if (instances.instances.length < deskproInstanceLimit) {
        const result = await dbUtil2.createInstance({
          ...data,
          status: "New",
          whatsHook: true,
          autoRead: true,
          autoRejectCalls: true,
          isMultiFileAuth: true,
          message: data.loginType == "qr" ? "Click on Show QR to connect" : "Click on Login to connect"
        });
        if (result) {
          createSession({
            key: result._id,
            name: result.name,
            autoRead: false,
            whatsHook: true,
            autoRejectCalls: false,
            isNew: true,
            useMobile: result.loginType == "phone",
            isMultiFileAuth: result.isMultiFileAuth ?? false
          });
          event.returnValue = {
            status: true,
            message: "New Instance Created!",
            instance: result
          };
          syncInstance();
        } else {
          event.returnValue = {
            status: false,
            message: "New Instance Failed!"
          };
        }
      } else {
        event.returnValue = {
          status: false,
          code: "whatsapp_limit_reached",
          message: "Seu plano permite apenas " + deskproInstanceLimit + " WhatsApp" + (deskproInstanceLimit === 1 ? "." : "s.")
        };
      }
    } else if (type == "instance.update") {
      const i2 = await dbUtil2.getInstance({ _id: id });
      mainLogger.info(
        {
          instanceId: id,
          payload: data,
          currentStatus: i2?.status
        },
        "Instance update requested"
      );
      if (i2) {
        const updatePayload = {
          name: data.name,
          autoRead: data.autoRead,
          about: data.about,
          whatsHook: data.whatsHook,
          proxy: data.proxy,
          chatBot: data.chatBot
        };
        if (typeof data.autoRejectCalls === "boolean") {
          updatePayload.autoRejectCalls = data.autoRejectCalls;
        }
        const result = await dbUtil2.updateInstance({ _id: id }, updatePayload);
        if (i2.status == "Ready") {
          const instance = WhatsAppInstances[id];
          if (instance) {
            await instance.updateProfileName(data.profileName);
            await instance.updateProfileStatus(data.about);
            if (data.profile) {
              const jid = await instance.getWhatsAppId(instance.number);
              await instance.updateProfilePicture(jid, data.profile);
            }
            if (i2.proxy != data.proxy) {
              await instance.stopAll();
              await instance.init();
              await sleep(1e3);
            }
            if (result) {
              event.returnValue = {
                status: true,
                message: "Instance Updated!"
              };
            } else {
              event.returnValue = {
                status: false,
                message: "Update Instance Failed!"
              };
            }
          } else {
            event.returnValue = {
              status: false,
              message: "Instance Not Found!"
            };
          }
        } else {
          if (result) {
            event.returnValue = {
              status: true,
              message: "Instance Updated!"
            };
          } else {
            event.returnValue = {
              status: false,
              message: "Update Instance Failed!"
            };
          }
        }
        if (typeof updatePayload.autoRejectCalls === "boolean") {
          const runningInstance = WhatsAppInstances[id];
          if (runningInstance) {
            runningInstance.autoRejectCalls = updatePayload.autoRejectCalls;
          }
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Record Not Found!"
        };
      }
      syncInstance();
    } else if (type == "instance.bulk.update") {
      const allInstances = await dbUtil2.getAllInstances({ status: "Ready" });
      if (allInstances.instances.length == 0) {
        event.returnValue = {
          status: false,
          message: "Instances Not Found!"
        };
      } else {
        event.returnValue = {
          status: true,
          message: "Bulk profile change started!"
        };
      }
      asyncForEach(allInstances.instances, async (i2, index) => {
        mainLogger.info(
          {
            position: `${index + 1}/${allInstances.instances.length}`,
            instanceId: i2._id
          },
          "Bulk profile update initiated"
        );
        const bulkUpdatePayload = {
          autoRead: data?.autoRead || true,
          whatsHook: data?.whatsHook || true,
          autoRejectCalls: data?.autoRejectCalls || true,
          chatBot: data?.chatBot || {
            enable: false,
            platform: "chatGPT",
            systemInstruction: ""
          },
          proxy: data?.proxy || "",
          profileName: data?.profileName || "",
          about: data?.about || ""
        };
        await dbUtil2.updateInstance({ _id: i2._id }, bulkUpdatePayload);
        const instance = WhatsAppInstances[i2._id];
        if (instance) {
          await instance.updateProfileName(data.profileName);
          await instance.updateProfileStatus(data.about);
          if (data.profile) {
            const jid = await instance.getWhatsAppId(data.number);
            await instance.updateProfilePicture(jid, data.profile);
          }
        }
        syncInstance();
      });
    } else if (type == "instance.qr") {
      const instance = await dbUtil2.getInstance({ _id: id });
      if (instance) {
        try {
          await deleteSession(instance);
          createSession({
            key: instance._id,
            name: instance.name,
            useMobile: (instance.loginType ?? "qr") == "phone",
            isNew: false,
            isMultiFileAuth: instance.isMultiFileAuth ?? false,
            autoRejectCalls: instance.autoRejectCalls ?? false
          });
        } catch (error2) {
          mainLogger.error(
            { err: error2, instanceId: instance._id },
            "Failed to generate QR"
          );
        }
        event.returnValue = { status: true, message: "Qr Generated" };
        syncInstance();
      }
    } else if (type == "instance.phone") {
      const instance = await dbUtil2.getInstance({ _id: id });
      if (instance) {
        mainLogger.info(
          {
            instanceId: instance._id,
            loginType: instance.loginType
          },
          "Phone login requested"
        );
        await deleteSession(instance);
        const wa = await createSession({
          key: instance._id,
          name: instance.name,
          useMobile: true,
          isNew: false,
          isMultiFileAuth: true,
          autoRejectCalls: instance.autoRejectCalls ?? false
        });
        if (wa) {
          await wa.stopAll();
          await wa.init();
          const result = await wa.enterPhoneNumber(data);
          event.returnValue = result;
        } else {
          event.returnValue = { status: false, message: "Instance not found" };
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Record Not Found!"
        };
      }
    } else if (type == "instance.otp") {
      const instance = await dbUtil2.getInstance({ _id: id });
      if (instance) {
        mainLogger.info(
          { instanceId: instance._id },
          "OTP submission received"
        );
        const wa = WhatsAppInstances[id];
        if (wa) {
          const result = await wa.enterOTP(data);
          event.returnValue = result;
          await wa.stopAll();
          await wa.init();
        } else {
          event.returnValue = { status: false, message: "Instance not found" };
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Record Not Found!"
        };
      }
    } else if (type == "instance.paring.code") {
      const instance = await dbUtil2.getInstance({ _id: id });
      if (instance) {
        mainLogger.info({ instanceId: instance._id }, "Pairing code requested");
        await deleteSession(instance);
        const wa = await createSession({
          key: instance._id,
          name: instance.name,
          useMobile: false,
          isNew: false,
          isMultiFileAuth: true,
          autoRejectCalls: instance.autoRejectCalls ?? false
        });
        await sleep(2e3);
        if (wa) {
          mainLogger.info(
            { instanceId: instance._id, payload: data },
            "Pairing code session located"
          );
          const result = await wa.getPairingCode(data);
          event.returnValue = result;
        } else {
          mainLogger.warn(
            { instanceId: instance._id },
            "Pairing code session missing"
          );
          event.returnValue = { status: false, message: "Instance not found" };
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Record Not Found!"
        };
      }
    } else if (type == "instance.logout") {
      const instance = await dbUtil2.getInstance({ _id: id });
      if (instance) {
        mainLogger.info(
          { instanceId: instance._id },
          "Instance logout requested"
        );
        await dbUtil2.updateInstance(
          { _id: id },
          {
            status: "loggedOut",
            message: "Device Logged Out, Deleting Session."
          }
        );
        try {
          deleteSession(instance);
        } catch (error2) {
          mainLogger.error(
            { err: error2, instanceId: instance._id },
            "Logout cleanup failed"
          );
        }
        event.returnValue = { status: true, message: "Qr Generated" };
        syncInstance();
        event.returnValue = { status: true, message: "Instance Logout!" };
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Logout Failed!"
        };
      }
    } else if (type == "instance.delete") {
      const instance = await dbUtil2.getInstance({ _id: id });
      if (instance) {
        mainLogger.info({ instanceId: id }, "Instance delete requested");
        await dbUtil2.removeInstance({ _id: instance._id });
        try {
          deleteSession(instance);
        } catch (error2) {
          mainLogger.error(
            { err: error2, instanceId: instance._id },
            "Instance delete cleanup failed"
          );
        }
        syncInstance();
        event.returnValue = { status: true, message: "Instance Removed!" };
      } else {
        event.returnValue = { status: false, message: "Instance Not Found!" };
      }
    } else if (type == "template.all") {
      const result = await dbUtil2.getAllTemplates();
      if (result) {
        event.returnValue = {
          status: true,
          message: "Templates Found",
          templates: result.templates
        };
      } else {
        event.returnValue = { status: false, message: "No Template Found!" };
      }
    } else if (type == "template.create") {
      const result = await dbUtil2.createTemplate(data);
      if (result) {
        syncTemplate();
        event.returnValue = {
          status: true,
          message: "New Template Added!",
          template: result
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Create New Template Failed!",
          template: result
        };
      }
    } else if (type == "template.update") {
      const result = await dbUtil2.updateTemplate({ _id: id }, data);
      if (result) {
        event.returnValue = { status: true, message: "Tempate Updated!" };
      } else {
        event.returnValue = {
          status: false,
          message: "Update Template Failed!"
        };
      }
      syncTemplate();
    } else if (type == "template.delete") {
      const template = await dbUtil2.getTemplate({ _id: id });
      if (template) {
        await dbUtil2.removeTemplate({ _id: template._id });
        event.returnValue = { status: true, message: "Template Removed!" };
        syncTemplate();
      }
    } else if (type == "auto-reply.all") {
      const result = await dbUtil2.getAllAutoReplies();
      if (result) {
        event.returnValue = {
          status: true,
          message: "AutoReply Found",
          autoReplies: result.autoReplies
        };
      } else {
        event.returnValue = { status: false, message: "No Template Found!" };
      }
    } else if (type == "auto-reply.create") {
      const result = await dbUtil2.createAutoReply(data);
      if (result) {
        event.returnValue = {
          status: true,
          message: "New Auto Reply Added!",
          autoReply: result
        };
        syncAutoReply();
      } else {
        event.returnValue = {
          status: false,
          message: "Create Auto Reply Failed!"
        };
      }
    } else if (type == "auto-reply.update") {
      const exist = await db_default.autoReplies.findOne({
        _id: { $ne: id },
        keyword: data.keyword,
        instances: { $in: data.instances }
      });
      if (exist) {
        event.returnValue = {
          status: false,
          message: "Auto reply already exist for selected instances"
        };
        return;
      }
      const result = await dbUtil2.updateAutoReply({ _id: id }, data);
      if (result) {
        event.returnValue = {
          status: true,
          message: "Auto Reply Updated!"
        };
        syncAutoReply();
      } else {
        event.returnValue = {
          status: false,
          message: "Update Auto Reply Failed!"
        };
      }
    } else if (type == "auto-reply.delete") {
      const ar = await dbUtil2.getAutoReply({ _id: id });
      if (ar) {
        await dbUtil2.removeAutoReply({ _id: ar._id });
        event.returnValue = { status: true, message: "Auto Reply Removed!" };
        syncAutoReply();
      }
    } else if (type == "auto-reply.report") {
      const messages = await db_default.messages.find({ messageType: "autoReply" }).sort({ createdAt: -1 });
      event.returnValue = {
        status: true,
        message: "Auto Reply Messages Found!",
        messages
      };
    } else if (type == "auto-reply.report.clear") {
      dbUtil2.clearAutoReplyMessage();
      event.returnValue = {
        status: true,
        message: "Auto Reply Messages Cleared!"
      };
    } else if (type == "setting") {
      const setting = await dbUtil2.getSetting();
      if (setting) {
        const country = normalizeCountrySetting(setting.country, { fallback: true });
        if (!sameCountrySetting(setting.country, country)) {
          await dbUtil2.saveSetting({ country });
        }
        event.returnValue = {
          status: true,
          setting: { ...setting, country }
        };
        return;
      } else {
        event.returnValue = {
          status: false,
          message: "Setting Not Found"
        };
      }
    } else if (type == "setting.update") {
      const setting = await dbUtil2.getSetting();
      if (setting) {
        let normalizedData = { ...data };
        if (Object.prototype.hasOwnProperty.call(data || {}, "country")) {
          try {
            normalizedData.country = normalizeCountrySetting(data.country);
          } catch (error2) {
            event.returnValue = { status: false, code: "invalid_localization", message: error2.message };
            return;
          }
        }
        const result = await dbUtil2.saveSetting(normalizedData);
        mainLogger.info(
          {
            result
          },
          "Application settings updated"
        );
        const updatedSetting = await syncSetting();
        event.returnValue = {
          status: true,
          message: "Setting Updated!",
          setting: updatedSetting
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Setting Not Found"
        };
      }
    } else if (type == "welcome.message.all") {
      const result = await dbUtil2.getAllWelcomeMessage();
      if (result) {
        event.returnValue = {
          status: true,
          message: "Welcome Message Found",
          autoReplies: result.autoReplies
        };
      } else {
        event.returnValue = {
          status: false,
          message: "No Welcome Message Found!"
        };
      }
    } else if (type == "welcome.message.create") {
      const ar = await db_default.autoReplies.findOne({
        keyword: data.keyword,
        instances: { $in: data.instances }
      });
      if (ar) {
        event.returnValue = {
          status: false,
          message: "Welcome Message Already Found"
        };
        return;
      }
      const result = await dbUtil2.createAutoReply(data);
      if (result) {
        event.returnValue = {
          status: true,
          message: "New Welcome Message Added!",
          autoReply: result
        };
        syncWelcomeMessage();
      } else {
        event.returnValue = {
          status: false,
          message: "Create Welcome Message Failed!"
        };
      }
    } else if (type == "welcome.message.update") {
      const exist = await db_default.autoReplies.findOne({
        _id: { $ne: id },
        keyword: data.keyword,
        instances: { $in: data.instances }
      });
      if (exist) {
        event.returnValue = {
          status: false,
          message: "Welcome Message already exist for selected instances"
        };
        return;
      } else {
      }
      const result = await dbUtil2.updateAutoReply({ _id: id }, data);
      if (result) {
        event.returnValue = {
          status: true,
          message: "Welcome Message Updated!"
        };
        syncWelcomeMessage();
      } else {
        event.returnValue = {
          status: false,
          message: "Update Welcome Message Failed!"
        };
      }
    } else if (type == "welcome.message.delete") {
      const ar = await dbUtil2.getAutoReply({ _id: id });
      if (ar) {
        await dbUtil2.removeAutoReply({ _id: ar._id });
        event.returnValue = {
          status: true,
          message: "Welcome Message Removed!"
        };
        syncWelcomeMessage();
      }
    } else if (type == "campaign.all") {
      const result = await dbUtil2.getAllCampaigns();
      if (result) {
        event.returnValue = {
          status: true,
          message: "Campaign Found",
          campaigns: result.campaigns
        };
      } else {
        event.returnValue = { status: false, message: "No Campaign Found!" };
      }
    } else if (type == "campaign.create") {
      const result = await dbUtil2.createCampaign(data);
      if (result) {
        event.returnValue = {
          status: true,
          message: "Send Message Stated!",
          campaign: result
        };
        syncCampaign();
        startJob();
        if (result.isSchedule) {
          scheduleJobs();
        }
      } else {
        event.returnValue = {
          status: false,
          message: "New Campaign Create Failed!"
        };
      }
    } else if (type == "campaign.reschedule") {
      const { campaign_id, schedule_at } = data;
      const campaign = await dbUtil2.getCampaign({ _id: campaign_id });
      if (campaign) {
        campaignLogger.info(
          { campaignId: campaign_id, scheduleAt: schedule_at },
          "Campaign reschedule requested"
        );
        await dbUtil2.updateCampaign(
          { _id: campaign_id },
          { scheduleAt: schedule_at }
        );
        event.returnValue = {
          status: true,
          message: "Campaign Rescheduled!"
        };
        syncCampaign();
        startJob();
        if (campaign.isSchedule) {
          scheduleJobs();
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.start") {
      const { campaign_id } = data;
      const campaign = await dbUtil2.getCampaign({
        _id: campaign_id,
        isSchedule: true
      });
      if (campaign) {
        await dbUtil2.updateCampaign(
          { _id: campaign_id },
          { scheduleAt: /* @__PURE__ */ new Date() }
        );
        syncCampaign();
        startJob();
        if (campaign.isSchedule) {
          scheduleJobs();
        }
        event.returnValue = {
          status: true,
          message: "Campaign Started!"
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.pause") {
      const camp = await dbUtil2.getCampaign({ _id: id });
      if (camp) {
        await dbUtil2.updateCampaign({ _id: id }, { status: 3 });
        event.returnValue = {
          status: true,
          message: "Campaign Paused!"
        };
        syncCampaign();
        await db_default.messages.update(
          { campaignId: id, status: 0 },
          { $set: { status: 6 } },
          //paused
          { multi: true }
        );
        const q = queueList["camp-" + id];
        if (q) {
          q.shutdown(2e3);
        } else {
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.cancel") {
      const camp = await dbUtil2.getCampaign({ _id: id });
      if (camp) {
        await dbUtil2.updateCampaign({ _id: id }, { status: 2 });
        await db_default.messages.update(
          { campaignId: id, status: 0 },
          // Pending To
          { $set: { status: 5 } },
          //Cancel
          { multi: true }
        );
        const q = queueList["camp-" + id];
        if (q) {
          q.shutdown(1e3);
        } else {
        }
        event.returnValue = {
          status: true,
          message: "Campaign Cancelled!"
        };
        syncCampaign();
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.resume") {
      const camp = await dbUtil2.getCampaign({ _id: id });
      if (camp) {
        await dbUtil2.updateCampaign({ _id: id }, { status: 4 });
        await db_default.messages.update(
          { campaignId: id, status: 6 },
          //Paused To
          { $set: { status: 0 } },
          //Pending
          { multi: true }
        );
        event.returnValue = {
          status: true,
          message: "Campaign Resumed!"
        };
        syncCampaign();
        startSendMessage(id);
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.resend.error.message") {
      const camp = await dbUtil2.getCampaign({ _id: id });
      if (camp) {
        await db_default.messages.update(
          {
            campaignId: id,
            $or: [{ status: 2 }, { status: 3 }, { status: 7 }]
          },
          //Error Meesage
          { $set: { status: 0, instanceId: data.instance_id } },
          //Pending
          { multi: true }
        );
        event.returnValue = {
          status: true,
          message: "Fail Message Resending Start!"
        };
        syncCampaign();
        startSendMessage(id);
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.report") {
      const camp = await dbUtil2.getCampaign({ _id: id });
      if (camp) {
        const messages = await db_default.messages.find({ campaignId: id }).sort({ index: 1 });
        event.returnValue = {
          status: true,
          message: "Campaign Messages Found!",
          messages
        };
        syncCampaign();
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.delete") {
      const camp = await dbUtil2.getCampaign({ _id: id });
      if (camp) {
        await dbUtil2.removeCampaign({ _id: id });
        await db_default.messages.remove({ campaignId: id }, { multi: true });
        event.returnValue = { status: true, message: "Campaign Removed!" };
        const q = queueList["camp-" + id];
        if (q) {
          q.shutdown(1e3);
        } else {
        }
        syncCampaign();
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign Not Found!"
        };
      }
    } else if (type == "campaign.clear") {
      const response = await dbUtil2.clearAllCampaign();
      if (response) {
        event.returnValue = {
          status: true,
          message: "Campaign cleared"
        };
        syncCampaign();
      } else {
        event.returnValue = {
          status: false,
          message: "Campaign clear failed!"
        };
      }
    } else if (type == "groups.all") {
      const i2 = await dbUtil2.getInstance({ _id: id });
      if (i2) {
        if (i2.status == "Ready") {
          const instance = WhatsAppInstances[id];
          if (instance) {
            const groups = await instance.getGroups();
            mainLogger.info(
              {
                instanceId: id,
                groupCount: groups?.length ?? 0
              },
              "Retrieved WhatsApp groups"
            );
            event.returnValue = {
              status: true,
              message: "Groups Found!",
              groups
            };
          } else {
            event.returnValue = {
              status: false,
              message: "Instance Not Found!"
            };
          }
        } else {
          event.returnValue = {
            status: false,
            message: "Instance Not Connected!"
          };
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Record Not Found!"
        };
      }
    } else if (type == "groups.members") {
      const i2 = await dbUtil2.getInstance({ _id: id });
      if (i2) {
        if (i2.status == "Ready") {
          const instance = WhatsAppInstances[id];
          if (instance) {
            const { groupIds } = data;
            const groups = await instance.getGroupsMembers(groupIds);
            mainLogger.info(
              {
                instanceId: id,
                groupIds
              },
              "Retrieved group member list"
            );
            event.returnValue = {
              status: true,
              message: "Groups Found!",
              groups
            };
          } else {
            event.returnValue = {
              status: false,
              message: "Instance Not Found!"
            };
          }
        } else {
          event.returnValue = {
            status: false,
            message: "Instance Not Connected!"
          };
        }
      } else {
        event.returnValue = {
          status: false,
          message: "Instance Record Not Found!"
        };
      }
    } else if (type == "groups.create") {
      event.returnValue = await createGroup(
        data.instance_id,
        data.setting,
        data.name,
        data.numbers
      );
    } else if (type == "contact.all") {
      const result = await dbUtil2.getAllContact();
      if (result) {
        event.returnValue = {
          status: true,
          message: "Contacts Found",
          contacts: result.contacts
        };
      } else {
        event.returnValue = {
          status: false,
          contacts: [],
          message: "No Contact Found!"
        };
      }
    } else if (type == "contact.create") {
      const result = await dbUtil2.createContact(data);
      if (result) {
        syncContact();
        event.returnValue = {
          status: true,
          message: "New Contact Added!",
          contact: result
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Create New Contact Failed!"
        };
      }
    } else if (type == "contact.update") {
      const result = await dbUtil2.saveContact({ _id: id }, data);
      if (result) {
        event.returnValue = { status: true, message: "Contact Updated!" };
      } else {
        event.returnValue = {
          status: false,
          message: "Update Contact Failed!"
        };
      }
      syncContact();
    } else if (type == "contact.delete") {
      const contact = await dbUtil2.getContact(id);
      if (contact) {
        await dbUtil2.removeContact({ _id: contact._id });
        event.returnValue = { status: true, message: "Contact Removed!" };
        syncContact();
      } else {
        event.returnValue = {
          status: false,
          message: "Contact Id not found!"
        };
      }
    } else if (type == "statistics") {
      const statistics = await getStatistics();
      event.returnValue = {
        status: true,
        statistics
      };
    } else if (type == "unsubscribe.all") {
      const result = await dbUtil2.getAllUnsubscribes();
      if (result) {
        event.returnValue = {
          status: true,
          message: "unsubscribe Found",
          unsubscribes: result.unsubscribes
        };
      } else {
        event.returnValue = {
          status: false,
          message: "No Unsubscribes Found!"
        };
      }
    } else if (type == "unsubscribe.add") {
      const result = await dbUtil2.addUnsubscribesList(data);
      if (result) {
        event.returnValue = {
          status: true,
          message: "Unsubscribe list updated"
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Update Unsubscribe list failed!"
        };
      }
    } else if (type == "unsubscribe.replace") {
      try {
        await dbUtil2.clearAllUnsubscribes();
        if (Array.isArray(data) && data.length) {
          await dbUtil2.addUnsubscribesList(data);
        }
        event.returnValue = {
          status: true,
          message: "Unsubscribe list updated"
        };
        await syncUnsubscribes();
      } catch (error2) {
        mainLogger.error({ err: error2 }, "unsubscribe.replace failed");
        event.returnValue = {
          status: false,
          message: "Update Unsubscribe list failed!"
        };
      }
    } else if (type == "unsubscribe.delete") {
      const unsubscribe = await dbUtil2.getUnsubscribe(id);
      if (unsubscribe) {
        await dbUtil2.removeUnsubscribe({ _id: unsubscribe._id });
        event.returnValue = { status: true, message: "Unsubscribe Removed!" };
        syncUnsubscribes();
      } else {
        event.returnValue = {
          status: false,
          message: "Unsubscribe Id not found!"
        };
      }
    } else if (type == "received.messages") {
      const response = await dbUtil2.getAllReceivedMessage();
      if (response) {
        event.returnValue = {
          status: true,
          message: "Received Messages Found!",
          messages: response.messages
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Received Messages Not Found!"
        };
      }
    } else if (type == "received.messages.clear") {
      const response = await dbUtil2.clearAllReceivedMessage();
      if (response) {
        event.returnValue = {
          status: true,
          message: "Received Messages cleared"
        };
      } else {
        event.returnValue = {
          status: false,
          message: "Received Messages Not Clear!"
        };
      }
    } else if (type == "check.storage") {
      taskLogger.info("check.storage invoked");
      const storage = getStorageStatsSnapshot();
      taskLogger.debug({ storage }, "check.storage snapshot");
      const setting = await dbUtil2.getSetting();
      if (setting) {
        const clearMB = (setting?.storage?.capacity ?? 100) * 1048576;
        taskLogger.debug({ clearMB }, "check.storage threshold");
        if (storage.total > clearMB) {
          taskLogger.info({ total: storage.total }, "cleanUp required");
          win2?.webContents.send("cleanUp", "");
        } else {
          taskLogger.info("cleanUp not required");
        }
      }
      event.returnValue = "";
      return;
    } else if (type == "storage") {
      const storage = getStorageStatsSnapshot();
      event.returnValue = storage;
      return;
    } else if (type == "clearUp") {
      try {
        asyncForEach(data, async (x) => {
          if (x == "campaign") {
            await dbUtil2.clear();
          } else if (x == "receivedMessage") {
            await dbUtil2.clearAllReceivedMessage();
          } else if (x == "contacts") {
            await dbUtil2.clearAllContact();
          } else if (x == "autoReplies") {
            await dbUtil2.clearAllAutoReplies();
          } else if (x == "templates") {
            await dbUtil2.clearAllTemplates();
          } else if (x == "unsubscribes") {
            await dbUtil2.clearAllUnsubscribes();
          }
        });
        event.returnValue = {
          status: true,
          message: "Clean Up Success"
        };
        syncStatistics();
      } catch (e) {
        taskLogger.error({ err: e?.message || e }, "Clean Up Error");
        event.returnValue = {
          status: false,
          message: "Clean Up Failed!"
        };
      }
    } else {
      event.returnValue = {
        status: false,
        message: `No function ${type} found!`
      };
    }
  };
  const createDeskproTaskFailure = (task, error2, code = "task_failed") => {
    const type = String(task?.type || "unknown");
    const response = {
      status: false,
      code,
      message: error2?.message || String(error2 || "Não foi possível concluir a operação.")
    };
    if (type === "contact.all") response.contacts = [];
    if (type === "instance.all") response.instances = [];
    if (type === "template.all") response.templates = [];
    if (type === "auto-reply.all") response.autoReplies = [];
    if (type === "welcome.message.all") response.welcomeMessages = [];
    if (type === "campaign.all") response.campaigns = [];
    if (type === "unsubscribe.all") response.unsubscribes = [];
    if (type === "received.messages") response.messages = [];
    if (type === "groups.all") response.groups = [];
    return response;
  };
  import_electron8.ipcMain.removeAllListeners("task");
  import_electron8.ipcMain.on("task", (event, task) => {
    executeDeskproTask(event, task).catch((error2) => {
      taskLogger.error(
        { type: task?.type, err: error2?.message || error2 },
        "legacy ipcMain task failed"
      );
      event.returnValue = createDeskproTaskFailure(task, error2);
    });
  });
  import_electron8.ipcMain.removeHandler("deskpro-task");
  import_electron8.ipcMain.handle("deskpro-task", async (_event, task) => {
    let response;
    let responseAssigned = false;
    let timeoutId;
    const virtualEvent = {};
    Object.defineProperty(virtualEvent, "returnValue", {
      configurable: false,
      enumerable: true,
      get() {
        return response;
      },
      set(value) {
        response = value;
        responseAssigned = true;
      }
    });
    try {
      await Promise.race([
        executeDeskproTask(virtualEvent, task),
        new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            const error2 = new Error("A operação excedeu o tempo limite de 120 segundos.");
            error2.code = "task_timeout";
            reject(error2);
          }, 12e4);
        })
      ]);
      if (!responseAssigned) {
        return createDeskproTaskFailure(
          task,
          new Error("A operação terminou sem retornar uma resposta."),
          "empty_task_response"
        );
      }
      return response;
    } catch (error2) {
      taskLogger.error(
        { type: task?.type, err: error2?.message || error2 },
        "asynchronous ipcMain task failed"
      );
      return createDeskproTaskFailure(task, error2, error2?.code || "task_failed");
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  });
  scheduleLicenseSyncJob("startup");
  return win2;
}
async function checkLic({ emitToRenderer = true } = {}) {
  const response = await licUtil.getLic(true);
  updateLicenseValidationState(response, { source: "checkLic-coordinated" });
  if (response.status) INSTANCE_LIMIT = response.detail?.instance ?? 10;
  if (emitToRenderer) sendMessage("license", response);
  return { local: response, payload: response };
}
async function onCloseWindows() {
  await dbUtil2.updateCampaign(
    { $or: [{ status: 0 }, { status: 4 }] },
    { status: 3 },
    { multi: true }
  );
  await db_default.messages.update(
    { status: 0 },
    { $set: { status: 6 } },
    //pending => paused
    { multi: true }
  );
  win?.destroy();
}
import_electron8.app.whenReady().then(async () => {
  wireAutoUpdater();
  scheduleAutoUpdateCheck("startup-delay", STARTUP_UPDATE_CHECK_DELAY_MS);
  initializeAutoUpdateCheckGuards();
  global.win = await createWindow();
  win.on("close", function(e) {
    if (!updateRestart) {
      e.preventDefault();
      win?.webContents.send("close", "");
    }
  });
});
import_electron8.app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") import_electron8.app.quit();
});
import_electron8.app.on("before-quit", () => {
  licenseSyncShutdown = true;
  if (licenseSyncTimer) {
    clearTimeout(licenseSyncTimer);
    licenseSyncTimer = null;
  }
});
import_electron8.app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});
import_electron8.app.on("activate", () => {
  mainLogger.info("Application activate event received");
  const allWindows = import_electron8.BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
import_electron8.ipcMain.handle("open-win", (event, arg) => {
  const childWindow = new import_electron8.BrowserWindow({
    webPreferences: {
      preload
      //nodeIntegration: true,
      //contextIsolation: false,
    }
  });
  if (import_electron8.app.isPackaged) {
    childWindow.loadFile(loadingHtml, { hash: arg });
    childWindow.loadFile(indexHtml, { hash: arg });
  } else {
    childWindow.loadURL(`${url}/#${arg}`);
  }
});
global.isInternetConnected = async function() {
  return new Promise((resolve) => {
    const config = {
      timeout: 5e3,
      //timeout connecting to each try (default 5000)
      retries: 3,
      //number of retries to do before failing (default 5)
      domain: "apple.com"
      //the domain to check DNS record of
    };
    (0, import_check_internet_connected.default)(config).then(() => {
      if (!internet) {
        loadSessionsAfterUiReady(true, {
          reason: "connectivity-restored"
        }).catch((error2) => {
          sessionLogger.error(
            { err: error2?.message || error2 },
            "loadSessionsAfterUiReady error"
          );
        });
      }
      resolve(true);
      internet = true;
    }).catch(() => {
      internet = false;
      waList = {};
      resolve(false);
      sendNotification({
        type: "info",
        message: "No Internet Connection",
        description: "Try turning ON your WIFI and MOBILE DATA for using the app"
      });
    });
  });
};
global.sendMessage = async function(key, data) {
  if (key === "update") {
    const eventName = String(data?.event || "").toLowerCase();
    const message = String(data?.message || data?.error || data?.detail || "");
    if (["checking", "not-available", "download-progress", "error"].includes(eventName) || isLegacyUpdateError(message)) {
      mainLogger.info({ eventName, message }, "suppressed update renderer event");
      return;
    }
  }
  win?.webContents.send(key, data);
};
global.sendNotification = async function(data) {
  sendMessage("notification", data);
};
function* chunks(arr, n) {
  for (let i2 = 0; i2 < arr.length; i2 += n) {
    yield arr.slice(i2, i2 + n);
  }
}
String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }
  return string + this;
};
var bulkNumberFilter = async function(payload) {
  const jobId = typeof payload?.jobId === "string" && payload.jobId.trim().length ? payload.jobId.trim() : `nf-${Date.now()}`;
  const contacts = Array.isArray(payload?.contacts) ? payload.contacts : [];
  const selectedInstanceIds = Array.isArray(payload?.instanceIds) ? payload.instanceIds.map((id) => typeof id === "string" ? id.trim() : "").filter((id) => id.length) : [];
  const includeDetails = Boolean(payload?.includeDetails);
  mainLogger.info(
    {
      jobId,
      contactCount: contacts.length,
      selectedInstanceCount: selectedInstanceIds.length,
      includeDetails
    },
    "bulkNumberFilter started"
  );
  const jobState = {
    id: jobId,
    cancelled: false,
    total: contacts.length,
    completed: 0,
    startedAt: Date.now()
  };
  numberFilterJobs.set(jobId, jobState);
  const emitResult = (items, { final = false } = {}) => {
    sendMessage("number.filter", {
      jobId,
      items,
      total: jobState.total,
      completed: jobState.completed,
      cancelled: jobState.cancelled,
      timestamp: Date.now(),
      final
    });
  };
  try {
    if (!contacts.length) {
      emitResult([], { final: true });
      return;
    }
    const allInstances = await dbUtil2.getAllInstances({ status: "Ready" });
    const readyInstances = (allInstances?.instances ?? []).filter(
      (instance) => instance.status === "Ready"
    );
    const filteredReadyInstances = selectedInstanceIds.length ? readyInstances.filter(
      (instance) => selectedInstanceIds.includes(instance._id)
    ) : readyInstances;
    if (!filteredReadyInstances.length) {
      const fallback = contacts.map((row) => ({
        ...row,
        number: row.number,
        old_number: row.number,
        is_valid: false,
        jobId,
        possible_numbers: [],
        possible_jids: []
      }));
      emitResult(fallback, { final: true });
      sendNotification({
        message: "Number Filter",
        description: "Selected instances are not ready"
      });
      return;
    }
    const connectedInstanceIds = filteredReadyInstances.filter(
      (instance) => Boolean(WhatsAppInstances[instance._id]?.isConnected)
    ).map((instance) => instance._id);
    const fallbackInstanceIds = filteredReadyInstances.map(
      (instance) => instance._id
    );
    const candidateInstanceIds = connectedInstanceIds.length ? connectedInstanceIds : fallbackInstanceIds;
    if (!candidateInstanceIds.length) {
      const fallback = contacts.map((row) => ({
        ...row,
        number: row.number,
        old_number: row.number,
        is_valid: false,
        jobId,
        possible_numbers: [],
        possible_jids: []
      }));
      emitResult(fallback, { final: true });
      sendNotification({
        message: "Number Filter",
        description: "No ready instance is connected"
      });
      return;
    }
    const totalCount = contacts.length;
    const dummy = [];
    const setting = await dbUtil2.getSetting();
    const dialCode = setting?.country?.dialCode;
    const startTime = import_node_perf_hooks.performance.now();
    const metrics = {
      total: totalCount,
      instances: candidateInstanceIds.length,
      assignmentMs: 0,
      firstResultMs: 0,
      batches: 0,
      perInstance: {}
    };
    for (const id of candidateInstanceIds) {
      metrics.perInstance[id] = { batches: 0, numbers: 0, durationMs: 0 };
    }
    const resultsByIndex = new Array(totalCount);
    let processedCount = 0;
    const publishProgress = (final = false) => {
      const snapshot = [];
      for (let i2 = 0; i2 < resultsByIndex.length; i2 += 1) {
        const entry = resultsByIndex[i2];
        if (entry) {
          snapshot.push(entry);
        }
      }
      dummy.length = 0;
      dummy.push(...snapshot);
      jobState.completed = processedCount;
      emitResult(dummy, { final });
    };
    const setResults = (items) => {
      let newItems = 0;
      for (const { index, payload: payload2 } of items) {
        if (!resultsByIndex[index]) {
          resultsByIndex[index] = payload2;
          newItems += 1;
        }
      }
      if (newItems) {
        processedCount += newItems;
        if (!metrics.firstResultMs) {
          metrics.firstResultMs = Math.round(import_node_perf_hooks.performance.now() - startTime);
        }
        publishProgress();
      }
    };
    const createLimiter2 = (limit) => {
      let active = 0;
      const waiting = [];
      const next = () => {
        if (active >= limit) {
          return;
        }
        const entry = waiting.shift();
        if (!entry) {
          return;
        }
        active += 1;
        const run = entry.fn;
        Promise.resolve().then(run).then(entry.resolve).catch(entry.reject).finally(() => {
          active -= 1;
          next();
        });
      };
      return (fn) => new Promise((resolve, reject) => {
        waiting.push({ fn, resolve, reject });
        next();
      });
    };
    const assignmentLoad = /* @__PURE__ */ new Map();
    const perInstanceRows = /* @__PURE__ */ new Map();
    for (const id of candidateInstanceIds) {
      assignmentLoad.set(id, 0);
      perInstanceRows.set(id, []);
    }
    const pickInstance = () => {
      let chosenId = null;
      let minLoad = Number.POSITIVE_INFINITY;
      for (const id of candidateInstanceIds) {
        const current = assignmentLoad.get(id) ?? 0;
        if (current < minLoad) {
          minLoad = current;
          chosenId = id;
        }
      }
      if (chosenId !== null) {
        assignmentLoad.set(chosenId, minLoad + 1);
      }
      return chosenId;
    };
    for (let index = 0; index < contacts.length; index += 1) {
      if (jobState.cancelled) {
        break;
      }
      const data = contacts[index];
      if (trimPhoneNumber(data?.number) === "") {
        setResults([
          {
            index,
            payload: {
              ...data,
              number: "",
              old_number: data.number,
              is_valid: false,
              jobId,
              possible_numbers: [],
              possible_jids: []
            }
          }
        ]);
        continue;
      }
      const targetInstanceId = pickInstance();
      if (!targetInstanceId) {
        setResults([
          {
            index,
            payload: {
              ...data,
              number: data.number,
              old_number: data.number,
              is_valid: false,
              jobId,
              possible_numbers: [],
              possible_jids: []
            }
          }
        ]);
        continue;
      }
      perInstanceRows.get(targetInstanceId)?.push({ data, index });
    }
    metrics.assignmentMs = Math.round(import_node_perf_hooks.performance.now() - startTime);
    if (processedCount === totalCount || jobState.cancelled) {
      publishProgress(true);
      return;
    }
    const targetSlices = Math.max(candidateInstanceIds.length * 4, 4);
    const baseBatch = targetSlices ? Math.ceil(totalCount / targetSlices) : totalCount;
    const BATCH_SIZE = Math.max(8, Math.min(32, baseBatch || 8));
    const limiter2 = createLimiter2(
      Math.max(1, Math.min(12, candidateInstanceIds.length * 3))
    );
    const detailLimiter = includeDetails ? createLimiter2(4) : null;
    const processBatch = async (instanceId, rows) => {
      if (jobState.cancelled) {
        return [];
      }
      const batchStart = import_node_perf_hooks.performance.now();
      let mappedResults;
      const instance = WhatsAppInstances[instanceId];
      if (!instance || !instance.isConnected) {
        mappedResults = rows.map(({ data, index }) => ({
          index,
          payload: {
            ...data,
            number: data.number,
            old_number: data.number,
            is_valid: false,
            jobId,
            possible_numbers: [],
            possible_jids: []
          }
        }));
      } else {
        try {
          const rawIds = rows.map(({ data }) => data.number);
          const results = await instance.verifyIds(rawIds, {
            preferLid: false,
            dialCode
          });
          mappedResults = rows.map(({ data, index }, idx) => {
            const verification = results?.[idx];
            const jid = typeof verification?.jid === "string" ? verification.jid : "";
            let nextNumber = data.number;
            if (verification?.exists && jid.includes("@")) {
              nextNumber = jid.split("@")[0];
            }
            const possibleNumbers = Array.isArray(verification?.possibleNumbers) ? verification.possibleNumbers : [];
            const possibleJids = Array.isArray(verification?.possibleJids) ? verification.possibleJids : [];
            return {
              index,
              payload: {
                ...data,
                number: nextNumber,
                old_number: data.number,
                is_valid: Boolean(verification?.exists),
                jid,
                jobId,
                possible_numbers: possibleNumbers,
                possible_jids: possibleJids
              }
            };
          });
          if (includeDetails && detailLimiter) {
            const detailResults = await Promise.all(
              mappedResults.map(
                ({ payload: payload2 }) => detailLimiter(async () => {
                  if (!payload2.is_valid) {
                    return null;
                  }
                  const targetJid = payload2.jid && payload2.jid.includes("@") ? payload2.jid : `${payload2.number}@s.whatsapp.net`;
                  try {
                    return await instance.getContactDetails(targetJid);
                  } catch {
                    return null;
                  }
                })
              )
            );
            mappedResults = mappedResults.map((entry, idx) => {
              const details = detailResults[idx];
              if (details) {
                entry.payload.details = {
                  name: details.name ?? null,
                  phone: details.phone ?? null,
                  profile_pic: details.profile_pic ?? null,
                  is_business: Boolean(details.is_business),
                  status: details.status ?? null,
                  verified_name: details.verified_name ?? null
                };
                entry.payload.profile_pic = details.profile_pic ?? null;
                entry.payload.is_business = Boolean(details.is_business);
              }
              return entry;
            });
          }
        } catch (error2) {
          mainLogger.error({ err: error2 }, "number.filter batch failure");
          mappedResults = rows.map(({ data, index }) => ({
            index,
            payload: {
              ...data,
              number: data.number,
              old_number: data.number,
              is_valid: false,
              jobId,
              possible_numbers: [],
              possible_jids: []
            }
          }));
        }
      }
      const durationMs = import_node_perf_hooks.performance.now() - batchStart;
      const tracker = metrics.perInstance[instanceId];
      if (tracker) {
        tracker.durationMs += durationMs;
        tracker.batches += 1;
        tracker.numbers += rows.length;
      }
      metrics.batches += 1;
      return mappedResults;
    };
    const instanceTasks = [];
    for (const [instanceId, rows] of perInstanceRows.entries()) {
      if (!rows.length) {
        continue;
      }
      instanceTasks.push(
        (async () => {
          for (let i2 = 0; i2 < rows.length; i2 += BATCH_SIZE) {
            if (jobState.cancelled) {
              break;
            }
            const chunk = rows.slice(i2, i2 + BATCH_SIZE);
            const results = await limiter2(
              () => processBatch(instanceId, chunk)
            );
            if (jobState.cancelled) {
              break;
            }
            setResults(results);
          }
        })()
      );
    }
    await Promise.all(instanceTasks);
    publishProgress(true);
    const totalDurationMs = Math.round(import_node_perf_hooks.performance.now() - startTime);
    mainLogger.info(
      {
        totalMs: totalDurationMs,
        assignmentMs: metrics.assignmentMs,
        firstResultMs: metrics.firstResultMs,
        batches: metrics.batches,
        perInstance: Object.entries(metrics.perInstance).map(([id, info]) => ({
          id,
          batches: info.batches,
          numbers: info.numbers,
          durationMs: Math.round(info.durationMs)
        })),
        cancelled: jobState.cancelled
      },
      "bulkNumberFilter metrics"
    );
  } catch (error2) {
    mainLogger.error({ err: error2 }, "bulkNumberFilter error");
    const fallback = contacts.map((row) => ({
      ...row,
      number: row.number,
      old_number: row.number,
      is_valid: false,
      jobId,
      possible_numbers: [],
      possible_jids: []
    }));
    emitResult(fallback, { final: true });
  } finally {
    numberFilterJobs.delete(jobId);
  }
};
var numberFilter = async function(number) {
  try {
    if (isValidWhatsappNumber(number)) {
      mainLogger.info({ number }, "numberFilter: number already valid");
      return true;
    } else if (trimPhoneNumber(number) == "") {
      return false;
    } else {
      const allInstances = await dbUtil2.getAllInstances();
      const instances = allInstances.instances.filter((x) => x.status == "Ready").map((x) => x._id);
      if (instances.length > 0) {
        const instance = WhatsAppInstances[instances[0]];
        const setting = await dbUtil2.getSetting();
        if (instance) {
          const result = await instance.verifyId(number, {
            preferLid: false,
            dialCode: setting?.country?.dialCode
          });
          mainLogger.info(
            {
              exists: result?.exists,
              jid: result?.jid,
              possibleJids: result?.possibleJids
            },
            "numberFilter verification result"
          );
          if (result?.exists) return true;
          return false;
        } else {
          mainLogger.warn("numberFilter: instance is null");
          return false;
        }
      } else {
        mainLogger.warn("numberFilter: no ready instances found");
        return false;
      }
    }
  } catch (e) {
    mainLogger.error({ err: e }, "numberFilter encountered an error");
    return false;
  }
};
var createGroup = async function(instanceId, setting, name, numberData) {
  return new Promise(async (resolve) => {
    const i2 = await dbUtil2.getInstance({ _id: instanceId });
    if (i2) {
      mainLogger.info(
        { instanceId, status: i2.status },
        "createGroup: instance found"
      );
      if (i2.status == "Ready") {
        const instance = WhatsAppInstances[instanceId];
        if (!instance) {
          resolve({ status: false, message: `Instance is null` });
          return;
        }
        const queue = await EmbeddedQueue2.Queue.createQueue({
          inMemoryOnly: true
        });
        queue.process(
          "createGroup",
          async function(job) {
            const name2 = job.data.name;
            const numbers = job.data.numbers;
            var dummy = [];
            await asyncForEach(numbers, async (data) => {
              const jid = await instance.getWhatsAppId(data.number, {
                preferLid: false,
                dialCode: setting?.country?.dialCode
              });
              const result = await instance.verifyId(jid, {
                preferLid: false,
                dialCode: setting?.country?.dialCode
              });
              if (result?.exists) {
                const number = await instance.getWhatsAppId(data.number, {
                  preferLid: false,
                  dialCode: setting?.country?.dialCode
                });
                dummy.push(number);
              }
            });
            const group = await instance.createNewGroup(name2, dummy);
            await instance.groupSettingUpdate(group.id, setting);
            return group;
          },
          1
        );
        queue.on(EmbeddedQueue2.Event.Complete, async (job, result) => {
          sendNotification({
            message: "Create Group",
            description: `Group ${job.data.name} craeted with ${result} Members.`
          });
          if (job.data.isLast) {
            resolve({
              status: true,
              message: `Group ${job.data.name} craeted with ${result.participants.length} Members.`
            });
          }
        });
        const subList = [...chunks(numberData, 256)];
        await asyncForEach(subList, async (data, i3) => {
          queue.createJob({
            type: "createGroup",
            data: {
              numbers: data,
              name: subList.length == 1 ? name : `${name} ${i3 + 1}`,
              index: i3,
              isLast: i3 == subList.length - 1
            },
            priority: EmbeddedQueue2.Priority.HIGH
          });
        });
      } else {
        resolve({ status: false, message: `Instance not connected!` });
      }
    } else {
      resolve({ status: false, message: `Instance not found!` });
    }
  });
};
global.syncAll = async function() {
  await syncProduct();
  await syncSetting();
  await syncInstance();
  await syncTemplate();
  await syncAutoReply();
  await syncWelcomeMessage();
  await syncContact();
  await syncStatistics();
  await syncUnsubscribes();
};
global.syncInstance = async function() {
  const data = await dbUtil2.getAllInstances();
  if (data) {
    sendMessage("instances", data.instances);
  }
};
global.syncTemplate = async function() {
  const data = await dbUtil2.getAllTemplates();
  if (data) {
    sendMessage("templates", data.templates);
  }
};
global.syncAutoReply = async function() {
  const data = await dbUtil2.getAllAutoReplies();
  if (data) {
    sendMessage("autoReplies", data.autoReplies);
  }
};
global.syncWelcomeMessage = async function() {
  const data = await dbUtil2.getAllWelcomeMessage();
  if (data) {
    sendMessage("welcomeMessages", data.autoReplies);
  }
};
global.syncSetting = async function() {
  let data = await dbUtil2.getSetting();
  if (data) {
    mainLogger.info({ hasSetting: true }, "syncSetting: existing setting");
    const country = normalizeCountrySetting(data.country, { fallback: true });
    if (!sameCountrySetting(data.country, country)) {
      await dbUtil2.saveSetting({ country });
      data = { ...data, country };
    }
    sendMessage("setting", data);
    return data;
  } else {
    mainLogger.warn("syncSetting: setting not found, creating default");
    const data2 = await dbUtil2.createSetting({
      _id: "app-setting",
      ...defaultSetting,
      country: { ...DEFAULT_COUNTRY_SETTING }
    });
    mainLogger.info({ settingId: data2?._id }, "syncSetting: default created");
    sendMessage("setting", data2);
    return data2;
  }
};
global.syncCampaign = async function() {
  const data = await dbUtil2.getAllCampaigns();
  if (data) {
    sendMessage("campaigns", data.campaigns);
  }
};
global.syncReceivedMessage = async function() {
  const response = await dbUtil2.getAllReceivedMessage();
  if (response) {
    sendMessage("received.message", response.messages);
  }
};
global.syncContact = async function() {
  const data = await dbUtil2.getAllContact();
  if (data) {
    sendMessage("contacts", data.contacts);
  }
};
global.syncProduct = async function() {
  const response = await licUtil.getProductDetails();
  if (response.status) {
    product = response.product;
    sendMessage("product", response.product);
    return product;
  } else {
    mainLogger.error("syncProduct: unable to fetch product details");
    return null;
  }
};
global.logEvent = async function(eventData) {
  sendMessage("logEvent", eventData);
};
global.syncUnsubscribes = async function() {
  const data = await dbUtil2.getAllUnsubscribes();
  if (data) {
    sendMessage("unsubscribes", data.unsubscribes);
  }
};
var DATABASE_DIR = import_node_path5.default.join(import_electron8.app.getPath("userData"), "database");
var STORAGE_STATS_CACHE_TTL_MS = 30 * 1e3;
var createEmptyStorageStats = () => ({
  total: 0,
  campaign: 0,
  contacts: 0,
  autoReplies: 0,
  receivedMessage: 0,
  templates: 0,
  unsubscribes: 0
});
var storageStatsCache = {
  value: createEmptyStorageStats(),
  updatedAt: 0,
  inflight: null
};
var statDbFileSafe = async (fileName) => {
  const filePath = import_node_path5.default.join(DATABASE_DIR, fileName);
  try {
    const stats = await import_fs_extra4.default.stat(filePath);
    return stats?.size ?? 0;
  } catch (error2) {
    if (error2?.code !== "ENOENT") {
      mainLogger.error({ err: error2, fileName }, "storage stat error");
    }
    return 0;
  }
};
var computeStorageStats = async () => {
  const [
    messagesSize,
    campaignSize,
    contactsSize,
    autoRepliesSize,
    receivedMessageSize,
    templatesSize,
    unsubscribesSize
  ] = await Promise.all([
    statDbFileSafe("messages.db"),
    statDbFileSafe("campaign.db"),
    statDbFileSafe("contacts.db"),
    statDbFileSafe("auto-replies.db"),
    statDbFileSafe("received-messages.db"),
    statDbFileSafe("templates.db"),
    statDbFileSafe("unsubscribes.db")
  ]);
  const total = messagesSize + campaignSize + contactsSize + autoRepliesSize + receivedMessageSize + templatesSize + unsubscribesSize;
  return {
    total,
    campaign: messagesSize + campaignSize,
    contacts: contactsSize,
    autoReplies: autoRepliesSize,
    receivedMessage: receivedMessageSize,
    templates: templatesSize,
    unsubscribes: unsubscribesSize
  };
};
var refreshStorageStats = () => {
  if (storageStatsCache.inflight) {
    return storageStatsCache.inflight;
  }
  storageStatsCache.inflight = (async () => {
    try {
      const value = await computeStorageStats();
      storageStatsCache.value = value;
      storageStatsCache.updatedAt = Date.now();
      return value;
    } catch (error2) {
      mainLogger.error({ err: error2 }, "refreshStorageStats error");
      throw error2;
    } finally {
      storageStatsCache.inflight = null;
    }
  })();
  return storageStatsCache.inflight;
};
var getStorageStatsSnapshot = () => {
  const hasCache = Boolean(storageStatsCache.value);
  const lastUpdated = storageStatsCache.updatedAt;
  const isStale = !hasCache || Date.now() - lastUpdated > STORAGE_STATS_CACHE_TTL_MS;
  if (isStale && !storageStatsCache.inflight) {
    refreshStorageStats().catch(() => {
    });
  }
  return storageStatsCache.value ?? createEmptyStorageStats();
};
var getStorageStats = async ({ forceRefresh = false } = {}) => {
  if (!forceRefresh && storageStatsCache.value && Date.now() - storageStatsCache.updatedAt <= STORAGE_STATS_CACHE_TTL_MS) {
    return storageStatsCache.value;
  }
  try {
    return await refreshStorageStats();
  } catch {
    return storageStatsCache.value ?? createEmptyStorageStats();
  }
};
refreshStorageStats().catch(() => {
});
var getStatistics = async function() {
  const setting = await dbUtil2.getSetting();
  const countPromises = {
    instances: db_default.instances.count(),
    autoReplies: db_default.autoReplies.count({ keyword: { $ne: "bs-welcome" } }),
    welcomeMessages: db_default.autoReplies.count({ keyword: "bs-welcome" }),
    templates: db_default.templates.count(),
    totalMessages: db_default.messages.count(),
    campaignMessages: db_default.messages.count({ messageType: "normal" }),
    pendingMessages: db_default.messages.count({ messageType: "normal", status: 0 }),
    successMessages: db_default.messages.count({ status: 1, messageType: "normal" }),
    errorMessages: db_default.messages.count({ messageType: "normal", status: 2 }),
    instanceNotFoundMessages: db_default.messages.count({
      messageType: "normal",
      status: 3
    }),
    invalidNumberMessages: db_default.messages.count({
      messageType: "normal",
      status: 4
    }),
    cancelledMessages: db_default.messages.count({ messageType: "normal", status: 5 }),
    pausedMessages: db_default.messages.count({ messageType: "normal", status: 6 }),
    instanceNotConnectedMessages: db_default.messages.count({
      messageType: "normal",
      status: 7
    }),
    notAWhatsappNumberMessages: db_default.messages.count({
      messageType: "normal",
      status: 8
    }),
    unsubscribeMessages: db_default.messages.count({
      messageType: "normal",
      status: 9
    }),
    arMessages: db_default.messages.count({ messageType: "auto-reply" }),
    arWelcomeMessages: db_default.messages.count({ messageType: "welcome" }),
    campaigns: db_default.campaigns.count(),
    contacts: db_default.contacts.count()
  };
  const [
    instances,
    autoReplies,
    welcomeMessages,
    templates,
    totalMessages,
    campaignMessages,
    pendingMessages,
    successMessages,
    errorMessages,
    instanceNotFoundMessages,
    invalidNumberMessages,
    cancelledMessages,
    pausedMessages,
    instanceNotConnectedMessages,
    notAWhatsappNumberMessages,
    unsubscribeMessages,
    arMessages,
    arWelcomeMessages,
    campaigns,
    contacts
  ] = await Promise.all(Object.values(countPromises));
  let countryStats = [];
  try {
    const countryCounts = /* @__PURE__ */ new Map();
    const defaultCountryCode = typeof setting?.country?.code === "string" ? setting.country.code.trim().toUpperCase() : null;
    const resolveCache = /* @__PURE__ */ new Map();
    const parseValidNumber = (value, countryCode) => {
      if (!value) {
        return null;
      }
      try {
        const parsed = countryCode ? (0, import_libphonenumber_js2.parsePhoneNumberFromString)(value, countryCode) : (0, import_libphonenumber_js2.parsePhoneNumberFromString)(value);
        if (parsed?.isValid?.()) {
          return parsed;
        }
      } catch {
      }
      return null;
    };
    const resolveCountryCode = (rawNumber) => {
      if (!rawNumber) {
        return null;
      }
      const cacheKey = `${String(rawNumber)}|${defaultCountryCode || ""}`;
      if (resolveCache.has(cacheKey)) {
        return resolveCache.get(cacheKey);
      }
      const strNumber = String(rawNumber).trim();
      if (!strNumber) {
        resolveCache.set(cacheKey, null);
        return null;
      }
      let country = null;
      const direct = parseValidNumber(strNumber);
      if (direct?.country) {
        country = direct.country;
      } else {
        const digits = trimPhoneNumber(strNumber);
        if (digits) {
          const asInternational = parseValidNumber(`+${digits}`);
          if (asInternational?.country) {
            country = asInternational.country;
          }
        }
        if (!country && defaultCountryCode) {
          const withDefault = parseValidNumber(strNumber, defaultCountryCode) || parseValidNumber(trimPhoneNumber(strNumber), defaultCountryCode);
          if (withDefault?.country) {
            country = withDefault.country;
          }
        }
      }
      resolveCache.set(cacheKey, country);
      return country;
    };
    const ensureEntry = (countryCode) => {
      if (!countryCounts.has(countryCode)) {
        countryCounts.set(countryCode, {
          country: countryCode,
          countryCode,
          campaignMessages: 0,
          autoReplies: 0,
          welcomeMessages: 0,
          chatbotMessages: 0
        });
      }
      return countryCounts.get(countryCode);
    };
    const registerNumber = (rawNumber, metricKey) => {
      const countryCode = resolveCountryCode(rawNumber);
      if (!countryCode) {
        return;
      }
      const entry = ensureEntry(countryCode);
      entry[metricKey] += 1;
    };
    const campaignMessageDocs = await db_default.messages.find(
      {
        messageType: "normal",
        campaignId: { $exists: true }
      },
      {
        campaignId: 1,
        index: 1
      }
    );
    if (Array.isArray(campaignMessageDocs) && campaignMessageDocs.length) {
      const campaignIds = Array.from(
        new Set(
          campaignMessageDocs.map((doc) => doc?.campaignId).filter((id) => Boolean(id))
        )
      );
      const campaignLookup = /* @__PURE__ */ new Map();
      if (campaignIds.length) {
        const campaignDocs = await db_default.campaigns.find(
          { _id: { $in: campaignIds } },
          { numbers: 1 }
        );
        for (const campaign of campaignDocs ?? []) {
          if (!campaign?._id) {
            continue;
          }
          const numbers = Array.isArray(campaign?.numbers) ? campaign.numbers : [];
          campaignLookup.set(campaign._id, numbers);
        }
      }
      for (const message of campaignMessageDocs) {
        const numbers = campaignLookup.get(message?.campaignId);
        if (!numbers?.length) {
          continue;
        }
        const messageIndex = Number(message?.index);
        if (!Number.isFinite(messageIndex) || messageIndex < 0) {
          continue;
        }
        const numberEntry = numbers[messageIndex];
        if (!numberEntry) {
          continue;
        }
        const resolvedNumber = typeof numberEntry === "string" ? numberEntry : numberEntry?.number ?? numberEntry?.phone ?? null;
        if (!resolvedNumber) {
          continue;
        }
        registerNumber(resolvedNumber, "campaignMessages");
      }
    }
    const directMessageTypes = [
      { key: "autoReplies", messageType: "auto-reply" },
      { key: "welcomeMessages", messageType: "welcome" },
      { key: "chatbotMessages", messageType: "chatbot" }
    ];
    const directFindPromises = directMessageTypes.map(
      (d) => db_default.messages.find({ messageType: d.messageType }, { number: 1 })
    );
    const directResults = await Promise.all(directFindPromises);
    for (let i2 = 0; i2 < directMessageTypes.length; i2++) {
      const { key } = directMessageTypes[i2];
      const docs = directResults[i2] ?? [];
      for (const doc of docs) {
        if (!doc?.number) {
          continue;
        }
        registerNumber(doc.number, key);
      }
    }
    countryStats = Array.from(countryCounts.values()).map((entry) => {
      const total = entry.campaignMessages + entry.autoReplies + entry.welcomeMessages + entry.chatbotMessages;
      if (!total) {
        return null;
      }
      return {
        country: entry.countryCode,
        countryCode: entry.countryCode,
        value: total,
        total,
        count: total,
        campaignMessages: entry.campaignMessages,
        messages: entry.campaignMessages,
        autoReplies: entry.autoReplies,
        welcomeMessages: entry.welcomeMessages,
        chatbotMessages: entry.chatbotMessages
      };
    }).filter(Boolean).sort((a, b) => b.total - a.total);
  } catch (error2) {
    mainLogger.error({ err: error2 }, "getStatistics country stats error");
  }
  const storage = await getStorageStats();
  var data = {
    instances,
    autoReplies,
    welcomeMessages,
    templates,
    campaigns,
    contacts,
    totalMessages,
    successMessages,
    errorMessages,
    instanceNotFoundMessages,
    instanceNotConnectedMessages,
    invalidNumberMessages,
    notAWhatsappNumberMessages,
    unsubscribeMessages,
    pausedMessages,
    //failedMessages: failedMessages,
    pendingMessages,
    cancelledMessages,
    arMessages,
    arWelcomeMessages,
    campaignMessages,
    storage,
    countryStats
  };
  return data;
};
global.syncStatistics = async function() {
  const statistics = await getStatistics();
  sendMessage("statistics", statistics);
};
var createSession = async function(data) {
  sessionLogger.info({ key: data.key, name: data.name }, "createSession");
  const wa = WhatsAppInstances[data.key];
  if (wa) {
    sessionLogger.info({ key: data.key }, "createSession re-init");
    await wa.stopAll();
    await wa.init();
    return wa;
  } else {
    sessionLogger.info({ key: data.key }, "createSession init");
    const instance = new instance_default(
      data.key,
      data.name,
      data.useMobile,
      data.isMultiFileAuth
    );
    instance.autoRejectCalls = data.autoRejectCalls ?? false;
    await instance.createNewClient();
    if (!(data.isNew ?? false)) {
      await instance.init();
    }
    WhatsAppInstances[data.key] = instance;
    return instance;
  }
};
var sessionBootstrapState = {
  queue: [],
  processing: false,
  enqueuedKeys: /* @__PURE__ */ new Set()
};
var RESTORE_ELIGIBLE_STATUSES = /* @__PURE__ */ new Set([
  "connectionclosed",
  "connectionlost",
  "error",
  "timedout",
  "badsession",
  "bad session",
  "connecting..."
]);
var SKIP_BOOTSTRAP_STATUSES = /* @__PURE__ */ new Set(["qr", "qr timeout", "qr_timeout"]);
var normalizeInstanceStatus = (status) => String(status ?? "").trim().toLowerCase();
var computeBootstrapDelay = (delayHintMs) => {
  const baseDelay = Number.isFinite(delayHintMs) ? Math.max(0, delayHintMs) : SESSION_BOOTSTRAP_DELAY_MS;
  const jitter = SESSION_BOOTSTRAP_JITTER_MS ? randomRange(0, SESSION_BOOTSTRAP_JITTER_MS) : 0;
  return Math.max(0, baseDelay + jitter);
};
var shouldAutoDeleteInstance = (instance) => {
  if (!AUTO_DELETE_FLAGGED_SESSIONS || !instance) {
    return false;
  }
  const status = normalizeInstanceStatus(instance.status);
  if (AUTO_DELETE_INSTANCE_STATUSES.has(status)) {
    return true;
  }
  if (instance.deleteOnBoot || instance.deleteOnStart) {
    return true;
  }
  return false;
};
var shouldBootstrapInstance = (instance, { isRestore } = {}) => {
  if (!instance || !instance._id) {
    return false;
  }
  const status = normalizeInstanceStatus(instance.status);
  if (SKIP_BOOTSTRAP_STATUSES.has(status)) {
    return false;
  }
  if (isRestore) {
    return RESTORE_ELIGIBLE_STATUSES.has(status) && !waList[instance._id];
  }
  return true;
};
var enqueueSessionBootstrap = (payload, options = {}) => {
  if (!payload?.key) {
    return;
  }
  if (sessionBootstrapState.enqueuedKeys.has(payload.key)) {
    return;
  }
  sessionBootstrapState.enqueuedKeys.add(payload.key);
  sessionBootstrapState.queue.push({
    payload,
    delayMs: options.delayMs
  });
  if (!sessionBootstrapState.processing) {
    setImmediate(processSessionBootstrapQueue);
  }
};
var processSessionBootstrapQueue = async () => {
  if (sessionBootstrapState.processing) {
    return;
  }
  const nextItem = sessionBootstrapState.queue.shift();
  if (!nextItem) {
    sessionBootstrapState.processing = false;
    return;
  }
  sessionBootstrapState.processing = true;
  const delayMs = computeBootstrapDelay(nextItem.delayMs);
  if (delayMs) {
    await sleep(delayMs);
  }
  try {
    await createSession(nextItem.payload);
  } catch (error2) {
    sessionLogger.error(
      { err: error2, instanceKey: nextItem.payload?.key },
      "Session bootstrap error"
    );
    try {
      sentryCaptureException(error2, {
        extra: {
          source: "session-bootstrap-queue",
          instanceKey: nextItem.payload?.key ?? "unknown"
        }
      });
    } catch {
    }
  } finally {
    if (nextItem.payload?.key) {
      sessionBootstrapState.enqueuedKeys.delete(nextItem.payload.key);
    }
    sessionBootstrapState.processing = false;
    setImmediate(processSessionBootstrapQueue);
  }
};
var deriveInstanceIdFromEntry = (entryName = "") => {
  if (typeof entryName !== "string" || !entryName.length) {
    return null;
  }
  if (entryName.endsWith("-backup.json")) {
    return entryName.slice(0, -12);
  }
  if (entryName.endsWith(".json")) {
    return entryName.slice(0, -5);
  }
  if (entryName.endsWith("-backup")) {
    return entryName.slice(0, -7);
  }
  return entryName;
};
async function cleanupOrphanSessions(instances = []) {
  try {
    const validIds = new Set(
      instances.map((instance) => instance?._id).filter(Boolean)
    );
    const entries = await import_fs_extra4.default.readdir(sessionPath2).catch(() => []);
    if (!entries.length) {
      return;
    }
    for (const entry of entries) {
      if (!entry || entry === "." || entry === "..") {
        continue;
      }
      const entryPath = import_node_path5.default.join(sessionPath2, entry);
      const stats = await import_fs_extra4.default.stat(entryPath).catch(() => null);
      if (!stats) {
        continue;
      }
      let isSessionArtifact = false;
      if (stats.isDirectory()) {
        if (entry.endsWith("-backup")) {
          isSessionArtifact = true;
        } else {
          isSessionArtifact = await import_fs_extra4.default.pathExists(import_node_path5.default.join(entryPath, "creds.json")).catch(() => false);
        }
      } else if (stats.isFile()) {
        isSessionArtifact = entry.endsWith(".json") || entry.endsWith("-backup.json");
      }
      if (!isSessionArtifact) {
        continue;
      }
      const instanceId = deriveInstanceIdFromEntry(entry);
      if (!instanceId || validIds.has(instanceId)) {
        continue;
      }
      const runningInstance = WhatsAppInstances[instanceId];
      if (runningInstance) {
        try {
          await runningInstance.stopAll();
        } catch (error2) {
          sessionLogger.warn(
            {
              key: instanceId,
              err: error2?.message || error2
            },
            "cleanupOrphanSessions: stop instance failed"
          );
        }
        delete WhatsAppInstances[instanceId];
      }
      const removed = deleteFileOrDir(entryPath);
      if (removed) {
        sessionLogger.info(
          { entry },
          "cleanupOrphanSessions: removed artifact"
        );
      } else {
        sessionLogger.warn(
          { entry },
          "cleanupOrphanSessions: failed to remove"
        );
      }
    }
  } catch (error2) {
    sessionLogger.warn(
      { err: error2?.message || error2 },
      "cleanupOrphanSessions error"
    );
  }
}
async function backupSessionsSnapshot() {
  try {
    const data = await dbUtil2.getAllInstances();
    const instances = Array.isArray(data?.instances) ? data.instances : [];
    if (!instances.length) {
      sessionLogger.info(
        "backupSessionsSnapshot: no instances discovered, skipping"
      );
      return;
    }
    let examined = 0;
    let copied = 0;
    let missing = 0;
    let failed = 0;
    for (const instance of instances) {
      if (!instance?._id) {
        continue;
      }
      examined += 1;
      const sourcePath = instance.isMultiFileAuth ? import_node_path5.default.join(sessionPath2, instance._id) : import_node_path5.default.join(sessionPath2, `${instance._id}.json`);
      const backupPath = instance.isMultiFileAuth ? import_node_path5.default.join(sessionPath2, `${instance._id}-backup`) : import_node_path5.default.join(sessionPath2, `${instance._id}-backup.json`);
      const exists = await import_fs_extra4.default.pathExists(sourcePath);
      if (!exists) {
        missing += 1;
        continue;
      }
      try {
        await import_fs_extra4.default.copy(sourcePath, backupPath, { overwrite: true });
        copied += 1;
      } catch (error2) {
        failed += 1;
        sessionLogger.warn(
          { instanceId: instance._id, err: error2?.message || error2 },
          "backupSessionsSnapshot: copy failed"
        );
      }
    }
    sessionLogger.info(
      { examined, copied, missing, failed },
      "backupSessionsSnapshot completed"
    );
  } catch (error2) {
    sessionLogger.error(
      { err: error2?.message || error2 },
      "backupSessionsSnapshot error"
    );
  }
}
var loadSessions = async function(isRestore) {
  sessionLogger.info({ isRestore }, "loadSessions invoked");
  if (!isRestore) {
    await dbUtil2.updateInstance(
      { status: "Ready" },
      {
        qr: "",
        status: "Loading",
        message: "Please wait until session load complete"
      }
    );
  }
  try {
    const data = await dbUtil2.getAllInstances();
    const instances = data?.instances ?? [];
    await cleanupOrphanSessions(instances);
    if (!instances.length) {
      return;
    }
    let autoDeletedCount = 0;
    for (const instance of instances) {
      if (!instance?._id) {
        continue;
      }
      if (shouldAutoDeleteInstance(instance)) {
        try {
          sessionLogger.info(
            { key: instance._id, status: instance.status },
            "Startup cleanup: removing session"
          );
          await deleteSession(instance);
          await dbUtil2.updateInstance(
            { _id: instance._id },
            {
              status: "QR",
              message: "Session removed during startup cleanup",
              qr: ""
            }
          );
          autoDeletedCount++;
        } catch (cleanupError) {
          sessionLogger.warn(
            { key: instance._id, err: cleanupError?.message || cleanupError },
            "Failed to cleanup session during startup"
          );
        }
        continue;
      }
      if (!shouldBootstrapInstance(instance, { isRestore })) {
        continue;
      }
      const useMobileLogin = (instance.loginType ?? "qr").toLowerCase() === "phone";
      enqueueSessionBootstrap(
        {
          key: instance._id,
          name: instance.name,
          useMobile: useMobileLogin,
          isMultiFileAuth: instance.isMultiFileAuth ?? false,
          autoRejectCalls: instance.autoRejectCalls ?? false
        },
        {
          delayMs: SESSION_BOOTSTRAP_DELAY_MS
        }
      );
    }
    if (autoDeletedCount) {
      sessionLogger.info(
        { count: autoDeletedCount },
        "Startup cleanup removed stale sessions"
      );
    }
  } catch (error2) {
    sessionLogger.error({ err: error2?.message || error2 }, "loadSessions error");
    try {
      sentryCaptureException(error2, {
        extra: { source: "loadSessions", isRestore }
      });
    } catch {
    }
  }
};
async function loadSessionsAfterUiReady(isRestore, {
  reason = "general",
  timeoutMs = RENDERER_READY_TIMEOUT_MS,
  ignoreLicenseGate = false
} = {}) {
  if (!ignoreLicenseGate && !shouldAllowPhaseExecution("load-sessions", reason)) {
    return null;
  }
  const ready = await waitForRendererReady({ timeoutMs });
  if (!ready) {
    sessionLogger.warn(
      { reason, timeoutMs },
      "Renderer readiness wait timed out; loading sessions anyway"
    );
  } else {
    sessionLogger.debug({ reason }, "Renderer readiness confirmed");
  }
  const result = await loadSessions(isRestore);
  completedPostLicensePhases.add("load-sessions");
  return result;
}
async function deleteSession(instance) {
  const instanceId = instance._id;
  try {
    waList[instanceId] = true;
    const filePath = instance.isMultiFileAuth ? import_node_path5.default.join(sessionPath2, instanceId) : import_node_path5.default.join(sessionPath2, `${instanceId}.json`);
    const backupFilePath = instance.isMultiFileAuth ? import_node_path5.default.join(sessionPath2, `${instanceId}-backup`) : import_node_path5.default.join(sessionPath2, `${instanceId}-backup.json`);
    const wa = WhatsAppInstances[instanceId];
    if (wa) {
      await wa.waLogout();
      await wa.stopAll();
    }
    delete WhatsAppInstances[instanceId];
    if (checkFileOrDirExists(filePath)) {
      if (instance.isMultiFileAuth) {
        deleteFileOrDir(filePath);
      } else {
        deleteFileOrDir(filePath);
      }
    }
    if (checkFileOrDirExists(backupFilePath)) {
      if (instance.isMultiFileAuth) {
        deleteFileOrDir(backupFilePath);
      } else {
        deleteFileOrDir(backupFilePath);
      }
    }
  } catch (e) {
    sessionLogger.error({ err: e?.message || e }, "deleteSession error");
  }
}
var scheduleJobs = async () => {
  await import_node_schedule.default.gracefulShutdown();
  const campaigns = await db_default.campaigns.find({
    status: 5,
    isSchedule: true,
    scheduleAt: { $gte: /* @__PURE__ */ new Date() }
  });
  campaignLogger.info(
    { count: campaigns.length },
    "scheduleJobs: campaigns awaiting schedule"
  );
  await asyncForEach(campaigns, async (campaign) => {
    import_node_schedule.default.scheduleJob(campaign.scheduleAt, function() {
      campaignLogger.info(
        { campaignId: campaign._id },
        "Scheduled campaign job triggered"
      );
      startJob();
    });
    campaignLogger.info(
      { campaignId: campaign._id, scheduleAt: campaign.scheduleAt },
      "Scheduled campaign job created"
    );
  });
};
var startJob = async () => {
  campaignLogger.info("startJob: scanning campaigns");
  const setting = await dbUtil2.getSetting();
  const campaigns = await db_default.campaigns.find({
    $or: [
      {
        status: 0,
        //pending
        isSchedule: false
      },
      {
        status: 5,
        //scheduled
        isSchedule: true,
        scheduleAt: { $lte: /* @__PURE__ */ new Date() }
        //schedule time is less than now
      }
    ]
  });
  campaignLogger.debug({ campaigns }, "startJob: campaign payload");
  if (campaigns) {
    campaignLogger.info(
      { count: campaigns.length },
      "startJob: campaigns found"
    );
    const createMessageQueue = await EmbeddedQueue2.Queue.createQueue({
      inMemoryOnly: false
    });
    createMessageQueue.process(
      "createMessage",
      async function(job) {
        const m = await db_default.messages.insert(job.data);
        if (m) {
          campaignLogger.debug("Message added to send queue");
          return true;
        } else {
          campaignLogger.warn("Message create failed");
          return false;
        }
      },
      1
    );
    createMessageQueue.process(
      "startSending",
      async function(job) {
        campaignLogger.info(
          { campaignId: job.data },
          "startSending job started"
        );
        await startSendMessage(job.data);
        return true;
      },
      1
    );
    const campaignQueue = await EmbeddedQueue2.Queue.createQueue({
      inMemoryOnly: false
    });
    campaignQueue.process(
      "campaignQueue",
      async function(job) {
        try {
          const campaign = job.data.campaign;
          const setting2 = job.data.setting;
          const rawInstances = Array.isArray(campaign.instances) ? campaign.instances.filter(Boolean) : [];
          let instanceList = Array.from(new Set(rawInstances));
          if (instanceList.includes("all")) {
            const result = await dbUtil2.getAllInstances();
            instanceList = (Array.isArray(result?.instances) ? result.instances : []).filter((x) => x.status == "Ready").map((x) => x._id);
          }
          const totalInstances = instanceList.length;
          const switchAccountInterval = Math.max(
            1,
            Number(setting2?.sending?.instance?.switchAccount) || 1
          );
          if (totalInstances === 0) {
            campaignLogger.warn(
              { campaignId: campaign._id },
              "campaignQueue: no ready instances available"
            );
          }
          campaignLogger.info(
            { campaignId: campaign._id },
            "campaignQueue job started"
          );
          var messagesToSend = [];
          await asyncForEach(campaign.numbers, async (data, index) => {
            campaignLogger.debug({ row: data }, "campaignQueue: number row");
            const phoneNumber = data?.number;
            var isValidNumber = true;
            var status = 0;
            if (campaign.excludeUnsubscribes ?? false) {
              const unsubscribe = await dbUtil2.getUnsubscribeByNumber(
                phoneNumber
              );
              if (unsubscribe) {
                campaignLogger.info(
                  { phoneNumber },
                  "Skipping unsubscribed number"
                );
                status = 9;
              }
            }
            campaignLogger.debug(
              { isValidNumber },
              "campaignQueue: number validation"
            );
            let resolvedInstanceIndex = -1;
            let instanceId = null;
            if (totalInstances > 0) {
              resolvedInstanceIndex = Math.floor(index / switchAccountInterval) % totalInstances;
              instanceId = instanceList[resolvedInstanceIndex];
            }
            campaignLogger.debug(
              { index, instanceIndex: resolvedInstanceIndex, instanceId },
              "campaignQueue: instance assignment"
            );
            if (!instanceId && status === 0) {
              status = 3;
            }
            messagesToSend.push({
              instanceId,
              //instanceNumber: instanceNumber,
              campaignId: campaign._id,
              //message: message,
              //data:data,
              //number: number,
              //type: campaign.type,
              //buttons
              //buttons: campaign.buttons,
              //menu
              // menus: campaign.menus,
              // menuTitle: campaign.menuTitle,
              // menuMiddle: campaign.menuMiddle,
              //footer: campaign.footer ?? "",
              //media
              //media: mediaList, //campaign.media ?? [],
              //other
              messageType: "normal",
              status,
              index
            });
            campaignLogger.debug("campaignQueue: message queued");
          });
          campaignLogger.info(
            { campaignId: campaign._id },
            "Change campaign status to sending"
          );
          await db_default.campaigns.update(
            { _id: campaign._id },
            { $set: { status: 4 } },
            //sending...
            { multi: false }
          );
          campaignLogger.info("campaignQueue: enqueue createMessage");
          await createMessageQueue.createJob({
            type: "createMessage",
            data: messagesToSend
          });
          campaignLogger.info(
            { campaignId: campaign._id },
            "campaignQueue: enqueue startSending"
          );
          await createMessageQueue.createJob({
            type: "startSending",
            data: campaign._id
          });
        } catch (err) {
          campaignLogger.error(
            { err: err?.message || err },
            "campaignQueue process error"
          );
        }
      },
      5
    );
    await asyncForEach(campaigns, async (campaign) => {
      await campaignQueue.createJob({
        type: "campaignQueue",
        data: { campaign, setting }
      });
    });
  } else {
    campaignLogger.info("startJob: no campaigns to process");
  }
};
var startSendMessage = async (cid) => {
  const campaign = await dbUtil2.getCampaign({ _id: cid });
  if (!campaign) {
    campaignLogger.warn(
      { campaignId: cid },
      "startSendMessage: campaign not found"
    );
    return;
  }
  const campaignInstances = Array.isArray(campaign.instances) ? campaign.instances : [];
  var instanceList = campaignInstances.slice();
  if (campaignInstances.some((x) => x === "all")) {
    const result = await dbUtil2.getAllInstances();
    const readyInstances = Array.isArray(result?.instances) ? result.instances.filter((x) => x.status == "Ready") : [];
    instanceList = readyInstances.map((x) => x._id);
  }
  const setting = await dbUtil2.getSetting();
  campaignLogger.debug(
    { campaignId: cid },
    "startSendMessage: settings loaded"
  );
  const messages = await db_default.messages.find({
    campaignId: cid,
    status: 0
  }).sort({ index: 1 }).limit(
    setting?.sending?.configuration?.sendParallel ? instanceList.length : 10
  );
  if (messages) {
    campaignLogger.info(
      { campaignId: cid, total: messages.length },
      "startSendMessage: messages fetched"
    );
    if (messages.length == 0) {
      await db_default.campaigns.update(
        { _id: cid },
        { $set: { status: 1 } },
        //completed...
        { multi: false }
      );
      return;
    }
    const q = queueList["camp-" + cid];
    if (q) {
      campaignLogger.info(
        { campaignId: cid },
        "startSendMessage: existing queue found"
      );
      q.shutdown(1e3);
    }
    const queue = await EmbeddedQueue2.Queue.createQueue({
      inMemoryOnly: false
    });
    queueList["camp-" + cid] = queue;
    queue.process(
      "sendMessage",
      async function(job) {
        const isTesting = false;
        const m = job.data.message;
        const index = job.data.index;
        const setting2 = await dbUtil2.getSetting();
        const campaign2 = job.data.campaign;
        try {
          var data = campaign2.numbers[m.index];
          var jid = data.number;
          var message = campaign2.message;
          var instance = null;
          var instanceNumber = "";
          var status = 0;
          var msgResult;
          const m2 = await db_default.messages.findOne({ _id: m._id });
          var returnValue = "";
          const i2 = await dbUtil2.getInstance({ _id: m.instanceId });
          if (i2) {
            instanceNumber = i2.number;
          }
          campaignLogger.debug(
            {
              campaignId: campaign2._id,
              jobIndex: index,
              messageIndex: m.index,
              to: jid,
              from: instanceNumber
            },
            "sendMessage job started"
          );
          if (m2 && (m2.status ?? 0) == 0) {
            if (i2) {
              instance = await WhatsAppInstances[m.instanceId];
              if (i2.status != "Ready" || !instance) {
                await db_default.messages.update(
                  { _id: m._id },
                  { $set: { status: 7, instanceNumber: i2.number } },
                  { multi: false }
                );
                returnValue = "Instance Not Ready";
              } else {
                var isWhatAppNumber = false;
                const verifyResult = await instance.verifyId(jid, {
                  dialCode: setting2?.country?.dialCode
                });
                campaignLogger.debug(
                  { result: verifyResult },
                  "verifyId result"
                );
                if (verifyResult?.exists ?? false) {
                  isWhatAppNumber = true;
                  jid = verifyResult.jid;
                } else {
                  isWhatAppNumber = false;
                }
                if (!isWhatAppNumber) {
                  campaignLogger.warn(
                    { jid },
                    "sendMessage: not a WhatsApp number"
                  );
                  status = 8;
                  returnValue = "Not a whatsapp number";
                } else {
                  campaignLogger.debug({ jid }, "sendMessage: resolved jid");
                  data.index = m.index;
                  data.name = data.name != "" ? data.name : await dbUtil2.findName(data.number ?? "");
                  const mediaList = (campaign2.mediaType ?? "gallery") === "gallery" ? campaign2.media ?? [] : campaign2.mediaUrls ?? [];
                  campaignLogger.debug(
                    { count: mediaList.length },
                    "sendMessage: media count"
                  );
                  if (setting2?.sending?.configuration?.sendMedia == "before" && (campaign2.type == 1 || campaign2.type == 3 || campaign2.type == 5 || campaign2.type == 7)) {
                    campaignLogger.info("sendMessage: media block (before)");
                    var isSendMediaFailed = false;
                    await asyncForEach(mediaList, async (media) => {
                      var mediaObj = media.path ? media : { path: media, caption: null };
                      const result = await instance.sendMediaFile(
                        jid,
                        mediaObj,
                        data
                      );
                      campaignLogger.debug(
                        { result },
                        "sendMessage: media result"
                      );
                      if (result === false) {
                        isSendMediaFailed = true;
                      }
                    });
                    status = isSendMediaFailed ? 2 : 1;
                  }
                  if (campaign2.type == 0 || campaign2.type == 1) {
                    campaignLogger.info("sendMessage: text message");
                    if (message != "") {
                      const result = await instance.sendTextMessage(
                        jid,
                        message,
                        data
                      );
                      campaignLogger.debug(
                        { result },
                        "sendMessage: text result"
                      );
                      if (result) {
                        status = 1;
                      } else {
                        status = 2;
                      }
                    }
                  } else if (campaign2.type == 2 || campaign2.type == 3) {
                    campaignLogger.info("sendMessage: button message");
                    const btnData = {
                      text: message,
                      buttons: campaign2.buttons,
                      footerText: campaign2.footer
                    };
                    const result = await instance.sendButtonMessage(
                      jid,
                      btnData,
                      data
                    );
                    if (result) {
                      status = 1;
                    } else {
                      status = 2;
                    }
                  } else if (campaign2.type == 4 || campaign2.type == 5) {
                    campaignLogger.info("sendMessage: menu message");
                    var menuList = campaign2.menus.map((menuItem) => {
                      return {
                        title: menuItem.title ?? "",
                        description: menuItem.description ?? "",
                        rowId: "menu-" + i2
                      };
                    });
                    const listData = {
                      title: campaign2.menuTitle ?? "",
                      description: campaign2.message ?? "",
                      footer: campaign2.footer ?? "",
                      buttonText: campaign2.buttonText ?? "",
                      sections: [
                        {
                          title: campaign2.menuMiddle,
                          rows: menuList
                        }
                      ],
                      listType: 0
                    };
                    const result = await instance.sendListMessage(
                      jid,
                      listData,
                      data
                    );
                    if (result) {
                      status = 1;
                    } else {
                      status = 2;
                    }
                  } else if (campaign2.type == 6 || campaign2.type == 7) {
                    campaignLogger.info("sendMessage: poll message");
                    if (message != "") {
                      await instance.sendTextMessage(jid, message, data);
                    }
                    const pollMessage = {
                      name: campaign2.poll.question,
                      values: campaign2.poll.options,
                      selectableCount: campaign2.poll.multiSelect == true ? 0 : 1
                    };
                    const result = await instance.sendPollMessage(
                      jid,
                      pollMessage,
                      data
                    );
                    if (result) {
                      status = 1;
                    } else {
                      status = 2;
                    }
                    msgResult = result.pollResult ?? {};
                  }
                  if (setting2?.sending?.configuration?.sendMedia === "after" && (campaign2.type == 1 || campaign2.type == 3 || campaign2.type == 5 || campaign2.type == 7)) {
                    campaignLogger.info("sendMessage: media block (after)");
                    var isSendMediaFailed = false;
                    await asyncForEach(mediaList, async (media) => {
                      var mediaObj = media.path ? media : { path: media, caption: null };
                      const result = await instance.sendMediaFile(
                        jid,
                        mediaObj
                      );
                      campaignLogger.debug(
                        { result },
                        "sendMessage: media result"
                      );
                      if (result === false) {
                        isSendMediaFailed = true;
                      }
                    });
                    status = isSendMediaFailed ? 2 : 1;
                  }
                }
                await db_default.messages.update(
                  { _id: m._id },
                  {
                    $set: {
                      status,
                      instanceNumber: i2.number,
                      sentAt: /* @__PURE__ */ new Date(),
                      response: msgResult
                    }
                  },
                  { multi: false }
                );
                var randomSleep = randomRange(
                  setting2?.sending?.delay?.duration?.minimum,
                  setting2?.sending?.delay?.duration?.maximum
                );
                campaignLogger.debug(
                  { randomSleep },
                  "sendMessage: throttle delay"
                );
                await sleep(randomSleep * 1e3 - 1500);
                if (setting2?.sending?.sleep?.enable && ((m.index + 1) % setting2?.sending?.sleep?.afterMessages == 0 || setting2?.sending?.sleep?.afterMessages == 1)) {
                  await sleep(
                    randomRange(
                      setting2?.sending?.sleep?.duration?.minimum * 1e3,
                      setting2?.sending?.sleep?.duration?.maximum * 1e3
                    )
                  );
                }
                returnValue = "Sent";
              }
            } else {
              await db_default.messages.update(
                { _id: m._id },
                { $set: { status: 2 } },
                { multi: false }
              );
              returnValue = "Instance Not Found";
            }
          } else {
            returnValue = "Message status is not pending";
          }
          return returnValue;
        } catch (e) {
          campaignLogger.error({ err: e?.message || e }, "sendMessage error");
          await db_default.messages.update(
            { _id: m._id },
            { $set: { status: 3, instanceNumber: i.number } },
            { multi: false }
          );
          return e.message;
        }
      },
      setting?.sending?.configuration?.sendParallel ?? false ? instanceList.length : 1
    );
    queue.on(EmbeddedQueue2.Event.Complete, async (job, result) => {
      campaignLogger.info(
        {
          jobIndex: job.data.index,
          messageIndex: job.data.message.index,
          result
        },
        "sendMessage job complete"
      );
      if (job.data.isLast) {
        campaignLogger.info("sendMessage: queue re-init");
        const totalMessages = await db_default.messages.count({
          campaignId: cid,
          status: 0
        });
        if (totalMessages == 0) {
          await db_default.campaigns.update(
            { _id: cid, $or: [{ status: 0 }, { status: 4 }] },
            { $set: { status: 1 } },
            //completed...
            { multi: false }
          );
        }
        startSendMessage(cid);
      }
      syncCampaign();
    });
    asyncForEach(messages, async (m, index) => {
      await sleep(10);
      campaignLogger.debug(
        { messageIndex: m.index, total: campaign.numbers.length },
        "sendMessage job queued"
      );
      await queue.createJob({
        type: "sendMessage",
        data: {
          message: m,
          index,
          totalMessages: messages.length,
          setting,
          campaign,
          isLast: index == messages.length - 1
        },
        priority: EmbeddedQueue2.Priority.LOW
      });
    });
    syncCampaign();
  } else {
    await db_default.campaigns.update(
      { _id: cid },
      { $set: { status: 1 } },
      //completed...
      { multi: false }
    );
    campaignLogger.info(
      { campaignId: cid },
      "startSendMessage: no messages found"
    );
  }
};
setInterval(function() {
  isInternetConnected();
}, 1e4);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MAIN_DIST,
  RENDERER_DIST,
  USER_DATA_PATH,
  VITE_DEV_SERVER_URL
});
