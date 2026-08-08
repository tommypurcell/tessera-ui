export type ConversionRateTileVariant1DarkProps = {
  label: string
  numerator: number
  denominator: number
  previousRatePct?: number
}

/**
 * Copy-and-own Tailwind component. Conversion-rate tile adapted for dark
 * surfaces — the headline percentage is computed from a real
 * numerator/denominator pair, with an optional trend arrow.
 */
export function ConversionRateTileDark({ label, numerator, denominator, previousRatePct }: ConversionRateTileVariant1DarkProps) {
  const ratePct = denominator === 0 ? 0 : (numerator / denominator) * 100
  const delta = previousRatePct !== undefined ? ratePct - previousRatePct : null
  const direction = delta !== null ? (delta >= 0 ? 'up' : 'down') : null

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-800 bg-gray-900 p-6">
      <span className="text-sm font-medium text-gray-400">{label}</span>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-gray-100">{ratePct.toFixed(1)}%</span>
        {direction ? (
          <span className={`inline-flex items-center gap-1 text-sm font-medium ${direction === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className={`size-3.5 ${direction === 'up' ? '' : 'rotate-180'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
            {Math.abs(delta as number).toFixed(1)}pp
          </span>
        ) : null}
      </div>

      <span className="text-xs text-gray-500">
        {numerator.toLocaleString()} of {denominator.toLocaleString()}
      </span>
    </div>
  )
}
