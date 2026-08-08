export function BookingSearchBarVariant2Dark() {
  return (
    <div>
      <div className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-800 bg-gray-900 shadow-sm">
        <label className="flex flex-col gap-0.5 px-4 py-3">
          <span className="text-xs font-semibold text-white">Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full border-0 bg-transparent p-0 text-sm text-gray-200 placeholder:text-gray-500 focus:ring-0 focus:outline-none"
          />
        </label>

        <div className="flex divide-x divide-gray-800">
          <label className="flex flex-1 flex-col gap-0.5 px-4 py-3">
            <span className="text-xs font-semibold text-white">Check in</span>
            <input type="text" placeholder="Add dates" className="w-full border-0 bg-transparent p-0 text-sm text-gray-200 placeholder:text-gray-500 focus:ring-0 focus:outline-none" />
          </label>
          <label className="flex flex-1 flex-col gap-0.5 px-4 py-3">
            <span className="text-xs font-semibold text-white">Check out</span>
            <input type="text" placeholder="Add dates" className="w-full border-0 bg-transparent p-0 text-sm text-gray-200 placeholder:text-gray-500 focus:ring-0 focus:outline-none" />
          </label>
        </div>

        <label className="flex flex-col gap-0.5 px-4 py-3">
          <span className="text-xs font-semibold text-white">Who</span>
          <input type="text" placeholder="Add guests" className="w-full border-0 bg-transparent p-0 text-sm text-gray-200 placeholder:text-gray-500 focus:ring-0 focus:outline-none" />
        </label>
      </div>

      <button type="submit" className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-500">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
        Search
      </button>
    </div>
  )
}
