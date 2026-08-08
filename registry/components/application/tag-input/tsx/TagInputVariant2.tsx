export function TagInputVariant2() {
  return (
    <div>
      <label htmlFor="tagInput2" className="mb-1.5 block text-sm font-medium text-gray-700">
        Assignees
      </label>

      <div className="relative">
        <div className="flex flex-wrap items-center gap-1.5 rounded-md border border-gray-300 bg-white p-2 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 py-0.5 pr-1 pl-2.5 text-sm text-emerald-700">
            Ava Wilson
            <button type="button" aria-label="Remove Ava Wilson" className="rounded-full p-0.5 hover:bg-emerald-100">
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
            className="min-w-32 flex-1 border-0 p-1 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
          />
        </div>

        <ul id="tagSuggestions" role="listbox" hidden className="absolute z-10 mt-1 w-full overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg">
          <li role="option" className="cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
            Marcus Chen
          </li>
          <li role="option" className="cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
            Sofia Ramirez
          </li>
          <li role="option" className="cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
            Priya Patel
          </li>
        </ul>
      </div>
    </div>
  )
}
