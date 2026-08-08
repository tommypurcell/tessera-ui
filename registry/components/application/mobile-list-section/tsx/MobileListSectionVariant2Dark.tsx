export function MobileListSectionVariant2Dark() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="px-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">General</h2>
        <div className="mt-2 overflow-hidden rounded-xl bg-gray-900 shadow-sm">
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
            <span className="text-sm text-white">Language</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              English
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </a>
          <div className="border-t border-gray-800" />
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
            <span className="text-sm text-white">Appearance</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h2 className="px-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">Support</h2>
        <div className="mt-2 overflow-hidden rounded-xl bg-gray-900 shadow-sm">
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
            <span className="text-sm text-white">Help Center</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <div className="border-t border-gray-800" />
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
            <span className="text-sm text-red-400">Sign out</span>
          </a>
        </div>
      </div>
    </div>
  )
}
