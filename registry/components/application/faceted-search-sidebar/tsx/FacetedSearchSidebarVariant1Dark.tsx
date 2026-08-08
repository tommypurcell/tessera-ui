import { useId, useState } from 'react'

export type FacetOption = {
  id: string
  label: string
  count: number
}

export type FacetedSearchSidebarVariant1DarkProps = {
  categoryOptions?: FacetOption[]
  priceMin?: number
  priceMax?: number
  defaultPriceRange?: [number, number]
  onClearAll?: () => void
  className?: string
}

const DEFAULT_CATEGORY_OPTIONS: FacetOption[] = [
  { id: 'headphones', label: 'Headphones', count: 128 },
  { id: 'speakers', label: 'Speakers', count: 64 },
  { id: 'microphones', label: 'Microphones', count: 37 },
]

function FacetGroup({
  title,
  defaultOpen,
  children,
}: {
  title: string
  defaultOpen: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()

  return (
    <div className="p-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-sm font-semibold text-white"
      >
        {title}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`size-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open ? (
        <div id={panelId} className="mt-3">
          {children}
        </div>
      ) : null}
    </div>
  )
}

/**
 * Copy-and-own Tailwind component. Collapsible facet groups adapted for dark surfaces —
 * checkbox options with result counts, and a two-thumb price range.
 */
export function FacetedSearchSidebarVariant1Dark({
  categoryOptions = DEFAULT_CATEGORY_OPTIONS,
  priceMin = 0,
  priceMax = 200,
  defaultPriceRange = [25, 130],
  onClearAll,
  className,
}: FacetedSearchSidebarVariant1DarkProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set([categoryOptions[0]?.id].filter(Boolean) as string[]))
  const [range, setRange] = useState<[number, number]>(defaultPriceRange)

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const span = priceMax - priceMin
  const leftPct = ((range[0] - priceMin) / span) * 100
  const rightPct = 100 - ((range[1] - priceMin) / span) * 100

  return (
    <nav
      aria-label="Filters"
      className={`flex flex-col divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}
    >
      <FacetGroup title="Category" defaultOpen>
        <div className="flex flex-col gap-2.5">
          {categoryOptions.map((option) => (
            <label key={option.id} className="flex items-center justify-between gap-2 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checked.has(option.id)}
                  onChange={() => toggle(option.id)}
                  className="size-4 rounded border-gray-700 bg-gray-900 text-blue-500 focus:ring-blue-500"
                />
                {option.label}
              </span>
              <span className="text-xs text-gray-500">{option.count}</span>
            </label>
          ))}
        </div>
      </FacetGroup>

      <FacetGroup title="Price" defaultOpen>
        <div className="flex flex-col gap-3">
          <div className="relative h-1.5 rounded-full bg-gray-800">
            <div
              className="absolute inset-y-0 rounded-full bg-blue-500"
              style={{ left: `${leftPct}%`, right: `${rightPct}%` }}
            />
            <span
              className="absolute -top-1 size-3.5 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-gray-950"
              style={{ left: `${leftPct}%` }}
            />
            <span
              className="absolute -top-1 size-3.5 translate-x-1/2 rounded-full border-2 border-blue-500 bg-gray-950"
              style={{ right: `${rightPct}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>${range[0]}</span>
            <span>${range[1]}</span>
          </div>
        </div>
      </FacetGroup>

      <FacetGroup title="Brand" defaultOpen={false}>
        <p className="text-xs text-gray-500">No brand filters available yet.</p>
      </FacetGroup>

      <div className="p-4">
        <button
          type="button"
          onClick={onClearAll}
          className="text-xs font-medium text-gray-400 hover:text-white"
        >
          Clear all filters
        </button>
      </div>
    </nav>
  )
}
