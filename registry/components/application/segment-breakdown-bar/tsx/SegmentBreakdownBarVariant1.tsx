export type SegmentBreakdownBarSegment = {
  label: string
  value: number
  color: string
}

export type SegmentBreakdownBarVariant1Props = {
  title?: string
  segments: SegmentBreakdownBarSegment[]
}

/**
 * Copy-and-own Tailwind component. Single horizontal stacked bar
 * splitting a total into labeled, colored segments with a legend below
 * — each segment's width percentage is computed from its real share of
 * the total, not hand-placed.
 */
export function SegmentBreakdownBar({ title, segments }: SegmentBreakdownBarVariant1Props) {
  const total = segments.reduce((sum, s) => sum + s.value, 0)

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-6">
      {title ? <h2 className="text-sm font-medium text-gray-900">{title}</h2> : null}

      <div className="flex h-4 w-full overflow-hidden rounded-full">
        {segments.map((segment) => {
          const pct = total === 0 ? 0 : (segment.value / total) * 100
          return (
            <div
              key={segment.label}
              style={{ width: `${pct}%`, backgroundColor: segment.color }}
              role="img"
              aria-label={`${segment.label}: ${segment.value.toLocaleString()} (${Math.round(pct)}%)`}
            />
          )
        })}
      </div>

      <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
        {segments.map((segment) => {
          const pct = total === 0 ? 0 : Math.round((segment.value / total) * 100)
          return (
            <li key={segment.label} className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: segment.color }} />
              <span className="text-gray-700">{segment.label}</span>
              <span className="font-medium text-gray-900">{pct}%</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
