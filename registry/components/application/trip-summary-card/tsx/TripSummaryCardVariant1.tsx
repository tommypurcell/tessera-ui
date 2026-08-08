export type TripStat = {
  value: string
  unit: string
  label: string
}

export type TripSummaryCardVariant1Props = {
  title: string
  timestamp: string
  routeLabel: string
  stats: TripStat[]
}

/**
 * Copy-and-own Tailwind component. Drive summary card with a title/timestamp
 * header, a route line, and a 2x2 grid of trip stats (distance, duration,
 * average speed, efficiency), each pairing a value with its unit.
 */
export function TripSummaryCard({ title, timestamp, routeLabel, stats }: TripSummaryCardVariant1Props) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{timestamp}</p>
      </div>
      <p className="mt-0.5 text-xs text-gray-500">{routeLabel}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-gray-50 p-3">
            <p className="text-lg font-semibold text-gray-900">
              {stat.value} <span className="text-xs font-normal text-gray-500">{stat.unit}</span>
            </p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
