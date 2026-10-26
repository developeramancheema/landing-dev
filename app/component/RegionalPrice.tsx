"use client";
import {
  formatRegionalPrice,
  type RegionalPricePlan,
} from "@/lib/pricing-data";
import { useRegionalPricing } from "./useRegionalPricing";

type RegionalPriceProps = {
  /** Which value to display */
  plan?: RegionalPricePlan;
  /** Text rendered before the price, e.g. "Plans from " */
  prefix?: string;
  /** Text rendered after the amount, e.g. "/month" */
  suffix?: string;
};

/**
 * Client UI wrapper around `formatRegionalPrice` from `@/lib/pricing-data`.
 * Updates when the visitor/selected country changes.
 *
 * For non-React / server use, call formatRegionalPrice(plan, countryCode) directly.
 */
export default function RegionalPrice({
  plan = "extraSeat",
  prefix,
  suffix,
}: RegionalPriceProps) {
  const region = useRegionalPricing();

  return (
    <>
      {prefix}
      {formatRegionalPrice(plan, region)}
      {suffix}
    </>
  );
}
