"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpMode, setOtpMode] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (otpMode) {
      alert("OTP verified. Redirecting to PaySure Console...");
    } else {
      alert("Magic link sent to your email. You can also switch to OTP.");
    }
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_400px] lg:px-8">
      <div className="space-y-6">
        <p className="section-title">Unified access portal</p>
        <h1 className="section-heading text-balance">Log in to PaySure Accounting, PaySure Guarantee, and LegalHub</h1>
        <p className="text-sm text-slate-600">
          MFA enforced. Device fingerprints, IP whitelisting, and audit trails keep every voucher and transaction secure.
        </p>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
              Work email
              <input
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                type="email"
                placeholder="you@company.in"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            {!otpMode ? (
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                Password
                <input
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            ) : (
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-600">
                OTP
                <input
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                  placeholder="6-digit code"
                  value={otp}
                  onChange={(event) => setOtp(event.target.value)}
                />
              </label>
            )}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                Remember this device for 15 days
              </label>
              <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              {otpMode ? "Verify OTP" : "Send Magic Link"}
            </button>
          </form>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <button
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={() => setOtpMode((mode) => !mode)}
            >
              {otpMode ? "Use password instead" : "Sign in with OTP"}
            </button>
            <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
              New to PaySure? Create workspace
            </Link>
          </div>
        </div>
      </div>
      <aside className="space-y-4 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-sm text-slate-200 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Your access covers</p>
        <ul className="space-y-4 text-sm">
          <li>
            <p className="font-semibold text-white">Accounting Console</p>
            <p className="text-slate-400">Vouchers, ledgers, reconciliation, closing workflows</p>
          </li>
          <li>
            <p className="font-semibold text-white">PaySure Guarantee Layer</p>
            <p className="text-slate-400">Smart invoices, escrow, buyer score, legal escalations</p>
          </li>
          <li>
            <p className="font-semibold text-white">Admin & Security</p>
            <p className="text-slate-400">RBAC, audit logs, approvals, SOC2 controls</p>
          </li>
        </ul>
        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-xs text-slate-400">
          <p>Need SSO? Enable SAML / Okta from Settings → Security after login.</p>
        </div>
      </aside>
    </div>
  );
}
