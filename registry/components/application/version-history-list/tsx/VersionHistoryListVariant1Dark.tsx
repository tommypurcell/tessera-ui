export type Revision = {
  id: string
  authorName: string
  authorAvatarSrc: string
  timestamp: string
  isCurrent?: boolean
}

export type VersionHistoryListVariant1DarkProps = {
  revisions: Revision[]
  onViewDiff?: (revisionId: string) => void
  onRestore?: (revisionId: string) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Version history list adapted for dark surfaces —
 * author, relative timestamp, and either a "Current" badge or View diff/Restore actions.
 */
export function VersionHistoryListVariant1Dark({
  revisions,
  onViewDiff,
  onRestore,
  className,
}: VersionHistoryListVariant1DarkProps) {
  return (
    <ul className={`divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      {revisions.map((revision) => (
        <li key={revision.id} className="flex items-center gap-3 p-4">
          <img src={revision.authorAvatarSrc} alt="" className="size-8 shrink-0 rounded-full" />

          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white">{revision.authorName}</p>
            <p className="text-xs text-gray-500">{revision.timestamp}</p>
          </div>

          {revision.isCurrent ? (
            <span className="shrink-0 rounded-full bg-blue-950 px-2 py-0.5 text-xs font-medium text-blue-300">
              Current
            </span>
          ) : (
            <div className="flex shrink-0 items-center gap-3 text-xs font-medium">
              <button
                type="button"
                onClick={() => onViewDiff?.(revision.id)}
                className="text-blue-400 hover:text-blue-300"
              >
                View diff
              </button>
              <button
                type="button"
                onClick={() => onRestore?.(revision.id)}
                className="text-gray-400 hover:text-gray-200"
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
