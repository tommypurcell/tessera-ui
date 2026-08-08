export type EmptySearchSuggestionsVariant1DarkProps = {
  query: string
  suggestions: string[]
  onSuggestionClick?: (term: string) => void
}

/**
 * Copy-and-own Tailwind component. No-results state with popular-search
 * chips, adapted for dark surfaces.
 */
export function EmptySearchSuggestions({
  query,
  suggestions,
  onSuggestionClick,
}: EmptySearchSuggestionsVariant1DarkProps) {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-lg border border-gray-800 bg-gray-900 px-6 py-12 text-center">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-12 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-white">
          No results for &ldquo;<span className="font-semibold">{query}</span>&rdquo;
        </p>
        <p className="max-w-xs text-sm text-gray-400">Try one of these popular searches instead.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {suggestions.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => onSuggestionClick?.(term)}
            className="rounded-full border border-gray-700 px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}
