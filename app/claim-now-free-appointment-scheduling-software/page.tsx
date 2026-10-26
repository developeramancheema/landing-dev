import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo, REGISTER_URL } from "@/lib/config";
import ClaimFreeBookingButton from "../component/ClaimFreeBookingButton";
import FreeBookingSetupForm from "../component/FreeBookingSetupForm";
import FreeBookingPhoneMockup from "../component/FreeBookingPhoneMockup";
import Heading from "../component/Heading";
import Card from "../component/Card";
import { FaqSection } from "../component/FaqSection";
import ScreenGate from "@/app/component/ScreenGate";

const pageUrl = `${BASE_URL}/claim-now-free-appointment-scheduling-software`;

export const metadata: Metadata = {
  title: `Free Booking Page Setup in 24 Hours | ${APP_NAME}`,
  description: `Join the ${APP_NAME} Free Booking Page Challenge. We'll set up a professional online booking page for your business in 24 hours — free. Limited to the first 100 businesses.`,
  keywords: [
    "free booking page",
    "free online booking page",
    "appointment booking page setup",
    "free scheduling software",
    "online appointment booking",
    "booking page for salons",
    "booking page for clinics",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `Free Booking Page Setup in 24 Hours | ${APP_NAME}`,
    description: `Join the ${APP_NAME} Free Booking Page Challenge. We'll set up a professional online booking page for your business in 24 hours — free. Limited to the first 100 businesses.`,
    url: pageUrl,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en",
    images: [
      {
        url: `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `Free Booking Page Setup in 24 Hours | ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free Booking Page Setup in 24 Hours | ${APP_NAME}`,
    description: `Join the ${APP_NAME} Free Booking Page Challenge. We'll set up a professional online booking page for your business in 24 hours — free. Limited to the first 100 businesses.`,
    images: [`${BASE_URL}${contactInfo.DEFAULT_IMAGE}`],
  },
};

const features = [  
  "More Bookings",
  "Fewer No-Shows",
  "Happier Customers",
  "Save Time",
  "Look More Professional",
];

const trustItems = [
  { icon: "card", label: "No Credit Card" },
  { icon: "fees", label: "No Hidden Fees" },
  { icon: "clock", label: "Setup in 24 Hours" },
  { icon: "cancel", label: "Cancel Anytime" },
];

const partnerLogos = [
  { logo: "/salon-studio-logo.webp"},
  { logo: "/smile-care-logo.webp"},
  { logo: "/fitnation-logo.webp"},
  { logo: "/bright-mind-logo.webp"},
  { logo: "/home-fix-logo.webp"},
  { logo: "/beauty-lounge-logo.webp"},
];

const stats = [
  {
    value: "500+",
    label: "Businesses Trust Us",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    value: "50,000+",
    label: "Appointments Booked Daily",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    value: "95%",
    label: "Customer Satisfaction",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m7 14 4-4 4 4 5-6" />
      </svg>
    ),
  },
  {
    value: "24 Hrs",
    label: "Setup Time",
    icon: (
      <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const businesses = [
  {
    title: "Salons & Spas",
    icon: '<svg viewBox="0 0 18 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-12 h-12"><path d="M5.42 9.42 8 12"/><circle cx="4" cy="8" r="2"/><path d="m14 6-8.58 8.58"/><circle cx="4" cy="16" r="2"/><path d="M10.8 14.8 14 18"/></svg>',
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    title: "Clinics & Doctors",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Consultants & Coaches",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Agencies & Freelancers",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    title: "Fitness Trainers",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>',
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Home Services",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    title: "Therapists & Counselors",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5"/><path d="m16 20-1-2"/><path d="m20 16-2-1"/><path d="m4 8 2 1"/><path d="m8 4 1 2"/><path d="M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z"/></svg>',
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Photographers",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>',
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Any Business\nThat Takes Appointments",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="w-10 h-10"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>',
    color: "text-indigo-500 ",
    bg: "bg-indigo-50",
  },
];

const getFreeFeatures = [
  "A branded booking page for your business",
  "Service and staff setup",
  "Booking form fields",
  "Customer confirmation email",
  "Google Calendar setup guidance",
  "Google Meet link setup (if needed)",
  "Reschedule and cancellation flow",
  "Mobile-friendly booking experience",
  "Basic training on how to use it",
];

const steps = [
  {
    step: "Step 1",
    title: "Apply for the Challenge",
    description: "Fill out the simple form on this page.",
    icon: '<svg fill="#4f39f6" class="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,4a1,1,0,0,0-1-1H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V3H4A1,1,0,0,0,3,4V22a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1ZM9,3h6V5H9ZM19,21H5V5H7V6A1,1,0,0,0,8,7h8a1,1,0,0,0,1-1V5h2Zm-6-3a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,18Zm4-4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h8A1,1,0,0,1,17,14Zm0-4a1,1,0,0,1-1,1H8A1,1,0,0,1,8,9h8A1,1,0,0,1,17,10Z"></path></g></svg>',
    color: "text-indigo-600",
  },
  {
    step: "Step 2",
    title: "Share Your Details",
    description:"We'll understand your business and requirements.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-10 sm:h-10"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    color: "text-indigo-600",
  },
  {
    step: "Step 3",
    title: "We Create Your Booking Page",
    description: "Our team sets it up in 24 hours.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-10 sm:h-10"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
    color: "text-indigo-600",
  },
  {
    step: "Step 4",
    title: "You Test It",
    description: "Try it with your real customers.",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-10 sm:h-10"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>',
    color: "text-indigo-600",
  },
  {
    step: "Step 5",
    title: "Keep & Grow",
    description: "Keep using it if it helps your business grow.",
    icon: '<svg class="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#096"></path> </g></svg>',
    color: "text-emerald-600",
  },
];

const before = [
  "Missed calls & lost customers",
  "Manual booking & WhatsApp chaos",
  "No reminders = More no-shows",
  "Back-and-forth messages",
  "Unorganized schedule",
];

const after = [
  "Customers book 24/7 online",
  "Automated reminders & confirmations",
  "Fewer no-shows, more revenue",
  "One link for all bookings",
  "Organized, professional & stress-free",
];

function TrustIcon({ type }: { type: string }) {
  const cls = "h-2.5 w-2.5 text-indigo-600";
  if (type === "card")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    );
  if (type === "fees")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  if (type === "clock")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

const faqItems = [
  {
    title: "Who can use GetSetTime for free?",
    content: "Any individual or business looking for appointment scheduling software can use GetSetTime for free, subject to the platform's current terms and conditions.",
  },
  {
    title: "What's included in the free plan?",
    content: "The free plan is tailored to let you experience the platform and see how it fits your real workflow before committing to a paid tier.<br/>Currently, we offer up to 250 bookings per month, a public booking page, email notifications, a basic calendar view, and community support.",
  },
  {
    title: "How do I get started with the free plan?",
    content: "Sign up and set up your profile — your booking link goes live right away, ready to share with clients via email, social media, or embedded directly on your website.<br/>No credit card or debit card is required to start accepting bookings.",
  },
  {
    title: "Can I add staff members under the free plan?",
    content: "The free plan is limited to a single user and 250 bookings per month, valid for three months from your sign-up date, so staff accounts aren't included at this stage. To add team members, take a look at our paid plans and choose the one that fits your business.",
  },
];

const testimonials = [
  {
    name: "Ava Reynolds",
    role: "Salon Owner, Mumbai",
    image: "/salon-profile.webp",
    review: '"GetSetTime completely transformed how we manage appointments. Our bookings increased by 60% in the first month!"',
  },
  {
    name: "Dr. Mia Taylor",
    role: "Dentist, New York",
    image: "/dentist-profile.webp",
    review: '"No-shows reduced by 70% after we started using automated reminders. Highly recommend!"',
  },
  {
    name: "Camille Dubois",
    role: "Business Coach, London",
    image: "/physiotherapy-profile.webp",
    review: '"The free setup was amazing. Our new booking page looks so professional and our clients love it!"',
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
        "height": 630,
      },
      "description": "GetSetTime is a smart appointment scheduling platform trusted by doctors, salon owners, and service professionals. Simple to set up, smart enough to run itself.",
      "slogan": "Precision Scheduling for Modern Care",
      "foundingDate": "2025",
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
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      "url": pageUrl,
      "name": `Free Booking Page Setup in 24 Hours | ${APP_NAME}`,
      "description": `Join the ${APP_NAME} Free Booking Page Challenge. We'll set up a professional online booking page for your business in 24 hours — free. Limited to the first 100 businesses.`,
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}`,
      },
      "about": {
        "@id": `${pageUrl}/#offer`,
      },
      "mainEntity": {
        "@id": `${pageUrl}/#offer`,
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        "width": 1200,
        "height": 630,
      },
      "breadcrumb": {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "Offer",
      "@id": `${pageUrl}/#offer`,
      "name": "Free Booking Page Setup",
      "description":
        "Get a professional branded booking page set up for your business in 24 hours — free. Includes service and staff setup, confirmation emails, Google Calendar guidance, and a mobile-friendly booking experience. Limited to the first 100 businesses.",
      "url": pageUrl,
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/LimitedAvailability",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": 100,
      },
      "seller": {
        "@id": `${BASE_URL}/#organization`,
      },
      "itemOffered": {
        "@type": "Service",
        "name": "Free Booking Page Setup",
        "provider": {
          "@id": `${BASE_URL}/#organization`,
        },
        "serviceType": "Online booking page setup",
        "areaServed": "Worldwide",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}/#softwareapplication`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "description":
        "Claim a free professional booking page with GetSetTime. We set it up in 24 hours so customers can book appointments online 24/7.",
      "url": pageUrl,
      "image": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
        "width": 1200,
        "height": 630,
      },
      "inLanguage": "en",
      "author": {
        "@id": `${BASE_URL}/#organization`,
      },
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Appointment Scheduling Software",
      "operatingSystem": "All — Web-based, no installation required",
      "availableOnDevice": ["Desktop", "Mobile", "Tablet"],
      "featureList": getFreeFeatures,
      "screenshot": `${BASE_URL}${contactInfo.DEFAULT_IMAGE}`,
      "installUrl": `${REGISTER_URL}`,
      "offers": {
        "@id": `${pageUrl}/#offer`,
      },
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
          "name": "Claim Free Booking Page",
          "item": pageUrl,
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
          "text": item.content,
        },
      })),
    },
  ],
};

export default function FreeBookingPage() {
  return (
    <>
        <Script
          id="claim-free-booking-page-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="sm:bg-gray-50 py-14 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                  {/* Left — Hero content */}
                  <div className="xl:col-span-8 flex flex-col justify-between">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        <div className="lg:col-span-7 space-y-5">
                          <Heading
                              badge="Free Booking Page Challenge"
                              title="Free Booking Page Setup in 24 Hours"
                              highlightText="for Service Businesses"
                              description={
                                <>Join the GetSetTime Free Booking Page Challenge. <br/> We are helping 100 service businesses get a professional booking page live in 24 hours.</>
                              }
                              headingTag="h1"
                              titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
                          />

                          <ul className="flex flex-wrap gap-x-6 gap-y-2">
                              {features.map((f) => (
                              <li key={f} className="flex items-center gap-1 text-sm text-neutral-700 whitespace-nowrap">
                                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600">
                                  <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  </span>
                                  {f}
                              </li>
                              ))}
                          </ul>

                          <div className="flex sm:items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3">
                              <span>
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-9 h-9 text-indigo-600"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m5.705 3.71-1.41-1.42C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71zm13.999-1.42-1.408 1.42C21 6.396 21 8.009 21 11l2-.063c0-3.002 0-5.374-3.296-8.647zM12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path></g></svg>
                              </span>
                              <p><strong>We are accepting only the first 100 businesses</strong>.<br/> Claim your free setup before slots run out!</p>
                          </div>

                          <div className="flex gap-2 max-[425px]:flex-col flex-row flex-wrap">
                              <ClaimFreeBookingButton className="bg-indigo-600 text-white text-sm px-4 py-3 rounded-xl flex items-center justify-center gap-3 disabled:opacity-70">
                              Claim My Free Booking Page
                              </ClaimFreeBookingButton>

                              <Link href="/app-functionality-demo-video" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-800 drop-shadow-lg transition">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-200"><svg className="translate-x-px" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                              </span>
                              Watch 60-sec Demo
                              </Link>
                          </div>

                          
                          <div className="free-booking-feature flex flex-wrap gap-1">
                              {trustItems.map((t) => (
                              <span key={t.label} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 text-xs text-neutral-700 drop-shadow-sm">
                                  <TrustIcon type={t.icon} />
                                  {t.label}
                              </span>
                              ))}
                          </div>

                        </div>

                        {/* Phone mockup */}
                        <div className="lg:col-span-5 hidden items-center justify-center relative xl:top-[70px] lg:flex">
                            <FreeBookingPhoneMockup />
                        </div>
                    </div>

                    <ScreenGate minWidth={768}>
                    <div className="flex flex-col gap-2 space-y-4 mt-6">
                      <div className="rounded-2xl bg-white py-6 px-4 sm:px-6">
                          <div className="text-center text-md font-semibold text-neutral-900">Trusted by service businesses worldwide</div>
                          <div className="flex flex-wrap items-center justify-center xl:justify-between mt-6 gap-4">
                              {partnerLogos.map((p) => (
                              <div key={p.logo}>
                                  <Image src={p.logo} alt={p.logo} width={110} height={110} className="object-contain grayscale filter"/>
                              </div>
                              ))}
                          </div>
                      </div>

                      <div className="relative">
                          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-5 lg:grid-cols-4  sm:divide-x sm:divide-indigo-100">
                              {stats.map((s) => (
                              <div key={s.label} className="flex flex-col sm:flex-row items-center justify-left gap-3 sm:px-3">
                                  <span className="text-[#3D3AF3]">{s.icon}</span>
                                  <div className="flex flex-col items-center sm:items-start sm:justify-center text-center sm:text-left">
                                    <span className="text-xl font-bold text-indigo-700">{s.value}</span>
                                    <span className="text-xs text-neutral-500">{s.label}</span>
                                  </div>
                              </div>
                              ))}
                          </div>
                      </div>
                    </div>
                    </ScreenGate>

                  </div>

                  {/* Right — Form */}
                  <div className="xl:col-span-4 xl:pl-6">
                      <FreeBookingSetupForm />
                  </div>
                </div>
            </div>
        </section>
        
        {/* Perfect For Section */}
        <section className="sm:py-20">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
              {/* Left */}
              <div className="rounded-2xl border border-white bg-indigo-50 p-3 sm:p-6 lg:p-8 drop-shadow-lg overflow-hidden">
                <h2 className="text-2xl sm:text-3xl text-center mb-8 font-bold text-neutral-900 capitalize">Perfect For</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-3">
                  {businesses.map((item, index) => {
                    return (
                      <div key={index} className="group rounded-2xl border border-slate-200 bg-white p-2 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:drop-shadow-xl">
                        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.bg}`}>
                          <span className={`${item.color}`} dangerouslySetInnerHTML={{ __html: item.icon }} />
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-700">{item.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right */}
              <div className="rounded-2xl border border-white bg-indigo-50 p-3 sm:p-6 lg:p-8 drop-shadow-lg overflow-hidden">
                <h2 className="text-2xl sm:text-3xl text-center mb-8 font-bold text-neutral-900 capitalize">What You Get —<span className="text-indigo-600"> FREE</span></h2>
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                  {/* List */}
                  <div className="flex-1 space-y-4">
                    {getFreeFeatures.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="">
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#00a63e"></path> </g></svg>
                        </span>
                        <span className="text-sm font-semibold text-neutral-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <ScreenGate minWidth={768}>
                  {/* Gift */}
                  <div className="max-w-60 lg:max-w-70 sm:ml-auto flex flex-col items-left justify-end relative sm:absolute sm:right-12 sm:bottom-12">
                    <div className="relative">
                      <div className="relative rounded-full ">
                        <span className="w-128 h-128 text-indigo-600">
                          <Image src="/gift-card.webp" alt="Gift" width={256} height={256} className="object-contain"/>
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 sm:bottom-0 right-0 rounded-2xl border-2 border-indigo-300 bg-white/80 backdrop-blur-sm px-4 py-4 text-center drop-shadow">
                      <div className="text-lg font-extrabold text-indigo-600">100% FREE</div>
                      <div className="text-sm text-indigo-600">Limited Offer</div>
                    </div>
                  </div>
                  </ScreenGate>

                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How the Free Booking Page Challenge Works Section */}
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <Heading 
              title="How the Free Booking Page" 
              highlightText="Challenge Works"
              wrapperClassName="text-center"
            />
            {/* Steps */}
            <div className="relative mt-8">
              <div className="absolute left-[10%] right-[10%] top-10 border-t-2 border-dashed border-indigo-300 hidden lg:block"></div>
              
              <div className="grid gap-3 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {steps.map((item, index) => {
                  return (
                    <div key={index} className="group relative flex flex-col items-center rounded-2xl border border-indigo-100/60 bg-indigo-50/20 p-3 text-center sm:p-4 lg:border-transparent lg:bg-transparent lg:p-0">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white drop-shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-lg sm:h-20 sm:w-20">
                        <span className={item.color} dangerouslySetInnerHTML={{ __html: item.icon }}/>
                      </div>
                      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-indigo-600 sm:mt-6 sm:text-sm sm:normal-case sm:tracking-normal">{item.step}</span>
                      <div className="mt-2 text-md font-semibold text-neutral-900">{item.title}</div>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* From Missed Calls to Confirmed Bookings Section */}
        <section className=" bg-white relative">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <Heading 
              title="From Missed Calls to" 
              highlightText="Confirmed Bookings"
              wrapperClassName="text-center"
            />

            <div className="relative mt-8">
              {/* VS Circle */}
              <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="h-20 w-20 rounded-full bg-white drop-shadow-lg flex items-center justify-center">
                  <span className="text-3xl font-extrabold text-neutral-900">VS</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 overflow-hidden">
                {/* Before */}
                <div className="bg-gradient-to-br from-red-50 to-white p-4 sm:p-6 lg:p-8 lg:pr-20 rounded-2xl border border-red-200 lg:border-r-0">
                  <h3 className="text-red-700 text-2xl font-bold mb-6">Before GetSetTime</h3>
                  <div className="space-y-4">
                    {before.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="shrink-0">
                          <svg width="22px" height="22px" viewBox="0 0 32 32" version="1.1"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-570.000000, -1089.000000)" fill="#e7000b"> <path d="M591.657,1109.24 C592.048,1109.63 592.048,1110.27 591.657,1110.66 C591.267,1111.05 590.633,1111.05 590.242,1110.66 L586.006,1106.42 L581.74,1110.69 C581.346,1111.08 580.708,1111.08 580.314,1110.69 C579.921,1110.29 579.921,1109.65 580.314,1109.26 L584.58,1104.99 L580.344,1100.76 C579.953,1100.37 579.953,1099.73 580.344,1099.34 C580.733,1098.95 581.367,1098.95 581.758,1099.34 L585.994,1103.58 L590.292,1099.28 C590.686,1098.89 591.323,1098.89 591.717,1099.28 C592.11,1099.68 592.11,1100.31 591.717,1100.71 L587.42,1105.01 L591.657,1109.24 L591.657,1109.24 Z M586,1089 C577.163,1089 570,1096.16 570,1105 C570,1113.84 577.163,1121 586,1121 C594.837,1121 602,1113.84 602,1105 C602,1096.16 594.837,1089 586,1089 L586,1089 Z" id="cross-circle"> </path> </g> </g> </g></svg>
                        </span>
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* After */}
                <div className="relative bg-gradient-to-br from-green-50 to-white p-4 sm:p-6 lg:p-8 lg:pl-16 rounded-2xl border border-green-200 lg:border-l-0">
                  <h3 className="text-green-600 text-2xl font-bold mb-6">After GetSetTime</h3>
                  <div className="space-y-4">
                    {after.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="shrink-0">
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#00a63e"></path> </g></svg>
                        </span>
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                  {/* Girl + decorative sparkle lines */}
                  <div className="hidden xl:block absolute bottom-0 xl:right-2">
                    <Image
                      src="/girl-with-phone-line.webp"
                      alt="Customer"
                      width={240}
                      height={240}
                      className="xl:w-[220px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loved by Business Owners Section */}
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <Heading 
              title="Loved by" 
              highlightText="Business Owners"
              wrapperClassName="text-center"
            />
            {/* Cards */}
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <div key={index} className="rounded-2xl bg-white p-4 sm:p-6 lg:p-8 drop-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-xl">
                  {/* Stars */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg key={index} width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 0L11.29 6.77L18.5 7.5L13 12.5L14.22 19.23L9 15.75L3.78 19.23L5 12.5L-0.5 7.5L7.71 6.77L9 0Z" fill="#FFD700"/>
                      </svg>
                    ))}
                  </div>
                  <p>{item.review}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="text-md font-bold text-neutral-900">{item.name}</div>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                badge="Free Booking Page FAQ"
                title="Questions before you get started?"
                description="Clear answers on free booking page, how it works, and how to get started."
                />
                
                <ScreenGate minWidth={768}>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  <Card title="Smart scheduling" description="Highlight automation, reminders, and live availability." icon={<svg className="h-8 w-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />

                  <Card title="Build trust" description="Reduce friction with short supportive answers and better clarity." icon={<svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>} iconWrapperClassName = "flex h-8 w-8 items-center justify-center" wrapperClassName = "relative" />
                  
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

        {/* Don't Miss This Opportunity Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-500 py-6">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="relative grid items-center justify-center gap-8 grid-cols-1 xl:grid-cols-2 lg:gap-10">
                {/* Column 1: Content */}
                <div>
                  <Heading
                    title="Don't Miss This Opportunity!"
                    description="We are setting up only 100 booking pages for free. Claim yours now and go live in 24 hours!"
                    wrapperClassName="text-white text-center xl:text-left"
                    titleClassName="text-white text-2xl sm:text-3xl font-bold md:text-4xl lg:text-[40px] capitalize"
                    descriptionClassName="text-white/90"
                  />
                </div>

                {/* Column 2: Buttons + Features */}
                <div className="flex items-center justify-center xl:justify-between gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3 flex-col sm:flex-row md:flex-row xl:flex-row">
                      <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-indigo-600 drop-shadow-md transition">
                        Claim My Free Booking Page
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>

                      <Link href="/app-functionality-demo-video" className="inline-flex items-center justify-center gap-2 border border-white/30 rounded-lg px-4 py-3 text-sm font-semibold text-white drop-shadow-md transition">
                        Watch Demo
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs text-white/90">
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0">
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        Free Setup
                      </div>
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0">
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        No Credit Card
                      </div>
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        Live in 24 Hours
                      </div>
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 shrink-0">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M4.929 4.929 19.07 19.071" />
                        </svg>
                        Cancel Anytime
                      </div>
                    </div>
                  </div>

                  <div className="hidden items-center justify-end xl:flex">
                    <svg
                      width={150}
                      height={150}
                      viewBox="0 0 170 170"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <rect x="23" y="45" width="21" height="9" rx="2.5" fill="white" transform="rotate(-40 33.5 49.5)" />
                      <rect x="126" y="45" width="21" height="9" rx="2.5" fill="white" transform="rotate(40 136.5 49.5)" />
                      <rect x="80" y="23" width="10" height="17" rx="2" fill="white" />
                      <rect x="71.5" y="14" width="27" height="12" rx="3.5" fill="white" />
                      <circle cx="85" cy="96" r="58" fill="white" />
                      <circle cx="85" cy="96" r="51" fill="white" stroke="#E4E7FF" strokeWidth="1.5" />
                      <g stroke="#B8C0F8" strokeLinecap="round">
                        <line x1="85" y1="47" x2="85" y2="54" strokeWidth="2.5" />
                        <line x1="108.2" y1="53.8" x2="106.1" y2="60.2" strokeWidth="1.5" />
                        <line x1="126.2" y1="70.8" x2="120.5" y2="74.5" strokeWidth="1.5" />
                        <line x1="134" y1="96" x2="127" y2="96" strokeWidth="2.5" />
                        <line x1="126.2" y1="121.2" x2="120.5" y2="117.5" strokeWidth="1.5" />
                        <line x1="108.2" y1="138.2" x2="106.1" y2="131.8" strokeWidth="1.5" />
                        <line x1="85" y1="145" x2="85" y2="138" strokeWidth="2.5" />
                        <line x1="61.8" y1="138.2" x2="63.9" y2="131.8" strokeWidth="1.5" />
                        <line x1="43.8" y1="121.2" x2="49.5" y2="117.5" strokeWidth="1.5" />
                        <line x1="36" y1="96" x2="43" y2="96" strokeWidth="2.5" />
                        <line x1="43.8" y1="70.8" x2="49.5" y2="74.5" strokeWidth="1.5" />
                        <line x1="61.8" y1="53.8" x2="63.9" y2="60.2" strokeWidth="1.5" />
                      </g>
                      <text
                        x="85"
                        y="99"
                        textAnchor="middle"
                        fill="#4F46E5"
                        fontSize="34"
                        fontWeight="800"
                        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                      >
                        24
                      </text>
                      <text
                        x="85"
                        y="118"
                        textAnchor="middle"
                        fill="#4F46E5"
                        fontSize="11.5"
                        fontWeight="700"
                        letterSpacing="2.8"
                        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                      >
                        HOURS
                      </text>
                    </svg>
                  </div>
                </div>    

              </div>
            </div>
          </div>
        </section>
    </>
  );
}
