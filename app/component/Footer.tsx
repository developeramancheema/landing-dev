"use client";
import { useState } from "react";
import { APP_NAME, BASE_URL, socialLinks } from "@/lib/config";
import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import ScreenGate from "./ScreenGate";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const usefulLinks = [
    { label: "Features", href: `/features` },
    { label: "Support", href: `/contact-us` },
    { label: "Pricing", href: `/pricing` },
    { label: "Blog", href: `${BASE_URL}/blog` },
    { label: "Contact Us", href: `${BASE_URL}/contact-us` },
  ];
  const solutionsLinks = [
    { label: "Doctor appointment Software", href: `${BASE_URL}/solutions/doctor-appointment-scheduling-software` },    
    { label: "Physiotherapy appointment Software", href: `${BASE_URL}/solutions/physiotherapist-appointment-booking-software` },
    { label: "Dentist appointment Software", href: `${BASE_URL}/solutions/dentist-appointment-scheduling-software` },
    { label: "Salon appointment Software", href: `${BASE_URL}/solutions/salon-appointment-scheduling-software` },
    { label: "Tutor appointment Software", href: `${BASE_URL}/solutions/tutor-appointment-booking-software` },
  ];
  const resourcesLinks = [
    { label: "Claim Free Booking Page", href: `${BASE_URL}/claim-now-free-appointment-scheduling-software` },
    { label: "Help Center", href: `${BASE_URL}/help-center` },
    { label: "Privacy Policy", href: `${BASE_URL}/privacy-policy` },
    { label: "Terms of Conditions", href: `${BASE_URL}/terms-of-conditions` },
  ];
  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-white to-indigo-500/30 pb-16 md:pb-0 pt-14 sm:pt-20">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            
            {/* Brand Column */}
            <div className="sm:col-span-3 lg:col-span-1">
              <div className="lg:col-span-1 space-y-3">
                <div><Logo /></div>
                <p>GetSetTime is a cloud-based scheduling software built for appointment-based services and businesses to manage bookings effortlessly. Simple scheduling, fewer no-shows, more time for what matters — running your practice.</p>
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel}
                        className="group flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 hover:bg-indigo-100 focus:bg-indigo-200 hover:text-indigo-600 transition-all duration-200 outline-none"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="flex justify-start lg:justify-center sm:col-span-2 lg:col-span-1">
              <div className="w-full">             
                <ScreenGate minWidth={640}>
                  <div className="flex justify-start lg:justify-center">
                    <div>
                      <div className="font-semibold text-neutral-900 mb-4">Quick Links</div>
                      <ul className="flex flex-row flex-wrap lg:flex-col gap-2">
                        {usefulLinks.map((link, index) => (
                          <li key={link.href}>
                            <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">
                              {link.label}
                              {index < usefulLinks.length - 1 && (
                                <span className="lg:hidden"> | </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScreenGate>

                <ScreenGate maxWidth={639}>
                  <div className="border-b border-neutral-200">
                    <button type="button" onClick={() => toggleSection("quick-links")} className="flex w-full items-center justify-between gap-3 py-2.5 text-left" aria-expanded={openSection === "quick-links"}>
                      <span className="font-semibold text-neutral-900">Quick Links</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-lg text-neutral-500">
                        {openSection === "quick-links" ? "−" : "+"}
                      </span>
                    </button>
                    <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                      style={{
                        gridTemplateRows: openSection === "quick-links" ? "1fr" : "0fr",
                        opacity: openSection === "quick-links" ? 1 : 0,
                      }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className="flex flex-col gap-2.5 pb-3.5">
                          {usefulLinks.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScreenGate>

              </div>
            </div>

            {/* Solutions */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="w-full">
                <ScreenGate minWidth={640}>
                  <div className="">
                    <div className="font-semibold text-neutral-900 mb-4">Solutions</div>
                    <ul className="space-y-2">
                      {solutionsLinks.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScreenGate>

                <ScreenGate maxWidth={639}>
                  <div className="border-b border-neutral-200">
                    <button type="button" onClick={() => toggleSection("solutions")} className="flex w-full items-center justify-between gap-3 py-2.5 text-left" aria-expanded={openSection === "solutions"}>
                      <span className="font-semibold text-neutral-900">Solutions</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-lg text-neutral-500">
                        {openSection === "solutions" ? "−" : "+"}
                      </span>
                    </button>
                    <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                      style={{
                        gridTemplateRows: openSection === "solutions" ? "1fr" : "0fr",
                        opacity: openSection === "solutions" ? 1 : 0,
                      }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className="flex flex-col gap-2.5 pb-3.5">
                          {solutionsLinks.map((link) => (
                            <li key={link.label}>
                              <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScreenGate>
              </div>
            </div>

            {/* Resources */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="w-full">
                <ScreenGate minWidth={640}>
                  <div className="">
                    <div className="font-semibold text-neutral-900 mb-4">Resources</div>
                    <ul className="flex flex-row flex-wrap lg:flex-col gap-2">
                      {resourcesLinks.map((link, index) => (
                        <li key={link.href}>
                          <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">
                            {link.label}
                            {index < resourcesLinks.length - 1 && (
                              <span className="lg:hidden"> | </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScreenGate>

                <ScreenGate maxWidth={639}>
                  <div className="border-b border-neutral-200">
                    <button type="button" onClick={() => toggleSection("resources")} className="flex w-full items-center justify-between gap-3 py-2.5 text-left" aria-expanded={openSection === "resources"}>
                      <span className="font-semibold text-neutral-900">Resources</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-neutral-200 text-lg text-neutral-500">
                        {openSection === "resources" ? "−" : "+"}
                      </span>
                    </button>
                    <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                      style={{
                        gridTemplateRows: openSection === "resources" ? "1fr" : "0fr",
                        opacity: openSection === "resources" ? 1 : 0,
                      }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className="flex flex-col gap-2.5 pb-3.5">
                          {resourcesLinks.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} aria-label={link.label} className="hover:text-indigo-600 duration-200">{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScreenGate>
              </div>
            </div>

          </div>

          {/* Newsletter Signup */}
          <div className="py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                  <div className="font-semibold text-neutral-900">Stay Updated</div>
                  <div>Get the latest updates, tips, and scheduling best practices delivered to your inbox.</div>
              </div>
              <Newsletter className="flex flex-col sm:flex-row gap-3" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 border-t border-neutral-200 text-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>© 2026 {APP_NAME}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};