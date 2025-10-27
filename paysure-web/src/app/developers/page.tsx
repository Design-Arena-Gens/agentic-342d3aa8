const tooling = [
  {
    title: "API keys & scopes",
    detail: "Create sandbox or production keys, define scopes (accounting, payments, legal), and rotate on schedule.",
  },
  {
    title: "Webhooks",
    detail: "Receive events for invoices, payments, disputes, escalations, and PaySure Score changes.",
  },
  {
    title: "Documentation",
    detail: "Swagger, Postman collection, and code snippets for Node, Python, and Java.",
  },
  {
    title: "Sandbox",
    detail: "Test end-to-end flows with mocked banks, buyers, and legal escalations.",
  },
];

export const metadata = {
  title: "Developer Tools",
};

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Developer platform</p>
        <h1 className="text-3xl font-semibold text-slate-900">Build with PaySure APIs</h1>
        <p className="text-sm text-slate-600">
          Extend PaySure into your custom workflows, CRMs, and ERPs with secure APIs and webhooks.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {tooling.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{item.title}</p>
              <p className="mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
