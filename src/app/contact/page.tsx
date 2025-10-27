"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("sales");

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3 text-center">
        <p className="section-title">Contact</p>
        <h1 className="section-heading text-balance">Talk to PaySure</h1>
        <p className="text-sm text-slate-600">
          Sales, support, compliance, or legal partnerships — we respond within 24 hours.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {submitted ? (
            <div className="space-y-3 text-center">
              <h2 className="text-xl font-semibold text-slate-900">Request logged ✅</h2>
              <p className="text-sm text-slate-600">
                A PaySure specialist will reach out shortly. We&apos;ve shared your case with the respective team.
              </p>
              <button
                className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                onClick={() => setSubmitted(false)}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                  Full name
                  <input
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                  Work email
                  <input
                    required
                    type="email"
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                Company name
                <input
                  required
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                Topic
                <select
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm capitalize focus:border-indigo-500 focus:outline-none"
                >
                  <option value="sales">Sales & Pricing</option>
                  <option value="support">Product Support</option>
                  <option value="legal">Legal Escalation</option>
                  <option value="integration">API Integration</option>
                  <option value="partner">Partner or CA Network</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                Message
                <textarea
                  required
                  className="min-h-[140px] rounded-2xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                  placeholder="Tell us about your workflows, requirements, or current bottlenecks."
                />
              </label>
              <button className="w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
                Submit request
              </button>
            </form>
          )}
        </div>
        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-sm text-slate-200 shadow-lg">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Locations</p>
            <p className="mt-2 text-sm text-slate-300">Mumbai • Bengaluru • Delhi NCR</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Support hours</p>
            <p className="mt-2 text-sm text-slate-300">Mon–Sat • 10:00 AM – 8:00 PM IST</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Hotline</p>
            <p className="mt-2 text-sm text-slate-300">1800-890-PAID (7243)</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xs text-slate-400">
            <p>For security incidents or data privacy queries, email security@paysurehq.com (24x7 SLA)</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
