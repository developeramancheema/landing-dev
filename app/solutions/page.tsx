import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { APP_NAME, BASE_URL, contactInfo, REGISTER_URL } from "@/lib/config";
import { solutionBrowserCategories } from "@/lib/solutions-browser-data";
import Heading from "@/app/component/Heading";
import DemoFreeForm from "@/app/component/DemoFreeForm";
import SolutionsBrowser from "./SolutionsBrowser";

const pageUrl = `${BASE_URL}/solutions`;

export const metadata: Metadata = {
  title: `All Business Types | ${APP_NAME}`,
  description: `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
  keywords: [
    "appointment scheduling software",
    "business types",
    "doctor booking software",
    "dental appointment software",
    "salon scheduling software",
    "service business booking",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `All Business Types | ${APP_NAME}`,
    description: `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `All Business Types | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `All Business Types | ${APP_NAME}`,
    description: `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const ctaHighlightFeatures = [
  {
    title: "Online Booking 24/7",
    description: "Let customers book anytime.",
    icon: (
      <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        <path d="m9 16 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Auto Reminders",
    description: "Reduce no-shows effortlessly.",
    icon: (
      <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Team & Calendar Management",
    description: "Manage staff, services and schedules.",
    icon: (
      <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Grow Your Business",
    description: "More bookings. More happy clients.",
    icon: (
      <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16V9M12 16V5M17 16v-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const ctaTrustAvatars = [
  "/doctor-profile.webp",
  "/dentist-profile.webp",
  "/salon-profile.webp",
  "/physiotherapy-profile.webp",
];

const ctaTrustBadges = [
  {
    title: "Secure & Reliable",
    description: "Enterprise grade security",
    icon: (
      <svg className="h-6 w-6 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Super Easy Setup",
    description: "Get started in minutes",
    icon: (
      <svg className="h-6 w-6 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "We're here to help",
    icon: (
      <svg className="h-6 w-6 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm18 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SolutionsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": APP_NAME,
        "url": BASE_URL,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630,
        },
        "description": "GetSetTime is a smart appointment scheduling platform trusted by 5,000+ doctors, salon owners, and wellness professionals. Simple to set up, smart enough to run itself.",
        "slogan": "Precision Scheduling for Modern Care",
        "foundingDate": "2025",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "10",
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
            "areaServed": "Worldwide",
          },
        ],
        "sameAs": [
          "https://www.facebook.com/getsettime",
          "https://x.com/getsettime",
          "https://www.instagram.com/getsettime",
          "https://www.youtube.com/@GetSetTime",
        ],
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
        "url": pageUrl,
        "name": `All Business Types | ${APP_NAME}`,
        "description": `${APP_NAME} is the one-stop appointment scheduling solution for service businesses — medical clinics, dentists, physiotherapists, salons, and more. Online booking, WhatsApp reminders, and smart calendars.`,
        "inLanguage": "en",
        "isPartOf": {
          "@type": "WebSite",
          "name": APP_NAME,
          "url": BASE_URL,
        },
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
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "All Business Types", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#solutions`,
        "name": `${APP_NAME} Business Types`,
        "numberOfItems": solutionBrowserCategories.length,
        "itemListElement": solutionBrowserCategories.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": category.label,
          "url": `${pageUrl}#${category.id}`,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#categories`,
        "name": `${APP_NAME} Industry Categories`,
        "numberOfItems": solutionBrowserCategories.length,
        "itemListElement": solutionBrowserCategories.map((category, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": category.label,
          "url": `${pageUrl}#${category.id}`,
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="solutions-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

        <section className="relative overflow-hidden py-8 sm:py-14">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
            <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),transparent_55%)]" />
          </div>

          <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Heading
                badge="Solutions for every service business"
                title="One scheduling platform,"
                highlightText="tailored to your industry."
                headingTag="h1"
                description={`${APP_NAME} powers online booking, WhatsApp reminders, and smart calendars for clinics, salons, studios, and personal-service pros — pick your industry below to explore.`}
                wrapperClassName="space-y-4"
                titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
              />
            </div>
          </div>
        </section>

        <section className="relative pb-14 lg:py-20" aria-label="Browse industry solutions">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <SolutionsBrowser />
          </div>
        </section>

        <section className="w-full bg-gradient-to-br from-indigo-500/10 via-indigo-200/20 to-indigo-500/10 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 sm:p-10 md:p-6 lg:p-8 xl:p-10">
              <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                  <Heading
                    badge="Built for Modern Business"
                    title="Ready for GetSetTime To Manage Your Appointments"
                    description="Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more."
                    titleClassName="text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-[40px] capitalize"
                    descriptionClassName="text-white"
                  />

                  <div className="space-y-5">
                    {ctaHighlightFeatures.map((item) => (
                      <div key={item.title} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white drop-shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-base font-bold text-white">{item.title}</p>
                          <p className="text-sm text-white/85">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex -space-x-2.5">
                        {ctaTrustAvatars.map((src) => (
                          <Image
                            key={src}
                            src={src}
                            alt=""
                            width={40}
                            height={40}
                            loading="lazy"
                            className="relative h-10 w-10 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                      </div>
                      <div className="hidden h-10 w-px bg-white/30 sm:block" aria-hidden />
                      <div>
                        <p className="text-sm leading-snug text-white">
                          Trusted by <span className="font-semibold">2,500+</span> businesses worldwide
                        </p>
                        <div className="mt-1 flex gap-0.5" aria-label="5 out of 5 stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-100/95 px-4 py-4 sm:px-5">
                      <div className="grid gap-4 sm:grid-cols-3 sm:gap-3">
                        {ctaTrustBadges.map((item) => (
                          <div key={item.title} className="flex items-start gap-2">
                            {item.icon}
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-indigo-950">{item.title}</div>
                              <div className="text-xs text-slate-500">{item.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="relative mx-auto w-full rounded-xl drop-shadow-xl">
                  <DemoFreeForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
}
