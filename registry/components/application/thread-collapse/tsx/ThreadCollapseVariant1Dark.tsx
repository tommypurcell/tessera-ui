import { useState } from 'react'

export type CollapsedMessage = {
  id: string
  sender: string
  preview: string
  date: string
}

export type ThreadCollapseVariant1DarkProps = {
  subject: string
  collapsedMessages: CollapsedMessage[]
  latestSender: string
  latestDate: string
  latestBody: string
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Email-style quoted-reply
 * chain: older messages collapse to a thin one-line summary bar that expands
 * individually, with an "Expand all" control, and the newest message always
 * shown in full.
 */
export function ThreadCollapse({
  subject,
  collapsedMessages,
  latestSender,
  latestDate,
  latestBody,
  className,
}: ThreadCollapseVariant1DarkProps) {
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
    <div className={`rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3">
        <p className="text-sm font-semibold text-gray-100">{subject}</p>
        <button type="button" onClick={expandAll} className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
          Expand all
        </button>
      </div>

      <ol className="divide-y divide-gray-800">
        {collapsedMessages.map((message) => {
          const isExpanded = expandedIds.has(message.id)
          return (
            <li key={message.id}>
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`thread-msg-${message.id}`}
                onClick={() => toggle(message.id)}
                className="flex w-full items-center gap-3 px-5 py-2.5 text-left hover:bg-gray-800/50"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`size-3.5 shrink-0 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <span className="min-w-0 flex-1 truncate text-xs text-gray-400">
                  <span className="font-medium text-gray-300">{message.sender}</span> — {message.preview}
                </span>
                <span className="shrink-0 text-xs text-gray-500">{message.date}</span>
              </button>
              {isExpanded ? (
                <div id={`thread-msg-${message.id}`} className="px-5 pb-4 pl-11">
                  <p className="text-sm text-gray-300">{message.preview}</p>
                </div>
              ) : null}
            </li>
          )
        })}

        <li>
          <div className="px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-100">{latestSender}</span>
              <span className="text-xs text-gray-500">{latestDate}</span>
            </div>
            <p className="mt-1.5 text-sm text-gray-300">{latestBody}</p>
          </div>
        </li>
      </ol>
    </div>
  )
}
