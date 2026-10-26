export type HelpStep = {
  title: string;
  description: string;
};

export type HelpSection = {
  id: string;
  category: string;
  title: string;
  description: string;
  steps: HelpStep[];
  tip?: string;
};

export const helpSections: HelpSection[] = [
  {
    id: "create-account",
    category: "Getting Started",
    title: "Create your GetSetTime account",
    description:
      "Sign up in minutes and access your scheduling dashboard. You can register with email or Google for faster onboarding.",
    steps: [
      {
        title: "Go to the registration page",
        description:
          "Visit app.getsettime.com/register or click Get Started from the homepage. Choose email signup or continue with Google.",
      },
      {
        title: "Enter your business details",
        description:
          "Add your name, business name, and contact email. This information appears on booking confirmations sent to clients.",
      },
      {
        title: "Verify your email",
        description:
          "Check your inbox for a verification link. Once confirmed, you can log in and complete your workspace setup.",
      },
      {
        title: "Choose your plan",
        description:
          "Select Starter, Professional, or Enterprise based on your team size and booking volume. You can upgrade anytime.",
      },
    ],
    tip: "Use Google signup if you want one-click access without remembering a separate password.",
  },
  {
    id: "setup-profile",
    category: "Getting Started",
    title: "Set up your business profile",
    description:
      "Your profile is what clients see when they book online. A complete profile builds trust and reduces no-shows.",
    steps: [
      {
        title: "Upload your logo and cover image",
        description:
          "Go to Settings → Branding. Add your logo and a cover image that reflects your clinic, salon, or practice.",
      },
      {
        title: "Add location and contact info",
        description:
          "Enter your address, phone number, and business hours. Clients use this to find you and know when you are open.",
      },
      {
        title: "Write a short business description",
        description:
          "Describe your services in 2–3 sentences. This appears on your public booking page and helps clients choose the right appointment.",
      },
      {
        title: "Set your timezone",
        description:
          "Confirm your timezone under Settings → General so appointment times display correctly for you and your clients.",
      },
    ],
  },
  {
    id: "configure-availability",
    category: "Getting Started",
    title: "Configure your availability",
    description:
      "Define when clients can book with you. Set working hours, breaks, and blocked dates so your calendar stays accurate.",
    steps: [
      {
        title: "Open Availability settings",
        description:
          "From the dashboard, go to Settings → Availability. You will see a weekly schedule grid for each day of the week.",
      },
      {
        title: "Set working hours per day",
        description:
          "Toggle days on or off and set start/end times. Add multiple time blocks if you take a lunch break or split shifts.",
      },
      {
        title: "Add buffer time between appointments",
        description:
          "Set a buffer (e.g. 10 minutes) between bookings so you have time to prepare between clients.",
      },
      {
        title: "Block holidays and time off",
        description:
          "Use the calendar to mark days off or partial closures. Blocked slots won't appear on your public booking page.",
      },
    ],
    tip: "Start with your real weekly schedule — you can always adjust hours later without affecting existing bookings.",
  },
  {
    id: "manage-bookings",
    category: "Appointments",
    title: "Create and manage bookings",
    description:
      "Handle appointments from your dashboard or let clients book online. Every booking syncs to your calendar in real time.",
    steps: [
      {
        title: "View your calendar",
        description:
          "Open the Calendar tab to see daily, weekly, or monthly views. Color-coded entries show confirmed, pending, and cancelled appointments.",
      },
      {
        title: "Create a manual booking",
        description:
          "Click New Booking, select the client (or add a new one), choose a service, date, and time. Save to confirm instantly.",
      },
      {
        title: "Share your booking link",
        description:
          "Copy your public booking URL from Settings → Booking Page. Share it on your website, social media, or WhatsApp.",
      },
      {
        title: "Update or cancel appointments",
        description:
          "Click any booking to reschedule, add notes, change status, or cancel. Clients receive automatic notifications on changes.",
      },
    ],
  },
  {
    id: "notifications-reminders",
    category: "Notifications",
    title: "Set up reminders and notifications",
    description:
      "Automated reminders reduce no-shows. Configure email and WhatsApp messages to go out before each appointment.",
    steps: [
      {
        title: "Open Notifications settings",
        description:
          "Go to Settings → Notifications → Reminders. You will see a list of reminder steps you can add or customize.",
      },
      {
        title: "Add a reminder step",
        description:
          "Click Add Step and choose the channel (email or WhatsApp), timing (e.g. 24 hours before), and message template.",
      },
      {
        title: "Customize message content",
        description:
          "Edit the subject and body. Use placeholders like {client_name}, {date}, and {time} to personalize each message.",
      },
      {
        title: "Test your reminders",
        description:
          "Create a test booking and verify that reminders arrive at the correct time on the chosen channel.",
      },
    ],
    tip: "A 24-hour WhatsApp reminder plus a 2-hour email reminder is a proven combination for reducing no-shows.",
  },
  {
    id: "team-management",
    category: "Team & Staff",
    title: "Manage your team and staff seats",
    description:
      "Add providers, stylists, or therapists to your workspace. Each team member gets their own calendar and availability.",
    steps: [
      {
        title: "Invite team members",
        description:
          "Go to Settings → Team → Invite Member. Enter their email and assign a role (Admin, Provider, or Receptionist).",
      },
      {
        title: "Set individual availability",
        description:
          "Each provider can configure their own working hours under their profile. Clients book with a specific team member.",
      },
      {
        title: "Assign services to staff",
        description:
          "Link services to the providers who offer them. Only available staff appear when a client selects that service.",
      },
      {
        title: "Add extra seats when needed",
        description:
          "If you exceed your plan's included seats, add more from Settings → Billing. Extra seats are billed monthly.",
      },
    ],
  },
  {
    id: "billing-subscription",
    category: "Account & Billing",
    title: "Manage your subscription and billing",
    description:
      "View your current plan, update payment details, and download invoices from the billing section of your dashboard.",
    steps: [
      {
        title: "View your current plan",
        description:
          "Go to Settings → Billing to see your plan tier, included bookings, seat count, and next renewal date.",
      },
      {
        title: "Upgrade or downgrade",
        description:
          "Click Change Plan to switch tiers. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
      },
      {
        title: "Update payment method",
        description:
          "Add or replace your card under Payment Methods. All transactions are processed securely with GST shown at checkout.",
      },
      {
        title: "Download invoices",
        description:
          "Access past invoices from the Billing History tab. Download PDF copies for your accounting records.",
      },
    ],
  },
  {
    id: "troubleshooting",
    category: "Support",
    title: "Troubleshooting common issues",
    description:
      "Quick fixes for the most common questions. If you still need help, our support team is available 24/7 via chat.",
    steps: [
      {
        title: "Clients can't find available slots",
        description:
          "Check that your availability is set for the requested day, the service duration fits within open hours, and no buffer is blocking the slot.",
      },
      {
        title: "Reminders not sending",
        description:
          "Verify notification steps are enabled, the client's phone or email is correct, and your WhatsApp integration is connected.",
      },
      {
        title: "Calendar not syncing",
        description:
          "Reconnect your Google Calendar under Settings → Integrations. Allow calendar read/write permissions when prompted.",
      },
      {
        title: "Still need help?",
        description:
          "Open the chat widget on this page or visit the Contact Us page. Our team responds in under 2 minutes on average.",
      },
    ],
  },
];

export function getHelpCategories(): string[] {
  return [...new Set(helpSections.map((s) => s.category))];
}
