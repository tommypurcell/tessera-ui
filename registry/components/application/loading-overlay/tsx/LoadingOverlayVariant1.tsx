export function LoadingOverlayVariant1() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200">
      <div className="flex flex-col gap-3 p-6">
        <div className="h-4 w-2/3 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="mt-2 h-24 w-full rounded bg-gray-200" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-[1px]" role="status" aria-live="polite">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 animate-spin text-gray-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-sm font-medium text-gray-700">Loading your data&hellip;</p>
      </div>
    </div>
  )
}
