import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Overview", href: "/features" },
      { label: "Platform", href: "/platform/dashboard" },
      { label: "Integrations", href: "/features#integrations" },
      { label: "Security", href: "/platform/security" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/platform/admin" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "/developers" },
      { label: "API", href: "/developers/api" },
      { label: "Support", href: "/contact" },
      { label: "Status", href: "/platform/admin#status" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Compliance", href: "/enterprise" },
      { label: "Security", href: "/platform/security" },
    ],
  },
];

export function MainFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:py-20 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-semibold">
              PS
            </div>
            <div>
              <p className="text-base font-semibold text-white">PaySure</p>
              <p className="text-xs uppercase tracking-widest text-indigo-300">
                Trusted B2B Finance
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            PaySure is the unified operating system for B2B commerce. Protect payments, automate accounting, and collaborate with legal partners in one secure, compliant platform.
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} PaySure Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {section.title}
            </p>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
