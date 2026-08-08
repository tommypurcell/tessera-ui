export type BigNumberDeltaDirection = 'up' | 'down'

export type BigNumberDeltaTileVariant1Props = {
  label: string
  value: string
  deltaPct: number
  comparisonLabel: string
}

/**
 * Copy-and-own Tailwind component. Oversized KPI tile pairing a large
 * number with a period-over-period percentage change and a plain-language
 * comparison label (e.g. "vs last month") — the trend arrow and color
 * are derived from the sign of `deltaPct`, not hand-picked per instance.
 */
export function BigNumberDeltaTile({ label, value, deltaPct, comparisonLabel }: BigNumberDeltaTileVariant1Props) {
  const direction: BigNumberDeltaDirection = deltaPct >= 0 ? 'up' : 'down'
  const magnitude = Math.abs(deltaPct)

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-6">
      <span className="text-sm font-medium text-gray-500">{label}</span>

      <span className="text-4xl font-semibold tracking-tight text-gray-900">{value}</span>

      <div className="flex items-center gap-1.5 text-sm">
        <span
          className={`inline-flex items-center gap-1 font-medium ${direction === 'up' ? 'text-green-600' : 'text-red-600'}`}
        >
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
          <span className="sr-only">{direction === 'up' ? 'Increased' : 'Decreased'} by </span>
          {magnitude}%
        </span>

        <span className="text-gray-500">{comparisonLabel}</span>
      </div>
    </div>
  )
}
