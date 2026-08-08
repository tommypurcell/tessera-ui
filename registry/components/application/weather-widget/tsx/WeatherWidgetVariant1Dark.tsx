import type { ReactNode } from 'react'

export type WeatherWidgetHourlyEntry = {
  label: string
  icon: ReactNode
  temperature: string
}

export type WeatherWidgetVariant1DarkProps = {
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
 * hourly forecast strip, adapted for dark surfaces.
 */
export function WeatherWidget({
  location,
  temperature,
  condition,
  high,
  low,
  icon,
  hourly,
}: WeatherWidgetVariant1DarkProps) {
  return (
    <div className="w-80 rounded-xl border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{location}</p>
          <p className="mt-1 text-4xl font-semibold text-white">{temperature}</p>
          <p className="text-sm text-gray-400">
            {condition} · H:{high} L:{low}
          </p>
        </div>
        <span aria-hidden="true" className="size-12 text-amber-400">
          {icon}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">
        {hourly.map((entry) => (
          <div key={entry.label} className="flex flex-col items-center gap-1.5">
            <span className="text-xs text-gray-400">{entry.label}</span>
            <span aria-hidden="true" className="size-5 text-gray-500">
              {entry.icon}
            </span>
            <span className="text-sm font-medium text-white">{entry.temperature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
