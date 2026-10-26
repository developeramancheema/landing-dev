import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "../component/ContactForm";
import { APP_NAME, BASE_URL, contactInfo, LOGIN_URL } from "@/lib/config";
import Link from "next/link";
import Heading from "../component/Heading";

export const metadata: Metadata = {
  title: `Contact Us | ${APP_NAME}`,
  description: `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling, bookings, setup, and integrations. We usually reply within 24 hours.`,
  keywords: [ "contact GetSetTime", "schedule a demo", "appointment scheduling support", "booking software contact", "get in touch"],
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: `Contact Us | ${APP_NAME}`,
    description: `Book a quick discussion or send a message. Speak with a product specialist about scheduling, bookings, and next steps. We reply within 24 hours.`,
    url: `${BASE_URL}/contact-us`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${APP_NAME}`,
    description: `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling and bookings. We reply within 24 hours.`,
  },
};

function InfoItem({ title, desc, icon, }: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-white/80 p-3 drop-shadow-xl transition-all duration-300 hover:-translate-y-1">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white drop-shadow-lg drop-shadow-indigo-500/25">{icon}</span>
      <div>
        <div className="text-base font-semibold text-neutral-900">{title}</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function ContactUs() {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/contact-us/#webpage`,
        "url": `${BASE_URL}/contact-us`,
        "name": `Contact Us | ${APP_NAME}`,
        "headline": `Contact ${APP_NAME}`,
        "description": `Book a quick discussion with ${APP_NAME}. Speak with a product specialist about scheduling, bookings, setup, and integrations. We usually reply within 24 hours.`,
        "inLanguage": "en",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@id": `${BASE_URL}/#organization`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@id": `${BASE_URL}/contact-us/#breadcrumb`
        }
      },
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
        "email": `${contactInfo.email}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${contactInfo.address}`,
          "addressLocality": `${contactInfo.address}`,
          "addressRegion": `${"IN"}`,
          "postalCode": `${"IN"}`,
          "addressCountry": `${"IN"}`
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": `${contactInfo.email}`,
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Hindi", "Punjabi"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": `${contactInfo.email}`,
            "areaServed": "Worldwide",
            "availableLanguage": ["English"]
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
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/contact-us/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact Us",
            "item": `${BASE_URL}/contact-us`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="contact-page-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <section className="relative py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* left: Content */}
            <div className="h-full min-h-0">
              <div className="h-full rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef2ff_100%)] drop-shadow-md p-4 sm:p-6 lg:p-8 drop-shadow-md">
                <div className="space-y-6">
                  <Heading
                    badge="quick discussion"
                    title="Book a quick discussion with a product specialist"
                    description="Speak with a product specialist to explore your requirements and next steps."
                    headingTag="h1"
                    titleClassName="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 capitalize"
                  />
                  <ContactForm />
                </div>
              </div>
            </div>
            {/* right: Image */}
            <div className="space-y-6">
              <Heading
                badge="Contact us"
                title="Have a question about scheduling or bookings?"
                description="Send us a quick message and our team will get back to you shortly. We’re happy to help you with setup, integrations, or general queries."
              />
              <div className="space-y-4">
                <InfoItem
                  title="Fast response"
                  desc="We usually reply within 24 hours."
                  icon={
                    <svg className="h-5 w-5" version="1.1" id="Capa_1" viewBox="0 0 309.768 309.768" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M308.417,122.685c-2.317-4.607-7.223-7.408-12.292-6.967l-15.409,1.126 c-16.714-60.412-72.04-104.968-137.706-104.968C64.154,11.875,0,76.034,0,154.884c0,78.856,64.154,143.009,143.009,143.009 c45.645,0,88.934-22.083,115.798-59.063c4.123-5.689,2.855-13.63-2.823-17.764c-5.689-4.128-13.636-2.845-17.759,2.817 c-22.099,30.421-57.692,48.587-95.222,48.587c-64.839,0-117.582-52.748-117.582-117.582S78.165,37.308,143.004,37.308 c52.22,0,96.549,34.244,111.838,81.434l-8.023,0.587c-5.124,0.37-9.524,3.807-11.139,8.681 c-1.621,4.884-0.131,10.258,3.753,13.619l23.083,19.934c2.246,3.617,6.217,6.037,10.775,6.037c0.239,0,0.462-0.054,0.696-0.065 c0.076,0,0.136,0.033,0.207,0.033c0.305,0,0.615-0.005,0.93-0.033c3.361-0.25,6.483-1.822,8.692-4.373l22.849-26.456 C310.038,132.818,310.723,127.275,308.417,122.685z"></path> <g> <path d="M75.772,199.191v-12.347l11.259-10.176c19.031-17.024,28.278-26.815,28.544-36.997 c0-7.109-4.286-12.733-14.348-12.733c-7.5,0-14.071,3.742-18.629,7.239l-5.765-14.62c6.57-4.944,16.752-8.974,28.55-8.974 c19.706,0,30.562,11.525,30.562,27.342c0,14.609-10.584,26.276-23.187,37.53l-8.044,6.701v0.261h32.841v16.763H75.772V199.191z"></path> <path d="M186.261,199.191v-20.783H147.66v-13.26l32.972-53.091h24.933v51.073h10.454v15.278h-10.454 v20.783C205.564,199.191,186.261,199.191,186.261,199.191z M186.261,163.13v-19.298c0-5.232,0.267-10.584,0.669-16.219h-0.533 c-2.823,5.635-5.102,10.726-8.044,16.219l-11.661,19.031v0.267H186.261z"></path> </g> </g> </g> </g></svg>
                  }
                />
                <InfoItem
                  title="Simple onboarding"
                  desc="Get help setting up your booking flow."
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  }
                />
                <InfoItem
                  title="Human support"
                  desc="Talk to real people, not bots."
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden={true}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  }
                />
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
                    <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Get Started - Contact Us" className="rounded-xl bg-white px-4 py-3 text-sm text-indigo-600 transition">Get Started</Link>
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