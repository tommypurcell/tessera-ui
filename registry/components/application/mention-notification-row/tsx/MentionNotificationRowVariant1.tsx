export type MentionNotificationRowVariant1Props = {
  actorInitials: string
  actorName: string
  contextLabel: string
  snippet: string
  timestamp: string
  unread?: boolean
  href?: string
}

/**
 * Copy-and-own Tailwind component. "X mentioned you in Y" notification row
 * with an avatar, a quoted message snippet, a relative timestamp, and an
 * unread dot on the avatar. The whole row is a link to jump to the mention.
 */
export function MentionNotificationRow({
  actorInitials,
  actorName,
  contextLabel,
  snippet,
  timestamp,
  unread = true,
  href = '#',
}: MentionNotificationRowVariant1Props) {
  return (
    <a href={href} className="flex w-full max-w-md items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">
      <span className="relative shrink-0">
        <span className="flex size-9 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">{actorInitials}</span>
        {unread ? <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-blue-600 ring-2 ring-white" /> : null}
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-gray-900">
          <span className="font-semibold">{actorName}</span> mentioned you in <span className="font-medium">{contextLabel}</span>
        </p>
        <p className="mt-1 truncate rounded-md bg-gray-50 px-2.5 py-1.5 text-xs text-gray-600">&ldquo;{snippet}&rdquo;</p>
        <p className="mt-1.5 text-xs text-gray-400">{timestamp}</p>
      </div>
    </a>
  )
}
