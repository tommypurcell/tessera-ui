export type SensorReadingCardVariant1Props = {
  label: string
  value: number
  unit: string
  previousValue?: number
  minSafe: number
  maxSafe: number
}

/**
 * Copy-and-own Tailwind component. Live sensor reading tile with a real
 * threshold-derived alert — the "Out of range" badge only appears when
 * `value` falls outside `[minSafe, maxSafe]`, computed live rather than
 * a hand-set flag, and the trend arrow is derived from a real previous
 * reading.
 */
export function SensorReadingCard({ label, value, unit, previousValue, minSafe, maxSafe }: SensorReadingCardVariant1Props) {
  const isOutOfRange = value < minSafe || value > maxSafe
  const delta = previousValue !== undefined ? value - previousValue : null
  const direction = delta !== null ? (delta >= 0 ? 'up' : 'down') : null

  return (
    <div className={`flex flex-col gap-2 rounded-lg border p-5 ${isOutOfRange ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        {isOutOfRange ? (
          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">Out of range</span>
        ) : null}
      </div>

      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-semibold ${isOutOfRange ? 'text-red-700' : 'text-gray-900'}`}>
          {value}
          {unit}
        </span>
        {direction ? (
          <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${direction === 'up' ? 'text-orange-600' : 'text-blue-600'}`}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className={`size-3 ${direction === 'up' ? '' : 'rotate-180'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            {Math.abs(delta as number).toFixed(1)}
            {unit}
          </span>
        ) : null}
      </div>

      <span className="text-xs text-gray-400">
        Safe range: {minSafe}–{maxSafe}
        {unit}
      </span>
    </div>
  )
}
