const milestones = [
  {
    year: "2021",
    title: "PaySure founded",
    description:
      "Former Big4 auditors and fintech operators launched a mission to de-risk Indian B2B trade after witnessing ₹3,200 Cr locked in disputes.",
  },
  {
    year: "2022",
    title: "Accounting engine released",
    description:
      "Built a Tally-compatible ledger engine with automated GST rules, enabling fast migrations for SMBs and mid-market companies.",
  },
  {
    year: "2023",
    title: "PaySure Guarantee & Legal Hub",
    description:
      "Introduced escrow-backed smart invoices, AI payment nudges, and a nationwide network of legal & CA partners.",
  },
  {
    year: "2024",
    title: "Enterprise & intelligence",
    description:
      "Rolled out SOC2 Type II, maker-checker workflows, multi-company consolidation, and AI forecasting models.",
  },
];

const leadership = [
  { name: "Ananya Shah", role: "Co-founder & CEO", focus: "Legal-tech, risk strategy" },
  { name: "Raghav Iyer", role: "Co-founder & CTO", focus: "Accounting engine, platform security" },
  { name: "Sana Merchant", role: "Chief Compliance Officer", focus: "GST, MCA, SOC2, ISO certifications" },
  { name: "Neeraj Patil", role: "Head of PaySure Guarantee", focus: "Escrow, collections, partner network" },
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <p className="section-title">About PaySure</p>
        <h1 className="section-heading text-balance">We built PaySure to end working capital anxiety for Indian businesses</h1>
        <p className="text-sm text-slate-600">
          PaySure orchestrates accounting, payments, legal, and intelligence into a single trust layer for B2B commerce. Our team bridges chartered accountants, litigators, and fintech builders.
        </p>
      </header>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Leadership</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((leader) => (
            <div key={leader.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-base font-semibold text-slate-800">{leader.name}</p>
              <p className="text-sm text-slate-500">{leader.role}</p>
              <p className="mt-2 text-sm text-slate-600">Focus: {leader.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-indigo-100 bg-indigo-50 p-8">
        <h2 className="text-xl font-semibold text-indigo-700">Milestones</h2>
        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="rounded-2xl border border-indigo-100 bg-white/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">{milestone.year}</p>
              <p className="mt-1 text-base font-semibold text-slate-800">{milestone.title}</p>
              <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Careers</h2>
        <p className="text-sm text-slate-600">
          Join product squads in Mumbai, Bengaluru, or remote-first pods across India. We&apos;re hiring in engineering, product design, compliance, and customer success.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Engineering</p>
            <p className="mt-2">Platform engineers, AI specialists, frontend leads</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Finance & Legal Ops</p>
            <p className="mt-2">Chartered accountants, legal associates, partner success</p>
          </div>
        </div>
      </section>
    </div>
  );
}
