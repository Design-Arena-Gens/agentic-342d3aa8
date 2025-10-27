import Link from "next/link";

const featureHighlights = [
  {
    title: "Accounting Automation",
    description:
      "Tally-grade ledgers, vouchers, and tax rules pre-configured for Indian businesses.",
  },
  {
    title: "PaySure Guarantee",
    description:
      "Escrow-backed payment protection with legal escalation and recovery workflows built in.",
  },
  {
    title: "Smart Compliance",
    description:
      "GST, payroll, and audit reporting available in a single click with AI validation.",
  },
];

const journey = [
  {
    name: "Phase 1 — Discover & Signup",
    steps: [
      "Explore PaySure, compare plans, and onboard from web or mobile.",
      "Create your secure account with OTP / email verification.",
      "Invite your accountant, sales, and finance teams in minutes.",
    ],
  },
  {
    name: "Phase 2 — Configure & Automate",
    steps: [
      "Import master data from Tally, Zoho, or QuickBooks.",
      "Generate default ledgers, tax codes, and payment terms automatically.",
      "Approve workflows, set maker-checker rules, and define notification templates.",
    ],
  },
  {
    name: "Phase 3 — Run & Grow",
    steps: [
      "Create invoices with PaySure Guarantee and track cash flow in real time.",
      "Monitor receivables, initiate escalations, and collaborate with legal partners.",
      "Unlock AI insights for risk, compliance, and forecasting dashboards.",
    ],
  },
];

const metrics = [
  { label: "Trusted Companies", value: "2,700+" },
  { label: "Invoices Secured", value: "₹4,200 Cr" },
  { label: "Disputes Resolved", value: "96%" },
  { label: "Implementation Time", value: "48 hrs" },
];

const capabilities = [
  "Full double-entry accounting with vouchers, ledgers, and financial statements",
  "Integrated payment gateway with escrow, payouts, and offline reconciliation",
  "Inventory, order management, job work, and manufacturing journals",
  "Payroll, attendance, and statutory compliance with automated postings",
  "Legal escalation engine with templated notices and partner marketplace",
  "AI assistant for cashflow forecasts, risk scoring, and proactive alerts",
  "Enterprise-grade security with RBAC, audit logs, encryption, and 2FA",
  "Developer APIs, webhooks, sandbox, and third-party integrations",
];

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-8">
              <span className="section-title">Trusted B2B Payments + Smart Accounting</span>
              <h1 className="section-heading text-balance">
                PaySure is your command center for receivables, payables, legal protection, and intelligence—built for Indian enterprises.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600">
                Replace disconnected ERPs, payment gateways, and legal workflows with one secure platform. Automate accounting, guarantee payments, reconcile bank feeds, and collaborate with legal partners without leaving PaySure.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/signup"
                  className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
                >
                  Get Started in Minutes
                </Link>
                <Link
                  href="/features"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-indigo-400 hover:text-indigo-600"
                >
                  Explore the Platform
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featureHighlights.map((feature) => (
                  <div key={feature.title} className="glass p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass gradient-ring relative flex flex-col gap-6 rounded-3xl p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                  Live Control Tower
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">
                  Receivables Outlook
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm shadow-indigo-100">
                    <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-white/80 p-6 shadow-sm">
                <p className="text-sm font-semibold text-indigo-500">Today&apos;s Risk Watching</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• 7 invoices approaching due in 3 days — trigger courtesy reminders.</li>
                  <li>• Buyer Skyline Foods slipped PaySure Score by 6 points. Review exposure.</li>
                  <li>• Payroll release scheduled for Friday — ₹18,40,000 earmarked.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 shadow-inner shadow-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <span className="section-title">Platform Coverage</span>
            <h2 className="section-heading text-balance">
              Every pillar of the PaySure operating system is ready on day one.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <div key={capability} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-white to-indigo-50 p-6 text-left shadow-sm">
                  <p className="text-sm font-medium text-slate-600">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <span className="section-title">18-Phase Launch Journey</span>
              <h2 className="section-heading text-balance">
                Structured onboarding guides you from discovery to compliance at enterprise scale.
              </h2>
              <p className="text-base text-slate-600">
                PaySure’s modular workflow keeps stakeholders aligned across finance, sales, legal, and compliance. Each phase unlocks dedicated workspaces, AI copilots, and reporting boards tailored to your role.
              </p>
              <Link
                href="/platform/roadmap"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500"
              >
                View full roadmap
                <span aria-hidden className="text-lg">→</span>
              </Link>
            </div>
            <div className="space-y-6">
              {journey.map((phase) => (
                <div key={phase.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                    {phase.name}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {phase.steps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-900 px-6 py-16 text-white shadow-2xl sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Secure every transaction with PaySure Guarantee and automated legal escalation.
              </h2>
              <p className="text-sm text-slate-300">
                From Smart Invoices to AI nudges, PaySure orchestrates payment collection, reconciliation, and dispute management. Escrow, legal partners, audit trails, and PaySure Score keep your supply chain healthy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/paysure"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Explore PaySure Layer
                </Link>
                <Link
                  href="/platform/security"
                  className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Review security controls
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
                Transaction Timeline
              </p>
              <ul className="mt-4 space-y-4 text-sm text-slate-200">
                <li>
                  <p className="font-semibold">Invoice #INV-22394 • ₹18,72,600</p>
                  <p className="text-xs text-slate-400">Issued to Skyline Foods • Due in 12 days</p>
                </li>
                <li className="border-l-2 border-indigo-500 pl-4">
                  <p className="font-semibold text-indigo-300">Buyer verified terms • Escrow initiated</p>
                  <p className="text-xs text-slate-400">KYC completed, PaySure Coins +40</p>
                </li>
                <li className="border-l-2 border-emerald-400 pl-4">
                  <p className="font-semibold text-emerald-300">Part payment received • ₹12,00,000</p>
                  <p className="text-xs text-slate-400">Auto-posted Receipt Voucher • Bank ledger updated</p>
                </li>
                <li className="border-l-2 border-amber-400 pl-4">
                  <p className="font-semibold text-amber-300">AI reminder scheduled</p>
                  <p className="text-xs text-slate-400">WhatsApp + Email • Escalation trigger at D+7</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
