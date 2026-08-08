import { useMemo, useState } from 'react'

export type CalendarVariant1Props = {
  /** Month to display, 0-indexed (0 = January). Defaults to the current month. */
  month?: number
  /** Full year to display. Defaults to the current year. */
  year?: number
  /** ISO date string (YYYY-MM-DD) for the day treated as "today". Defaults to the real today. */
  today?: string
  /** ISO date string (YYYY-MM-DD) for the initially selected day. */
  selected?: string
  /** Called with the ISO date string (YYYY-MM-DD) when a day is clicked. */
  onSelect?: (date: string) => void
  className?: string
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function toIsoDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/**
 * Copy-and-own Tailwind component. Single-month date grid with keyboard-accessible day
 * buttons, a highlighted "today", and a selectable date driven by real state.
 */
export function CalendarVariant1({
  month: monthProp,
  year: yearProp,
  today: todayProp,
  selected: selectedProp,
  onSelect,
  className,
}: CalendarVariant1Props) {
  const now = useMemo(() => new Date(), [])
  const [viewMonth, setViewMonth] = useState(monthProp ?? now.getMonth())
  const [viewYear, setViewYear] = useState(yearProp ?? now.getFullYear())
  const [selected, setSelected] = useState(selectedProp)

  const todayIso = todayProp ?? toIsoDate(now.getFullYear(), now.getMonth(), now.getDate())

  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

  const goToPreviousMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }

  const handleSelect = (date: string) => {
    setSelected(date)
    onSelect?.(date)
  }

  const cells: Array<{ day: number; iso: string } | null> = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      iso: toIsoDate(viewYear, viewMonth, i + 1),
    })),
  ]

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className ?? ''}`}
    >
      <div className="flex items-center justify-between px-1 pb-3">
        <button
          type="button"
          aria-label="Previous month"
          onClick={goToPreviousMonth}
          className="inline-flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <p className="text-sm font-semibold text-gray-900">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </p>

        <button
          type="button"
          aria-label="Next month"
          onClick={goToNextMonth}
          className="inline-flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-900"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((weekday) => (
          <span key={weekday} className="text-xs font-medium text-gray-400">
            {weekday}
          </span>
        ))}

        {cells.map((cell, index) => {
          if (!cell) return <span key={`empty-${index}`} />

          const isToday = cell.iso === todayIso
          const isSelected = cell.iso === selected

          return (
            <button
              key={cell.iso}
              type="button"
              aria-current={isToday ? 'date' : undefined}
              aria-pressed={isSelected}
              onClick={() => handleSelect(cell.iso)}
              className={
                isSelected
                  ? 'mx-auto flex size-8 items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700'
                  : isToday
                    ? 'mx-auto flex size-8 items-center justify-center rounded-md text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600 hover:bg-blue-50'
                    : 'mx-auto flex size-8 items-center justify-center rounded-md text-sm text-gray-700 hover:bg-gray-100'
              }
            >
              {cell.day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
