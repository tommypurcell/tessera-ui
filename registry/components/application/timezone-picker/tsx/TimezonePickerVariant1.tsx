import { useId, useMemo, useState } from 'react'

export type TimezoneOption = {
  id: string
  city: string
  offset: string
  currentTime: string
}

export type TimezonePickerVariant1Props = {
  timezones: TimezoneOption[]
  defaultSelectedId?: string
  onSelect?: (id: string) => void
  className?: string
}

const DEFAULT_TIMEZONES: TimezoneOption[] = [
  { id: 'sf', city: 'San Francisco', offset: 'UTC-07:00', currentTime: '9:41 AM' },
  { id: 'ny', city: 'New York', offset: 'UTC-04:00', currentTime: '12:41 PM' },
  { id: 'ld', city: 'London', offset: 'UTC+01:00', currentTime: '5:41 PM' },
  { id: 'be', city: 'Berlin', offset: 'UTC+02:00', currentTime: '6:41 PM' },
  { id: 'ty', city: 'Tokyo', offset: 'UTC+09:00', currentTime: '1:41 AM' },
]

/**
 * Copy-and-own Tailwind component. Searchable timezone picker — each option shows the
 * city, UTC offset, and current local time, filtered by real search state.
 */
export function TimezonePickerVariant1({
  timezones = DEFAULT_TIMEZONES,
  defaultSelectedId,
  onSelect,
  className,
}: TimezonePickerVariant1Props) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(defaultSelectedId ?? timezones[0]?.id)
  const searchId = useId()

  const filtered = useMemo(
    () =>
      timezones.filter(
        (tz) => tz.city.toLowerCase().includes(query.toLowerCase()) || tz.offset.toLowerCase().includes(query.toLowerCase()),
      ),
    [timezones, query],
  )

  const handleSelect = (id: string) => {
    setSelected(id)
    onSelect?.(id)
  }

  return (
    <div className={`w-72 rounded-xl border border-gray-200 bg-white shadow-lg ${className ?? ''}`}>
      <div className="p-2">
        <label htmlFor={searchId} className="sr-only">
          Search timezones
        </label>
        <input
          id={searchId}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city or timezone…"
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
        />
      </div>

      <ul role="listbox" aria-label="Timezone" className="max-h-72 overflow-y-auto border-t border-gray-100 p-1">
        {filtered.map((tz) => {
          const isSelected = tz.id === selected
          return (
            <li key={tz.id}>
              <button
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(tz.id)}
                className={
                  isSelected
                    ? 'flex w-full items-center justify-between gap-2 rounded-md bg-gray-100 px-2.5 py-2 text-left'
                    : 'flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left hover:bg-gray-50'
                }
              >
                <span className="min-w-0">
                  <span className={`block text-sm ${isSelected ? 'font-medium text-gray-900' : 'text-gray-900'}`}>
                    {tz.city}
                  </span>
                  <span className="block text-xs text-gray-500">{tz.offset}</span>
                </span>
                <span className={`shrink-0 text-sm ${isSelected ? 'font-medium text-gray-700' : 'text-gray-500'}`}>
                  {tz.currentTime}
                </span>
              </button>
            </li>
          )
        })}
        {filtered.length === 0 ? (
          <li className="px-2.5 py-4 text-center text-sm text-gray-400">No matching timezones</li>
        ) : null}
      </ul>
    </div>
  )
}
