import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Card from "@/app/component/Card";
import { APP_NAME, BASE_URL, contactInfo, REGISTER_GOOGLE_URL, REGISTER_URL  } from "@/lib/config";
import { FaqSection } from "@/app/component/FaqSection";
import Heading from "@/app/component/Heading";
import { CheckListItem } from "@/app/component/CheckList";
import SolutionCtaSection from "@/app/component/SolutionCtaSection";
import ScreenGate from "@/app/component/ScreenGate";

const pageUrl = `${BASE_URL}/solutions/doctor-appointment-scheduling-software`;

export const metadata: Metadata = {
  title: `Appointment Scheduling Software for Doctors`,
  description: `GetSetTime is an automated scheduling system that lets patients book online, sends automatic reminders, and keeps your day organized — no tech skills needed.`,
  keywords: [ "doctor appointment booking app", "clinic appointment booking app", "online appointment booking", "calendar management system", " scheduling tool", "appointment management app"],
  alternates: {
    canonical: `${pageUrl}`,
  },
  openGraph: {
    title: `Appointment Scheduling Software for Doctors`,
    description: `GetSetTime is an automated scheduling system that lets patients book online, sends automatic reminders, and keeps your day organized — no tech skills needed.`,
    url: `${pageUrl}`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Appointment Scheduling Software for Doctors`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Appointment Scheduling Software for Doctors`,
    description: `GetSetTime is an automated scheduling system that lets patients book online, sends automatic reminders, and keeps your day organized — no tech skills needed.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const needsChecklist = [
  {
    title: "Simple Booking Flow",
    desc: "Patients find a booking form, select the department, choose the event type, view real-time availability, and book a slot.",
    tag: "Zero phone calls needed",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>,
  },
  {
    title: "WhatsApp & SMS Reminders",
    desc: "Automated reminders are sent to patients before their appointment — on WhatsApp and SMS, the channels Indians actually use.",
    tag: "60% fewer no-shows",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>,
  },
  {
    title: "Self-Organised Calendar",
    desc: "Always find an updated calendar; it lets you analyze and filter your appointments daily and weekly without any confusion.",
    tag: "No more overbooking",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/></svg>,
  },
  {
    title: "Availability Control",
    desc: "Your schedule is in your hands. Set up your working hours, create booking-based event durations, and add break time,",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 14v2.2l1.6 1"/><path d="M16 2v4"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M3 10h5"/><path d="M8 2v4"/><circle cx="16" cy="16" r="6"/></svg>,
  },
  {
    title: "Patient Records",
    desc: "See each patient's past visits at a glance, including the visit date, departments, and the concerned doctor.",
    tag: "Better, faster consultations",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7Z"/><path d="M13 3v5a1 1 0 0 0 1 1h5"/></svg>,
  },
  {
    title: "Cross-device support",
    desc: "You can access your workspace from any device - phone, tablet, or desktop. You can even allow your receptionist to access it with a defined access role.",
    tag: "Manage anywhere",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>,
  },
];

const features = [
  {
    title: "Phone Ringing Continuously",
    description: "After hours of phone calls, you miss appointments, double-book, and leave patients feeling discontent. You can automate your entire booking process and save hours to use in patient care.",
    icon: <svg fill="#4f39f6" width="40px" height="40px" viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path></g></svg>,
  },
  {
    title: "Don't Show Up",
    description: "No-shows waste your time and resources. You could've filled every empty slot and attended to other patients if you had sent a reminder to confirm the visit.",
    icon: <svg fill="#4f39f6" version="1.1" id="Layer_1" width="40px" height="40px" viewBox="0 0 256 205" enableBackground="new 0 0 256 205" stroke="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M51.821,30.057c0-15.49,12.392-27.982,27.981-27.982c15.49,0,27.981,12.492,27.981,27.982 c-0.1,15.59-12.592,27.981-27.981,27.981C64.313,58.038,51.821,45.547,51.821,30.057z M206.165,150.068h-50.771v-45.37 c0-22.103-19.315-39.969-41.049-39.969H46.29c-23.861,0-44.301,20.676-44.29,41.049v83.178C1.972,198.175,8.483,202.988,14.963,203 c6.496,0.012,12.963-4.802,12.963-14.043v-81.018h8.642v94.981h84.259v-94.981h8.642l0.088,54.411 c-0.058,9.429,5.771,13.445,11.795,13.644h64.814C223.841,175.994,223.841,150.068,206.165,150.068z M249.287,32.14 c0,18.522-6.339,35.503-16.776,45.58c10.437,10.079,16.776,27.062,16.776,45.581v3.717H254v11.367h-85.337v-11.367h4.714v-3.717 c0-18.519,6.338-35.503,16.776-45.581c-10.438-10.077-16.776-27.061-16.776-45.58v-2.95h-4.714V17.823H254V29.19h-4.713V32.14z M241.747,35.861h-60.831c0.865,16.49,7.42,31.486,17.188,38.894l3.912,2.965l-3.912,2.965c-9.77,7.409-16.323,22.406-17.188,38.895 h60.834c-0.866-16.49-7.421-31.488-17.189-38.895l-3.914-2.965l3.914-2.965C234.328,67.347,240.884,52.351,241.747,35.861z M200.768,70.686l4.012,2.25c0,0,5.644,7.402,5.644,24.666c0,0,0.049,0.097,0.132,0.241c-4.583,0.796-7.85,3.663-7.85,3.663 c-6.868,5.209-12.285,9.728-12.617,16.043h44.651c-0.332-6.316-3.095-7.342-12.618-16.043c-2.699-2.465-5.423-3.529-7.943-3.798 c0.006-0.808,0.193-19.136,3.704-24.15c1.697-1.701,2.968-2.25,2.968-2.25c7.422-5.624,12.401-17.013,13.054-29.534h-45.146 C189.413,54.295,193.349,65.058,200.768,70.686z"></path> </g></svg>,
  },
  {
    title: "Hassle of Manual Records",
    description: "How much can you manage manually: a patient's record, treatment, lab reports, and next visit date? Then remind them by phone about the appointment; it adds unnecessary stress to your day.",
    icon: <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#4f39f6" stroke="#4f39f6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M15.6111 1.5837C17.2678 1.34703 18.75 2.63255 18.75 4.30606V5.68256C19.9395 6.31131 20.75 7.56102 20.75 9.00004V19C20.75 21.0711 19.0711 22.75 17 22.75H7C4.92893 22.75 3.25 21.0711 3.25 19V5.00004C3.25 4.99074 3.25017 4.98148 3.2505 4.97227C3.25017 4.95788 3.25 4.94344 3.25 4.92897C3.25 4.02272 3.91638 3.25437 4.81353 3.12621L15.6111 1.5837ZM4.75 6.75004V19C4.75 20.2427 5.75736 21.25 7 21.25H17C18.2426 21.25 19.25 20.2427 19.25 19V9.00004C19.25 7.7574 18.2426 6.75004 17 6.75004H4.75ZM5.07107 5.25004H17.25V4.30606C17.25 3.54537 16.5763 2.96104 15.8232 3.06862L5.02566 4.61113C4.86749 4.63373 4.75 4.76919 4.75 4.92897C4.75 5.10629 4.89375 5.25004 5.07107 5.25004ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4143 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4143 7.25 12ZM7.25 15.5C7.25 15.0858 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 15.0858 14.25 15.5C14.25 15.9143 13.9142 16.25 13.5 16.25H8C7.58579 16.25 7.25 15.9143 7.25 15.5Z"></path> </g></svg>,
  },
  {
    title: "Long Waiting Queue",
    description: "With all your effort, you still find your waiting room loaded during peak hours. It hurts patient satisfaction, especially for those who booked a slot via phone and expected a better experience.",
    icon: <svg fill="#4f39f6" height="40px" width="40px" version="1.1" id="Layer_1" viewBox="0 0 128 128"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle cx="39.2" cy="17.9" r="12.6"></circle> <path d="M78.6,70.2l-21.2,0l-5.7-28.4c-3.4-14.8-24.2-10.4-22,4.1l6.6,33c1,5,5,9.3,11.3,9.3h27.1c0,0,0,21.2,0,30 c0,9.5,13.3,9.5,13.3,0.2V79.7C88,75.1,84.8,70.2,78.6,70.2z"></path> <path d="M64.7,90.6H46.9c-6.4,0-11.8-3.8-13.4-11l-5.8-28.2c-1.4-6.9-11.1-4.6-9.8,2.1L24,82.9c2.5,11,11.9,18.1,21.4,18.1h19.5 C71.7,101,71.7,90.6,64.7,90.6z"></path> <path d="M91.1,3.9c-11.2,0-20.3,9.1-20.3,20.3c0,11.2,9.1,20.3,20.3,20.3c11.2,0,20.3-9.1,20.3-20.3C111.4,13.1,102.3,3.9,91.1,3.9 z M91.1,40.7c-9.1,0-16.5-7.4-16.5-16.5c0-9.1,7.4-16.5,16.5-16.5c9.1,0,16.5,7.4,16.5,16.5C107.5,33.3,100.1,40.7,91.1,40.7z"></path> <path d="M99.5,20l-8,3.6v-9.4c0-1.5-2.2-1.4-2.2,0l0,11.3c0,0.8,0.9,1.5,1.7,1l9.4-4.5C101.7,21.3,100.9,19.3,99.5,20z"></path> </g> </g></svg>,
  },
];

export default function DoctorAppointmentSchedulingSoftware() {
  
  const faqItems = [
    {
      title: "Is GetSetTime easy to use for doctors with no tech background?",
      content: "Absolutely. GetSetTime is built keeping busy doctors in mind — no technical knowledge required. Setup takes under 10 minutes, and most doctors start managing bookings on day one. If you can use WhatsApp, you can use GetSetTime.",
    },
    {
      title: "Does it send WhatsApp appointment reminders to patients?",
      content: "Yes. GetSetTime sends automated appointment reminders via both SMS and WhatsApp — the two channels patients in India actually check. This is one of the most effective ways to reduce no-shows at your clinic.",
    },
    {
      title: "Can solo practitioners or small clinics use this doctor booking app?",
      content: "Yes — GetSetTime is ideal for individual doctors, small single-specialty clinics, and multi-doctor setups alike. Plans are flexible and scale with your practice. You only pay for what you need.",
    },
    {
      title: "How much does GetSetTime cost?",
      content: "GetSetTime offers a free trial so you can try all features before committing. Paid plans are affordable and designed with Indian clinics in mind. Visit our pricing page for the latest plan details and pricing in ₹.",
    },
    {
      title: "Can patients book appointments from their mobile phones?",
      content: "Yes. Patients can book appointments from any device — smartphone, tablet, or desktop. Your booking link works on mobile browsers, so patients don't need to install any app. They simply tap the link and pick a slot.",
    },
    {
      title: "How does it prevent double-bookings?",
      content: "GetSetTime's smart calendar automatically blocks a time slot as soon as it's confirmed. This prevents two patients from booking the same slot simultaneously—completely eliminating double-booking errors that can occur when managing via phone and paper systems.",
    },
    {
      title: "Is my patient data secure with this doctor appointment system?",
      content: "Yes. GetSetTime follows industry-standard security practices to protect all patient information and appointment records. Your data is encrypted and never shared with third parties.",
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
        "name": `Appointment Scheduling Software for Doctors`,
        "description": "GetSetTime is an automated scheduling system that lets patients book online, sends automatic reminders, and keeps your day organized — no tech skills needed.",
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
            "name": "Doctor Appointment Booking App",
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

  const DoctorAppointmentBookingAppPoints = [
    {
      title: "Personalised Dashboard",
      desc: "Where doctors can analyse, track, and control the routine tasks: set availability, check appointments, review no-shows, etc.",
    },
    {
      title: "Alerts and Reminders Management",
      desc: "Make your own rules when the system notifies you, and send a reminder to your clients via email or WhatsApp.",
    },
    {
      title: "Real-time Calendar Sync",
      desc: "Once you set your availability and create events, your calendar automatically organises and updates itself to reflect upcoming bookings.",
    },
    {
      title: "Cloud-Based Access",
      desc: "Easy-to-accessible. Anytime, anywhere, you can access it on your device",
    },
  ];

  return (
    <>  
    {/* Add Structured Data for Doctor Appointment Scheduling App Page */}
    <Script id="doctor-appointment-scheduling-software-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2),}}/>

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
              badge="Built for Doctors &amp; Clinics"
              title="The Automated Doctor Appointment Scheduling System"
              highlightText="That Works While You Treat Patients"
              description="Stop managing bookings over phone calls. GetSetTime lets patients book online, sends automatic reminders, and keeps your day organised — no tech skills needed."
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
              <Link href={`${REGISTER_URL}`} aria-label="Contact Us - Doctor Appointment Scheduling Software" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">Get Started for Free</Link>
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
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white drop-shadow-xl animate-fade-in-scale">
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

              <div className="bg-gradient-to-br from-white via-indigo-50/30 to-white p-3">
                {/* Doctor header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-base font-bold text-white drop-shadow-md drop-shadow-indigo-500/20">
                    MJ
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-lg font-bold text-neutral-900">Dr. Michael Johnson</div>
                    <div className="truncate text-xs text-neutral-500">Today&apos;s appointments · General Clinic</div>
                  </div>
                  <div className="hidden items-center gap-2 text-xs font-medium text-neutral-500 sm:flex">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" />Open</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-400" />Booked</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-400" />Pending</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { time: "09:30 AM", status: "Booked" },
                    { time: "10:00 AM", status: "Booked" },
                    { time: "10:30 AM", status: "Selected" },
                    { time: "11:00 AM", status: "Available" },
                    { time: "11:30 AM", status: "Available" },
                    { time: "12:00 PM", status: "Pending" },
                    { time: "12:30 PM", status: "Available" },
                    { time: "01:00 PM", status: "Available" },
                    { time: "04:00 PM", status: "Available" },
                    { time: "04:30 PM", status: "Booked" },
                    { time: "05:00 PM", status: "Available" },
                    { time: "05:30 PM", status: "Available" },
                  ].map((slot) => (
                    <div
                      key={slot.time}
                      className={`rounded-lg border px-2 py-2 text-center transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-md ${
                        slot.status === "Booked"
                          ? "border-red-200 bg-red-50 text-red-500 line-through decoration-red-300"
                          : slot.status === "Selected"
                          ? "border-indigo-600 bg-indigo-600 text-white drop-shadow-md drop-shadow-indigo-500/25"
                          : slot.status === "Pending"
                          ? "border-amber-200 bg-amber-50 text-amber-700"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      <div className="text-xs font-bold">{slot.time}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="rounded-xl border border-indigo-400/30 bg-indigo-600 p-4 text-white drop-shadow-sm sm:border-neutral-100 sm:bg-white sm:text-neutral-900">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="text-xs font-semibold uppercase tracking-wide text-indigo-100 sm:text-neutral-500">Next patient</div>
                      <div className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Confirmed
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-sm font-bold text-white sm:bg-gradient-to-br sm:from-indigo-100 sm:to-violet-100 sm:text-indigo-700">CM</div>
                      <div className="min-w-0">
                        <div className="truncate font-bold text-white sm:text-neutral-900">Christopher Moore</div>
                        <div className="truncate text-xs text-indigo-100 sm:text-neutral-500">Today · 10:30 AM · Follow-up visit</div>
                      </div>
                    </div>
                  </div>
                  
                  <ScreenGate minWidth={640}>
                  <div className="relative overflow-hidden rounded-xl bg-neutral-900 p-4 text-white drop-shadow-md">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-500/20" />
                    <div className="relative">
                      <div className="text-xs font-medium text-neutral-400">Today at a glance</div>
                      <div className="mt-2 flex items-end gap-2">
                        <div className="text-3xl font-black">86%</div>
                        <div className="pb-1 text-xs text-neutral-400">slot utilisation</div>
                      </div>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-700">
                        <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                        <span>9 booked</span>
                        <span>3 open</span>
                      </div>
                    </div>
                  </div>
                  </ScreenGate>

                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </span>
                  <div className="text-sm font-medium text-indigo-700">
                    WhatsApp reminders sent to <span className="font-bold">8 patients</span> for tomorrow&apos;s appointments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Real Problem Section */}
    <section className="relative pb-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <Heading
          badge="The Real Problem"
          title="Running a Clinic Without a Booking System Is Costing You More Than You Think"
          description="Still, many healthcare practitioners, even in metro cities, rely on traditional methods for managing appointments. Then, what? Every day, the same routine, same headaches that can be overcome. They experience:"
          wrapperClassName="text-center max-w-4xl mx-auto mb-8 space-y-3"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center gap-3">
          {features.map((feature) => (
            <Card key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>

    {/* Solution Section */}
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] hidden sm:block h-[500px] bg-indigo-200/30 blur-3xl rounded-full" />
      
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center relative">
          {/* LEFT */}
          <div className="space-y-3">
            <Heading
              badge="The Solution"
              title="A Tailored Scheduling Software for Solo Practitioners to"
              highlightText="Handle Routine Tasks Effortlessly"
              description="One centralised system where doctors can track real-time performance and set repetitive tasks for automation."
            />
            <div className="space-y-3">
              {DoctorAppointmentBookingAppPoints.map((point, i) => (
                <div key={i} className="group flex gap-2 sm:gap-4 p-4 rounded-xl bg-white drop-shadow-sm transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl">
                  <div className="flex h-9 w-9 min-w-9 min-h-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white drop-shadow-lg drop-shadow-indigo-500/25"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg></div>
                  <div>
                    <div className="font-medium text-neutral-900">{point.title}</div>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - EXACT REF UI */}
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

              <div className="bg-gradient-to-br from-white via-indigo-50/30 to-white p-3">
                {/* Doctor header */}
                <div className="flex items-center gap-4 rounded-xl border border-neutral-100 bg-white p-4 drop-shadow-sm">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-indigo-300/40 blur-md" />
                    <Image
                      src="/doctor-profile.webp"
                      alt="Doctor profile"
                      className="relative h-16 w-16 rounded-full border-4 border-white object-cover drop-shadow-md"
                      width={64}
                      height={64}
                      priority
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                      <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">Clinic Dashboard</span>
                    <div className="truncate text-lg font-bold text-neutral-900">Dr. Emma Williams</div>
                    <div className="truncate text-xs text-neutral-500">MBBS, MD • 10+ years experience</div>
                  </div>

                  <div className="hidden sm:flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-3 py-2 drop-shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-50 text-lg">
                      ✅
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Today’s bookings</div>
                      <div className="text-md font-semibold text-slate-900">18 Confirmed</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-4">
                    {/* Next appointment */}
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white drop-shadow-md drop-shadow-indigo-500/20">
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10" />
                      <div className="relative">
                        <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-white/80">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Next appointment
                        </div>
                        <div className="mt-1.5 text-base font-bold">Lucas Garcia • 10:30 AM</div>
                        <div className="text-xs text-white/80">Routine consultation • Room 2</div>
                      </div>
                    </div>
                    <ScreenGate minWidth={768}>
                    {/* Stat tiles */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-3">
                      <div className="rounded-xl border border-neutral-100 bg-white p-3 drop-shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.69-1.54 1.12l-3.56-2.59a1 1 0 00-1.18 0l-3.56 2.59c-.78.57-1.84-.2-1.54-1.12l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.61c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                          </span>
                          <div className="text-neutral-500">Patient rating</div>
                        </div>
                        <div className="mt-1.5 text-xl font-bold text-neutral-900">4.9<span className="text-sm font-medium text-neutral-400">/5</span></div>
                      </div>
                      <div className="rounded-xl border border-neutral-100 bg-white p-3 drop-shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                          </span>
                          <div className="text-neutral-500">Reminders sent</div>
                        </div>
                        <div className="mt-1.5 text-xl font-bold text-neutral-900">126<span className="text-sm font-medium text-neutral-400"> / wk</span></div>
                      </div>
                    </div>
                    </ScreenGate>

                    {/* Weekly bookings mini chart */}
                    <div className="rounded-xl hidden md:block border border-neutral-100 bg-white p-4 drop-shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-neutral-700">This week&apos;s bookings</div>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                          <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                          18%
                        </span>
                      </div>

                      <div className="mt-3 flex h-16 items-end justify-between gap-1.5">
                        {[
                          { day: "M", h: "h-6" },
                          { day: "T", h: "h-9" },
                          { day: "W", h: "h-7" },
                          { day: "T", h: "h-12" },
                          { day: "F", h: "h-16", active: true },
                          { day: "S", h: "h-8" },
                          { day: "S", h: "h-4" },
                        ].map((bar, i) => (
                          <div key={i} className="flex flex-1 flex-col items-center gap-1">
                            <div className={`w-full rounded-md ${bar.h} ${bar.active ? "bg-indigo-600" : "bg-indigo-200"}`} />
                            <span className="text-[9px] font-medium text-neutral-400">{bar.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl space-y-3 bg-white md:p-4 md:drop-shadow-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-bold text-neutral-900">Availability</div>
                        <div className="text-neutral-500">Manage time slots beautifully in real time</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-3 gap-3">
                      {[
                        { label: "09:00 AM", status: "available" },
                        { label: "09:30 AM", status: "available" },
                        { label: "10:00 AM", status: "available" },
                        { label: "10:30 AM", status: "available" },
                        { label: "11:00 AM", status: "booked" },
                        { label: "11:30 AM", status: "available" },
                        { label: "12:00 PM", status: "available" },
                        { label: "04:00 PM", status: "available" },
                        { label: "04:30 PM", status: "available" },
                      ].map((slot) => (
                        <div key={slot.label} className={`rounded-lg border px-2 py-2 text-xs sm:text-sm text-center transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-md ${
                            slot.status === "available"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : slot.status === "booked"
                              ? "border-red-200 bg-red-50 text-red-600 line-through"
                              : "border-indigo-100 bg-indigo-50 text-indigo-700"
                          }`}
                        >
                          {slot.label}
                        </div>
                      ))}
                    </div>

                    <div className="relative overflow-hidden rounded-xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-indigo-50/30 p-4">
                      <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-emerald-400/15 blur-2xl" aria-hidden />
                      <div className="relative flex gap-3 items-start flex-row flex-wrap justify-between">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white drop-shadow-sm">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </span>
                          <div className="min-w-0">
                            <div className="text-xs font-medium text-neutral-500">Booking link status</div>
                            <div className="font-bold text-neutral-900">Shared across WhatsApp & website</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200">WhatsApp</span>
                          <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200">Website</span>
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">Active</span>
                        </div>
                      </div>
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
    <section className="relative pb-14 sm:py-20 sm:bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-72 h-72 hidden sm:block bg-indigo-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 hidden sm:block bg-purple-300/30 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <Heading
          badge="Features"
          title="Everything a Doctor Needs —"
          highlightText="Nothing You Don’t"
          description="Every feature is designed to simplify your workflow and improve patient experience."
          wrapperClassName="text-center max-w-4xl mx-auto mb-8 space-y-3"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {needsChecklist.map((item, i) => (
            <Card key={item.title} title={item.title} description={item.desc} icon={item.icon} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />
          ))}
        </div>
      </div>
    </section>

    {/* SPEED UP YOUR PRACTICE SECTION */}
    <section className="relative overflow-hidden py-14 sm:py-20 bg-[linear-gradient(180deg,#eef2ff_0%,#e0f2fe_55%,#f8fafc_100%)]">
      <div className="absolute inset-0 hidden sm:block bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]" />
      <div className="absolute -left-16 top-20 h-48 w-48 hidden sm:block rounded-full bg-emrald-400/25 blur-3xl" />
      <div className="absolute -right-14 bottom-16 h-56 w-56 hidden sm:block rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-24 w-[60%] -translate-x-1/2 hidden sm:block rounded-b-[48px] bg-white/35 blur-2xl" />
      
      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left */}
          <div className="space-y-4">
            <Heading 
              badge="Speed Up Your Practice" 
              title="Grow Faster with" 
              highlightText="GetSetTime"
              description="A smooth booking engine eliminates the risk of missed appointments, and reminder automation reduces no-shows. Booking software also helps doctors attract new patients, retain follow-up cases, and run predictable clinic days." 
            />

            <div className="space-y-3">
              {[
                "Delayed patient responses reduce trust before the visit.",
                "Uneven slot allocation causes long waits and idle hours.",
                "Manual reminders increase missed appointments.",
                "Scattered requests from calls and chat apps create confusion.",
              ].map((point) => (
                <CheckListItem key={point} text={point} />
              ))}
            </div>

            <div className="relative">
              <h3 className="text-lg font-bold text-neutral-900">Built for every type of medical practice</h3>
              <div className="mt-2 flex flex-wrap gap-3">
                {[
                  "Pediatrics",
                  "Women's Health",
                  "Primary Care",
                  "Dermatology",
                  "ENT Care",
                  "Orthopedics",
                  "Mental Wellness",
                  "Physiotherapy",
                ].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1 text-xs text-neutral-700 drop-shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M20 6 9 17l-5-5"/></svg> {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <Link href={`${REGISTER_URL}`} target="_blank" aria-label="Start your clinic setup - Doctor Appointment Scheduling Software" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-white drop-shadow-md transition hover:bg-indigo-700">Sign Up for Free</Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative rounded-xl border border-white/70 bg-white/90 p-4 drop-shadow-2xl backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="relative overflow-hidden hidden sm:block rounded-2xl border border-neutral-200 bg-white p-3 drop-shadow-sm">
                <div className="flex items-center gap-2 font-semibold text-neutral-700">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  AVAILABLE TIMES
                </div>
                <div className="mt-3 relative">
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {[
                      "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
                      "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                      "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
                    ].map((time) => (
                      <button key={time} type="button"
                        className={`rounded-xl border px-2 py-2 text-xs xl:text-sm font-medium transition-all duration-200 ${
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
              <ScreenGate minWidth={640}>
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                <Image
                  src="/doctor-realty.webp"
                  alt="Medical appointment schedule interface"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-2 top-2 rounded-md bg-indigo-600/90 px-2 py-1 text-xs uppercase tracking-widest text-white">
                  Smart slots
                </div>
              </div>
              </ScreenGate>
            </div>
            <div className="sm:mt-4 flex flex-wrap items-center justify-between">
              <div className="font-semibold text-neutral-900">Clinic Operations Board</div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Live Overview</span>
            </div>
            <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">General Consultation</div>
                <div className="mt-1 text-indigo-900">12 Slots · 9 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Follow-Up Cases</div>
                <div className="mt-1 text-indigo-900">8 Slots · 6 Booked</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Reminder Completion</div>
                <div className="mt-1 text-indigo-900">94% Delivered</div>
              </div>
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3">
                <div className="font-semibold text-indigo-500">Average Wait Time</div>
                <div className="mt-1 text-indigo-900">11 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* DOCTOR BUSINESS GROWTH SECTION */}
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white to-indigo-50/40 overflow-hidden"> 
      <div className="absolute -left-10 top-10 h-52 w-52 hidden sm:block rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 hidden sm:block rounded-full bg-emerald-200/30 blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* left: Content */}
        <div className="space-y-3">
          <Heading
            badge="Grow Your Practice"
            title="Doctors grow their own business faster with GetSetTime"
            description="Turn your booking link into a reliable growth engine. GetSetTime helps doctors attract new patients, retain follow-up cases, and run predictable clinic days without increasing front-desk stress."
          />
          <div className="space-y-3">
            {[
              "Reach more patients through shareable booking links on Google and WhatsApp",
              "Convert first-time visitors with instant confirmations and clean booking flow",
              "Improve repeat visits with automated reminders and follow-up nudges",
              "Track clinic growth with clear appointment and utilisation insights",
            ].map((point, index) => (
              <CheckListItem key={point} text={point} />
            ))}
          </div>
        </div>
        <ScreenGate minWidth={768}>
        {/* right: Image */}
        <div className="relative">
          <div className="rounded-xl border border-white bg-white p-3 drop-shadow-xl">
            <Image
              src="/grow-doctor-2.webp"
              alt="Doctor reviewing clinic growth on portal dashboard"
              width={600}
              height={500}
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-4 hidden lg:block rounded-xl border border-emerald-100 bg-white px-4 py-3 drop-shadow-lg space-y-2 animate-float">
            <div className="text-sm uppercase text-neutral-500">Monthly growth</div>
            <div className="text-lg font-bold"><span className="text-emerald-600 text-3xl">+38%</span> appointments</div>
          </div>
        </div>
        </ScreenGate>
      </div>
      
    </section>

    {/* FREQUENTLY ASKED QUESTIONS SECTION */}
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-12 sm:py-20">
        
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid container px-4 sm:px-6 lg:px-8 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* left: Title */}
          <div className="space-y-3">
            <Heading
              badge="Frequently Asked Questions"
              title="Questions Doctors Ask Before Getting Started"
              description="GetSetTime answers the most common questions doctors have before switching to a smarter appointment scheduling system."
            />
            <ScreenGate minWidth={768}>
            <div className="grid gap-4 sm:grid-cols-2 mt-6 grid">
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
      badge="Built for Clinics & Healthcare"
      businessType="Clinic / Healthcare"
    />
    </>
  );
}