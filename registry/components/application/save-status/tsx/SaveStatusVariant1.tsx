export type SaveStatus = 'saving' | 'saved' | 'failed'

export type SaveStatusVariant1Props = {
  status: SaveStatus
  savingLabel?: string
  savedLabel?: string
  failedLabel?: string
  onRetry?: () => void
}

/**
 * Copy-and-own Tailwind component. Auto-updating inline status text for autosave
 * flows: a spinner while saving, a checkmark once saved, or an error with a retry
 * action on failure. Drive `status` from your own save-request state.
 */
export function SaveStatus({
  status,
  savingLabel = 'Saving…',
  savedLabel = 'Saved',
  failedLabel = 'Failed to save',
  onRetry,
}: SaveStatusVariant1Props) {
  if (status === 'saving') {
    return (
      <div role="status" className="flex items-center gap-1.5 text-sm text-gray-500">
        <svg aria-hidden="true" className="size-3.5 animate-spin text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        {savingLabel}
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div role="status" className="flex items-center gap-1.5 text-sm text-red-600">
        <svg aria-hidden="true" className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
        {failedLabel}
        <button type="button" onClick={onRetry} className="font-medium text-red-700 underline hover:text-red-800">
          Retry
        </button>
      </div>
    )
  }

  return (
    <div role="status" className="flex items-center gap-1.5 text-sm text-gray-500">
      <svg aria-hidden="true" className="size-3.5 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      {savedLabel}
    </div>
  )
}
