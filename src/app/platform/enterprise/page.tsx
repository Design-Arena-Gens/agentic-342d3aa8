const features = [
  {
    title: "Multi-company",
    description: "Manage multiple entities with consolidated reporting, inter-company eliminations, and shared PaySure Coins.",
  },
  {
    title: "Multi-currency",
    description: "Support USD, EUR, GBP with forex revaluation and gains/losses entries.",
  },
  {
    title: "Audit approvals",
    description: "Maker-checker and auditor sign-off for vouchers, reports, and escalations.",
  },
  {
    title: "Compliance certifications",
    description: "SOC2, ISO 27001, GDPR readiness, RBI circular compliance, data residency controls.",
  },
  {
    title: "High availability",
    description: "Active-active failover across regions with RPO &lt; 5 mins, RTO &lt; 30 mins.",
  },
  {
    title: "Backup zones",
    description: "Configurable backup policies with encrypted snapshots stored in multiple zones.",
  },
];

export const metadata = {
  title: "Enterprise & Compliance",
};

export default function EnterprisePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Enterprise</p>
        <h1 className="text-3xl font-semibold text-slate-900">Scale PaySure with enterprise governance</h1>
        <p className="text-sm text-slate-600">
          Enterprise plan unlocks multi-company operations, international trade workflows, and compliance tooling for regulators and auditors.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{feature.title}</p>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
