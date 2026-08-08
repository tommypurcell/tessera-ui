export type DailyForecast = {
  day: string
  high: number
  low: number
  precipPercent: number
  icon: 'sun' | 'cloud' | 'rain'
}

export type WeatherForecastRowVariant1Props = {
  forecast: DailyForecast[]
}

const iconPaths: Record<DailyForecast['icon'], { path: string; className: string }> = {
  sun: { path: 'M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.36 6.36-1.06-1.06M6.7 6.7 5.64 5.64m12.72 0-1.06 1.06M6.7 17.3l-1.06 1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z', className: 'text-amber-300' },
  cloud: { path: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z', className: 'text-gray-500' },
  rain: { path: 'M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Zm5.75 4 -1 2m5-2 -1 2m5-2 -1 2', className: 'text-blue-400' },
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the 7-day
 * weather forecast strip.
 */
export function WeatherForecastRow({ forecast }: WeatherForecastRowVariant1Props) {
  return (
    <div className="flex w-full max-w-2xl divide-x divide-gray-800 rounded-lg border border-gray-800 bg-gray-900">
      {forecast.map((day) => {
        const icon = iconPaths[day.icon]
        return (
          <div key={day.day} className="flex flex-1 flex-col items-center gap-1.5 px-2 py-4">
            <span className="text-xs font-medium text-gray-500">{day.day}</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className={`size-6 ${icon.className}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
            </svg>
            <span className="text-[11px] text-blue-400">{day.precipPercent}%</span>
            <span className="text-sm font-semibold text-gray-100">{day.high}°</span>
            <span className="text-xs text-gray-500">{day.low}°</span>
          </div>
        )
      })}
    </div>
  )
}
