const payrollFlow = [
  {
    title: "Employee Master",
    description: "Capture PAN, bank details, salary structure, cost center, and compliance documents.",
  },
  {
    title: "Attendance",
    description: "Manual input or CSV import from biometrics/HCM. Handle overtime, leave encashment, and LOP adjustments.",
  },
  {
    title: "Payroll Processing",
    description: "Generate payroll, compute TDS, PF, ESI, Professional Tax, and auto-post Salary Expense → Salary Payable entries.",
  },
  {
    title: "Pay Slip & Payment",
    description: "Create PDF payslips, send to employees, and push bank advice file for payment batch.",
  },
  {
    title: "Compliance",
    description: "Generate statutory returns, challans, and reconciliation reports for ESI/PF and TDS.",
  },
];

export const metadata = {
  title: "Payroll",
};

export default function PayrollPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Payroll & HR</p>
        <h1 className="text-3xl font-semibold text-slate-900">Process payroll with automated postings and compliance</h1>
        <p className="text-sm text-slate-600">
          PaySure connects HR, finance, and banking so salaries go out on time, ledgers stay accurate, and compliance filings are ready instantly.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          {payrollFlow.map((row) => (
            <div key={row.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{row.title}</p>
              <p className="mt-2">{row.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-semibold text-slate-800">Automated ledger entries</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Salary Expense → Debit</li>
          <li>• Salary Payable → Credit</li>
          <li>• PF, ESI, TDS, Professional Tax → liability ledgers</li>
          <li>• Bank payment triggers reversal once batch is executed</li>
        </ul>
      </section>
    </div>
  );
}
