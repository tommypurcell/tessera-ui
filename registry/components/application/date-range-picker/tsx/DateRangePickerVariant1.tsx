import type { HTMLAttributes } from 'react'

export type DateRangeDay = {
  date: number
  isRangeStart?: boolean
  isRangeEnd?: boolean
  isInRange?: boolean
  isOutsideMonth?: boolean
}

export type DateRangePreset = {
  id: string
  label: string
  active?: boolean
}

export type DateRangePickerVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  label?: string
  formattedRange: string
  monthLabel: string
  weekdayLabels?: string[]
  leadingBlankDays?: number
  days: DateRangeDay[]
  presets: DateRangePreset[]
  nightsLabel: string
  open?: boolean
  onToggle?: () => void
  onSelectPreset?: (preset: DateRangePreset) => void
  onSelectDay?: (day: DateRangeDay) => void
  onPreviousMonth?: () => void
  onNextMonth?: () => void
  onCancel?: () => void
  onApply?: () => void
}

/**
 * Copy-and-own Tailwind component. Date-range picker taking a real
 * presets/day-grid contract — compute range state in your own store.
 */
export function DateRangePicker({
  className,
  label = 'Date range',
  formattedRange,
  monthLabel,
  weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  leadingBlankDays = 0,
  days,
  presets,
  nightsLabel,
  open = true,
  onToggle,
  onSelectPreset,
  onSelectDay,
  onPreviousMonth,
  onNextMonth,
  onCancel,
  onApply,
  ...props
}: DateRangePickerVariant1Props) {
  return (
    <div className={`w-full max-w-md ${className ?? ''}`} {...props}>
      <label htmlFor="date-range-input" className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <button
        id="date-range-input"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center gap-2.5 rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        <span className="grow">{formattedRange}</span>
      </button>

      {open ? (
        <div role="dialog" aria-label="Choose date range" className="relative mt-2 flex w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg shadow-gray-900/10">
          <div className="flex w-36 shrink-0 flex-col gap-0.5 border-r border-gray-100 p-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                aria-current={preset.active}
                onClick={() => onSelectPreset?.(preset)}
                className={`rounded-md px-2.5 py-1.5 text-left text-sm ${
                  preset.active ? 'bg-gray-100 font-medium text-gray-900' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="flex-1 p-3">
            <div className="mb-2 flex items-center justify-between px-1">
              <button type="button" aria-label="Previous month" onClick={onPreviousMonth} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <span className="text-sm font-medium text-gray-900">{monthLabel}</span>
              <button type="button" aria-label="Next month" onClick={onNextMonth} className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
              {weekdayLabels.map((weekday, index) => (
                <span key={`${weekday}-${index}`} className="py-1 font-medium text-gray-400">
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
                  aria-selected={day.isRangeStart || day.isRangeEnd}
                  className={`mx-auto flex size-8 items-center justify-center text-sm ${
                    day.isRangeStart || day.isRangeEnd
                      ? 'rounded-full bg-gray-900 font-medium text-white'
                      : day.isInRange
                        ? 'w-full bg-gray-100 text-gray-700'
                        : day.isOutsideMonth
                          ? 'rounded-full text-gray-300 hover:bg-gray-100'
                          : 'rounded-full text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {day.date}
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-xs text-gray-500">{nightsLabel}</span>
              <div className="flex gap-2">
                <button type="button" onClick={onCancel} className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="button" onClick={onApply} className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-700">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
