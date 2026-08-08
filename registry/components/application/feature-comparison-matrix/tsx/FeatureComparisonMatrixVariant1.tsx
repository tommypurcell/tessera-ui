import type { HTMLAttributes } from 'react'

export type FeatureCell = boolean | string | number

export type FeatureComparisonPlan = {
  id: string
  name: string
  highlighted?: boolean
  badge?: string
}

export type FeatureComparisonRow = {
  id: string
  label: string
  values: Record<string, FeatureCell>
}

export type FeatureComparisonMatrixVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  plans: FeatureComparisonPlan[]
  rows: FeatureComparisonRow[]
}

function renderCell(value: FeatureCell) {
  if (typeof value === 'boolean') {
    return value ? (
      <>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="mx-auto size-4 text-gray-900">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        <span className="sr-only">Included</span>
      </>
    ) : (
      <>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="mx-auto size-4 text-gray-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <span className="sr-only">Not included</span>
      </>
    )
  }
  return String(value)
}

/**
 * Copy-and-own Tailwind component. Plan comparison table taking real
 * plans/rows contracts — pass your own feature data instead of hand-editing markup.
 */
export function FeatureComparisonMatrix({ className, plans, rows, ...props }: FeatureComparisonMatrixVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="sticky left-0 bg-white px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Feature
              </th>
              {plans.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={`px-4 py-3 text-center text-sm font-semibold ${plan.highlighted ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}`}
                >
                  {plan.name}
                  {plan.badge ? (
                    <span className="ml-1.5 inline-flex items-center rounded-full bg-gray-900 px-1.5 py-0.5 text-[10px] font-medium text-white">{plan.badge}</span>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="sticky left-0 bg-white px-4 py-3 text-sm text-gray-700">{row.label}</td>
                {plans.map((plan) => {
                  const value = row.values[plan.id]
                  return (
                    <td
                      key={plan.id}
                      className={`px-4 py-3 text-center text-sm ${plan.highlighted ? 'bg-gray-50 font-medium text-gray-900' : 'text-gray-600'}`}
                    >
                      {renderCell(value)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
