export type FuelChargeGaugeVariant1Props = {
  label: string
  levelPercent: number
  rangeMiles: number
  lowThreshold?: number
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the
 * vertical tank/battery-style level indicator.
 */
export function FuelChargeGauge({ label, levelPercent, rangeMiles, lowThreshold = 15 }: FuelChargeGaugeVariant1Props) {
  const isLow = levelPercent <= lowThreshold
  const fillColor = isLow ? 'bg-red-500' : levelPercent <= 40 ? 'bg-amber-400' : 'bg-emerald-500'

  return (
    <div className="flex w-full max-w-[220px] flex-col items-center gap-4 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <h3 className="self-start text-sm font-medium text-gray-100">{label}</h3>

      <div className="flex items-end gap-4">
        <div
          className="relative flex h-32 w-14 flex-col-reverse overflow-hidden rounded-full border-2 border-gray-700 bg-gray-800"
          role="img"
          aria-label={`${label} level: ${levelPercent} percent, estimated range ${rangeMiles} miles${isLow ? ', low' : ''}`}
        >
          <div className={`w-full transition-all ${fillColor}`} style={{ height: `${levelPercent}%` }} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-gray-100">{levelPercent}%</span>
          <span className="text-xs text-gray-500">{rangeMiles} mi range</span>
          {isLow ? <span className="text-xs font-semibold text-red-400">Low — refuel soon</span> : null}
        </div>
      </div>
    </div>
  )
}
