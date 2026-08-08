import { useId } from 'react'

export type SymptomSeveritySliderVariant1Props = {
  label?: string
  value: number
  onChange?: (value: number) => void
}

const descriptors = [
  { max: 0, label: 'None', colorClass: 'text-emerald-600' },
  { max: 3, label: 'Mild', colorClass: 'text-emerald-600' },
  { max: 6, label: 'Moderate', colorClass: 'text-amber-600' },
  { max: 10, label: 'Severe', colorClass: 'text-red-600' },
]

/**
 * Copy-and-own Tailwind component. Native 0–10 range slider for self-reported
 * pain/symptom severity, with a live numeric readout and a derived descriptor
 * label (None/Mild/Moderate/Severe) that updates as the value changes.
 */
export function SymptomSeveritySlider({ label = 'Pain level', value, onChange }: SymptomSeveritySliderVariant1Props) {
  const inputId = useId()
  const descriptor = descriptors.find((candidate) => value <= candidate.max) ?? descriptors[descriptors.length - 1]

  return (
    <label htmlFor={inputId} className="block">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <span className={`text-sm font-semibold ${descriptor.colorClass}`}>
          {value} &middot; {descriptor.label}
        </span>
      </div>

      <input
        type="range"
        id={inputId}
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={(event) => onChange?.(Number(event.target.value))}
        className="mt-3 h-2 w-full appearance-none rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500 [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:shadow"
      />

      <div className="mt-1.5 flex justify-between text-xs text-gray-500">
        <span>0 &middot; None</span>
        <span>5 &middot; Moderate</span>
        <span>10 &middot; Worst</span>
      </div>
    </label>
  )
}
