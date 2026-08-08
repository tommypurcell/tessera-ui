export type SpendingInsightsCategory = {
  name: string
  spent: number
  average: number
  maxScale: number
}

export type SpendingInsightsBarVariant1Props = {
  periodLabel: string
  categories: SpendingInsightsCategory[]
}

function statusColor(spent: number, average: number) {
  if (spent > average) return { fill: 'bg-red-500', value: 'text-red-600' }
  if (spent < average) return { fill: 'bg-emerald-500', value: 'text-emerald-600' }
  return { fill: 'bg-gray-400', value: 'text-gray-900' }
}

/**
 * Copy-and-own Tailwind component. Per-category spending bars with a tick
 * marker at each category's historical average, colored by over/under status.
 */
export function SpendingInsightsBar({ periodLabel, categories }: SpendingInsightsBarVariant1Props) {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold text-gray-900">Spending this month</h2>
        <span className="text-xs text-gray-500">{periodLabel}</span>
      </div>

      <ul className="mt-5 flex flex-col gap-4">
        {categories.map((category) => {
          const { fill, value } = statusColor(category.spent, category.average)
          const spentPct = Math.min(100, (category.spent / category.maxScale) * 100)
          const avgPct = Math.min(100, (category.average / category.maxScale) * 100)
          const delta = category.spent - category.average
          const deltaPct = category.average === 0 ? 0 : Math.round((Math.abs(delta) / category.average) * 100)
          const deltaText = delta === 0 ? 'on average' : delta > 0 ? `${deltaPct}% over average` : `${deltaPct}% under average`

          return (
            <li key={category.name}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-gray-700">{category.name}</span>
                <span className={`font-semibold ${value}`}>
                  ${category.spent} <span className="font-normal text-gray-400">avg ${category.average}</span>
                </span>
              </div>
              <div className="relative mt-1.5 h-2 w-full rounded-full bg-gray-100">
                <div
                  className={`h-2 rounded-full ${fill}`}
                  style={{ width: `${spentPct}%` }}
                  role="img"
                  aria-label={`${category.name}: $${category.spent} spent, average $${category.average}, ${deltaText}`}
                />
                <div className="absolute top-1/2 h-3.5 w-0.5 -translate-y-1/2 rounded-full bg-gray-500" style={{ left: `${avgPct}%` }} aria-hidden="true" />
              </div>
            </li>
          )
        })}
      </ul>

      <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          Over average
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Under average
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3.5 w-0.5 rounded-full bg-gray-500" />
          6-mo avg
        </span>
      </div>
    </div>
  )
}
