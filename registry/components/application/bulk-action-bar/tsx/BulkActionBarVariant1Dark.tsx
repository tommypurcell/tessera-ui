import type { ReactNode } from 'react'

export type BulkActionBarAction = {
  label: string
  icon?: ReactNode
  onClick?: () => void
}

export type BulkActionBarVariant1DarkProps = {
  /** Number of selected rows/items. */
  count: number
  actions: BulkActionBarAction[]
  /** Called when the user dismisses the bar / clears the selection. */
  onClear?: () => void
}

/**
 * Copy-and-own Tailwind component. Floating pill-shaped bulk action bar
 * adapted for dark surfaces.
 */
export function BulkActionBar({ count, actions, onClear }: BulkActionBarVariant1DarkProps) {
  return (
    <div
      role="toolbar"
      aria-label="Bulk actions"
      className="flex items-center gap-4 rounded-full border border-gray-700 bg-gray-900 py-2 pr-2 pl-4 shadow-lg"
    >
      <span className="text-sm font-medium text-gray-200">
        {count} selected
      </span>

      <div className="h-5 w-px bg-gray-700" aria-hidden="true" />

      <div className="flex items-center gap-1">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Clear selection"
        onClick={onClear}
        className="inline-flex size-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-800 hover:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
