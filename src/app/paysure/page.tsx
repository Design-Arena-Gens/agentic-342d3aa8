import Link from "next/link";

export const metadata = {
  title: "PaySure Guarantee",
};

export default function PaySureLandingPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3 text-center">
        <p className="section-title">PaySure Guarantee</p>
        <h1 className="section-heading text-balance">Payment protection, reminders, and legal workflows</h1>
        <p className="text-sm text-slate-600">
          Activate PaySure Guarantee on every invoice to ensure buyers verify, pay on time, and stay accountable.
        </p>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-600">
          PaySure Guarantee is fully described on the platform page. Continue to the detailed module guide to review deal lifecycle, automation, legal escalation, and partner network.
        </p>
        <Link
          href="/platform/paysure"
          className="mt-4 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          View PaySure module
        </Link>
      </div>
    </div>
  );
}
