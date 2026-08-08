export function SkeletonCardListVariant1Dark() {
  return (
    <div className="grid grid-cols-3 gap-4" role="status" aria-label="Loading cards">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-3 overflow-hidden rounded-lg border border-gray-800 p-3">
          <div className="aspect-video w-full animate-pulse rounded-md bg-gray-800" />
          <div className="h-3.5 w-4/5 animate-pulse rounded bg-gray-800" />
          <div className="h-3 w-2/5 animate-pulse rounded bg-gray-800" />
        </div>
      ))}
      <span className="sr-only">Loading content&hellip;</span>
    </div>
  )
}
