export type VitalReading = {
  label: string
  value: string
  unit: string
  isNormal: boolean
}

export type VitalsStatRowVariant1DarkProps = {
  readings: VitalReading[]
}

/**
 * Copy-and-own Tailwind component. Row of labeled vital-sign readings
 * adapted for dark surfaces — out-of-range readings are colored and
 * flagged with visible text, not color alone.
 */
export function VitalsStatRowDark({ readings }: VitalsStatRowVariant1DarkProps) {
  return (
    <div className="flex flex-wrap gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
      {readings.map((reading) => (
        <div key={reading.label} className="flex min-w-24 flex-1 flex-col gap-1">
          <span className="text-xs font-medium text-gray-400">{reading.label}</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-xl font-semibold ${reading.isNormal ? 'text-gray-100' : 'text-red-400'}`}>{reading.value}</span>
            <span className="text-xs text-gray-500">{reading.unit}</span>
          </div>
          <span className={`text-xs font-medium ${reading.isNormal ? 'text-green-400' : 'text-red-400'}`}>
            {reading.isNormal ? 'Normal' : 'Out of range'}
          </span>
        </div>
      ))}
    </div>
  )
}
