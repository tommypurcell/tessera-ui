export type SensorReadingCardVariant1DarkProps = {
  label: string
  value: number
  unit: string
  previousValue?: number
  minSafe: number
  maxSafe: number
}

/**
 * Copy-and-own Tailwind component. Live sensor reading tile adapted for
 * dark surfaces — the "Out of range" badge only appears when `value`
 * falls outside `[minSafe, maxSafe]`, computed live.
 */
export function SensorReadingCardDark({ label, value, unit, previousValue, minSafe, maxSafe }: SensorReadingCardVariant1DarkProps) {
  const isOutOfRange = value < minSafe || value > maxSafe
  const delta = previousValue !== undefined ? value - previousValue : null
  const direction = delta !== null ? (delta >= 0 ? 'up' : 'down') : null

  return (
    <div className={`flex flex-col gap-2 rounded-lg border p-5 ${isOutOfRange ? 'border-red-900 bg-red-950/40' : 'border-gray-800 bg-gray-900'}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">{label}</span>
        {isOutOfRange ? (
          <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-300">Out of range</span>
        ) : null}
      </div>

      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-semibold ${isOutOfRange ? 'text-red-400' : 'text-gray-100'}`}>
          {value}
          {unit}
        </span>
        {direction ? (
          <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${direction === 'up' ? 'text-orange-400' : 'text-blue-400'}`}>
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

      <span className="text-xs text-gray-500">
        Safe range: {minSafe}–{maxSafe}
        {unit}
      </span>
    </div>
  )
}
