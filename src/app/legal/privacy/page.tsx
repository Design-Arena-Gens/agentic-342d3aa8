export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="section-heading">Privacy Policy</h1>
      <p className="text-sm text-slate-600">
        PaySure commits to protecting customer and counterparty data. This placeholder outlines privacy principles such as lawful processing, consent, purpose limitation, security measures, third-party sharing, and data subject rights. Replace with your vetted privacy policy.
      </p>
      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Information we collect (company data, transactions, payments, legal artefacts)</li>
          <li>• How we use data (accounting, payment processing, legal workflows, analytics)</li>
          <li>• Data retention & deletion timelines</li>
          <li>• Security measures (encryption, RBAC, audit logs)</li>
          <li>• International data transfers & residency</li>
          <li>• Contact details for privacy inquiries</li>
        </ul>
      </section>
    </div>
  );
}
