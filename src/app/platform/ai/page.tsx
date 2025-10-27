const insights = [
  {
    title: "Cashflow forecast",
    detail: "Predict inflows/outflows by combining receivables, payables, payroll, and planned capex.",
  },
  {
    title: "Smart tips",
    detail: "E.g., ‘You can save ₹15,000 tax if you prepay this vendor’ based on tax projections and due dates.",
  },
  {
    title: "Collection velocity",
    detail: "Detect a 10% drop in payment collection speed and highlight risky buyers.",
  },
  {
    title: "Predictive delays",
    detail: "Score buyers likely to default using transaction history, credit data, and behaviour signals.",
  },
  {
    title: "Auto-categorisation",
    detail: "Tag expenses, match invoices, and suggest ledger mapping for new vendors.",
  },
];

export const metadata = {
  title: "AI Assistant",
};

export default function AIPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Automation & intelligence</p>
        <h1 className="text-3xl font-semibold text-slate-900">PaySure AI Copilot</h1>
        <p className="text-sm text-slate-600">
          AI surfaces actionable insights across accounting, payments, legal, and compliance to keep you ahead.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {insights.map((insight) => (
            <div key={insight.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{insight.title}</p>
              <p className="mt-2">{insight.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
