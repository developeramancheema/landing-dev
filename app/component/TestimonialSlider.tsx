"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export interface TestimonialItem {
  id: number | string;
  name: string;
  role: string;
  text?: string;
  review?: string;
  initials?: string;
  avatar?: string;
}

interface TestimonialSliderProps {
  badgeLabel: string;
  title: string;
  description: string;
  testimonials: TestimonialItem[];
  autoRotateMs?: number;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "NA";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

export const TestimonialSlider = ({
  badgeLabel,
  title,
  description,
  testimonials,
  autoRotateMs,
}: TestimonialSliderProps) => {
  const items = useMemo(() => (Array.isArray(testimonials) ? testimonials : []), [testimonials]);
  const testimonialCount = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"prev" | "next">("next");

  if (testimonialCount === 0) return null;

  const handleSlide = (direction: "prev" | "next") => {
    if (animating || testimonialCount <= 1) return;

    setSlideDirection(direction);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        direction === "prev"
          ? (prev - 1 + testimonialCount) % testimonialCount
          : (prev + 1) % testimonialCount
      );
      setAnimating(false);
    }, 360);
  };

  const current = items[activeIndex];
  const currentReview = current.text ?? current.review ?? "";
  const currentInitials = current.initials ?? getInitials(current.name);

  return (
    <section className="py-12 sm:py-20 relative bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef2ff_100%)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 drop-shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            {badgeLabel}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-5xl relative">
          <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[60px_auto_60px] sm:gap-6">
            <button type="button" onClick={() => handleSlide("prev")} className='mx-auto hidden transition-all duration-500 sm:inline-flex cursor-pointer' aria-label="Previous testimonial">
              <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-414.000000, -985.000000)" fill="#4f39f6"> <path d="M436,1002 L425.414,1002 L429.535,1006.12 C429.926,1006.51 429.926,1007.15 429.535,1007.54 C429.145,1007.93 428.512,1007.93 428.121,1007.54 L422.465,1001.879 C422.225,1001.639 422.15,1001.311 422.205,1001 C422.15,1000.689 422.225,1000.361 422.465,1000.121 L428.121,994.465 C428.512,994.074 429.145,994.074 429.535,994.465 C429.926,994.855 429.926,995.488 429.535,995.879 L425.414,1000 L436,1000 C436.553,1000 437,1000.448 437,1001 C437,1001.553 436.553,1002 436,1002 L436,1002 Z M442,985 L418,985 C415.791,985 414,986.791 414,989 L414,1013 C414,1015.21 415.791,1017 418,1017 L442,1017 C444.209,1017 446,1015.21 446,1013 L446,989 C446,986.791 444.209,985 442,985 L442,985 Z" id="arrow-left-square"> </path> </g> </g> </g></svg>
            </button>
            <div className="relative overflow-hidden">
              <div className="grid [grid-template-areas:'stack']">
                <div key={current.id} className="card [grid-area:stack] transition-all duration-300 ease-in-out">
                  <blockquote
                    className={`relative text-center rounded-2xl bg-white drop-shadow-sm text-neutral-500 p-6 text-xl transition-all duration-300 ease-in-out ${
                      animating
                        ? `${slideDirection === "next" ? "-translate-x-6" : "translate-x-6"} opacity-0`
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    <i>{currentReview}</i>
                  </blockquote>
                  <div
                    className={`mt-6 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out ${
                      animating
                        ? `${slideDirection === "next" ? "-translate-x-4" : "translate-x-4"} opacity-0`
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    {current.avatar ? (
                      <Image src={current.avatar} alt={current.name} width={48} height={48} className="h-12 w-12 rounded-xl object-cover" />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-base font-bold text-white">
                        {currentInitials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold">{current.name}</p>
                      <p className="text-sm">{current.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => handleSlide("next")} className='mx-auto hidden transition-all duration-500 sm:inline-flex cursor-pointer' aria-label="Next testimonial">
              <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -985.000000)" fill="#4f39f6"> <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square"> </path> </g> </g> </g></svg>
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
            <button type="button" onClick={() => handleSlide("prev")} className='inline-flex transition-all duration-500 cursor-pointer' aria-label="Previous testimonial">
              <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-414.000000, -985.000000)" fill="#4f39f6"> <path d="M436,1002 L425.414,1002 L429.535,1006.12 C429.926,1006.51 429.926,1007.15 429.535,1007.54 C429.145,1007.93 428.512,1007.93 428.121,1007.54 L422.465,1001.879 C422.225,1001.639 422.15,1001.311 422.205,1001 C422.15,1000.689 422.225,1000.361 422.465,1000.121 L428.121,994.465 C428.512,994.074 429.145,994.074 429.535,994.465 C429.926,994.855 429.926,995.488 429.535,995.879 L425.414,1000 L436,1000 C436.553,1000 437,1000.448 437,1001 C437,1001.553 436.553,1002 436,1002 L436,1002 Z M442,985 L418,985 C415.791,985 414,986.791 414,989 L414,1013 C414,1015.21 415.791,1017 418,1017 L442,1017 C444.209,1017 446,1015.21 446,1013 L446,989 C446,986.791 444.209,985 442,985 L442,985 Z" id="arrow-left-square"> </path> </g> </g> </g></svg>
            </button>
            <button type="button" onClick={() => handleSlide("next")} className='inline-flex transition-all duration-500 cursor-pointer' aria-label="Next testimonial">
              <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -985.000000)" fill="#4f39f6"> <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square"> </path> </g> </g> </g></svg>
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500 text-center">
            {activeIndex + 1} / {testimonialCount}
            {autoRotateMs ? ` · ${Math.round(autoRotateMs / 1000)}s` : ""}
          </div>
        </div>
      </div>
    </section>
  );
};