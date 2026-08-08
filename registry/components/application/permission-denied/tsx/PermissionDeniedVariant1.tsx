export type PermissionDeniedVariant1Props = {
  title?: string
  reason: React.ReactNode
  requested?: boolean
  onRequestAccess?: () => void
}

/**
 * Copy-and-own Tailwind component. Locked panel explaining why access was
 * denied and offering a request-access action. Set `requested` once the
 * request has been sent to switch to a confirmed, disabled pending state.
 */
export function PermissionDenied({
  title = "You don't have access to this project",
  reason,
  requested = false,
  onRequestAccess,
}: PermissionDeniedVariant1Props) {
  if (requested) {
    return (
      <div role="status" className="flex max-w-sm flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-emerald-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-4 text-base font-semibold text-gray-900">Access request sent</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{reason}</p>
        <button type="button" disabled className="mt-6 cursor-not-allowed rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400">
          Request sent
        </button>
      </div>
    )
  }

  return (
    <div role="alert" className="flex max-w-sm flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
      <div className="flex size-12 items-center justify-center rounded-full bg-gray-100">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      </div>
      <h2 className="mt-4 text-base font-semibold text-gray-900">{title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{reason}</p>
      <button
        type="button"
        onClick={onRequestAccess}
        className="mt-6 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
      >
        Request access
      </button>
    </div>
  )
}
