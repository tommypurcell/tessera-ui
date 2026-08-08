import type { ReactNode } from 'react'

export type WeatherWidgetHourlyEntry = {
  label: string
  icon: ReactNode
  temperature: string
}

export type WeatherWidgetVariant1Props = {
  location: string
  temperature: string
  condition: string
  high: string
  low: string
  icon: ReactNode
  hourly: WeatherWidgetHourlyEntry[]
}

/**
 * Copy-and-own Tailwind component. Current-conditions weather tile with an
 * hourly forecast strip. Pass your own icon nodes (e.g. from an icon set)
 * per hour — this component supplies layout only, not a weather API.
 */
export function WeatherWidget({
  location,
  temperature,
  condition,
  high,
  low,
  icon,
  hourly,
}: WeatherWidgetVariant1Props) {
  return (
    <div className="w-80 rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{location}</p>
          <p className="mt-1 text-4xl font-semibold text-gray-900">{temperature}</p>
          <p className="text-sm text-gray-500">
            {condition} · H:{high} L:{low}
          </p>
        </div>
        <span aria-hidden="true" className="size-12 text-amber-400">
          {icon}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        {hourly.map((entry) => (
          <div key={entry.label} className="flex flex-col items-center gap-1.5">
            <span className="text-xs text-gray-500">{entry.label}</span>
            <span aria-hidden="true" className="size-5 text-gray-400">
              {entry.icon}
            </span>
            <span className="text-sm font-medium text-gray-900">{entry.temperature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
