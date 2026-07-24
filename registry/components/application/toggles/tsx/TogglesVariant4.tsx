import type { HTMLAttributes } from 'react'

export type TogglesVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TogglesVariant4({ className, ...props }: TogglesVariant4Props) {
  return (
    <div className={className} {...props}>
      <label
        htmlFor="AcceptConditions"
        className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-blue-500"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-white transition-all ring-inset peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
      </label>
    </div>
  )
}
