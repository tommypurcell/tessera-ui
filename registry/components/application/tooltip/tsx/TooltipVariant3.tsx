import type { ReactNode } from 'react'

export type TooltipVariant3Props = {
  /** Short bold heading shown at the top of the tooltip body. */
  title: string
  /** Supporting sentence rendered below the title. */
  description: string
  /** Trigger element the tooltip is anchored to (usually an info icon button). */
  children: ReactNode
  /** Unique id linking the tooltip to the trigger via aria-describedby. */
  id: string
}

/**
 * Copy-and-own Tailwind component. Right-anchored rich tooltip with a title
 * and description, for explaining a field or setting in more than a few words.
 */
export function Tooltip({ title, description, children, id }: TooltipVariant3Props) {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        id={id}
        role="tooltip"
        className="pointer-events-none absolute top-1/2 left-full z-10 ml-2 w-56 -translate-y-1/2 rounded-md bg-gray-900 p-3 text-left opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        <p className="text-xs font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-gray-300">{description}</p>
        <span
          className="absolute top-1/2 right-full -translate-y-1/2 border-4 border-transparent border-r-gray-900"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
