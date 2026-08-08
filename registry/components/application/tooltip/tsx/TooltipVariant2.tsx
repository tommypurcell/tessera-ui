import type { ReactNode } from 'react'

export type TooltipVariant2Props = {
  /** Tooltip text describing the icon-only trigger's action. */
  label: string
  /** Accessible name for the icon-only trigger button (usually the same as label). */
  triggerLabel: string
  /** Icon glyph rendered inside the trigger button. */
  icon: ReactNode
  /** Unique id linking the tooltip to the trigger via aria-describedby. */
  id: string
  onClick?: () => void
}

/**
 * Copy-and-own Tailwind component. Bottom-anchored tooltip for icon-only
 * buttons — pairs a real aria-label on the trigger with a visible tooltip,
 * since icon-only controls need both.
 */
export function Tooltip({ label, triggerLabel, icon, id, onClick }: TooltipVariant2Props) {
  return (
    <div className="group relative inline-block">
      <button
        type="button"
        aria-label={triggerLabel}
        aria-describedby={id}
        onClick={onClick}
        className="inline-flex size-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 hover:text-red-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        {icon}
      </button>
      <div
        id={id}
        role="tooltip"
        className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
