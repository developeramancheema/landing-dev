/**
 * Currency display helpers (native Intl only — safe on server and client).
 */

/** Preferred display symbols for common ISO 4217 codes. */
const CURRENCY_SYMBOLS: Record<string, string> = {
  // Major
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  JPY: "¥",
  CNY: "¥",
  KRW: "₩",

  // Middle East
  AED: "AED",
  SAR: "SAR",
  QAR: "QAR",
  KWD: "KWD",
  BHD: "BHD",
  OMR: "OMR",

  // Asia-Pacific
  HKD: "HK$",
  SGD: "S$",
  MYR: "RM",
  PHP: "₱",
  THB: "฿",
  IDR: "Rp",
  VND: "₫",
  TWD: "NT$",
  PKR: "Rs",
  BDT: "৳",
  LKR: "Rs",
  NPR: "Rs",

  // Americas / Oceania (disambiguate from USD $)
  CAD: "CA$",
  AUD: "A$",
  NZD: "NZ$",
  MXN: "MX$",
  BRL: "R$",
  CLP: "CLP$",
  ARS: "ARS$",
  COP: "COL$",

  // Europe (non-euro)
  CHF: "CHF",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  CZK: "Kč",
  HUF: "Ft",
  RON: "lei",
  TRY: "₺",
  RUB: "₽",
  UAH: "₴",

  // Africa
  ZAR: "R",
  NGN: "₦",
  EGP: "E£",
  KES: "KSh",
  GHS: "GH₵",
};

/** True when Intl accepts this as an ISO 4217 currency code. */
export function isValidCurrencyCode(currencyCode: string): boolean {
  const code = currencyCode.trim().toUpperCase();
  if (!code) return false;
  try {
    new Intl.NumberFormat("en", { style: "currency", currency: code }).format(0);
    return true;
  } catch {
    return false;
  }
}

/**
 * Currency symbol for an ISO 4217 code.
 * Uses a curated map first, then Intl, then the currency code.
 *
 * @example getCurrencySymbol("INR") → "₹"
 * @example getCurrencySymbol("USD") → "$"
 * @example getCurrencySymbol("AED") → "AED"
 * @example getCurrencySymbol("JPY") → "¥"
 * @example getCurrencySymbol("KRW") → "₩"
 * @example getCurrencySymbol("CNY") → "¥"
 * @example getCurrencySymbol("HKD") → "HK$"
 * @example getCurrencySymbol("SGD") → "S$"
 * @example getCurrencySymbol("MYR") → "RM"
 * @example getCurrencySymbol("PHP") → "₱"
 * @example getCurrencySymbol("THB") → "฿"
 * @example getCurrencySymbol("UNKNOWN") → "UNKNOWN"
 */
export function getCurrencySymbol(currencyCode: string): string {
  const code = currencyCode.trim().toUpperCase();
  if (!code) return "";

  if (CURRENCY_SYMBOLS[code]) return CURRENCY_SYMBOLS[code];

  if (!isValidCurrencyCode(code)) return code;

  try {
    // Prefer symbol, then narrowSymbol, so HKD/SGD-style codes resolve better when unmapped.
    for (const currencyDisplay of ["symbol", "narrowSymbol"] as const) {
      const part = new Intl.NumberFormat("en", {
        style: "currency",
        currency: code,
        currencyDisplay,
      })
        .formatToParts(0)
        .find((p) => p.type === "currency");

      const symbol = part?.value?.trim() ?? "";
      if (symbol && symbol.toUpperCase() !== code) return symbol;
      if (symbol) return symbol;
    }
    return code;
  } catch {
    return code;
  }
}

/**
 * Format an amount with a currency symbol or code.
 *
 * @example formatPrice(999, "INR") → "₹999"
 * @example formatPrice(12, "USD") → "$12"
 * @example formatPrice(16, "SGD") → "S$16"
 * @example formatPrice(10, "HKD") → "HK$10"
 * @example formatPrice(14, "CAD") → "CA$14"
 * @example formatPrice(45, "AED") → "AED 45"
 * @example formatPrice(100, "UNKNOWN") → "UNKNOWN 100"
 */
export function formatPrice(amount: number, currencyCode: string): string {
  const code = currencyCode.trim().toUpperCase() || "USD";
  const symbol = getCurrencySymbol(code);
  const value = Number.isFinite(amount) ? String(amount) : "0";

  if (!symbol) return `${code} ${value}`;

  // Same as ISO code (AED, CHF, UNKNOWN, …) → "CODE amount"
  if (symbol.toUpperCase() === code) {
    return `${code} ${value}`;
  }

  // Letter-only symbols (RM, kr, Rp, …) → "SYM amount"
  if (/^[A-Za-z]+$/.test(symbol)) {
    return `${symbol} ${value}`;
  }

  // Glyph / mixed symbols (₹, $, HK$, S$, CA$, …) → "SYM" + amount
  return `${symbol}${value}`;
}
