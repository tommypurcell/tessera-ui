import type { HTMLAttributes } from 'react'

export type RangeInputsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RangeInputsVariant5({ className, ...props }: RangeInputsVariant5Props) {
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
      
            <datalist
              id="volumeTicks"
              className="flex w-full flex-col justify-between [writing-mode:vertical-lr]"
            >
              <option value="0" label="0"></option>
              <option value="25" label="25"></option>
              <option value="50" label="50"></option>
              <option value="75" label="75"></option>
              <option value="100" label="100"></option>
            </datalist>
          </label>
    </div>
  )
}
