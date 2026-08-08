export type ConsentVersionBannerVariant1Props = {
  title: string
  effectiveDateLabel: string
  onViewChanges?: () => void
  onAccept?: () => void
}

/**
 * Copy-and-own Tailwind component. Floating bottom banner announcing an
 * updated policy version with a "View changes" link and an Accept action —
 * distinct from application-consent-checklist, which collects initial
 * agreement rather than re-consent to an updated document.
 */
export function ConsentVersionBanner({
  title,
  effectiveDateLabel,
  onViewChanges,
  onAccept,
}: ConsentVersionBannerVariant1Props) {
  return (
    <div className="flex w-full max-w-lg items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      <div className="flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-0.5 size-5 shrink-0 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-0.5 text-xs text-gray-500">
            {effectiveDateLabel}{' '}
            <button type="button" onClick={onViewChanges} className="font-medium text-blue-600 hover:text-blue-700">
              View changes
            </button>
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onAccept}
        className="shrink-0 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
      >
        Accept
      </button>
    </div>
  )
}
