export type ChoroplethLegendVariant1Props = {
  label: string
  minLabel: string
  maxLabel: string
}

/**
 * Copy-and-own Tailwind component. Continuous gradient legend for a choropleth
 * map, pairing a single-hue light-to-dark ramp with min/max value labels.
 * Use for smoothly varying magnitude data; pair with the stepped variant when
 * your map buckets values into discrete ranges instead.
 */
export function ChoroplethLegend({ label, minLabel, maxLabel }: ChoroplethLegendVariant1Props) {
  return (
    <div className="w-64">
      <p className="mb-1.5 text-xs font-medium text-gray-600">{label}</p>
      <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-blue-100 via-blue-400 to-blue-700" />
      <div className="mt-1 flex justify-between text-xs text-gray-500">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}
