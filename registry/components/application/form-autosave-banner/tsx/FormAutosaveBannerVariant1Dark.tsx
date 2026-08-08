export type FormAutosaveBannerVariant1DarkProps = {
  status: 'unsaved' | 'saved'
  savedLabel?: string
  onSave?: () => void
  onDiscard?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Sticky-friendly form status
 * bar: an amber "unsaved changes" state with Discard/Save actions, or a neutral
 * "all saved" confirmation with a relative timestamp.
 */
export function FormAutosaveBanner({ status, savedLabel = 'a few seconds ago', onSave, onDiscard, className }: FormAutosaveBannerVariant1DarkProps) {
  if (status === 'saved') {
    return (
      <div className={`flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 ${className ?? ''}`}>
        <svg className="h-4 w-4 shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm text-gray-400">All changes saved &middot; {savedLabel}</p>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-between gap-4 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 ${className ?? ''}`}>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
        <p className="text-sm font-medium text-amber-300">You have unsaved changes</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={onDiscard}
          className="rounded-md border border-amber-500/30 bg-gray-900 px-3 py-1.5 text-xs font-medium text-amber-300 shadow-sm hover:bg-gray-800"
        >
          Discard
        </button>
        <button type="button" onClick={onSave} className="rounded-md bg-amber-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-amber-400">
          Save changes
        </button>
      </div>
    </div>
  )
}
