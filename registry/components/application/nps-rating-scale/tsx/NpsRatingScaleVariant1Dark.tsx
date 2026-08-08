import { useState } from 'react'

export type NpsRatingScaleVariant1DarkProps = {
  label: string
  value?: number
  onChange?: (value: number) => void
}

function zoneStyles(score: number, selected: boolean) {
  const zone = score <= 6 ? 'detractor' : score <= 8 ? 'passive' : 'promoter'
  if (!selected) {
    return 'border-gray-700 text-gray-300 hover:bg-gray-800'
  }
  if (zone === 'detractor') return 'border-red-500 bg-red-500 text-white'
  if (zone === 'passive') return 'border-amber-400 bg-amber-400 text-gray-950'
  return 'border-green-500 bg-green-500 text-white'
}

/**
 * Copy-and-own Tailwind component. 0–10 NPS rating scale adapted for
 * dark surfaces, with real selectable state colored by its
 * detractor/passive/promoter zone.
 */
export function NpsRatingScaleDark({ label, value, onChange }: NpsRatingScaleVariant1DarkProps) {
  const [internal, setInternal] = useState<number | undefined>(value)
  const selected = value ?? internal

  function select(score: number) {
    setInternal(score)
    onChange?.(score)
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-gray-100">{label}</legend>

      <div role="radiogroup" aria-label={label} className="flex gap-1.5">
        {Array.from({ length: 11 }, (_, score) => (
          <button
            key={score}
            type="button"
            role="radio"
            aria-checked={selected === score}
            onClick={() => select(score)}
            className={`flex size-9 shrink-0 items-center justify-center rounded-md border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-950 ${zoneStyles(score, selected === score)}`}
          >
            {score}
          </button>
        ))}
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>Not at all likely</span>
        <span>Extremely likely</span>
      </div>
    </fieldset>
  )
}
