import type { HTMLAttributes } from 'react'

export type ActionsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant5({ className, ...props }: ActionsVariant5Props) {
  return (
    <div className={className} {...props}>
      <button
            aria-pressed="true"
            className="inline-flex items-center rounded-md border border-blue-200 bg-blue-50 px-3.5 py-2 text-sm font-semibold text-blue-700"
          >
            Pinned
          </button>
    </div>
  )
}
