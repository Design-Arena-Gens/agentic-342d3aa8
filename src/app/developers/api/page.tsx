const endpoints = [
  {
    method: "POST",
    path: "/v1/invoices",
    description: "Create invoices, attach documents, optionally enable PaySure Guarantee.",
  },
  {
    method: "POST",
    path: "/v1/payments",
    description: "Record payments (online/offline), reconcile with invoices, and trigger notifications.",
  },
  {
    method: "POST",
    path: "/v1/paysure-deals",
    description: "Initiate PaySure deals with buyer KYC, milestone scheduling, and escrow options.",
  },
  {
    method: "GET",
    path: "/v1/reports/{reportType}",
    description: "Download financial reports (balance-sheet, gst-returns, ageing, score) in JSON.",
  },
  {
    method: "POST",
    path: "/v1/webhooks/test",
    description: "Trigger test webhooks to validate endpoints and retry logic.",
  },
];

export const metadata = {
  title: "API Reference",
};

export default function DevelopersApiPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">API</p>
        <h1 className="text-3xl font-semibold text-slate-900">REST APIs & Webhooks</h1>
        <p className="text-sm text-slate-600">
          Authenticate with bearer tokens, use tenant-specific endpoints, and subscribe to webhook events for real-time sync.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-3">
          {endpoints.map((endpoint) => (
            <div key={endpoint.path} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">{endpoint.method}</span>
                <span className="ml-3 font-mono text-xs text-indigo-600">{endpoint.path}</span>
              </p>
              <p className="mt-2">{endpoint.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
