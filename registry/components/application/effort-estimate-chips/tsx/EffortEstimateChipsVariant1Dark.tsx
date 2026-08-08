import { useState } from 'react'

export type EffortEstimateChipsVariant1DarkProps = {
  label: string
  options?: string[]
  value?: string
  onChange?: (value: string) => void
}

const DEFAULT_OPTIONS = ['1', '2', '3', '5', '8', '13', '?']

/**
 * Copy-and-own Tailwind component. Single-select chip group for story
 * points or t-shirt sizes, adapted for dark surfaces.
 */
export function EffortEstimateChipsDark({ label, options = DEFAULT_OPTIONS, value, onChange }: EffortEstimateChipsVariant1DarkProps) {
  const [internal, setInternal] = useState<string | undefined>(value)
  const selected = value ?? internal

  function select(option: string) {
    setInternal(option)
    onChange?.(option)
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-gray-100">{label}</legend>

      <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const isSelected = option === selected
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => select(option)}
              className={`flex size-9 items-center justify-center rounded-full border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-950 ${
                isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-700 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
