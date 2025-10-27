const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    cadence: "/company/month",
    description: "For growing businesses digitising receivables, accounting, and compliance.",
    highlights: [
      "Unlimited vouchers and ledgers",
      "GST suite + GSTR-1 filing",
      "PaySure Score dashboard",
      "Email & WhatsApp reminders",
      "2 legal escalations / month",
      "Basic automation rules",
    ],
  },
  {
    name: "Pro",
    price: "₹24,999",
    cadence: "/company/month",
    description: "For enterprises requiring escrow, legal partners, advanced analytics, and SSO.",
    highlights: [
      "Everything in Basic",
      "Unlimited PaySure Guarantees",
      "Escrow orchestration + payouts",
      "AI forecasting & risk alerts",
      "Dedicated legal pod",
      "SAML/Okta SSO + IP whitelisting",
    ],
    popular: true,
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "PaySure onboarding specialists migrate your opening balances and configure workflows within 48 hours. Sandbox access is available instantly after signup.",
  },
  {
    question: "Can I add multiple companies?",
    answer:
      "Yes. Pro plan supports multi-company and consolidated reporting. You can switch entities without logging out.",
  },
  {
    question: "Do you offer on-prem or VPC deployment?",
    answer:
      "Enterprise plan includes dedicated VPC, data residency controls, and single-tenant SOC2 audited infrastructure.",
  },
  {
    question: "What if I need legal escalation often?",
    answer:
      "Pro plan unlocks unlimited escalations and partner coordination. Basic plan users can purchase additional escalations on demand.",
  },
];

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
      <header className="space-y-4 text-center">
        <p className="section-title">Pricing</p>
        <h1 className="section-heading text-balance">Choose a plan that scales from compliance to collections</h1>
        <p className="text-sm text-slate-600">
          Monthly or annual billing. No hidden fees. Pay only for active companies. Add-ons available for extra escrow balance or legal retainers.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border p-8 shadow-lg transition ${
              plan.popular
                ? "border-indigo-500 bg-indigo-50/80 shadow-indigo-200"
                : "border-slate-200 bg-white shadow-slate-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">{plan.name}</h2>
              {plan.popular ? (
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most popular
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
            <p className="mt-6 text-3xl font-semibold text-slate-900">
              {plan.price}
              <span className="text-sm font-normal text-slate-500"> {plan.cadence}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {plan.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <button className="mt-8 w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
              Start 14-day trial
            </button>
          </div>
        ))}
      </div>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-700">{faq.question}</p>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
