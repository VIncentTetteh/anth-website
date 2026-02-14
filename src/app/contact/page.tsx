"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    region: "",
    message: "",
    _honey: "", // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", organization: "", email: "", region: "", message: "", _honey: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="space-y-10 lg:space-y-12">
      <section className="section-card section-appear">
        <div className="section-inner grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <div className="section-kicker">
              <span className="section-kicker-dot" />
              <span>Contact</span>
            </div>
            <h1 className="section-title text-balance text-slate-50">Let’s map your next platform.</h1>
            <p className="section-body text-slate-300/95">
              Share enough detail for us to understand your current rails, constraints, and
              ambitions. We’ll follow up with clarifying questions and a proposal for how The
              ANTH can help.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
              alt="Accra city skyline at dusk, representing The ANTH's Ghana base and regional reach."
              width={900}
              height={420}
              className="h-40 w-full object-cover opacity-95"
            />
          </div>

          <div className="space-y-4 text-xs text-slate-300/95">
            <div>
              <p className="font-medium text-slate-100">Ghana office</p>
              <p>Accra, Ghana · Operating across African and global partner markets.</p>
            </div>
            <div>
              <p className="font-medium text-slate-100">Channels</p>
              <p>Email, secure collaboration spaces, and structured steering forums agreed
                with each partner.</p>
            </div>
            <div>
              <p className="font-medium text-slate-100">Social</p>
              <ul className="mt-1 space-y-1">
                <li>LinkedIn · The ANTH (Ananse Ntentan Technology Hub)</li>
                <li>Technical writing, case studies, and architecture notes (coming soon).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card section-appear-delayed">
        <div className="section-inner">
          <form onSubmit={handleSubmit} className="grid gap-4 text-xs text-slate-200 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Name
              </label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Your full name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Organisation
              </label>
              <input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                type="text"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Bank, fintech, or enterprise"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Email
              </label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="work.email@example.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Region / Market
              </label>
              <input
                name="region"
                value={formData.region}
                onChange={handleChange}
                type="text"
                className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="e.g. Ghana, West Africa"
              />
            </div>
            <div className="sm:col-span-2">
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <label className="mb-1 block text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Context & objectives
              </label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Briefly describe your current platforms, constraints, and what success would look like."
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-1">
              {status === "success" ? (
                <p className="text-sm font-medium text-green-400 animate-fade-in-up">
                  Thank you. Your message has been sent to our team.
                </p>
              ) : status === "error" ? (
                <p className="text-sm font-medium text-red-400 animate-fade-in-up">
                  {errorMessage || "Failed to send. Please try again or email us directly."}
                </p>
              ) : (
                <p className="text-[11px] text-slate-400">
                  This form is sent directly to our secure inbox at info@theanth.io.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.6)] transition duration-300 ${status === "submitting"
                  ? "bg-slate-600 cursor-not-allowed"
                  : status === "success"
                    ? "bg-green-500 hover:bg-green-400"
                    : "bg-amber-400 hover:bg-amber-300"
                  }`}
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent"
                ) : (
                  "Send Enquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
