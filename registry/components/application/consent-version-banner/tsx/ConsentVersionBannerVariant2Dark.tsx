export type ConsentVersionBannerVariant2DarkProps = {
  title: string
  versionLabel: string
  effectiveDateLabel: string
  changes: string[]
  onRemindLater?: () => void
  onAccept?: () => void
}

/**
 * Copy-and-own Tailwind component. Updated-policy card with an inline
 * changelog list, adapted for dark surfaces.
 */
export function ConsentVersionBanner({
  title,
  versionLabel,
  effectiveDateLabel,
  changes,
  onRemindLater,
  onAccept,
}: ConsentVersionBannerVariant2DarkProps) {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">{title}</h2>
        <span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-medium text-blue-300">
          {versionLabel}
        </span>
      </div>
      <p className="mt-1 text-xs text-gray-400">{effectiveDateLabel} — here's what changed:</p>

      <ul className="mt-3 flex flex-col gap-2">
        {changes.map((change) => (
          <li key={change} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gray-500" aria-hidden="true" />
            {change}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-end gap-3 border-t border-gray-800 pt-4">
        <button
          type="button"
          onClick={onRemindLater}
          className="rounded-md px-3.5 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800"
        >
          Remind me later
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
        >
          Accept and continue
        </button>
      </div>
    </div>
  )
}
