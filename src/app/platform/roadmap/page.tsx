interface Phase {
  title: string;
  summary: string;
}

const phases: Phase[] = [
  { title: "Step 1 · PaySure Website", summary: "Marketing site covering Trusted B2B Payments, features, pricing, and contact." },
  { title: "Step 2 · Signup", summary: "Create account, verify via email/OTP, capture company details, upload logo." },
  { title: "Step 3 · Company Setup", summary: "Enter business identifiers (GSTIN, PAN, CIN), address, bank details, select Seller/Buyer/Both." },
  { title: "Step 4 · Team Roles", summary: "Invite admins, accountants, sales, and assign granular permissions." },
  { title: "Step 5 · Opening Balances", summary: "Optional import from Tally/Excel, auto-create ledgers, items, tax configs." },
  { title: "Step 6 · Dashboard", summary: "View receivables, payables, cash balance, sales, profit, pending transactions, alerts." },
  { title: "Step 7 · Alerts & Quick Actions", summary: "Monitor overdue invoices, stock shortage, payroll pending, and act (invoice, payment, expense)." },
  { title: "Step 8 · Sales Invoices", summary: "Create invoices, add items, calculate GST, toggle PaySure Guarantee, issue PDFs." },
  { title: "Step 9 · Purchase Invoices", summary: "Capture supplier invoices, input tax credit, inventory updates, approvals." },
  { title: "Step 10 · Payments & Receipts", summary: "Record cash/bank transactions, auto-link to invoices, double-entry postings." },
  { title: "Step 11 · Contra & Journal", summary: "Fund transfers, adjustments, accruals, depreciation, provisions, reversing journals." },
  { title: "Step 12 · Credit/Debit Notes", summary: "Handle sales returns, purchase returns, adjust original invoice balances." },
  { title: "Step 13 · PaySure Deals", summary: "New PaySure deal, buyer verification, escrow activation, smart legal terms." },
  { title: "Step 14 · Monitoring & Tracking", summary: "AI reminders, live timeline from invoice to resolution, auto-ledger entries." },
  { title: "Step 15 · Payment Gateway", summary: "Online payments, webhook confirmation, automatic ledger updates, email confirmations." },
  { title: "Step 16 · Offline Reconciliation", summary: "Manual payment entry, bank statement import, auto-match, reconciliation reports." },
  { title: "Step 17 · Bank & Cash Books", summary: "Bank ledger view, cash book, statement import, reconciliation export." },
  { title: "Step 18 · Inventory", summary: "Item master, material in/out, manufacturing journal, physical stock adjustments." },
  { title: "Step 19 · Orders", summary: "Sales & purchase order lifecycle, job work tracking, fulfillment status." },
  { title: "Step 20 · Payroll", summary: "Add employees, attendance, payroll processing, payslips, bank payments." },
  { title: "Step 21 · Reports", summary: "Balance sheet, P&L, trial balance, cash flow, GST, ageing, PaySure Score dashboard." },
  { title: "Step 22 · Escalation", summary: "Auto reminders, legal notice generation, partner assignment, recovery tracking." },
  { title: "Step 23 · Rewards", summary: "PaySure Score, coins, perks, subscription discounts." },
  { title: "Step 24 · Integrations", summary: "Sync Tally, banking APIs, GST portal, WhatsApp automation, developer API." },
  { title: "Step 25 · Settings & Security", summary: "Company info, tax, bank accounts, RBAC, approvals, audit logs, encryption." },
  { title: "Step 26 · Enterprise & Compliance", summary: "Admin dashboards, fraud detection, multi-company, multi-currency, SOC2/ISO, failover." },
];

export const metadata = {
  title: "Platform Roadmap",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Roadmap</p>
        <h1 className="text-3xl font-semibold text-slate-900">18-phase launch programme</h1>
        <p className="text-sm text-slate-600">
          Every PaySure customer follows an orchestrated rollout across marketing, onboarding, accounting, payments, legal, and compliance.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{phase.title}</p>
              <p className="mt-2">{phase.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
