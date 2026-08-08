import type { HTMLAttributes } from 'react'

export type PriceCalendarDay = {
  date: number
  price: string
  isCheapest?: boolean
  isSelected?: boolean
}

export type PriceCalendarVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  monthLabel: string
  weekdayLabels?: string[]
  leadingBlankDays?: number
  days: PriceCalendarDay[]
  onSelectDay?: (day: PriceCalendarDay) => void
  onPreviousMonth?: () => void
  onNextMonth?: () => void
}

/**
 * Copy-and-own Tailwind component. Fare calendar taking a real day-grid
 * contract — pass your own per-day price data instead of hand-editing markup.
 */
export function PriceCalendarDark({
  className,
  monthLabel,
  weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  leadingBlankDays = 0,
  days,
  onSelectDay,
  onPreviousMonth,
  onNextMonth,
  ...props
}: PriceCalendarVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-4 ${className ?? ''}`} {...props}>
      <div className="mb-3 flex items-center justify-between px-1">
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

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {weekdayLabels.map((weekday, index) => (
          <span key={`${weekday}-${index}`} className="pb-1 font-medium text-gray-500">
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
            aria-current={day.isCheapest || undefined}
            aria-pressed={day.isSelected || undefined}
            onClick={() => onSelectDay?.(day)}
            className={`flex flex-col items-center rounded-md py-1.5 ${
              day.isSelected ? 'bg-white' : day.isCheapest ? 'bg-green-950/50 ring-1 ring-inset ring-green-800' : 'hover:bg-gray-800'
            }`}
          >
            <span className={day.isSelected ? 'font-medium text-gray-900' : day.isCheapest ? 'font-medium text-green-400' : 'text-gray-300'}>{day.date}</span>
            <span className={`text-[10px] ${day.isSelected ? 'font-medium text-gray-600' : day.isCheapest ? 'font-medium text-green-400' : 'text-gray-500'}`}>{day.price}</span>
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-green-950/50 ring-1 ring-inset ring-green-800" />
          Cheapest
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-white" />
          Selected
        </span>
      </div>
    </div>
  )
}
