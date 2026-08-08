import { useId } from 'react'

export type RangeDualInputVariant1DarkProps = {
  label: string
  min: number
  max: number
  onMinChange?: (value: number) => void
  onMaxChange?: (value: number) => void
  floor?: number
  prefix?: string
}

/**
 * Copy-and-own Tailwind component. Paired min/max number fields for filtering by
 * a numeric range (price, date offsets, quantity). Automatically shows an error
 * state with a shared alert message when min is greater than or equal to max.
 */
export function RangeDualInputDark({ label, min, max, onMinChange, onMaxChange, floor = 0, prefix = '$' }: RangeDualInputVariant1DarkProps) {
  const errorId = useId()
  const invalid = min >= max
  const fieldClasses = invalid
    ? 'border-red-400 ring-1 ring-red-400'
    : 'border-gray-600 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400'

  return (
    <div>
      <span className="mb-1.5 block text-sm font-medium text-gray-200">{label}</span>
      <div className="flex items-center gap-2">
        <label className="flex-1">
          <span className="sr-only">Minimum {label.toLowerCase()}</span>
          <div className={`flex items-center rounded-md border bg-gray-900 shadow-sm ${fieldClasses}`}>
            {prefix ? (
              <span aria-hidden="true" className="pl-3 text-sm text-gray-400">
                {prefix}
              </span>
            ) : null}
            <input
              type="number"
              inputMode="numeric"
              value={min}
              min={floor}
              aria-invalid={invalid || undefined}
              aria-describedby={invalid ? errorId : undefined}
              onChange={(event) => onMinChange?.(Number(event.target.value))}
              className="h-10 w-full border-0 bg-transparent px-2 text-sm text-white focus:outline-none focus:ring-0"
            />
          </div>
        </label>

        <span aria-hidden="true" className="text-sm text-gray-500">
          –
        </span>

        <label className="flex-1">
          <span className="sr-only">Maximum {label.toLowerCase()}</span>
          <div className={`flex items-center rounded-md border bg-gray-900 shadow-sm ${fieldClasses}`}>
            {prefix ? (
              <span aria-hidden="true" className="pl-3 text-sm text-gray-400">
                {prefix}
              </span>
            ) : null}
            <input
              type="number"
              inputMode="numeric"
              value={max}
              min={floor}
              aria-invalid={invalid || undefined}
              aria-describedby={invalid ? errorId : undefined}
              onChange={(event) => onMaxChange?.(Number(event.target.value))}
              className="h-10 w-full border-0 bg-transparent px-2 text-sm text-white focus:outline-none focus:ring-0"
            />
          </div>
        </label>
      </div>
      {invalid ? (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-400">
          Minimum must be less than maximum.
        </p>
      ) : null}
    </div>
  )
}
