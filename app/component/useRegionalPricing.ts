"use client";
import { useCallback, useEffect, useState } from "react";
import { getRegionalPricing, type RegionalPricing } from "@/lib/pricing-data";
import {
  getCachedVisitorLocation,
  getVisitorLocation,
} from "@/app/visitorLocation";

const GEO_API_URL = "/api/geo";
const LOCATION_CHANGE_EVENT = "visitor-location-change";

/** Optional manual override for testing, e.g. /pricing?country=it */
function getCountryOverride(): string | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("country");
  return param && /^[a-z]{2}$/i.test(param) ? param.toUpperCase() : null;
}

// Shared promise so every component on the page triggers only one geo lookup.
let countryPromise: Promise<string> | null = null;

function resolveVisitorCountry(): Promise<string> {
  const override = getCountryOverride();
  if (override) return Promise.resolve(override);

  // Always prefer saved country (phone dropdown / prior geo) so CAD/USD match selection.
  const cached = getCachedVisitorLocation();
  if (cached?.country) {
    return Promise.resolve(cached.country);
  }

  if (!countryPromise) {
    countryPromise = getVisitorLocation({
      geoApiUrl: GEO_API_URL,
      defaultCountry: "IN",
      useCache: true,
    })
      .then((loc) => loc.country)
      .catch(() => "IN");
  }
  return countryPromise;
}

function pricingFromCountry(country: string): RegionalPricing {
  return getRegionalPricing(country);
}

/** Client hook: resolves regional pricing from geo or phone country selection. */
export function useRegionalPricing(): RegionalPricing {
  const [region, setRegion] = useState<RegionalPricing>(() => {
    const cached = getCachedVisitorLocation();
    return pricingFromCountry(cached?.country ?? "IN");
  });

  const refresh = useCallback(() => {
    const cached = getCachedVisitorLocation();
    if (cached) {
      setRegion(pricingFromCountry(cached.country));
      return;
    }
    resolveVisitorCountry().then((country) => {
      setRegion(pricingFromCountry(country));
    });
  }, []);

  useEffect(() => {
    let cancelled = false;

    resolveVisitorCountry().then((country) => {
      if (!cancelled) setRegion(pricingFromCountry(country));
    });

    const onLocationChange = () => {
      if (!cancelled) refresh();
    };

    window.addEventListener(LOCATION_CHANGE_EVENT, onLocationChange);
    window.addEventListener("storage", onLocationChange);

    return () => {
      cancelled = true;
      window.removeEventListener(LOCATION_CHANGE_EVENT, onLocationChange);
      window.removeEventListener("storage", onLocationChange);
    };
  }, [refresh]);

  return region;
}
