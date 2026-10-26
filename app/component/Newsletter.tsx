"use client";
import { useState } from "react";

interface NewsletterProps {
  className?: string;
}

export default function Newsletter({ className }: NewsletterProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState<string>("");

    async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        if (!email.trim()) {
          setStatus("error");
          setFeedback("Please enter a valid email address.");
          return;
        }
    
        setStatus("loading");
        setFeedback("");
    
        try {
          const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              formType: "newsletter",
              email,
            }),
          });
    
          const data = await res.json();
    
          if (!res.ok || !data.success) {
            throw new Error(data?.error || "Failed to subscribe");
          }
    
          setStatus("success");
          setFeedback("Thank you for subscribing! We'll keep you updated.");
          setEmail("");
        } catch (err) {
          console.error("Subscribe error:", err);
          setStatus("error");
          setFeedback("Something went wrong. Please try again in a moment.");
        }
      }

  return (
    <>
        <div className="flex flex-col gap-2">
          <form onSubmit={handleSubscribe} className={`w-full ${className ?? ""}`.trim()}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200" aria-label="Email address for newsletter subscription" required />
              <button type="submit" disabled={status === "loading"} className="bg-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white text-sm px-5 py-3 rounded-xl transition-all duration-300 cursor-pointer">{status === "loading" ? "Subscribing..." : "Subscribe"}</button>
          </form>
          {feedback && (
              <div className={`text-sm ${ status === "success" ? "text-green-600" : "text-red-500" }`}>{feedback}</div>
          )}
        </div>
    </>
  );
};