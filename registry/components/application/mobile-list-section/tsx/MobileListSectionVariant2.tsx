export function MobileListSectionVariant2() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="px-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">General</h2>
        <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-sm">
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50">
            <span className="text-sm text-gray-900">Language</span>
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              English
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </a>
          <div className="border-t border-gray-100" />
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50">
            <span className="text-sm text-gray-900">Appearance</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h2 className="px-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">Support</h2>
        <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-sm">
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50">
            <span className="text-sm text-gray-900">Help Center</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
          <div className="border-t border-gray-100" />
          <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-50">
            <span className="text-sm text-red-600">Sign out</span>
          </a>
        </div>
      </div>
    </div>
  )
}
