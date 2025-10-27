const scoreFactors = [
  {
    label: "On-time payments",
    description: "+20 points for completing payments before due date.",
  },
  {
    label: "Disputes resolved",
    description: "-15 points if a dispute escalates without resolution within 30 days.",
  },
  {
    label: "Document compliance",
    description: "+10 points for verified KYC, PO, and invoice documentation.",
  },
  {
    label: "Escrow usage",
    description: "+5 points for each successful escrow-backed payment cycle.",
  },
];

export const metadata = {
  title: "PaySure Score & Coins",
};

export default function RewardsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Trust layer</p>
        <h1 className="text-3xl font-semibold text-slate-900">PaySure Score & Coins</h1>
        <p className="text-sm text-slate-600">
          Track buyer reliability and seller discipline. Positive behavior earns PaySure Coins redeemable against subscription discounts or partner perks.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Score calculation</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {scoreFactors.map((factor) => (
            <div key={factor.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{factor.label}</p>
              <p className="mt-2">{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
        <h2 className="text-xl font-semibold text-indigo-700">Coins redemption</h2>
        <ul className="space-y-2 text-sm text-indigo-600">
          <li>• Redeem for plan discounts, legal retainers, or escrow fee credits.</li>
          <li>• Transfer coins within group companies to encourage compliance.</li>
          <li>• Showcase PaySure Score in supplier portals and tenders.</li>
        </ul>
      </section>
    </div>
  );
}
