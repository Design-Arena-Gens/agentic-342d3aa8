const escalationSteps = [
  {
    title: "Auto reminders",
    detail: "D+3, D+7, D+15 reminders with proof-of-send logs and read receipts.",
  },
  {
    title: "Raise escalation",
    detail: "Compile invoice, payment timeline, reminder history, and contract terms into a case file.",
  },
  {
    title: "Digital legal notice",
    detail: "Generate lawyer-vetted notice, e-sign, and dispatch via email/WhatsApp/post.",
  },
  {
    title: "Partner assignment",
    detail: "Allocate to PaySure Legal Team or partner law firm, track fees, and communication.",
  },
  {
    title: "Recovery & closure",
    detail: "Recovered payment auto-posted, buyer PaySure Score reduced, audit log sealed.",
  },
];

export const metadata = {
  title: "Legal & Escalation",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Legal workflow</p>
        <h1 className="text-3xl font-semibold text-slate-900">Integrated legal escalation and recovery</h1>
        <p className="text-sm text-slate-600">
          PaySure keeps legal partners in sync with finance data. Every reminder, document, and negotiation is recorded for airtight compliance.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Escalation timeline</h2>
        <div className="space-y-4">
          {escalationSteps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <span className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold text-white">{index + 1}</span>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">{step.title}</p>
                <p className="text-xs text-slate-500">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-800">Case management dashboard</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Track case owner, stage, outstanding amount, and deadlines.</li>
          <li>• Centralize call notes, attachments, settlement offers, and reminders.</li>
          <li>• Configure automated escalations to management or credit teams.</li>
          <li>• Integrate with PaySure Coins to reward compliant buyers.</li>
        </ul>
      </section>
    </div>
  );
}
