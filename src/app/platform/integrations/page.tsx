const integrations = [
  {
    category: "Accounting",
    items: ["Tally Prime", "Zoho Books", "QuickBooks", "Busy Accounting"],
  },
  {
    category: "Bank feeds",
    items: ["RazorpayX", "ICICI Bank", "HDFC Bank", "Axis Bank", "Yes Bank"],
  },
  {
    category: "Compliance",
    items: ["GST portal", "MCA", "Income Tax", "PaySure Legal Hub"],
  },
  {
    category: "Messaging",
    items: ["WhatsApp Business API", "Slack", "Microsoft Teams", "Email SMTP"],
  },
];

export const metadata = {
  title: "Integrations",
};

export default function IntegrationsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Integrations</p>
        <h1 className="text-3xl font-semibold text-slate-900">Connect PaySure to your ecosystem</h1>
        <p className="text-sm text-slate-600">
          Use connectors, APIs, and webhooks to sync accounting, payments, compliance, and communication systems.
        </p>
      </header>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        {integrations.map((group) => (
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
      </section>

      <section className="space-y-3 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
        <h2 className="text-xl font-semibold text-indigo-700">Developer API</h2>
        <p className="text-sm text-indigo-600">
          Generate API keys, configure webhook endpoints for invoices, payments, disputes, and integrate PaySure into your CRM or ERP.
        </p>
      </section>
    </div>
  );
}
