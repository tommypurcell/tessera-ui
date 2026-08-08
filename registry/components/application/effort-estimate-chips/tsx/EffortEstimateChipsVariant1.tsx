import { useState } from 'react'

export type EffortEstimateChipsVariant1Props = {
  label: string
  options?: string[]
  value?: string
  onChange?: (value: string) => void
}

const DEFAULT_OPTIONS = ['1', '2', '3', '5', '8', '13', '?']

/**
 * Copy-and-own Tailwind component. Single-select chip group for story
 * points or t-shirt sizes — pass real Fibonacci or size values via
 * `options`; selection state is a real controlled/uncontrolled radio
 * group, not decorative styling.
 */
export function EffortEstimateChips({ label, options = DEFAULT_OPTIONS, value, onChange }: EffortEstimateChipsVariant1Props) {
  const [internal, setInternal] = useState<string | undefined>(value)
  const selected = value ?? internal

  function select(option: string) {
    setInternal(option)
    onChange?.(option)
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-gray-900">{label}</legend>

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
              className={`flex size-9 items-center justify-center rounded-full border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 ${
                isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
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
