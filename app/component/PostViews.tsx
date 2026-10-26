"use client";

import { useEffect, useState } from "react";

interface PostViewsProps {
  slug: string;
}

const DEDUPE_WINDOW_MS = 24 * 60 * 60 * 1000; // count a visitor once per 24h per post

export function PostViews({ slug }: PostViewsProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const storageKey = `post-view:${slug}`;
      let alreadyCounted = false;

      try {
        const last = window.localStorage.getItem(storageKey);
        alreadyCounted = last !== null && Date.now() - Number(last) < DEDUPE_WINDOW_MS;
      } catch {
        alreadyCounted = false;
      }

      try {
        let data: { views?: number };

        if (alreadyCounted) {
          const res = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`);
          data = await res.json();
        } else {
          const res = await fetch("/api/views", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug }),
          });
          data = await res.json();
          try {
            window.localStorage.setItem(storageKey, String(Date.now()));
          } catch {
            // ignore storage failures (private mode, etc.)
          }
        }

        if (!cancelled && typeof data.views === "number") {
          setViews(data.views);
        }
      } catch {
        // network error — leave count hidden
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <div className="flex items-center gap-2 text-neutral-500">
      <svg className="h-4 w-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      <span>{views === null ? "—" : views.toLocaleString("en-US")} views</span>
    </div>
  );
}
