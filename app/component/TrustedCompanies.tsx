"use client";

import { useEffect, useRef, type Ref } from "react";
import Image from "next/image";
import Heading from "./Heading";

const companies = [
  { name: "Zoom", logo: "/Zoom.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" },
  { name: "Slack", logo: "/slack.svg" },
  { name: "Gmail", logo: "/gmail-icon.svg" },
  { name: "WhatsApp", logo: "/whatsapp.svg" },
  { name: "Google Calendar", logo: "/google-calendar.svg" },
  { name: "Microsoft Teams", logo: "/teams.svg" },
];

/** Enough duplicates to keep the viewport filled on ultrawide screens while one set scrolls off */
const SET_COUNT = 6;

function LogoSet({ setRef }: { setRef?: Ref<HTMLDivElement> }) {
  return (
    <div ref={setRef} className="flex shrink-0 items-center">
      {companies.map((company) => (
        <div key={company.name} className="flex h-12 shrink-0 items-center justify-center px-6 sm:px-8 md:px-10">
          <div className="relative h-10 w-full sm:h-12">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={50}
              height={50}
              className="rounded-lg p-2 object-contain sm:grayscale sm:brightness-90 transition hover:grayscale-0 hover:brightness-100"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TrustedCompanies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = setRef.current;
    if (!track || !firstSet) return;

    let raf = 0;
    let x = 0;
    let paused = false;
    const speed = 0.6;

    const tick = () => {
      if (!paused) {
        const setWidth = firstSet.offsetWidth;
        if (setWidth > 0) {
          x += speed;
          // Exact set-width reset → no gap, no stutter
          if (x >= setWidth) x -= setWidth;
          track.style.transform = `translate3d(${-x}px, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="bg-neutral-50 py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center mb-4">
          <Heading
            title="Easy To Integrate"
            description="Our system supports the world's leading operational tools for centralized and professional practices."
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-50 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-50 to-transparent sm:w-24" />

          <div ref={trackRef} className="flex w-max will-change-transform">
            {Array.from({ length: SET_COUNT }, (_, i) => (
              <div key={i} aria-hidden={i > 0 || undefined}>
                <LogoSet setRef={i === 0 ? setRef : undefined} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
