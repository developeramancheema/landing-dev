import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL, REGISTER_URL, REGISTER_GOOGLE_URL, contactInfo, } from "@/lib/config";
import { comparisonRows, pricingTiers, } from "@/lib/pricing-data";
import Pricing from "../component/Pricing";
import PricingComparison from "../component/PricingComparison";
import PricingHeroPreview from "../component/PricingHeroPreview";
import RegionalPrice from "../component/RegionalPrice";
import { PricingFaqItem, pricingFaqItems } from "../component/PricingFaqSection";
import Heading from "../component/Heading";
import Card from "../component/Card";
import { FaqSection } from "../component/FaqSection";
import ScreenGate from "../component/ScreenGate";

const heroHighlights = [
  { key: "plans", node: <RegionalPrice plan="starter" prefix="Plans from " suffix="/month" /> },
  { key: "bookings", node: "250 bookings/month on Starter" },
  { key: "seats", node: <RegionalPrice plan="extraSeat" prefix="Extra seats " suffix="/month" /> },
];

const pageUrl = `${BASE_URL}/pricing`;

export const metadata: Metadata = {
  title: `Pricing | ${APP_NAME}`,
  description: `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
  keywords: ["GetSetTime pricing", "appointment scheduling pricing India", "clinic booking software cost", "salon scheduling plans", "online booking subscription"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Pricing | ${APP_NAME}`,
    description: `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Pricing | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pricing | ${APP_NAME}`,
    description: `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const valueProps = [
  {
    stat: "250",
    statUnit: "bookings / mo",
    title: "Booking volume included",
    description: "Every Starter workspace ships with monthly appointment capacity — launch online scheduling without watching per-booking fees.",
    bullets: ["Included on Starter", "Unlimited on Pro & Enterprise", "Scale seats when you grow"],
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-indigo-100 text-indigo-600",
    valueColor: "text-indigo-600",
    border: "border-indigo-100 hover:border-indigo-200",
    glow: "from-indigo-500/10 via-transparent to-transparent",
    featured: false,
  },
  {
    stat: <RegionalPrice plan="extraSeat" />,
    statUnit: "per extra seat",
    title: "Pay for seats, not surprises",
    description: "Plans bundle provider seats upfront. Add stylists, doctors, or therapists anytime without switching platforms.",
    bullets: ["1 · 2 · 5 seats by tier", "Prorated mid-cycle adds", "GST shown at checkout"],
    icon: (
      <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-violet-100 text-violet-600",
    valueColor: "text-violet-600",
    border: "border-violet-200 hover:border-violet-300 ring-1 ring-violet-100",
    glow: "from-violet-500/15 via-indigo-500/5 to-transparent",
    featured: true,
  },
  {
    stat: "10%",
    statUnit: "saved yearly",
    title: "Rewards when you commit",
    description: (
      <>
        Professional and Enterprise unlock 10% off with annual billing. Starter stays on simple monthly{" "}
        <RegionalPrice plan="starter" />.
      </>
    ),
    bullets: ["Pro & Enterprise only", "Starter stays monthly", "Transparent INR invoices"],
    icon: (
      <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-emerald-100 text-emerald-600",
    valueColor: "text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-200",
    glow: "from-emerald-500/10 via-transparent to-transparent",
    featured: false,
  },
];

const trustPoints = [
  {
    title: "Transparent billing",
    detail: "Shown upfront, no surprise fees",
    iconBg: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-100 hover:border-indigo-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: "WhatsApp reminders",
    detail: "Cut no-shows — live on Pro & Enterprise",
    iconBg: "bg-green-100 text-green-600",
    border: "border-green-100 hover:border-green-200",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
        <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 01-1.49-.92 5.25 5.25 0 01-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 00 .18-.31.38.38 0 00 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 00-.5.23 2.1 2.1 0 00-.65 1.55A3.59 3.59 0 005 8.2 8.32 8.32 0 008.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 001.17.07 1.93 1.93 0 001.26-.88 1.67 1.67 0 00.11-.88c-.05-.07-.17-.12-.36-.21z" />
        <path d="M13.29 2.68A7.36 7.36 0 008 .5a7.44 7.44 0 00-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 003.55.9H8a7.44 7.44 0 005.29-12.72zM8 14.12a6.12 6.12 0 01-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 019.6-7.65 6.12 6.12 0 011.81 4.37A6.19 6.19 0 018 14.12z" />
      </svg>
    ),
  },
  {
    title: "Live calendar sync",
    detail: "Google Calendar updates both ways, instantly",
    iconBg: "bg-violet-100 text-violet-600",
    border: "border-violet-100 hover:border-violet-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Real support, real people",
    detail: "From community help to a 24/7 SLA line ",
    iconBg: "bg-amber-100 text-amber-600",
    border: "border-amber-100 hover:border-amber-200",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function PricingPage() {
 
  const schemaOffers = pricingTiers.map((tier) => ({
    "@type": "Offer",
    "@id": `${pageUrl}/#offer-${tier.name.toLowerCase()}`,
    "name": `${APP_NAME} ${tier.name}`,
    "price": tier.price === "Free" ? "0" : tier.price,
    "priceCurrency": "INR",
    "description": tier.description,
    "url": `${pageUrl}`,
  }));

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
        "name": `Pricing | ${APP_NAME}`,
        "description": `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
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
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": pageUrl },
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
        "@type": "Product",
        "@id": `${pageUrl}/#product`,
        "name": `${APP_NAME}`,
        "description": `Plans from ₹999/month. 250 bookings included on Starter. Scale with WhatsApp reminders, branding, and multi-location support.`,
        "brand": { "@type": "Brand", "name": `${APP_NAME}` },
        "offers": schemaOffers,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faqpage`,
        "mainEntity": pricingFaqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              item.contentText ??
              (typeof item.content === "string"
                ? item.content.replace(/<[^>]+>/g, "")
                : ""),
          },
        })),
      },
    ],
  };

  return (
    <>
        {/* Structured Data */}
        <Script id="pricing-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* Hero */}
        <section className="relative overflow-hidden py-14 sm:py-20">
          
          <div className="absolute inset-0 -z-10 hidden sm:block">
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/3 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid container px-4 sm:px-6 lg:px-8 items-center gap-6 xl:grid-cols-2 lg:gap-14">
            {/* Left section */}
            <div className="space-y-6">
              <Heading
                badge="Pricing"
                title="Affordable and Transparent Plans for Solo"
                highlightText="Providers to Multi-Location Teams."
                description="Start scheduling by claiming the free plan. Collaboration features are available on Starter, Professional, and Enterprise—choose based on team size."
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
                <Link href={`${BASE_URL}/contact-us`} aria-label="Talk to sales - Pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">Talk to sales</Link>
              </div>

              <div className="flex flex-wrap gap-2 font-medium text-neutral-600">
                {heroHighlights.map((item) => (
                  <span key={item.key} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 text-xs text-neutral-700 drop-shadow-sm">
                    {item.node}
                  </span>
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
                              <div className="text-lg font-bold text-neutral-900">250</div>
                              <div className="text-xs font-semibold text-neutral-800">Free Bookings</div>
                          </div>
                      </div>
                      <div className="text-xs text-neutral-500">Included every month on Starter</div>
                  </div>

                  <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                      <div className="flex items-center gap-2">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4 0m4 0a4 4 0 014 4" />
                              </svg>
                          </span>
                          <div>
                              <div className="text-sm font-bold text-neutral-900">Seat-Based Plans</div>
                          </div>
                      </div>
                      <div className="text-xs text-neutral-500">Add providers anytime you grow</div>
                  </div>

                  <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                      <div className="flex items-center gap-2">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                          </span>
                          <div>
                              <div className="text-sm font-bold text-neutral-900">Transparent INR</div>
                          </div>
                      </div>
                      <div className="text-xs text-neutral-500">No per-booking fees on Starter</div>
                  </div>
              </div>
              </ScreenGate>
            </div>

            {/* Right section */}
            <div className="mx-auto w-full">
              <PricingHeroPreview />
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="relative overflow-hidden pb-14 sm:py-20">
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <div className="absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:mb-12">
              <Heading
                badge="Affordable For Everyone"
                title="Bills Will Never Surprise You,"
                highlightText="Growth Can"
                description="Our pricing plans are customizable to meet your needs based on booking volume, team size, and the advanced features you require."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {valueProps.map((item) => (
                <Card
                  key={item.title}
                  iconNode={item.icon}
                  stat={item.stat}
                  statUnit={item.statUnit}
                  statClassName={`text-3xl tracking-tight sm:text-4xl font-bold ${item.valueColor}`}
                  title={item.title}
                  description={item.description}
                  iconWrapperClassName={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}
                  footer={
                    <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-neutral-700">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${item.iconBg}`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  }
                />
              ))}
            </div>
          </div>
        </section>        
        
        {/* Plans + toggle + cards */}
        <Pricing 
          variant="page" 
          headerContent={{
            badge: "Free Price Card",
            wrapperClassName: "mb-8 space-y-3 text-center",
          }} 
        />

        {/* Feature comparison */}
        <section className="py-12 sm:py-20">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <Heading
                badge="Compare plans"
                title="Every feature, side by side"
                description="See exactly what you get on Starter, Professional, and Enterprise before you commit."
                wrapperClassName="mb-8 space-y-3 text-center"
            />
            <PricingComparison rows={comparisonRows} />
            </div>
        </section>

        {/* Extra seats + trust why teams choose us */}
        <section className="relative overflow-hidden pb-14 sm:pb-20">
          <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
                {/* left: Extra seats */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-950 p-5 text-white drop-shadow-2xl sm:p-8 lg:col-span-5">
                  <div className="relative">
                    <Heading
                      badge="Add-on"
                      title="Need more providers?"
                      description="Scale your team without changing tools. Extra seats bill monthly and can be added anytime from your workspace."
                      wrapperClassName="space-y-3"
                      badgeClassName="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 drop-shadow-sm backdrop-blur"
                      titleClassName="text-2xl font-bold tracking-tight sm:text-3xl"
                      descriptionClassName=""
                    />

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:mt-6 sm:p-5">
                      <p className="text-sm text-indigo-200">Extra seat pricing</p>
                      <p className="mt-1 text-3xl tracking-tight sm:text-4xl">
                        <RegionalPrice plan="extraSeat" />
                        <span className="text-lg font-semibold text-white"> / month</span>
                      </p>
                      <p className="mt-1 text-sm text-white sm:text-base">+ 18% GST · prorated when added mid-cycle</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Add anytime", "No platform switch", "Works on all plans"].map((chip) => (
                        <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white">{chip}</span>
                      ))}
                    </div>

                    <Link href={`${BASE_URL}/contact-us`} aria-label="Talk to sales about teams - Pricing" className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 w-auto">Talk to Sales</Link>
                  </div>
                </div>

                {/* right: Why teams choose us */}
                <div className="lg:col-span-7">
                    <Heading
                        badge="Why teams choose us"
                        title="Everything A Growing Practice Actually Needs."
                        description="Not a generic calendar — GetSetTime is built around how clinics and salons book, remind, and get paid."
                        wrapperClassName="space-y-3"
                    />

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {trustPoints.map((point) => (
                        <div key={point.title} className={`group flex gap-3 rounded-2xl border bg-white p-3.5 drop-shadow-sm transition duration-300 hover:-translate-y-0.5 hover:drop-shadow-md sm:gap-4 sm:p-4 ${point.border}`}>
                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-105 ${point.iconBg}`}>{point.icon}</div>
                            <div className="min-w-0">
                            <p className="font-semibold text-neutral-900">{point.title}</p>
                            <p className="mt-0.5 text-sm text-neutral-500">{point.detail}</p>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <p className="w-full text-sm text-neutral-600">See reminders, analytics, and industry workflows on the features page.</p>
                    </div>
                </div>
              </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
        
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
              <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            </div>

            <div className="relative mx-auto grid container px-4 sm:px-6 lg:px-8 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              {/* left: Title */}
              <div className="space-y-3">
                  <Heading
                  badge="Pricing FAQ"
                  title="Questions before you subscribe?"
                  description="Clear answers on bookings, GST, seats, and plan changes."
                  />
                  
                  <ScreenGate minWidth={768}>
                  <div className="grid gap-4 sm:grid-cols-2 mt-6 grid">
                  <Card title="Smart scheduling" description="Highlight automation, reminders, and live availability." icon={<svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />

                  <Card title="Build trust" description="Reduce friction with short supportive answers and better clarity." icon={<svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  
                  <Card title="Premium feel" description="Matches polished hero and feature sections better than a plain list." icon={<svg className="h-8 w-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  
                  <Card title="Easy growth" description="Scale bookings smoothly with structured workflows and clear next steps." icon={<svg fill="#00a63e" className="h-8 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="#000000" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"></path> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"></path> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"></path> </g> </g> </g></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  </div>
                  </ScreenGate>

              </div>
              {/* right: FAQ Section */}
              <div>
                  <FaqSection items={pricingFaqItems as PricingFaqItem[]} />
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
                    <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Get Started - Pricing" className="rounded-xl bg-white px-4 py-3 text-sm text-indigo-600 transition">Sign Up for Free</Link>
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