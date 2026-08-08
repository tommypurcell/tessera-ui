export function ErrorPageVariant1() {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center p-6 text-center">
      <p className="text-sm font-semibold text-indigo-600">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <a href="#" className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-700">
          Go back home
        </a>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Go back
        </a>
      </div>
    </div>
  )
}
