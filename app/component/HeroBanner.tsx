import Image from "next/image";
import Link from "next/link";
import { REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import Logo from "./Logo";

const todaysBookings = [
  { time: "09:30 AM", duration: "60 min", name: "Sarah Johnson", service: "Consultation", status: "Confirmed" },
  { time: "11:00 AM", duration: "45 min", name: "Michael Chen", service: "Follow-up Session", status: "Complete" },
  { time: "01:30 PM", duration: "60 min", name: "Emily Davis", service: "Therapy Session", status: "Active" },
  { time: "03:00 PM", duration: "30 min", name: "David Wilson", service: "Skin Treatment", status: "Pending" },
];

const upcomingMeetings = [
  { name: "Dr. Amanda Lee", role: "Consultation", date: "Tue, 30 Apr", time: "10:00 AM", avatar: "/doctor-profile.webp" },
  { name: "James Rodriguez", role: "Physiotherapy", date: "Tue, 30 Apr", time: "02:00 PM", avatar: "/physiotherapy-profile.webp" },
];

const activityData = [
  { label: "Mon", value: 30 },
  { label: "Tue", value: 22 },
  { label: "Wed", value: 34 },
  { label: "Thu", value: 60 },
  { label: "Fri", value: 52 },
  { label: "Sat", value: 28 },
  { label: "Sun", value: 40 },
];

const industries = [
  {
    label: "Clinics",
    icon: ( <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
    ),
  },
  {
    label: "Salons",
    icon: (<svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.42 9.42 8 12"/><circle cx="4" cy="8" r="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 6-8.58 8.58"/><circle cx="4" cy="16" r="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.8 14.8 14 18"/>
    </svg>
    ),
  },
  {
    label: "Consultants",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
  },
  {
    label: "Real Estate",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>),
  },
  {
    label: "Fitness",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/></svg>),
  },
  {
    label: "Agencies",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>),
  },
];

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-16">
      
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-2 xl:grid-cols-2 lg:gap-4 ">
          {/* Left column */}
          <div className="space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize">
            Appointment Scheduling {" "} <span className="bg-gradient-to-r from-indigo-700 to-violet-600 bg-clip-text text-transparent">Software to Book More </span>Appointments. and <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">Reduce No-Shows</span>
            </h1>

            <p>GetSetTime is a smart, fully automated scheduling software designed for service-based professionals and individuals tired of managing appointments.</p>

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
                <Link href={REGISTER_GOOGLE_URL} target="_blank" aria-label="Start Free - Hero Banner" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">
                    Start Free — 250 Bookings<span className="hidden sm:inline"> Included</span>
                    <svg className="h-4 w-4 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" /></svg>
                </Link>
            </div>

            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>No credit card required</span>
              <span className="text-neutral-500">•</span>
              <span>Free setup</span>
              <span className="text-neutral-500">•</span>
              <span>Cancel anytime</span>
            </p>

            {/* Desktop — industry pills */}
            <div className="hidden flex-wrap gap-2 md:flex">
              {industries.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 text-xs text-neutral-700 drop-shadow-sm">
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-1 gap-3 sm:grid-cols-3">
              
                <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <div>
                            <div className="text-lg font-bold text-neutral-900">250</div>
                            <div className="text-xs font-semibold text-neutral-800">Free Bookings</div>
                        </div>
                    </div>
                    <div className="text-xs text-neutral-500">Every month, forever</div>
                </div>

                <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4 0m4 0a4 4 0 014 4" />
                            </svg>
                        </span>
                        <div>
                            <div className="text-sm font-bold text-neutral-900">Multi-Provider Scheduling</div>
                        </div>
                    </div>
                    <div className="text-xs text-neutral-500">Manage your entire team</div>
                </div>

                <div className="rounded-2xl border border-neutral-100 bg-white p-3 drop-shadow-sm space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 27l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.5-1.5-5.4C5.6 9.3 10.3 4.6 16 4.6S26.4 9.3 26.4 15 21.7 24.8 16 24.8zm5.7-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z" />
                            </svg>
                        </span>
                        <div>
                            <div className="text-sm font-bold text-neutral-900">WhatsApp &amp; Email Reminders</div>
                        </div>
                    </div>
                    <div className="text-xs text-neutral-500">Reduce no-shows</div>
                </div>
            </div>
          </div>

          {/* Right column - Dashboard mockup */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl animate-fade-in-scale">
                {/* Window bar */}
                <div className="relative z-10 border-b border-neutral-200 hidden md:flex items-center justify-between px-3 py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 animate-ping"></div>
                    </div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600 animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-neutral-700">LIVE</span>
                  </div>
                </div>

                {/* Top header */}
                <div className="hidden md:flex flex-wrap items-center justify-between px-3 py-3">
                    <div className="flex items-center gap-2.5">
                        <Logo />
                    </div>
                    <div className="flex items-center gap-5 text-center">
                        <div>
                            <div className="text-base font-bold text-indigo-600">24</div>
                            <div className="text-xs text-neutral-500">Today</div>
                        </div>
                        <div>
                            <div className="text-base font-bold text-neutral-900">7</div>
                            <div className="text-xs text-neutral-500">Pending</div>
                        </div>
                        <div>
                            <div className="text-base font-bold text-emerald-600">92%</div>
                            <div className="text-xs text-neutral-500">Filled</div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="hidden w-10 shrink-0 flex-col items-center gap-5 border-r border-neutral-100 py-5 text-neutral-400 md:flex">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        </span>

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar preview-icon"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user preview-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell preview-icon"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-combined preview-icon"><path d="M12 16v5"/><path d="M16 14.639V21"/><path d="M20 10.656V21"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18.463V21"/><path d="M8 14.656V21"/></svg>

                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings preview-icon"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>

                    <div className="min-w-0 flex-1 p-3">
                        {/* Bookings + meetings */}
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {/* Today's Bookings */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="text-sm font-semibold text-neutral-800">Today&apos;s Bookings</div>
                                </div>
                                <div className="rounded-xl border border-neutral-100">
                                    {todaysBookings.map((b, idx) => (
                                    <div
                                        key={b.name}
                                        className={`flex items-center gap-3 p-2 ${idx >= 2 ? "hidden md:flex" : ""} ${
                                            idx === 1
                                                ? "md:border-b md:border-neutral-100"
                                                : idx < todaysBookings.length - 1
                                                    ? "border-b border-neutral-100"
                                                    : ""
                                        }`}
                                    >
                                        <div className="w-16 shrink-0">
                                            <div className="text-xs font-bold text-neutral-900">{b.time}</div>
                                            <div className="text-xs text-neutral-400">{b.duration}</div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="truncate text-sm font-semibold text-neutral-800">{b.name}</div>
                                            <div className="truncate text-xs text-neutral-500">{b.service}</div>
                                        </div>
                                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${
                                            b.status === "Confirmed"
                                            ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                                            : b.status === "Active"
                                            ? "border-blue-200 bg-blue-50 text-blue-600"
                                            : b.status === "Complete"
                                            ? "border-amber-200 bg-amber-50 text-amber-600"
                                            : b.status === "Pending"
                                            ? "border-red-200 bg-red-50 text-red-600"
                                            : "border-gray-200 bg-gray-50 text-gray-600"
                                        }`}
                                        >
                                        {b.status}
                                        </span>
                                    </div>
                                    ))}
                                </div>
                                <div className="mt-2 hidden md:block text-right text-[11px] font-medium text-indigo-600">View all bookings →</div>
                            </div>

                            {/* Upcoming Meetings */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="text-sm font-semibold text-neutral-800">Upcoming Meetings</div>
                                </div>
                                <div className="space-y-3">
                                    {upcomingMeetings.map((m) => (
                                    <div key={m.name} className="rounded-xl border border-neutral-100 p-2">
                                        <div className="flex items-center gap-2.5">
                                            <Image
                                                src={m.avatar}
                                                alt={m.name}
                                                width={40}
                                                height={40}
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                            <div className="min-w-0">
                                                <div className="truncate text-sm font-semibold text-neutral-800">{m.name}</div>
                                                <div className="truncate text-xs text-neutral-500">{m.role}</div>
                                            </div>
                                        </div>
                                        <div className="mt-2.5 flex items-center justify-between text-xs text-neutral-500">
                                            <span className="flex items-center gap-1">
                                                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {m.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {m.time}
                                            </span>
                                            <span className="border border-emerald-200 bg-emerald-50 text-emerald-600 px-2 py-0.5 text-xs font-medium rounded-full">
                                                Confirmed
                                            </span>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom row */}
                        <div className="mt-4 hidden md:grid grid-cols-1 gap-3 sm:grid-cols-[1.2fr_1fr_0.9fr]">
                            {/* Booking Activity */}
                            <div className="rounded-xl border border-neutral-100 p-3">
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="text-sm font-semibold text-neutral-800">Booking Activity</div>
                                    <span className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-500">
                                        This Week
                                        <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="flex flex-col justify-between py-1 text-[10px] text-neutral-400">
                                        <span>80</span>
                                        <span>60</span>
                                        <span>40</span>
                                        <span>20</span>
                                    </div>
                                    <div className="flex-1">
                                    <svg className="h-20 w-full" viewBox="0 0 280 80" preserveAspectRatio="none">
                                        <defs>
                                        <linearGradient id="bookingArea" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.25" />
                                            <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0.02" />
                                        </linearGradient>
                                        </defs>
                                        <path
                                        d={`M ${activityData
                                            .map((d, i) => `${(i / (activityData.length - 1)) * 280} ${80 - (d.value / 80) * 80}`)
                                            .join(" L ")} L 280 80 L 0 80 Z`}
                                        fill="url(#bookingArea)"
                                        />
                                        <path
                                        d={`M ${activityData
                                            .map((d, i) => `${(i / (activityData.length - 1)) * 280} ${80 - (d.value / 80) * 80}`)
                                            .join(" L ")}`}
                                        fill="none"
                                        stroke="rgb(99,102,241)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        />
                                        {activityData.map((d, i) => (
                                        <circle
                                            key={d.label}
                                            cx={(i / (activityData.length - 1)) * 280}
                                            cy={80 - (d.value / 80) * 80}
                                            r="2.5"
                                            fill="rgb(99,102,241)"
                                        />
                                        ))}
                                    </svg>
                                    <div className="flex justify-between text-[9px] text-neutral-400">
                                        {activityData.map((d) => (
                                        <span key={d.label}>{d.label}</span>
                                        ))}
                                    </div>
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                                    Confirmed <span className="font-bold">128</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600">
                                    Pending <span className="font-bold">32</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-600">
                                    Cancelled <span className="font-bold">6</span>
                                    </span>
                                </div>
                            </div>

                            {/* Calendar */}
                            <div className="rounded-xl border border-neutral-100 p-3">
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="text-sm font-semibold text-neutral-800">April 2025</div>
                                </div>
                                <div className="grid grid-cols-7 gap-y-1 text-center text-xs text-neutral-400">
                                    {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                                    <span key={i} className="font-medium">{d}</span>
                                    ))}
                                </div>
                                <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-xs text-neutral-600">
                                    {[30, 31].map((d) => (
                                    <span key={`p${d}`} className="text-neutral-300">{d}</span>
                                    ))}
                                    {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
                                    <span key={d} className={ d === 30 ? "mx-auto flex h-4 w-4 items-center justify-center rounded-full text-indigo-600 font-bold" : "" }>
                                        {d}
                                    </span>
                                    ))}
                                    {[1, 2, 3].map((d) => (
                                    <span key={`n${d}`} className="text-neutral-300">{d}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="space-y-2 hidden sm:block">
                                <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-white drop-shadow-sm px-3 py-2 text-xs font-semibold text-neutral-700">
                                    <svg className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    New Booking
                                </button>
                                <button className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-white drop-shadow-sm px-3 py-2 text-xs font-semibold text-neutral-700">
                                    <svg className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                    Send Reminders
                                </button>
                                <button className="flex w-full items-center justify-center gap-1.5 rounded-lg drop-shadow-sm bg-white px-3 py-2 text-xs font-semibold text-neutral-700">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-indigo-500"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg>
                                    View Reports
                                </button>

                                <div className="flex items-center gap-2 rounded-lg drop-shadow-sm bg-gray-100 px-3 py-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
                                    </span>
                                    <div className="leading-tight">
                                        <div className="text-xs font-semibold text-neutral-800">Need help?</div>
                                        <div className="text-[10px] text-neutral-500">Visit our Help Center</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Mobile — industry cards */}
        <div className="md:hidden pt-8">
              <h2 className="mb-4 text-center text-lg font-bold text-neutral-900">Built for your business</h2>
              <div className="grid grid-cols-3 min-[550px]:grid-cols-6 gap-2">
                {industries.map((item) => (
                  <div key={item.label} className="flex aspect-square flex-col items-center justify-center rounded-xl border border-neutral-100 bg-white px-1 py-3 text-center shadow-xl">
                    <span className="mb-2 flex items-center justify-center text-indigo-600 [&_svg]:h-8 [&_svg]:w-8 min-[550px]:h-6 min-[550px]:w-6">{item.icon}</span>
                    <span className="text-md min-[550px]:text-xs font-medium leading-tight text-neutral-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </section>
  );
}
