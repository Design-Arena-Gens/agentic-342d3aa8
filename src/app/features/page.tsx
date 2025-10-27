const featureSets = [
  {
    title: "Accounting Engine",
    description:
      "Full double-entry system with automated ledgers, vouchers, and tax rules engineered for Indian GAAP.",
    points: [
      "Sales, purchase, payment, receipt, contra, journal, debit/credit notes, and reversing journal vouchers",
      "Default ledgers for cash, bank, capital, inventory, indirect expenses, duties and taxes",
      "Smart invoice designer with GST auto-calculation, round-off control, and Tally export",
    ],
  },
  {
    title: "PaySure Guarantee",
    description:
      "Escrow-backed payment protection with legal escalation workflows to eliminate payment anxiety.",
    points: [
      "Smart invoices with buyer verification, KYC, and configurable milestones",
      "Escrow orchestration with Razorpay/Stripe plus offline pledge support",
      "Automated reminders, nudges, and legal notice generation with proof logs",
    ],
  },
  {
    title: "Payments & Reconciliation",
    description:
      "Connect bank feeds, reconcile instantly, and auto-post vouchers to the right ledgers.",
    points: [
      "Payment links, UPI, cards, and account transfer support",
      "Auto-matching engine for NEFT, RTGS, cheque, and cash entries",
      "Reconciliation workbench with AI suggestions and maker-checker approvals",
    ],
  },
  {
    title: "Inventory & Orders",
    description:
      "Manage SKU-level stock, job work, manufacturing, and delivery fulfillment with accounting sync.",
    points: [
      "Material in/out, stock journal, physical verification, and reorder intelligence",
      "Sales and purchase order pipeline with GRN and delivery challan",
      "Batch, expiry, serial tracking, and valuation reports",
    ],
  },
  {
    title: "Payroll & HR",
    description:
      "Run compliant payroll with attendance, TDS computation, and automated ledger posting.",
    points: [
      "Employee master with documents, salary structures, and bank details",
      "Attendance import, leave management, overtime adjustments",
      "Payslips, bank advice files, ESI/PF returns, and payroll reconciliation",
    ],
  },
  {
    title: "Reports & Analytics",
    description:
      "Board-ready financials with AI intelligence and scenario planning.",
    points: [
      "Balance sheet, P&L, trial balance, day book, cash flow",
      "GST suite (GSTR-1, 3B, e-way bill, HSN summary)",
      "PaySure Scoreboard, ageing, collection heatmaps, and AI forecasting",
    ],
  },
];

export const metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <p className="section-title">Features</p>
        <h1 className="section-heading text-balance">
          PaySure gives finance, sales, and legal teams a shared truth for B2B commerce.
        </h1>
        <p className="text-sm text-slate-600">
          From onboarding to escalations, every feature is mapped to your workflows. No plug-ins, no spreadsheets, no switching tabs.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {featureSets.map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md shadow-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">{feature.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {feature.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section id="integrations" className="space-y-6 rounded-3xl border border-indigo-100 bg-indigo-50 p-8 text-slate-700">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Integrations</p>
          <h2 className="text-2xl font-semibold text-indigo-700">Plug into your existing stack</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-200 bg-white/80 p-6">
            <h3 className="text-sm font-semibold text-indigo-600">Accounting Imports</h3>
            <p className="mt-2 text-xs text-indigo-500">Tally, Zoho Books, QuickBooks, Busy, Excel templates</p>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-white/80 p-6">
            <h3 className="text-sm font-semibold text-indigo-600">Bank & Payment APIs</h3>
            <p className="mt-2 text-xs text-indigo-500">RazorpayX, ICICI, HDFC, Axis, Yes Bank, Stripe, PayU</p>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-white/80 p-6">
            <h3 className="text-sm font-semibold text-indigo-600">Compliance</h3>
            <p className="mt-2 text-xs text-indigo-500">GST portal, MCA filings, credit bureaus, PaySure legal partners</p>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-white/80 p-6">
            <h3 className="text-sm font-semibold text-indigo-600">Messaging & CRM</h3>
            <p className="mt-2 text-xs text-indigo-500">WhatsApp Business API, Slack, Microsoft Teams, custom webhooks</p>
          </div>
        </div>
      </section>
    </div>
  );
}
