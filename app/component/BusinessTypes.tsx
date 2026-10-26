"use client";

import type { FC } from "react";
import { useState } from "react";

const SectionTitle: FC<{ eyebrow: string; title: string; desc?: string }> = ({ eyebrow, title, desc }) => (
  <div className="mx-auto max-w-3xl">
    <div className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">{eyebrow}</div>
    <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">{title}</h2>
    {desc ? (
      <p className="mt-3 text-neutral-600">{desc}</p>
    ) : null}
  </div>
);

const BusinessTabs: FC<{ tabs: string[]; active: string; onChange: (v: string) => void }> = ({ tabs, active, onChange }) => (
  <div role="tablist" aria-label="Business types" className="inline-flex items-center rounded-2xl bg-white/60 p-1 drop-shadow-sm">
    {tabs.map((t) => (
      <button
        key={t}
        role="tab"
        aria-selected={active === t}
        aria-controls={`panel-${t.toLowerCase()}`}
        id={`tab-${t.toLowerCase()}`}
        type="button"
        onClick={() => onChange(t)}
        className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
          active === t
            ? "bg-neutral-900 text-white drop-shadow"
            : "text-neutral-700 hover:bg-white/70"
        }`}
      >
        {t}
      </button>
    ))}
  </div>
);

const BusinessCard: FC<{ title: string; points: string[]; icon: string }> = ({ title, points, icon }) => (
  <article className="group rounded-2xl p-5 bg-white/50 backdrop-blur-md drop-shadow-sm hover:drop-shadow-xl transition-all duration-300 hover:-translate-y-1" aria-label={title}>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-lg drop-shadow-md" aria-hidden="true">{icon}</div>
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
    </div>
    <ul className="mt-3 space-y-2 list-none">
      {points.map((p, i) => (
        <li key={i} className="text-xs text-neutral-600 flex items-start gap-2">
          <span className="mt-0.5 text-indigo-500" aria-hidden="true">•</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </article>
);

const BusinessTypes: FC = () => {
  const [active, setActive] = useState<string>("Fitness");
  const tabs = ["Fitness", "Medical", "Beauty", "Education", "Home", "Consulting"];

  const content: Record<string, Array<{ title: string; points: string[]; icon: string }>> = {
    Fitness: [
      { title: "Classes & PT", icon: "🏋️", points: ["Group capacity & waitlists", "Membership credits & passes", "Coach availability & overrides"] },
      { title: "Studios", icon: "🧘", points: ["Multi-room resources", "Recurring bookings", "Kiosk check‑in"] },
      { title: "Payments", icon: "💳", points: ["Deposits & no‑show fees", "POS support", "Discount codes"] },
    ],
    Medical: [
      { title: "Clinics", icon: "🏥", points: ["Intake & consent forms", "HIPAA-friendly patterns", "Provider specialties"] },
      { title: "Reminders", icon: "🔔", points: ["SMS & email confirmations", "Prep instructions", "Follow-ups"] },
      { title: "Coordination", icon: "🗂️", points: ["Referrals & notes", "Document uploads", "Family bookings"] },
    ],
    Beauty: [
      { title: "Salons & Spas", icon: "💅", points: ["Add-ons extend duration", "Colorist + chair resources", "Packages & tips"] },
      { title: "No-shows", icon: "⏰", points: ["Predictive reminders", "Late cancel fees", "Auto waitlist fill"] },
      { title: "Experience", icon: "✨", points: ["Photo galleries", "Aftercare links", "Reviews prompts"] },
    ],
    Education: [
      { title: "Tutoring", icon: "📚", points: ["1:1 & group sessions", "Zoom/Meet links", "Parent-managed accounts"] },
      { title: "Courses", icon: "🧩", points: ["Cohort scheduling", "Attendance tracking", "Certificates"] },
      { title: "Payments", icon: "💳", points: ["Installments", "Scholarship codes", "Invoices"] },
    ],
    Home: [
      { title: "Home Services", icon: "🧰", points: ["Travel buffers by distance", "Crew assignment", "Photo & notes on completion"] },
      { title: "Windows", icon: "🪟", points: ["Time windows", "Route optimization", "Partial-day holds"] },
      { title: "Follow-ups", icon: "📨", points: ["Service reminders", "Warranty links", "Reviews"] },
    ],
    Consulting: [
      { title: "Consults", icon: "👔", points: ["Paid discovery calls", "Contract & e-sign", "Retainer sessions"] },
      { title: "Teams", icon: "👥", points: ["Round-robin assign", "Client orgs & SSO", "Time zone routing"] },
      { title: "Analytics", icon: "📈", points: ["Pipeline view", "Conversion & LTV", "Source attribution"] },
    ],
  };

  return (
    <section id="business-types" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-50/40 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <SectionTitle eyebrow="Use Cases" title="Tailored for your business type" desc="Minimal, modern layouts that adapt to your workflow." />
          <BusinessTabs tabs={tabs} active={active} onChange={setActive} />
        </div>
        <div
          id={`panel-${active.toLowerCase()}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.toLowerCase()}`}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {content[active].map((c) => (
            <BusinessCard key={c.title} title={c.title} icon={c.icon} points={c.points} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;


