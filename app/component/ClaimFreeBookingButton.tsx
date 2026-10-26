"use client";

import { useEffect, useId, useState } from "react";
import { createPortal, flushSync } from "react-dom";

type ClaimFreeBookingButtonProps = {
  className?: string;
  children: React.ReactNode;
};

type ClaimFreeLinkResponse = {
  available?: boolean;
  redirectUrl?: string;
  error?: string;
};

function Spinner({ className }: { className: string }) {
  return (
    <>
      <style>{`@keyframes claim-free-spin { to { transform: rotate(360deg); } }`}</style>
      <svg
        className={className}
        style={{ animation: "claim-free-spin 0.7s linear infinite" }}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v3a5 5 0 0 0-5 5H4z" />
      </svg>
    </>
  );
}

export default function ClaimFreeBookingButton({
  className,
  children,
}: ClaimFreeBookingButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [spotsFull, setSpotsFull] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!error) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setError("");
        setSpotsFull(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [error]);

  function closeDialog() {
    setError("");
    setSpotsFull(false);
  }

  async function handleClick() {
    if (loading) return;
    closeDialog();

    flushSync(() => setLoading(true));

    try {
      const res = await fetch("/api/claim-free", {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = (await res.json().catch(() => ({}))) as ClaimFreeLinkResponse;

      if (!res.ok || !data.redirectUrl) {
        const full = data.available === false;
        setSpotsFull(full);
        setError(
          full
            ? data.error || "Free booking spots are full right now."
            : data.error || "Could not open your free booking page. Please try again."
        );
        return;
      }

      window.open(data.redirectUrl, "_blank", "noopener,noreferrer");
    } catch {
      setSpotsFull(false);
      setError("Could not open your free booking page. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const dialog =
    error && mounted && !loading
      ? createPortal(
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            <button
              type="button"
              className="absolute inset-0 bg-neutral-950/50"
              aria-label="Close"
              onClick={closeDialog}
            />
            <div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-7"
            >
              <button
                type="button"
                onClick={closeDialog}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800"
                aria-label="Close"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>

              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                  spotsFull ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600"
                }`}
              >
                {spotsFull ? (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5" strokeLinecap="round" />
                    <path d="M12 16h.01" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M15 9 9 15M9 9l6 6" strokeLinecap="round" />
                  </svg>
                )}
              </div>

              <h2 id={titleId} className="pr-8 text-xl font-bold text-neutral-900">
                {spotsFull ? "Free spots are full" : "Couldn't start your claim"}
              </h2>
              <p id={descriptionId} className="mt-2 text-sm leading-6 text-neutral-600">
                {error}
              </p>
              {spotsFull ? (
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  We are only setting up the first 100 booking pages. Please check back later.
                </p>
              ) : null}

              <button
                type="button"
                onClick={closeDialog}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                OK
              </button>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        className={`${className ?? ""} disabled:cursor-wait`}
      >
        {loading ? <Spinner className="h-4 w-4 shrink-0" /> : null}
        {children}
      </button>
      {dialog}
    </>
  );
}
