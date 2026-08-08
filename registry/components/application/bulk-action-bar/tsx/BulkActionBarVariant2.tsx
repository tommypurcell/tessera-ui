export type BulkActionBarInlineAction = {
  label: string
  onClick?: () => void
  /** Renders the action with destructive (red) styling instead of the default secondary style. */
  destructive?: boolean
}

export type BulkActionBarVariant2Props = {
  /** Number of selected rows. */
  count: number
  actions: BulkActionBarInlineAction[]
  /** Called when the user clears the selection. */
  onClear?: () => void
}

/**
 * Copy-and-own Tailwind component. Inline bulk action bar meant to replace a
 * table's header row once one or more rows are selected — pairs with a data
 * table's checkbox column.
 */
export function BulkActionBar({ count, actions, onClear }: BulkActionBarVariant2Props) {
  return (
    <div
      role="toolbar"
      aria-label="Bulk actions"
      className="flex w-full items-center justify-between rounded-t-lg border border-b-0 border-blue-200 bg-blue-50 px-4 py-3"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Clear selection"
          onClick={onClear}
          className="inline-flex size-5 items-center justify-center rounded border border-blue-600 bg-blue-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <span className="text-sm font-medium text-blue-900">{count} rows selected</span>
      </div>

      <div className="flex items-center gap-2">
        {actions.map((action) =>
          action.destructive ? (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              {action.label}
            </button>
          ) : (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className="rounded-md border border-blue-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {action.label}
            </button>
          ),
        )}
      </div>
    </div>
  )
}
