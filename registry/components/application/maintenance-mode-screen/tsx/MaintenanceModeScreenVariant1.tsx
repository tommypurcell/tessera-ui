export type MaintenanceModeScreenVariant1Props = {
  title: string
  message: string
  /** Formatted ETA string, e.g. "2:30 PM PST". */
  eta: string
  statusPageUrl?: string
}

/**
 * Copy-and-own Tailwind component. Full-page scheduled-downtime notice with
 * a plain-text ETA and a status-page link — distinct from an error page,
 * which reports an unexpected failure rather than planned downtime.
 */
export function MaintenanceModeScreen({ title, message, eta, statusPageUrl }: MaintenanceModeScreenVariant1Props) {
  return (
    <div className="flex min-h-[24rem] items-center justify-center p-6">
      <div className="flex max-w-sm flex-col items-center text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085z"
            />
          </svg>
        </span>
        <h1 className="mt-5 text-xl font-semibold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-500">{message}</p>
        <div className="mt-5 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          Expected back online: <span className="text-gray-900">{eta}</span>
        </div>
        {statusPageUrl ? (
          <a href={statusPageUrl} className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-700">
            Check status page →
          </a>
        ) : null}
      </div>
    </div>
  )
}
