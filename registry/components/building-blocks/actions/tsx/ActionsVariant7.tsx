import type { HTMLAttributes } from 'react'

export type ActionsVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant7({ className, ...props }: ActionsVariant7Props) {
  return (
    <div className={className} {...props}>
      <button
            aria-label="Drag to reorder"
            className="inline-grid size-8 cursor-grab place-items-center rounded-md text-lg text-slate-400 hover:bg-slate-100"
          >
            ⠿
          </button>
    </div>
  )
}
