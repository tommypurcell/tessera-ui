export type NoResultsSearchStateVariant1Props = {
  query: string
  hasActiveFilters?: boolean
  onClearFilters?: () => void
}

/**
 * Copy-and-own Tailwind component. Search-specific empty state that
 * echoes the real search query back to the user and, when filters are
 * active, offers a real clear-filters action — distinct from the generic
 * application-empty-states, which isn't search-query aware.
 */
export function NoResultsSearchState({ query, hasActiveFilters = false, onClearFilters }: NoResultsSearchStateVariant1Props) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white px-6 py-16 text-center">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-12 text-gray-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-gray-900">
          No results for &ldquo;<span className="font-semibold">{query}</span>&rdquo;
        </p>
        <p className="max-w-xs text-sm text-gray-500">
          {hasActiveFilters
            ? 'Try a different search term or clear your filters to broaden the results.'
            : 'Try a different search term or check for typos.'}
        </p>
      </div>

      {hasActiveFilters ? (
        <button
          type="button"
          onClick={onClearFilters}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
        >
          Clear filters
        </button>
      ) : null}
    </div>
  )
}
