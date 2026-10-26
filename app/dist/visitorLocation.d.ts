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
export type VisitorLocationSource = 'localStorage' | 'browser' | 'edge' | 'ip' | 'default';
export type VisitorLocation = {
    country: string;
    timezone: string;
    currency: string;
    phoneCode: string;
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
export declare function saveVisitorLocation(location: VisitorLocation): void;
/**
 * Main API — no login required.
 * Detection order:
 * 1. localStorage cache
 * 2. /api/ip-geo (edge + IP)
 * 3. browser locale + Intl timezone
 * 4. defaults
 */
export declare function getVisitorLocation(options?: GetVisitorLocationOptions): Promise<VisitorLocation>;
/** Sync fallback for instant UI before async resolves */
export declare function getVisitorLocationSync(options?: Pick<GetVisitorLocationOptions, 'defaultCountry' | 'defaultTimezone' | 'useCache'>): VisitorLocation;
//# sourceMappingURL=visitorLocation.d.ts.map