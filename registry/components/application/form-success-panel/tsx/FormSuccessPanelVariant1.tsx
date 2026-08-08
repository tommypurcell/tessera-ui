export function FormSuccessPanelVariant1() {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center p-6 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-green-50">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">Application submitted</h1>
      <p className="mt-2 max-w-sm text-sm text-gray-600">
        Thanks for applying. We&apos;ve sent a confirmation to your email and our team will review your application within
        3&ndash;5 business days.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <a href="#" className="rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-700">
          View application status
        </a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Back to home
        </a>
      </div>
    </div>
  )
}
