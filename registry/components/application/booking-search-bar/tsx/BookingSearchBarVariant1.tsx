export function BookingSearchBarVariant1() {
  return (
    <div className="flex items-stretch divide-x divide-gray-200 rounded-full border border-gray-200 shadow-sm">
      <label className="flex flex-1 flex-col gap-0.5 px-5 py-2.5">
        <span className="text-[11px] font-semibold text-gray-900">Where</span>
        <input type="text" placeholder="Search destinations" className="w-full border-0 p-0 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none" />
      </label>

      <label className="flex flex-1 flex-col gap-0.5 px-5 py-2.5">
        <span className="text-[11px] font-semibold text-gray-900">Check in</span>
        <input type="text" placeholder="Add dates" className="w-full border-0 p-0 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none" />
      </label>

      <label className="flex flex-1 flex-col gap-0.5 px-5 py-2.5">
        <span className="text-[11px] font-semibold text-gray-900">Check out</span>
        <input type="text" placeholder="Add dates" className="w-full border-0 p-0 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none" />
      </label>

      <label className="flex flex-1 flex-col gap-0.5 py-2.5 pr-2 pl-5">
        <span className="text-[11px] font-semibold text-gray-900">Who</span>
        <input type="text" placeholder="Add guests" className="w-full border-0 p-0 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none" />
      </label>

      <div className="flex items-center pr-2">
        <button type="submit" aria-label="Search" className="flex size-11 items-center justify-center rounded-full bg-rose-600 text-white hover:bg-rose-700">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
