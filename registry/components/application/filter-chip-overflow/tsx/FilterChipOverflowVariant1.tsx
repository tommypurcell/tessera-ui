import { useState } from 'react'

export type FilterChip = {
  id: string
  label: string
}

export type FilterChipOverflowVariant1Props = {
  filters: FilterChip[]
  visibleCount?: number
  onRemove?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Row of removable active-filter chips that
 * collapses extras beyond `visibleCount` into a "+N more" trigger, which opens
 * a small popover listing the remaining filters (also removable).
 */
export function FilterChipOverflow({ filters, visibleCount = 3, onRemove }: FilterChipOverflowVariant1Props) {
  const [open, setOpen] = useState(false)
  const visible = filters.slice(0, visibleCount)
  const overflow = filters.slice(visibleCount)

  return (
    <div className="flex w-full flex-wrap items-center gap-1.5">
      {visible.map((filter) => (
        <span key={filter.id} className="inline-flex items-center gap-1 rounded-full bg-gray-100 py-1 pl-3 pr-1.5 text-sm text-gray-700">
          {filter.label}
          <button
            type="button"
            aria-label={`Remove ${filter.label} filter`}
            onClick={() => onRemove?.(filter.id)}
            className="rounded-full p-0.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      ))}

      {overflow.length > 0 ? (
        <div className="relative">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
              open ? 'border-gray-300 bg-gray-50 text-gray-900' : 'border-dashed border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            +{overflow.length} more
          </button>

          {open ? (
            <div role="dialog" aria-label="More filters" className="absolute left-0 top-full z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-lg shadow-gray-900/5">
              {overflow.map((filter) => (
                <span key={filter.id} className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                  {filter.label}
                  <button
                    type="button"
                    aria-label={`Remove ${filter.label} filter`}
                    onClick={() => onRemove?.(filter.id)}
                    className="rounded-full p-0.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                  >
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
