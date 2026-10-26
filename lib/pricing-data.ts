import { BASE_URL, LOGIN_URL, REGISTER_URL } from "@/lib/config";
import { getCurrencyForCountry } from "@/app/visitorLocation";
import { formatPrice, getCurrencySymbol } from "@/utils/currency";

export { formatPrice, getCurrencySymbol } from "@/utils/currency";

export type PricingTier = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  seatTitle?: string;
  seatDescription?: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    subtitle: "Try GetSetTime at no cost",
    price: "Free",
    period: "month",
    description: "Perfect for starting and testing the software with essential features - without paying.",
    seatTitle: "1 seat included",
    seatDescription: "First 250 bookings/month included free",
    features: [
      "First 250 bookings/month free",
      "Public booking page",
      "Email notifications",
      "Mobile-responsive booking",
      "Basic calendar view",
      "Community support",
    ],
    buttonText: "Sign Up for Free",
    buttonLink: REGISTER_URL,
  },
  {
    name: "Starter",
    subtitle: "Great for getting started",
    price: "999",
    period: "month",
    description: "Perfect for solo providers and small teams launching online booking.",
    seatTitle: "1 seat included",
    seatDescription: "First 250 bookings/month included free",
    features: [
      "First 250 bookings/month free",
      "Public booking page",
      "Basic calendar integration",
      "Email notifications",
      "Mobile-responsive booking",
      "Basic reporting",
      "Community support",
    ],
    buttonText: "Start Free",
    buttonLink: REGISTER_URL,
  },
  {
    name: "Professional",
    subtitle: "Best for scaling businesses",
    price: "1499",
    period: "month",
    description: "Ideal for growing clinics and salons that need automation and branding.",
    seatTitle: "2 seats included",
    seatDescription: "First 250 bookings/month included free",
    features: [
      "First 250 bookings/month free",
      "Advanced calendar sync",
      "WhatsApp & email reminders",
      "Custom branding",
      "Payment processing",
      "Staff management",
      "Advanced analytics",
      "API access",
      "Priority support",
    ],
    popular: true,
    buttonText: "Get Started Free",
    buttonLink: LOGIN_URL,
  },
  {
    name: "Enterprise",
    subtitle: "For advanced operations",
    price: "2999",
    period: "month",
    description: "For multi-location teams needing security, roles, and dedicated support.",
    seatTitle: "5 seats included",
    seatDescription: "First 250 bookings/month included free",
    features: [
      "First 250 bookings/month free",
      "Multi-location support",
      "Advanced user roles",
      "SSO integration",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonLink: `${BASE_URL}/contact-us`,
  },
];

export type ComparisonCell = boolean | string;

export type ComparisonRow = {
  feature: string;
  free: ComparisonCell;
  starter: ComparisonCell;
  professional: ComparisonCell;
  enterprise: ComparisonCell;
  highlight?: boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Monthly price (excl. GST)", free: "Free", starter: "₹999", professional: "₹1,499", enterprise: "₹2,999", highlight: true },
  { feature: "Seats included", free: "1", starter: "1", professional: "2", enterprise: "5" },
  { feature: "Bookings / month", free: "50 included", starter: "250 included", professional: "Unlimited", enterprise: "Unlimited" },
  { feature: "Online booking page", free: true, starter: true, professional: true, enterprise: true },
  { feature: "Google Calendar sync", free: false, starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
  { feature: "WhatsApp reminders", free: false, starter: false, professional: true, enterprise: true },
  { feature: "Email notifications", free: true, starter: true, professional: true, enterprise: true },
  { feature: "Custom branding", free: false, starter: false, professional: true, enterprise: true },
  { feature: "Payment processing", free: false, starter: false, professional: true, enterprise: true },
  { feature: "Staff management", free: false, starter: "Basic", professional: true, enterprise: true },
  { feature: "Advanced analytics", free: false, starter: false, professional: true, enterprise: true },
  { feature: "API access", free: false, starter: false, professional: true, enterprise: true },
  { feature: "Multi-location", free: false, starter: false, professional: false, enterprise: true },
  { feature: "SSO & custom integrations", free: false, starter: false, professional: false, enterprise: true },
  { feature: "Support", free: "Community", starter: "Community", professional: "Priority", enterprise: "24/7 + SLA" },
];

/**
 * Configurable regional rates by ISO2 country or currency code.
 * Currency for unlisted countries comes from `lib/CountryList` (via getCurrencyForCountry).
 * Example: FR → EUR rates from the EUR template.
 */
export type RegionalPricingRates = {
  /** ISO 4217 currency code, e.g. INR, USD */
  currency: string;
  /** Badge next to price (e.g. "GST Extra"). Omit or empty to hide. */
  taxLabel?: string;
  prices: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  extraSeat: number;
};

/** Fully resolved pricing for UI (includes Intl-derived symbol). */
export type RegionalPricing = {
  currency: string;
  symbol: string;
  taxLabel: string;
  currencyLabel: string;
  prices: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  extraSeat: number;
};

function resolveRegionalPricing(rates: RegionalPricingRates): RegionalPricing {
  const currency = rates.currency.trim().toUpperCase();
  return {
    currency,
    symbol: getCurrencySymbol(currency),
    taxLabel: rates.taxLabel ?? "",
    currencyLabel: currency,
    prices: rates.prices,
    extraSeat: rates.extraSeat,
  };
}

/**
 * Country / currency rate table — amounts only; symbols come from Intl.
 * Keys: ISO2 country (IN, US, …) or currency template (EUR).
 * Unlisted countries resolve via CountryList currency, then nearest matching rates.
 */
export const regionalPricing: Record<string, RegionalPricingRates> = {
  IN: {
    currency: "INR",
    taxLabel: "GST Extra",
    prices: {
      starter: 999,
      professional: 1499,
      enterprise: 2999,
    },
    extraSeat: 799,
  },

  US: {
    currency: "USD",
    taxLabel: "Taxes may apply",
    prices: {
      starter: 12,
      professional: 18,
      enterprise: 36,
    },
    extraSeat: 10,
  },
  CA: {
    currency: "CAD",
    taxLabel: "Taxes may apply",
    prices: {
      starter: 16,
      professional: 24,
      enterprise: 48,
    },
    extraSeat: 14,
  },
  GB: {
    currency: "GBP",
    taxLabel: "VAT Extra",
    prices: {
      starter: 10,
      professional: 15,
      enterprise: 30,
    },
    extraSeat: 8,
  },
  AE: {
    currency: "AED",
    taxLabel: "VAT Extra",
    prices: {
      starter: 45,
      professional: 65,
      enterprise: 130,
    },
    extraSeat: 35,
  },
  AU: {
    currency: "AUD",
    taxLabel: "GST Extra",
    prices: {
      starter: 18,
      professional: 27,
      enterprise: 54,
    },
    extraSeat: 15,
  },
  SG: {
    currency: "SGD",
    taxLabel: "GST Extra",
    prices: {
      starter: 16,
      professional: 24,
      enterprise: 48,
    },
    extraSeat: 14,
  },

  /** Eurozone template — IT, ES, NL, FR, DE, etc. resolve here via CountryList currency */
  EUR: {
    currency: "EUR",
    taxLabel: "VAT Extra",
    prices: {
      starter: 11,
      professional: 17,
      enterprise: 34,
    },
    extraSeat: 9,
  },
};

/**
 * Resolve pricing for an ISO2 country code.
 * 1. Exact country override (IN, US, …)
 * 2. Currency from CountryList → currency template (EUR) or matching rates
 * 3. US amounts with the visitor's real currency (e.g. JP → JPY / ¥)
 */
export function getRegionalPricing(countryCode?: string | null): RegionalPricing {
  const key = (countryCode || "").trim().toUpperCase();

  if (key && regionalPricing[key]) {
    return resolveRegionalPricing(regionalPricing[key]);
  }

  const currency = getCurrencyForCountry(key || "US");

  // Currency-keyed template (e.g. FR → EUR)
  if (regionalPricing[currency]) {
    return resolveRegionalPricing(regionalPricing[currency]);
  }

  // Same currency as a country-specific entry (e.g. other USD markets → US rates)
  for (const rates of Object.values(regionalPricing)) {
    if (rates.currency === currency) {
      return resolveRegionalPricing(rates);
    }
  }

  // No configured rates: keep US amounts, but show the visitor country's currency
  // (JP → JPY ¥, BR → BRL R$, …) instead of forcing USD $.
  const fallback = regionalPricing.US;
  if (currency && currency !== fallback.currency) {
    return resolveRegionalPricing({
      ...fallback,
      currency,
    });
  }

  return resolveRegionalPricing(fallback);
}

export type RegionalPricePlan = "starter" | "professional" | "enterprise" | "extraSeat";

/** Amount + currency for a plan in a given country (or resolved region). */
export function getRegionalPlanAmount(
  plan: RegionalPricePlan,
  countryOrRegion?: string | null | RegionalPricing
): { amount: number; currency: string; region: RegionalPricing } {
  const region = isRegionalPricing(countryOrRegion)
    ? countryOrRegion
    : getRegionalPricing(typeof countryOrRegion === "string" ? countryOrRegion : null);

  const amount = plan === "extraSeat" ? region.extraSeat : region.prices[plan];
  return { amount, currency: region.currency, region };
}

function isRegionalPricing(value: unknown): value is RegionalPricing {
  if (!value || typeof value !== "object") return false;
  const v = value as RegionalPricing;
  return (
    typeof v.currency === "string" &&
    typeof v.extraSeat === "number" &&
    !!v.prices &&
    typeof v.prices.starter === "number"
  );
}

/**
 * Format a plan price for any country — safe on server and client.
 * Use this anywhere (including non-React code).
 *
 * @example formatRegionalPrice("extraSeat", "CA")
 * @example formatRegionalPrice("starter", "IN")
 * @example formatRegionalPrice("extraSeat", region)
 */
export function formatRegionalPrice(
  plan: RegionalPricePlan,
  countryOrRegion?: string | null | RegionalPricing
): string {
  const { amount, currency } = getRegionalPlanAmount(plan, countryOrRegion);
  return formatPrice(amount, currency);
}

/** Apply regional prices onto base pricingTiers (Free stays Free). */
export function applyRegionalPrices(
  tiers: PricingTier[],
  region: RegionalPricing
): PricingTier[] {
  return tiers.map((tier) => {
    if (tier.price === "Free" || tier.name === "Free") return tier;
    const name = tier.name.toLowerCase();
    if (name === "starter") return { ...tier, price: String(region.prices.starter) };
    if (name === "professional") return { ...tier, price: String(region.prices.professional) };
    if (name === "enterprise") return { ...tier, price: String(region.prices.enterprise) };
    return tier;
  });
}