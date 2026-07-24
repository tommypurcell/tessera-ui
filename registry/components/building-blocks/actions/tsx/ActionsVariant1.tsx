import type { HTMLAttributes } from 'react'

export type ActionsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant1({ className, ...props }: ActionsVariant1Props) {
  return (
    <div className={className} {...props}>
      <button
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Continue
          </button>
    </div>
  )
}
