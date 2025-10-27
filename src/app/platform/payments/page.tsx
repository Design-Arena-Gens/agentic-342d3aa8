const scenarios = [
  {
    title: "Gateway payment",
    steps: [
      "Buyer pays via Razorpay / Stripe link",
      "Webhook confirms success, PaySure posts receipt",
      "Invoice status flips to Paid with proof of payment",
      "Bank ledger updates automatically with settlement batch",
      "Confirmation emails sent to buyer and seller",
    ],
  },
  {
    title: "Offline payment",
    steps: [
      "Accountant records NEFT / cheque / cash receipt",
      "AI engine suggests invoice matches for reconciliation",
      "Approval workflow validates supporting evidence",
      "Ledgers update once matched; PaySure Score recalculates",
      "Variance report generated for unmatched entries",
    ],
  },
];

const books = [
  {
    name: "Bank Ledger",
    details: "Date-wise credit/debit view, running balance, and attached vouchers with bank statement references.",
  },
  {
    name: "Cash Book",
    details: "Daily inflow/outflow register with denominations, petty cash controls, and physical verification logs.",
  },
  {
    name: "Reconciliation Workbench",
    details: "Import statements, auto-match entries, handle splits, and export reconciliation report in PDF/Excel.",
  },
];

export const metadata = {
  title: "Payments & Reconciliation",
};

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Stripe layer</p>
        <h1 className="text-3xl font-semibold text-slate-900">Automate payments, reconciliation, and ledger posting</h1>
        <p className="text-sm text-slate-600">
          PaySure syncs online and offline payments, updates bank ledgers instantly, and keeps finance, sales, and buyers in the loop.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {scenarios.map((scenario) => (
          <div key={scenario.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{scenario.title}</h2>
            <ol className="mt-4 space-y-2 text-sm text-slate-600">
              {scenario.steps.map((step, index) => (
                <li key={step}>
                  <span className="mr-2 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold text-indigo-600">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-800">Books & reconciliation</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <div key={book.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{book.name}</p>
              <p className="mt-2">{book.details}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500">
          Import statements via CSV, SFTP, or direct bank APIs. PaySure retains reconciliation history for 7 financial years.
        </p>
      </section>
    </div>
  );
}
