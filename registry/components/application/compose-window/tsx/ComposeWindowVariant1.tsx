import { useState } from 'react'

export type ComposeWindowVariant1Props = {
  to?: string
  subject?: string
  body?: string
  onMinimize?: () => void
  onClose?: () => void
  onDelete?: () => void
  onSend?: (fields: { to: string; subject: string; body: string }) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Floating, dockable email compose window
 * with a dark title bar (minimize/close), To/Subject fields, a body
 * textarea, and a footer with Send and delete-draft actions. Distinct from
 * Comment Composer, which is an inline reply box attached to a thread rather
 * than a standalone floating window with its own To/Subject fields.
 */
export function ComposeWindow({
  to: initialTo = '',
  subject: initialSubject = '',
  body: initialBody = '',
  onMinimize,
  onClose,
  onDelete,
  onSend,
  className,
}: ComposeWindowVariant1Props) {
  const [to, setTo] = useState(initialTo)
  const [subject, setSubject] = useState(initialSubject)
  const [body, setBody] = useState(initialBody)

  return (
    <div className={`flex w-96 flex-col overflow-hidden rounded-t-lg border border-gray-200 bg-white shadow-xl ${className ?? ''}`}>
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2.5">
        <p className="text-sm font-medium text-white">New message</p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Minimize"
            onClick={onMinimize}
            className="flex size-6 items-center justify-center rounded text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex size-6 items-center justify-center rounded text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="border-b border-gray-100 px-4 py-2">
        <div className="flex items-center gap-2">
          <label htmlFor="compose-to" className="w-14 shrink-0 text-xs text-gray-400">To</label>
          <input
            id="compose-to"
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border-0 p-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="border-b border-gray-100 px-4 py-2">
        <div className="flex items-center gap-2">
          <label htmlFor="compose-subject" className="w-14 shrink-0 text-xs text-gray-400">Subject</label>
          <input
            id="compose-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border-0 p-0 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <textarea
        aria-label="Message body"
        rows={7}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your message..."
        className="resize-none border-0 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
      />

      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-2.5">
        <button
          type="button"
          onClick={() => onSend?.({ to, subject, body })}
          className="rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Send
        </button>
        <button
          type="button"
          aria-label="Delete draft"
          onClick={onDelete}
          className="flex size-7 items-center justify-center rounded text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  )
}
