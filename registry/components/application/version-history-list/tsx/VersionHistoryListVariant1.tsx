export type Revision = {
  id: string
  authorName: string
  authorAvatarSrc: string
  timestamp: string
  isCurrent?: boolean
}

export type VersionHistoryListVariant1Props = {
  revisions: Revision[]
  onViewDiff?: (revisionId: string) => void
  onRestore?: (revisionId: string) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Version history list — author, relative timestamp, and
 * either a "Current" badge or View diff/Restore actions per revision.
 */
export function VersionHistoryListVariant1({
  revisions,
  onViewDiff,
  onRestore,
  className,
}: VersionHistoryListVariant1Props) {
  return (
    <ul className={`divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      {revisions.map((revision) => (
        <li key={revision.id} className="flex items-center gap-3 p-4">
          <img src={revision.authorAvatarSrc} alt="" className="size-8 shrink-0 rounded-full" />

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">{revision.authorName}</p>
            <p className="text-xs text-gray-500">{revision.timestamp}</p>
          </div>

          {revision.isCurrent ? (
            <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
              Current
            </span>
          ) : (
            <div className="flex shrink-0 items-center gap-3 text-xs font-medium">
              <button
                type="button"
                onClick={() => onViewDiff?.(revision.id)}
                className="text-blue-600 hover:text-blue-700"
              >
                View diff
              </button>
              <button
                type="button"
                onClick={() => onRestore?.(revision.id)}
                className="text-gray-500 hover:text-gray-700"
              >
                Restore
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
