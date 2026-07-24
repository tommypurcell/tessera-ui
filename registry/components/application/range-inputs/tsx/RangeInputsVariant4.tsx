import type { HTMLAttributes } from 'react'

export type RangeInputsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RangeInputsVariant4({ className, ...props }: RangeInputsVariant4Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="maxVolume">
        <span className="block text-sm font-medium text-gray-900">Max Volume</span>

        <input
          type="range"
          name="maxVolume"
          id="maxVolume"
          min="0"
          max="100"
          value="20"
          list="volumeTicks"
          className="mt-1 w-full"
        />

        <datalist id="volumeTicks">
          <option value="0"></option>
          <option value="25"></option>
          <option value="50"></option>
          <option value="75"></option>
          <option value="100"></option>
        </datalist>
      </label>
    </div>
  )
}
