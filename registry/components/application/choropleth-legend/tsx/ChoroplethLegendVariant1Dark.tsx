export type ChoroplethLegendVariant1DarkProps = {
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
export function ChoroplethLegendDark({ label, minLabel, maxLabel }: ChoroplethLegendVariant1DarkProps) {
  return (
    <div className="w-64">
      <p className="mb-1.5 text-xs font-medium text-gray-300">{label}</p>
      <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />
      <div className="mt-1 flex justify-between text-xs text-gray-400">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}
