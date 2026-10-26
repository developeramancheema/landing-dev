/**
 * Standalone visitor location detection (no login required).
 *
 * Usage:
 *   import { getVisitorLocation } from 'get-user-country';
 *   const loc = await getVisitorLocation();
 *   // { country, timezone, currency, phoneCode, source }
 *
 * Requires a backend endpoint (default: /api/ip-geo) that returns:
 *   { country, timezone, currency, phoneCode, source }
 */
const STORAGE_KEY = 'visitor_location_v1';
const STORAGE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const COUNTRY_MAP = {
    IN: { phoneCode: '+91', currency: 'INR' },
    US: { phoneCode: '+1', currency: 'USD' },
    CA: { phoneCode: '+1', currency: 'CAD' },
    GB: { phoneCode: '+44', currency: 'GBP' },
    AE: { phoneCode: '+971', currency: 'AED' },
    AU: { phoneCode: '+61', currency: 'AUD' },
    SG: { phoneCode: '+65', currency: 'SGD' },
    DE: { phoneCode: '+49', currency: 'EUR' },
    FR: { phoneCode: '+33', currency: 'EUR' },
    JP: { phoneCode: '+81', currency: 'JPY' },
};
const COUNTRY_TIMEZONE_MAP = {
    IN: 'Asia/Kolkata',
    US: 'America/New_York',
    CA: 'America/Toronto',
    GB: 'Europe/London',
    AE: 'Asia/Dubai',
    AU: 'Australia/Sydney',
    SG: 'Asia/Singapore',
    DE: 'Europe/Berlin',
    FR: 'Europe/Paris',
    JP: 'Asia/Tokyo',
};
function isIso2(code) {
    return Boolean(code && code.length === 2);
}
function normalizeCallingCode(raw) {
    if (!raw?.trim())
        return '+1';
    const t = raw.trim();
    return t.startsWith('+') ? t : `+${t}`;
}
function getPhoneCodeForCountry(country) {
    return COUNTRY_MAP[country.toUpperCase()]?.phoneCode ?? '+1';
}
function getCurrencyForCountry(country) {
    return COUNTRY_MAP[country.toUpperCase()]?.currency ?? 'USD';
}
function getTimezoneForCountry(country) {
    return COUNTRY_TIMEZONE_MAP[country.toUpperCase()] ?? null;
}
function getBrowserTimezone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    }
    catch {
        return 'UTC';
    }
}
function getCountryFromBrowserLocale() {
    if (typeof navigator === 'undefined')
        return null;
    try {
        const locale = new Intl.Locale(navigator.language);
        const region = locale.region?.toUpperCase();
        return isIso2(region) ? region : null;
    }
    catch {
        return null;
    }
}
function readCache() {
    if (typeof window === 'undefined')
        return null;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw)
            return null;
        const parsed = JSON.parse(raw);
        if (!parsed.exp || parsed.exp <= Date.now()) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return {
            country: parsed.country,
            timezone: parsed.timezone,
            currency: parsed.currency,
            phoneCode: parsed.phoneCode,
            source: parsed.source,
        };
    }
    catch {
        return null;
    }
}
export function saveVisitorLocation(location) {
    if (typeof window === 'undefined')
        return;
    const payload = {
        ...location,
        exp: Date.now() + STORAGE_TTL_MS,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}
function resolveGeoApiUrl(custom) {
    if (custom)
        return custom;
    if (typeof window === 'undefined')
        return '/api/ip-geo';
    return `${window.location.origin}/api/ip-geo`;
}
async function fetchGeoFromApi(url) {
    try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok)
            return null;
        const data = (await res.json());
        if (!data.country && !data.timezone)
            return null;
        return data;
    }
    catch {
        return null;
    }
}
function toSource(raw) {
    if (raw === 'edge')
        return 'edge';
    if (raw === 'ip')
        return 'ip';
    if (raw === 'localStorage')
        return 'localStorage';
    if (raw === 'browser')
        return 'browser';
    return 'default';
}
function buildLocation(country, timezone, currency, phoneCode, source) {
    return { country, timezone, currency, phoneCode, source };
}
/**
 * Main API — no login required.
 * Detection order:
 * 1. localStorage cache
 * 2. /api/ip-geo (edge + IP)
 * 3. browser locale + Intl timezone
 * 4. defaults
 */
export async function getVisitorLocation(options = {}) {
    const { geoApiUrl: customGeoUrl, defaultCountry = 'IN', defaultTimezone = 'UTC', useCache = true, } = options;
    if (useCache) {
        const cached = readCache();
        if (cached)
            return cached;
    }
    const geo = await fetchGeoFromApi(resolveGeoApiUrl(customGeoUrl));
    const country = (isIso2(geo?.country) ? geo.country.toUpperCase() : null) ??
        getCountryFromBrowserLocale() ??
        defaultCountry;
    const timezone = geo?.timezone?.trim() ||
        getBrowserTimezone() ||
        getTimezoneForCountry(country) ||
        defaultTimezone;
    const currency = geo?.currency?.trim() || getCurrencyForCountry(country);
    const phoneCode = geo?.phoneCode
        ? normalizeCallingCode(geo.phoneCode)
        : getPhoneCodeForCountry(country);
    const source = geo
        ? toSource(geo.source)
        : getCountryFromBrowserLocale()
            ? 'browser'
            : 'default';
    const result = buildLocation(country, timezone, currency, phoneCode, source);
    if (useCache)
        saveVisitorLocation(result);
    return result;
}
/** Sync fallback for instant UI before async resolves */
export function getVisitorLocationSync(options = {}) {
    const { defaultCountry = 'IN', defaultTimezone = 'UTC', useCache = true, } = options;
    if (useCache) {
        const cached = readCache();
        if (cached)
            return cached;
    }
    const country = getCountryFromBrowserLocale() ?? defaultCountry;
    const timezone = getBrowserTimezone() || getTimezoneForCountry(country) || defaultTimezone;
    return buildLocation(country, timezone, getCurrencyForCountry(country), getPhoneCodeForCountry(country), 'browser');
}
