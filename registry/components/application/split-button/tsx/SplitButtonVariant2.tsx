export function SplitButtonVariant2() {
  return (
    <div className="relative inline-flex">
      <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative focus:z-10 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
        >
          Save
        </button>

        <button
          type="button"
          data-menu-toggle
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="More save options"
          className="px-2 py-2 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative focus:z-10 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </span>

      <div data-menu role="menu" hidden className="absolute end-0 top-11 z-10 w-56 overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg">
        <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
          Save as copy
        </button>
        <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
          Save and close
        </button>
        <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
          Save as template
        </button>
      </div>
    </div>
  )
}
