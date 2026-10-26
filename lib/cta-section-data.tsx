import type { ReactNode } from "react";

export type CtaHighlightFeature = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type CtaTrustBadge = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const defaultCtaHighlightFeatures: CtaHighlightFeature[] = [
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

export const defaultCtaTrustAvatars = [
  "/doctor-profile.webp",
  "/dentist-profile.webp",
  "/salon-profile.webp",
  "/physiotherapy-profile.webp",
];

export const defaultCtaTrustBadges: CtaTrustBadge[] = [
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

export const defaultCtaSectionContent = {
  badge: "Built for Modern Business",
  title: "Ready for GetSetTime To Manage Your Appointments",
  description:
    "Switch your manual operations to a unified scheduling platform to meet modern needs like online booking, reminders and more.",
  trustedBusinessCount: "2,500+",
};
