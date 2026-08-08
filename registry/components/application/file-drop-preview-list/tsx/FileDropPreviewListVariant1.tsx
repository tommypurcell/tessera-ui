export function FileDropPreviewListVariant1() {
  return (
    <div>
      <div className="rounded-lg border-2 border-dashed border-gray-300 px-6 py-8 text-center">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="mx-auto size-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-indigo-600">Click to upload</span> or drag and drop
        </p>
        <p className="mt-0.5 text-xs text-gray-400">PDF, PNG, or JPG up to 10MB</p>
      </div>

      <ul className="mt-4 flex flex-col gap-2" aria-label="Uploaded files">
        <li className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-8 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="truncate text-sm font-medium text-gray-900">Q3-report.pdf</p>
              <p className="shrink-0 text-xs text-gray-500">62%</p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-indigo-600" style={{ width: '62%' }} />
            </div>
          </div>
          <button type="button" aria-label="Cancel upload of Q3-report.pdf" className="shrink-0 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </li>

        <li className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-8 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M18 22.5H6a2.25 2.25 0 01-2.25-2.25V3.75A2.25 2.25 0 016 1.5h7.243a2.25 2.25 0 011.591.659l4.257 4.257a2.25 2.25 0 01.659 1.591V20.25A2.25 2.25 0 0118 22.5z"
            />
          </svg>
          <div className="flex flex-1 flex-col gap-0.5">
            <p className="truncate text-sm font-medium text-gray-900">brand-mockup.png</p>
            <p className="text-xs text-gray-500">2.4 MB &middot; Uploaded</p>
          </div>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </li>

        <li className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-3">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-8 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <div className="flex flex-1 flex-col gap-0.5">
            <p className="truncate text-sm font-medium text-gray-900">contract-final.docx</p>
            <p className="text-xs text-red-600">Upload failed &middot; File too large</p>
          </div>
          <button type="button" className="shrink-0 rounded-md px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-100">
            Retry
          </button>
        </li>
      </ul>
    </div>
  )
}
