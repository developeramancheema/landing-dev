import { APP_NAME, BASE_URL, contactInfo, LOGIN_URL, REGISTER_URL } from "@/lib/config";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Card from "./component/Card";
import { CheckListItem } from "./component/CheckList";
import { FaqSection } from "./component/FaqSection";
import Features from "./component/Features";
import Heading from "./component/Heading";
import HeroBanner from "./component/HeroBanner";
import InteractiveCalendar from "./component/InteractiveCalendar";
import ScreenGate from "./component/ScreenGate";
import Pricing from "./component/Pricing";
import Support from "./component/Support";
import TrustedCompanies from "./component/TrustedCompanies";

export const metadata: Metadata = {
  title: `Appointment Scheduling Software for Online Booking`,
  description: `GetSetTime is scheduling software designed for service-based professionals for whom appointment booking matters. Claim to Start Free Now.`,
  keywords: ["appointment scheduling app", "scheduling management software", "online appointment booking", "calendar management system", " scheduling tool", "appointment management app",],
  alternates: {
    canonical: `${BASE_URL}`,
  },
  openGraph: {
    title: `Appointment Scheduling Software for Online Booking`,
    description: `GetSetTime is scheduling software designed for service-based professionals for whom appointment booking matters. Claim to Start Free Now.`,
    url: `${BASE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Appointment Scheduling Software for Online Booking`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Appointment Scheduling Software for Online Booking`,
    description: `GetSetTime is scheduling software designed for service-based professionals for whom appointment booking matters. Claim to Start Free Now.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const faqItems = [
  {
    title: "What is GetSetTime?",
    content: `Getsettime is appointment scheduling software built for businesses and professionals seeking automation solutions to manage bookings and routine tasks and to optimize resources.
    <br/><br/> The best part is its centralized dashboard, which lets you handle key tasks in one place: calendar sync, operational tool integrations, booking confirmations, reminder sending, and staff allocations.`,
  },
  {
    title: "Can GetSetTime integrate with Google Calendar?",
    content: `It integrates easily with Google Calendar and also supports real-time synchronisation of availability updates and every appointment booking across devices and platforms.`,
  },
  {
    title: "Does GetSetTime reduce no-shows and manual scheduling work?",
    content: `Yes. GetSetTime is built to automate the entire booking process—from appointment booking to client visits. No phone calls for bookings and reminders; no double-booking. 
    <br/><br/>It allows reminders to be sent via email and WhatsApp sms. For a reason, the client can reschedule or cancel their booking. Then, the empty slot becomes available for booking instantly. That leads to reducing no-shows.`,
  },
  {
    title: "Does GetSetTime support customisation for different practices?",
    content: `Yes. GetSetTime allows customisation of booking settings, availability slots, services, buffer times, notifications, and reminder preferences.`,
  },
  {
    title: "Is GetSetTime affordable?",
    content: `Whether you are an independent professional or run your business with multiple practitioners, you will find GetSetTime much more affordable compared to others. You can use its free plan to get started, then upgrade to the basic, professional, or enterprise plans as needed.`,
  },
  {
    title: "Does GetSetTime offer a demo or trial?",
    content: `Yes, A free demo and trial are available with 250 bookings per month, which is enough to understand how the appointment scheduling software works.`,
  },
]

export default function Home() {

  const whatsappFeatures = [
    "Instant booking confirmation",
    "Reminder Automation",
    "Reschedule links in chat",
    "No manual interruption needed",
  ];

  const bookingFeatures = [
    "Select Department",
    "Choose a Service Provider",
    "Choose a Event Type",
    "Pick a date & time slot",
  ];

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
        "@id": `${BASE_URL}/#webpage`,
        "url": `${BASE_URL}`,
        "name": `Home`,
        "description": "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically. Try GetSetTime - A Next-Gen Scheduling App and free demo available today.",
        "isPartOf": {
          "@id": `${BASE_URL}/#website`
        },
        "about": {
          "@id": `${BASE_URL}/#softwareapplication`
        },
        "mainEntity": {
          "@id": `${BASE_URL}/#softwareapplication`
        },
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },  
        "inLanguage": "en",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${BASE_URL}`
            }
          ]
        }  
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${BASE_URL}/#softwareapplication`,
        "name": `${APP_NAME}`,
        "alternateName": `${APP_NAME}`,
        "description": "Smart appointment automation for doctors, clinics, salons, and service professionals. Set up fast, reduce no-shows, and start scheduling automatically.",
        "url": `${BASE_URL}`,
        "image": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        "inLanguage": "en",
        "author": {
          "@id": `${BASE_URL}/#organization`
        },
        "publisher": {
          "@id": `${BASE_URL}/#organization`
        },  
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Appointment Scheduling Software",
        "operatingSystem": "All — Web-based, no installation required",
        "availableOnDevice": ["Desktop", "Mobile", "Tablet"],
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
        "screenshot": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        "installUrl": `${REGISTER_URL}`,
        "releaseNotes": `${BASE_URL}/blog`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "5000",
          "reviewCount": "5000"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/#faqpage`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
      }
    ]
  };
  
  return (
    <>
      {/* Add Structured Data for Home Page */}
      <Script id="homepage-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData),}}/>

      <HeroBanner />

      <TrustedCompanies />

      <ScreenGate minWidth={768}>
        <Features />
      </ScreenGate>
      

      <section className="relative overflow-hidden bg-[#f5f7ff] py-14 sm:py-20">
        
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
          <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:gap-10 lg:grid-cols-2">
              {/* left: Content */}
              <div className="space-y-3">
                <Heading
                  badge="WhatsApp automation"
                  title="Instant Confirmation,"
                  highlightText="Reminder Via WhatsApp"
                  description={
                    <>
                      Currently, WhatsApp is one of the most reliable apps on smartphones, used for instant messaging. Getsettime allows you to send a thank-you SMS with every confirmed booking. Later, you can set when to send reminders to clients before the scheduled booking.
                    </>
                  }
                />
                <div className="grid sm:grid-cols-2 gap-3">
                  {whatsappFeatures.map((item) => (
                    <CheckListItem key={item} text={item} />
                  ))}
                </div>
              </div>

              {/* right: Image */}
              <div className="relative flex justify-center">
                <div className="relative w-full">
                  <div className="absolute left-4 top-6 h-48 w-48 rounded-full bg-indigo-600/30 blur-3xl sm:left-10 sm:top-10 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />

                  <div className="relative rounded-2xl z-2 sm:bg-white/80 sm:p-4 shadow-xl">
                    <div className="overflow-hidden rounded-2xl border border-neutral-200 drop-shadow-inner">
                      <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500 drop-shadow-xl drop-shadow-emerald-500/30">
                            <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stopColor="#5BD066"></stop> <stop offset="1" stopColor="#27B43E"></stop> </linearGradient> </defs> </g></svg>
                          </div>
                          <div>
                            <p className="font-semibold text-neutral-800">GetSetTime</p>
                            <div className="text-neutral-700">online now</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#f4efe5_100%)] px-4 py-4 sm:px-6 sm:py-6">
                        <div className="w-fit rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm text-neutral-700 drop-shadow-sm">
                          <p>Hi Nora 👋</p>
                          <p>Your appointment is confirmed for <strong>Tomorrow at 4:00 PM.</strong></p>
                        </div>
                        <div className="ml-auto w-fit rounded-2xl rounded-tr-md bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-3 text-white drop-shadow-sm">
                          <p>Great, thank you.</p>
                        </div>
                        <div className="w-fit rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm text-neutral-600 drop-shadow-sm">
                          <p>Hi Nora, this is a reminder for your<br/> Consultation with Dr. Sharma <strong>Tomorrow at 4:00 PM</strong> <br/>Reply to confirm or reschedule.</p>
                          {/* <div className="mt-1 rounded-xl bg-neutral-100 p-2">
                            <p className="text-sm text-neutral-600">Need to reschedule? Tap below</p>
                            <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-indigo-600 drop-shadow-sm">Manage booking</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ScreenGate minWidth={1024}>
                    <div className="absolute -left-0 lg:-left-5 -top-5 z-1 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 drop-shadow-xl p-4 animate-float">
                      <svg width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chat-alt-3" className="icon glyph " fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.91,16.51A8.45,8.45,0,0,0,22,11c0-5-4.49-9-10-9S2,6,2,11s4.49,9,10,9a10.9,10.9,0,0,0,3-.41l4.59,2.3A.91.91,0,0,0,20,22a1,1,0,0,0,.62-.22,1,1,0,0,0,.35-1ZM8,12a1,1,0,1,1,1-1A1,1,0,0,1,8,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,12Z"></path></g></svg>
                    </div>

                    <div className="absolute right-5 -top-10 z-2 rounded-xl bg-white px-4 py-4 drop-shadow-sm animate-float ">
                      <div className="text-sm uppercase">No-show reduction</div>
                      <div className="text-2xl font-bold text-neutral-900">32%</div>
                      <p className="font-medium text-indigo-600">Reminder automation</p>
                    </div>

                    <div className="absolute -bottom-10 right-5 z-2 rounded-xl bg-white px-4 py-4 drop-shadow-sm animate-float">
                      <div className="text-sm uppercase">Delivery</div>
                      <div className="text-2xl font-bold text-neutral-900">Instant</div>
                      <p className="font-medium text-neutral-600">confirmation after booking</p>
                    </div>

                    <div className="absolute -left-0 lg:-left-6 bottom-45 z-2 rounded-xl bg-white px-4 py-4 drop-shadow-sm animate-float">
                      <div className="text-sm uppercase">Message status</div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="font-medium text-emerald-600">Delivered instantly</div>
                      </div>
                    </div>
                  </ScreenGate>

                </div>
              </div>
          </div>
        </div>
      </section>

      <ScreenGate minWidth={768}>
        <InteractiveCalendar />
      </ScreenGate>

      <section className="relative py-14 sm:py-20">
        <div className="absolute w-full inset-0 bg-gradient-to-br from-transparent via-indigo-400/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:gap-10 lg:grid-cols-2">
            {/* left: Content */}
            <div className="relative space-y-3">
              <Heading
                badge="Public Booking Page"
                title="Let customers book without calling you"
                description="Share your public booking link with customers on WhatsApp, website, Instagram, Google Business Profile, or email. Customers choose department, service provider, event type, date, and time."
                headingTag="h3"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bookingFeatures.map((feature, index) => (
                  <CheckListItem key={feature} text={feature} index={index + 1} />
                ))}
              </div>
              
            </div>

            {/* right: Image */}
            <div className="relative">
              <div className="group relative w-full rounded-2xl bg-white px-4 py-6 drop-shadow-xl transition-all duration-500">
                <div className="w-full">
                  <div className="relative">
                    <div className="text-xl font-bold leading-tight text-neutral-900">Set your Scheduling</div>
                    <div className="font-medium text-neutral-600">Select when you&apos;d like to meet</div>
                    <div className="relative">
                      <div className="py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium text-neutral-600">
                          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10m-13 9h16a1 1 0 001-1V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a1 1 0 001 1z" />
                            </svg>
                          </span>
                          PICK A DAY
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.25 sm:gap-2">
                        {[
                          { day: "Mon", date: "25", active: false },
                          { day: "Tue", date: "26", active: false },
                          { day: "Wed", date: "27", active: false },
                          { day: "Thu", date: "30", active: true },
                          { day: "Fri", date: "31", active: false },
                          { day: "Sat", date: "1", active: false },
                          { day: "Sun", date: "2", active: false },
                        ].map((item) => (
                          <span
                            key={`${item.day}-${item.date}`}
                            className={`rounded-lg border px-1 py-2 text-center text-xs font-medium text-neutral-600 transition-all duration-200 sm:rounded-xl w-1/8 ${
                              item.active
                                ? "border-indigo-500 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white drop-shadow-md drop-shadow-indigo-300/60"
                                : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-indigo-200 hover:bg-indigo-50"
                            }`}
                          >
                            <div className={`text-xs ${item.active ? "text-white/90" : "text-neutral-500"}`}>{item.day}</div>
                            <div className="font-bold leading-none sm:text-md">{item.date}</div>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="py-3 flex items-center gap-2 text-sm font-medium text-neutral-600">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        AVAILABLE TIMES
                      </div>

                      <div className="grid grid-cols-4 gap-2 sm:grid-cols-4 lg:grid-cols-4">
                        {[
                          "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
                        ].map((time) => (
                          <span key={time} className={`rounded-xl border px-2 py-2 text-xs sm:text-sm text-center font-medium text-neutral-600 transition-all duration-200 ${
                              time === "12:00 PM"
                                ? "border-indigo-500 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white drop-shadow-md drop-shadow-indigo-300/60"
                                : "border-neutral-200 bg-white text-neutral-700 hover:border-indigo-200 hover:bg-indigo-50"
                            }`}
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ScreenGate minWidth={1024}>
              <div className="animate-float rounded-xl bg-white p-3 drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-xl w-50 block absolute -top-10 right-0 group-hover:-translate-y-1">
                <p className="mb-2 font-medium text-neutral-600 text-sm">Today&apos;s Queue</p>
                <div className="space-y-2">
                  <div className="flex w-full items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <span className="font-medium text-neutral-600 text-xs">Consultation</span>
                    </div>
                    <span className="text-neutral-500 text-xs">09:30</span>
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <span className="font-medium text-neutral-600 text-xs">Team Call</span>
                    </div>
                    <span className="text-neutral-500 text-xs">11:00</span>
                  </div>
                  <div className="flex w-full items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span className="font-medium text-neutral-600 text-xs">Follow-up</span>
                    </div>
                    <span className="text-neutral-500 text-xs">12:45</span>
                  </div>
                </div>
              </div>
              </ScreenGate>

            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <Support />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
        
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid container gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* left: Title */}
          <div className="space-y-3">
            <Heading
              badge="Frequently Asked Questions"
              title="Feel Free To Ask About GetSetTime"
              description="We will be happy to answer your queries for Getsettime. Here, we have answered some common queries to help you learn about our appointment scheduling software."
            />
            <ScreenGate minWidth={768}>
              <div className="grid gap-4 sm:grid-cols-2 mt-6 grid">
                <Card title="Start Without Paying" description="No credit card required; terms and conditions apply." icon={<svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />

                <Card title="Upgrade anytime" description="When you need to, you can upgrade your plan; as your team grows, bookings increase." icon={<svg className="h-7 w-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                
                <Card title="Work On Your Own Rules" description="You're free to set up your availability, create events, and customise reminders and notifications." icon={<svg className="h-8 w-8 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                
                <Card title="No More Missed Bookings" description="You are available 24/7 for appointment bookings; your clients can book any time for upcoming visits, no calling needed." icon={<svg fill="#00a63e" className="h-8 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="#000000" strokeWidth="8.192"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="m266.1,237.1h-82.2c-6.2,0-10.4,5.2-10.4,10.4v243c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 10.4-10.4v-243c0-6.2-5.2-10.4-10.4-10.4zm-10.4,243h-61.4v-222.1h61.4v222.1z"></path> <path d="M103.7,272.6H21.5c-6.2,0-10.4,5.2-10.4,10.4v207.6c0,6.3,5.2,10.4,10.4,10.4h82.2c5.2,0,10.4-4.2,10.4-10.4V283 C114.1,276.7,108.9,272.6,103.7,272.6z M93.3,480.1H31.9V293.4h61.4V480.1z"></path> <path d="m499.2,157.8l-103-142.9c-4.2-5.2-12.5-5.2-16.6,0l-103,142.9c-4.2,5.9-2.6,15.6 8.3,15.6h51v317.1c0,6.3 5.2,10.4 10.4,10.4h82.2c5.2,0 10.4-4.2 11.4-10.4v-317h51c10.2,0 12.4-10.4 8.3-15.7zm-70.8-5.2c-6.2,0-10.4,5.2-10.4,10.4v317.1h-61.4-1v-317.1c0-6.3-5.2-10.4-10.4-10.4h-41.6l83.2-114.7 83.2,114.7h-41.6z"></path> </g> </g> </g></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
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
                  <Link href={`${LOGIN_URL}`} target="_blank" aria-label="Get Started - Home" className="rounded-xl bg-white px-4 py-3 text-sm text-indigo-600 transition">Sign Up for Free</Link>
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