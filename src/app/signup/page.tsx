"use client";

import { useMemo, useState } from "react";

type CompanyType = "seller" | "buyer" | "both";

interface TeamMember {
  name: string;
  email: string;
  role: "Admin" | "Accountant" | "Sales";
}

const roles: TeamMember["role"][] = ["Admin", "Accountant", "Sales"];

const companyTypes: { label: string; value: CompanyType; description: string }[] = [
  { label: "Seller", value: "seller", description: "Manage receivables and PaySure guarantees." },
  { label: "Buyer", value: "buyer", description: "Track payables, approvals, and credit scores." },
  { label: "Both", value: "both", description: "Operate as a trading company with full cycle workflows." },
];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState({ name: "", email: "", phone: "", password: "" });
  const [company, setCompany] = useState({
    name: "",
    gstin: "",
    pan: "",
    cin: "",
    address: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    type: "seller" as CompanyType,
  });
  const [team, setTeam] = useState<TeamMember[]>([
    { name: "", email: "", role: "Admin" },
  ]);
  const [openingBalanceUploaded, setOpeningBalanceUploaded] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  const canProceedAccount =
    account.name.trim() !== "" &&
    /.+@.+\..+/.test(account.email) &&
    /^\+?\d{10,13}$/.test(account.phone) &&
    account.password.length >= 8;

  const canProceedCompany =
    company.name.trim() !== "" &&
    company.gstin.length >= 12 &&
    company.pan.length === 10 &&
    company.address.trim() !== "" &&
    company.bankName.trim() !== "" &&
    company.accountNumber.length >= 9 &&
    company.ifsc.length === 11;

  const invitedTeam = useMemo(
    () => team.filter((member) => member.name.trim() && member.email.trim()),
    [team],
  );

  const summary = {
    account,
    company,
    team: invitedTeam,
    openingBalanceUploaded,
  };

  const handleAddTeam = () => {
    setTeam((prev) => [...prev, { name: "", email: "", role: "Accountant" }]);
  };

  const handleRemoveTeam = (index: number) => {
    setTeam((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = () => {
    if (!acknowledged) {
      return;
    }
    alert("Welcome to PaySure! Your onboarding workspace is ready.");
  };

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <p className="section-title">Create your PaySure workspace</p>
        <h1 className="section-heading text-balance">
          End-to-end onboarding covers compliance, banking, and collaboration.
        </h1>
        <p className="text-sm text-slate-600">
          Finish the guided four-step setup to auto-create your ledgers, map tax configurations, and invite your team.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <nav className="space-y-4">
            {[1, 2, 3, 4].map((index) => {
              const active = step === index;
              const completed = step > index;
              const labels = [
                "Account & Verification",
                "Company Profile",
                "Team & Roles",
                "Opening Balances",
              ];
              return (
                <div
                  key={index}
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                      : completed
                        ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                        : "border-slate-200 bg-white text-slate-500"
                  }`}
                >
                  <p>{labels[index - 1]}</p>
                  <p className="text-xs font-normal text-slate-400">
                    {index === 1 && "Verify email + OTP for secure access."}
                    {index === 2 && "GST, PAN, bank, and compliance details."}
                    {index === 3 && "Assign RBAC roles for PaySure workspace."}
                    {index === 4 && "Bring your books from Tally, Excel, or CSV."}
                  </p>
                </div>
              );
            })}
          </nav>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Security checklist</p>
            <ul className="mt-3 space-y-2">
              <li>• End-to-end data is encrypted in transit and at rest.</li>
              <li>• Every action is logged for audit readiness.</li>
              <li>• 2FA and device controls are configurable post onboarding.</li>
            </ul>
          </div>
        </aside>

        <div className="space-y-8">
          {step === 1 && (
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Step 1 · Account & Verification</h2>
                <p className="mt-2 text-sm text-slate-600">
                  We&apos;ll send an OTP to verify your workspace owner email and phone. Use a shared alias if multiple admins will collaborate.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Full name
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    value={account.name}
                    onChange={(event) => setAccount((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="e.g. Rhea Kapoor"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Work email
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    type="email"
                    value={account.email}
                    onChange={(event) => setAccount((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="you@company.in"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Phone (OTP)
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    value={account.phone}
                    onChange={(event) => setAccount((prev) => ({ ...prev, phone: event.target.value }))}
                    placeholder="+91 98xxxxxxx"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Password
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    type="password"
                    value={account.password}
                    onChange={(event) => setAccount((prev) => ({ ...prev, password: event.target.value }))}
                    placeholder="Minimum 8 characters"
                  />
                </label>
              </div>
              <button
                className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300"
                disabled={!canProceedAccount}
                onClick={() => setStep(2)}
              >
                Send OTP & Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Step 2 · Company Profile</h2>
                <p className="mt-2 text-sm text-slate-600">
                  These details auto-populate on invoices, GST filings, payment mandates, and legal notices.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Business name
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    value={company.name}
                    onChange={(event) => setCompany((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="PaySure Foods Pvt Ltd"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  GSTIN
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm uppercase focus:border-indigo-500 focus:outline-none"
                    value={company.gstin}
                    onChange={(event) => setCompany((prev) => ({ ...prev, gstin: event.target.value }))}
                    placeholder="27ABCDE1234F1Z6"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  PAN
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm uppercase focus:border-indigo-500 focus:outline-none"
                    value={company.pan}
                    onChange={(event) => setCompany((prev) => ({ ...prev, pan: event.target.value }))}
                    placeholder="ABCDE1234F"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  CIN (optional)
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm uppercase focus:border-indigo-500 focus:outline-none"
                    value={company.cin}
                    onChange={(event) => setCompany((prev) => ({ ...prev, cin: event.target.value }))}
                    placeholder="U12345MH2023PTC123456"
                  />
                </label>
                <label className="md:col-span-2 flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Registered address
                  <textarea
                    className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    value={company.address}
                    onChange={(event) => setCompany((prev) => ({ ...prev, address: event.target.value }))}
                    placeholder="Address, city, state, PIN"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Bank name
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    value={company.bankName}
                    onChange={(event) => setCompany((prev) => ({ ...prev, bankName: event.target.value }))}
                    placeholder="HDFC Bank"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  Account number
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
                    value={company.accountNumber}
                    onChange={(event) => setCompany((prev) => ({ ...prev, accountNumber: event.target.value }))}
                    placeholder="123456789012"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  IFSC
                  <input
                    className="rounded-xl border border-slate-300 px-4 py-3 text-sm uppercase focus:border-indigo-500 focus:outline-none"
                    value={company.ifsc}
                    onChange={(event) => setCompany((prev) => ({ ...prev, ifsc: event.target.value }))}
                    placeholder="HDFC0001234"
                  />
                </label>
              </div>
              <div className="flex flex-wrap gap-3">
                {companyTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setCompany((prev) => ({ ...prev, type: type.value }))}
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      company.type === type.value
                        ? "border-indigo-500 bg-indigo-50 text-indigo-600"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-600"
                    }`}
                    type="button"
                  >
                    <span className="block">{type.label}</span>
                    <span className="block text-xs font-normal text-slate-500">{type.description}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="text-sm font-semibold text-slate-500 hover:text-slate-700"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>
                <button
                  className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300"
                  disabled={!canProceedCompany}
                  onClick={() => setStep(3)}
                >
                  Continue to team setup
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Step 3 · Invite team & assign access</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Control who can create vouchers, approve payments, or escalate legal cases. You can add more teammates later from Settings → Team Roles.
                </p>
              </div>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_1fr_auto]">
                    <input
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                      placeholder="Name"
                      value={member.name}
                      onChange={(event) => {
                        const next = [...team];
                        next[index] = { ...member, name: event.target.value };
                        setTeam(next);
                      }}
                    />
                    <input
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                      placeholder="Email"
                      value={member.email}
                      onChange={(event) => {
                        const next = [...team];
                        next[index] = { ...member, email: event.target.value };
                        setTeam(next);
                      }}
                    />
                    <select
                      className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                      value={member.role}
                      onChange={(event) => {
                        const next = [...team];
                        next[index] = { ...member, role: event.target.value as TeamMember["role"] };
                        setTeam(next);
                      }}
                    >
                      {roles.map((role) => (
                        <option key={role}>{role}</option>
                      ))}
                    </select>
                    {team.length > 1 ? (
                      <button
                        type="button"
                        className="text-xs font-semibold text-rose-500"
                        onClick={() => handleRemoveTeam(index)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleAddTeam}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  + Add another teammate
                </button>
                <div className="flex items-center gap-3">
                  <button
                    className="text-sm font-semibold text-slate-500 hover:text-slate-700"
                    onClick={() => setStep(2)}
                  >
                    ← Back
                  </button>
                  <button
                    className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                    onClick={() => setStep(4)}
                  >
                    Continue to opening balances
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Step 4 · Upload opening balances</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Import trial balance from Tally, Zoho Books, QuickBooks or Excel. You can skip for now and start on a fresh set of ledgers.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-indigo-300 bg-indigo-50 p-8 text-center">
                <p className="text-sm font-semibold text-indigo-600">Drop your CSV / XML / XLS file here</p>
                <p className="mt-2 text-xs text-indigo-400">
                  Template includes ledgers, opening debit/credit, GST breakup, and inventory balances.
                </p>
                <button
                  className="mt-4 rounded-full border border-indigo-400 px-5 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-500 hover:text-indigo-500"
                  onClick={() => setOpeningBalanceUploaded(true)}
                >
                  Simulate upload
                </button>
              </div>
              {openingBalanceUploaded ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-700">
                  <p className="font-semibold">Upload successful</p>
                  <p className="mt-1 text-xs text-emerald-600">
                    142 ledgers, 68 inventory items, and 24 GST tax categories mapped. PaySure auto-created cash/bank books, receivable/payable ledgers, and validation reports.
                  </p>
                </div>
              ) : null}
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-700">Onboarding summary</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Workspace owner</p>
                    <p className="text-sm text-slate-600">{summary.account.name || "Pending"}</p>
                    <p className="text-xs text-slate-400">{summary.account.email || "—"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
                    <p className="text-sm text-slate-600">{summary.company.name || "Pending"}</p>
                    <p className="text-xs text-slate-400">GSTIN {summary.company.gstin || "—"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Team invites</p>
                    <ul className="mt-1 space-y-1 text-xs text-slate-500">
                      {summary.team.length > 0 ? (
                        summary.team.map((member) => (
                          <li key={member.email}>{member.name} · {member.role}</li>
                        ))
                      ) : (
                        <li>No invites yet</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Opening balances</p>
                    <p className="text-sm text-slate-600">
                      {summary.openingBalanceUploaded ? "Uploaded & reconciled" : "Skipped — start fresh"}
                    </p>
                  </div>
                </div>
                <label className="flex items-center gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={acknowledged}
                    onChange={(event) => setAcknowledged(event.target.checked)}
                    className="h-4 w-4 rounded border border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  I agree to PaySure&apos;s Terms, Privacy, and SOC2 compliant data processing agreement.
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="text-sm font-semibold text-slate-500 hover:text-slate-700"
                  onClick={() => setStep(3)}
                >
                  ← Back
                </button>
                <button
                  className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-400"
                  disabled={!acknowledged}
                  onClick={handleSubmit}
                >
                  Launch PaySure Workspace
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
