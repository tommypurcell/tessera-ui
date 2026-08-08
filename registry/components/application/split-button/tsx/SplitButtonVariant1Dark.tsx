export function SplitButtonVariant1Dark() {
  return (
    <div className="relative inline-flex">
      <span className="inline-flex divide-x divide-indigo-400 overflow-hidden rounded-md shadow-sm">
        <button
          type="button"
          className="bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400 focus:relative focus:z-10 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
        >
          Deploy
        </button>

        <button
          type="button"
          data-menu-toggle
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="More deploy options"
          className="bg-indigo-500 px-2 py-2 text-white transition-colors hover:bg-indigo-400 focus:relative focus:z-10 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </span>

      <div data-menu role="menu" hidden className="absolute end-0 top-11 z-10 w-56 overflow-hidden rounded-md border border-gray-700 bg-gray-800 py-1 shadow-lg">
        <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-gray-200 hover:bg-gray-700">
          Deploy to staging
        </button>
        <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-gray-200 hover:bg-gray-700">
          Deploy to preview
        </button>
        <button type="button" role="menuitem" className="block w-full px-3 py-2 text-left text-sm text-gray-200 hover:bg-gray-700">
          Schedule deployment&hellip;
        </button>
      </div>
    </div>
  )
}
