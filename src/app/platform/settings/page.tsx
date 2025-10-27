const sections = [
  {
    title: "Company info",
    description: "Edit business profile, branches, branding assets, and invoice templates.",
  },
  {
    title: "Tax settings",
    description: "Manage GSTIN, PAN, TDS settings, HSN/SAC codes, and default tax groups.",
  },
  {
    title: "Bank accounts",
    description: "Add settlement accounts, configure payout priorities, and reconcile statements.",
  },
  {
    title: "Team roles & permissions",
    description: "RBAC matrix with Admin, Accountant, Sales, Collections, Legal roles.",
  },
  {
    title: "Multi-branch",
    description: "Configure branches, cost centers, and inter-branch eliminations.",
  },
  {
    title: "Approval workflows",
    description: "Set maker-checker rules (e.g., payments > ₹50,000 require admin approval).",
  },
  {
    title: "Notifications & templates",
    description: "Customize email/SMS/WhatsApp templates for invoices, reminders, and legal notices.",
  },
  {
    title: "Backup & restore",
    description: "Schedule automated backups, export data snapshots, and restore to sandbox.",
  },
  {
    title: "Subscription & billing",
    description: "Manage plan, invoices, PaySure Coin redemptions, and add-ons.",
  },
];

export const metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Settings</p>
        <h1 className="text-3xl font-semibold text-slate-900">Configure every aspect of PaySure</h1>
        <p className="text-sm text-slate-600">
          Settings unify company data, tax, banking, security, and automation so your workspace mirrors how you operate.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">{section.title}</p>
            <p className="mt-3 text-sm text-slate-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
