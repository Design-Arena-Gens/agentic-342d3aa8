const quickStats = [
  { label: "Receivables", value: "₹82,45,000", trend: "+12% MoM" },
  { label: "Payables", value: "₹36,18,400", trend: "-8% MoM" },
  { label: "Cash Balance", value: "₹28,75,530", trend: "3 banks" },
  { label: "Sales (MTD)", value: "₹1,42,90,000", trend: "+18% vs target" },
  { label: "Gross Profit", value: "32.4%", trend: "+2.6 pts" },
];

const quickActions = [
  "Create Invoice",
  "Record Payment",
  "Add Expense",
  "New PaySure Deal",
  "Run Payroll",
  "Bank Reconciliation",
];

const alerts = [
  {
    title: "Overdue invoices",
    detail: "5 customers · ₹14,60,800 · D+7",
    background: "bg-rose-100",
    color: "text-rose-600",
  },
  {
    title: "Stock shortage",
    detail: "SKU: PS-TR-220 running below reorder level",
    background: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    title: "Payroll pending",
    detail: "Release salaries by Friday to maintain PaySure Score",
    background: "bg-indigo-100",
    color: "text-indigo-600",
  },
];

const recentVouchers = [
  { type: "Sales Invoice", doc: "INV-22435", party: "Skyline Foods", amount: "₹8,90,000", status: "Guarantee active" },
  { type: "Receipt", doc: "RCPT-4533", party: "Nova Retail", amount: "₹6,00,000", status: "Linked to INV-22412" },
  { type: "Payment", doc: "PMT-8741", party: "Lumina Packaging", amount: "₹1,95,400", status: "Paid via Razorpay" },
  { type: "Journal", doc: "JRNL-908", party: "Depreciation", amount: "₹62,000", status: "Auto-scheduled" },
];

export const metadata = {
  title: "Platform Dashboard",
};

export default function PlatformDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Control tower</p>
        <h1 className="text-3xl font-semibold text-slate-900">Finance, payments, and legal in one dashboard</h1>
        <p className="text-sm text-slate-600">
          Personalized to your role. Pin widgets, drill into vouchers, and act without switching systems.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-5">
        {quickStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-400">{stat.trend}</p>
          </div>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Pending PaySure transactions</h2>
            <button className="text-xs font-semibold text-indigo-600">View all</button>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
              <p className="text-sm font-semibold text-indigo-700">Skyline Foods — ₹18,72,600</p>
              <p className="text-xs text-indigo-500">Milestone 2 due tomorrow • Buyer verified • Escrow active</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-indigo-600">
                <span className="rounded-full bg-white px-3 py-1">Send reminder</span>
                <span className="rounded-full bg-white px-3 py-1">Update timeline</span>
                <span className="rounded-full bg-white px-3 py-1">Escalate</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-800">Nova Retail — ₹6,40,400</p>
              <p className="text-xs text-slate-500">Awaiting buyer verification • D+3</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-800">Lumina Packaging — ₹4,11,200</p>
              <p className="text-xs text-slate-500">Part paid • Auto reminder scheduled for D+5</p>
            </div>
          </div>
        </section>
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.title}
                className={`rounded-2xl border border-slate-100 ${alert.background} p-4 text-sm font-semibold ${alert.color}`}
              >
                <p>{alert.title}</p>
                <p className="text-xs font-normal">{alert.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Recent vouchers</h2>
            <button className="text-xs font-semibold text-indigo-600">Download day book</button>
          </div>
          <div className="space-y-3">
            {recentVouchers.map((voucher) => (
              <div key={voucher.doc} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{voucher.type}</span>
                  <span>{voucher.doc}</span>
                </div>
                <p className="mt-2 font-semibold text-slate-800">{voucher.party}</p>
                <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                  <span>{voucher.amount}</span>
                  <span>{voucher.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
          <div className="grid gap-3">
            {quickActions.map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
