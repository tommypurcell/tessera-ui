export type OptimisticRowStatus = 'sent' | 'pending' | 'failed'

export type OptimisticRow = {
  id: string
  avatarInitials: string
  title: string
  status: OptimisticRowStatus
  timestampLabel?: string
  onRetry?: () => void
  onDismiss?: () => void
}

export type OptimisticPendingRowVariant1Props = {
  rows: OptimisticRow[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Optimistic-update list row: an item
 * added to the list immediately on submit, rendered dimmed with a spinner
 * and "Sending…" while the request is in flight, settling to normal on
 * success or to an error state with Retry/Dismiss on failure. Distinct from
 * Inline Add Row, which is the always-present composer row used to create a
 * new item, not the transient in-flight state of an item already submitted.
 */
export function OptimisticPendingRow({ rows, className }: OptimisticPendingRowVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`}>
      <ul className="divide-y divide-gray-100">
        {rows.map((row) => (
          <li
            key={row.id}
            aria-live={row.status !== 'sent' ? 'polite' : undefined}
            className={row.status === 'pending' ? 'flex items-center gap-3 px-4 py-3 opacity-60' : 'flex items-center gap-3 px-4 py-3'}
          >
            {row.status === 'failed' ? (
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </span>
            ) : (
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
                {row.avatarInitials}
              </span>
            )}

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{row.title}</p>
              {row.status === 'pending' ? (
                <p className="flex items-center gap-1.5 text-xs text-gray-400">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-3 animate-spin text-gray-400">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"></path>
                  </svg>
                  Sending&hellip;
                </p>
              ) : row.status === 'failed' ? (
                <p className="text-xs text-rose-600">Failed to send</p>
              ) : (
                <p className="text-xs text-gray-400">{row.timestampLabel}</p>
              )}
            </div>

            {row.status === 'failed' ? (
              <div className="flex shrink-0 items-center gap-2">
                <button type="button" onClick={row.onRetry} className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                  Retry
                </button>
                <button type="button" aria-label="Dismiss failed message" onClick={row.onDismiss} className="text-xs font-medium text-gray-400 hover:text-gray-600">
                  Dismiss
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
