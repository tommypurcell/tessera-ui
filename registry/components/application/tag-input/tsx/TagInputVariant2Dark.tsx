export function TagInputVariant2Dark() {
  return (
    <div>
      <label htmlFor="tagInput2" className="mb-1.5 block text-sm font-medium text-gray-300">
        Assignees
      </label>

      <div className="relative">
        <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-gray-700 bg-gray-900 p-2 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 py-0.5 pr-1 pl-2.5 text-sm text-emerald-300">
            Ava Wilson
            <button type="button" aria-label="Remove Ava Wilson" className="rounded-full p-0.5 hover:bg-emerald-500/20">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>

          <input
            id="tagInput2"
            type="text"
            placeholder="Add an assignee…"
            role="combobox"
            aria-expanded="false"
            aria-controls="tagSuggestions"
            autoComplete="off"
            className="min-w-32 flex-1 border-0 bg-transparent p-1 text-sm text-gray-100 placeholder:text-gray-500 focus:ring-0 focus:outline-none"
          />
        </div>

        <ul id="tagSuggestions" role="listbox" hidden className="absolute z-10 mt-1 w-full overflow-hidden rounded-md border border-gray-700 bg-gray-800 py-1 shadow-lg">
          <li role="option" className="cursor-pointer px-3 py-2 text-sm text-gray-200 hover:bg-gray-700">
            Marcus Chen
          </li>
          <li role="option" className="cursor-pointer px-3 py-2 text-sm text-gray-200 hover:bg-gray-700">
            Sofia Ramirez
          </li>
          <li role="option" className="cursor-pointer px-3 py-2 text-sm text-gray-200 hover:bg-gray-700">
            Priya Patel
          </li>
        </ul>
      </div>
    </div>
  )
}
