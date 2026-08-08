import type { ReactNode } from 'react'

export type TooltipVariant1DarkProps = {
  /** Short label shown above the trigger on hover/focus. */
  label: string
  /** Trigger element the tooltip is anchored to. */
  children: ReactNode
  /** Unique id linking the tooltip to the trigger via aria-describedby. */
  id: string
}

/**
 * Copy-and-own Tailwind component. Top-anchored tooltip adapted for dark
 * surfaces, using a light tooltip bubble for contrast against a dark page.
 */
export function Tooltip({ label, children, id }: TooltipVariant1DarkProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <div
        id={id}
        role="tooltip"
        className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-gray-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
        <span
          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-100"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
