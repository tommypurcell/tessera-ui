export type RetryErrorStateVariant2DarkProps = {
  onRetry?: () => void
}

export function RetryErrorStateVariant2Dark({ onRetry }: RetryErrorStateVariant2DarkProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-gray-800 bg-gray-900 p-4" role="alert">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 size-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm font-medium text-white">Failed to load recent activity</p>
        <p className="text-xs text-gray-400">Request timed out (504)</p>
      </div>

      <button type="button" onClick={onRetry} className="shrink-0 rounded-md px-2.5 py-1 text-xs font-medium text-gray-200 hover:bg-gray-800">
        Retry
      </button>
    </div>
  )
}
