import type { HTMLAttributes } from 'react'

export type ActionsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant4({ className, ...props }: ActionsVariant4Props) {
  return (
    <div className={className} {...props}>
      <button
            aria-label="Close"
            className="inline-grid size-9 place-items-center rounded-md text-xl text-slate-500 hover:bg-slate-100"
          >
            ×
          </button>
    </div>
  )
}
