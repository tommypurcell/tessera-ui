import type { HTMLAttributes } from 'react'

export type MetricSparklineCardDelta = {
  value: string
  direction: 'up' | 'down'
}

export type MetricSparklineCardVariant1DarkProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  label: string
  value: string | number
  delta: MetricSparklineCardDelta
  /** Ordered trend values, oldest first, rendered as an area sparkline. */
  points: number[]
  /** Caption describing the time range, e.g. "Last 10 weeks". */
  rangeLabel: string
}

const directionStyles: Record<
  MetricSparklineCardDelta['direction'],
  { badge: string; stroke: string; fill: string }
> = {
  up: { badge: 'bg-green-500/15 text-green-400', stroke: 'stroke-green-400', fill: 'fill-green-400/10' },
  down: { badge: 'bg-red-500/15 text-red-400', stroke: 'stroke-red-400', fill: 'fill-red-400/10' },
}

const directionPath: Record<MetricSparklineCardDelta['direction'], string> = {
  up: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  down: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
}

const VIEWBOX_WIDTH = 200
const VIEWBOX_HEIGHT = 48

function toPolylinePoints(points: number[]): string {
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  return points
    .map((value, index) => {
      const x = (index / (points.length - 1)) * VIEWBOX_WIDTH
      const y = VIEWBOX_HEIGHT - ((value - min) / range) * VIEWBOX_HEIGHT
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
}

/**
 * Copy-and-own Tailwind component. Sparkline KPI tile adapted for dark
 * surfaces.
 */
export function MetricSparklineCard({
  className,
  label,
  value,
  delta,
  points,
  rangeLabel,
  ...props
}: MetricSparklineCardVariant1DarkProps) {
  const line = toPolylinePoints(points)
  const area = `0,${VIEWBOX_HEIGHT} ${line} ${VIEWBOX_WIDTH},${VIEWBOX_HEIGHT}`
  const style = directionStyles[delta.direction]

  return (
    <article
      className={`w-72 rounded-lg border border-gray-800 bg-gray-900 p-6 ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium text-gray-400">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
        </div>
        <div className={`inline-flex items-center gap-1 self-start rounded-sm p-1 ${style.badge}`}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={directionPath[delta.direction]}
            />
          </svg>
          <span className="text-xs font-medium">{delta.value}</span>
        </div>
      </div>
      <svg
        role="img"
        aria-label={`Trend over ${rangeLabel.toLowerCase()}, from ${points[0]} to ${points[points.length - 1]}`}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className="mt-4 h-12 w-full"
        preserveAspectRatio="none"
      >
        <polygon points={area} className={style.fill} />
        <polyline
          points={line}
          fill="none"
          className={style.stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="mt-2 text-xs text-gray-500">{rangeLabel}</p>
    </article>
  )
}
