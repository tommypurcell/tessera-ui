export function FileDropPreviewListVariant2Dark() {
  return (
    <ul className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-800" aria-label="Uploaded files">
      <li className="flex items-center gap-3 p-3">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="truncate text-sm font-medium text-white">onboarding-notes.pdf</p>
            <p className="shrink-0 text-xs text-gray-400">30%</p>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full rounded-full bg-indigo-500" style={{ width: '30%' }} />
          </div>
        </div>
      </li>

      <li className="flex items-center gap-3 p-3">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <div className="flex flex-1 flex-col gap-0.5">
          <p className="truncate text-sm font-medium text-white">team-photo.jpg</p>
          <p className="text-xs text-gray-400">1.1 MB</p>
        </div>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </li>
    </ul>
  )
}
