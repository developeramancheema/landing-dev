import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { APP_NAME, BASE_URL, REGISTER_URL, REGISTER_GOOGLE_URL, contactInfo } from "@/lib/config";
import Heading from "../component/Heading";
import Card from "../component/Card";
import CheckList from "../component/CheckList";
import RegionalPrice from "../component/RegionalPrice";
import ScreenGate from "../component/ScreenGate";

const pageUrl = `${BASE_URL}/features`;

export const metadata: Metadata = {
  title: `Features | ${APP_NAME}`,
  description: `Explore ${APP_NAME} features: online booking, WhatsApp reminders, Google Calendar sync, staff scheduling, queue management, reporting, and more for clinics, salons, and service businesses.`,
  keywords: ["appointment scheduling features", "WhatsApp booking reminders", "Google Calendar sync", "staff scheduling software", "online appointment booking"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Features | ${APP_NAME}`,
    description: `Explore ${APP_NAME} features: online booking, WhatsApp reminders, Google Calendar sync, staff scheduling, queue management, reporting, and more for clinics, salons, and service businesses.`,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Features | ${APP_NAME}`,
      },
    ],  
  },
  twitter: {
    card: "summary_large_image",
    title: `Features | ${APP_NAME}`,
    description: `Explore ${APP_NAME} features: online booking, WhatsApp reminders, Google Calendar sync, staff scheduling, queue management, reporting, and more for clinics, salons, and service businesses.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const heroHighlights = [
  { key: "Price", node: "Reasonable Price" },
  { key: "Support", node: "Free Technical Support" },
  { key: "Easy", node: "Easy To Sign Up" },
];

const schedule = [
    { time: "09:00", period: "AM", title: "Dental Consultation", meta: "Dr. Alexander Smith • Room 2", status: "Confirmed", tone: "indigo" },
    { time: "11:30", period: "AM", title: "Root Canal Procedure", meta: "Dr. Olivia Brown • Operatory 1", status: "Paid", tone: "emerald" },
];

const featureSuiteCards = [
  {
    title: "Online booking engine",
    description: "Create branded booking experiences for services, departments, providers, locations and event types.",
    bullets: ["Custom availability rules", "Buffer times and capacity", "Reschedule and cancel flows"],
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 7V3m8 4V3M5 11h14M7 21h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    iconWrapperClassName: "grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-600",
  },
  {
    title: "WhatsApp automation",
    description: "Send booking confirmations, reminders, reschedule links and follow-ups without manual staff work.",
    bullets: ["Instant confirmation", "Reminder sequences", "Real-time customer updates"],
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7.5 19.5 4 20.5l1-3.2A8 8 0 1 1 7.5 19.5Z" stroke="currentColor" strokeWidth={2} />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    iconWrapperClassName: "grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700",
  },
  {
    title: "Provider management",
    description: "Manage staff calendars, roles, working hours, leave days, rooms, resources and service assignments.",
    bullets: ["Provider availability", "Department/service mapping", "Multi-location scheduling"],
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M16 11a4 4 0 1 0-8 0v7h8v-7Z" stroke="currentColor" strokeWidth={2} />
        <path d="M6 21h12M9 6V3h6v3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
    iconWrapperClassName: "grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600",
  },
];

const workflowSteps = [
  {
    step: 1,
    tag: "Book",
    title: "Customer books a slot",
    description: "Online booking page validates availability, service rules, provider and branch.",
    accentBar: "bg-gradient-to-b from-indigo-500 to-violet-500",
    iconWrap: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-lg drop-shadow-indigo-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: 2,
    tag: "Sync",
    title: "Calendar and team update",
    description: "Staff schedule, internal dashboard and Google Calendar stay synchronized.",
    accentBar: "bg-gradient-to-b from-violet-500 to-purple-500",
    iconWrap: "bg-gradient-to-br from-violet-500 to-purple-600 text-white drop-shadow-lg drop-shadow-violet-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    step: 3,
    tag: "Notify",
    title: "WhatsApp reminders trigger",
    description: "Customers get confirmation, reminders and reschedule links automatically.",
    accentBar: "bg-gradient-to-b from-emerald-500 to-green-500",
    iconWrap: "bg-gradient-to-br from-emerald-500 to-green-600 text-white drop-shadow-lg drop-shadow-emerald-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: 4,
    tag: "Retain",
    title: "Follow-up grows retention",
    description: "Review requests, rebooking prompts and customer notes keep relationships warm.",
    accentBar: "bg-gradient-to-b from-cyan-500 to-sky-500",
    iconWrap: "bg-gradient-to-br from-cyan-500 to-sky-600 text-white drop-shadow-lg drop-shadow-cyan-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const industryCards = [
  {
    title: "Reduce front-desk load",
    description: "Let patients book, reschedule and receive reminders without repeated calls.",
    gradient: "from-indigo-500/10 via-transparent to-transparent",
    iconWrap: "bg-indigo-100 text-indigo-600 ring-indigo-200/60",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Fill staff calendars",
    description: "Manage providers, services, durations, payments and reminders from one screen.",
    gradient: "from-violet-500/15 via-indigo-500/5 to-transparent",
    iconWrap: "bg-violet-100 text-violet-600 ring-violet-200/60",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Scale operations",
    description: "Coordinate teams, locations, booking rules and customer communication smoothly.",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
    iconWrap: "bg-emerald-100 text-emerald-600 ring-emerald-200/60",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const weeklyBookings = [
  { day: "Mon", bookings: 32 },
  { day: "Tue", bookings: 41 },
  { day: "Wed", bookings: 38 },
  { day: "Thu", bookings: 58 },
  { day: "Fri", bookings: 47 },
  { day: "Sat", bookings: 62 },
  { day: "Sun", bookings: 34 },
];

const bookingChart = (() => {
  const width = 400;
  const height = 168;
  const pad = { top: 18, right: 14, bottom: 34, left: 42 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const max = Math.max(...weeklyBookings.map((d) => d.bookings));
  const total = weeklyBookings.reduce((sum, d) => sum + d.bookings, 0);
  const points = weeklyBookings.map((d, i) => ({
    ...d,
    x: pad.left + (i / (weeklyBookings.length - 1)) * plotW,
    y: pad.top + plotH - (d.bookings / max) * plotH,
  }));
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x.toFixed(1)},${(pad.top + plotH).toFixed(1)} L${points[0].x.toFixed(1)},${(pad.top + plotH).toFixed(1)} Z`;
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    y: pad.top + plotH * (1 - t),
    label: Math.round(max * t),
  }));
  return { width, height, pad, plotH, max, total, points, linePath, areaPath, yTicks };
})();

const analyticsMetrics = [
  {
    label: "Revenue",
    value: "₹1.2L",
    change: "+12% this week",
    changeClassName: "text-emerald-700 bg-emerald-50",
    cardClassName: "border-violet-100 bg-gradient-to-br from-violet-50/80 to-white",
    iconWrap: "bg-violet-100 text-violet-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "No-shows",
    value: "4.2%",
    change: "-8% vs last week",
    changeClassName: "text-emerald-700 bg-emerald-50",
    cardClassName: "border-amber-100 bg-gradient-to-br from-amber-50/70 to-white",
    iconWrap: "bg-amber-100 text-amber-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-3L13.74 5a2 2 0 00-3.48 0L3.33 16a2 2 0 001.74 3z" />
      </svg>
    ),
  },
  {
    label: "Avg. lead time",
    value: "2.4 days",
    change: "Stable booking pace",
    changeClassName: "text-indigo-700 bg-indigo-50",
    cardClassName: "border-cyan-100 bg-gradient-to-br from-cyan-50/70 to-white",
    iconWrap: "bg-cyan-100 text-cyan-600",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function FeaturesPage() {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "description": "GetSetTime is a smart appointment scheduling platform trusted by 5,000+ doctors, salon owners, and wellness professionals. Simple to set up, smart enough to run itself.",
        "slogan": "Precision Scheduling for Modern Care",
        "foundingDate": "2025",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "10"
        },
        "areaServed": "Worldwide",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "areaServed": "Worldwide",
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "areaServed": "Worldwide"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/getsettime",
          "https://x.com/getsettime",
          "https://www.instagram.com/getsettime",
          "https://www.youtube.com/@GetSetTime"
        ]
  
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
        "alternateName": `${APP_NAME}`,
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "description": "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": `${pageUrl}`,
        "name": `Features | ${APP_NAME}`,
        "description": `Explore ${APP_NAME} features: online booking, WhatsApp reminders, Google Calendar sync, staff scheduling, queue management, reporting, and more for clinics, salons, and service businesses.`,
        "inLanguage": "en",
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": { "@id": `${pageUrl}/#softwareapplication` },
        "mainEntity": { "@id": `${pageUrl}/#softwareapplication` },
        "breadcrumb": { "@id": `${pageUrl}/#breadcrumb` },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Features", "item": pageUrl },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}/#softwareapplication`,
        "name": `${APP_NAME}`,
        "alternateName": `${APP_NAME}`,
        "description": `${APP_NAME} gives service businesses a unified system for online bookings, WhatsApp reminders, calendar sync, customer records, staff scheduling, and performance insights.`,
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Appointment Scheduling Software",
        "operatingSystem": "All — Web-based, no installation required",
        "availableOnDevice": ["Desktop", "Mobile", "Tablet"],
        "url": `${pageUrl}`,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630,
        },
        "featureList": [
          "Online appointment booking for clients",
          "WhatsApp booking confirmations and reminders",
          "Automated email reminders and follow-ups",
          "Two-way Google Calendar sync",
          "Microsoft Teams and Zoom integration",
          "Slack and Gmail integration",
          "Custom branding and booking page",
          "Staff and multi-resource management",
          "Buffer time and availability configuration",
          "Payment processing",
          "Advanced analytics and reporting",
          "API access",
          "Multi-location support",
          "SSO integration",
          "No-show reduction automation"
        ],
        "inLanguage": "en",
        "author": {
          "@id": `${BASE_URL}/#organization`
        },
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "softwareVersion": "1.0",
        "screenshot": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        "installUrl": `${REGISTER_GOOGLE_URL}`,
        "releaseNotes": `${BASE_URL}/blog`,
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#features`,
        "name": `${APP_NAME} Feature Suite`,
        "numberOfItems": featureSuiteCards.length,
        "itemListElement": featureSuiteCards.map((card, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": card.title,
          "description": card.description,
        })),
      },
    ],
  };

  return (
    <>
        <Script id="features-page-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* Hero */}
        <section className="relative overflow-hidden py-14 sm:py-20">
            
          <div className="absolute inset-0 -z-10 hidden sm:block">
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 items-center gap-4 xl:grid-cols-2 lg:gap-6">
                 {/* left: Content */}
                <div className="space-y-6">
                    <Heading
                        badge="More Than Your Expectations"
                        title="One System for Scheduling All Your"
                        highlightText="Appointment Operations."
                        description="GetSetTime provides you with a unified dashboard to manage online bookings, WhatsApp reminders, calendar sync, customer records, staff scheduling, and review performance insights."
                        headingTag="h1"
                        titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
                    />

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
                        <Link href={`${BASE_URL}/pricing`} aria-label="View Pricing - Features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">View Pricing</Link>
                    </div>

                    <div className="flex flex-wrap gap-2 text-sm font-medium text-neutral-600">
                        {heroHighlights.map((item) => (
                        <span key={item.key} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 text-xs text-neutral-700 drop-shadow-sm">{item.node}</span>
                        ))}
                    </div>
                    
                    <ScreenGate minWidth={640}>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                              <div className="flex items-center gap-2">
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                  </span>
                                  <div>
                                      <div className="text-sm font-bold text-neutral-900">Online Booking</div>
                                  </div>
                              </div>
                              <div className="text-xs text-neutral-500">Branded pages &amp; availability rules</div>
                          </div>

                          <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                              <div className="flex items-center gap-2">
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                      <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
                                          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 27l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.5-1.5-5.4C5.6 9.3 10.3 4.6 16 4.6S26.4 9.3 26.4 15 21.7 24.8 16 24.8zm5.7-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" />
                                      </svg>
                                  </span>
                                  <div>
                                      <div className="text-sm font-bold text-neutral-900">WhatsApp Automation</div>
                                  </div>
                              </div>
                              <div className="text-xs text-neutral-500">Confirmations &amp; reminder sequences</div>
                          </div>

                          <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                              <div className="flex items-center gap-2">
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                      </svg>
                                  </span>
                                  <div>
                                      <div className="text-sm font-bold text-neutral-900">Calendar Sync</div>
                                  </div>
                              </div>
                              <div className="text-xs text-neutral-500">Two-way Google Calendar updates</div>
                          </div>
                      </div>
                    </ScreenGate>
                </div>

                {/* right: Dashboard preview */}
                <div className="relative w-full animate-fade-in-scale">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white drop-shadow-xl">
                      <ScreenGate minWidth={768}>
                        {/* Window chrome */}
                        <div className="relative z-10 flex items-center justify-between border-b border-neutral-200 px-3 py-3 sm:py-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="relative">
                              <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse sm:h-3 sm:w-3"></div>
                              <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-red-400 animate-ping sm:h-3 sm:w-3"></div>
                            </div>
                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                            <div className="h-2.5 w-2.5 rounded-full bg-green-600 sm:h-3 sm:w-3"></div>
                          </div>
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600 sm:h-2 sm:w-2"></div>
                            <span className="text-[10px] font-medium text-neutral-700 sm:text-xs">LIVE</span>
                          </div>
                        </div>
                      </ScreenGate>

                      <div className="relative overflow-hidden p-3">
                        {/* Stats */}
                        <div className="relative mb-3 grid grid-cols-3 gap-1.5 sm:mb-4 sm:gap-3">
                            {[
                            { label: "Bookings", value: "84", trend: "+12%", up: true, accent: "text-indigo-600", iconBg: "bg-indigo-600", ring: "ring-indigo-100", bg: "from-indigo-50 to-white", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                            { label: "Confirmed", value: "71", trend: "+8%", up: true, accent: "text-emerald-600", iconBg: "bg-emerald-600", ring: "ring-emerald-100", bg: "from-emerald-50 to-white", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { label: "Revenue", value: "₹48K", trend: "+23%", up: true, accent: "text-violet-600", iconBg: "bg-violet-600", ring: "ring-violet-100", bg: "from-violet-50 to-white", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
                            ].map((stat) => (
                            <div key={stat.label} className={`group relative min-w-0 overflow-hidden rounded-lg border border-neutral-100 bg-gradient-to-br ${stat.bg} p-2 drop-shadow-sm ring-1 ${stat.ring} transition duration-300 hover:-translate-y-0.5 hover:drop-shadow-md sm:rounded-xl sm:p-3 md:p-4`}>
                                <div className="flex items-start justify-between gap-1">
                                    <div className={`flex shrink-0 items-center justify-center rounded-md ${stat.iconBg} text-white drop-shadow-sm h-9 w-9 sm:rounded-lg`}>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                                            <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                                        </svg>
                                    </div>
                                    <span className={`hidden min-[400px]:inline-flex shrink-0 items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold sm:text-[10px] ${stat.up ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                                        <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden>
                                            <path strokeLinecap="round" strokeLinejoin="round" d={stat.up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                        </svg>
                                        {stat.trend}
                                    </span>
                                </div>
                                <div className="mt-1.5 truncate text-xs font-semibold tracking-wide text-neutral-500 sm:mt-2 sm:text-[10px]">{stat.label}</div>
                                <div className={`mt-0.5 truncate text-base font-bold tabular-nums sm:text-xl md:text-2xl ${stat.accent}`}>{stat.value}</div>
                            </div>
                            ))}
                        </div>

                        {/* Bookings trend chart + utilisation ring */}
                        <div className="relative mb-3 grid grid-cols-1 gap-2.5 sm:mb-4 sm:gap-3 lg:grid-cols-5">
                            <ScreenGate minWidth={1024}>
                              <div className="min-w-0 w-full rounded-xl border border-neutral-100 bg-white p-3 drop-shadow-sm lg:col-span-3">
                                  <div className="flex items-center justify-between gap-2">
                                      <span className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">Bookings this week</span>
                                      <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-bold text-emerald-600">
                                          <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                                          +18%
                                      </span>
                                  </div>
                                  <svg viewBox="0 0 240 70" preserveAspectRatio="none" className="mt-2 h-16 w-full sm:h-20 md:h-24" aria-hidden>
                                      <defs>
                                          <linearGradient id="featArea" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.35" />
                                              <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0" />
                                          </linearGradient>
                                      </defs>
                                      <path d="M0,52 L40,40 L80,46 L120,26 L160,32 L200,14 L240,22 L240,70 L0,70 Z" fill="url(#featArea)" />
                                      <path d="M0,52 L40,40 L80,46 L120,26 L160,32 L200,14 L240,22" fill="none" stroke="rgb(99,102,241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                      <circle cx="200" cy="14" r="3"  fill="white" stroke="rgb(99,102,241)" strokeWidth="2" />
                                  </svg>
                                  <div className="mt-1 flex justify-between text-[9px] font-medium text-neutral-400">
                                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (<span key={i}>{d}</span>))}
                                  </div>
                              </div>
                            </ScreenGate>

                            <div className="flex w-full items-center gap-2 rounded-xl border border-neutral-100 bg-white p-2.5 drop-shadow-sm sm:gap-2.5 sm:p-3 lg:col-span-2 sm:flex-row items-center justify-center lg:flex-col xl:flex-row  lg:gap-3">
                                <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20 lg:mx-0 lg:h-[5.5rem] lg:w-[5.5rem]">
                                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden>
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(238,242,255)" strokeWidth="12" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#featRing)" strokeWidth="12" strokeLinecap="round" strokeDasharray="216 251" />
                                        <defs>
                                            <linearGradient id="featRing" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="rgb(99,102,241)" />
                                                <stop offset="100%" stopColor="rgb(139,92,246)" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <span className="text-sm font-bold leading-none text-neutral-900 sm:text-base lg:text-xl">86%</span>
                                    </div>
                                </div>
                                <div className="shrink text-center lg:w-auto lg:text-left">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:text-xs">Slot use</div>
                                    <div className="text-sm font-bold text-neutral-900 sm:text-base lg:text-lg">Optimised</div>
                                    <div className="mt-0.5 text-xs text-neutral-400 sm:text-xs">7 slots open</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-xl bg-white">
                            <div className="space-y-2 sm:space-y-2.5">
                            {schedule.map((item) => {
                                return (
                                <div key={item.time} className={`flex flex-col gap-2 rounded-xl border p-2.5 transition hover:-translate-y-0.5 hover:drop-shadow-md sm:flex-row sm:items-center sm:gap-3 justify-between ${
                                    item.tone === "indigo"
                                    ? "border-indigo-100 bg-indigo-50/60"
                                    : item.tone === "emerald"
                                        ? "border-emerald-100 bg-emerald-50/60"
                                        : "border-neutral-100 bg-neutral-50"
                                }`}
                                >
                                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                                <div className="flex h-10 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-white text-center drop-shadow-sm ring-1 ring-neutral-100">
                                    <span className="text-xs font-medium uppercase text-neutral-400">{item.period}</span>
                                    <span className="text-sm font-bold text-neutral-800">{item.time}</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="truncate font-semibold text-neutral-800">{item.title}</div>
                                    <div className="truncate text-xs text-neutral-600">{item.meta}</div>
                                </div>
                                </div>
                                <span
                                    className={`w-fit shrink-0 self-start rounded-full px-2.5 py-1 text-xs border font-medium sm:self-auto ${
                                    item.status === "Confirmed"
                                        ? "border-indigo-200 bg-indigo-100 text-indigo-700"
                                        : item.status === "Paid"
                                        ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                                        : "border-neutral-200 bg-neutral-200 text-neutral-700"
                                    }`}
                                >
                                    {item.status}
                                </span>
                                </div>
                                );
                            })}
                            </div>
                        </div>

                        <div className="relative mt-3 hidden grid-cols-2 gap-2 sm:grid sm:gap-3">
                            <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-neutral-500">WhatsApp automation</div>
                                <div className="font-bold text-neutral-900">128 sent today</div>
                            </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50/60 p-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 drop-shadow-sm ring-1 ring-neutral-100">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-neutral-500">Calendar sync</div>
                                <div className="font-bold text-neutral-900">Active • 2-way</div>
                            </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
             </div>
          </div>
        </section>
        
        {/* Build Around */}
        <section className="relative overflow-hidden sm:pt-20">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
              <div className="mb-6 text-center">
                  <Heading
                      badge="Built Around"
                      title="That Every Appointment-Based Business Is Looking For"
                  />
              </div>

              <div className="grid gap-4 grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-4 pb-2">
                  {[
                  {
                      label: "Centralized Platform",
                      detail: "One-for-all Dashboard",
                      description: "Schedule your appointments and manage your staff and resources",
                      icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      ),
                      iconBg: "bg-indigo-100 text-indigo-600",
                      valueColor: "text-indigo-600",
                  },
                  {
                      label: "Cloud-Based",
                      detail: "Real-time Calendar Sync",
                      description: "No installations; manage from anywhere on your device",
                      icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      ),
                      iconBg: "bg-violet-100 text-violet-600",
                      valueColor: "text-violet-600",
                  },
                  {
                      label: "Self Booking",
                      detail: "Around the Clock",
                      description: "Allow your clients to book anytime",
                      icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ),
                      iconBg: "bg-emerald-100 text-emerald-600",
                      valueColor: "text-emerald-600",
                  },
                  {
                      label: "Reminder Automation",
                      detail: "Works as require",
                      description: "Set up, send at confirmation and  for follow-up",
                      icon: (
                          <svg viewBox="0 0 16 16" className="h-6 w-6" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
                      ),
                      iconBg: "bg-green-100 text-green-600",
                      valueColor: "text-green-600",
                  },
                  ].map((stat) => (
                  <div key={stat.label} className={`group rounded-2xl bg-white p-5 drop-shadow-sm transition duration-300 hover:-translate-y-1 hover:drop-shadow-lg space-y-2`}>
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg} transition group-hover:scale-105`}>{stat.icon}</div>
                      <div className="font-semibold text-neutral-900">{stat.label}</div>
                      <div><i>{stat.detail}</i></div>
                      <div>{stat.description}</div>
                  </div>
                  ))}
              </div>
            </div>
        </section>

        {/* Core Functionality */}
        <section className="relative py-14 sm:py-20">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="mb-6 text-center">
                    <Heading
                        badge="Core Functionality"
                        title="That Matches Your Business's Real Workflow"
                        description="From the first booking request to follow-up reminders, GetSetTime keeps your team, customers and calendars synchronized in one professional operating layer."
                    />
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  {featureSuiteCards.map((card) => (
                    <Card
                      key={card.title}
                      title={card.title}
                      description={card.description}
                      bullets={card.bullets}
                      iconNode={card.icon}
                      iconWrapperClassName={card.iconWrapperClassName}
                    />
                  ))}
                </div>
            </div>
        </section>

        {/* Automation journey */}
        <section className="relative overflow-hidden bg-[#f5f7ff] py-14 sm:py-20">
          <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
              <div className="relative">
                <Heading
                  badge="Automation journey"
                  title="A complete appointment workflow that runs without chaos."
                  description={`Let customers book online while ${APP_NAME} handles confirmations, reminders, calendar updates, internal visibility and post-visit communication.`}
                  wrapperClassName="space-y-3"
                />
                <ScreenGate minWidth={768}>
                <div className="mt-8 grid grid-cols-4 lg:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-indigo-100 bg-white p-4 drop-shadow-sm">
                    <div className="text-3xl font-bold text-indigo-600">4</div>
                    <p className="text-sm text-neutral-600">Automated stages</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-4 drop-shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">2</div>
                    <p className="text-sm text-neutral-600">Manual follow-ups</p>
                  </div>
                  <div className="rounded-2xl border border-violet-100 bg-white p-4 drop-shadow-sm">
                    <div className="text-3xl font-bold text-violet-600">3</div>
                    <p className="text-sm text-neutral-600">Reminder channels</p>
                  </div>
                  <div className="rounded-2xl border border-sky-100 bg-white p-4 drop-shadow-sm">
                    <div className="text-3xl font-bold text-sky-600">24/7</div>
                    <p className="text-sm text-neutral-600">Online booking</p>
                  </div>
                </div>
                </ScreenGate>
              </div>

              <div className="grid max-[576px]:grid-cols-1 grid-cols-2 lg:grid-cols-1 gap-4 relative space-y-4">
                {workflowSteps.map((item) => (
                  <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-5 drop-shadow-md drop-shadow-indigo-100/20 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:drop-shadow-xl sm:p-6">
                    <div className={`absolute inset-y-0 left-0 w-1 ${item.accentBar}`} aria-hidden />
                    <span className="pointer-events-none absolute right-1 top-0 select-none text-7xl font-black leading-none text-indigo-50 transition group-hover:text-indigo-100/80">{item.step}</span>

                    <div className="relative flex-col lg:flex-row flex gap-4 sm:gap-5">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconWrap}`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-indigo-600">
                          Step {item.step} · {item.tag}
                        </span>
                        <h3 className="mt-2 text-lg font-bold text-neutral-900">{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
            </div>            
          </div>
        </section>

        {/* By industry */}
        <section className="relative overflow-hidden pt-14 sm:pt-20">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-3xl bg-white">
                <div className="mb-10 text-center">
                  <Heading
                      badge="By industry"
                      title="Favourable Impact from Day One on Routine Activities You Can Analyze"
                      description="We aim to exceed your expectations maximize for which you choose Getsettime."
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-3 md:items-stretch">
                  {industryCards.map((card) => (
                    <Card
                      key={card.title}
                      title={card.title}
                      description={card.description}
                      iconNode={card.icon}
                      wrapperClassName={`group relative flex flex-col overflow-hidden rounded-xl bg-white p-4`}
                      innerClassName="relative space-y-3"
                      iconWrapperClassName={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconWrap}`}
                      badgeClassName="rounded-md bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                      titleClassName="text-base font-bold text-neutral-900"
                      overlay={<div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient}`} />}
                    />
                  ))}
                </div>
              </div>
            </div>
        </section>

        {/* Control center */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                {/* Left side */}
                <div className="relative">
                    <Heading
                    badge="Control center"
                    title="Know what is happening across every appointment."
                    description="Measure appointment volume, revenue, service demand, staff performance, reminder delivery and customer trends from a clean analytics layer."
                    />
                    <CheckList
                    items={[
                        "Live booking volume & revenue trends",
                        "No-show and reminder delivery rates",
                        "Staff utilization and open capacity",
                        "Service-level demand breakdown",
                    ]}
                    gridClassName="grid md:grid-cols-2 lg:grid-cols-1 gap-3 mt-4"
                    />
                </div>

                <ScreenGate minWidth={768}>
                {/* Right side */}
                <div className="relative">
                  <div className=" rounded-2xl border border-neutral-200/80 bg-white drop-shadow-2xl drop-shadow-indigo-100/40">

                    <div className="bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/30 p-4">
                        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Weekly performance</div>
                              <div className="text-xl font-bold text-neutral-900 sm:text-2xl">Total bookings trend</div>
                              <div className="mt-3 flex flex-wrap items-baseline gap-3">
                                  <div className="text-4xl font-bold tracking-tight text-neutral-900">{bookingChart.total}</div>
                                  <span className="text-sm text-neutral-500">bookings this week</span>
                                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">+18% vs last week</span>
                              </div>
                            </div>
                            <ScreenGate minWidth={768}>
                            <div className="inline-flex rounded-xl border border-neutral-200 bg-white p-1 text-xs font-semibold drop-shadow-sm">
                              <span className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white">Week</span>
                              <span className="px-3 py-1.5 text-neutral-500">Month</span>
                            </div>
                            </ScreenGate>
                        </div>
                        
                        <div className="relative rounded-2xl border border-indigo-100/80 bg-white p-4 drop-shadow-sm sm:p-5">
                            <div className="mb-3 flex items-center justify-between gap-2">
                                <div className="text-sm font-medium text-neutral-700">Daily booking volume</div>
                                <div className="flex items-center gap-2 text-xs text-neutral-500">
                                    <span className="inline-flex items-center gap-1.5">
                                        <span className="h-1 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                                        Total bookings
                                    </span>
                                    <span className="hidden sm:inline-flex items-center gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-indigo-600" />
                                        Peak day
                                    </span>
                                </div>
                            </div>

                            <svg viewBox={`0 0 ${bookingChart.width} ${bookingChart.height}`} className="h-auto w-full" role="img" aria-label={`Weekly total bookings line chart showing ${bookingChart.total} appointments`}>
                            <defs>
                                <linearGradient id="bookingAreaFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
                                </linearGradient>
                                <linearGradient id="bookingLineStroke" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#4f46e5" />
                                <stop offset="100%" stopColor="#7c3aed" />
                                </linearGradient>
                            </defs>

                            {bookingChart.yTicks.map((tick) => (
                                <g key={tick.label}>
                                <line
                                    x1={bookingChart.pad.left}
                                    y1={tick.y}
                                    x2={bookingChart.width - bookingChart.pad.right}
                                    y2={tick.y}
                                    stroke="#e5e7eb"
                                    strokeDasharray="2 2"
                                />
                                <text x={8} y={tick.y + 4} className="fill-neutral-400 text-[8px] lg:text-[10px]">
                                    {tick.label}
                                </text>
                                </g>
                            ))}

                            <path d={bookingChart.areaPath} fill="url(#bookingAreaFill)" />
                            <path
                                d={bookingChart.linePath}
                                fill="none"
                                stroke="url(#bookingLineStroke)"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {bookingChart.points.map((point) => (
                                <g key={point.day}>
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r={point.bookings === bookingChart.max ? 6 : 4.5}
                                    fill={point.bookings === bookingChart.max ? "#4f46e5" : "#ffffff"}
                                    stroke="#4f46e5"
                                    strokeWidth="2"
                                />
                                <text
                                    x={point.x}
                                    y={point.y - 12}
                                    textAnchor="middle"
                                    className="fill-indigo-600 text-[8px] lg:text-[10px]"
                                >
                                    {point.bookings}
                                </text>
                                <text
                                    x={point.x}
                                    y={bookingChart.height - 10}
                                    textAnchor="middle"
                                    className="fill-neutral-500 text-[8px] lg:text-[10px] font-medium"
                                >
                                    {point.day}
                                </text>
                                </g>
                            ))}
                            </svg>
                        </div>
                    
                        <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-3">
                          {analyticsMetrics.map((metric) => (
                            <div
                              key={metric.label}
                              className={`group relative flex min-w-0 flex-col overflow-hidden rounded-xl border p-2 drop-shadow-sm transition duration-300 hover:-translate-y-0.5 hover:drop-shadow-md sm:rounded-2xl sm:p-3 md:p-4 ${metric.cardClassName}`}
                            >
                              <div className="flex items-start justify-between gap-1 sm:gap-3">
                                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 sm:rounded-xl ${metric.iconWrap}`}>
                                  <span className="scale-90 sm:scale-100">{metric.icon}</span>
                                </span>
                                <span className={`hidden max-w-[52%] truncate rounded-full px-1.5 py-0.5 text-[9px] font-semibold sm:inline-flex sm:max-w-none sm:px-2 sm:text-xs ${metric.changeClassName}`}>
                                  {metric.change}
                                </span>
                              </div>
                              <div className="mt-1.5 truncate text-[9px] font-semibold uppercase tracking-wide text-neutral-500 sm:mt-2 sm:text-xs sm:tracking-wider">
                                {metric.label}
                              </div>
                              <div className="mt-0.5 truncate text-base font-bold tracking-tight text-neutral-900 sm:mt-1 sm:text-xl md:text-2xl">
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="absolute right-2 top-0 z-2 hidden lg:block rounded-xl bg-white px-4 py-4 drop-shadow-sm animate-float  rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-5 drop-shadow-sm">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-neutral-500">Peak booking day</div>
                            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">Saturday</span>
                          </div>
                          <p className="mt-2 text-3xl font-bold text-neutral-900">{bookingChart.max}</p>
                          <div className="mt-1 text-xs text-neutral-500">highest single-day volume this week</div>
                          <div className="mt-4 flex gap-2">
                            <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 ring-1 ring-neutral-100">6 providers</span>
                            <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-neutral-600 ring-1 ring-neutral-100">38 open slots</span>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
                </ScreenGate>
            </div>
          </div>
        </section>

        {/* Launch offer */}
        <section className="relative py-14 sm:py-20">
            <div className="absolute w-full inset-0 bg-gradient-to-br from-transparent via-indigo-400/20 to-transparent pointer-events-none"></div>
            <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">

              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="space-y-3">
                  <Heading
                    badge="Launch offer"
                    title="Start free with 250 appointments every month."
                    description="Every workspace gets free monthly booking volume. Upgrade only when your team needs more seats, providers, locations or advanced automation."
                  />
                  <CheckList
                    items={[
                      "Online booking & branded pages",
                      "WhatsApp & email reminders",
                      "Google Calendar two-way sync",
                      "Staff, services & reporting",
                    ]}
                    gridClassName="grid md:grid-cols-2 lg:grid-cols-1 gap-3"
                  />
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-white/40 to-cyan-200/30 blur-sm" />
                  <div className="relative overflow-hidden rounded-[1.65rem] bg-white p-6 drop-shadow-2xl sm:p-8">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100/60" aria-hidden />

                    <div className="relative flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Starter plan</div>
                        <div className="mt-2 flex items-end gap-1">
                          <span className="text-5xl font-bold tracking-tight text-neutral-900">
                            <RegionalPrice plan="starter" />
                          </span>
                          <span className="pb-2 text-sm font-medium text-neutral-500">/month</span>
                        </div>
                        <div className="mt-1 text-xs text-neutral-500">+ 18% GST · billed monthly</div>
                      </div>
                      <span className="rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white drop-shadow-md drop-shadow-indigo-200">
                        Popular
                      </span>
                    </div>

                    <div className="relative mt-5 rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100">
                      <div className="text-sm font-bold text-blue-700">1 seat included</div>
                      <div className="mt-1 text-xs text-blue-600">First 250 bookings/month included free</div>
                    </div>

                    <ul className="relative mt-6 space-y-3">
                      {[
                        "Public booking page",
                        "Staff & service setup",
                        "Email notifications",
                        "Booking dashboard",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium text-neutral-700">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="relative flex flex-col sm:flex-row gap-3 mt-8">
                      <Link href={REGISTER_URL} target="_blank" className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white drop-shadow-lg transition hover:bg-indigo-700"
                      >Get Started Free</Link>
                      <Link href={`${BASE_URL}/pricing`} className="flex items-center justify-center w-full rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">Compare all plans</Link>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 sm:p-10">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                {/* left: Content */}
                <div className="space-y-3">
                  <Heading
                    badge="Built for Modern Business"
                    title="Ready for GetSetTime To Manage Your Appointments"
                    description="Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more."
                    titleClassName="text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-[40px] capitalize"
                    descriptionClassName = "text-white"
                  />
                  
                  <div className="mt-8">
                    <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Get Started - Features" className="rounded-xl bg-white px-4 py-2.5 text-sm text-indigo-600 transition">Sign Up for Free</Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-white">
                    {['Online booking', 'Auto reminders', 'Team calendar'].map((item) => (
                      <span key={item} className="text-white flex items-center gap-2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg> {item}</span>
                    ))}
                  </div>
                </div>
                {/* right: Image */}
                <div className="relative mx-auto w-full hidden lg:block">
                  <div className="rounded-xl bg-white/14 sm:p-4 backdrop-blur-xl">
                    <div className="rounded-xl bg-white p-3 sm:p-4 drop-shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-neutral-900">Today’s bookings</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          { time: '10:00 AM', title: 'Consultation' },
                          { time: '12:30 PM', title: '15 Minutes chat' },
                          { time: '03:00 PM', title: 'Follow-up Call' },
                        ].map((item) => (
                          <div key={item.time} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 sm:px-4 py-2 sm:py-3">
                            <div>
                              <div className="text-sm sm:text-base font-medium text-neutral-900">{item.title}</div>
                              <div className="text-xs sm:text-sm text-neutral-600">{item.time}</div>
                            </div>
                            <span className="rounded-md bg-emerald-50 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-emerald-700">Confirmed</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl bg-indigo-50 p-4">
                        <div>Reminders sent</div>
                        <div className="text-2xl font-bold text-neutral-900">1,284</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-5 -bottom-6 hidden lg:block rounded-xl bg-white px-4 py-3 drop-shadow-xl animate-float">
                    <div>No-show reduction</div>
                    <div className="text-xl font-bold text-neutral-900">-32%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
