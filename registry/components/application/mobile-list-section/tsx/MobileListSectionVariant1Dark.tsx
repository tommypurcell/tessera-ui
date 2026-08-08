export function MobileListSectionVariant1Dark() {
  return (
    <div>
      <h2 className="px-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">Account</h2>

      <div className="mt-2 overflow-hidden rounded-xl bg-gray-900 shadow-sm">
        <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
          <span className="text-sm text-white">Profile</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
        <div className="border-t border-gray-800" />
        <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
          <span className="text-sm text-white">Privacy</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
        <div className="border-t border-gray-800" />
        <a href="#" className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-gray-800">
          <span className="text-sm text-white">Notifications</span>
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            On
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  )
}
