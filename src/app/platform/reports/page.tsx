const reports = [
  {
    category: "Financial Statements",
    items: ["Balance Sheet", "Profit & Loss", "Trial Balance", "Cash Flow", "Day Book"],
  },
  {
    category: "Compliance",
    items: ["GST GSTR-1", "GST GSTR-3B", "HSN Summary", "TDS", "Audit Trail"],
  },
  {
    category: "Operational",
    items: ["Stock Summary", "Payables Ageing", "Receivables Ageing", "Expense Analytics"],
  },
  {
    category: "Intelligence",
    items: ["PaySure Score Dashboard", "Ratio Analysis", "Cashflow Forecast", "Risk Alerts"],
  },
];

export const metadata = {
  title: "Reports & Insights",
};

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Reports & Insights</p>
        <h1 className="text-3xl font-semibold text-slate-900">Board-ready reports with AI intelligence</h1>
        <p className="text-sm text-slate-600">
          Every entry in PaySure powers real-time analytics. Export to PDF, Excel, Tally XML, or JSON with a click.
        </p>
      </header>

      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        {reports.map((group) => (
          <div key={group.category} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-800">{group.category}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 font-semibold shadow-sm shadow-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="space-y-4 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
        <h2 className="text-xl font-semibold text-indigo-700">AI Intelligence</h2>
        <ul className="space-y-2 text-sm text-indigo-600">
          <li>• Predictive payment delays with buyer reliability scoring.</li>
          <li>• Scenario analysis: prepay vendor X to save ₹15,000 in GST interest.</li>
          <li>• Collection velocity trend highlighting 10% slowdown this quarter.</li>
          <li>• Expense categorization with anomaly alerts.</li>
        </ul>
      </section>
    </div>
  );
}
