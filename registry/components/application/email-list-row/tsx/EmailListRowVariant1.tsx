export type EmailListRowVariant1Props = {
  sender: string
  subject: string
  snippet: string
  timestamp: string
  unread?: boolean
  starred?: boolean
  hasAttachment?: boolean
  href?: string
  onToggleStar?: () => void
}

/**
 * Copy-and-own Tailwind component. Inbox row with an unread dot, a toggleable
 * star, sender/subject/snippet, a timestamp, and an attachment indicator. The
 * whole row links to the message; the star button stops its own click from
 * bubbling to the row link in your integration.
 */
export function EmailListRow({ sender, subject, snippet, timestamp, unread = true, starred = false, hasAttachment = false, href = '#', onToggleStar }: EmailListRowVariant1Props) {
  return (
    <a href={href} className="flex w-full max-w-md items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">
      {unread ? <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue-600" /> : <span className="size-2 shrink-0" />}

      <button
        type="button"
        aria-label={starred ? 'Unstar this email' : 'Star this email'}
        aria-pressed={starred}
        onClick={(event) => {
          event.preventDefault()
          onToggleStar?.()
        }}
        className={`shrink-0 hover:text-amber-500 ${starred ? 'text-amber-400' : 'text-gray-300'}`}
      >
        <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L10 18.354l-4.647 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <p className={`truncate text-sm ${unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>{sender}</p>
          <span className="shrink-0 text-xs text-gray-400">{timestamp}</span>
        </div>
        <p className={`truncate text-sm ${unread ? 'text-gray-900' : 'text-gray-600'}`}>{subject}</p>
        <p className="truncate text-xs text-gray-500">{snippet}</p>
      </div>

      {hasAttachment ? (
        <svg aria-hidden="true" className="size-4 shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
          />
        </svg>
      ) : null}
    </a>
  )
}
