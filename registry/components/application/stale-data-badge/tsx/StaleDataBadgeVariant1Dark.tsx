export type StaleDataBadgeVariant1Props = {
  updatedAt: Date
  now?: Date
  staleAfterMinutes?: number
  onRefresh?: () => void
  isRefreshing?: boolean
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the stale
 * data badge.
 */
export function StaleDataBadge({ updatedAt, now = new Date(), staleAfterMinutes = 5, onRefresh, isRefreshing = false }: StaleDataBadgeVariant1Props) {
  const elapsedMinutes = Math.floor((now.getTime() - updatedAt.getTime()) / 60000)
  const isStale = elapsedMinutes >= staleAfterMinutes
  const label = elapsedMinutes < 1 ? 'just now' : `${elapsedMinutes}m ago`

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs ${
        isStale ? 'border-amber-800 bg-amber-500/10 text-amber-300' : 'border-gray-700 bg-gray-900 text-gray-400'
      }`}
    >
      <span aria-hidden="true" className={`size-1.5 rounded-full ${isStale ? 'bg-amber-400' : 'bg-emerald-400'}`} />
      Updated {label}
      <button
        type="button"
        onClick={onRefresh}
        aria-label="Refresh data"
        disabled={isRefreshing}
        className="inline-flex items-center text-current hover:opacity-70 disabled:opacity-40"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`size-3.5 ${isRefreshing ? 'animate-spin' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>
    </span>
  )
}
