export type SecondaryStat = {
  id: string
  label: string
  value: string
  negative?: boolean
}

export type ExpandedDetailCardVariant1Props = {
  metricLabel: string
  metricValue: string
  deltaPercent: number
  comparisonLabel: string
  secondaryStats: SecondaryStat[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Dashboard hero-metric card: a large
 * primary metric with a delta badge and comparison caption, followed by a
 * secondary stats grid breaking the metric down further. Distinct from Big
 * Number Delta Tile, which is a small single-metric tile with no secondary
 * breakdown, rather than an expanded card meant to anchor a dashboard
 * section.
 */
export function ExpandedDetailCard({ metricLabel, metricValue, deltaPercent, comparisonLabel, secondaryStats, className }: ExpandedDetailCardVariant1Props) {
  const isPositive = deltaPercent >= 0

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 ${className ?? ''}`}>
      <span className="text-sm font-medium text-gray-500">{metricLabel}</span>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight text-gray-900">{metricValue}</span>
        <span className={`inline-flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`size-3.5 ${isPositive ? '' : 'rotate-180'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
          <span className="sr-only">{isPositive ? 'Increased by ' : 'Decreased by '}</span>
          {Math.abs(deltaPercent)}%
        </span>
      </div>
      <p className="mt-1 text-xs text-gray-400">{comparisonLabel}</p>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
        {secondaryStats.map((stat) => (
          <div key={stat.id}>
            <dt className="text-xs text-gray-400">{stat.label}</dt>
            <dd className={`mt-0.5 text-sm font-semibold ${stat.negative ? 'text-rose-600' : 'text-gray-900'}`}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
