const voucherTypes = [
  {
    name: "Sales Invoice",
    flow: [
      "Select customer and confirm GSTIN",
      "Add items/services with GST auto-logic",
      "Attach supporting documents and payment terms",
      "Toggle PaySure Guarantee for escrow protection",
      "Generate PDF + share via email, WhatsApp, or link",
    ],
  },
  {
    name: "Purchase Invoice",
    flow: [
      "Fetch from purchase order or import via API",
      "Capture input tax credit and reverse charge scenarios",
      "Update inventory levels and job work allocations",
      "Schedule payment approvals with maker-checker",
      "Link to bank payout or mark as paid manually",
    ],
  },
  {
    name: "Payment / Receipt",
    flow: [
      "Record cash/bank payments and receipts",
      "Auto-link to invoices with AI matching",
      "Support split payments, multi-mode, and advance adjustments",
      "Sync bank ledger, cash book, and PaySure Score",
      "Trigger notifications to internal stakeholders",
    ],
  },
  {
    name: "Contra & Journal",
    flow: [
      "Move funds between cash and bank or between banks",
      "Book accruals, provisions, depreciation, and adjustments",
      "Schedule reversing entries for month-end",
      "Attach working papers for auditors",
      "Maintain full audit trail with approvals",
    ],
  },
  {
    name: "Debit / Credit Note",
    flow: [
      "Initiate returns and rate differences",
      "Link back to original invoices automatically",
      "Adjust GST liability and ITC claims",
      "Notify buyer/supplier with revised documents",
      "Reflect adjustments in ledgers instantly",
    ],
  },
];

export const metadata = {
  title: "Accounting Vouchers",
};

export default function VouchersPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Tally-grade engine</p>
        <h1 className="text-3xl font-semibold text-slate-900">Create and manage every voucher with compliance built in</h1>
        <p className="text-sm text-slate-600">
          PaySure mirrors your accountant&apos;s playbook. Every voucher flows into ledgers, GST reports, and financial statements without manual mapping.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {voucherTypes.map((voucher) => (
          <div key={voucher.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{voucher.name}</h2>
            <ol className="mt-4 space-y-2 text-sm text-slate-600">
              {voucher.flow.map((step, index) => (
                <li key={step}>
                  <span className="mr-2 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-600">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-800">Ledger automation</h2>
        <p className="text-sm text-slate-600">
          Default ledgers (Cash, Bank, Sales, Purchase, Capital, GST-Outputs, GST-Inputs, Expense categories) are provisioned at signup. Configure control accounts, dimension tags, cost centers, and branch codes as needed.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Automation rules</p>
            <p className="mt-2">Auto-post payroll, depreciation, and subscription expenses using scheduler templates.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Audit & controls</p>
            <p className="mt-2">Two-step approvals, change logs, and rollback history keep auditors confident.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
