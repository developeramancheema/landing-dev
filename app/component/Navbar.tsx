"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { BASE_URL, socialLinks, LOGIN_URL, REGISTER_URL } from "@/lib/config";
import Logo from "./Logo";

function scrollToHashSection(hash: string) {
  if (typeof window === "undefined" || !hash) return;
  window.scrollTo({ top: 0, behavior: "instant" });
  requestAnimationFrame(() => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState<boolean>(false);
  const [desktopSolutionsOpen, setDesktopSolutionsOpen] = useState<boolean>(false);
  const desktopSolutionsRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHome = pathname === "/" || pathname === "";

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return isHome;
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname, isHome]
  );

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, hash: string | null) => {
      setOpen(false);
      if (!hash || !isHome) return;
      e.preventDefault();
      scrollToHashSection(hash);
      window.history.pushState(null, "", `/#${hash}`);
    },
    [isHome]
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined" || !isHome) return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const id = ["features", "support", "pricing"].includes(hash) ? hash : null;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [isHome, pathname]);

  return (
    <>
    <header className="sticky z-999 top-0 border-b border-gray-200 bg-white w-full">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center lg:items-stretch justify-between h-16">
            <Logo />
            
            <nav className="hidden md:flex items-stretch justify-between gap-8">
              <Link href="/features" onClick={(e) => handleAnchorClick(e, null)} aria-label="Features - Navbar" aria-current={isActive("/features") ? "page" : undefined} className={`text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center ${isActive("/features") ? "text-indigo-600" : ""}`}>
                Features
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 transition-all duration-300 ${isActive("/features") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <Link href="/contact-us" onClick={(e) => handleAnchorClick(e, null)} aria-label="Support - Navbar" aria-current={isActive("/contact-us") ? "page" : undefined} className={`text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center ${isActive("/contact-us") ? "text-indigo-600" : ""}`}>
                Support
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 transition-all duration-300 ${isActive("/contact-us") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <Link href="/pricing" onClick={(e) => handleAnchorClick(e, null)} aria-label="Pricing - Navbar" aria-current={isActive("/pricing") ? "page" : undefined} className={`text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center ${isActive("/pricing") ? "text-indigo-600" : ""}`}>
                Pricing
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 transition-all duration-300 ${isActive("/pricing") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
              <div
                ref={desktopSolutionsRef}
                className="relative group flex items-center"
                onMouseEnter={() => setDesktopSolutionsOpen(true)}
                onMouseLeave={() => setDesktopSolutionsOpen(false)}
                onBlur={(e) => {
                  if (!desktopSolutionsRef.current?.contains(e.relatedTarget as Node)) {
                    setDesktopSolutionsOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={desktopSolutionsOpen}
                  aria-current={isActive("/solutions") ? "page" : undefined}
                  className={`text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative inline-flex items-center gap-1 cursor-pointer flex items-center h-full ${isActive("/solutions") ? "text-indigo-600" : ""}`}
                  onClick={() => setDesktopSolutionsOpen((v) => !v)}
                >
                  Solutions
                  <svg className={`w-4 h-4 transition-transform duration-200 ${desktopSolutionsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 transition-all duration-300 ${desktopSolutionsOpen || isActive("/solutions") ? "w-full" : "w-0"}`}></span>
                </button>
                <div className="absolute left-1/2 top-full w-[400px] -translate-x-1/2">
                  <div className={`${desktopSolutionsOpen ? "block pointer-events-auto opacity-100 translate-y-0" : "hidden pointer-events-none opacity-0 translate-y-2"} transition-all duration-200 rounded-2xl bg-white/95 backdrop-blur border border-gray-200 drop-shadow-[0_16px_40px_rgba(15,23,42,0.12)] p-3`}>
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[12px] font-bold uppercase tracking-wider text-zinc-400">Solutions</div>
                        <Link className="text-[12px] font-bold tracking-wider text-zinc-600 hover:text-indigo-600" href="/solutions">VIEW ALL</Link>
                      </div>
                      <div className="mt-1 text-[14px] font-extrabold text-zinc-950">Explore industry-specific scheduling pages</div>
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                      <Link href="/solutions/doctor-appointment-scheduling-software" aria-label="Doctor appointment Software - Navbar" aria-current={isActive("/solutions/doctor-appointment-scheduling-software") ? "page" : undefined} className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive("/solutions/doctor-appointment-scheduling-software") ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                        <span className="leading-5">Doctor</span>
                      </Link>

                      <Link href="/solutions/dentist-appointment-scheduling-software" aria-label="Dentist appointment Software - Navbar" aria-current={isActive("/solutions/dentist-appointment-scheduling-software") ? "page" : undefined} className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive("/solutions/dentist-appointment-scheduling-software") ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                        <span className="leading-5">Dentist</span>
                      </Link>

                      <Link href="/solutions/dermatology-appointment-scheduling-software" aria-label="Dermatology appointment Software - Navbar" aria-current={isActive("/solutions/dermatology-appointment-scheduling-software") ? "page" : undefined} className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive("/solutions/dermatology-appointment-scheduling-software") ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                        <span className="leading-5">Dermatology</span>
                      </Link>

                      <Link href="/solutions/physiotherapist-appointment-booking-software" aria-label="Physiotherapy appointment Software - Navbar" aria-current={isActive("/solutions/physiotherapist-appointment-booking-software") ? "page" : undefined} className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive("/solutions/physiotherapist-appointment-booking-software") ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                        <span className="leading-5">Physiotherapy</span>
                      </Link>

                      <Link href="/solutions/salon-appointment-scheduling-software" aria-label="Salon appointment Software - Navbar" aria-current={isActive("/solutions/salon-appointment-scheduling-software") ? "page" : undefined} className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive("/solutions/salon-appointment-scheduling-software") ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                        <span className="leading-5">Salon</span>
                      </Link>

                      <Link href="/solutions/tutor-appointment-booking-software" aria-label="Tutor appointment booking software - Navbar" aria-current={isActive("/solutions/tutor-appointment-booking-software") ? "page" : undefined} className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${isActive("/solutions/tutor-appointment-booking-software") ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-neutral-700 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                        <span className="leading-5">Tutor</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={`${BASE_URL}/blog`} onClick={(e) => handleAnchorClick(e, null)} aria-label="Blog - Navbar" aria-current={isActive("/blog") ? "page" : undefined} className={`text-sm font-medium hover:text-indigo-600 transition-all duration-200 relative group flex items-center ${isActive("/blog") ? "text-indigo-600" : ""}`}>
                Blog
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-secondary-500 transition-all duration-300 ${isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            </nav>

            <div className="flex md:hidden lg:flex items-center justify-between gap-4">
              <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Sign In - Navbar" className="hidden sm:block text-sm text-indigo-600 cursor-pointer px-5 py-2.5 rounded-xl bg-indigo-500/10">Sign In</Link>
              <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Sign Up - Navbar" className="rounded-xl bg-indigo-600 text-white sm:text-sm text-xs px-3 py-2 sm:px-5 sm:py-2.5">Start Free</Link>
            </div>

          </div>
        </div>
    </header>

      {/* Mobile bottom nav — outside header so shadow/fixed pos. doesn't create page scroll */}
      <div className="fixed block inset-x-0 bottom-0 z-[999] max-w-[100vw] overflow-hidden bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_16px_rgba(15,23,42,0.12)] md:hidden">
        {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-slate-900/[0.06] to-transparent" aria-hidden /> */}
            {/* Menu content */}
            <div className="relative">
              {/* Navigation items */}
              <nav className="flex justify-between gap-2">
                <Link href="/" onClick={(e) => handleAnchorClick(e, null)} aria-label="Home - Navbar" aria-current={isActive("/") ? "page" : undefined} className={`group text-center rounded-xl text-xs relative ${isActive("/") ? "text-indigo-600" : "text-neutral-700"}`}>
                  <span className="mx-auto text-center flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
                  <span className="relative z-10">Home</span>
                </Link>
                <Link href="/solutions" onClick={(e) => handleAnchorClick(e, null)} aria-label="solutions - Navbar" aria-current={isActive("/solutions") ? "page" : undefined} className={`group text-center rounded-xl text-xs relative ${isActive("/solutions") ? "text-indigo-600" : "text-neutral-700"}`} style={{ animationDelay: "100ms" }}>
                  <span className="mx-auto text-center flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg></span>
                  <span className="relative z-10">Solutions</span>
                </Link>                   
                <Link href="/pricing" onClick={(e) => handleAnchorClick(e, null)} aria-label="Pricing - Navbar" aria-current={isActive("/pricing") ? "page" : undefined} className={`group text-center rounded-xl text-xs relative ${isActive("/pricing") ? "text-indigo-600" : "text-neutral-700"}`} style={{ animationDelay: "100ms" }}>
                  <span className="mx-auto text-center flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></span>
                  <span className="relative z-10">Pricing</span>
                </Link>   
                <Link href="/contact-us" onClick={(e) => handleAnchorClick(e, null)} aria-label="Support - Navbar" aria-current={isActive("/contact-us") ? "page" : undefined} className={`group text-center rounded-xl text-xs relative ${isActive("/contact-us") ? "text-indigo-600" : "text-neutral-700 "}`}>
                  <span className="mx-auto text-center flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg></span>
                  <span className="relative z-10">Support</span>
                </Link>          
                <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Sign In - Navbar" className="group text-center rounded-xl text-xs relative">
                <span className="mx-auto text-center flex justify-center"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                <span className="relative z-10">Sign in</span>
                </Link>
              </nav>
            </div>
          </div>
    </>
  );
};