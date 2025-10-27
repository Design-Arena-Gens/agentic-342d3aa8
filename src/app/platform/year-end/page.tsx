const checklist = [
  "Auto-lock previous financial year ledgers",
  "Carry forward balances to new fiscal year",
  "Generate audit-ready reports and working papers",
  "Export to Tally/Excel/PDF",
  "Backup financial data to cloud vault",
];

export const metadata = {
  title: "Year-End Closure",
};

export default function YearEndPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Year-end</p>
        <h1 className="text-3xl font-semibold text-slate-900">Close the year with confidence</h1>
        <p className="text-sm text-slate-600">
          PaySure prepares closing entries, locks periods, and compiles audit packs for chartered accountants.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Checklist</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          {checklist.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
