import { REGISTER_URL } from "./config";

export type SolutionBrowserItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: SolutionBrowserIconKey;
};

export type SolutionBrowserCategory = {
  id: string;
  label: string;
  heading: string;
  items: SolutionBrowserItem[];
};

export type SolutionBrowserIconKey =
  | "grid"
  | "healthcare"
  | "education"
  | "salon"
  | "fitness"
  | "real-estate"
  | "doctor"
  | "dentist"
  | "physio"
  | "dermatology"
  | "tutor"
  | "immigration";

/**
 * Items shown on the frontend.
 * Includes custom /solutions/... pages and REGISTER_URL entries.
 * Skips only empty hrefs and hash placeholders (#healthcare) used for nav.
 */
export function isDisplayableSolutionHref(href: string): boolean {
  if (!href) return false;
  if (href.startsWith("#")) return false;
  return true;
}

export function getDisplayableItems(items: SolutionBrowserItem[]): SolutionBrowserItem[] {
  return items.filter((item) => isDisplayableSolutionHref(item.href));
}

export const solutionBrowserCategories: SolutionBrowserCategory[] = [
  {
    id: "solutions",
    label: "Solutions",
    heading: "Solutions",
    items: [
      {
        id: "overview-healthcare",
        title: "Healthcare",
        description: "Online booking, reminders, and clinic calendars for doctors, dentists, and specialists.",
        href: "#healthcare",
        icon: "healthcare",
      },
      {
        id: "overview-beauty",
        title: "Beauty & Wellness",
        description: "Stylist schedules, service menus, and client reminders for salons and spas.",
        href: "#beauty-wellness",
        icon: "salon",
      },
      {
        id: "overview-education",
        title: "Education",
        description: "Class booking, tutor availability, and automated reminders for students and parents.",
        href: "#education",
        icon: "education",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    heading: "Healthcare",
    items: [
      {
        id: "health-doctor",
        title: "Doctors & clinics",
        description: "Patient self-booking, multi-doctor calendars, and WhatsApp reminders that cut no-shows.",
        href: "/solutions/doctor-appointment-scheduling-software",
        icon: "doctor",
      },
      {
        id: "health-dentist",
        title: "Dentists",
        description: "Chair-ready scheduling with treatment forms and automated appointment reminders.",
        href: "/solutions/dentist-appointment-scheduling-software",
        icon: "dentist",
      },
      {
        id: "health-physio",
        title: "Physiotherapists",
        description: "Session packs, therapist availability, and recurring rehab appointments in one place.",
        href: "/solutions/physiotherapist-appointment-booking-software",
        icon: "physio",
      },
      {
        id: "health-derm",
        title: "Dermatologists",
        description: "Organise consults, procedures, and follow-ups for skin clinics with smart calendars.",
        href: "/solutions/dermatology-appointment-scheduling-software",
        icon: "dermatology",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    heading: "Education",
    items: [
      {
        id: "edu-tutor",
        title: "Tutors",
        description: "Let students and parents book classes, demos, and counselling around teacher availability.",
        href: "/solutions/tutor-appointment-booking-software",
        icon: "tutor",
      },
    ],
  },
  {
    id: "beauty-wellness",
    label: "Beauty & Wellness",
    heading: "Beauty and Wellness",
    items: [
      {
        id: "beauty-salon",
        title: "Salon",
        description: "Charge by expertise and manage stylist schedules from a simple booking dashboard.",
        href: "/solutions/salon-appointment-scheduling-software",
        icon: "salon",
      },
    ],
  },
];

export const solutionBrowserDefaultCategoryId = "solutions";
