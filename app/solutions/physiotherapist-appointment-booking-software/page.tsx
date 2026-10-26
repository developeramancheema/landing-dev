import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { BASE_URL, APP_NAME, contactInfo, REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import { FaqSection } from "@/app/component/FaqSection";
import Card from "@/app/component/Card";
import Heading from "@/app/component/Heading";
import { CheckListItem } from "@/app/component/CheckList";
import SolutionCtaSection from "@/app/component/SolutionCtaSection";
import ScreenGate from "@/app/component/ScreenGate";

const pageUrl = `${BASE_URL}/solutions/physiotherapist-appointment-booking-software`;

export const metadata: Metadata = {
  title: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
  description: `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
  keywords: [ "physiotherapy appointment booking app", "physiotherapy booking app", "online appointment booking", "calendar management system", " scheduling tool", "appointment management app"],
  alternates: {
    canonical: `${pageUrl}`,
  },
  openGraph: {
    title: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
    description: `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
    url: `${pageUrl}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Physiotherapy Appointment Booking App | ${APP_NAME}`,
    description: `Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

export default function PhysiotherapyAppointmentBookingSoftware() {

const faqItems = [
  {
    title: "Is it worth it for a solo physio practice to use an appointment system?",
    content: `Yes. An appointment system is more cost-effective than hiring a team to manage the booking and scheduling. There is no interference with booking, rescheduling, sending reminder SMS, or canceling appointments. The system automatically works after you set availability, and you can also change it in an emergency.`,
  },
  {
    title: "How long does the initial setup for a physio clinic take?",
    content: `Just a few minutes, you'll go for the signup. Fill in your details, upload clinic logo or image for branding. Then set your availability and create events with self-preference of 15, 30, 60 minutes, and so on. Get a personal booking link and share on your website, GBP, and social media. All done in 20-30 minutes.`,
  },
  {
    title: "Guide to choosing an online booking system for a physio clinic?",
    content: "Look for a system that offers online booking, automated reminders, and patient record management. It should be simple to set up, require no technical knowledge, and work for solo practitioners and multi-therapist clinics alike.",
  },
  {
    title: "How to choose the right physio appointment booking platform for clinics?",
    content: "Physio appointment booking should be easy to set up, user-friendly, and automatically manage all appointments. Then check if it fits your clinic size and budget. A free trial helps you confirm it works for your workflow as you expect.",
  },
  {
    title: "How is GetSetTime an affordable booking platform for small physio clinics?",
    content: "GetSetTime is priced per practitioner, with no setup fees or long-term contracts. Solo physiotherapists get full access to online booking, automated reminders, and patient management — without paying for features built for large hospital teams.",
  },
  {
    title: "How to set up an online booking system for a physiotherapy practice?",
    content: "Create your account, add your working hours and appointment types, and your booking page goes live automatically. Most physiotherapy practices are set up and accepting online appointments within a single afternoon, with no technical configuration required.",
  },
  {
    title: "What are the essential features for physio scheduling software?",
    content: "Almost all physio scheduling software brings the inbuilt feature -online appointment booking, rescheduling, or canceling; send reminders automatically via SMS, email, or WhatsApp; and centralized patient record management. All these reduce no-shows, double bookings, and hours of manual work - the physio clinic runs smoothly and lets you focus on patient care.",
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
      "name": `Physiotherapy Appointment Booking App | ${APP_NAME}`,
      "description": "Automated physiotherapy appointment booking app for physiotherapists with online booking, WhatsApp reminders, smart calendar management, and no-show reduction.",
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
        "name": `Physiotherapy Appointment Booking App | ${APP_NAME}`,
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
    icon: <svg fill="#4f39f6" version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 59.504 59.504"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M29.752,56.701c-3.608,0-6.652-2.463-7.538-5.797H9.033C4.053,50.904,0,46.852,0,41.871c0-3.575,2.117-6.819,5.394-8.264 C6.988,32.764,14,27.448,14,24.215v-8.072c0-7.355,5.983-13.34,13.339-13.34h4.826c7.354,0,13.339,5.984,13.339,13.34v8.072 c0,3.232,7.013,8.549,8.667,9.42c3.216,1.416,5.333,4.66,5.333,8.236c0,4.979-4.053,9.033-9.033,9.033H37.29 C36.404,54.238,33.359,56.701,29.752,56.701z M27.339,6.803c-5.149,0-9.339,4.189-9.339,9.34v8.072 c0,6.559-10.883,13.004-10.993,13.053C5.181,38.072,4,39.879,4,41.871c0,2.775,2.258,5.033,5.033,5.033h14.921 c1.104,0,2,0.896,2,2c0,2.094,1.704,3.797,3.798,3.797c2.094,0,3.798-1.703,3.798-3.797c0-1.104,0.896-2,2-2h14.921 c2.775,0,5.033-2.258,5.033-5.033c0-1.991-1.182-3.799-3.007-4.604c-0.111-0.048-10.993-6.494-10.993-13.052v-8.072 c0-5.15-4.189-9.34-9.339-9.34L27.339,6.803L27.339,6.803z"></path> </g> <g> <path d="M38.015,18.983c-1.104,0-2-0.896-2-2c0-2.619-2.131-4.75-4.75-4.75c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2 c4.825,0,8.75,3.924,8.75,8.75C40.015,18.087,39.119,18.983,38.015,18.983z"></path> </g> </g> </g> </g></svg>,
  },
  {
    title: "Patient Reminders",
    description: "The hard side of manual handling is sending reminders to patients before each appointment. The booking system does it automatically and reduces missed sessions without any extra work; allow it to send when needed.",
    icon: <svg fill="#4f39f6" width="40px" height="40px" viewBox="0 0 100 100"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M57,44h-6h-6c-3.3,0-6,2.7-6,6v9c0,1.1,0.5,2.1,1.2,2.8c0.7,0.7,1.7,1.2,2.8,1.2v9c0,3.3,2.7,6,6,6h2h2 c3.3,0,6-2.7,6-6v-9c1.1,0,2.1-0.4,2.8-1.2c0.7-0.7,1.2-1.7,1.2-2.8v-9C63,46.7,60.3,44,57,44z"></path> </g> <g> <circle cx="51" cy="33" r="7"></circle> </g> <g> <path d="M36.6,66.7c-0.2-0.2-0.5-0.4-0.7-0.6c-1.9-2-3-4.5-3-7.1v-9c0-3.2,1.3-6.2,3.4-8.3c0.6-0.6,0.1-1.7-0.7-1.7 c-1.7,0-3.6,0-3.6,0h-6c-3.3,0-6,2.7-6,6v9c0,1.1,0.5,2.1,1.2,2.8c0.7,0.7,1.7,1.2,2.8,1.2v9c0,3.3,2.7,6,6,6h2h2 c0.9,0,1.7-0.2,2.4-0.5c0.4-0.2,0.6-0.5,0.6-0.9c0-1.2,0-4,0-5.1C37,67.2,36.9,66.9,36.6,66.7z"></path> </g> <g> <circle cx="32" cy="29" r="7"></circle> </g> <g> <path d="M76,40h-6c0,0-1.9,0-3.6,0c-0.9,0-1.3,1-0.7,1.7c2.1,2.2,3.4,5.1,3.4,8.3v9c0,2.6-1,5.1-3,7.1 c-0.2,0.2-0.4,0.4-0.7,0.6c-0.2,0.2-0.4,0.5-0.4,0.8c0,1.1,0,3.8,0,5.1c0,0.4,0.2,0.8,0.6,0.9c0.7,0.3,1.5,0.5,2.4,0.5h2h2 c3.3,0,6-2.7,6-6v-9c1.1,0,2.1-0.4,2.8-1.2c0.7-0.7,1.2-1.7,1.2-2.8v-9C82,42.7,79.3,40,76,40z"></path> </g> <g> <circle cx="70" cy="29" r="7"></circle> </g> </g> </g></svg>,
  },
  {
    title: "Patient Records Management",
    description: "Patient history and records help you make them feel better. The software lets you keep everything you need in one organized place: patient contact details, treatment history, appointment notes, and the next booking schedule.",
    icon: <svg width="40px" height="40px" viewBox="0 0 100 100" aria-hidden="true" role="img" className="iconify iconify--gis" preserveAspectRatio="xMidYMid meet" fill="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M33.523 34.986a20 20 0 0 0-20 20a20 20 0 0 0 20 20a20 20 0 0 0 20-20a20 20 0 0 0-20-20zm6.204 4.088a2.5 2.5 0 0 1 2.127 3.781l-6.9 11.952l7.247 4.672a2.5 2.5 0 1 1-2.709 4.203l-9.25-5.961a2.5 2.5 0 0 1-.81-3.352l8.091-14.014a2.5 2.5 0 0 1 2.204-1.28z" fill="#4f39f6"></path><path d="M2.523 5A2.5 2.5 0 0 0 0 7.5v70.29a2.5 2.5 0 0 0 1.447 2.267l31.666 14.71A2.5 2.5 0 0 0 34.19 95a2.5 2.5 0 0 0 1.032-.232l30.613-14.221l30.613 14.22A2.5 2.5 0 0 0 100 92.5V22.21a2.5 2.5 0 0 0-1.447-2.267L66.887 5.233A2.5 2.5 0 0 0 65.809 5a2.5 2.5 0 0 0-1.03.232L34.166 19.453L3.553 5.233A2.5 2.5 0 0 0 2.523 5zm64.428 5.775L95 23.805v64.777L67.322 75.725zm-2.998.354l.37 64.605l-28.677 13.323l-.062-10.871c-.998.078-2 .09-3 .033l.062 10.818L5 76.193V11.418l27.275 12.67l.045 7.908a22.242 22.242 0 0 1 3.002.182l-.045-7.727z" fill="#4f39f6" fillRule="evenodd"></path></g></svg>,
  },
];

const services = [
  'Patient Booking Online, Any Time',
  'Getting an Instant Notification',
  'Send Reminders On Auto-Mode',
  'Saved Session details',
  'Easy to Reschedule',
];

const benefits = [
  "Saves the time that you are spending on manual scheduling and phone calls",
  "Automatic reminders reduce no-shows and free up the slot for booking.",
  "Improve workflow: no double-booking, no waiting conflicts. Better resource management",
  "Give patients a professional booking experience -minimum contact details, then choose the service and slot with a tap, and the booking is done.",
];

const growthRoadmap = [
  {
    title: "Quick Account Setup",
    detail: "Create your account, enter your clinic details, and set your working hours. The system generates your booking page automatically. There is nothing to install and no technical configuration needed.",
  },
  {
    title: "Automation With the Setup Completion",
    detail: "Only with your preferences, reminders, confirmations, and calendar updates all work automatically. The system follows only the rules you set up. No manual inputs after that.",
  },
  {
    title: "Minimal Training Needed",
    detail: "The interface is built to be straightforward for clinical staff, not software teams. Most users are comfortable with the full feature set within a day or two of regular use.",
  },
];

  return (
    <>
      {/* Add Structured Data for Physiotherapy Appointment Booking App Page */}
      <Script id="physiotherapist-appointment-booking-software-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>
     
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 hidden sm:block">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-6">
            {/* Left column - Content */}
            <div className="space-y-6">
              <Heading
                badge="Built for Physiotherapists"
                title="Scheduling Software Made for"
                highlightText="Physio Clinics"
                description="Stay on your role, forget the admin workload. Getsettime - your patients book online appointments, receive automatic reminders, and your schedule stays organized."
                headingTag="h1"
                titleClassName="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
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
                <Link href={`${REGISTER_URL}`} aria-label="Contact Us - Physiotherapist Appointment Booking Software" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">Get Started for Free</Link>
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
            <div className="relative">
                <div className="grid gap-3 animate-fade-in-scale">
                  <ScreenGate minWidth={768}>
                  <div className="overflow-hidden rounded-2xl">
                    <Image src="/physiotherapy-appointment.webp" alt="physiotherapy appointment staff working" className="h-50 w-full object-cover" width={500} height={500}/>
                  </div>
                  </ScreenGate>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-4 drop-shadow-sm space-y-3">
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-400/10 blur-2xl" aria-hidden />
                      <div className="relative flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white drop-shadow-md drop-shadow-indigo-500/20">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          </span>
                          <div>
                            <div className="text-sm font-bold leading-tight text-neutral-900">Physiotherapy</div>
                            <div className="text-xs text-neutral-500">Consultation</div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-100">
                          <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>
                          Live
                        </span>
                      </div>

                      <div className="relative grid grid-cols-3 gap-1.5">
                        {[
                          { t: '10:00 AM', booked: false },
                          { t: '11:15 AM', booked: true },
                          { t: '01:00 PM', booked: false },
                          { t: '02:30 PM', booked: false },
                          { t: '04:15 PM', booked: true },
                          { t: '06:00 PM', booked: false },
                        ].map((slot) => (
                          <span key={slot.t} className={`rounded-lg border px-1 py-1.5 text-center text-xs font-semibold transition hover:-translate-y-0.5 ${slot.booked ? 'border-red-200 bg-red-50 text-red-400 line-through decoration-red-300' : 'border-emerald-200 bg-emerald-50 text-emerald-700'}`}>{slot.t}</span>
                        ))}
                      </div>

                      <div className="relative flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-2.5">
                        <Image src="/physiotherapy-profile.webp" alt="physiotherapy profile" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" width={50} height={50}/>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-semibold text-neutral-900">Physiotherapist</div>
                          <div className="truncate text-xs text-neutral-500">Trusted &amp; experienced</div>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200">
                          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.69-1.54 1.12l-3.56-2.59a1 1 0 00-1.18 0l-3.56 2.59c-.78.57-1.84-.2-1.54-1.12l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.61c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                          4.8
                        </span>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white drop-shadow-md">
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" aria-hidden />
                      <div className="relative mb-3 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-indigo-300">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </span>
                        <div className="text-sm font-bold">Reminder flow</div>
                      </div>
                      <div className="relative space-y-0">
                        {['Instant confirmation', '24-hour reminder', '1-hour reminder', 'Treatment plan + follow-up'].map((item, i, arr) => (
                          <div key={item} className="relative flex gap-3 pb-3 last:pb-0">
                            {i < arr.length - 1 && <span className="absolute left-3 top-6 h-full w-px bg-white/15" aria-hidden />}
                            <span className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white ring-4 ring-slate-900">{i + 1}</span>
                            <div className="text-sm text-white/85">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS SECTION */}
      <section className="relative pb-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <Heading
              badge="Features"
              title="Perfect Physiotherapy Booking Software That Fits Your Expectations"
              description="Beyond physio online booking, the right appointment system integrates with your work system and handles it automatically. And you can spend more time on patient care. Solve your routine puzzles, let's look at how:"
              wrapperClassName="text-center max-w-4xl mx-auto mb-8 space-y-3"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {features.map((feature) => (
                <Card key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
              ))}
            </div>
        </div>
      </section>

      {/* WHY IT FEELS MORE PREMIUM SECTION */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden sm:block w-[500px] h-[500px] bg-indigo-200/30 blur-3xl rounded-full"></div>
        
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="relative grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            {/* Left column - Content */}
            <div className="space-y-3">
              <Heading
                badge="Why It Matters for Physiotherapists"
                title="What Real Benefits Allow Them to"
                highlightText="Focus on Practices"
                description="You or your team struggles all day to manage calls, book manually, and handle the queue, resulting in a massive workload during peak hours, poor resource allocation, and wasted time and money. Shifting to dedicated physio online booking software like Getsettime, it does so much more than you expect - from saving time to adjusting for how your clinic runs from the ground up."
              />

              <div className="mt-6 grid gap-4">
                {benefits.map((point) => (
                  <CheckListItem key={point} text={point} />
                ))}
              </div>
            </div>

            {/* Right column - Dashboard graphics */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white drop-shadow-xl">
                <ScreenGate minWidth={768}>
                {/* Window chrome */}
                <div className="relative z-10 flex items-center justify-between border-b border-neutral-200 px-3 py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 sm:h-3 sm:w-3" />
                      <div className="absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full bg-red-400 sm:h-3 sm:w-3" />
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-600 sm:h-3 sm:w-3" />
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600 sm:h-2 sm:w-2" />
                    <span className="text-[10px] font-medium text-neutral-700 sm:text-xs">LIVE</span>
                  </div>
                </div>
                </ScreenGate>

                <div className="relative space-y-4 bg-gradient-to-br from-white via-indigo-50/30 to-white p-4">
                  {/* Decorative dotted backdrop */}
                  <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(99,102,241,0.12)_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden />

                  {/* Header */}
                  <div className="relative flex items-center gap-3">
                    <div className="relative shrink-0">
                        <Image src="/physiotherapy-profile.webp" alt="physiotherapy profile" className="relative h-14 w-14 rounded-full border-4 border-white object-cover drop-shadow-md" width={64} height={64} priority />
                        <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                          <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">Physiotherapy Dashboard</span>
                      <div className="truncate text-lg font-bold text-neutral-900">Camille Dubois</div>
                      <div className="truncate text-xs text-neutral-500">Physiotherapist · Booking overview</div>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-neutral-500 ring-1 ring-neutral-100 sm:inline-flex">
                      <svg className="h-3 w-3 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      This week
                    </span>
                  </div>

                  <ScreenGate minWidth={768}>
                  {/* Hero: trend chart + utilisation ring */}
                  <div className="relative grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-5 gap-4">
                    {/* Booking trend area chart */}
                    <div className="relative overflow-hidden rounded-xl border border-neutral-100 bg-white p-4 drop-shadow-sm sm:col-span-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Bookings this week</div>
                          <div className="mt-1 flex items-baseline gap-1.5">
                            <span className="text-2xl font-black tabular-nums text-neutral-900">312</span>
                            <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
                              <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                              18%
                            </span>
                          </div>
                        </div>
                      </div>
                      <svg viewBox="0 0 240 80" preserveAspectRatio="none" className="mt-2 h-26 w-full" aria-hidden>
                        <defs>
                          <linearGradient id="physioArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,60 L40,46 L80,52 L120,30 L160,38 L200,18 L240,26 L240,80 L0,80 Z" fill="url(#physioArea)" />
                        <path d="M0,60 L40,46 L80,52 L120,30 L160,38 L200,18 L240,26" fill="none" stroke="rgb(99,102,241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="200" cy="18" r="3" fill="white" stroke="rgb(99,102,241)" strokeWidth="2" />
                      </svg>
                      <div className="mt-1 flex justify-between text-xs font-medium text-neutral-400">
                        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (<span key={d}>{d}</span>))}
                      </div>
                    </div>

                    {/* Utilisation ring */}
                    <div className="relative flex flex-col items-center justify-center rounded-xl border border-neutral-100 bg-white p-4 drop-shadow-sm sm:col-span-2">
                      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Slot use</div>
                      <div className="relative mt-2 h-30 w-30">
                        <svg viewBox="0 0 100 100" className="h-30 w-30 -rotate-90" aria-hidden>
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgb(238,242,255)" strokeWidth="12" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#physioRing)" strokeWidth="12" strokeLinecap="round" strokeDasharray="216.2 251.3" />
                          <defs>
                            <linearGradient id="physioRing" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="rgb(99,102,241)" />
                              <stop offset="100%" stopColor="rgb(139,92,246)" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-2xl font-black text-neutral-900">86%</span>
                          <span className="text-xs font-medium text-neutral-400">booked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </ScreenGate>

                  {/* Next appointment + availability */}
                  <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white drop-shadow-md drop-shadow-indigo-500/20">
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10" aria-hidden />
                      <div className="relative space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-white/80">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Next appointment
                        </div>
                        <div className="text-base font-bold">Lina Wagner · 11:00 AM</div>
                        <div className="text-xs text-white/80">Consultation · Room 2</div>
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          Check-in in 20 mins
                        </div>
                      </div>
                    </div>

                    <div className="h-full rounded-xl md:border border-neutral-100 md:bg-white md:p-4 md:drop-shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Availability</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" />Open</span>
                          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-400" />Booked</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"].map((time, i) => (
                          <span
                            key={i}
                            className={`rounded-lg border px-1 py-1.5 text-center text-xs font-semibold transition hover:-translate-y-0.5 ${
                              time === "11:00"
                                ? "border-red-200 bg-red-50 text-red-400 line-through decoration-red-300"
                                : "border-emerald-200 bg-emerald-50 text-emerald-700"
                            }`}
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service tags */}
                  <div className="relative flex flex-wrap gap-2">
                    {[
                      "Consultations",
                      "Evaluations",
                      "Treatments",
                      "Follow-up",
                      "Referrals",
                      "Reports",
                    ].map((tag, i) => (
                      <span key={i} className="rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAY-TO-DAY USE SECTION */}
      <section className="relative bg-slate-50 py-14 lg:py-20">
       <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScreenGate minWidth={768}>
            {/* LEFT COLUMN */}
            <div className="relative rounded-2xl overflow-hidden bg-white p-3 drop-shadow-xl">
              <Image src="/physiotherapy-services.webp" alt="physiotherapy services available" className="h-full w-full object-cover rounded-xl" width={500} height={500} />
            </div>
            </ScreenGate>
            {/* RIGHT COLUMN */}
            <div className="space-y-3">
              <Heading
                badge="Day-to-Day Use"
                title="Fits Smoothly, Feels Invisible,"
                highlightText="Acts as Your Team"
                description="Truly, the strength of the best physiotherapist appointment software is its ability to run the clinic smoothly with minimal effort or to support your routine practice automatically."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span key={index} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 text-xs text-neutral-700 drop-shadow-sm">
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-2">
                {[
                  {
                    label: "Reminders delivered",
                    value: 98,
                    desc: "Better attendance for scheduled Physiotherapy consultations",
                    delta: "+3%",
                    accent: "text-indigo-600",
                    ring: "ring-indigo-100",
                    glow: "bg-indigo-400/10",
                    bar: "from-indigo-500 to-violet-500",
                    iconBg: "bg-gradient-to-br from-indigo-600 to-violet-600",
                    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                  },
                  {
                    label: "No-shows reduced",
                    value: 41,
                    desc: "With confirmations and follow-up Physiotherapy instructions",
                    delta: "+5%",
                    accent: "text-emerald-600",
                    ring: "ring-emerald-100",
                    glow: "bg-emerald-400/10",
                    bar: "from-emerald-500 to-teal-500",
                    iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600",
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  },
                ].map((stat) => (
                  <div key={stat.label} className={`group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-3 sm:p-4 space-y-2 drop-shadow-sm ring-1 ${stat.ring} transition duration-300 hover:-translate-y-1 hover:drop-shadow-xl`}>
                    <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${stat.glow} blur-2xl`} aria-hidden />
                    <div className="hidden relative sm:flex items-center justify-between">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-white drop-shadow-md ${stat.iconBg}`}>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} /></svg>
                      </span>
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600">
                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                        {stat.delta}
                      </span>
                    </div>
                    <div className="relative flex items-baseline gap-1">
                      <span className={`text-4xl font-black tabular-nums ${stat.accent}`}>{stat.value}</span>
                      <span className="text-lg font-bold text-neutral-300">%</span>
                    </div>
                    <div className="relative text-sm font-semibold text-neutral-900">{stat.label}</div>
                    <div className="relative h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                      <div className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`} style={{ width: `${stat.value}%` }} />
                    </div>
                    <div className="relative text-xs text-neutral-600">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHYSIO THERAPY SCHEDULING CHALLENGES SECTION */}
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
                description="As patient demand grows, manual scheduling creates delays, front-desk strain, and inconsistent follow-up. A dedicated physiotherapy booking system keeps every appointment organized — from the first request to the final follow-up."
              />
              <div className="space-y-3">
                {[
                  "Delayed responses weaken trust; patients look to move on.",
                  "Uneven appointment scheduling leads to idle slots and long wait times",
                  "Chasing patients by phone or Email is not time-consuming, but also impossible every time.",
                  "Booking requests via Email, phone, and walk-ins creates confusion across your team and a bad experience for patients.",
                ].map((item) => (
                  <CheckListItem key={item} text={item} />
                ))}
              </div>

              <div className="relative">
                <h3 className="text-lg font-bold text-neutral-900">Supports Every Type of Physiotherapy Appointment</h3>
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
                  <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Set Up Your Physiotherapy Booking System - Physiotherapist Appointment Booking Software" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-white drop-shadow-md transition hover:bg-indigo-700">Sign Up for Free</Link>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative rounded-xl border border-white/70 bg-white/90 p-4 drop-shadow-xl">
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
                  <Image src="/physiotherapy-realty.webp" alt="physiotherapy appointment schedule interface" width={700} height={700} className="h-full w-full object-cover" />
                  <div className="absolute left-2 top-2 rounded-md bg-indigo-600/90 px-2 py-1 text-xs uppercase tracking-widest text-white">Smart slots</div>
                </div>
              </div>
              </ScreenGate>

              <div className="md:mt-4 flex flex-wrap items-center justify-between">
                <div className="font-semibold text-neutral-900">Physiotherapy Operations Board</div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Live Overview</span>
              </div>
              <div className="mt-4 grid gap-3 grid-cols-2">
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Consultation</div>
                  <div className="mt-1 text-indigo-900">12 Slots · 7 Booked</div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Evaluation</div>
                  <div className="mt-1 text-indigo-900">8 Slots · 5 Booked</div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Treatment</div>
                  <div className="mt-1 text-indigo-900">9 Slots · 6 Booked</div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                  <div className="font-semibold text-indigo-500">Physiotherapy Follow-up</div>
                  <div className="mt-1 text-indigo-900">11 Slots · 5 Booked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHYSIO THERAPY GROWTH ROADMAP SECTION */}
      <section className="relative overflow-hidden md:bg-gradient-to-br from-indigo-50 via-white to-violet-100 py-14 sm:py-20">
          <div className="pointer-events-none absolute hidden sm:block inset-0">
              <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
              <div className="absolute right-8 bottom-16 h-44 w-44 rounded-full bg-violet-400/25 blur-3xl" />
          </div>
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
                                <span className="text-sm font-bold">0{i + 1}</span>
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
              <div className="relative">
                  <div className="rounded-xl bg-white p-3 drop-shadow-xl">
                      <Image src="/physiotherapy-grow.webp" alt="Physiotherapy growth roadmap" width={600} height={500} className="w-full h-full rounded-xl object-cover" />
                  </div>
                  <div className="absolute right-0 -top-10 hidden lg:block w-60 rounded-xl bg-white p-4 drop-shadow-md animate-float">
                      <div className="text-sm uppercase text-neutral-400">Physiotherapy growth</div>
                      <div className="font-bold text-neutral-900">30 days to grow your Physiotherapy</div>
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
                  <div className="pointer-events-none absolute left-0 -bottom-10 hidden lg:block rounded-xl border border-violet-100 bg-white p-4 drop-shadow-xl animate-float">
                      <div className="text-sm uppercase text-neutral-500">New booking</div>
                      <div className="mt-1 font-bold text-neutral-900">Lucia Morales · 11:30 AM</div>
                      <div className="text-neutral-600">Synced to Physiotherapy operations board</div>
                  </div>
              </div>
              </ScreenGate>
          </div>
      </section>

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
                  title="Questions physiotherapists ask before getting started"
                  description="Clear answers for physiotherapists that want to modernize Physiotherapy consultation booking without adding extra admin work."
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
          badge="Built for Physiotherapy Clinics"
          businessType="Physiotherapy Clinic"
      />
    </>
  );
}
