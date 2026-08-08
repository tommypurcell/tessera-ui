export type DataFilterBarChip = {
  id: string
  label: string
}

export type DataFilterBarVariant1DarkProps = {
  filters: DataFilterBarChip[]
  onRemove: (id: string) => void
  onClearAll: () => void
  onAddFilter?: () => void
}

/**
 * Copy-and-own Tailwind component. Horizontal bar of active-filter chips
 * adapted for dark surfaces, with per-chip removal, a clear-all control,
 * and an "Add filter" trigger slot.
 */
export function DataFilterBarDark({ filters, onRemove, onClearAll, onAddFilter }: DataFilterBarVariant1DarkProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 p-2">
      <button
        type="button"
        onClick={onAddFilter}
        className="inline-flex shrink-0 items-center gap-1 rounded-md border border-dashed border-gray-700 px-2.5 py-1 text-sm font-medium text-gray-400 transition-colors hover:border-gray-500 hover:text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add filter
      </button>

      {filters.length > 0 ? (
        <div role="list" aria-label="Active filters" className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <span
              key={filter.id}
              role="listitem"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-950 py-1 pr-1.5 pl-3 text-sm font-medium text-blue-300"
            >
              {filter.label}
              <button
                type="button"
                onClick={() => onRemove(filter.id)}
                aria-label={`Remove filter: ${filter.label}`}
                className="rounded-full p-0.5 hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}

          <button
            type="button"
            onClick={onClearAll}
            className="text-sm font-medium text-gray-400 underline-offset-2 hover:text-gray-100 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
          >
            Clear all
          </button>
        </div>
      ) : null}
    </div>
  )
}
