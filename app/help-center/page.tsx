import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo, LOGIN_URL } from "@/lib/config";
import { helpSections } from "@/lib/help-center-data";
import HelpCenterContent from "./HelpCenterContent";
import Link from "next/link";
import Heading from "../component/Heading";

const pageUrl = `${BASE_URL}/help-center`;

export const metadata: Metadata = {
  title: `Help Center | ${APP_NAME}`,
  description: `Find step-by-step guides for ${APP_NAME}. Learn how to set up your account, manage appointments, configure reminders, and more.`,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Help Center | ${APP_NAME}`,
    description: `Guides, tutorials, and answers to help you get the most out of ${APP_NAME}.`,
    url: pageUrl,
    type: "website",
    siteName: APP_NAME,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Help Center | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Help Center | ${APP_NAME}`,
    description: `Guides, tutorials, and answers to help you get the most out of ${APP_NAME}.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

export default function HelpCenterPage() {
  
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
        "slogan": "Precision Scheduling for Modern Care",
        "foundingDate": "2025",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "10"
        },
        "areaServed": "Worldwide",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English", "Hindi", "Punjabi"],
          "areaServed": "Worldwide",
          "sameAs": [
            "https://www.facebook.com/getsettime",
            "https://x.com/getsettime",
            "https://www.instagram.com/getsettime",
            "https://www.youtube.com/@GetSetTime"
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`,
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "description": `GetSetTime is scheduling software designed for service-based professionals for whom appointment booking matters. Get a free demo.`,
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
        url: pageUrl,
        name: `Help Center | ${APP_NAME}`,
        description: `Guides, tutorials, and answers to help you get the most out of ${APP_NAME}.`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Help Center", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: helpSections.map((section) => ({
          "@type": "Question",
          name: section.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: section.steps.map((s) => `${s.title}: ${s.description}`).join(" "),
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script id="help-center-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="relative py-14 sm:py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

            <Heading
              badge="Help Center"
              title="How can we help you?"
              description={`Step-by-step guides to help you set up, manage appointments, and get the most out of ${APP_NAME}.`}
              headingTag="h1"
              titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
            />

            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-100 bg-white px-4 py-2 drop-shadow-sm">
                <svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm text-neutral-600">{helpSections.length} guides available</span>
              </div>
            </div>
          </div>

          <HelpCenterContent />
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
                    <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Get Started - Help Center" className="rounded-xl bg-white px-4 py-3 text-sm text-indigo-600 transition">Get Started</Link>
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
                          <div>Live preview</div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-600" />
                      </div>
                      <div className="mt-5 space-y-3">
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
