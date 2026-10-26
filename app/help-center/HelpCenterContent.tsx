"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { helpSections, getHelpCategories } from "@/lib/help-center-data";
import { BASE_URL, contactInfo, LOGIN_URL } from "@/lib/config";

export default function HelpCenterContent() {
  const categories = getHelpCategories();
  const [activeId, setActiveId] = useState(helpSections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = helpSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      {/* Left: Table of contents */}
      <aside className="lg:col-span-4">
        <nav
          aria-label="Help center table of contents"
          className="sticky top-24 rounded-2xl border border-neutral-100 bg-white p-5 drop-shadow-sm sm:p-6"
        >
          <div className="mb-5 flex items-center gap-2">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="text-lg font-bold text-neutral-900">Table of Contents</span>
          </div>

          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {category}
                </div>
                <ul className="space-y-1">
                  {helpSections
                    .filter((section) => section.category === category)
                    .map((section) => {
                      const isActive = activeId === section.id;
                      return (
                        <li key={section.id}>
                          <button
                            type="button"
                            onClick={() => scrollToSection(section.id)}
                            className={`group flex w-full items-start gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                              isActive
                                ? "bg-indigo-50 font-semibold text-indigo-700 drop-shadow-sm"
                                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                            }`}
                            aria-current={isActive ? "true" : undefined}
                          >
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                                isActive ? "bg-indigo-600" : "bg-neutral-300 group-hover:bg-indigo-400"
                              }`}
                              aria-hidden
                            />
                            <span>{section.title}</span>
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 p-4">
            <div className="text-sm font-semibold text-neutral-900">Need more help?</div>
            <p className="mt-1 text-sm text-neutral-600">
              Chat with our team or send us a message — we typically reply within 2 minutes.
            </p>
            <Link
              href={`${BASE_URL}/contact-us`}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Contact support
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Right: Guided help content */}
      <div className="lg:col-span-8">
        <div className="space-y-8">
          {helpSections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-2xl border border-neutral-100 bg-white p-6 drop-shadow-sm sm:p-8"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {section.category}
                </span>
                <span className="text-xs text-neutral-400">Guide {index + 1} of {helpSections.length}</span>
              </div>

              <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">{section.title}</h2>
              <p className="mt-2 text-neutral-600">{section.description}</p>

              <ol className="mt-6 space-y-4">
                {section.steps.map((step, stepIndex) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-sm font-bold text-white drop-shadow-md drop-shadow-indigo-500/25">
                      {stepIndex + 1}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <div className="font-semibold text-neutral-900">{step.title}</div>
                      <p className="mt-1 text-neutral-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {section.tip && (
                <div className="mt-6 flex gap-3 rounded-xl border border-amber-100 bg-amber-50/80 p-4">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-amber-900">Pro tip</div>
                    <p className="mt-0.5 text-sm text-amber-800">{section.tip}</p>
                  </div>
                </div>
              )}
            </article>
          ))}

          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-6 text-white drop-shadow-lg sm:p-8">
            <div className="text-xl font-bold sm:text-2xl">Ready to get started?</div>
            <p className="mt-2 max-w-xl text-indigo-100">
              Put these guides into action — create your account and start accepting online bookings today.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center rounded-xl text-sm font-medium text-white"
              >
                Email: {contactInfo.email}
              </Link>
              <Link
                href={LOGIN_URL}
                target="_blank"
                className="inline-flex items-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                Go to dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
