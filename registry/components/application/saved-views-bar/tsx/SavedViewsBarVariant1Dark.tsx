export type SavedView = {
  /** Stable identifier returned by onSelect. */
  id: string
  label: string
}

export type SavedViewsBarVariant1DarkProps = {
  views: SavedView[]
  /** Currently active view id. */
  activeId: string
  onSelect?: (id: string) => void
  /** Called when the user saves the current filters as a new view. */
  onAddView?: () => void
}

/**
 * Copy-and-own Tailwind component. Underline-style saved views row adapted
 * for dark surfaces.
 */
export function SavedViewsBar({ views, activeId, onSelect, onAddView }: SavedViewsBarVariant1DarkProps) {
  return (
    <div role="tablist" aria-label="Saved views" className="flex items-center gap-1 border-b border-gray-800">
      {views.map((view) => {
        const active = view.id === activeId
        return (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect?.(view.id)}
            className={`relative px-3 py-2.5 text-sm font-medium ${
              active ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {view.label}
            {active ? (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-white" aria-hidden="true" />
            ) : null}
          </button>
        )
      })}

      <button
        type="button"
        aria-label="Save current filters as a new view"
        onClick={onAddView}
        className="ml-auto inline-flex size-8 shrink-0 items-center justify-center rounded-md text-gray-500 hover:bg-gray-800 hover:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  )
}
