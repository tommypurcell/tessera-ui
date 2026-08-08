import { useState } from 'react'

export type FilterChipDark = {
  id: string
  label: string
}

export type FilterChipOverflowVariant1DarkProps = {
  filters: FilterChipDark[]
  visibleCount?: number
  onRemove?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Row of removable active-filter chips that
 * collapses extras beyond `visibleCount` into a "+N more" trigger, which opens
 * a small popover listing the remaining filters (also removable).
 */
export function FilterChipOverflowDark({ filters, visibleCount = 3, onRemove }: FilterChipOverflowVariant1DarkProps) {
  const [open, setOpen] = useState(false)
  const visible = filters.slice(0, visibleCount)
  const overflow = filters.slice(visibleCount)

  return (
    <div className="flex w-full flex-wrap items-center gap-1.5">
      {visible.map((filter) => (
        <span key={filter.id} className="inline-flex items-center gap-1 rounded-full bg-gray-800 py-1 pl-3 pr-1.5 text-sm text-gray-200">
          {filter.label}
          <button
            type="button"
            aria-label={`Remove ${filter.label} filter`}
            onClick={() => onRemove?.(filter.id)}
            className="rounded-full p-0.5 text-gray-400 hover:bg-gray-700 hover:text-white"
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
              open ? 'border-gray-600 bg-gray-800 text-white' : 'border-dashed border-gray-600 text-gray-300 hover:bg-gray-800'
            }`}
          >
            +{overflow.length} more
          </button>

          {open ? (
            <div role="dialog" aria-label="More filters" className="absolute left-0 top-full z-10 mt-2 w-56 rounded-lg border border-gray-700 bg-gray-900 p-2 shadow-lg shadow-black/30">
              {overflow.map((filter) => (
                <span key={filter.id} className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm text-gray-200 hover:bg-gray-800">
                  {filter.label}
                  <button
                    type="button"
                    aria-label={`Remove ${filter.label} filter`}
                    onClick={() => onRemove?.(filter.id)}
                    className="rounded-full p-0.5 text-gray-500 hover:bg-gray-700 hover:text-white"
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
