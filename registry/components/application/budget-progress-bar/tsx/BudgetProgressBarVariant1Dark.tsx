export type BudgetProgressBarVariant1DarkProps = {
  label: string
  spent: number
  budget: number
}

const currency = (n: number) => `$${n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`

/**
 * Copy-and-own Tailwind component. Spend-vs-budget progress bar adapted
 * for dark surfaces — fill width and over-budget state are both
 * computed from real `spent` and `budget` numbers.
 */
export function BudgetProgressBarDark({ label, spent, budget }: BudgetProgressBarVariant1DarkProps) {
  const pct = budget === 0 ? 0 : (spent / budget) * 100
  const isOverBudget = spent > budget
  const overspend = spent - budget

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-800 bg-gray-900 p-6">
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-gray-300">{label}</span>
        <span className={isOverBudget ? 'font-semibold text-red-400' : 'font-semibold text-gray-100'}>
          {currency(spent)} <span className="font-normal text-gray-500">/ {currency(budget)}</span>
        </span>
      </div>

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-800">
        <div
          className={`h-2.5 rounded-full ${isOverBudget ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
          role="img"
          aria-label={`${label}: ${currency(spent)} of ${currency(budget)} spent${isOverBudget ? `, ${currency(overspend)} over budget` : ''}`}
        />
      </div>

      {isOverBudget ? <p className="text-xs font-medium text-red-400">{currency(overspend)} over budget</p> : null}
    </div>
  )
}
