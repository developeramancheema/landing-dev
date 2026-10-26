"use client";

import { useEffect, useId, useMemo, useState, startTransition, useDeferredValue } from "react";
import Link from "next/link";
import {
  getDisplayableItems,
  solutionBrowserCategories,
  solutionBrowserDefaultCategoryId,
  type SolutionBrowserIconKey,
  type SolutionBrowserItem,
} from "@/lib/solutions-browser-data";
import ScreenGate from "../component/ScreenGate";

const categoryThemes: Record<string, { wash: string; ink: string; soft: string; ring: string }> = {
  solutions: { wash: "from-indigo-600 via-indigo-500 to-sky-500", ink: "text-indigo-600", soft: "bg-indigo-50", ring: "ring-indigo-200" },
  finance: { wash: "from-emerald-700 via-emerald-600 to-teal-500", ink: "text-emerald-700", soft: "bg-emerald-50", ring: "ring-emerald-200" },
  "professional-services": { wash: "from-slate-800 via-slate-700 to-indigo-600", ink: "text-slate-800", soft: "bg-slate-100", ring: "ring-slate-200" },
  healthcare: { wash: "from-sky-700 via-sky-600 to-cyan-500", ink: "text-sky-700", soft: "bg-sky-50", ring: "ring-sky-200" },
  education: { wash: "from-violet-700 via-violet-600 to-fuchsia-500", ink: "text-violet-700", soft: "bg-violet-50", ring: "ring-violet-200" },
  "home-services": { wash: "from-amber-700 via-orange-600 to-rose-500", ink: "text-orange-700", soft: "bg-orange-50", ring: "ring-orange-200" },
  "public-services": { wash: "from-neutral-800 via-neutral-700 to-slate-600", ink: "text-neutral-800", soft: "bg-neutral-100", ring: "ring-neutral-200" },
  "beauty-wellness": { wash: "from-rose-600 via-pink-500 to-violet-500", ink: "text-rose-600", soft: "bg-rose-50", ring: "ring-rose-200" },
  fitness: { wash: "from-lime-700 via-lime-600 to-emerald-500", ink: "text-lime-700", soft: "bg-lime-50", ring: "ring-lime-200" },
  "real-estate": { wash: "from-red-700 via-red-600 to-orange-500", ink: "text-red-700", soft: "bg-red-50", ring: "ring-red-200" },
};

function themeFor(id: string) {
  return categoryThemes[id] ?? categoryThemes.solutions;
}

/** All solutions across categories (including REGISTER_URL entries) */
function getAllSolutions(): SolutionBrowserItem[] {
  const seen = new Set<string>();
  const all: SolutionBrowserItem[] = [];
  for (const category of solutionBrowserCategories) {
    if (category.id === "solutions") continue;
    for (const item of getDisplayableItems(category.items)) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      all.push(item);
    }
  }
  return all;
}

const browserCategories = solutionBrowserCategories
  .map((category) => {
    const items = category.id === "solutions" ? getAllSolutions() : getDisplayableItems(category.items);
    return { ...category, items };
  })
  .filter((category) => category.items.length > 0);

const defaultCategoryId = browserCategories.some((c) => c.id === solutionBrowserDefaultCategoryId)
  ? solutionBrowserDefaultCategoryId
  : browserCategories[0]?.id ?? "solutions";

function BrowserIcon({ name, className = "h-5 w-5" }: { name: SolutionBrowserIconKey; className?: string }) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    
    case "salon":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.4 9.4 8 12M14 6 5.4 14.6M10.8 14.8 14 18M16 12h-2M22 12h-2" />
          <circle cx="4" cy="8" r="2" />
          <circle cx="4" cy="16" r="2" />
        </svg>
      );
    case "doctor":
      return (
        <svg {...props}>
          <path strokeLinecap="round" d="M12 11v4M14 13h-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M18 6v14M6 6v14" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      );
    case "dentist":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.5 0-4 1.8-4 4.2 0 3.3 1.5 5.3 2.4 8.1.4 1.2.8 2.5 1.6 2.5s1.2-1.3 1.6-2.5c.9-2.8 2.4-4.8 2.4-8.1C16 4.8 14.5 3 12 3Z" />
        </svg>
      );
    case "physio":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4M14 21v-3a2 2 0 0 0-4 0v3M14 9h-4M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
        </svg>
      );
    case "dermatology":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M8 13c1.2 1.5 2.6 2.2 4 2.2s2.8-.7 4-2.2" />
        </svg>
      );
    case "tutor":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "real-estate":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      );
    case "healthcare":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4M14 9h-4M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "grid":
    default:
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
  }
}

function IndustryRow({
  item,
  index,
  theme,
}: {
  item: SolutionBrowserItem;
  index: number;
  theme: ReturnType<typeof themeFor>;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link href={item.href} className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label={`Explore ${item.title}`}>
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-[0.07] ${theme.wash}`} aria-hidden />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-2xl ${theme.soft} ${theme.ink} ring-1 ${theme.ring}`}>
            <BrowserIcon name={item.icon} className="h-5 w-5" />
          </span>
          <span className={`font-mono text-[11px] font-semibold tracking-wider ${theme.ink}`}>{number}</span>
        </div>
        <h3 className="mt-4 text-lg font-bold tracking-tight text-neutral-900">{item.title}</h3>
        <p>{item.description}</p>
        <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${theme.ink}`}>
          Explore solution
          <svg className="h-4 w-4 transition duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function SolutionsBrowser() {
  const searchId = useId();
  const categorySelectId = useId();
  const [activeId, setActiveId] = useState(defaultCategoryId);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && browserCategories.some((c) => c.id === hash)) {
      setActiveId(hash);
    }
  }, []);

  const activeIndex = Math.max(
    0,
    browserCategories.findIndex((c) => c.id === activeId),
  );
  const active = browserCategories[activeIndex] ?? browserCategories[0];
  const theme = themeFor(active?.id ?? "solutions");

  const selectCategory = (id: string) => {
    startTransition(() => {
      setActiveId(id);
      setQuery("");
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  const filteredItems = useMemo(() => {
    const items = active?.items ?? [];
    const q = deferredQuery.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) =>
      [item.title, item.description].join(" ").toLowerCase().includes(q),
    );
  }, [active?.items, deferredQuery]);

  if (!active) return null;

  return (
    <div className="relative">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        <aside aria-label="Industry categories" className="lg:sticky lg:top-20 lg:z-30 w-full lg:col-span-3">
          <ScreenGate minWidth={1024}>
            <div className="flex flex-col gap-3 mb-4 bg-white rounded-2xl p-4 shadow-sm">
              <span className="text-xs uppercase tracking-[0.16em] text-neutral-500 text-end" aria-live="polite">{filteredItems.length} solution{filteredItems.length === 1 ? "" : "s"}</span>
              <div className="relative w-full sm:max-w-md">
                <label htmlFor={searchId} className="sr-only">Filter industries in this category</label>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 z-1 text-neutral-400"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                <input id={searchId} type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search industry..." className="w-full rounded-2xl border border-neutral-200/80 bg-white/90 py-3 pl-10 pr-4 text-sm text-neutral-900 shadow-sm outline-none backdrop-blur transition placeholder:text-neutral-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100" autoComplete="off"/>
              </div>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/75 p-2 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                {/* Desktop — category list */}
                <ul className="grid lg:grid-cols-1 gap-1.5" role="list">
                  {browserCategories.map((category, index) => {
                    const isActive = category.id === activeId;
                    const t = themeFor(category.id);
                    return (
                      <li key={category.id} className="shrink-0 col-span-1">
                        <button
                          id={`nav-${category.id}`}
                          type="button"
                          onClick={() => selectCategory(category.id)}
                          aria-current={isActive ? "true" : undefined}
                          className={`group relative w-full flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                            isActive
                              ? "bg-neutral-950 text-white shadow-lg shadow-neutral-900/20"
                              : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] font-semibold tracking-wider ${
                              isActive ? "text-white/55" : "text-neutral-400 group-hover:text-neutral-500"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="whitespace-nowrap text-sm font-semibold">{category.label}</span>
                          {isActive && (
                            <span className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r ${t.wash}`} aria-hidden />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
            </div>
          </ScreenGate>
        </aside>

        {/* <ScreenGate maxWidth={1023}>
          <div className="sticky top-16 z-40 lg:col-span-full">
            <div className="relative rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl">
              <label htmlFor={categorySelectId} className="sr-only">
                Select industry category
              </label>
              <select
                id={categorySelectId}
                value={activeId}
                onChange={(e) => selectCategory(e.target.value)}
                className="w-full appearance-none rounded-xl border border-neutral-200/80 bg-white py-3 pl-4 pr-10 text-sm font-semibold text-neutral-900 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
              >
                {browserCategories.map((category, index) => (
                  <option key={category.id} value={category.id}>
                    {String(index + 1).padStart(2, "0")} — {category.label}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </ScreenGate> */}

        {/* Stage left + solutions right */}
        <div key={active.id} aria-labelledby="solutions-category-heading" className="solutions-stage grid gap-5 lg:items-stretch lg:gap-6 lg:col-span-9">
          {/* Solutions list — right */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-gradient-to-b from-white via-neutral-50/80 to-white shadow-xl p-4">
            {filteredItems.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-neutral-200 bg-white px-5 py-10 text-center text-sm text-neutral-600">
                No published solutions match.{" "}
                <button type="button" className="font-semibold text-indigo-600 underline-offset-2 hover:underline" onClick={() => setQuery("")}>Clear filter</button>
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                {filteredItems.map((item, index) => (
                  <IndustryRow key={item.id} item={item} index={index} theme={theme} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
