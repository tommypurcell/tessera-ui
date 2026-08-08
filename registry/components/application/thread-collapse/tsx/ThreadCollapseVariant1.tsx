import { useState } from 'react'

export type CollapsedMessage = {
  id: string
  sender: string
  preview: string
  date: string
}

export type ThreadCollapseVariant1Props = {
  subject: string
  collapsedMessages: CollapsedMessage[]
  latestSender: string
  latestDate: string
  latestBody: string
  className?: string
}

/**
 * Copy-and-own Tailwind component. Email-style quoted-reply chain: older
 * messages collapse to a thin one-line summary bar (sender + preview + date)
 * that expands individually, with an "Expand all" control, and the newest
 * message always shown in full. Distinct from Comment Thread, which shows
 * nested replies with avatars and always-visible bodies rather than a
 * collapsed quoted-email chain.
 */
export function ThreadCollapse({
  subject,
  collapsedMessages,
  latestSender,
  latestDate,
  latestBody,
  className,
}: ThreadCollapseVariant1Props) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const expandAll = () => setExpandedIds(new Set(collapsedMessages.map((m) => m.id)))

  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`}>
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <p className="text-sm font-semibold text-gray-900">{subject}</p>
        <button type="button" onClick={expandAll} className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
          Expand all
        </button>
      </div>

      <ol className="divide-y divide-gray-100">
        {collapsedMessages.map((message) => {
          const isExpanded = expandedIds.has(message.id)
          return (
            <li key={message.id}>
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`thread-msg-${message.id}`}
                onClick={() => toggle(message.id)}
                className="flex w-full items-center gap-3 px-5 py-2.5 text-left hover:bg-gray-50"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-3.5 shrink-0 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span className="min-w-0 flex-1 truncate text-xs text-gray-500">
                  <span className="font-medium text-gray-700">{message.sender}</span> — {message.preview}
                </span>
                <span className="shrink-0 text-xs text-gray-400">{message.date}</span>
              </button>
              {isExpanded ? (
                <div id={`thread-msg-${message.id}`} className="px-5 pb-4 pl-11">
                  <p className="text-sm text-gray-700">{message.preview}</p>
                </div>
              ) : null}
            </li>
          )
        })}

        <li>
          <div className="px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{latestSender}</span>
              <span className="text-xs text-gray-400">{latestDate}</span>
            </div>
            <p className="mt-1.5 text-sm text-gray-700">{latestBody}</p>
          </div>
        </li>
      </ol>
    </div>
  )
}
