import type { HTMLAttributes } from 'react'

export type DatePickerDay = {
  date: number
  isToday?: boolean
  isSelected?: boolean
  isOutsideMonth?: boolean
}

export type DatePickerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label?: string
  formattedDate: string
  monthLabel: string
  weekdayLabels?: string[]
  leadingBlankDays?: number
  days: DatePickerDay[]
  open?: boolean
  onToggle?: () => void
  onSelectDay?: (day: DatePickerDay) => void
  onPreviousMonth?: () => void
  onNextMonth?: () => void
  onToday?: () => void
  onApply?: () => void
}

/**
 * Copy-and-own Tailwind component. Date picker taking a real day-grid contract —
 * compute days/monthLabel/selection in your own state instead of hand-editing markup.
 */
export function DatePickerDark({
  className,
  label = 'Date',
  formattedDate,
  monthLabel,
  weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  leadingBlankDays = 0,
  days,
  open = true,
  onToggle,
  onSelectDay,
  onPreviousMonth,
  onNextMonth,
  onToday,
  onApply,
  ...props
}: DatePickerVariant1DarkProps) {
  return (
    <div className={`w-full max-w-xs ${className ?? ''}`} {...props}>
      <label htmlFor="date-picker-input" className="mb-1.5 block text-sm font-medium text-gray-300">
        {label}
      </label>

      <button
        id="date-picker-input"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center gap-2.5 rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-left text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        <span className="grow">{formattedDate}</span>
      </button>

      {open ? (
        <div role="dialog" aria-label="Choose date" className="relative mt-2 w-72 rounded-xl border border-gray-800 bg-gray-900 p-3 shadow-lg shadow-black/40">
          <div className="mb-2 flex items-center justify-between px-1">
            <button type="button" aria-label="Previous month" onClick={onPreviousMonth} className="rounded-md p-1 text-gray-500 hover:bg-gray-800 hover:text-gray-300">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <span className="text-sm font-medium text-white">{monthLabel}</span>
            <button type="button" aria-label="Next month" onClick={onNextMonth} className="rounded-md p-1 text-gray-500 hover:bg-gray-800 hover:text-gray-300">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
            {weekdayLabels.map((weekday, index) => (
              <span key={`${weekday}-${index}`} className="py-1 font-medium text-gray-500">
                {weekday}
              </span>
            ))}

            {Array.from({ length: leadingBlankDays }).map((_, index) => (
              <span key={`blank-${index}`} />
            ))}

            {days.map((day) => (
              <button
                key={day.date}
                type="button"
                onClick={() => onSelectDay?.(day)}
                aria-current={day.isToday ? 'date' : undefined}
                aria-selected={day.isSelected}
                className={`mx-auto flex size-8 items-center justify-center rounded-full text-sm ${
                  day.isSelected
                    ? 'bg-white font-medium text-gray-900'
                    : day.isOutsideMonth
                      ? 'text-gray-600 hover:bg-gray-800'
                      : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {day.date}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-gray-800 pt-3">
            <button type="button" onClick={onToday} className="text-xs font-medium text-gray-400 hover:text-gray-200">
              Today
            </button>
            <button type="button" onClick={onApply} className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200">
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
