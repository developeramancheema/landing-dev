import { REGISTER_GOOGLE_URL } from "./config";

export type BusinessType = {
  label: string;
  href: string;
};

export type CategoryDashboardStat = {
  label: string;
  value: string;
  accent: string;
  bg: string;
};

export type CategoryDashboardBooking = {
  time: string;
  period: string;
  client: string;
  service: string;
  status: "Confirmed" | "Pending" | "Paid";
};

export type CategoryDashboardPreview = {
  label: string;
  stats: CategoryDashboardStat[];
  bookings: CategoryDashboardBooking[];
  accentColor: string;
};

export type BusinessCategory = {
  id: string;
  title: string;
  description: string;
  features: string[];
  learnMoreHref: string;
  image: string;
  imageAlt: string;
  businessTypes: BusinessType[];
  dashboard: CategoryDashboardPreview;
};

export const businessCategories: BusinessCategory[] = [
  {
    id: "medical-health",
    title: "Medical & Health Services",
    description: "Keep your time for your patients and give them the ability to book appointments that fit their schedules. Send automatic WhatsApp and SMS reminders, reduce no-shows, and keep your clinic organised — without endless phone calls or paper registers.",
    features: [
      "Online appointment booking for patients, 24/7 from any device",
      "Automated WhatsApp & SMS reminders to reduce no-shows",
    ],
    learnMoreHref: REGISTER_GOOGLE_URL,
    image: "/grow-doctor.jpg",
    imageAlt: "Medical and health services appointment scheduling",
    businessTypes: [
      { label: "Medical Clinics & Doctors", href: "/solutions/doctor-appointment-scheduling-software" },
      { label: "Dentists", href: "/solutions/dentist-appointment-scheduling-software" },
      { label: "Physiotherapists", href: "/solutions/physiotherapist-appointment-booking-software" },
      // { label: "Chiropractors", href: "/contact-us" },
      // { label: "Massage", href: "/contact-us" },
      // { label: "Psychologists", href: "/contact-us" },
    ],
    dashboard: {
      label: "Clinic Dashboard",
      accentColor: "indigo",
      stats: [
        { label: "Today", value: "18", accent: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
        { label: "Confirmed", value: "15", accent: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
        { label: "No-shows", value: "2%", accent: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
      ],
      bookings: [
        { time: "09:30", period: "AM", client: "Harper Simmons", service: "General Check-up", status: "Confirmed" },
        { time: "11:00", period: "AM", client: "Scarlett Griffin", service: "Follow-up Visit", status: "Confirmed" },
        { time: "02:30", period: "PM", client: "Layla Bennett", service: "New Patient", status: "Pending" },
      ],
    },
  },
  {
    id: "beauty-wellness",
    title: "Beauty & Wellness",
    description:
      "Offer online scheduling via your website and booking link for all your beautifying treatments. Let clients pick stylists, services, and time slots — while your team stays synced across chairs and stations with automated reminders.",
    features: [
      "Easily group services into categories for simple searching",
      "Stylist calendars, team sync, and WhatsApp client reminders",
    ],
    learnMoreHref: REGISTER_GOOGLE_URL,
    image: "/salon-appointment.jpg",
    imageAlt: "Beauty and wellness appointment scheduling",
    businessTypes: [
      { label: "Salons", href: "/solutions/salon-appointment-scheduling-software" },
      // { label: "Beauty salons", href: "/contact-us" },
      // { label: "Spa salons", href: "/contact-us" },
      // { label: "Nail salons", href: "/contact-us" },
      // { label: "Barber shops", href: "/contact-us" },
    ],
    dashboard: {
      label: "Salon Dashboard",
      accentColor: "violet",
      stats: [
        { label: "Bookings", value: "32", accent: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
        { label: "Stylists", value: "6", accent: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
        { label: "Filled", value: "94%", accent: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
      ],
      bookings: [
        { time: "10:00", period: "AM", client: "Penelope Hayes", service: "Haircut & Colour", status: "Paid" },
        { time: "12:30", period: "PM", client: "Ruby Wallace", service: "Manicure & Pedicure", status: "Confirmed" },
        { time: "04:00", period: "PM", client: "Savannah Jenkins", service: "Spa Package", status: "Confirmed" },
      ],
    },
  },
  {
    id: "personal-services",
    title: "Personal Meetings & Services",
    description:
      "Whichever personal service you provide, let your clients choose when it fits their schedule. Build in buffer time between appointments, sync with Google Calendar, and give the most efficient service without manual coordination.",
    features: [
      "Synchronise your business calendar with Google Calendar",
      "Accept online bookings and send automated reminders",
    ],
    learnMoreHref: REGISTER_GOOGLE_URL,
    image: "/physiotherapy-appointment.jpg",
    imageAlt: "Personal services appointment scheduling",
    businessTypes: [
      // { label: "Consulting", href: "/contact-us" },
      // { label: "Counselling", href: "/contact-us" },
      // { label: "Coaching", href: "/contact-us" },
      // { label: "Cleaning", href: "/contact-us" },
      // { label: "Pet services", href: "/contact-us" },
    ],
    dashboard: {
      label: "Services Dashboard",
      accentColor: "emerald",
      stats: [
        { label: "Sessions", value: "12", accent: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
        { label: "This week", value: "48", accent: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
        { label: "Synced", value: "100%", accent: "text-violet-600", bg: "bg-violet-50 border-violet-100" },
      ],
      bookings: [
        { time: "09:00", period: "AM", client: "Zoe Bryant", service: "Business Consulting", status: "Confirmed" },
        { time: "01:00", period: "PM", client: "Naomi Spencer", service: "Life Coaching", status: "Confirmed" },
        { time: "05:00", period: "PM", client: "Lucy Chapman", service: "Home Cleaning", status: "Pending" },
      ],
    },
  },
  {
    id: "sports-fitness",
    title: "Sports & Fitness",
    description:
      "Schedule your sports and fitness business effectively. Keep your classes, services, and coaches organised. Manage trainer availability, class capacity, and recurring sessions from one unified calendar.",
    features: [
      "Easy scheduling of fitness classes and sports coaching",
      "Set availability for trainers and manage recurring bookings",
    ],
    learnMoreHref: REGISTER_GOOGLE_URL,
    image: "/physiotherapy-services.jpg",
    imageAlt: "Sports and fitness appointment scheduling",
    businessTypes: [
      // { label: "Personal trainers", href: "/contact-us" },
      // { label: "Gyms", href: "/contact-us" },
      // { label: "Fitness classes", href: "/contact-us" },
      // { label: "Yoga classes", href: "/contact-us" },
    ],
    dashboard: {
      label: "Fitness Dashboard",
      accentColor: "orange",
      stats: [
        { label: "Classes", value: "8", accent: "text-orange-600", bg: "bg-orange-50 border-orange-100" },
        { label: "Trainers", value: "4", accent: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
        { label: "Capacity", value: "87%", accent: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
      ],
      bookings: [
        { time: "06:30", period: "AM", client: "Alice Stone", service: "Morning Yoga", status: "Confirmed" },
        { time: "10:00", period: "AM", client: "Connor Bryant", service: "Personal Training", status: "Paid" },
        { time: "06:00", period: "PM", client: "Gavin Spencer", service: "HIIT Session", status: "Confirmed" },
      ],
    },
  },
];

/** Flat list of dedicated solution pages (for schema / SEO) */
export const solutionPages = [
  {
    slug: "doctor-appointment-scheduling-software",
    title: "Doctor Appointment Scheduling Software",
    href: "/solutions/doctor-appointment-scheduling-software",
  },
  {
    slug: "dentist-appointment-scheduling-software",
    title: "Dentist Appointment Scheduling Software",
    href: "/solutions/dentist-appointment-scheduling-software",
  },
  {
    slug: "physiotherapist-appointment-booking-software",
    title: "Physiotherapy Appointment Booking Software",
    href: "/solutions/physiotherapist-appointment-booking-software",
  },
  {
    slug: "salon-appointment-scheduling-software",
    title: "Salon Appointment Scheduling Software",
    href: "/solutions/salon-appointment-scheduling-software",
  },
];
