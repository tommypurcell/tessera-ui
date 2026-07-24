import type { HTMLAttributes } from 'react'

export type ActionsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant3({ className, ...props }: ActionsVariant3Props) {
  return (
    <div className={className} {...props}>
      <a
            href="#"
            className="inline-flex items-center rounded-md px-3.5 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >View details</a
          >
    </div>
  )
}
