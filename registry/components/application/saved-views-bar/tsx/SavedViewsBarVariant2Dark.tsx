export type SavedViewPill = {
  /** Stable identifier returned by onSelect. */
  id: string
  label: string
  /** Marks the view as starred/favorited, shown with a star glyph. */
  starred?: boolean
}

export type SavedViewsBarVariant2DarkProps = {
  views: SavedViewPill[]
  /** Currently active view id. */
  activeId: string
  onSelect?: (id: string) => void
  /** Called when the active view's options chevron is clicked (e.g. open a rename/delete menu). */
  onOpenOptions?: (id: string) => void
  /** Called when the user creates a new view from the current filters. */
  onAddView?: () => void
}

/**
 * Copy-and-own Tailwind component. Pill-style saved views row adapted for
 * dark surfaces.
 */
export function SavedViewsBar({
  views,
  activeId,
  onSelect,
  onOpenOptions,
  onAddView,
}: SavedViewsBarVariant2DarkProps) {
  return (
    <div role="tablist" aria-label="Saved views" className="flex flex-wrap items-center gap-2">
      {views.map((view) => {
        const active = view.id === activeId
        return active ? (
          <div
            key={view.id}
            role="tab"
            aria-selected="true"
            className="inline-flex items-center gap-1.5 rounded-full bg-white py-1.5 pr-2 pl-3 text-sm font-medium text-gray-900"
          >
            <button
              type="button"
              onClick={() => onSelect?.(view.id)}
              className="inline-flex items-center gap-1.5"
            >
              {view.starred ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3.5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.959c.3.921-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.197-1.538-1.118l1.286-3.959a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
                </svg>
              ) : null}
              {view.label}
            </button>
            <button
              type="button"
              aria-label="View options"
              onClick={() => onOpenOptions?.(view.id)}
              className="ml-0.5 inline-flex size-5 items-center justify-center rounded-full text-gray-500 hover:bg-black/10 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        ) : (
          <button
            key={view.id}
            type="button"
            role="tab"
            aria-selected="false"
            onClick={() => onSelect?.(view.id)}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-800"
          >
            {view.label}
          </button>
        )
      })}

      <button
        type="button"
        onClick={onAddView}
        className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-400 hover:border-gray-500 hover:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        New view
      </button>
    </div>
  )
}
