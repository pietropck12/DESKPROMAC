"use strict";

const moment = require("moment-timezone");
const { getCountryCallingCode, isSupportedCountry } = require("libphonenumber-js");

const DEFAULT_COUNTRY_SETTING = Object.freeze({
  code: "BR",
  dialCode: "55",
  language: "pt_br",
  timezone: "America/Sao_Paulo"
});

const SUPPORTED_LANGUAGES = new Set([
  "af", "am", "ar", "az", "bg", "bn", "ca", "de", "el", "en", "es", "es_es", "es_mx",
  "fi", "fr", "gu", "he", "hi", "id", "it", "km", "kn", "ml", "ms", "nl", "pa", "pl",
  "pt", "pt_br", "ru", "sq", "ta", "te", "th", "tr", "uk", "ur", "vi", "zh_cn", "zh_hk",
  "zh_tw", "fil", "uz"
]);

function normalizeCountrySetting(value, { fallback = false } = {}) {
  const input = value && typeof value === "object" ? value : {};
  const code = String(input.code || "").trim().toUpperCase();
  const language = String(input.language || "").trim().toLowerCase();
  const timezone = String(input.timezone || "").trim();
  if (!isSupportedCountry(code)) {
    if (fallback) return { ...DEFAULT_COUNTRY_SETTING };
    throw new Error("País inválido.");
  }
  if (!SUPPORTED_LANGUAGES.has(language)) {
    if (fallback) return { ...DEFAULT_COUNTRY_SETTING };
    throw new Error("Idioma inválido.");
  }
  if (!moment.tz.zone(timezone)) {
    if (fallback) return { ...DEFAULT_COUNTRY_SETTING };
    throw new Error("Fuso horário inválido.");
  }
  return {
    code,
    dialCode: String(getCountryCallingCode(code)),
    language,
    timezone
  };
}

function sameCountrySetting(left, right) {
  return left?.code === right?.code &&
    String(left?.dialCode) === String(right?.dialCode) &&
    left?.language === right?.language &&
    left?.timezone === right?.timezone;
}

module.exports = { DEFAULT_COUNTRY_SETTING, SUPPORTED_LANGUAGES, normalizeCountrySetting, sameCountrySetting };
