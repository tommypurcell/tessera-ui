export function PullToRefreshVariant1() {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <div className="flex flex-col items-center justify-center gap-1 bg-gray-50 py-4" role="status" aria-label="Pull to refresh">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-5 rotate-180 text-gray-400 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        <p className="text-xs font-medium text-gray-500">Pull to refresh</p>
      </div>

      <div className="flex flex-col divide-y divide-gray-200 bg-white">
        {[
          { title: 'New comment on your post', time: '2 minutes ago' },
          { title: 'Ava Wilson mentioned you', time: '1 hour ago' },
          { title: 'Your report is ready', time: '3 hours ago' },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-3 p-4">
            <div className="size-9 shrink-0 rounded-full bg-gray-200" />
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
