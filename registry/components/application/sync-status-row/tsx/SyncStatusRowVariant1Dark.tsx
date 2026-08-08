export type SyncStatusRowState = 'syncing' | 'success' | 'error'

export type SyncStatusRowVariant1DarkProps = {
  state: SyncStatusRowState
  lastSyncedLabel: string
  onSyncNow?: () => void
}

const stateText: Record<SyncStatusRowState, string> = {
  syncing: 'Syncing…',
  success: 'Synced',
  error: 'Sync failed',
}

/**
 * Copy-and-own Tailwind component. Last-synced status row adapted for
 * dark surfaces, with a real three-state icon (spinning/success/error)
 * and a manual "Sync now" action.
 */
export function SyncStatusRowDark({ state, lastSyncedLabel, onSyncNow }: SyncStatusRowVariant1DarkProps) {
  return (
    <div role="status" className="flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm">
      {state === 'syncing' ? (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 animate-spin text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ) : state === 'success' ? (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.75c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      )}

      <span className="text-gray-300">
        {stateText[state]}
        {state !== 'syncing' ? <span className="text-gray-500"> · {lastSyncedLabel}</span> : null}
      </span>

      <button
        type="button"
        onClick={onSyncNow}
        disabled={state === 'syncing'}
        className="ml-auto text-xs font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:text-gray-700"
      >
        Sync now
      </button>
    </div>
  )
}
