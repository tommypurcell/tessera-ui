export function ErrorPageVariant2Dark() {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center p-6 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-red-950/50">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>

      <p className="mt-4 text-sm font-semibold text-red-400">Error 500</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Something went wrong</h1>
      <p className="mt-3 max-w-sm text-sm text-gray-400">
        An unexpected error occurred on our end. Our team has been notified and is looking into it.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <button type="button" className="rounded-md bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-white">
          Reload page
        </button>
        <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
          Contact support
        </a>
      </div>
    </div>
  )
}
