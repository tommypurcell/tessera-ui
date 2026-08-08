export type BigNumberDeltaDirection = 'up' | 'down'

export type BigNumberDeltaTileVariant1DarkProps = {
  label: string
  value: string
  deltaPct: number
  comparisonLabel: string
}

/**
 * Copy-and-own Tailwind component. Oversized KPI tile adapted for dark
 * surfaces, pairing a large number with a period-over-period percentage
 * change and a plain-language comparison label.
 */
export function BigNumberDeltaTileDark({ label, value, deltaPct, comparisonLabel }: BigNumberDeltaTileVariant1DarkProps) {
  const direction: BigNumberDeltaDirection = deltaPct >= 0 ? 'up' : 'down'
  const magnitude = Math.abs(deltaPct)

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-gray-900 p-6">
      <span className="text-sm font-medium text-gray-400">{label}</span>

      <span className="text-4xl font-semibold tracking-tight text-gray-100">{value}</span>

      <div className="flex items-center gap-1.5 text-sm">
        <span
          className={`inline-flex items-center gap-1 font-medium ${direction === 'up' ? 'text-green-400' : 'text-red-400'}`}
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

        <span className="text-gray-400">{comparisonLabel}</span>
      </div>
    </div>
  )
}
