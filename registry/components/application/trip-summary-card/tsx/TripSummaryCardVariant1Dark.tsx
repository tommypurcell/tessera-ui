export type TripStatDark = {
  value: string
  unit: string
  label: string
}

export type TripSummaryCardVariant1DarkProps = {
  title: string
  timestamp: string
  routeLabel: string
  stats: TripStatDark[]
}

/**
 * Copy-and-own Tailwind component. Drive summary card with a title/timestamp
 * header, a route line, and a 2x2 grid of trip stats (distance, duration,
 * average speed, efficiency), each pairing a value with its unit.
 */
export function TripSummaryCardDark({ title, timestamp, routeLabel, stats }: TripSummaryCardVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-gray-400">{timestamp}</p>
      </div>
      <p className="mt-0.5 text-xs text-gray-400">{routeLabel}</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-gray-800 p-3">
            <p className="text-lg font-semibold text-white">
              {stat.value} <span className="text-xs font-normal text-gray-400">{stat.unit}</span>
            </p>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
