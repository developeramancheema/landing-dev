import type { Metadata } from "next";
import Script from "next/script";
import Heading from "@/app/component/Heading";
import Card from "@/app/component/Card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo, REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import type { ReactNode } from "react";
import { FaqSection } from "@/app/component/FaqSection";
import SolutionCtaSection from "@/app/component/SolutionCtaSection";
import ScreenGate from "@/app/component/ScreenGate";

const pageUrl = `${BASE_URL}/solutions/dermatology-appointment-scheduling-software`;
const pageTitle = "All-in-one dermatology clinic software for appointment booking";
const pageDescription = "All-in-one dermatology clinic scheduling software for online appointment booking based on different treatment procedures, durations, or room requirements.";

export const metadata: Metadata = {
  title: `${pageTitle} | ${APP_NAME}`,
  description: pageDescription,
  keywords: [ "appointment software for dermatologists", "dermatologist appointment booking software", "dermatology clinic software for appointment scheduling", "Online booking software for skin care doctor", "Appointment management system for skin care clinic"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | ${APP_NAME}`,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `${pageTitle} | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${APP_NAME}`,
    description: pageDescription,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const heroFeatures = [
  "Simple Dashboard",
  "Shareable Booking Link",
  "Set up in Minutes",
  "Self-Scheduling Appointment",
  "Role-based access",
  "Get booked around the clock",
];

const calendarDays = [
  "", "", "", 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, "",
];

const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM"];

const trustItems = [
  {
    label: "Save Time",
    icon: ( <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Improve Patient Experience",
    icon: ( <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.5l1.94 3.93 4.34.63-3.14 3.06.74 4.32-3.88-2.04-3.88 2.04.74-4.32L5.2 8.06l4.34-.63L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    label: "Reduce No-Shows",
    icon: ( <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
  },
  {
    label: "Grow Your Practice",
    icon: ( <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/>
        </svg>
    ),
  },
];

const featureCards: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Centralized Dashboard",
    description: "Get all appointment activities in one place, including: total bookings, upcoming, rescheduled, cancelled, and no-shows. That makes it easy to track and filter.",
    icon: ( <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
        <circle cx="16.5" cy="15.5" r="2.5" />
        <path strokeLinecap="round" d="M16.5 14.2v1.3l.8.5" />
      </svg>
    ),
  },
  {
    title: "24/7 Online Bookings",
    description: "Share the booking link on your website, Facebook, or other platforms. Allow clients to book, cancel, or reschedule appointments online anytime, on any device.",
    icon: ( <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
  },
  {
    title: "Automate Patient Self-Scheduling",
    description: "The toughest part of manual scheduling is managing a calendar with cancelled and rescheduled appointments. But a self-scheduling system organises bookings easily with real-time sync.",
    icon: ( <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9.5" cy="7.5" r="3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 8v6M17 11h6" />
      </svg>
    ),
  },
  {
    title: "Know Your Clients",
    description: "Detailed appointment history and clients' preferences improve relationships. Contact details make it easy to communicate and remind them for future bookings.",
    icon: ( <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Reminders and Notifications",
    description: "Welcome and confirmation messages build trust. Send automated reminders and notification messages for any changes to reduce no-shows —no revenue loss.",
    icon: ( <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M2 10h20" />
        <path strokeLinecap="round" d="M6 15h4" />
      </svg>
    ),
  },
  {
    title: "Staff Management",
    description: "A simple add-on service provider feature allows you to track and manage your employee schedules effectively. Every employee can also access their schedules on any device.",
    icon: ( <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.493-6.49a1 1 0 011.415 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

const testimonials = [
  {
    quote: "GetSetTime has transformed the way we manage appointments. Our no-show rate has dropped significantly!",
    name: "Dr. Amanda Williams",
    organization: "Williams Dermatology",
    image: "/doctor-profile.webp",
  },
  {
    quote: "Patients love the easy online booking and reminders. It saves us so much time every day.",
    name: "Dr. Mark Stevens",
    organization: "Clear Skin Dermatology",
    image: "/dentist-profile.webp",
  },
  {
    quote: "The best scheduling software we've used. Simple, reliable, and excellent customer support.",
    name: "Dr. Priya Patel",
    organization: "Glow Dermatology",
    image: "/physiotherapy-profile.webp",
  },
];

const faqItems = [
  {
      title: "How is Dermatology Patient Scheduling Software different from generic software?",
      content: `Unlike generic software, Dermatology patient scheduling software is built to meet the needs of skin clinics and dermatologists, from simple consultations to advanced cosmetic procedures.<br/><br/> 
      If one visit is for acne follow-ups, the next one may be for a Botox appointment, or another for recurring treatments. Generic scheduling software treats all of that as the same slot. Dermatology-specific tools don't—they account for procedure length, recovery time, and which provider handles each visit, so the calendar matches how the clinic really runs.`,
  },
  {
      title: "Why Do Growing Dermatology Clinics Need Smart Appointment Booking Software?",
      content: `Sometimes, a slight increase in appointments can lead to an admin workload. At that time, it can either impact patient experience or lead to missed booking opportunities. An appointment management system for a skin care clinic not only fits for all time but also creates more growth opportunities by allowing customers to book 24/7 online.`,
  },
  {
      title: "How does Getsettime allow clients to book a skin care doctor online?",
      content: `Getsettime is an easy-to-use Online booking software for skin care doctors. While creating a workspace, the doctor gets a customizable booking link. This unique link allows their clients to book appointments 24/7: they follow the link, choose the service provider, service type, and available slot. Appointments are booked in minutes.`,
  },
  {
      title: "Does Getsettime support Provider-Specific Scheduling Controls?",
      content: `Yes, Getsettime is a fully optimised appointment management system for dermatology practices. It supports scheduling based on different treatment capabilities, durations, or room requirements. Clients can also book a dermatologist, physician assistant, nurse injector, or cosmetic specialist from the same link.`,
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: APP_NAME,
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
      },
      description: "GetSetTime is a smart appointment scheduling platform trusted by 5,000+ doctors, salon owners, and wellness professionals. Simple to set up, smart enough to run itself.",
      slogan: "Precision Scheduling for Modern Care",
      foundingDate: "2025",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "10",
      },
      areaServed: "Worldwide",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi", "Punjabi"],
          areaServed: "Worldwide",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: ["English", "Hindi", "Punjabi"],
          areaServed: "Worldwide",
        },
      ],
      sameAs: [
        "https://www.facebook.com/getsettime",
        "https://x.com/getsettime",
        "https://www.instagram.com/getsettime",
        "https://www.youtube.com/@GetSetTime",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        name: APP_NAME,
        url: BASE_URL,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}/#softwareapplication`,
      name: APP_NAME,
      alternateName: "Dermatology Appointment Scheduling Software",
      url: pageUrl,
      inLanguage: "en",
      author: {
        "@id": `${BASE_URL}/#organization`,
      },
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Appointment Scheduling Software",
      operatingSystem: "All — Web-based, no installation required",
      availableOnDevice: ["Desktop", "Mobile", "Tablet"],
      featureList: [
        "Online appointment booking for dermatology patients",
        "Provider-specific scheduling controls",
        "Procedure-based duration and room requirements",
        "WhatsApp booking confirmations and reminders",
        "Automated email reminders and follow-ups",
        "Two-way Google Calendar sync",
        "Microsoft Teams and Zoom integration",
        "Custom branding and booking page",
        "Staff and multi-resource management",
        "Buffer time and availability configuration",
        "Multi-location support",
        "No-show reduction automation",
      ],
      screenshot: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
      installUrl: REGISTER_URL,
      releaseNotes: `${BASE_URL}/blog`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${BASE_URL}/solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.content.replace(/<br\s*\/?>/gi, " ").replace(/\s+/g, " ").trim(),
        },
      })),
    },
  ],
};

export default function DermatologyAppointmentSchedulingSoftware() {
  return (
    <>
        <Script
          id="dermatology-appointment-scheduling-software-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="relative overflow-x-clip py-14 sm:py-20 lg:min-h-[min(90vh,720px)]">
            {/* Left content — stays within container */}
            <div className="relative z-20 mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 lg:max-w-[calc(50%-3rem)]">
                    <Heading
                        badge="Dermatologist Appointment Scheduling Software"
                        title="Patient Scheduling Software for"
                        highlightText="Dermatologists"
                        description="Getsettime is built for modern skincare clinics to manage every booking seamlessly, from routine skin checks to specialised cosmetic procedures."
                        headingTag="h1"
                        titleClassName="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
                    />

                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 md:gap-y-5 min-[520px]:grid-cols-2">
                        {heroFeatures.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </div>
                        ))}
                    </div>

                    <div className="flex gap-2 max-[425px]:flex-col flex-row flex-wrap">
                        <Link href={`${REGISTER_GOOGLE_URL}`} target="_blank" aria-label="Sign up with Google" className="bg-indigo-600 text-white text-sm px-4 py-3 rounded-xl flex items-center justify-center gap-3">
                        <svg viewBox="0 0 48 48" className="w-5 h-5 sm:w-6 sm:h-6 inline-block rounded-sm bg-white p-1">
                        <g>
                            <path fill="#4285F4" d="M43.6 20.5H42V20.4H24v7.2h11.2C33.9 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.5l5.8-5.8C33.5 7.1 28.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.7-.4-4z"/>
                            <path fill="#34A853" d="M6.3 14.1l5.9 4.3C14.2 15.1 18.7 12 24 12c2.6 0 5 .9 6.9 2.5l5.8-5.8C33.5 7.1 28.9 5 24 5c-7.1 0-13.1 4.1-16.1 10.1z"/>
                            <path fill="#FBBC05" d="M24 44c5.3 0 10.1-1.8 13.8-4.9l-6.4-5.2C29.5 35.7 26.9 36.7 24 36.7c-5.4 0-9.9-3.6-11.5-8.5l-6.1 4.7C7 39.1 14.9 44 24 44z"/>
                            <path fill="#EA4335" d="M43.6 20.5H42V20.4H24v7.2h11.2c-1.1 3.1-3.6 5.7-6.6 7.1l6.4 5.2C39.9 37.1 44 31.9 44 25c0-1.3-.1-2.7-.4-4z"/>
                        </g>
                        </svg>
                            Sign up with Google
                        </Link>
                        <Link href={`${REGISTER_URL}`} aria-label="Get Started for Free - Dermatology Appointment Scheduling Software" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">Get Started for Free</Link>
                    </div>
                </div>
            </div>

            <ScreenGate minWidth={768}>
            {/* Right image — flush to viewport right on large screens */}
            <div className="relative z-10 mt-10 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-1/2 lg:px-0">
                <div className="relative min-h-[360px] p-2 rounded-2xl sm:min-h-[420px] lg:h-full lg:min-h-0">
                    <Image
                    src="/dermatology-hero.webp"
                    alt="Dermatologist performing a facial treatment on a patient"
                    className="h-full w-full object-cover rounded-2xl"
                    width={1000}
                    height={1000}
                    />

                    {/* Book Appointment — overlaps left edge of image */}
                    <div className="absolute left-3 top-[5%] z-20 w-[min(80%,15.75rem)] rounded-2xl bg-white p-3.5 shadow-[0_20px_55px_rgba(15,23,42,0.2)] sm:top-[40%] sm:w-[16.75rem] sm:translate-x-6 sm:p-4 lg:-translate-x-10 xl:-translate-x-12">
                        <h3 className="text-sm font-semibold text-slate-900">Book Appointment</h3>

                        <div className="mt-3">
                          <div className="mb-2 flex items-center justify-center">
                              <span className="text-xs font-semibold text-slate-800">May 2024</span>
                          </div>

                          <div className="grid grid-cols-7 gap-y-0.5 text-center text-[10px] text-slate-400">
                              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                              <span key={d} className="py-0.5 font-medium">{d}</span>
                              ))}
                              {calendarDays.map((day, i) => (
                              <span
                                  key={`${day}-${i}`}
                                  className={`mx-auto flex h-6 w-6 items-center justify-center rounded-md text-[10px] ${
                                  day === 16
                                      ? "bg-indigo-600 font-semibold text-white"
                                      : day
                                      ? "text-slate-700"
                                      : ""
                                  }`}
                              >
                                  {day || ""}
                              </span>
                              ))}
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="mb-2 text-xs font-semibold text-slate-800">Available Slots</p>
                          <div className="flex flex-wrap gap-1.5">
                              {timeSlots.map((slot) => (
                              <span
                                  key={slot}
                                  className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium ${
                                  slot === "11:30 AM"
                                      ? "bg-indigo-600 text-white"
                                      : "border border-indigo-200 bg-white text-slate-700"
                                  }`}
                              >
                                  {slot}
                              </span>
                              ))}
                          </div>
                        </div>

                        <span className="block mt-3.5 w-full rounded-lg bg-indigo-600 py-2.5 text-xs font-semibold text-center text-white">Confirm Appointment</span>
                    </div>

                    {/* Confirmation — bottom-right of image */}
                    <div className="hidden lg:block absolute bottom-4 left-[35%] lg:left-[50%] xl:left-[40%] z-20 w-1/2 rounded-2xl bg-white p-3 shadow-[0_20px_55px_rgba(15,23,42,0.2)] sm:-bottom-4 sm:p-3.5 w-[min(88%,15.75rem)]">
                        <div className="flex items-center gap-3">
                        <Image src="/dermatology-doc.webp" alt="Dr. Sarah Johnson" width={40} height={40} className="h-10 w-10 rounded-full object-cover"/>
                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">Sarah Johnson</p>
                            <div className="text-xs text-slate-500">Follow-up Visit</div>
                        </div>
                        </div>
                        <div className="mt-2 text-xs text-slate-400">May 16, 2024 · 11:30 AM</div>
                        <div className="mt-2.5">
                        <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">Confirmed</span>
                        </div>
                    </div>
                </div>
            </div>
            </ScreenGate>
        </section>
        
        <ScreenGate minWidth={768}>
        {/* Trusted by Dermatology Practices */}
        <section className="bg-white lg:pt-10 pb-14 md:pb-20">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-indigo-50 px-4 py-8">
                    <p className="text-center text-sm font-semibold text-neutral-600">Trusted by Dermatology Practices</p>

                    <div className="mt-6 flex flex-wrap justify-center gap-x-10 sm:gap-x-14 md:gap-x-20">
                    {trustItems.map((item) => (
                        <div key={item.label} className="flex items-center gap-2">
                            <span className="shrink-0 text-indigo-600">{item.icon}</span>
                            <span className="text-sm font-medium text-slate-800 sm:text-[15px]">{item.label}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
        </ScreenGate>

        {/* Features Section */}
        <section className="relative overflow-hidden sm:py-20">
          <div className="absolute top-10 left-10 hidden sm:block w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 hidden sm:block w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>

          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <Heading
              title="All-in-One Dermatology"
              highlightText="Clinic Software"
              description="From appointment booking to patient management, GetSetTime helps you run your practice efficiently so you can focus on what matters most—your patients. To keep your workflow simple and effective,"
              wrapperClassName="mx-auto mb-10 max-w-3xl space-y-4 text-center"          
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {featureCards.map((feature) => (
                <Card
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Easy to Use Section */}
        <section className="bg-white py-14 sm:py-20">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left — doctor dashboard mockup */}
                    <div className="lg:col-span-7 relative mx-auto w-full">
                        {/* <DermatologyDashboardMockup /> */}
                        <Image src='/best-software-for-dermatology-practices.webp' alt='best software for dermatology practices' width={800} height={800} />
                    </div>

                    {/* Right — heading + checklist + CTA */}
                    <div className="lg:col-span-5 space-y-6 lg:pl-2">
                        <Heading
                            badge="Easy to use"
                            title="Best Software for"
                            highlightText="Dermatology Practices"
                            description="Its advanced dashboard is shaped around the routine dermatology scheduling requirements."
                        />

                        <div className="space-y-3">
                            {[
                            "Easy to set up, customise, and user-friendly dashboard",
                            "Access anywhere, anytime, on a role-based",
                            "Track and filter all your appointment statuses in one place",
                            "Custom rules to send reminders via text, email, and phone",
                            "Add and manage staff, assign roles to maintain privacy",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></span>
                                    <span className="text-sm text-slate-700 sm:text-[15px]">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Start your salon booking setup - Salon Appointment Scheduling Software" className="inline-flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 text-sm text-white">Sign Up for Free</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="bg-indigo-50/10 pb-14 sm:pb-20">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <Heading
              badge="TESTIMONIALS"
              title="Loved by"
              highlightText="Dermatologists"
              wrapperClassName="mx-auto mb-6 max-w-3xl space-y-4 text-center"              
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                    <span className="leading-none" aria-hidden>
                      <svg fill="#e0e7ff" width="50px" height="50px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path></g></svg>
                    </span>
                    <p>{item.quote}</p>
                    <div className="mt-6 flex items-center gap-3">
                        <Image
                        src={item.image}
                        alt={item.name}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-bold text-neutral-900">{item.name}</p>
                            <p className="text-sm text-neutral-500">{item.organization}</p>
                        </div>
                    </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */} 
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
            
            <div className="absolute inset-0 hidden sm:block pointer-events-none">
                <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
                <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            </div>

            <div className="relative mx-auto grid container px-4 sm:px-6 lg:px-8 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
                {/* left: Title */}
                <div className="space-y-3">
                    <Heading
                      badge="Frequently Asked Questions"
                      title="Questions Dermatology Practices Ask Before Getting Started"
                      description="GetSetTime is built for dermatology practices who want to grow their business online. We answer the most common questions dermatology practices have about our platform."
                    />
                    <ScreenGate minWidth={768}>
                    <div className="grid gap-4 sm:grid-cols-2 mt-6">
                        <Card title="Smart scheduling" description="Highlight automation, reminders, and live availability." icon={<svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />

                        <Card title="Build trust" description="Reduce friction with short supportive answers and better clarity." icon={<svg className="h-7 w-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                        
                        <Card title="Premium feel" description="Matches polished hero and feature sections better than a plain list." icon={<svg className="h-8 w-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                        
                        <Card title="Easy growth" description="Scale bookings smoothly with structured workflows and clear next steps." icon={<svg fill="#00a63e" className="h-8 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="#000000" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"></path> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"></path> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"></path> </g> </g> </g></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                    </div>
                    </ScreenGate>
                </div>
                {/* right: FAQ Section */}
                <div>
                    <FaqSection items={faqItems} />
                </div>
            </div>
        </section>

        {/* Call-to-Action Section */}
        <SolutionCtaSection
          badge="Built for Dermatology Clinics"
          businessType="Dermatology Clinic"
        />

    </>
  );
}
