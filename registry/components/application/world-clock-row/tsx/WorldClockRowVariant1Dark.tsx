export type WorldClockEntryDark = {
  city: string
  zoneLabel: string
  time: string
  isDaytime: boolean
}

export type WorldClockRowVariant1DarkProps = {
  entries: WorldClockEntryDark[]
}

const sunIconPath =
  'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
const moonIconPath =
  'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'

/**
 * Copy-and-own Tailwind component. List of timezone rows showing city, UTC
 * offset, current time, and a sun/moon icon indicating day or night there.
 * Pass live-computed times and `isDaytime` from your own Intl/date logic.
 */
export function WorldClockRowDark({ entries }: WorldClockRowVariant1DarkProps) {
  return (
    <ul role="list" className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-700 bg-gray-900">
      {entries.map((entry) => (
        <li key={entry.city} className="flex items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <svg
              aria-hidden="true"
              className={`size-4 ${entry.isDaytime ? 'text-amber-400' : 'text-indigo-400'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={entry.isDaytime ? sunIconPath : moonIconPath} />
            </svg>
            <div>
              <p className="text-sm font-medium text-white">{entry.city}</p>
              <p className="text-xs text-gray-400">{entry.zoneLabel}</p>
            </div>
          </div>
          <p className="font-mono text-sm font-semibold text-white">{entry.time}</p>
        </li>
      ))}
    </ul>
  )
}
