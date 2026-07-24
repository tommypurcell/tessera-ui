import type { HTMLAttributes } from 'react'

export type TogglesVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TogglesVariant1Dark({ className, ...props }: TogglesVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <label
        htmlFor="AcceptConditions"
        className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-green-500 dark:bg-gray-600 dark:has-checked:bg-green-600"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-gray-900"></span>
      </label>
    </div>
  )
}
