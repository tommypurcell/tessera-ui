export function TagInputVariant1() {
  return (
    <div>
      <label htmlFor="tagInput" className="mb-1.5 block text-sm font-medium text-gray-700">
        Labels
      </label>

      <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-gray-300 bg-white p-2 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 py-0.5 pr-1 pl-2.5 text-sm text-indigo-700">
          bug
          <button type="button" aria-label="Remove bug" className="rounded-full p-0.5 hover:bg-indigo-100">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 py-0.5 pr-1 pl-2.5 text-sm text-indigo-700">
          design
          <button type="button" aria-label="Remove design" className="rounded-full p-0.5 hover:bg-indigo-100">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>

        <input
          id="tagInput"
          type="text"
          placeholder="Add a label…"
          aria-describedby="tagInputHelp"
          className="min-w-24 flex-1 border-0 p-1 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
        />
      </div>

      <p id="tagInputHelp" className="mt-1.5 text-xs text-gray-500">
        Press Enter to add a label, Backspace to remove the last one.
      </p>
    </div>
  )
}
