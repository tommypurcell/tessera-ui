export type MiniCalendarWidgetVariant1Props = {
  monthLabel: string
  /** Day-of-week index (0=Sun) that the 1st of the month falls on. */
  firstWeekday: number
  daysInMonth: number
  today: number
  /** Day numbers that have at least one event. */
  eventDays: number[]
}

const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

/**
 * Copy-and-own Tailwind component. Compact, read-only month grid for
 * at-a-glance schedules — small dots mark days with events. Unlike the
 * full Calendar, this widget has no date-picking interaction; it's sized
 * to sit in a dashboard sidebar or summary card.
 */
export function MiniCalendarWidget({ monthLabel, firstWeekday, daysInMonth, today, eventDays }: MiniCalendarWidgetVariant1Props) {
  const leadingBlanks = Array.from({ length: firstWeekday })
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const eventSet = new Set(eventDays)

  return (
    <div className="w-64 rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-3 text-sm font-medium text-gray-900">{monthLabel}</div>

      <div className="grid grid-cols-7 gap-y-1.5 text-center">
        {WEEKDAY_LABELS.map((label, i) => (
          <span key={i} className="text-xs font-medium text-gray-400">
            {label}
          </span>
        ))}

        {leadingBlanks.map((_, i) => (
          <span key={`blank-${i}`} />
        ))}

        {days.map((day) => {
          const isToday = day === today
          const hasEvent = eventSet.has(day)

          return (
            <div key={day} className="flex flex-col items-center gap-0.5">
              <span
                className={`flex size-6 items-center justify-center rounded-full text-xs ${
                  isToday ? 'bg-blue-600 font-semibold text-white' : 'text-gray-700'
                }`}
              >
                {day}
                {hasEvent ? <span className="sr-only"> (has events)</span> : null}
                {isToday ? <span className="sr-only"> (today)</span> : null}
              </span>
              <span aria-hidden="true" className={`size-1 rounded-full ${hasEvent ? 'bg-blue-500' : 'bg-transparent'}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
