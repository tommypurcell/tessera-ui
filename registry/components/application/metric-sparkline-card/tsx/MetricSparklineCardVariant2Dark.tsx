import type { HTMLAttributes } from 'react'

export type MetricSparklineCardDelta = {
  value: string
  direction: 'up' | 'down'
}

export type MetricSparklineCardVariant2DarkProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  label: string
  value: string | number
  delta: MetricSparklineCardDelta
  /** Ordered trend values, oldest first, rendered as a line sparkline. */
  points: number[]
  /** Caption describing the time range, e.g. "Last 10 weeks". */
  rangeLabel: string
}

const directionStyles: Record<
  MetricSparklineCardDelta['direction'],
  { badge: string; stroke: string; dot: string }
> = {
  up: { badge: 'bg-green-500/15 text-green-400', stroke: 'stroke-green-400', dot: 'fill-green-400' },
  down: { badge: 'bg-red-500/15 text-red-400', stroke: 'stroke-red-400', dot: 'fill-red-400' },
}

const directionPath: Record<MetricSparklineCardDelta['direction'], string> = {
  up: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  down: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
}

const VIEWBOX_WIDTH = 200
const VIEWBOX_HEIGHT = 48

function toPoints(points: number[]): { x: number; y: number }[] {
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  return points.map((value, index) => ({
    x: (index / (points.length - 1)) * VIEWBOX_WIDTH,
    y: VIEWBOX_HEIGHT - ((value - min) / range) * VIEWBOX_HEIGHT,
  }))
}

/**
 * Copy-and-own Tailwind component. Line-only sparkline KPI tile adapted for
 * dark surfaces.
 */
export function MetricSparklineCard({
  className,
  label,
  value,
  delta,
  points,
  rangeLabel,
  ...props
}: MetricSparklineCardVariant2DarkProps) {
  const coords = toPoints(points)
  const line = coords.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(' ')
  const last = coords[coords.length - 1]
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
        <polyline
          points={line}
          fill="none"
          className={style.stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={last.x} cy={last.y} r="3" className={style.dot} />
      </svg>
      <p className="mt-2 text-xs text-gray-500">{rangeLabel}</p>
    </article>
  )
}
