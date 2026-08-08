import type { ReactNode } from 'react'

export type WeatherWidgetDailyEntry = {
  label: string
  icon: ReactNode
  temperature: string
}

export type WeatherWidgetVariant2Props = {
  location: string
  temperature: string
  condition: string
  icon: ReactNode
  daily: WeatherWidgetDailyEntry[]
}

/**
 * Copy-and-own Tailwind component. Gradient-card weather widget with a
 * 5-day forecast row, for a bolder dashboard tile than the bordered
 * hourly-strip variant.
 */
export function WeatherWidget({ location, temperature, condition, icon, daily }: WeatherWidgetVariant2Props) {
  return (
    <div className="w-80 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 p-5 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-sky-100">{location}</p>
          <p className="mt-1 text-5xl font-semibold">{temperature}</p>
          <p className="text-sm text-sky-100">{condition}</p>
        </div>
        <span aria-hidden="true" className="size-14">
          {icon}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-5 gap-2 border-t border-white/20 pt-4">
        {daily.map((entry) => (
          <div key={entry.label} className="flex flex-col items-center gap-1.5">
            <span className="text-xs text-sky-100">{entry.label}</span>
            <span aria-hidden="true" className="size-5">
              {entry.icon}
            </span>
            <span className="text-sm font-medium">{entry.temperature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
