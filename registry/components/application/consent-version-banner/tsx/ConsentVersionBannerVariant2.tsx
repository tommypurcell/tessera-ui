export type ConsentVersionBannerVariant2Props = {
  title: string
  versionLabel: string
  effectiveDateLabel: string
  changes: string[]
  onRemindLater?: () => void
  onAccept?: () => void
}

/**
 * Copy-and-own Tailwind component. Updated-policy card with an inline
 * changelog list and Remind me later / Accept actions, for a fuller
 * re-consent flow than the compact banner in Variant 1.
 */
export function ConsentVersionBanner({
  title,
  versionLabel,
  effectiveDateLabel,
  changes,
  onRemindLater,
  onAccept,
}: ConsentVersionBannerVariant2Props) {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">{versionLabel}</span>
      </div>
      <p className="mt-1 text-xs text-gray-500">{effectiveDateLabel} — here's what changed:</p>

      <ul className="mt-3 flex flex-col gap-2">
        {changes.map((change) => (
          <li key={change} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gray-400" aria-hidden="true" />
            {change}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={onRemindLater}
          className="rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Remind me later
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
        >
          Accept and continue
        </button>
      </div>
    </div>
  )
}
