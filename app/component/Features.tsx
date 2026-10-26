"use client";
import type { FC } from "react";
import { useState, useEffect } from "react";
import Heading from "./Heading";
import Card from "./Card";

export const TimelineItem: FC<{ step: number; title: string; desc: string }> = ({ step, title, desc }) => (
  <div className="relative pl-8 pb-2 last:pb-0">
    <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-indigo-500 to-transparent" />
    <div className="absolute left-[-4px] top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white drop-shadow-lg">
      {step}
    </div>
    <div className="font-semibold text-neutral-900">{title}</div>
    <p>{desc}</p>
  </div>
);

export const TrustBar: FC = () => (
  <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
    <p>Trusted by teams scheduling over <span className="font-semibold text-indigo-600">2M+</span> appointments</p>
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
      <span className="px-3 py-1 rounded-md bg-white drop-shadow-sm">DKIM/DMARC</span>
      <span className="px-3 py-1 rounded-md bg-white drop-shadow-sm">PCI-DSS</span>
      <span className="px-3 py-1 rounded-md bg-white drop-shadow-sm">GDPR</span>
      <span className="px-3 py-1 rounded-md bg-white drop-shadow-sm">99.9% Uptime</span>
    </div>
  </div>
);

export const Tabs: FC<{ tabs: string[]; active: string; onChange: (v: string) => void }> = ({ tabs, active, onChange }) => (
  <div className="flex items-center justify-center overflow-x-auto py-2 hide-scrollbar">
    <div className="flex items-center justify-center flex-wrap gap-1 bg-white rounded-xl p-2 drop-shadow-sm">
      {tabs.map((t) => (
        <button key={t} type="button" onClick={() => onChange(t)} className={`px-2 py-2 sm:px-4 sm:py-2 rounded-xl text-sm cursor-pointer ${ active === t ? "bg-indigo-600 text-white drop-shadow-md" : "hover:bg-indigo-500/10 hover:text-indigo-600"}`}>{t}</button>
      ))}
    </div>
  </div>
);

export const AdminPanel: FC = () => (
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-scale">
    
    <div className="bg-white rounded-xl p-4 drop-shadow-lg space-y-3">
      <div className="font-semibold text-neutral-900">Admin Roles</div>
      <p>Sign up, stay updated, and analyze workflow to make the right decision</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {[
          "Keep update-to-date Dashboard",
          "Add Service and Staff",
          "Define roles and assign ",
          "Create events and set availability",
        ].map((i, index) => (
          <div key={i} className="px-4 py-3 rounded-xl bg-neutral-100 transition-all duration-300 hover:drop-shadow-md" style={{ animationDelay: `${index * 100}ms` }}>{i}</div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-xl p-4 drop-shadow-lg space-y-3">
      <div className="font-semibold text-neutral-900">Reports & insights</div>
      <p>Take the right decision based on real-time data</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {[
          "Resource Utilization",
          "Analyze users experience",
          "Access the client's history",
          "Promotion and Branding",
        ].map((i, index) => (
          <div key={i} className="px-4 py-3 rounded-xl bg-neutral-100 transition-all duration-300 hover:drop-shadow-md" style={{ animationDelay: `${index * 100 + 400}ms` }}>{i}</div>
        ))}
      </div>
    </div>
  </div>
);

export const CustomerPanel: FC = () => (
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-scale">
    <div className="bg-white rounded-xl p-4 drop-shadow-lg space-y-3">
      <div className="font-semibold text-neutral-900">Customer experience</div>
      <p>Mobile-first, accessible flows with instant confirmations and reminders.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {[
          "One-tap reschedule",
          "Two-way SMS",
          "Calendar sync",
          "Localized UI",
        ].map((i, index) => (
          <div key={i} className="px-4 py-3 rounded-xl bg-neutral-100 transition-all duration-300 hover:drop-shadow-md" style={{ animationDelay: `${index * 100}ms` }}>{i}</div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-xl p-4 drop-shadow-lg space-y-3">
      <div className="font-semibold text-neutral-900">Engagement</div>
      <p>Reminders, confirmations, and follow-ups that reduce no-shows.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {[
          "Email/SMS and WhatsApp reminders",
          "ICS calendar invites",
          "Reschedule links",
          "Feedback prompts",
        ].map((i, index) => (
          <div key={i} className="px-4 py-3 rounded-xl bg-neutral-100 transition-all duration-300 hover:drop-shadow-md" style={{ animationDelay: `${index * 100 + 400}ms` }}>{i}</div>
        ))}
      </div>
    </div>
  </div>
);

export default function Features() {
  const [active, setActive] = useState<string>("Overview");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="features" className="relative py-14 sm:py-20 scroll-mt-20">
      
      <div className="absolute top-10 left-4 sm:top-16 sm:left-6 md:top-20 md:left-10 hidden sm:block w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-indigo-600/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-4 sm:bottom-16 sm:right-6 md:bottom-20 md:right-10 hidden sm:block w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float" />

      <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative">
            <Heading
              badge="Built-In Features"
              title="A Customised System Designed For Real Results"
              description="Replace manual scheduling havoc and operational complexity with world-class appointment management software."
              wrapperClassName="space-y-3 text-center"
            />

            <div className="mt-6">
              <Tabs
                tabs={["Overview", "Flow", "Admin", "Customer"]}
                active={active}
                onChange={setActive}
              />
            </div>

            {active === "Overview" && mounted && (
              <div className="mt-10 animate-fade-in-scale">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card title="Smart Appointments Management" description="Effortlessly manage multiple client bookings simultaneously with smart tracking, dynamic availability rules, and automated team confirmations." icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />
                  
                  <Card title="Queue Management" description="Automatically re-assigns cancelled appointment slots to eligible clients using dynamic priority rules and intelligent allocation logic." icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                  <Card title="Personalized Booking Forms" description="Create customized booking forms based on service selection, staff preference, and appointment categories." icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                  <Card title="Resource & Staff Scheduling" description="Enable staff to coordinate schedules, share resources, and manage assignments through transparent communication tools." icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                  <Card title="Empowered client access" description="Allow clients to independently reschedule, cancel, and manage within customizable business policies and service-specific scheduling rules." icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                  <Card title="Real Time Reporting" description="Track live booking analytics, appointment trends, and team performance metrics with intelligent dashboards" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />
                </div>
                <div className="hidden lg:block"><TrustBar /></div>
              </div>
              
            )}

            {active === "Flow" && mounted && (
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start animate-fade-in-scale">
                <div className="lg:col-span-2 rounded-xl">
                  <div className="text-lg font-semibold text-neutral-900 mb-3">How Booking Process Works</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <Card title="Follow Booking Link" description="Allow clients to choose the service, already added." icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                    <Card title="Pick Slots" description="Based on the duration and availability" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                    <Card title="Fill Up Details" description="Name, contact details, and others, if any" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />

                    <Card title="Confirm & Pay" description="Send confirmation on sms, WhatsApp, and email. Optional online payments" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} iconWrapperClassName = "w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white drop-shadow-md" wrapperClassName = "relative" />                    
                  </div>
                </div>
                
                <div className="space-y-4">
                  <TimelineItem step={1} title="Add Service & Staff" desc="It makes it easy for Users to choose a service and assign staff." />
                  <TimelineItem step={2} title="Smart availability" desc="Set your availability once, forget double booking conflicts" />
                  <TimelineItem step={3} title="Forms & policies" desc="Conditional fields, consent, cancellation windows, and deposits." />
                  <TimelineItem step={4} title="Payment & reminders" desc="Make your own rules for payments and for sending reminders." />
                </div>
              </div>
            )}

            {active === "Admin" && mounted && (
              <AdminPanel />
            )}

            {active === "Customer" && mounted && (
              <CustomerPanel />
            )}
          </div>        
        </div>
      </div>
    </section>
  );
};