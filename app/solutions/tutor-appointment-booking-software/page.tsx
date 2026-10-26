import Link from "next/link";
import Heading from "@/app/component/Heading";
import { FaqSection } from "@/app/component/FaqSection";
import { REGISTER_GOOGLE_URL, REGISTER_URL } from "@/lib/config";
import Card from "@/app/component/Card";
import BookingFlowConsole from "./BookingFlowConsole";
import { CheckListItem } from "@/app/component/CheckList";
import SolutionCtaSection from "@/app/component/SolutionCtaSection";
import ScreenGate from "@/app/component/ScreenGate";

const whyChooseUs = [
  {
    statLabel: "Reduce Admin Tasks",
    title: "Not Chase Reminders",
    description: "Automate the entire booking process so you can spend more time teaching and less time managing calendars. Booking confirmations and reminders go out automatically, keeping students on schedule and cutting down on missed sessions.",
    stat: "",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-indigo-600"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
    ),
  },
  {
    statLabel: "Quick Class Setup",
    title: "With Recurring Booking Options",
    description: "Set up recurring sessions once and let the system handle the rest. Choose your own intervals — weekly, monthly, or custom.",
    stat: "",
    icon: (
      <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M17 1l4 4-4 4" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 11V9a4 4 0 014-4h14" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 23l-4-4 4-4" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 13v2a4 4 0 01-4 4H3" /></svg>
    ),
  },
  {
    statLabel: "Booking Options",
    title: "Self Booking",
    description: "Make your rules: when and how students can book or reschedule classes. Self-serve booking saves you time while keeping full control over your availability rules.",
    stat: "",
    icon: (
      <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="5" width="18" height="16" rx="2" /><path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" /><path strokeLinecap="round" strokeLinejoin="round" d="m9 15 2 2 4-4" /></svg>
    ),
  },
  {
    statLabel: "Growing Faster",
    title: "Staff Management",
    description: "Track total classes booked, new attendees, reschedule, no-shows, and staff performance — all in real time at one place. Use insights and make data-driven decisions that boost attendance and staff productivity.",
    stat: "",
    icon: (
      <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" /></svg>
    ),
  },
];

const bookingSteps = [
  {
    step: 1,
    title: "Select a tutor",
    description: "Browse profiles by subject, rating, and live availability.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4 0m4 0a4 4 0 014 4" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Choose a subject",
    description: "Pick Math, IELTS, Coding, Music, or a custom subject.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Pick a time slot",
    description: "Only open slots appear based on tutor availability rules.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Confirm the booking",
    description: "Review lesson details and lock in the session in one tap.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Get instant confirmation",
    description: "Email and WhatsApp alerts with a calendar invite attached.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: 6,
    title: "Join Google Meet",
    description: "One-click join from reminders or the student dashboard.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const tutorCategories = [
  { title: "Academic Tutors", description: "Math, science, and school subjects with structured lesson plans.", students: "18K+" },
  { title: "Language Teachers", description: "English, Spanish, Mandarin, and more with conversation practice.", students: "22K+" },
  { title: "Music Teachers", description: "Piano, guitar, vocals, and theory with practice tracking.", students: "9K+" },
  { title: "Dance Coaches", description: "Studio and online choreography sessions with group capacity.", students: "6K+" },
  { title: "Coding Tutors", description: "Programming, web, and data science with project milestones.", students: "14K+" },
  { title: "Exam Preparation", description: "SAT, IELTS, GRE, and board exams with mock test schedules.", students: "11K+" },
  { title: "Business Coaches", description: "Career, leadership, and entrepreneurship mentoring sessions.", students: "7K+" },
  { title: "Fitness Trainers", description: "1:1 and small-group training with recurring weekly slots.", students: "8K+" },
  { title: "Art Teachers", description: "Drawing, painting, and digital art with portfolio reviews.", students: "5K+" },
  { title: "Science Tutors", description: "Physics, chemistry, and biology with lab-style sessions.", students: "10K+" },
  { title: "Math Tutors", description: "Algebra through calculus with adaptive practice homework.", students: "16K+" },
  { title: "Online Mentors", description: "Remote mentoring with Google meet, and async notes.", students: "20K+" },
];

const tutorFaqs = [
  { 
    question: "What is Tutoring scheduling software?",
    answer: "A tool that empowers tutors, instructors, and academic coaches to manage their class or session calendar in one place. All the key tasks — confirming bookings, managing rescheduling, sending reminders, etc. — are performed automatically after setting availability." 
  },
  { 
    question: "Can students book or reschedule their own classes?",
    answer: "Yes. With self-booking enabled, students see your live availability and can book, reschedule, or cancel a class themselves — within the rules you set. This cuts down on back-and-forth messaging while keeping you fully in control of what's allowed and when."
  },
  { 
    question: "Does Getsettime support recurring classes and course series?",
    answer: "Yes, like a modern tutoring scheduling system, Getsettime supports. It allows tutors to schedule weekly, bi-weekly, or custom-interval class series, and all future sessions are automatically added to the calendar. <br/> We tailored the scheduling software for ongoing courses and multi-session packages, not just appointments." 
  },
  { 
    question: "Can a tutor manage class capacity and waitlists?",
    answer: "Most tutoring management software lets you set a maximum number of seats per session and automatically manage a waitlist once it's full. <br/>If a student cancels, the next person on the waitlist can be notified right away so the open seat doesn't go to waste."
  },
  { 
    question: "Can multiple tutors or locations use the same booking software?", 
    answer: "Yes — Getsettime supports adding multiple tutors or locations to one profile. Once a user sets up their profile, they can add, remove, or assign a new role to their staff. It enables scaling from a solo-tutor setup to a multi-tutor academy without switching tools."
  },
];

export default function TutorAppointmentBookingSoftwarePage() {
  const faqItems = tutorFaqs.map((faq) => ({ title: faq.question, content: faq.answer }));

  return (
    <>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-14 sm:py-20">
            <div className="absolute inset-0 hidden sm:block">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/3 -translate-y-1/2 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 sm:gap-10 xl:grid-cols-2 lg:gap-12">
                    {/* LEFT SIDE */}
                    <div className="relative min-w-0 space-y-5 sm:space-y-6">
                        <Heading
                            badge="Trusted by 10,000+ Tutors Worldwide"
                            title="Scheduling Software for"
                            highlightText="Tutors & Educators"
                            description="Run your entire teaching schedule from one place. GetSetTime is tutoring scheduling software that automates online booking 24x7, manages your student roster, handles payments, and keeps every session organised — so your classes stay easy to book and easy to attend."
                            headingTag="h1"
                            titleClassName="text-3xl md:text-4xl lg:text-[50px] font-black text-neutral-900 capitalize"
                        />

                        <div className="flex gap-2 max-[425px]:flex-col flex-row flex-wrap">
                            <Link href={REGISTER_GOOGLE_URL} target="_blank" aria-label="Sign up with Google" className="bg-indigo-600 text-white text-sm px-4 py-3 rounded-xl flex items-center justify-center gap-3">
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
                            <Link href={REGISTER_URL} aria-label="Get Started for Free - Tutor Appointment Booking Software" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white drop-shadow-lg transition">
                            Get Started for Free
                            </Link>
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
                                      <div className="text-xs font-semibold text-neutral-800">Booked Sessions</div>
                                  </div>
                              </div>
                              <div className="text-xs text-neutral-500">Booked across tutors using GetSetTime</div>
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
                              <div className="text-xs text-neutral-500">Daily admin time back for your tutors</div>
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
                                      <div className="text-xs font-semibold text-neutral-800">Tutor Rating</div>
                                  </div>
                              </div>
                              <div className="text-xs text-neutral-500">Average feedback from students</div>
                          </div>
                        </div>
                        </ScreenGate>
                    </div>

                    {/* RIGHT SIDE — modern tutor scheduling dashboard */}
                    <div className="relative min-w-0">
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white drop-shadow-xl animate-fade-in-scale">
                            
                            <ScreenGate minWidth={768}>
                            {/* Window chrome */}
                            <div className="relative z-10 flex items-center justify-between border-b border-neutral-200 px-3 py-3 sm:py-4">
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
                            </ScreenGate>

                            <div className="relative flex min-h-0 sm:min-h-[380px]">
                                <ScreenGate minWidth={768}>
                                {/* Icon rail */}
                                <aside className="w-14 shrink-0 flex-col items-center gap-2.5 border-r border-neutral-100/80 bg-gradient-to-b from-slate-50/90 to-white py-4 flex">
                                    <div className="relative mb-1 flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-sky-600 text-[10px] font-bold text-white shadow-md shadow-indigo-500/25">
                                        GS
                                    </div>
                                    {[
                                        { label: "Calendar", active: true, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                                        { label: "Students", active: false, d: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4 0m4 0a4 4 0 014 4" },
                                        { label: "Bookings", active: false, d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                                        { label: "Alerts", active: false, d: "M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3C7.7 6.2 6 8.4 6 11v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
                                    ].map((item) => (
                                        <button
                                            key={item.label}
                                            type="button"
                                            tabIndex={-1}
                                            aria-label={item.label}
                                            className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${item.active ? "bg-gradient-to-br from-indigo-500 to-sky-600 text-white shadow-md shadow-indigo-500/20" : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"}`}
                                        >
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                                                <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
                                            </svg>
                                        </button>
                                    ))}
                                </aside>
                                </ScreenGate>

                                <div className="min-w-0 flex-1 space-y-3.5 p-3 sm:p-4">
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <div className="text-xs font-medium text-neutral-500">Good morning, Sarah</div>
                                            <div className="truncate text-base font-bold tracking-tight text-neutral-900 sm:text-lg">Your teaching day at a glance</div>
                                        </div>
                                        <div className="flex shrink-0 items-center flex-row flex-wrap justify-end gap-2">
                                            <span className="hidden rounded-xl border border-neutral-200/80 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-600 shadow-sm sm:inline">Thu, Mar 19</span>
                                            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-xs font-semibold text-white shadow-md">
                                                SR
                                                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Mini lesson runway */}
                                    <div className="overflow-hidden relative">
                                        <div className="mb-2 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <div className="text-sm font-bold text-neutral-900">Today&apos;s lesson runway</div>
                                                    <div className="text-xs text-neutral-500">4 sessions · online & in-person</div>
                                                </div>
                                            </div>
                                            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase text-white">Now 09:00</span>
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 h-24">
                                            <div className="absolute inset-0 flex">
                                                {[0, 1, 2, 3, 4].map((i) => (
                                                    <div key={i} className={`flex-1 border-r border-neutral-200/60 ${i === 4 ? "border-r-0" : ""}`} />
                                                ))}
                                            </div>
                                            <div className="absolute inset-x-0 top-0 flex justify-between px-2 pt-1.5 text-xs font-semibold tabular-nums text-neutral-400">
                                                {["09", "11", "13", "15", "17"].map((t) => (
                                                    <span key={t}>{t}:00</span>
                                                ))}
                                            </div>
                                            {[
                                                { label: "SAT Math", left: "4%", width: "22%", top: "30%", color: "from-indigo-500 to-violet-600", meta: "Ava · Live", pulse: true },
                                                { label: "IELTS", left: "30%", width: "20%", top: "30%", color: "from-sky-500 to-cyan-600", meta: "Ethan" },
                                                { label: "Python", left: "58%", width: "18%", top: "30%", color: "from-emerald-500 to-teal-600", meta: "Trial" },
                                            ].map((block) => (
                                                <div key={block.label}
                                                    className={`absolute overflow-hidden rounded-lg bg-gradient-to-br ${block.color} px-2 py-1 text-white shadow-md ${block.pulse ? "ring-2 ring-indigo-500 ring-offset-1 ring-offset-neutral-50" : ""}`}
                                                    style={{ left: block.left, width: block.width, top: block.top }}
                                                >
                                                    <div className="truncate text-xs font-bold leading-tight">{block.label}</div>
                                                    <div className="truncate text-xs text-white/90">{block.meta}</div>
                                                </div>
                                            ))}
                                            <div className="absolute bottom-0 top-4 w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent" style={{ left: "8%" }} aria-hidden>
                                                <span className="absolute -left-1 top-1 h-2 w-2 rounded-full bg-amber-500" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <ScreenGate minWidth={640}>
                                        {/* Schedule column */}
                                        <div className="space-y-3">
                                            <div className="relative">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <div className="text-sm font-bold text-neutral-900">Schedule</div>
                                                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">4 today</span>
                                                </div>
                                                <div className="relative pl-1">
                                                    <div className="absolute bottom-1 left-[8px] top-1 w-px bg-gradient-to-b from-indigo-300 via-sky-300 to-transparent" aria-hidden />
                                                    {[
                                                        { time: "09:00", title: "SAT Math · Ava", meta: "Google Meet", gradient: "from-indigo-500 to-violet-600", active: true },
                                                        { time: "11:30", title: "IELTS · Ethan", meta: "Reminder on", gradient: "from-sky-500 to-cyan-600", active: false },
                                                        { time: "15:00", title: "Python · Maya", meta: "Trial", gradient: "from-emerald-500 to-teal-600", active: false },
                                                    ].map((item) => (
                                                        <div key={item.time} className="relative flex gap-2.5 py-1.5">
                                                            <span className={`relative z-10 mt-3 flex h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-white ${item.active ? "bg-indigo-600" : "bg-neutral-300"}`} />
                                                            <div className={`min-w-0 flex-1 overflow-hidden rounded-xl border px-2.5 py-2 ${item.active ? "border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-sky-50/50" : "border-neutral-200 bg-neutral-50"}`}>
                                                                <div className="flex items-center justify-between gap-2">
                                                                    <span className={`rounded-md bg-gradient-to-r ${item.gradient} px-2 py-1 text-xs font-semibold tabular-nums text-white`}>{item.time}</span>
                                                                    <span className="truncate text-xs text-neutral-700">{item.meta}</span>
                                                                </div>
                                                                <div className={`mt-1 truncate text-xs ${item.active ? "font-bold text-indigo-700" : "font-medium text-neutral-700"}`}>{item.title}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        </ScreenGate>

                                        {/* Students column */}
                                        <div className="space-y-3">
                                            {/* Next lesson — under schedule column */}
                                            <div className="relative overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-600 via-indigo-600 to-sky-500 p-3 text-white shadow-lg">
                                                <div className="relative space-y-2.5">
                                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                                                        Next · 12 min
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-sm font-bold leading-snug sm:text-base">SAT Math with Ava Chen</div>
                                                        <div className="text-xs leading-relaxed text-indigo-100">09:00 – 09:55 · Google Meet</div>
                                                        <div className="text-xs text-indigo-200/90">Package lesson 9/12</div>
                                                    </div>
                                                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
                                                        <div className="h-full w-[75%] rounded-full bg-white/90" />
                                                    </div>
                                                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-1">
                                                        {["Materials ready", "Reminder sent", "No conflicts"].map((chip) => (
                                                            <span key={chip} className="rounded-lg border border-white/15 bg-white/10 px-1 py-1 text-center text-xs leading-tight">{chip}</span>
                                                        ))}
                                                    </div>
                                                    <span className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-bold text-indigo-700 shadow-sm">
                                                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                                        Join Google Meet
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom bento stats */}
                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-white p-2.5 shadow-sm sm:p-3">
                                            <div className="mt-1 text-sm font-bold text-indigo-800">Math · 45 min</div>
                                            <div className="mt-0.5 text-xs text-neutral-500">Thu · 4:30 PM · bookable</div>
                                        </div>

                                        <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-2.5 shadow-sm sm:p-3">
                                            <div className="text-sm font-bold text-emerald-700">Lesson confirmed</div>
                                            <div className="mt-1 text-xs leading-snug text-neutral-600">IELTS · Ethan · Meet link sent</div>
                                        </div>
                                        <ScreenGate minWidth={640}>
                                        <div className="relative overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/60 to-white p-2.5 shadow-sm sm:p-3">
                                            <div className="text-sm font-bold text-sky-700">Auto reminder</div>
                                            <div className="relative mt-1 text-xs leading-snug text-neutral-600">SMS + email sent 30 min before class</div>
                                        </div>
                                        </ScreenGate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 pb-14 sm:py-20">
            <div className="absolute top-10 left-10 hidden sm:block w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 hidden sm:block w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
                <Heading
                    badge="Why tutors choose us"
                    title="Make Your Sessions Hassle-Free with the"
                    highlightText="Best Tutoring Scheduling Software"
                    description="Premium tools that replace spreadsheets, chat threads, and forgotten reminders with one calm scheduling workspace."
                    wrapperClassName="text-center max-w-4xl mx-auto mb-8 space-y-3"                    
                />

                <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4">
                    {whyChooseUs.map((item) => (
                      <Card
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        stat={item.stat}
                        statUnit={item.statLabel}
                        statClassName="text-2xl font-black text-indigo-700"
                      />
                    ))}
                </div>
            </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20">
            <div className="absolute inset-0 hidden sm:block">
              <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto grid items-center gap-6 px-4 sm:px-6 sm:px-8 sm:gap-10 lg:grid-cols-2">
                {/* LEFT CONTENT */}
                <div className="order-1 min-w-0 space-y-5 sm:space-y-6">
                    <Heading
                        badge="showcase"
                        title="Software With Easy Setup To Book More"
                        highlightText="Tutoring Sessions Online"
                        description="Manage calendar, students, availability, and bookings from a single calm workspace built for tutors."
                    />

                    <ul className="space-y-3">
                        {[
                            { 
                              title: "Set availability on your own booking rules.", 
                              detail: "Create a single or a recurring session, add a sign-up form, assign an instructor or tutor, and your booking page is ready to go live." 
                            },
                            { 
                              title: "Share your booking link", 
                              detail: "The booking link can be added to your website or social profiles and shared with your students via email or text. Scheduling reminders with video-conferencing links directly allow students to join their online classes with a single click."
                            },
                            { 
                              title: "Collect bookings and registrations", 
                              detail: "Students can find available slots and book, reschedule, or cancel on their own at any time. Every confirmed booking is added instantly to your calendar — no manual updates needed."
                            },
                          ].map((item, i) => (
                            <li
                                key={item.title}
                                className="flex items-start gap-3 rounded-2xl border border-white bg-white/90 p-3 drop-shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:drop-shadow-lg sm:p-4"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-sm font-bold text-white shadow-md shadow-indigo-500/25">
                                    0{i + 1}
                                </span>
                                <div>
                                    <p className="font-semibold text-neutral-900">{item.title}</p>
                                    <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">{item.detail}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT GRAPHICS — dashboard */}
                <div className="relative order-2 min-w-0">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-indigo-400/15 blur-2xl" aria-hidden />
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white drop-shadow-xl">
                        {/* Header */}
                        <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:px-5">
                            <div className="relative shrink-0">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-sm font-bold text-white shadow-md shadow-indigo-500/25">
                                    SR
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                                    <svg className="h-2 w-2 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" aria-hidden>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="truncate text-base font-bold text-neutral-900 sm:text-lg">Sarah Reyes</div>
                                <div className="truncate text-xs text-neutral-500">SAT Math · IELTS · Coding</div>
                            </div>
                        </div>

                        <div className="space-y-3 p-3 sm:p-4">
                            {/* 01 — Live calendar & lessons */}
                            <div className="rounded-xl md;border border-slate-100 md:bg-white md:p-3 md:drop-shadow-sm">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-start gap-2">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-indigo-600 text-xs font-semibold text-white">01</span>
                                        <div className="min-w-0">
                                            <div className="text-sm font-semibold text-neutral-900">Today&apos;s lessons</div>
                                            <div className="truncate text-xs text-neutral-500">Schedule · Google Meet · conflicts cleared</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-2">
                                    {[
                                        { time: "09:00", title: "SAT Math with Ava Chen", meta: "Google Meet ready · 55 min", status: "Next", statusClass: "bg-indigo-50 text-indigo-700 border-indigo-200" },
                                        { time: "11:30", title: "IELTS Speaking · Ethan", meta: "Reminder sent · 45 min", status: "Soon", statusClass: "bg-amber-50 text-amber-700 border-amber-200" },
                                        { time: "15:00", title: "Python basics · Maya", meta: "Google Meet · Trial", status: "Booked", statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                                    ].map((item, index) => (
                                        <div key={item.time} className={`flex gap-2 flex-col rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 min-[450px]:flex-row sm:items-start sm:gap-3 ${index >= 2 ? "hidden sm:flex" : ""}`}>
                                            <div className="shrink-0 min-[450px]:w-11 sm:pt-0.5 sm:text-center">
                                                <div className="text-xs font-bold text-neutral-900">{item.time}</div>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-wrap gap-1 flex-row sm:items-start justify-between sm:gap-2">
                                                    <div className="truncate text-sm font-semibold text-neutral-900">{item.title}</div>
                                                    <span className={`w-fit shrink-0 rounded-full border px-2 py-1 text-xs font-semibold ${item.statusClass}`}>{item.status}</span>
                                                </div>
                                                <div className="truncate text-xs text-neutral-500">{item.meta}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 02 Students + 03 Payments */}
                            <div className="grid gap-3 sm:grid-cols-5">
                                <div className="rounded-xl md:border md:border-slate-100 md:bg-white md:p-3 md:drop-shadow-sm sm:col-span-3">
                                    <div className="flex items-start gap-2">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-600 text-xs font-bold text-white">02</span>
                                        <div>
                                            <div className="text-sm font-semibold text-neutral-900">Students &amp; progress</div>
                                            <div className="text-xs text-neutral-500">Packages · attendance · goals</div>
                                        </div>
                                    </div>

                                    <div className="mt-3 space-y-2">
                                        {[
                                            { name: "Ava Chen", pkg: "12-lesson SAT", progress: 75, note: "Goal: 1450+" },
                                            { name: "Ethan Park", pkg: "8-lesson IELTS", progress: 50, note: "Attended 4/4" },
                                            { name: "Maya Lopez", pkg: "Trial · Coding", progress: 20, note: "1 of 1 done" },
                                        ].map((student, index) => (
                                            <div key={student.name} className={`rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 ${index >= 2 ? "hidden sm:block" : ""}`}>
                                                <div className="flex items-center justify-between gap-2">
                                                    <div className="min-w-0">
                                                        <div className="truncate text-sm font-semibold text-neutral-900">{student.name}</div>
                                                        <div className="truncate text-xs text-neutral-500">{student.pkg} · {student.note}</div>
                                                    </div>
                                                    <span className="shrink-0 text-xs font-bold text-sky-700">{student.progress}%</span>
                                                </div>
                                                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
                                                    <div className="h-full rounded-full bg-sky-500" style={{ width: `${student.progress}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <ScreenGate minWidth={640}>
                                <div className="rounded-xl md:border md:border-slate-100 md:bg-white md:p-3 md:drop-shadow-sm sm:col-span-2">
                                    <div className="flex items-start gap-2">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-600 text-xs font-bold text-white">03</span>
                                        <div>
                                            <div className="text-sm font-semibold text-neutral-900">Availability</div>
                                            <div className="text-xs text-neutral-500">Shareable booking windows</div>
                                        </div>
                                    </div>
                                    <div className="mt-3 grid grid-cols-2 gap-1.5">
                                        {[
                                            { label: "11:00", open: false },
                                            { label: "11:30", open: true },
                                            { label: "13:00", open: true },
                                            { label: "14:30", open: true },
                                            { label: "15:00", open: false },
                                            { label: "17:00", open: true },
                                        ].map((slot) => (
                                            <span
                                                key={slot.label}
                                                className={`rounded-lg px-2 py-1.5 text-center text-[11px] font-semibold ${
                                                    slot.open
                                                        ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                                                        : "border border-red-200 bg-red-50 text-red-700 line-through"
                                                }`}
                                            >
                                                {slot.label}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-emerald-700">Active link</span>
                                        </div>
                                        <div className="mt-1 text-xs font-medium text-neutral-700">Shared on website, WhatsApp &amp; email</div>
                                    </div>
                                </div>
                                </ScreenGate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* STUDENT BOOKING FLOW SECTION */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef2ff_0%,#f8fafc_45%,#ffffff_100%)] py-14 sm:py-20">
            <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
                <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />
                <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
              <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="relative order-2 min-w-0 lg:order-1 lg:col-span-7 lg:pb-2">
                  <BookingFlowConsole steps={bookingSteps.map(({ step, title, description }) => ({ step, title, description }))} />
                </div>

                <div className="order-1 min-w-0 space-y-4 lg:order-2 lg:col-span-5">
                  <Heading
                      badge="booking flow"
                      title="Let's Allow Students to Book Sessions Anytime with"
                      highlightText="Online Tutoring Management Software."
                      description="Highlight your course availability on your booking page and let students book in a few clicks — no back-and-forth required."
                  />
                  <div className="space-y-3">
                    {[
                      "Students visit your booking page and select the tutor",
                      "Choose the subject they want to learn",
                      "Pick an available time slot that suits them",
                      "Confirm the appointment",
                      "Receive instant confirmation message via WhatsApp, email, or text",
                      "Get the class link ahead of the session, ready to join",
                    ].map((point) => (
                      <CheckListItem key={point} text={point} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
        </section>

        {/* TUTOR CATEGORIES SECTION */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef2ff_0%,#f8fafc_45%,#ffffff_100%)] py-14 sm:py-20">
            <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
                <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
                <div className="absolute right-8 bottom-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
                <Heading
                    badge="Tutor categories"
                    title="Built for every kind of"
                    highlightText="teaching professional"
                    description=""
                    wrapperClassName="text-center mb-6 space-y-4"
                    titleClassName="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-[40px] capitalize"
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {tutorCategories.map((category) => (
                        <Card
                            key={category.title}
                            title={category.title}
                            description={category.description}
                            stat={`${category.students} students`}
                            statPosition="below"
                            statClassName="text-xs rounded-full border border-neutral-200 bg-neutral-100 drop-shadow-sm px-2 py-1 w-fit"
                            titleClassName="text-base font-semibold text-indigo-600"
                            wrapperClassName="relative"
                        />
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#f8fafc_100%)] py-14 sm:py-20">
            
            <div className="absolute inset-0 hidden sm:block pointer-events-none">
                <div className="absolute left-[-6rem] top-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
                <div className="absolute right-[-3rem] top-10 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
            </div>

            <div className="relative container mx-auto grid items-center gap-6 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
                {/* left: Title */}
                <div className="min-w-0 space-y-3">
                    <Heading
                      badge="Frequently Asked Questions"
                      title="Questions Tutors Ask Before Getting Started"
                      description="GetSetTime is built for tutors who want to convert inquiries into confirmed lessons. Here are answers to the most common questions about our scheduling platform."
                      titleClassName="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl lg:text-[40px] capitalize"
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
                <div className="min-w-0">
                    <FaqSection items={faqItems} />
                </div>
            </div>
        </section>

        {/* Call-to-Action Section */}
        <SolutionCtaSection
          badge="Built for Tutors & Educators"
          businessType="Tutor & Educator"
      />
    </>
  );
}
