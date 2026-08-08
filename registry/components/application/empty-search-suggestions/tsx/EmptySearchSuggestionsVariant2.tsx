export type EmptySearchSuggestionsVariant2Props = {
  query: string
  /** Spelling-corrected term suggestion, e.g. "running shoes" for a query of "running shues". */
  didYouMean?: string
  onDidYouMeanClick?: (term: string) => void
  categories: string[]
  onCategoryClick?: (category: string) => void
}

/**
 * Copy-and-own Tailwind component. No-results search state with a
 * spelling-correction suggestion and a row of category chips to browse
 * instead — a richer recovery path than a single popular-searches row.
 */
export function EmptySearchSuggestions({
  query,
  didYouMean,
  onDidYouMeanClick,
  categories,
  onCategoryClick,
}: EmptySearchSuggestionsVariant2Props) {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-5 rounded-lg border border-gray-200 bg-white px-6 py-10 text-center">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-12 text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-gray-900">
          No results for &ldquo;<span className="font-semibold">{query}</span>&rdquo;
        </p>
        {didYouMean ? (
          <p className="text-sm text-gray-500">
            Did you mean{' '}
            <button
              type="button"
              onClick={() => onDidYouMeanClick?.(didYouMean)}
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              {didYouMean}
            </button>
            ?
          </p>
        ) : null}
      </div>

      <div className="w-full border-t border-gray-100 pt-4">
        <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">Browse categories instead</p>
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryClick?.(category)}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
