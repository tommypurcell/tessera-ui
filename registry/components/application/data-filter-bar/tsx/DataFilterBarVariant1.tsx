export type DataFilterBarChip = {
  id: string
  label: string
}

export type DataFilterBarVariant1Props = {
  filters: DataFilterBarChip[]
  onRemove: (id: string) => void
  onClearAll: () => void
  onAddFilter?: () => void
}

/**
 * Copy-and-own Tailwind component. Horizontal bar of active-filter chips
 * with per-chip removal, a clear-all control, and an "Add filter" trigger
 * slot — pass your own filter list and wire onAddFilter to open your
 * dropdown/combobox of filterable fields.
 */
export function DataFilterBar({ filters, onRemove, onClearAll, onAddFilter }: DataFilterBarVariant1Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-white p-2">
      <button
        type="button"
        onClick={onAddFilter}
        className="inline-flex shrink-0 items-center gap-1 rounded-md border border-dashed border-gray-300 px-2.5 py-1 text-sm font-medium text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
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
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 py-1 pr-1.5 pl-3 text-sm font-medium text-blue-700"
            >
              {filter.label}
              <button
                type="button"
                onClick={() => onRemove(filter.id)}
                aria-label={`Remove filter: ${filter.label}`}
                className="rounded-full p-0.5 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
            className="text-sm font-medium text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
          >
            Clear all
          </button>
        </div>
      ) : null}
    </div>
  )
}
