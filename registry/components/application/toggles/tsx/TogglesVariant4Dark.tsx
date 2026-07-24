import type { HTMLAttributes } from 'react'

export type TogglesVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TogglesVariant4Dark({ className, ...props }: TogglesVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <label
        htmlFor="AcceptConditions"
        className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-blue-500 dark:bg-gray-600 dark:has-checked:bg-blue-600"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-white transition-all ring-inset peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent dark:bg-gray-600 dark:ring-gray-900 dark:peer-checked:bg-gray-900"></span>
      </label>
    </div>
  )
}
