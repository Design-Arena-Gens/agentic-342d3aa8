const lifecycle = [
  {
    stage: "Deal Created",
    detail: "Seller submits buyer, amount, documents, and activates PaySure Guarantee.",
  },
  {
    stage: "Verification",
    detail: "Buyer reviews smart invoice, signs digital terms, and completes KYC.",
  },
  {
    stage: "Escrow",
    detail: "Funds are held in escrow or verified via bank confirmation. PaySure Score updates.",
  },
  {
    stage: "Payment Due",
    detail: "AI reminders trigger across email, SMS, WhatsApp before and after due date.",
  },
  {
    stage: "Escalation",
    detail: "If unpaid, compile proof pack, generate legal notice, and assign partner.",
  },
  {
    stage: "Resolution",
    detail: "Recovered funds auto-posted, PaySure Coins credited, buyer score adjusted.",
  },
];

export const metadata = {
  title: "PaySure Guarantee",
};

export default function PaySurePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Monopoly layer</p>
        <h1 className="text-3xl font-semibold text-slate-900">Protect every B2B transaction with PaySure Guarantee</h1>
        <p className="text-sm text-slate-600">
          Convert invoices into guaranteed deals. Buyers get transparent terms, sellers get assured payments, and legal teams stay involved automatically.
        </p>
      </header>

      <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Deal flow</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {lifecycle.map((step) => (
            <div key={step.stage} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{step.stage}</p>
              <p className="mt-2">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
        <h2 className="text-xl font-semibold text-indigo-700">Automation</h2>
        <ul className="space-y-3 text-sm text-indigo-600">
          <li>• AI reminders via email, SMS, WhatsApp with embedded payment links.</li>
          <li>• Timeline updates mirror buyer actions with read receipts and evidence logs.</li>
          <li>• Auto journal entries on every stage change—booking receivable, escrow, and settlement ledgers.</li>
          <li>• Instant legal notice generation with attachments, proof of communication, and digital signatures.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Partner network</h2>
        <p className="text-sm text-slate-600">
          Assign collection to verified CAs or law firms with one click. Track case notes, resolution status, fees, and recovered amounts in PaySure Legal Hub.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="text-sm font-semibold text-slate-800">PaySure Legal Team</p>
            <p>Pan-India, 48h SLA, negotiates settlement & issues notices.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="text-sm font-semibold text-slate-800">Partner CA Firms</p>
            <p>Balance ledger disputes, reconcile advances, ensure GST compliance.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
            <p className="text-sm font-semibold text-slate-800">Collection Agencies</p>
            <p>Performance-based fees, integrated with PaySure Score adjustments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
