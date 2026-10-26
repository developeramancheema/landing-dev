"use client";

import { useState } from "react";
import InternationalPhoneField, {
  isValidInternationalPhone,
} from "./InternationalPhoneField";
import { COUNTRY_LIST } from "@/lib/CountryList";

type FormData = {
  fullName: string;
  businessName: string;
  businessType: string;
  website: string;
  country: string;
  email: string;
  phone: string;
  bookingMethod: string;
  staffCount: string;
  services: string;
  preferredTime: string;
};

const businessTypes = [
  "Clinic / Healthcare",
  "Dental Clinic",
  "Physiotherapy Clinic",
  "Salon & Beauty",
  "Personal Meetings",
  "Sports & Fitness",
  "Other",
];

const countries = COUNTRY_LIST.map((country) => country.name + " (" + country.iso + ")");

const bookingMethods = [
  "In Person",
  "Phone",
  "Google Meet",
  "Other",
];

const staffCounts = ["Just me", "2–5", "6–10", "11–25", "26+"];

const preferredTimes = [
  "Full Day (9 AM – 5 PM)",
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 8 PM)",
  "Custom",
];

function FieldLabel({ children, required = true }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-xs font-medium text-neutral-700">
      {children}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
}

function InputIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
      {children}
    </span>
  );
}

function SelectChevron() {
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" aria-hidden>
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function FreeBookingSetupForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessName: "",
    businessType: "",
    website: "",
    country: "",
    email: "",
    phone: "",
    bookingMethod: "",
    staffCount: "",
    services: "",
    preferredTime: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const required = [
      formData.fullName,
      formData.businessName,
      formData.businessType,
      formData.country,
      formData.email,
      formData.phone,
      formData.bookingMethod,
      formData.staffCount,
      formData.services,
      formData.preferredTime,
    ];

    if (required.some((v) => !v)) {
      setStatus("error");
      setErrorMessage("Please fill all required fields.");
      return;
    }

    if (!isValidInternationalPhone(formData.phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid phone number with country code.");
      return;
    }

    try {
      setStatus("sending");
      setErrorMessage("");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "free-booking",
          fullName: formData.fullName,
          businessName: formData.businessName,
          businessType: formData.businessType,
          website: formData.website,
          country: formData.country,
          email: formData.email,
          phone: formData.phone,
          bookingMethod: formData.bookingMethod,
          staffCount: formData.staffCount,
          services: formData.services,
          preferredTime: formData.preferredTime,
        }),
      });

      const resClone = res.clone();

      if (!res.ok) {
        let errorMsg = `Error ${res.status}`;
        try {
          const errData = await res.json();
          errorMsg = errData.error || errorMsg;
        } catch {
          const text = await resClone.text();
          errorMsg = text || errorMsg;
        }
        throw new Error(errorMsg);
      }

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          businessName: "",
          businessType: "",
          website: "",
          country: "",
          email: "",
          phone: "",
          bookingMethod: "",
          staffCount: "",
          services: "",
          preferredTime: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage((err as Error).message || "Network error. Please try again.");
    }
  };

  const inputClass = "block w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#3D3AF3] focus:outline-none focus:ring-2 focus:ring-[#3D3AF3]/20 sm:py-2.5";
  const selectClass = "block w-full rounded-lg border border-neutral-200 bg-white py-3 pl-10 pr-10 text-sm text-neutral-800 focus:border-[#3D3AF3] focus:outline-none focus:ring-2 focus:ring-[#3D3AF3]/20 appearance-none sm:py-2.5";
  const textareaClass = "block w-full rounded-lg border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#3D3AF3] focus:outline-none focus:ring-2 focus:ring-[#3D3AF3]/20 sm:py-2.5";

  return (
    <div id="apply-form" className="mx-auto w-full rounded-2xl border border-neutral-200 bg-white p-4 drop-shadow-lg sm:p-6">
      <div className="mb-4 text-center sm:mb-5">
        <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">Apply for Free Setup</h2>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500">
          Fill out the form and we&apos;ll create your booking page free in 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3.5" aria-live="polite">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-3.5">
          <div>
            <FieldLabel>Full Name</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </InputIcon>
              <input
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <FieldLabel>Business Name</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
              </InputIcon>
              <input
                name="businessName"
                type="text"
                required
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-3.5">
          <div>
            <FieldLabel>Business Type</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </InputIcon>
              <select
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select your business type</option>
                {businessTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>

          <div>
            <FieldLabel required={false}>Website or Instagram Link</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </InputIcon>
              <input
                name="website"
                type="url"
                placeholder="https:// or @instagram"
                value={formData.website}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-3.5">
          <div>
            <FieldLabel>Country</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </InputIcon>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select your country</option>
                {countries.map((isoCode) => (
                  <option key={isoCode} value={isoCode}>{isoCode}</option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>

          <div>
            <FieldLabel>Email</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </InputIcon>
              <input
                name="email"
                type="email"
                required
                placeholder="you@business.com"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-3.5">
          <div className="relative">
            <FieldLabel>WhatsApp / Phone</FieldLabel>
            <InternationalPhoneField
              id="booking-phone"
              name="phone"
              required
              variant="booking"
              placeholder="Phone"
              value={formData.phone}
              onChange={(phone) => {
                setFormData((prev) => ({ ...prev, phone }));
                if (errorMessage) setErrorMessage("");
              }}
              className="text-xs"
            />
          </div>

          <div>
            <FieldLabel>How do you currently take bookings?</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </InputIcon>
              <select
                name="bookingMethod"
                required
                value={formData.bookingMethod}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select your booking method</option>
                {bookingMethods.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-3.5">
          <div>
            <FieldLabel>How many staff/providers do you have?</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </InputIcon>
              <select
                name="staffCount"
                required
                value={formData.staffCount}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select number of staff/providers</option>
                {staffCounts.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>

          <div>
            <FieldLabel>Preferred call/demo time</FieldLabel>
            <div className="relative">
              <InputIcon>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </InputIcon>
              <select
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
                className={selectClass}
              >
                <option value="">Select preferred time</option>
                {preferredTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>
        </div>

        <div>
          <FieldLabel>Main services you offer</FieldLabel>
          <div className="relative">
            <textarea
              name="services"
              required
              rows={3}
              placeholder="e.g. Haircut, coloring, spa treatments..."
              value={formData.services}
              onChange={handleChange}
              className={textareaClass}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-[#3D3AF3] px-4 py-3.5 text-sm font-semibold text-white drop-shadow-md transition hover:bg-[#3532db] disabled:opacity-70 sm:py-3 cursor-pointer"
        >
          {status === "sending" ? "Submitting…" : "Claim My Free Booking Page"}
        </button>

        {status === "success" && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
            Application received! We&apos;ll contact you within 24 hours.
          </div>
        )}
        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {errorMessage || "Something went wrong. Please try again."}
          </div>
        )}

        <div className="flex items-start gap-2 text-xs leading-relaxed text-neutral-400 sm:items-center">
          <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:mt-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your information is 100% secure and never shared.
        </div>
      </form>
    </div>
  );
}
