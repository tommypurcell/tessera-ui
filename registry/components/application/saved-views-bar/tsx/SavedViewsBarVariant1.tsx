export type SavedView = {
  /** Stable identifier returned by onSelect. */
  id: string
  label: string
}

export type SavedViewsBarVariant1Props = {
  views: SavedView[]
  /** Currently active view id. */
  activeId: string
  onSelect?: (id: string) => void
  /** Called when the user saves the current filters as a new view. */
  onAddView?: () => void
}

/**
 * Copy-and-own Tailwind component. Underline-style row of named saved views
 * (persisted filter/sort presets) with a trailing "add view" affordance.
 * Distinct from tabs — each item represents a saved query, not a content pane.
 */
export function SavedViewsBar({ views, activeId, onSelect, onAddView }: SavedViewsBarVariant1Props) {
  return (
    <div role="tablist" aria-label="Saved views" className="flex items-center gap-1 border-b border-gray-200">
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
              active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {view.label}
            {active ? (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-gray-900" aria-hidden="true" />
            ) : null}
          </button>
        )
      })}

      <button
        type="button"
        aria-label="Save current filters as a new view"
        onClick={onAddView}
        className="ml-auto inline-flex size-8 shrink-0 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
