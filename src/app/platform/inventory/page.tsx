const modules = [
  {
    title: "Item Master",
    description:
      "Maintain SKU, HSN, GST rate, unit of measure, reorder level, valuation method, and warehouse dimensions.",
  },
  {
    title: "Material In / Out",
    description:
      "Capture inward/outward stock, lot numbers, expiry and serial tracking with auto-ledger postings.",
  },
  {
    title: "Manufacturing Journal",
    description:
      "Record bill of materials, production batches, wastage, and consumption with work-in-progress accounting.",
  },
  {
    title: "Physical Verification",
    description:
      "Run cycle counts, record variances, and auto-create adjustment vouchers.",
  },
  {
    title: "Sales & Purchase Orders",
    description:
      "Manage order→delivery→invoice workflows with status tracking and fulfilment checks.",
  },
  {
    title: "Job Work",
    description:
      "Issue materials for processing, track challans, and book job work charges automatically.",
  },
];

export const metadata = {
  title: "Inventory & Orders",
};

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Inventory engine</p>
        <h1 className="text-3xl font-semibold text-slate-900">Sync stock movements with accounting and fulfilment</h1>
        <p className="text-sm text-slate-600">
          Every sale or purchase updates stock quantity, valuation, and ledgers. Track orders, delivery, and payment status in one place.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <div key={module.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">{module.title}</p>
            <p className="mt-3 text-sm text-slate-600">{module.description}</p>
          </div>
        ))}
      </div>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-800">Order journeys</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Sales</p>
            <p className="mt-2">
              Sales Order → Reserve stock → Delivery Challan → E-way bill → Sales Invoice → PaySure Guarantee → Receipt & reconciliation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Purchase</p>
            <p className="mt-2">
              Purchase Order → Goods Receipt Note → Quality check → Purchase Invoice → Payment → Debit note (if needed).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
