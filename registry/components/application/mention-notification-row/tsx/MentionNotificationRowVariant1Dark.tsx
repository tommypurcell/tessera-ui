export type MentionNotificationRowVariant1DarkProps = {
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
export function MentionNotificationRowDark({
  actorInitials,
  actorName,
  contextLabel,
  snippet,
  timestamp,
  unread = true,
  href = '#',
}: MentionNotificationRowVariant1DarkProps) {
  return (
    <a href={href} className="flex w-full max-w-md items-start gap-3 rounded-lg border border-gray-700 bg-gray-900 p-3 hover:bg-gray-800">
      <span className="relative shrink-0">
        <span className="flex size-9 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-900">{actorInitials}</span>
        {unread ? <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-blue-300 ring-2 ring-gray-900" /> : null}
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm text-white">
          <span className="font-semibold">{actorName}</span> mentioned you in <span className="font-medium">{contextLabel}</span>
        </p>
        <p className="mt-1 truncate rounded-md bg-gray-800 px-2.5 py-1.5 text-xs text-gray-300">&ldquo;{snippet}&rdquo;</p>
        <p className="mt-1.5 text-xs text-gray-500">{timestamp}</p>
      </div>
    </a>
  )
}
