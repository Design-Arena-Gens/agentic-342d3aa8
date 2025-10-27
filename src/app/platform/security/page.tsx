const controls = [
  {
    title: "Two-factor authentication",
    detail: "Enforce 2FA for all users with OTP, authenticator apps, or hardware keys.",
  },
  {
    title: "Role-based access control",
    detail: "Granular permissions for accounting, payments, legal, and admin modules.",
  },
  {
    title: "Encryption",
    detail: "Bank details, PAN, and documents encrypted at rest and in transit (TLS 1.3, AES-256).",
  },
  {
    title: "Audit logs",
    detail: "Every create/edit/delete action is logged with timestamp, user, and IP.",
  },
  {
    title: "IP whitelisting",
    detail: "Restrict access to corporate networks or VPNs for enterprise users.",
  },
  {
    title: "Secure API keys",
    detail: "Rotate keys, limit scopes, and monitor usage with anomaly alerts.",
  },
];

export const metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Security</p>
        <h1 className="text-3xl font-semibold text-slate-900">Enterprise-grade protection</h1>
        <p className="text-sm text-slate-600">
          PaySure is SOC2, ISO 27001, and GDPR ready. Dedicated security dashboards monitor posture in real time.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {controls.map((control) => (
            <div key={control.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{control.title}</p>
              <p className="mt-2">{control.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
        <h2 className="text-xl font-semibold text-indigo-700">Compliance</h2>
        <p className="text-sm text-indigo-600">
          SOC2 Type II, ISO 27001:2022, PCI DSS for payment modules, and regulatory-grade audit trails. Data residency options include Mumbai, Delhi, Singapore.
        </p>
      </section>
    </div>
  );
}
