import type { HTMLAttributes } from 'react'

export type RecurringUnit = 'days' | 'weeks' | 'months'

export type RecurringWeekday = {
  label: string
  selected: boolean
}

export type RecurringEndMode = 'never' | 'date' | 'count'

export type RecurringRuleBuilderVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  interval: number
  unit: RecurringUnit
  unitOptions?: RecurringUnit[]
  weekdays: RecurringWeekday[]
  endMode: RecurringEndMode
  endDate: string
  endCount: number
  summary: string
  onIntervalChange?: (value: number) => void
  onUnitChange?: (unit: RecurringUnit) => void
  onToggleWeekday?: (index: number) => void
  onEndModeChange?: (mode: RecurringEndMode) => void
}

/**
 * Copy-and-own Tailwind component. Recurring schedule editor taking a real
 * interval/weekdays/end-mode contract — pass your own rule state instead of hand-editing markup.
 */
export function RecurringRuleBuilderDark({
  className,
  interval,
  unit,
  unitOptions = ['days', 'weeks', 'months'],
  weekdays,
  endMode,
  endDate,
  endCount,
  summary,
  onIntervalChange,
  onUnitChange,
  onToggleWeekday,
  onEndModeChange,
  ...props
}: RecurringRuleBuilderVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-semibold text-white">Repeat</h3>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-300">
        <span>Every</span>
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(event) => onIntervalChange?.(Number(event.target.value))}
          className="w-14 rounded-md border border-gray-700 bg-gray-900 px-2 py-1.5 text-center text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
        />
        <select
          value={unit}
          onChange={(event) => onUnitChange?.(event.target.value as RecurringUnit)}
          className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1.5 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
        >
          {unitOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500">On</span>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {weekdays.map((day, index) => (
            <button
              key={index}
              type="button"
              aria-pressed={day.selected}
              onClick={() => onToggleWeekday?.(index)}
              className={`flex size-8 items-center justify-center rounded-full text-xs font-medium ${
                day.selected ? 'bg-white text-gray-900' : 'text-gray-400 ring-1 ring-inset ring-gray-700 hover:bg-gray-800'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Ends</span>
        <div className="mt-2 flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="radio"
              name="ends"
              checked={endMode === 'never'}
              onChange={() => onEndModeChange?.('never')}
              className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-gray-500"
            />
            Never
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="radio"
              name="ends"
              checked={endMode === 'date'}
              onChange={() => onEndModeChange?.('date')}
              className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-gray-500"
            />
            On date
            <input type="text" value={endDate} disabled={endMode !== 'date'} readOnly className="ml-1 w-32 rounded-md border border-gray-800 bg-gray-800 px-2 py-1 text-sm text-gray-500" />
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="radio"
              name="ends"
              checked={endMode === 'count'}
              onChange={() => onEndModeChange?.('count')}
              className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-gray-500"
            />
            After
            <input
              type="text"
              value={endCount}
              disabled={endMode !== 'count'}
              readOnly
              className="ml-1 w-14 rounded-md border border-gray-800 bg-gray-800 px-2 py-1 text-center text-sm text-gray-500"
            />
            occurrences
          </label>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-800 px-3 py-2.5 text-xs text-gray-400">{summary}</div>
    </div>
  )
}
