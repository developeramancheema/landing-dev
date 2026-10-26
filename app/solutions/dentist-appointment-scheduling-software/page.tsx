import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { BASE_URL, APP_NAME, contactInfo, REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import Link from "next/link";
import { FaqSection } from "@/app/component/FaqSection";
import Card from "@/app/component/Card";
import Heading from "@/app/component/Heading";
import { CheckListItem } from "@/app/component/CheckList";
import SolutionCtaSection from "@/app/component/SolutionCtaSection";
import ScreenGate from "@/app/component/ScreenGate";

const pageUrl = `${BASE_URL}/solutions/dentist-appointment-scheduling-software`;

export const metadata: Metadata = {
    title: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
    description: `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
    keywords: [ "dental appointment booking software", "best dental clinic management software", "dentist software", "scheduling software for dentists", "software for dental clinic management", "software for dental clinic", "dental practice management software", "dental appointment app"],
    alternates: {
      canonical: `${pageUrl}`,
    },
    openGraph: {
      title: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
      description: `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
      url: `${pageUrl}`,
      type: "website",
      siteName: `${APP_NAME}`,
      locale: "en",
      images: [
        {
          url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          width: 1200,
          height: 630,
          alt: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Dentist Appointment Booking App | ${APP_NAME} – Smart Appointment Scheduling`,
      description: `The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.`,
      images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
    },
};

export default function DentistAppointmentSchedulingSoftware() {

const faqItems = [
    {
        title: "What is an appointment booking system for a dental clinic?",
        content: `It's software that lets patients schedule, reschedule, or cancel dental appointments online — while keeping your clinic's calendar updated automatically without any manual effort from your staff.`,
    },
    {
        title: "What is the purpose of a booking system?",
        content: `To remove the back-and-forth of phone and manual scheduling. Patients book when it's convenient for them. It saves your team up to 90% of the time spent on calls. Allowing them more time for patient care.`,
    },
    {
        title: "Why should dental clinics have an online booking system?",
        content: `The key reason why dental clinics need a booking system is to keep the clinic reachable 24/7 for online booking. After that, no missed calls mean no business loss, automated reminders reduce no-shows, and managing scheduling tasks without interruptions.`,
    },
    {
        title: "What leading booking systems do dentists use in India?",
        content: `Based on clinic size, budget, and requirements of WhatsApp reminders or multi-location support, tools like GetSetTime, PappyJoe, Dentee, and Zoho Bookings are popular among the dental community in India.`,
    },
    {
        title: "What is meant by the best booking software for a dental clinic?",
        content: `The best software fits your actual workflow — easy for patients to use, simple for staff to manage, with reminder automation, calendar sync, and fair pricing that makes sense for your practice.`,
    },
    {
        title: "What are the disadvantages of online booking systems?",
        content: `Like any tool, it takes a short setup period and a small learning curve. Once configured, though, most clinics find it runs on its own with very little daily involvement.`,
    },
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
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        "url": `${pageUrl}`,
        "name": `Dentist Appointment Booking Software | ${APP_NAME} – Smart Appointment Scheduling`,
        "description": "The easiest dentist scheduling software - Book clients online 24/7, send auto WhatsApp reminders & reduce no-shows — no tech skills needed. Try free today.",
        "inLanguage": "en",
        "isPartOf": {
        "@type": "WebSite",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
          "width": 1200,
          "height": 630
        },
        },
        {
            "@type": "SoftwareApplication",
            "@id": `${pageUrl}/#softwareapplication`,
            "name": `${APP_NAME}`,
            "alternateName": `${APP_NAME}`,
            "url": `${pageUrl}`,
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
        },
        {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Solutions",
            "item": `${BASE_URL}/solutions`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Dentist Appointment Booking Software | ${APP_NAME} – Smart Appointment Scheduling`,
            "item": `${pageUrl}`,
          },
        ],
        },
        {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content
          }
        }))
        }
    ],
};

const features = [
    {
    title: "Online Appointment Booking",
    description: "Patients can book their own sessions through a simple, personalized online link—any time of day, without needing to call. And on any other day.",
    icon: <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10H17M7 14H12M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#4f39f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
    },
    {
    title: "Automated Scheduling",
    description: "You set your availability; the system handles the rest. Patients find an empty slot, book; then it fills your calendar automatically—nothing to manage manually for you.",
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f39f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check2-icon lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>,
    },
    {
    title: "Patient Reminders",
    description: "The hard side of manual handling is sending reminders to patients before each appointment. The booking system does it automatically and reduces missed sessions without any extra work; allow it to send when needed.",
    icon: <svg fill="#4f39f6" version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 59.504 59.504"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M29.752,56.701c-3.608,0-6.652-2.463-7.538-5.797H9.033C4.053,50.904,0,46.852,0,41.871c0-3.575,2.117-6.819,5.394-8.264 C6.988,32.764,14,27.448,14,24.215v-8.072c0-7.355,5.983-13.34,13.339-13.34h4.826c7.354,0,13.339,5.984,13.339,13.34v8.072 c0,3.232,7.013,8.549,8.667,9.42c3.216,1.416,5.333,4.66,5.333,8.236c0,4.979-4.053,9.033-9.033,9.033H37.29 C36.404,54.238,33.359,56.701,29.752,56.701z M27.339,6.803c-5.149,0-9.339,4.189-9.339,9.34v8.072 c0,6.559-10.883,13.004-10.993,13.053C5.181,38.072,4,39.879,4,41.871c0,2.775,2.258,5.033,5.033,5.033h14.921 c1.104,0,2,0.896,2,2c0,2.094,1.704,3.797,3.798,3.797c2.094,0,3.798-1.703,3.798-3.797c0-1.104,0.896-2,2-2h14.921 c2.775,0,5.033-2.258,5.033-5.033c0-1.991-1.182-3.799-3.007-4.604c-0.111-0.048-10.993-6.494-10.993-13.052v-8.072 c0-5.15-4.189-9.34-9.339-9.34L27.339,6.803L27.339,6.803z"></path> </g> <g> <path d="M38.015,18.983c-1.104,0-2-0.896-2-2c0-2.619-2.131-4.75-4.75-4.75c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2 c4.825,0,8.75,3.924,8.75,8.75C40.015,18.087,39.119,18.983,38.015,18.983z"></path> </g> </g> </g> </g></svg>,
    },
    {
    title: "Patient Records Management",
    description: "Patient history and records help you make them feel better. The software lets you keep everything you need in one organized place: patient contact details, treatment history, appointment notes, and the next booking schedule.",
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f39f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-library-icon lucide-square-library"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="m15 7 2 10"/></svg>,
    },
];

const growthRoadmap = [
    {
        title: "Quick Account Setup",
        detail: "Create your account, enter your clinic details, and set your working hours. The system automatically generates your booking page. There is nothing to install and no technical configuration needed.",
    },
    {
        title: "Automation With the Setup Completion",
        detail: "Only with your preferences, reminders, confirmations, and calendar updates all work automatically. The system follows only the rules you set up—no manual inputs after that.", 
    },
    {
        title: "Minimal Training Needed",
        detail: "The interface is built to be straightforward for clinical staff, not software teams. Most users are comfortable with the full feature set within a day or two of regular use.",
    },
];
  
return (
    <>
    {/* Add Structured Data for Dentist Appointment Scheduling App Page */}
    <Script id="dentist-appointment-scheduling-software-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>

    {/* HERO SECTION */}
    <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 hidden sm:block">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-6">
                {/* Left column - Content */}
                <div className="space-y-6">
                    <Heading
                        badge="Expand Your Practise"
                        title="Let's Manage Your Appointments Booking With the"
                        highlightText="Best Dentist Scheduling Software"
                        description="GetSetTime helps dentists automate bookings, reduce no-shows, and free up front-desk time — so your team can focus on patients, not phone calls."
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
                        <Link href={`${REGISTER_URL}`} aria-label="Contact Us - Dentist Appointment Scheduling Software" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">Get Started for Free</Link>
                    </div>
                    
                    <ScreenGate minWidth={768}>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                          <div className="flex items-center gap-2">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4 0m4 0a4 4 0 014 4" />
                                  </svg>
                              </span>
                              <div>
                                  <div className="text-lg font-bold text-neutral-900">10,000+</div>
                                  <div className="text-xs font-semibold text-neutral-800">Appointments</div>
                              </div>
                          </div>
                          <div className="text-xs text-neutral-500">Booked across clinics using GetSetTime</div>
                      </div>

                      <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                          <div className="flex items-center gap-2">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                              </span>
                              <div>
                                  <div className="text-lg font-bold text-neutral-900">3 hrs</div>
                                  <div className="text-xs font-semibold text-neutral-800">Time Saved</div>
                              </div>
                          </div>
                          <div className="text-xs text-neutral-500">Daily admin time back for your team</div>
                      </div>

                      <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                          <div className="flex items-center gap-2">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.11c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                  </svg>
                              </span>
                              <div>
                                  <div className="text-lg font-bold text-neutral-900">4.8 ★</div>
                                  <div className="text-xs font-semibold text-neutral-800">Patient Rating</div>
                              </div>
                          </div>
                          <div className="text-xs text-neutral-500">Average feedback from patients</div>
                      </div>
                    </div>
                    </ScreenGate>
                </div>

                {/* Right column - Interactive Demo */}
                <div className="relative space-y-4 animate-fade-in-scale">
                    <ScreenGate minWidth={768}>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                        <div className="rounded-2xl overflow-hidden drop-shadow-lg">
                            <Image src="/dentist-appointment.webp" className="h-64 w-full object-cover" alt="Dental Clinic Dashboard" width={500} height={500} />
                        </div>
                        <div className="rounded-2xl overflow-hidden drop-shadow-lg">
                            <Image src="/dentist-booking.webp" className="h-64 w-full object-cover" alt="Dental Clinic Bookings" width={500} height={500} />
                        </div>
                    </div>
                    </ScreenGate>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white drop-shadow-xl">

                            <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-white p-3 sm:p-4">
                                {/* Decorative dotted backdrop */}
                                <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(99,102,241,0.12)_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden />
                                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-400/10 blur-3xl" aria-hidden />

                                <ScreenGate minWidth={640}>
                                {/* KPI strip */}
                                <div className="relative mb-4 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 sm:grid-cols-3 sm:gap-2.5">
                                    {[
                                        { label: "Appointments", value: "24", trend: "+9%", accent: "text-indigo-600", iconBg: "bg-indigo-600", bg: "from-indigo-50 to-white", ring: "ring-indigo-100", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                                        { label: "Confirmed", value: "21", trend: "+6%", accent: "text-emerald-600", iconBg: "bg-emerald-600", bg: "from-emerald-50 to-white", ring: "ring-emerald-100", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                                        { label: "Chair use", value: "92%", trend: "+4%", accent: "text-violet-600", iconBg: "bg-violet-600", bg: "from-violet-50 to-white", ring: "ring-violet-100", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                                    ].map((kpi) => (
                                        <div key={kpi.label} className={`group rounded-xl border border-neutral-100 bg-gradient-to-br ${kpi.bg} p-2.5 drop-shadow-sm ring-1 ${kpi.ring} transition duration-300 hover:-translate-y-0.5 hover:drop-shadow-md sm:p-3`}>
                                            <div className="flex items-center justify-between">
                                                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${kpi.iconBg} text-white drop-shadow-sm sm:h-9 sm:w-9`}>
                                                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d={kpi.icon} /></svg>
                                                </span>
                                                <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
                                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                                                    {kpi.trend}
                                                </span>
                                            </div>
                                            <div className="mt-1.5 text-xs tracking-wide text-neutral-500">{kpi.label}</div>
                                            <div className={`text-lg font-bold tabular-nums sm:text-xl ${kpi.accent}`}>{kpi.value}</div>
                                        </div>
                                    ))}
                                </div>
                                </ScreenGate>

                                <div className="relative grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                                    <div className="space-y-3 rounded-xl md:border border-neutral-100 md:bg-white md:p-4 md:drop-shadow-sm">
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                            <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Upcoming
                                        </div>
                                        <div className="space-y-2.5">
                                            {[
                                                ["10:00 AM", "Dental Checkup", "Ryan Walker"],
                                                ["11:30 AM", "Dental Cleaning", "Anthony Collins"],
                                            ].map(([time, service, patient]) => (
                                            <div key={time} className="flex flex-wrap items-center gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/60 p-2.5 sm:flex-nowrap sm:gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                                                    {patient.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="truncate text-sm font-semibold text-neutral-900">{service}</div>
                                                    <div className="truncate text-xs text-neutral-500">{patient}</div>
                                                </div>
                                                <span className="ml-auto shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600 border border-emerald-200">{time}</span>
                                            </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3 rounded-xl md:border border-neutral-100 md:bg-white md:p-4 md:drop-shadow-sm">
                                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                                            <svg className="h-4 w-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            Clinic Staff
                                        </div>
                                        <div className="space-y-2.5">
                                            {[
                                                ["Dr. David Harris", "Dental Specialist", "Available"],
                                                ["Dr. Gabriel Robinson", "Dental Expert", "Busy"],
                                            ].map(([name, role, status]) => (
                                                <div key={name} className="flex flex-wrap items-center gap-2.5 rounded-xl border border-neutral-100 bg-neutral-50 p-2.5 sm:flex-nowrap sm:gap-3">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-bold text-indigo-700">
                                                        {name.replace("Dr. ", "").split(" ").map((w) => w[0]).slice(0, 2).join("")}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="truncate text-sm font-semibold text-neutral-900">{name}</div>
                                                        <div className="truncate text-xs text-neutral-500">{role}</div>
                                                    </div>
                                                    <span
                                                        className={`ml-auto inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold border ${
                                                        status === "Available"
                                                            ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                                                            : "bg-amber-50 text-amber-600 border-amber-200"
                                                        }`}
                                                    >
                                                        {status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mt-4 flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-3 sm:items-center sm:px-4">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    </span>
                                    <div className="font-medium text-indigo-700 text-sm">
                                        WhatsApp reminders sent to <span className="font-bold">12 patients</span> for tomorrow&apos;s visits.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* FEATURES SECTION */}
    <section className="relative pb-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Heading
              badge="Features"
              title="Everything a Dentist Needs to Run a Tighter Schedule"
              description="From first booking to follow-up reminder, GetSetTime is one of the most complete appointment systems that integrates with your scheduling workflow and handles it all automatically, so your staff doesn't have to."
              wrapperClassName="text-center max-w-4xl mx-auto mb-8 space-y-3"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {features.map((feature) => (
                <Card key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
                ))}
            </div>
        </div>
    </section>

    {/* Does it matter for Dentists SECTION */}
    <section className="bg-[#f5f7ff] py-16 relative overflow-hidden">
        <div className="absolute inset-0 hidden sm:block">
            <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
                {/* Left column - Content */}
                <div className="space-y-3">
                    <Heading
                      badge="Does it matter for Dentists?"
                      title="Managing the Dental Clinic Expertly,"
                      highlightText="Focus on Practice"
                      description="Now, managing phone calls and booking appointments manually is more expensive than using scheduling software for a dental clinic. Software like Getsettime does so much more than you expect - from saving time to how your clinic runs from the ground up in day-to-day."
                    />

                    <div className="mt-6 space-y-3">
                        {[
                        "Saving time that is spent on manual scheduling and phone calls every day.",
                        "Automatic reminders reduce no-shows, and slots become available when patients reschedule or cancel their bookings.",
                        "Smooth workflow, no manual intervention, no double-booking, no conflicts for waiting",
                        "Effortless booking -minimum contact details, one-click service, and slot selection. Confirm. Done.",
                        ].map((step) => (
                            <CheckListItem key={step} text={step} />
                        ))}
                    </div>
                </div>
                {/* Right column - Interactive Demo */}
                <div className="rounded-2xl bg-white drop-shadow-xl">
                    <div className="rounded-2xl text-neutral-900 p-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="order-2 sm:order-2 rounded-2xl">

                                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 space-y-3">
                                    <div className="rounded-2xl hidden sm:block bg-white p-4 drop-shadow-sm">
                                        <div className="font-medium text-neutral-800">Appointments growing smoothly</div>
                                        <div className="mt-3 flex items-end gap-2">
                                            {["h-8","h-12","h-10","h-16","h-14","h-9","h-11","h-16"].map((bar, idx) => (
                                                <div key={idx} className={`w-3 rounded-full ${bar} ${idx === 3 || idx === 7 ? "bg-indigo-500" : idx === 4 ? "bg-sky-500" : idx === 6 ? "bg-emerald-400" : "bg-indigo-300"}`}/>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-2xl bg-indigo-600 p-4 text-white drop-shadow-lg">
                                        <div className="opacity-90">Next appointment</div>
                                        <div className="mt-1 font-semibold">Emma Wilson · 11:00 AM</div>
                                        <div className="opacity-90">Dental Checkup · Room 2</div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-3">
                                    <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-3 drop-shadow-md">
                                        <div className="text-indigo-600">Patient rating</div>
                                        <div className="text-xl font-bold">4.9/5</div>
                                    </div>
                                    <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3 drop-shadow-md">
                                        <div className="text-emerald-600">Reminders sent</div>
                                        <div className="text-xl font-bold">126</div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 sm:order-1 space-y-3">
                                <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 rounded-xl border border-neutral-100 bg-white drop-shadow-sm p-3 space-y-1">
                                    <div className="relative">
                                        <Image
                                        src="/dentist-profile.webp"
                                        alt="Dental Clinic Profile"
                                        className="relative min-h-14 min-w-14 rounded-full border-4 border-white object-cover drop-shadow-md"
                                        width={50}
                                        height={50}
                                        priority
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-neutral-900">Dr. Mia Taylor</div>
                                        <div className="text-neutral-600">Dental Specialist · 8+ years</div>
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-white md:p-4 md:drop-shadow-sm space-y-3">                                    
                                    <div>
                                        <div className="font-semibold text-neutral-900">Dental Clinic services</div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {["Dental Checkup", "Dental Cleaning", "Dental Filling", "Dental Extraction"].map((service, idx) => (
                                                <span
                                                    key={service}
                                                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                        idx === 1
                                                            ? "bg-indigo-600 text-white"
                                                            : "border border-indigo-100 bg-indigo-50 text-indigo-700"
                                                    }`}
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="font-semibold text-neutral-900">Availability</div>
                                    
                                    <div className="grid grid-cols-3 gap-2 text-sm">
                                        {[
                                            { time: "09:00", active: false },
                                            { time: "09:30", active: false },
                                            { time: "10:00", active: false },
                                            { time: "10:30", active: false },
                                            { time: "11:00", active: true },
                                            { time: "11:30", active: false },
                                            
                                        ].map((slot) => (
                                            <div key={slot.time} className={`rounded-xl border px-2 py-2 text-xs text-center font-semibold ${
                                                    slot.active
                                                        ? "border-red-200 bg-red-50 text-red-600 line-through"
                                                        : "border-emerald-200 bg-emerald-50 text-emerald-700"
                                                }`}
                                            >
                                                {slot.time}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* WHY DENTAL CLINIC CHOOSE US SECTION */}
    <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Left column - Content */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-3 drop-shadow-xl">
                    <Image src="/dentist-service.webp" alt="dentist services available" className="h-full w-full object-cover rounded-xl" width={500} height={500} />
                </div>
                {/* Right column - Interactive Demo */}
                <div className="relative space-y-3">
                    <Heading
                      badge="Day-to-Day Use"
                      title="Fits Smoothly, Feels Invisible,"
                      highlightText="Acts as Your Team"
                      description="Truly, the strength of the best appointment software is its ability to run the clinic smoothly with minimal effort or to support your routine Practice automatically."
                    />
                    <div className="mt-6 space-y-3">
                        {[
                        "Patient Booking Online, Any Time (Anytime booking Via link)",
                        "Instant Notification",
                        "Reminders Automation",
                        "Easy To Manage Details",
                        "Easy to Reschedule",
                        "The canceled slot frees up instantly",
                        ].map((item) => (
                            <CheckListItem key={item} text={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* DENTAL CLINIC SCHEDULING CHALLENGES SECTION */}
    <section className="relative overflow-hidden py-14 sm:py-20 bg-[linear-gradient(180deg,#eef2ff_0%,#e0f2fe_55%,#f8fafc_100%)]">
      
      <div className="absolute inset-0 hidden sm:block bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]" />
      <div className="absolute -left-16 top-20 hidden sm:block h-48 w-48 rounded-full bg-emrald-400/25 blur-3xl" />
      <div className="absolute -right-14 bottom-16 hidden sm:block h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute left-1/2 top-0 hidden sm:block h-24 w-[60%] -translate-x-1/2 rounded-b-[48px] bg-white/35 blur-2xl" />
      
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left */}
          <div className="space-y-4">
            <Heading
              badge="Why Manual Scheduling Holds Clinics Back"
              title="One System for Every Stage of Appointment"
              description="As patient demand grows, manual scheduling creates delays, front-desk strain, and inconsistent follow-up. A dedicated dentist booking system keeps every appointment organized — from the first request to the final follow-up."
            />
            <div className="space-y-3">
              {[
                "Delayed responses weaken trust; patients look to move on.",
                "Uneven appointment scheduling leads to idle slots and long wait times",
                "Chasing patients by phone or Email is not time-consuming, but also impossible every time.",
                "Booking requests via Email, phone, and walk-ins creates confusion across your team and a bad experience for patients.",
              ].map((point) => (
                <CheckListItem key={point} text={point} />
              ))}
            </div>

            <div className="relative">
                <h3 className="text-lg font-bold text-neutral-900">Supports Every Type of Dental Clinic Appointment</h3>
                <div className="mt-2 flex flex-wrap gap-3">
                    {[
                    "Initial Consultation",
                    "Assessment & Evaluation",
                    "Treatment Session",
                    "Follow-up Appointment",
                    "Rehabilitation Program",
                    ].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1 text-xs text-neutral-700 drop-shadow-sm">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg> 
                        {tag}
                    </span>
                    ))}
                </div>
                <div className="mt-4">
                    <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Start your dental clinic booking setup - Dentist Appointment Scheduling Software" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-white drop-shadow-md transition hover:bg-indigo-700">Sign Up for Free</Link>
                </div>
            </div>

          </div>
          {/* Right */}
          <div className="relative rounded-xl bg-white/90 p-4 drop-shadow-2xl backdrop-blur">
            <ScreenGate minWidth={768}>
            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden rounded-2xl hidden sm:block border border-neutral-200 bg-white p-3 drop-shadow-sm">
                <div className="flex items-center gap-2 text-neutral-700 font-semibold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  AVAILABLE TIMES
                </div>
                <div className="mt-3 relative">
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {[
                      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
                      "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                      "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
                    ].map((time) => (
                      <button key={time} type="button"
                        className={`rounded-xl border px-2 py-2 text-sm font-medium transition-all duration-200 ${
                          time === "10:00 AM"
                            ? "border-indigo-500 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white drop-shadow-md drop-shadow-indigo-300/60"
                            : "border-neutral-200 bg-white text-neutral-700 hover:border-indigo-200 hover:bg-indigo-50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                <Image src="/dentist-realty.webp" alt="Dental Clinic Appointment Schedule Interface" width={700} height={700} className="h-full w-full object-cover" />
                <div className="absolute left-2 top-2 rounded-md bg-indigo-600/90 px-2 py-1 text-xs uppercase tracking-widest text-white">Smart slots</div>
              </div>
            </div>
            </ScreenGate>

            <div className="md:mt-4 flex flex-wrap items-center justify-between">
              <div className="font-semibold text-neutral-900">Dental Clinic Operations Board</div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Live Overview</span>
            </div>
            <div className="mt-4 grid gap-3 grid-cols-2">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Checkup</div>
                <div className="mt-1 text-indigo-900">12 Slots · 7 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Cleaning</div>
                <div className="mt-1 text-indigo-900">8 Slots · 5 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Filling</div>
                <div className="mt-1 text-indigo-900">9 Slots · 6 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Dental Extraction</div>
                <div className="mt-1 text-indigo-900">11 Slots · 5 Booked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* DENTAL CLINIC GROWTH ROADMAP SECTION */}
    <section className="relative overflow-hidden md:bg-gradient-to-br from-indigo-50 via-white to-violet-100 py-14 sm:py-20">
        
        <div className="pointer-events-none hidden lg:block absolute inset-0">
            <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
            <div className="absolute right-8 bottom-16 h-44 w-44 rounded-full bg-violet-400/25 blur-3xl" />
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto grid lg:grid-cols-2 gap-12">
            {/* LEFT CONTENT */}
            <div className="relative z-10 space-y-4">
                <Heading
                  badge="Getting Started"
                  title="Simple to Set Up, Easier to Run Every Day"
                  description="No long onboarding process. No IT knowledge required. Most clinics are taking bookings within a single afternoon."
                />
                {growthRoadmap.map((point, i) => (
                    <div key={i} className="relative overflow-hidden rounded-xl bg-white p-4 drop-shadow-md transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl">
                        <div className="flex flex-col sm:flex-row items-start gap-2">
                            <div className="flex h-12 w-12 min-w-12 min-h-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white drop-shadow-lg drop-shadow-indigo-500/25">
                                <div className="font-bold">0{i + 1}</div>
                            </div>
                            <div className="relative">
                                <div className="font-semibold text-neutral-900">{point.title}</div>
                                <p className="text-neutral-600">{point.detail}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ScreenGate minWidth={768}>
            {/* RIGHT FEATURES GRID */}
            <div className="relative rounded-2xl drop-shadow-xl bg-white p-3">                
                <Image src="/dentist-grow-2.1.webp" alt="Dental Clinic Growth Roadmap" width={700} height={600} className="w-full h-full rounded-xl object-cover"/>

                <div className="absolute right-0 -top-10 hidden lg:block w-50 rounded-xl bg-white p-4 drop-shadow-md animate-float">
                    <div className="text-sm uppercase text-neutral-400">Dental Clinic Growth</div>
                    <div className="font-bold text-neutral-900">30 days to grow your dental clinic</div>
                    <div className="mt-3 flex items-end gap-2">
                    <div className="h-5 w-3 rounded-full bg-indigo-200" />
                    <div className="h-8 w-3 rounded-full bg-indigo-300" />
                    <div className="h-12 w-3 rounded-full bg-violet-300" />
                    <div className="h-8 w-3 rounded-full bg-indigo-500" />
                    <div className="h-10 w-3 rounded-full bg-sky-400" />
                    <div className="h-14 w-3 rounded-full bg-violet-300" />
                    <div className="h-16 w-3 rounded-full bg-emerald-300" />
                    <div className="h-16 w-3 rounded-full bg-indigo-500" />
                    </div>
                </div>

                <div className="pointer-events-none hidden lg:block absolute left-0 -bottom-10 rounded-xl border border-violet-100 bg-white p-4 drop-shadow-xl animate-float">
                    <div className="text-sm uppercase text-neutral-500">New Appointment</div>
                    <div className="mt-1 font-bold text-neutral-900">Jason Howard · 11:30 AM</div>
                    <div className="text-neutral-600">Synced to Dentist Clinic Operations Board</div>
                </div>
            </div>
            </ScreenGate>
        </div>
    </section>

    {/* FAQ SECTION */} 
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
        
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
            <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid container px-4 sm:px-6 lg:px-8 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            {/* left: Title */}
            <div className="space-y-3">
                <Heading
                  badge="Frequently Asked Questions"
                  title="Questions Dental Clinic Owners Ask Before Getting Started"
                  description="GetSetTime is built for dental clinic owners who want to grow their business online. We answer the most common questions dental clinic owners have about our platform."
                />
                <ScreenGate minWidth={768}>
                <div className="grid gap-4 sm:grid-cols-2  mt-6">
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
      badge="Built for Dentists"
      businessType="Dental Clinic"
    />
    </>
);
} 