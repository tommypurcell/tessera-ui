export type CoveragePlan = {
  id: string
  name: string
  monthlyPremium: number
  deductible: number
  /** Coverage maximum in dollars, or null for unlimited. */
  coverageMax: number | null
  highlighted?: boolean
  onSelect?: () => void
}

export type CoverageComparisonCardVariant1Props = {
  plans: CoveragePlan[]
  currency?: string
  className?: string
}

function formatCurrency(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)
}

/**
 * Copy-and-own Tailwind component. Coverage comparison card — side-by-side insurance
 * plan cards with deductible/premium/coverage rows, one optionally highlighted as
 * "Best value"; all figures are computed from real plan data, not hardcoded.
 */
export function CoverageComparisonCardVariant1({ plans, currency = 'USD', className }: CoverageComparisonCardVariant1Props) {
  return (
    <div role="group" aria-label="Coverage plan options" className={`grid grid-cols-1 gap-4 sm:grid-cols-3 ${className ?? ''}`}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative rounded-xl bg-white p-5 shadow-sm ${plan.highlighted ? 'border-2 border-blue-600' : 'border border-gray-200'}`}
        >
          {plan.highlighted ? (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white">
              Best value
            </span>
          ) : null}
          <p className="text-sm font-semibold text-gray-900">{plan.name}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">
            {formatCurrency(plan.monthlyPremium, currency)}
            <span className="text-sm font-normal text-gray-400">/mo</span>
          </p>
          <dl className="mt-4 flex flex-col gap-2.5 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Deductible</dt>
              <dd className="font-medium text-gray-900">{formatCurrency(plan.deductible, currency)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Premium</dt>
              <dd className="font-medium text-gray-900">{formatCurrency(plan.monthlyPremium, currency)}/mo</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Coverage max</dt>
              <dd className="font-medium text-gray-900">{plan.coverageMax === null ? 'Unlimited' : formatCurrency(plan.coverageMax, currency)}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={plan.onSelect}
            className={
              plan.highlighted
                ? 'mt-5 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700'
                : 'mt-5 w-full rounded-md border border-gray-300 bg-white py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50'
            }
          >
            Select {plan.name}
          </button>
        </div>
      ))}
    </div>
  )
}
