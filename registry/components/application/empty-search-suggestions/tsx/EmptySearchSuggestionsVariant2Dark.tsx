export type EmptySearchSuggestionsVariant2DarkProps = {
  query: string
  /** Spelling-corrected term suggestion, e.g. "running shoes" for a query of "running shues". */
  didYouMean?: string
  onDidYouMeanClick?: (term: string) => void
  categories: string[]
  onCategoryClick?: (category: string) => void
}

/**
 * Copy-and-own Tailwind component. No-results state with a spelling
 * correction and category chips, adapted for dark surfaces.
 */
export function EmptySearchSuggestions({
  query,
  didYouMean,
  onDidYouMeanClick,
  categories,
  onCategoryClick,
}: EmptySearchSuggestionsVariant2DarkProps) {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-5 rounded-lg border border-gray-800 bg-gray-900 px-6 py-10 text-center">
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
        {didYouMean ? (
          <p className="text-sm text-gray-400">
            Did you mean{' '}
            <button
              type="button"
              onClick={() => onDidYouMeanClick?.(didYouMean)}
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              {didYouMean}
            </button>
            ?
          </p>
        ) : null}
      </div>

      <div className="w-full border-t border-gray-800 pt-4">
        <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">Browse categories instead</p>
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryClick?.(category)}
              className="rounded-full bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-700"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
