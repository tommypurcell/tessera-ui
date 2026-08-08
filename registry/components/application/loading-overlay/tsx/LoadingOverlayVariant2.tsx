export function LoadingOverlayVariant2() {
  return (
    <div className="relative h-80 overflow-hidden">
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="h-20 rounded-lg bg-gray-100" />
        <div className="h-20 rounded-lg bg-gray-100" />
        <div className="h-20 rounded-lg bg-gray-100" />
        <div className="col-span-3 h-32 rounded-lg bg-gray-100" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/90" role="status" aria-live="polite">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-8 animate-spin text-indigo-600" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-900">Setting up your workspace</p>
          <p className="mt-0.5 text-xs text-gray-500">This usually takes a few seconds</p>
        </div>
      </div>
    </div>
  )
}
