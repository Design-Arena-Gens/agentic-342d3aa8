const adminViews = [
  {
    title: "Global analytics",
    description: "Track active companies, payment volumes, escalations, and PaySure Score trends across the platform.",
  },
  {
    title: "Fraud detection",
    description: "Monitor unusual invoice patterns, duplicate accounts, and high-risk buyers with AI signals.",
  },
  {
    title: "Legal case monitor",
    description: "Oversee all open cases, partner performance, recovery rates, and SLA adherence.",
  },
  {
    title: "Partner management",
    description: "Onboard law firms, auditors, and collection agencies with KYC and performance scoring.",
  },
  {
    title: "User verification & KYC",
    description: "Approve new companies, review documents, and manage risk classifications.",
  },
  {
    title: "Fees & settlements",
    description: "Reconcile platform fees, escrow balances, and payouts to partners.",
  },
];

export const metadata = {
  title: "Admin Controls",
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3" id="status">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Platform admin</p>
        <h1 className="text-3xl font-semibold text-slate-900">Operate PaySure at scale</h1>
        <p className="text-sm text-slate-600">
          Admin controls bring together risk, compliance, partner operations, and financial settlements for the PaySure ecosystem.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {adminViews.map((view) => (
            <div key={view.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{view.title}</p>
              <p className="mt-2">{view.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
