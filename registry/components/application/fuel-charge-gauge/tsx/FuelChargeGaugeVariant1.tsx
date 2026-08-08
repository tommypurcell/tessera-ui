export type FuelChargeGaugeVariant1Props = {
  label: string
  levelPercent: number
  rangeMiles: number
  lowThreshold?: number
}

/**
 * Copy-and-own Tailwind component. Vertical tank/battery-style level
 * indicator with a computed range estimate — distinct from gauge-chart,
 * which is a semicircular arc-and-needle dial rather than a fill-level
 * capsule.
 */
export function FuelChargeGauge({ label, levelPercent, rangeMiles, lowThreshold = 15 }: FuelChargeGaugeVariant1Props) {
  const isLow = levelPercent <= lowThreshold
  const fillColor = isLow ? 'bg-red-500' : levelPercent <= 40 ? 'bg-amber-400' : 'bg-emerald-500'

  return (
    <div className="flex w-full max-w-[220px] flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-5">
      <h3 className="self-start text-sm font-medium text-gray-900">{label}</h3>

      <div className="flex items-end gap-4">
        <div
          className="relative flex h-32 w-14 flex-col-reverse overflow-hidden rounded-full border-2 border-gray-300 bg-gray-100"
          role="img"
          aria-label={`${label} level: ${levelPercent} percent, estimated range ${rangeMiles} miles${isLow ? ', low' : ''}`}
        >
          <div className={`w-full transition-all ${fillColor}`} style={{ height: `${levelPercent}%` }} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-gray-900">{levelPercent}%</span>
          <span className="text-xs text-gray-500">{rangeMiles} mi range</span>
          {isLow ? <span className="text-xs font-semibold text-red-600">Low — refuel soon</span> : null}
        </div>
      </div>
    </div>
  )
}
