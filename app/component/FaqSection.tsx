"use client";
import React, { useState, type ReactNode } from "react";

export interface FaqItem {
  title: string;
  /** HTML string or React nodes (e.g. RegionalPrice). */
  content?: ReactNode;
}

interface FaqSectionProps {
  items?: FaqItem[];
}

export const FaqSection = ({ items = [] }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const safeItems = Array.isArray(items) ? items : [];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (safeItems.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 sm:gap-4">
      {safeItems.map((item, index) => { const isOpen = openIndex === index;
        return (
          <div key={index}
            className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-indigo-200/90 bg-white drop-shadow-[0_16px_60px_rgba(109,40,217,0.14)]"
                : "border-slate-200/80 bg-white/80 drop-shadow-[0_10px_35px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-indigo-200 hover:drop-shadow-[0_18px_50px_rgba(99,102,241,0.10)]"
            }`}
          >
            <button type="button" onClick={() => toggle(index)} className="flex w-full items-center gap-3 p-3 sm:p-5 text-left cursor-pointer" aria-expanded={isOpen} aria-controls={`faq-content-${index}`} id={`faq-trigger-${index}`}>
              <div
                className={`mt-0.5 h-11 w-11 hidden sm:flex shrink-0 items-center justify-center rounded-xl border transition-all ${
                  isOpen
                    ? "border-indigo-200 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white drop-shadow-lg"
                    : "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-question-mark-icon lucide-message-circle-question-mark"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-sm sm:text-base font-semibold text-neutral-900">{item.title}</div>
              </div>

              <div
                className={`flex sm:h-10 sm:w-10 h-8 w-8 text-xl shrink-0 items-center justify-center rounded-xl border transition-all ${
                  isOpen
                    ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 bg-white text-slate-500 group-hover:border-indigo-200 group-hover:text-indigo-700"
                }`}
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </div>
            </button>

            <div id={`faq-content-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`} className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}>
              <div className="min-h-0 overflow-hidden">
                <div className="px-3 pb-3 sm:px-5 sm:pb-5">
                  <div>
                  {item.content != null && item.content !== "" && (
                    typeof item.content === "string" ? (
                      <p className="max-w-3xl prose" dangerouslySetInnerHTML={{ __html: item.content }}/>
                    ) : (
                      <p className="max-w-3xl prose">{item.content}</p>
                    )
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
