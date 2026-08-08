export type BulletChartBand = {
  /** Upper bound of this qualitative band, in the same units as `value`/`target`/`max`. */
  upTo: number
  label: string
}

export type BulletChartVariant1Props = {
  label: string
  value: number
  target: number
  max: number
  bands: BulletChartBand[]
}

const bandShades = ['bg-gray-300', 'bg-gray-200', 'bg-gray-100']

/**
 * Copy-and-own Tailwind component. Single-metric bullet graph: qualitative
 * background bands (e.g. poor/satisfactory/good), a value bar, and a
 * target marker — every position is computed as a percentage of `max`
 * from real numbers, not hand-placed.
 */
export function BulletChart({ label, value, target, max, bands }: BulletChartVariant1Props) {
  const pct = (n: number) => `${Math.min(Math.max((n / max) * 100, 0), 100)}%`

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-semibold text-gray-900">
          {value.toLocaleString()} <span className="font-normal text-gray-400">/ {target.toLocaleString()} target</span>
        </span>
      </div>

      <div className="relative h-6 w-full overflow-hidden rounded-sm">
        {bands.map((band, index) => {
          const previous = index > 0 ? bands[index - 1].upTo : 0
          return (
            <div
              key={band.label}
              className={`absolute inset-y-0 ${bandShades[index % bandShades.length]}`}
              style={{ left: pct(previous), width: pct(band.upTo - previous) }}
              role="img"
              aria-label={`${band.label}: up to ${band.upTo.toLocaleString()}`}
            />
          )
        })}

        <div
          className="absolute inset-y-0 left-0 flex items-center bg-blue-600"
          style={{ width: pct(value) }}
          role="img"
          aria-label={`${label}: ${value.toLocaleString()}`}
        >
          <div className="ml-auto h-3.5 w-1.5 -mr-0.5 rounded-sm bg-blue-800" />
        </div>

        <div
          className="absolute inset-y-1 w-0.5 bg-gray-900"
          style={{ left: pct(target) }}
          role="img"
          aria-label={`Target: ${target.toLocaleString()}`}
        />
      </div>

      <div className="flex gap-4 text-xs text-gray-500">
        {bands.map((band) => (
          <span key={band.label}>{band.label}</span>
        ))}
      </div>
    </div>
  )
}
