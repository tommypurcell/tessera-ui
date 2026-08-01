import type { HTMLAttributes, ReactNode } from 'react'

export type StatusMessage = {
  text: string
  status: 'success' | 'warning' | 'error' | 'info'
}

export type ChatBubblesVariant4Props = HTMLAttributes<HTMLDivElement> & {
  messages?: StatusMessage[]
}

const defaultMessages: StatusMessage[] = [
  { text: 'Deployment succeeded — all checks passed.', status: 'success' },
  { text: 'Heads up: response times are elevated.', status: 'warning' },
  { text: 'Build failed on the payments service.', status: 'error' },
  { text: 'FYI, on-call rotation switches at midnight.', status: 'info' },
]

const statusStyles: Record<StatusMessage['status'], string> = {
  success: 'bg-emerald-50 text-emerald-800',
  warning: 'bg-amber-50 text-amber-800',
  error: 'bg-red-50 text-red-800',
  info: 'bg-blue-50 text-blue-800',
}

const statusIcons: Record<StatusMessage['status'], ReactNode> = {
  success: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  warning: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  error: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  ),
  info: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  ),
}

/**
 * Icon-led system status feed. Pass a `messages` array (text/status) to render your own activity log.
 */
export function ChatBubblesVariant4({ className, messages = defaultMessages, ...props }: ChatBubblesVariant4Props) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div key={index} className={`flex items-start gap-2.5 rounded-lg px-4 py-3 text-sm ${statusStyles[message.status]}`}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mt-0.5 size-4 shrink-0">
            {statusIcons[message.status]}
          </svg>
          {message.text}
        </div>
      ))}
    </div>
  )
}
