export type RetryErrorStateVariant1Props = {
  onRetry?: () => void
}

export function RetryErrorStateVariant1({ onRetry }: RetryErrorStateVariant1Props) {
  return (
    <div className="flex w-full flex-col items-center rounded-lg border border-gray-200 px-6 py-12 text-center" role="alert">
      <div className="flex size-12 items-center justify-center rounded-full bg-red-50">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-900">Couldn&apos;t load your dashboard</h3>
      <p className="mt-1.5 max-w-xs text-sm text-gray-500">We ran into a problem reaching the server. Check your connection and try again.</p>

      <button type="button" onClick={onRetry} className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-700">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Try again
      </button>
    </div>
  )
}
