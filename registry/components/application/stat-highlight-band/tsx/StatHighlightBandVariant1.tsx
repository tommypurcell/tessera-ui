export type StatHighlight = {
  label: string
  value: string
}

export type StatHighlightBandVariant1Props = {
  stats: StatHighlight[]
}

const columnClasses: Record<number, string> = {
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
}

/**
 * Copy-and-own Tailwind component. Full-width band of 3-4 headline metrics
 * with labels, separated by dividers rather than individual card borders.
 */
export function StatHighlightBand({ stats }: StatHighlightBandVariant1Props) {
  return (
    <div className="w-full max-w-3xl rounded-xl border border-gray-200 bg-white py-8">
      <dl className={`grid grid-cols-2 divide-y divide-gray-100 sm:divide-y-0 sm:divide-x ${columnClasses[stats.length] ?? 'sm:grid-cols-4'}`}>
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-4 sm:py-0">
            <dt className="text-sm text-gray-500">{stat.label}</dt>
            <dd className="text-3xl font-semibold text-gray-900">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
