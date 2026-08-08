export type DonutChartSegment = {
  label: string
  value: number
  color: string
}

export type DonutChartVariant1Props = {
  title: string
  segments: DonutChartSegment[]
  size?: number
}

/**
 * Copy-and-own Tailwind component. Multi-segment donut chart with a
 * center total and a color-keyed legend — every segment's arc length and
 * offset is computed from real values via SVG stroke-dasharray, and the
 * center total is the actual sum, not a hand-typed number.
 */
export function DonutChart({ title, segments, size = 160 }: DonutChartVariant1Props) {
  const stroke = 20
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const total = segments.reduce((sum, s) => sum + s.value, 0)

  let offset = 0
  const arcs = segments.map((segment) => {
    const fraction = total === 0 ? 0 : segment.value / total
    const length = circumference * fraction
    const arc = { segment, length, gap: circumference - length, dashoffset: -offset }
    offset += length
    return arc
  })

  return (
    <div className="flex items-center gap-6 rounded-lg border border-gray-200 bg-white p-6">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          {arcs.map(({ segment, length, gap, dashoffset }) => (
            <circle
              key={segment.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={stroke}
              strokeDasharray={`${length} ${gap}`}
              strokeDashoffset={dashoffset}
              role="img"
              aria-label={`${segment.label}: ${segment.value.toLocaleString()}`}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-gray-900">{total.toLocaleString()}</span>
          <span className="text-xs text-gray-500">{title}</span>
        </div>
      </div>

      <ul className="flex flex-col gap-2 text-sm">
        {segments.map((segment) => (
          <li key={segment.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: segment.color }} />
            <span className="text-gray-700">{segment.label}</span>
            <span className="font-medium text-gray-900">{segment.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
