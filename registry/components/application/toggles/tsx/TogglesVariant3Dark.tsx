import type { HTMLAttributes } from 'react'

export type TogglesVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TogglesVariant3Dark({ className, ...props }: TogglesVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <label
        htmlFor="AcceptConditions"
        className="relative block h-8 w-12 [-webkit-tap-highlight-color:transparent]"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

        <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>

        <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition-[inset-inline-start] peer-checked:start-6 peer-checked:*:scale-0 dark:bg-gray-400">
          <span className="absolute inset-0 m-auto size-4 rounded-full bg-gray-200 transition-transform dark:bg-gray-700"></span>
        </span>
      </label>
    </div>
  )
}
