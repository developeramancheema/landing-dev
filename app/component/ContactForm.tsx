"use client";
import { useState } from "react";
import InternationalPhoneField, {
  isValidInternationalPhone,
} from "./InternationalPhoneField";

type FormData = {
  name: string;
  email: string;
  phone: string;
  professions: string;
  message: string;
};

const ContactForm = () => {
  const professions = [
    "Healthcare",
    "Beauty & Wellness",
    "Education",
    "Artist",
    "Salon",
    "Financial Services",
    "Professional Services",
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    professions: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.professions || !formData.message) {
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
          formType: "contact",
          ...formData,
        }),
      });

      // Clone the response before consuming it
      const resClone = res.clone();

      if (!res.ok) {
        let errorMsg = `Error ${res.status}`;

        try {
          const errData = await res.json();
          errorMsg = errData.error || errorMsg;
        } catch {
          // Use clone safely for text fallback
          const text = await resClone.text();
          errorMsg = text || errorMsg;
        }

        throw new Error(errorMsg);
      }

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          professions: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send email.");
      }

    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again.");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </span>
        <input id="name" name="name" type="text" required placeholder="Full Name" value={formData.name} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 py-3 pl-10 pr-4 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="relative">
          <InternationalPhoneField
            id="phone"
            name="phone"
            required
            variant="contact"
            placeholder="Phone"
            value={formData.phone}
            onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </span>
          <input id="email" name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 py-3 pl-10 pr-4 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500" aria-hidden>
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
          </span>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" aria-hidden>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </span>
          <select id="professions" aria-label="Select Professions" required name="professions" value={formData.professions} onChange={handleChange} className="block w-full appearance-none rounded-xl border border-slate-200/80 bg-white/80 py-3 pl-10 pr-10 text-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Select Profession</option>
            {professions.map((profession) => (
              <option key={profession} value={profession}>{profession}</option>
            ))}
          </select>
        </div>
      </div>
      
      <textarea id="message" name="message" rows={4} required placeholder="How can we help?" value={formData.message} onChange={handleChange} className="block w-full rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"/>

      <div className="block sm:flex items-center justify-between items-center justify-between gap-3">
        <button type="submit" disabled={status === "sending"} className="bg-indigo-600 text-white text-sm px-4 py-3 rounded-xl flex items-center justify-center gap-3" aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
      
      {status === "success" && (
        <div className="mt-2 p-3 rounded-md bg-green-50 border border-green-200 text-sm text-green-700">
          ✓ Email sent successfully! We&apos;ll get back to you shortly.
        </div>
      )}
      {status === "error" && (
        <div className="mt-2 p-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
          ✗ {errorMessage || "Oops — something went wrong. Please try again or contact us directly."}
        </div>
      )}
    </form>
    </>
  );
};

export default ContactForm;
