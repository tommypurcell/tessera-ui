export type MiniStatChipVariant1Props = {
  label: string
  value: string | number
  trendPercent?: number
}

/**
 * Copy-and-own Tailwind component. Compact inline label+value+trend chip
 * sized for toolbars — distinct from stat-tile, which is a full padded
 * card, not an inline pill. Trend arrow direction and color are derived
 * from the real sign of `trendPercent`, never hand-picked independently.
 */
export function MiniStatChip({ label, value, trendPercent }: MiniStatChipVariant1Props) {
  const hasTrend = trendPercent !== undefined && trendPercent !== 0
  const isUp = hasTrend && trendPercent > 0

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
      {hasTrend ? (
        <span className={`inline-flex items-center gap-0.5 font-medium ${isUp ? 'text-emerald-600' : 'text-red-600'}`}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-3 ${isUp ? '' : 'rotate-180'}`}>
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">{isUp ? 'Up' : 'Down'} </span>
          {Math.abs(trendPercent).toFixed(1)}%
        </span>
      ) : null}
    </span>
  )
}
