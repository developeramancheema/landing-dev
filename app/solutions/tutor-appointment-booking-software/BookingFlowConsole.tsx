"use client";

import { useEffect, useRef, useState } from "react";

type BookingStep = {
  step: number;
  title: string;
  description: string;
};

const INTERVAL_MS = 3500;

function StepHeader({
  step,
  title,
  description,
  className = "",
}: {
  step: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">{step}</div>
      <h3 className="mt-0.5 text-base font-bold leading-snug text-neutral-900 sm:text-lg lg:text-xl">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}

export default function BookingFlowConsole({ steps }: { steps: BookingStep[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = steps.length;
  const current = steps[active];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [total, paused]);

  return (
    <div className="relative w-full min-w-0 max-w-full">
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl sm:rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-gradient-to-r from-indigo-50/90 via-white to-sky-50/60 px-3 py-3 sm:gap-3 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-[10px] font-bold text-white shadow-md shadow-indigo-500/30 sm:h-10 sm:w-10 sm:text-xs">
              GS
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">Student booking</div>
              <p className="truncate text-sm font-bold text-neutral-900 sm:text-base">Auto preview</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-neutral-600 ring-1 ring-slate-200 sm:px-2.5 sm:py-1 sm:text-xs">
            {active + 1}/{total}
          </span>
        </div>

        {/* Progress */}
        <div className="h-1 bg-slate-100" aria-hidden>
          <div key={`${active}-${paused}`} className={`h-full origin-left bg-indigo-600 ${paused ? "w-full" : "motion-safe:animate-[bf-progress_3.5s_linear]"}`} />
        </div>

        <div className="grid min-w-0 lg:grid-cols-[minmax(0,11.5rem)_minmax(0,1fr)] xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
          {/* Step nav — sidebar on laptop+ */}
          <nav className="hidden border-b border-slate-100 bg-slate-50/60 p-2 sm:p-3 lg:block lg:border-b-0 lg:border-r lg:p-3" aria-label="Booking steps">
            <ul className="flex flex-col gap-1.5">
              {steps.map((step, index) => {
                const isActive = index === active;
                return (
                  <li key={step.step}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-current={isActive ? "step" : undefined}
                      className={`flex w-full items-center xl:items-start gap-2.5 rounded-xl px-2.5 py-2.5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-neutral-600 hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ring-1 ${
                          isActive
                            ? "bg-white/20 text-white ring-white/30"
                            : "bg-white text-indigo-700 ring-slate-200"
                        }`}
                      >
                        0{step.step}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-sm font-semibold leading-snug ${isActive ? "text-white" : "text-neutral-900"}`}>
                          {step.title}
                        </span>
                        <span className={`mt-0.5 hidden text-xs xl:block ${isActive ? "text-indigo-100" : "text-neutral-500"}`}>
                          {step.description}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile / tablet horizontal step picker */}
          <div className="relative border-b border-slate-100 bg-slate-50/60 lg:hidden">
            <div className="flex flex-wrap gap-2 overflow-x-auto px-3 py-2.5 sm:gap-2.5 sm:px-4 sm:py-3" role="tablist" aria-label="Booking steps">
              {steps.map((step, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={step.step}
                    type="button"
                    role="tab"
                    onClick={() => setActive(index)}
                    className={`flex min-w-[8.75rem] max-w-[11rem] shrink-0 snap-center items-center gap-2 rounded-xl px-2.5 py-2 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:min-w-[9.5rem] sm:px-3 sm:py-2.5 ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                        : "bg-white text-neutral-600 ring-1 ring-slate-200/90"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ring-1 sm:h-7 sm:w-7 ${
                        isActive ? "bg-white/20 text-white ring-white/30" : "bg-indigo-50 text-indigo-700 ring-indigo-100"
                      }`}
                    >
                      0{step.step}
                    </span>
                    <span className={`min-w-0 flex-1 truncate text-xs font-semibold leading-tight ${isActive ? "text-white" : "text-neutral-900"}`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="border-t border-slate-100/80 px-3 py-2 text-center text-xs text-neutral-500 sm:px-4 sm:text-xs">
              <span className="font-semibold text-neutral-700">{current.title}</span>
              <span className="hidden sm:inline"> — {current.description}</span>
            </p>
          </div>

          {/* Preview panel */}
          <div className="relative min-w-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.07),transparent_55%)] p-3 sm:p-4 md:p-5 lg:min-h-[20rem] xl:min-h-[22rem]">
            <div key={active} className="motion-safe:animate-[bf-fade_0.4s_ease]">
              {active === 0 && (
                <div>
                  <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-start sm:justify-between">
                    <StepHeader step="Step 01" title={current.title} description={current.description} className="flex-1" />
                    <span className="w-fit shrink-0 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-neutral-500 border border-slate-200">
                      3 matches
                    </span>
                  </div>
                  <div className="max-h-[14.5rem] space-y-2 overflow-y-auto pr-0.5 sm:max-h-[16rem] md:max-h-none md:overflow-visible sm:space-y-2.5">
                    {[
                      { name: "Sarah Reyes", subject: "SAT Math", rating: "4.9", sessions: "124 sessions", selected: true },
                      { name: "James Okonkwo", subject: "IELTS Speaking", rating: "4.8", sessions: "89 sessions", selected: false },
                      { name: "Priya Nair", subject: "Python Basics", rating: "5.0", sessions: "207 sessions", selected: false },
                    ].map((tutor) => (
                      <div
                        key={tutor.name}
                        className={`rounded-xl border p-2.5 transition-all duration-200 sm:p-3.5 ${
                          tutor.selected
                            ? "border-indigo-200 bg-indigo-50/90"
                            : "border-slate-100 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-semibold text-white sm:h-11 sm:w-11 sm:text-xs ${
                              tutor.selected ? "bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm" : "bg-slate-300"
                            }`}
                          >
                            {tutor.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="truncate text-sm font-bold text-neutral-900">{tutor.name}</span>
                              {tutor.selected && (
                                <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                                  Selected
                                </span>
                              )}
                            </div>
                            <div className="mt-0.5 truncate text-xs text-neutral-500 sm:text-xs">
                              {tutor.subject} · {tutor.sessions}
                            </div>
                          </div>
                          <div className="flex shrink-0 flex-col items-end gap-0.5 sm:gap-1">
                            <span className="rounded-full bg-amber-50 px-1.5 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">
                              ★ {tutor.rating}
                            </span>
                            <span className={`hidden text-xs font-semibold sm:inline ${tutor.selected ? "text-indigo-600" : "text-neutral-400"}`}>
                              {tutor.selected ? "Book" : "View"}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === 1 && (
                <div>
                  <StepHeader step="Step 02" title={current.title} description={current.description} className="mb-3 sm:mb-4" />
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["SAT Math", "IELTS Speaking", "Python Basics", "Physics", "Piano", "Custom"].map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/50 p-3 sm:mt-5 sm:p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">Lesson length</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["30 min", "45 min", "60 min"].map((len, i) => (
                        <span
                          key={len}
                          className={`rounded-full py-1 px-3 text-center text-xs font-semibold ${
                            i === 1 ? "bg-indigo-50 text-indigo-700 border border-indigo-200" : "bg-white/80 text-neutral-600 border border-slate-200"
                          }`}
                        >
                          {len}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {active === 2 && (
                <div>
                  <StepHeader step="Step 03" title={current.title} description={current.description} className="mb-3 sm:mb-4" />
                  <div className="mb-3 flex flex-wrap gap-1.5 pb-0.5">
                    {["Mon 19", "Tue 20", "Wed 21", "Thu 23", "Fri 24", "Sat 25", "Sun 26"].map((day, i) => (
                      <span
                        key={day}
                        className={`shrink-0 rounded-lg px-3 py-4 text-xs font-semibold ${
                          i === 0 ? "bg-indigo-50 text-indigo-700 border border-indigo-200" : "bg-white text-neutral-600 border border-slate-200"
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["09:00", "11:30", "13:00", "14:30", "16:00", "17:30", "18:00", "19:30"].map((slot, i) => (
                      <span
                        key={slot}
                        className={`rounded-full py-1 px-3 text-center text-xs font-semibold border ${
                          i === 1
                            ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                            : i === 4 || i === 6
                              ? "bg-red-100 text-red-400 line-through border-red-200"
                              : "bg-emerald-50 text-emerald-700 border-emerald-200"
                        }`}
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {active === 3 && (
                <div>
                  <StepHeader step="Step 04" title={current.title} description={current.description} className="mb-3 sm:mb-4" />
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <div className="border-b border-slate-100 bg-slate-50 px-3 py-3 sm:px-4">
                      <div className="text-xs font-semibold uppercase text-neutral-400">Lesson summary</div>
                      <p className="text-base font-bold text-neutral-900 sm:text-lg">SAT Math · 45 min</p>
                    </div>
                    <div className="space-y-2.5 p-3 sm:space-y-3 sm:p-4">
                      {[
                        { k: "Tutor", v: "Sarah Reyes" },
                        { k: "When", v: "Thu, Mar 19 · 11:30 AM" },
                        { k: "Mode", v: "Google Meet" },
                        { k: "Package", v: "Lesson 9 of 12" },
                      ].map((row) => (
                        <div key={row.k} className="flex flex-col gap-0.5 text-sm sm:grid sm:grid-cols-[5rem_1fr] sm:gap-2">
                          <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-400 sm:text-sm sm:normal-case sm:tracking-normal sm:text-neutral-500">
                            {row.k}
                          </span>
                          <span className="min-w-0 font-medium text-neutral-900">{row.v}</span>
                        </div>
                      ))}
                      <button type="button" className="mt-1 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-indigo-500/25 sm:w-auto">
                        Confirm booking
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {active === 4 && (
                <div>
                  <StepHeader step="Step 05" title={current.title} description={current.description} className="mb-3 sm:mb-4" />
                  <div className="space-y-2 sm:space-y-2.5">
                    {[
                      { channel: "Email", detail: "Calendar invite · .ics attached", tone: "border-sky-100 bg-sky-50 text-sky-800" },
                      { channel: "WhatsApp", detail: "Lesson confirmed · Join link included", tone: "border-emerald-100 bg-emerald-50 text-emerald-800" },
                      { channel: "Dashboard", detail: "Appears under Upcoming lessons", tone: "border-indigo-100 bg-indigo-50 text-indigo-800" },
                    ].map((item) => (
                      <div key={item.channel} className={`flex items-start gap-2.5 rounded-xl border px-3 py-2.5 sm:items-center sm:gap-3 sm:px-4 sm:py-3 ${item.tone}`}>
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold shadow-sm sm:mt-0 sm:h-8 sm:w-8">
                          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.493-6.49a1 1 0 011.415 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold">{item.channel} sent</p>
                          <p className="text-xs leading-snug opacity-80">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active === 5 && (
                <div>
                  <StepHeader step="Step 06" title={current.title} description={current.description} className="mb-3 sm:mb-4" />
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-sky-500 p-4 text-white shadow-lg shadow-indigo-500/25 sm:p-5">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 sm:h-32 sm:w-32" aria-hidden />
                    <div className="relative">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                        Starts in 12 min
                      </span>
                      <p className="mt-3 text-lg font-bold leading-snug sm:text-xl lg:text-2xl">SAT Math with Sarah</p>
                      <p className="mt-1 text-sm text-indigo-100">Thu · 11:30 AM · Google Meet</p>
                      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <span className="rounded-xl bg-white px-4 py-2.5 text-center text-sm font-bold text-indigo-700">
                          Join Google Meet
                        </span>
                        <span className="rounded-xl bg-white/15 px-4 py-2.5 text-center text-sm font-semibold backdrop-blur">
                          Add to calendar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/40 px-3 py-2.5 sm:mt-4 sm:px-4 sm:py-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xs font-semibold text-white">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.493-6.49a1 1 0 011.415 0z" clipRule="evenodd" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">No back-and-forth</p>
          <div className="text-sm text-neutral-600">Students self-serve the full booking path</div>
        </div>
      </div>
    </div>
  );
}
