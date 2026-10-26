"use client";

import { useMemo, useState } from "react";
import { pricingTiers, applyRegionalPrices, formatPrice } from "@/lib/pricing-data";
import { useRegionalPricing } from "./useRegionalPricing";
import ScreenGate from "./ScreenGate";

function getDisplayPrice(price: string, tierName: string, isAnnual: boolean): number | "Free" {
  if (price === "Free") return "Free";
  const annualDiscount = tierName === "Starter" || tierName === "Free" ? 1 : 0.9;
  const monthlyPrice = Number(price);
  const annualPrice = Math.round(monthlyPrice * annualDiscount);
  return isAnnual ? annualPrice : monthlyPrice;
}

const tierMeta: Record<string, { accent: string; iconBg: string; ring: string; bg: string; icon: string; popular?: boolean }> = {
  Free: {
    accent: "text-cyan-600",
    iconBg: "bg-cyan-600",
    ring: "ring-cyan-100",
    bg: "from-cyan-50 to-white",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  Starter: {
    accent: "text-indigo-600",
    iconBg: "bg-indigo-600",
    ring: "ring-indigo-100",
    bg: "from-indigo-50 to-white",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  Professional: {
    accent: "text-violet-600",
    iconBg: "bg-violet-600",
    ring: "ring-violet-200",
    bg: "from-violet-50 to-white",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    popular: true,
  },
  Enterprise: {
    accent: "text-emerald-600",
    iconBg: "bg-emerald-600",
    ring: "ring-emerald-100",
    bg: "from-emerald-50 to-white",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m9-12h.01M9 9h.01M9 12h.01M9 15h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01",
  },
};

export default function PricingHeroPreview() {
  const [isAnnual, setIsAnnual] = useState(false);
  const region = useRegionalPricing();
  const tiers = useMemo(() => applyRegionalPrices(pricingTiers, region), [region]);

  return (
    <div className="relative animate-fade-in-scale">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white drop-shadow-xl">
        <ScreenGate minWidth={768}>
        {/* Window chrome */}
        <div className="relative z-10 border-b border-neutral-200 flex items-center justify-between px-3 py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 animate-ping"></div>
            </div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-600"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600 animate-pulse"></div>
            <span className="text-[10px] sm:text-xs font-medium text-neutral-700">LIVE</span>
          </div>
        </div>
        </ScreenGate>
        <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-white p-3">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" aria-hidden />

          {/* Billing header */}
          <div className="relative mb-4 flex flex-wrap items-start gap-2.5 sm:flex-nowrap sm:items-center sm:gap-3">
            <div className="min-w-0 flex-1">
              <div className="text-base font-bold text-neutral-900 sm:text-lg">Plans &amp; Pricing</div>
              <div className="text-xs text-neutral-400">Simple, transparent, cancel anytime</div>
            </div>
            <div className="flex items-center rounded-full bg-white p-1 text-[11px] drop-shadow-sm">
              <button type="button" onClick={() => setIsAnnual(false)} aria-label="Monthly billing" role="tab" className={`flex-1 rounded-full px-2.5 py-1 transition ${!isAnnual ? "bg-indigo-600 text-white drop-shadow-sm" : "text-neutral-400 hover:text-neutral-600"}`}>
                Monthly
              </button>
              <button type="button" onClick={() => setIsAnnual(true)} aria-label="Yearly billing" role="tab" className={`flex-1 rounded-full px-2 py-1 transition ${isAnnual ? "bg-indigo-600 text-white drop-shadow-sm" : "text-neutral-400 hover:text-neutral-600"}`}>
                Yearly
              </button>
            </div>
          </div>

          <ScreenGate minWidth={768}>
          <div className="relative mb-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {tiers.map((tier) => {
              const meta = tierMeta[tier.name];
              const label = tier.name === "Professional" ? "Pro" : tier.name;
              const displayPrice = getDisplayPrice(tier.price, tier.name, isAnnual);

              return (
                <div key={tier.name} className={`group relative overflow-hidden rounded-xl border border-neutral-100 bg-gradient-to-br ${meta.bg} p-2.5 drop-shadow-sm ring-1 ${meta.ring} transition duration-300 hover:-translate-y-0.5 hover:drop-shadow-md sm:p-4`}>
                  {meta.popular && (
                    <span className="absolute right-1.5 top-1.5 rounded-full bg-violet-600 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white">Popular</span>
                  )}
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${meta.iconBg} text-white drop-shadow-sm`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d={meta.icon} />
                    </svg>
                  </div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">{label}</div>
                  <div className={`mt-0.5 flex flex-wrap items-baseline gap-0.5 ${meta.accent}`}>
                    <span className="text-xl font-bold tabular-nums sm:text-2xl">
                      {displayPrice === "Free" ? "Free" : formatPrice(displayPrice, region.currency)}
                    </span>
                    {displayPrice !== "Free" && (
                      <span className="text-[10px] font-medium text-neutral-400">/mo</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          </ScreenGate>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-1 sm:gap-3">
              {tiers.map((tier) => {
                const displayPrice = getDisplayPrice(tier.price, tier.name, isAnnual);

                return (
                  <div
                    key={tier.name}
                    className={`flex flex-wrap items-center gap-2.5 rounded-xl border p-2.5 transition hover:-translate-y-0.5 hover:drop-shadow-md sm:flex-nowrap sm:gap-3 sm:p-3 ${
                      tier.popular
                        ? "border-violet-200 bg-violet-50 ring-1 ring-violet-100"
                        : "border-indigo-200 bg-indigo-50"
                    }`}
                  >
                    <div
                      className={`flex w-14 py-2 shrink-0 flex-col items-center justify-center rounded-lg text-center drop-shadow-sm ring-1 ring-neutral-100 ${
                        tier.popular ? "bg-violet-600 text-white" : "bg-indigo-600 text-white"
                      }`}
                    >
                      <span className={`text-[10px] font-medium uppercase ${tier.popular ? "text-violet-100" : "text-white"}`}>
                        {tier.name === "Professional" ? "Pro" : tier.name.slice(0, 3)}
                      </span>
                      <span className={`text-sm font-bold ${tier.popular ? "text-white" : "text-white"}`}>
                        {displayPrice === "Free" ? "Free" : formatPrice(displayPrice, region.currency)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-neutral-800">{tier.name}</div>
                      <div className="text-sm text-neutral-700">{tier.seatTitle}</div>
                    </div>
                    <span
                      className={`ml-auto inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold sm:ml-0 sm:text-xs ${
                        tier.popular
                          ? "border-violet-200 bg-violet-100 text-violet-700"
                          : "border-indigo-200 bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      {tier.popular && <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />}
                      {tier.popular ? "Popular" : tier.name === "Enterprise" ? "Custom" : tier.name === "Free" ? "Try free" : "Start here"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}