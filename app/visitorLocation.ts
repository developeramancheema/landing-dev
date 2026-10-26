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

import { COUNTRY_MAP, COUNTRY_TIMEZONE_MAP } from '@/lib/CountryList';

export type VisitorLocationSource =
  | 'localStorage'
  | 'browser'
  | 'edge'
  | 'ip'
  | 'default';

export type VisitorLocation = {
  country: string; // ISO2, e.g. "IN"
  timezone: string; // IANA, e.g. "Asia/Kolkata"
  currency: string; // e.g. "INR"
  phoneCode: string; // e.g. "+91"
  source: VisitorLocationSource;
};

export type GetVisitorLocationOptions = {
  /** API endpoint for server-side geo (edge headers + IP lookup) */
  geoApiUrl?: string;
  /** Default country if everything fails */
  defaultCountry?: string;
  /** Default timezone if everything fails */
  defaultTimezone?: string;
  /** Use localStorage cache (30 days) */
  useCache?: boolean;
};

const STORAGE_KEY = 'visitor_location_v1';
const STORAGE_TTL_MS = 30 * 24 * 60 * 60 * 1000;

type GeoApiResponse = {
  country?: string | null;
  timezone?: string | null;
  currency?: string | null;
  phoneCode?: string | null;
  source?: string | null;
};

type CachedLocation = VisitorLocation & { exp: number };

function isIso2(code: string | null | undefined): code is string {
  return Boolean(code && code.length === 2);
}

function normalizeCallingCode(raw: string | null | undefined): string {
  if (!raw?.trim()) return '+1';
  const t = raw.trim();
  return t.startsWith('+') ? t : `+${t}`;
}

function getPhoneCodeForCountry(country: string): string {
  return COUNTRY_MAP[country.toUpperCase()]?.phoneCode ?? '+1';
}

/** ISO 4217 currency for a country (matches react-international-phone countries). */
export function getCurrencyForCountry(country: string): string {
  return COUNTRY_MAP[country.toUpperCase()]?.currency ?? 'USD';
}

/** Primary IANA timezone for a country. */
export function getTimezoneForCountry(country: string): string | null {
  return COUNTRY_TIMEZONE_MAP[country.toUpperCase()] ?? null;
}

function getBrowserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch {
    return 'UTC';
  }
}

function getCountryFromBrowserLocale(): string | null {
  if (typeof navigator === 'undefined') return null;
  try {
    const locale = new Intl.Locale(navigator.language);
    const region = locale.region?.toUpperCase();
    return isIso2(region) ? region : null;
  } catch {
    return null;
  }
}

function readCache(): VisitorLocation | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedLocation;
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
  } catch {
    return null;
  }
}

export function saveVisitorLocation(location: VisitorLocation): void {
  if (typeof window === 'undefined') return;
  const payload: CachedLocation = {
    ...location,
    exp: Date.now() + STORAGE_TTL_MS,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent('visitor-location-change', { detail: location }));
}

/** Read cached visitor location (if not expired). */
export function getCachedVisitorLocation(): VisitorLocation | null {
  return readCache();
}

function resolveGeoApiUrl(custom?: string): string {
  if (custom) return custom;
  if (typeof window === 'undefined') return '/api/ip-geo';
  return `${window.location.origin}/api/ip-geo`;
}

async function fetchGeoFromApi(url: string): Promise<GeoApiResponse | null> {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = (await res.json()) as GeoApiResponse;
    if (!data.country && !data.timezone) return null;
    return data;
  } catch {
    return null;
  }
}

function toSource(raw?: string | null): VisitorLocationSource {
  if (raw === 'edge') return 'edge';
  if (raw === 'ip') return 'ip';
  if (raw === 'localStorage') return 'localStorage';
  if (raw === 'browser') return 'browser';
  return 'default';
}

function buildLocation(
  country: string,
  timezone: string,
  currency: string,
  phoneCode: string,
  source: VisitorLocationSource
): VisitorLocation {
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
export async function getVisitorLocation(
  options: GetVisitorLocationOptions = {}
): Promise<VisitorLocation> {
  const {
    geoApiUrl: customGeoUrl,
    defaultCountry = 'IN',
    defaultTimezone = 'UTC',
    useCache = true,
  } = options;

  if (useCache) {
    const cached = readCache();
    if (cached) return cached;
  }

  const geo = await fetchGeoFromApi(resolveGeoApiUrl(customGeoUrl));

  const country =
    (isIso2(geo?.country) ? geo!.country!.toUpperCase() : null) ??
    getCountryFromBrowserLocale() ??
    defaultCountry;

  const timezone =
    geo?.timezone?.trim() ||
    getBrowserTimezone() ||
    getTimezoneForCountry(country) ||
    defaultTimezone;

  const currency = geo?.currency?.trim() || getCurrencyForCountry(country);

  const phoneCode = geo?.phoneCode
    ? normalizeCallingCode(geo.phoneCode)
    : getPhoneCodeForCountry(country);

  const source: VisitorLocationSource = geo
    ? toSource(geo.source)
    : getCountryFromBrowserLocale()
      ? 'browser'
      : 'default';

  const result = buildLocation(country, timezone, currency, phoneCode, source);

  if (useCache) saveVisitorLocation(result);
  return result;
}

/** Sync fallback for instant UI before async resolves */
export function getVisitorLocationSync(
  options: Pick<
    GetVisitorLocationOptions,
    'defaultCountry' | 'defaultTimezone' | 'useCache'
  > = {}
): VisitorLocation {
  const {
    defaultCountry = 'IN',
    defaultTimezone = 'UTC',
    useCache = true,
  } = options;

  if (useCache) {
    const cached = readCache();
    if (cached) return cached;
  }

  const country = getCountryFromBrowserLocale() ?? defaultCountry;
  const timezone =
    getBrowserTimezone() || getTimezoneForCountry(country) || defaultTimezone;

  return buildLocation(
    country,
    timezone,
    getCurrencyForCountry(country),
    getPhoneCodeForCountry(country),
    'browser'
  );
}
