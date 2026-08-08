export type ProgressRingClusterMetric = {
  label: string
  value: number
  color?: string
}

export type ProgressRingClusterVariant1DarkProps = {
  metrics: ProgressRingClusterMetric[]
  size?: number
}

const DEFAULT_COLORS = ['#60a5fa', '#4ade80', '#fbbf24', '#c084fc']

/**
 * Copy-and-own Tailwind component. Grouped radial progress dials adapted
 * for dark surfaces, with a center percentage label per ring. Ring fill
 * is computed from real `value` percentages via SVG stroke-dasharray.
 */
export function ProgressRingClusterDark({ metrics, size = 96 }: ProgressRingClusterVariant1DarkProps) {
  const stroke = 8
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <div className="flex flex-wrap items-start gap-6 rounded-lg border border-gray-800 bg-gray-900 p-6">
      {metrics.map((metric, index) => {
        const clamped = Math.min(Math.max(metric.value, 0), 100)
        const offset = circumference * (1 - clamped / 100)
        const color = metric.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]

        return (
          <div key={metric.label} className="flex flex-col items-center gap-2">
            <div className="relative" style={{ width: size, height: size }}>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#374151" strokeWidth={stroke} />
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={color}
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  role="img"
                  aria-label={`${metric.label}: ${clamped}%`}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-gray-100">
                {clamped}%
              </span>
            </div>

            <span className="text-sm font-medium text-gray-400">{metric.label}</span>
          </div>
        )
      })}
    </div>
  )
}
