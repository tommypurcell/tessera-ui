export function PullToRefreshVariant2Dark() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800">
      <div className="flex flex-col items-center justify-center gap-1 bg-gray-900 py-4" role="status" aria-live="polite">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-5 animate-spin text-indigo-400" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-xs font-medium text-gray-400">Refreshing&hellip;</p>
      </div>

      <div className="flex flex-col divide-y divide-gray-800 bg-gray-950 opacity-60">
        {[
          { title: 'New comment on your post', time: '2 minutes ago' },
          { title: 'Ava Wilson mentioned you', time: '1 hour ago' },
          { title: 'Your report is ready', time: '3 hours ago' },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-3 p-4">
            <div className="size-9 shrink-0 rounded-full bg-gray-800" />
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
