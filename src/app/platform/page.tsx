import Link from "next/link";

const modules = [
  { name: "Dashboard", href: "/platform/dashboard", description: "Control tower for receivables, payables, alerts, and quick actions." },
  { name: "Accounting Vouchers", href: "/platform/vouchers", description: "Sales, purchase, payments, receipts, contra, journal, notes." },
  { name: "PaySure Guarantee", href: "/platform/paysure", description: "Smart invoices, escrow activation, legal automation." },
  { name: "Payments & Reconciliation", href: "/platform/payments", description: "Online/offline payments, webhooks, bank ledger updates." },
  { name: "Inventory & Orders", href: "/platform/inventory", description: "Item master, stock, manufacturing, sales/purchase orders." },
  { name: "Payroll", href: "/platform/payroll", description: "Employees, attendance, processing, payslips, compliance." },
  { name: "Reports & Insights", href: "/platform/reports", description: "Financial statements, GST, ageing, PaySure Score, AI." },
  { name: "Legal & Escalation", href: "/platform/legal", description: "Reminders, legal notice, partner coordination, recovery." },
  { name: "Rewards & Trust", href: "/platform/rewards", description: "PaySure Score, coins, perks, reliability tracking." },
  { name: "Integrations", href: "/platform/integrations", description: "Accounting imports, bank feeds, compliance APIs, messaging." },
  { name: "Settings", href: "/platform/settings", description: "Company info, tax, bank, roles, approvals, backup." },
  { name: "Security", href: "/platform/security", description: "2FA, RBAC, encryption, audit logs, IP controls." },
  { name: "Admin", href: "/platform/admin", description: "Global analytics, fraud detection, partner management." },
  { name: "AI Assistant", href: "/platform/ai", description: "Forecasting, smart tips, predictive delays, categorisation." },
  { name: "Year-end", href: "/platform/year-end", description: "Close the year, carry forward balances, audit pack." },
  { name: "Enterprise", href: "/platform/enterprise", description: "Multi-company, multi-currency, compliance, failover." },
  { name: "Roadmap", href: "/platform/roadmap", description: "Step-by-step rollout across 26 steps." },
];

export const metadata = {
  title: "Platform Overview",
};

export default function PlatformIndexPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">PaySure Platform</p>
        <h1 className="text-3xl font-semibold text-slate-900">Explore every module</h1>
        <p className="text-sm text-slate-600">
          Use the platform overview to navigate modules covering accounting, payments, legal, integrations, intelligence, and compliance.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-indigo-200 hover:text-indigo-600"
            >
              <p className="text-lg font-semibold text-slate-900">{module.name}</p>
              <p className="mt-2 text-sm text-slate-600">{module.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
