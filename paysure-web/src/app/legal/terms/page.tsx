export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
      <h1 className="section-heading">Terms of Service</h1>
      <p className="text-sm text-slate-600">
        These indicative terms outline how PaySure Technologies Pvt. Ltd. provides access to the PaySure platform, including accounting, payment, legal, and intelligence modules. They cover acceptable use, confidentiality, data protection, service levels, and liability limitations. Replace this placeholder with your organisation&apos;s final legal documentation before production use.
      </p>
      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Key sections</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Definitions & scope</li>
          <li>• User responsibilities and permitted use</li>
          <li>• Payment terms and billing cycles</li>
          <li>• Data protection, backups, and retention</li>
          <li>• Confidentiality and intellectual property</li>
          <li>• Limitation of liability and indemnity</li>
          <li>• Governing law and dispute resolution</li>
        </ul>
      </section>
    </div>
  );
}
