const rows = [
  { titleWidth: 'w-1/2', metaWidth: 'w-1/3' },
  { titleWidth: 'w-2/3', metaWidth: 'w-1/4' },
  { titleWidth: 'w-2/5', metaWidth: 'w-1/3' },
]

export function SkeletonCardListVariant2() {
  return (
    <div className="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-200" role="status" aria-label="Loading list">
      {rows.map((row, index) => (
        <div key={index} className="flex items-center gap-3 p-4">
          <div className="size-10 shrink-0 animate-pulse rounded-full bg-gray-200" />
          <div className="flex flex-1 flex-col gap-2">
            <div className={`h-3.5 ${row.titleWidth} animate-pulse rounded bg-gray-200`} />
            <div className={`h-3 ${row.metaWidth} animate-pulse rounded bg-gray-200`} />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading content&hellip;</span>
    </div>
  )
}
