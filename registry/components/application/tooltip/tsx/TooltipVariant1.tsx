import type { ReactNode } from 'react'

export type TooltipVariant1Props = {
  /** Short label shown above the trigger on hover/focus. */
  label: string
  /** Trigger element the tooltip is anchored to. */
  children: ReactNode
  /** Unique id linking the tooltip to the trigger via aria-describedby. */
  id: string
}

/**
 * Copy-and-own Tailwind component. Simple top-anchored tooltip revealed on
 * hover or keyboard focus via group-hover/group-focus-within, no JS required.
 */
export function Tooltip({ label, children, id }: TooltipVariant1Props) {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        id={id}
        role="tooltip"
        className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
        <span
          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
