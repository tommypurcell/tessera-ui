export function TagInputVariant1Dark() {
  return (
    <div>
      <label htmlFor="tagInput" className="mb-1.5 block text-sm font-medium text-gray-300">
        Labels
      </label>

      <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-gray-700 bg-gray-900 p-2 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 py-0.5 pr-1 pl-2.5 text-sm text-indigo-300">
          bug
          <button type="button" aria-label="Remove bug" className="rounded-full p-0.5 hover:bg-indigo-500/20">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 py-0.5 pr-1 pl-2.5 text-sm text-indigo-300">
          design
          <button type="button" aria-label="Remove design" className="rounded-full p-0.5 hover:bg-indigo-500/20">
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
          className="min-w-24 flex-1 border-0 bg-transparent p-1 text-sm text-gray-100 placeholder:text-gray-500 focus:ring-0 focus:outline-none"
        />
      </div>

      <p id="tagInputHelp" className="mt-1.5 text-xs text-gray-400">
        Press Enter to add a label, Backspace to remove the last one.
      </p>
    </div>
  )
}
