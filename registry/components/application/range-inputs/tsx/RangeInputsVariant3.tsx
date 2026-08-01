import type { HTMLAttributes } from 'react'

export type RangeInputsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RangeInputsVariant3({ className, ...props }: RangeInputsVariant3Props) {
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
              className="mt-3 h-3.5 w-full appearance-none rounded-full bg-gray-300 [&::-webkit-slider-thumb]:size-7 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[6px] [&::-webkit-slider-thumb]:border-gray-500 [&::-webkit-slider-thumb]:bg-gray-200"
            />
      
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">0%</span>
              <span className="text-xs font-medium text-gray-700">100%</span>
            </div>
          </label>
    </div>
  )
}
