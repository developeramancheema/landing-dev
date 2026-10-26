"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import InternationalPhoneField, {
  isValidInternationalPhone,
} from "./InternationalPhoneField";

type FormData = {
  fullName: string;
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  staffCount: string;
  bookingMethod: string;
  improvements: string[];
  additionalInfo: string;
};

const businessTypeOptions = [
  "Clinic / Healthcare",
  "Dental Clinic",
  "Physiotherapy Clinic",
  "Salon & Beauty",
  "Personal Meetings",
  "Sports & Fitness",
  "Other",
];

function getBusinessTypeOptions(selected?: string): string[] {
  if (selected && !businessTypeOptions.includes(selected)) {
    return [selected, ...businessTypeOptions];
  }
  return businessTypeOptions;
}

const staffCounts = ["Just me", "2–5", "6–10", "11–25", "26+"];

const STEPS = [
  { number: 1, title: "Your Details", subtitle: "Quick information" },
  { number: 2, title: "More Details", subtitle: "Almost done!" },
  { number: 3, title: "You're All Set", subtitle: "Demo on the way" },
];

const improvementOptions = [
  {
    id: "no-shows",
    label: "Reduce no-shows & cancellations",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        <path d="m15 15-3-3-3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "automation",
    label: "Save time with automation",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "team",
    label: "Manage team & staff schedules",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "payments",
    label: "Accept online payments",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Improve customer experience",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "other",
    label: "Other",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
      </svg>
    ),
  },
];

const bookingMethods = [
  "In Person",
  "Phone",
  "Google Meet",
  "Other",
];

function getStepSubtitle(stepNum: number, currentStep: number): string {
  if (currentStep > stepNum) return "Completed";
  if (currentStep === 3 && stepNum === 3) return "We'll be in touch!";
  return STEPS[stepNum - 1].subtitle;
}

const createEmptyFormData = (defaultBusinessType: string): FormData => ({
  fullName: "",
  businessName: "",
  businessType: defaultBusinessType,
  email: "",
  phone: "",
  bookingMethod: "",
  staffCount: "",
  improvements: [],
  additionalInfo: "",
});

type DemoFreeFormProps = {
  /** Pre-selected business type label from the solution page */
  businessType?: string;
};

function FieldLabel({
  children,
  required = true,
  optional = false,
}: {
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-neutral-800">
      {children}
      {optional && <span className="font-normal text-neutral-400"> (Optional)</span>}
      {required && !optional && <span className="text-red-500"> *</span>}
    </label>
  );
}

function InputIcon({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${ accent ? "text-indigo-500" : "text-neutral-400"
      }`}>{children}</span>
  );
}

function validateStep(step: number, data: FormData): string | null {
  if (step !== 1) return null;
  if (!data.fullName.trim()) return "Please enter your full name.";
  if (!data.businessName.trim()) return "Please enter your business name.";
  if (!data.email.trim()) return "Please enter your work email.";
  if (!data.phone.trim() || !isValidInternationalPhone(data.phone)) {
    return "Please enter a valid phone number with country code.";
  }
  if (!data.businessType) return "Please select your business type.";
  return null;
}

export default function DemoFreeForm({ businessType }: DemoFreeFormProps = {}) {
  const defaultBusinessType = businessType ?? "Select Business Type";
  const businessTypes = getBusinessTypeOptions(defaultBusinessType);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(() => createEmptyFormData(defaultBusinessType));
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleAdditionalInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, 300);
    setFormData((prev) => ({ ...prev, additionalInfo: value }));
    if (errorMessage) setErrorMessage("");
  };

  const toggleImprovement = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      improvements: prev.improvements.includes(id)
        ? prev.improvements.filter((item) => item !== id)
        : [...prev.improvements, id],
    }));
    if (errorMessage) setErrorMessage("");
  };

  const goNext = () => {
    const error = validateStep(step, formData);
    if (error) {
      setStatus("error");
      setErrorMessage(error);
      return;
    }
    setStatus("");
    setErrorMessage("");
    setStep((s) => Math.min(s + 1, 2));
  };

  const goBack = () => {
    setStatus("");
    setErrorMessage("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const submitDemoRequest = async () => {
    if (step !== 2 || status === "sending") return;

    const step1Error = validateStep(1, formData);
    if (step1Error) {
      setStatus("error");
      setErrorMessage(step1Error);
      setStep(1);
      return;
    }

    const selectedImprovements = improvementOptions
      .filter((option) => formData.improvements.includes(option.id))
      .map((option) => option.label);

    try {
      setStatus("sending");
      setErrorMessage("");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "demo",
          fullName: formData.fullName,
          businessName: formData.businessName,
          businessType: formData.businessType,
          email: formData.email,
          phone: formData.phone,
          staffCount: formData.staffCount,
          bookingMethod: formData.bookingMethod,
          improvements: selectedImprovements,
          additionalInfo: formData.additionalInfo,
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
        setStatus("");
        setErrorMessage("");
        setFormData(createEmptyFormData(defaultBusinessType));
        setStep(3);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage((err as Error).message || "Network error. Please try again.");
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) goNext();
  };

  const inputClass = "block w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#3D3AF3] focus:outline-none focus:ring-2 focus:ring-[#3D3AF3]/20";
  const selectClass = "block w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-8 text-sm text-neutral-800 focus:border-[#3D3AF3] focus:outline-none focus:ring-2 focus:ring-[#3D3AF3]/20 appearance-none";

  return (
    <div id="apply-form" className="mx-auto rounded-2xl border border-neutral-200 bg-white p-5 drop-shadow-lg sm:p-6 ">
      {/* Step indicator — visible on all steps */}
      <div className="mb-6 border-b-2 border-neutral-200 pb-4">
        <div className="flex w-full items-start" role="list" aria-label="Form progress">
          {STEPS.map((s, i) => {
            const isCompleted = step > s.number;
            const isActive = step === s.number;

            return (
              <Fragment key={s.number}>
                <div role="listitem" className="relative flex min-w-0 flex-1 flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-1.5 text-center md:text-left lg:text-center xl:text-left"
                  aria-current={isActive ? "step" : undefined}>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors sm:text-sm ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : isCompleted
                          ? "bg-indigo-50 text-indigo-600 drop-shadow-[inset_0_1px_3px_rgba(79,70,229,0.12)]"
                          : "bg-indigo-50 text-indigo-600 drop-shadow-sm"
                    }`}
                  >
                    {isCompleted ? (
                      <svg
                        className="h-3.5 w-3.5 text-indigo-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      s.number
                    )}
                  </div>
                  <div className="min-w-0 w-full">
                    <div
                      className={`text-[10px] font-bold leading-tight sm:text-xs md:text-sm ${
                        isActive ? "text-indigo-600" : "text-neutral-900"
                      }`}
                    >
                      {s.title}
                    </div>
                    <div className="mt-0.5 hidden text-[10px] leading-tight text-neutral-500 min-[400px]:block sm:text-xs">
                      {getStepSubtitle(s.number, step)}
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-4 left-1 right-1 h-0.5 rounded-full transition-colors sm:-bottom-[18px] ${
                      isActive ? "bg-indigo-600" : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="mt-4 h-px w-3 shrink-0 self-start bg-neutral-200 sm:mt-[18px] sm:w-4 md:mx-1 md:w-6"
                    aria-hidden
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <form onSubmit={onFormSubmit} noValidate className="space-y-3.5" aria-live="polite">
        {/* Step 1: Business Info */}
        {step === 1 && (
          <div className="animate-fade-in space-y-4">
            <div>
              <div className="text-sm font-bold text-indigo-600">Step {STEPS[0].number} of {STEPS.length}</div>
              <h2 className="mt-1 text-2xl font-bold text-neutral-900">Tell us about your business</h2>
              <p className="mt-1 text-sm text-neutral-500">It takes less than a minute.</p>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div>
                <FieldLabel>Full Name</FieldLabel>
                <div className="relative">
                  <InputIcon>
                    <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </InputIcon>
                  <input
                    name="fullName"
                    type="text"
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
                    <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    </svg>
                  </InputIcon>
                  <input
                    name="businessName"
                    type="text"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <FieldLabel>Work Email</FieldLabel>
                <div className="relative">
                  <InputIcon>
                    <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </InputIcon>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your work email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <FieldLabel>Phone / WhatsApp</FieldLabel>
                <InternationalPhoneField
                  id="demo-phone"
                  name="phone"
                  variant="demo"
                  placeholder="Enter your phone / WhatsApp"
                  value={formData.phone}
                  onChange={(phone) => {
                    setFormData((prev) => ({ ...prev, phone }));
                    if (errorMessage) setErrorMessage("");
                  }}
                />
              </div>
            </div>

            <div>
              <FieldLabel>Business Type</FieldLabel>
              <div className="relative">
                <InputIcon>
                <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                </InputIcon>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={selectClass}
                >
                  {businessTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {businessType && formData.businessType === defaultBusinessType && (
                <div className="mt-1.5 flex items-center gap-1 text-xs font-medium text-green-600">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Pre-selected for {defaultBusinessType} businesses
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 rounded-xl bg-indigo-50 px-4 py-3.5">
              <span className="mt-0.5 shrink-0 text-indigo-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-indigo-700">Your information is safe with us.</p>
                <p className="text-sm text-indigo-600">We&apos;ll never share your details with anyone.</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Additional Details */}
        {step === 2 && (
          <div className="animate-fade-in space-y-4">
            <div>
              <div className="text-sm font-bold text-indigo-600">Step {STEPS[1].number} of {STEPS.length}</div>
              <h2 className="mt-1 text-2xl font-bold text-neutral-900">Help us understand you better</h2>
              <p className="mt-1 text-sm text-neutral-500">This helps us personalize your demo experience.</p>
            </div>

            <div>
              <FieldLabel optional>Team Size</FieldLabel>
              <div className="relative">
                <InputIcon accent>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </InputIcon>
                <select
                  name="staffCount"
                  value={formData.staffCount}
                  onChange={handleChange}
                  className={selectClass}
                  aria-label="Team size"
                >
                  <option value="">Select team size</option>
                  {staffCounts.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <FieldLabel optional>Current Booking Method</FieldLabel>
              <div className="relative">
                <InputIcon accent>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                  </svg>
                </InputIcon>
                <select
                  name="bookingMethod"
                  value={formData.bookingMethod}
                  onChange={handleChange}
                  className={selectClass}
                  aria-label="Current booking method"
                >
                  <option value="">Select your current method</option>
                  {bookingMethods.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-neutral-900">
                What would you like to improve with GetSetTime?
                <span className="block font-normal text-neutral-400">(Optional)</span>
              </label>
              <div className="space-y-2">
                {improvementOptions.map((option) => {
                  const selected = formData.improvements.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleImprovement(option.id)}
                      className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left text-sm font-medium transition ${
                        selected
                          ? "border-indigo-600 bg-indigo-50 text-neutral-900"
                          : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300"
                      }`}
                    >
                      <span className={selected ? "text-indigo-600" : "text-indigo-500"}>{option.icon}</span>
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <FieldLabel optional>Anything else we should know?</FieldLabel>
              <div className="relative">
                <textarea
                  name="additionalInfo"
                  rows={4}
                  placeholder="Tell us more about your business or requirements..."
                  value={formData.additionalInfo}
                  onChange={handleAdditionalInfoChange}
                  className="block w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-[#3D3AF3] focus:outline-none focus:ring-2 focus:ring-[#3D3AF3]/20"
                />
                <span className="pointer-events-none absolute bottom-2.5 right-3 text-xs text-neutral-400">
                  {formData.additionalInfo.length}/300
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="animate-fade-in space-y-5">
            <div className="text-center">
              <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-green-100/80" />
                <span className="absolute -left-1 top-2 h-2 w-2 rounded-sm bg-purple-400" />
                <span className="absolute right-0 top-1 h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="absolute -right-1 bottom-3 h-2 w-2 rounded-sm bg-orange-400" />
                <span className="absolute bottom-1 left-2 h-2 w-2 rounded-full bg-indigo-400" />
                <span className="absolute left-4 top-0 h-1.5 w-1.5 rounded-full bg-pink-400" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white drop-shadow-sm">
                  <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">Thank You!</h2>
              <p className="mt-2 text-lg font-bold text-neutral-900">Your demo request has been received.</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-neutral-500">Our team will review your details and get back to you within 24 hours to schedule your personalized demo.</p>
            </div>

            <div className="rounded-xl bg-indigo-50 px-4 py-4 sm:px-5">
              <h3 className="text-base font-bold text-neutral-900">What happens next?</h3>
              <div className="mt-4 space-y-0">
                {[
                  {
                    title: "We'll contact you within 24 hours",
                    description: "Our expert will reach out via email or phone.",
                    icon: (
                      <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                        <path d="m9 16 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                  {
                    title: "Personalized demo & setup guidance",
                    description: "See how GetSetTime fits your business.",
                    icon: (
                      <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                        <path d="M12 7v4M10 9h4" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                  {
                    title: "Start managing bookings like a pro!",
                    description: "Simplify scheduling and grow your business.",
                    icon: (
                      <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ),
                  },
                ].map((item, index, items) => (
                  <div key={item.title} className="relative flex gap-3 pb-5 last:pb-0">
                    {index < items.length - 1 && (
                      <div className="absolute left-[17px] top-9 h-[calc(100%-12px)] w-px bg-neutral-200" />
                    )}
                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-bold text-neutral-900">{item.title}</p>
                      <p className="mt-0.5 text-sm text-neutral-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl bg-green-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-green-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="8" width="18" height="13" rx="2" />
                    <path d="M12 8V5" strokeLinecap="round" />
                    <path d="M8 5h8" strokeLinecap="round" />
                    <path d="M12 12v4M10 14h4" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-green-700">While you wait...</p>
                  <p className="text-sm text-neutral-600">Explore GetSetTime and see how it works.</p>
                </div>
              </div>
              <Link
                href="/features"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Explore Features
              </Link>
            </div>

            <div className="flex gap-3 rounded-xl bg-indigo-50 px-4 py-3.5">
              <span className="mt-0.5 shrink-0 text-indigo-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-indigo-700">Your information is safe with us.</p>
                <p className="text-sm text-indigo-600">We&apos;ll never share your details with anyone.</p>
              </div>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {errorMessage || "Something went wrong. Please try again."}
          </div>
        )}

        {/* Navigation buttons */}
        {step < 3 && (
          <div className={step === 1 ? "pt-1" : "flex gap-3 pt-1"}>
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-neutral-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back
              </button>
            )}

            {step < 2 ? (
              <button
                type="button"
                onClick={goNext}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white drop-shadow-md transition hover:bg-indigo-700"
              >
                Continue
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={submitDemoRequest}
                disabled={status === "sending"}
                className="flex flex-[1.4] items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white drop-shadow-md transition hover:bg-indigo-700 disabled:opacity-70"
              >
                {status === "sending" ? "Submitting…" : "Get Free Demo"}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        )}

        {(step === 1 || step === 2) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-neutral-300">•</span>
              Free setup support
            </div>
          </div>
        )}
      </form>
    </div>
  );
}