import { useState } from 'react'

export type NpsRatingScaleVariant1Props = {
  label: string
  value?: number
  onChange?: (value: number) => void
}

function zoneStyles(score: number, selected: boolean) {
  const zone = score <= 6 ? 'detractor' : score <= 8 ? 'passive' : 'promoter'
  if (!selected) {
    return 'border-gray-300 text-gray-600 hover:bg-gray-50'
  }
  if (zone === 'detractor') return 'border-red-600 bg-red-600 text-white'
  if (zone === 'passive') return 'border-amber-500 bg-amber-500 text-white'
  return 'border-green-600 bg-green-600 text-white'
}

/**
 * Copy-and-own Tailwind component. 0–10 NPS rating scale with real
 * selectable state — the selected score is colored by its
 * detractor/passive/promoter zone, computed from the score itself, not
 * hand-picked per button.
 */
export function NpsRatingScale({ label, value, onChange }: NpsRatingScaleVariant1Props) {
  const [internal, setInternal] = useState<number | undefined>(value)
  const selected = value ?? internal

  function select(score: number) {
    setInternal(score)
    onChange?.(score)
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-gray-900">{label}</legend>

      <div role="radiogroup" aria-label={label} className="flex gap-1.5">
        {Array.from({ length: 11 }, (_, score) => (
          <button
            key={score}
            type="button"
            role="radio"
            aria-checked={selected === score}
            onClick={() => select(score)}
            className={`flex size-9 shrink-0 items-center justify-center rounded-md border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 ${zoneStyles(score, selected === score)}`}
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
