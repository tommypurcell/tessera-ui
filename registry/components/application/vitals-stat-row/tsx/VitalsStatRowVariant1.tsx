export type VitalReading = {
  label: string
  value: string
  unit: string
  isNormal: boolean
}

export type VitalsStatRowVariant1Props = {
  readings: VitalReading[]
}

/**
 * Copy-and-own Tailwind component. Row of labeled vital-sign readings
 * (HR/BP/SpO2/etc.) — pass the real `isNormal` flag per reading (computed
 * from your own clinical range check upstream); out-of-range readings
 * are colored and flagged with visible text, not color alone.
 */
export function VitalsStatRow({ readings }: VitalsStatRowVariant1Props) {
  return (
    <div className="flex flex-wrap gap-4 rounded-lg border border-gray-200 bg-white p-6">
      {readings.map((reading) => (
        <div key={reading.label} className="flex min-w-24 flex-1 flex-col gap-1">
          <span className="text-xs font-medium text-gray-500">{reading.label}</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-xl font-semibold ${reading.isNormal ? 'text-gray-900' : 'text-red-600'}`}>{reading.value}</span>
            <span className="text-xs text-gray-400">{reading.unit}</span>
          </div>
          <span className={`text-xs font-medium ${reading.isNormal ? 'text-green-600' : 'text-red-600'}`}>
            {reading.isNormal ? 'Normal' : 'Out of range'}
          </span>
        </div>
      ))}
    </div>
  )
}
