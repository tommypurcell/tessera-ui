export type RadarChartAxis = {
  label: string
  /** 0–100 value for this axis. */
  value: number
}

export type RadarChartVariant1DarkProps = {
  title?: string
  axes: RadarChartAxis[]
  size?: number
}

const RING_PCTS = [25, 50, 75, 100]

/**
 * Copy-and-own Tailwind component. Multi-axis radar/spider chart adapted
 * for dark surfaces — the filled polygon, grid rings, and axis positions
 * are all computed from real `axes` values via trigonometry.
 */
export function RadarChartDark({ title, axes, size = 220 }: RadarChartVariant1DarkProps) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 40
  const n = axes.length

  const pointAt = (index: number, pct: number) => {
    const angle = -Math.PI / 2 + index * ((2 * Math.PI) / n)
    const rad = r * (pct / 100)
    return { x: cx + rad * Math.cos(angle), y: cy + rad * Math.sin(angle) }
  }

  const dataPoints = axes.map((axis, i) => pointAt(i, axis.value))
  const dataPolygon = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 p-6">
      {title ? <h2 className="self-start text-sm font-medium text-gray-100">{title}</h2> : null}

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`Radar chart: ${axes.map((a) => `${a.label} ${a.value}`).join(', ')}`}>
        {RING_PCTS.map((pct) => (
          <polygon
            key={pct}
            points={axes.map((_, i) => pointAt(i, pct)).map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}
            fill="none"
            stroke="#374151"
            strokeWidth={1}
          />
        ))}

        {axes.map((_, i) => {
          const outer = pointAt(i, 100)
          return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="#374151" strokeWidth={1} />
        })}

        <polygon points={dataPolygon} fill="#60a5fa" fillOpacity={0.25} stroke="#60a5fa" strokeWidth={2} />

        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3} fill="#60a5fa" />
        ))}
      </svg>

      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-400">
        {axes.map((axis) => (
          <div key={axis.label} className="flex justify-between">
            <span>{axis.label}</span>
            <span className="font-medium text-gray-100">{axis.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
