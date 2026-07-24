import type { HTMLAttributes } from 'react'

export type ActionsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant2({ className, ...props }: ActionsVariant2Props) {
  return (
    <div className={className} {...props}>
      <button
            aria-label="Add item"
            className="inline-grid size-9 place-items-center rounded-md border border-slate-200 bg-white text-lg text-slate-700"
          >
            +
          </button>
    </div>
  )
}
