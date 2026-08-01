import type { HTMLAttributes } from 'react'

export type ChatThreadMessage = {
  text: string
  senderName: string
  avatarUrl?: string
  from: 'sent' | 'received'
}

export type ChatBubblesVariant2Props = HTMLAttributes<HTMLDivElement> & {
  messages?: ChatThreadMessage[]
}

const defaultMessages: ChatThreadMessage[] = [
  {
    text: 'Are we still on for the design review at 3?',
    senderName: 'Maya Torres',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=160',
    from: 'received',
  },
  {
    text: 'I can share my screen if that helps.',
    senderName: 'Maya Torres',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=160',
    from: 'received',
  },
  { text: 'Yes, still on. See you then!', senderName: 'You', from: 'sent' },
]

/**
 * Boxed support-widget thread. Pass a `messages` array (with senderName/avatarUrl) to render your own conversation.
 */
export function ChatBubblesVariant2({ className, messages = defaultMessages, ...props }: ChatBubblesVariant2Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex gap-3 p-4 ${index < messages.length - 1 ? 'border-b border-gray-100' : ''} ${
            message.from === 'sent' ? 'justify-end bg-gray-50' : ''
          }`}
        >
          {message.avatarUrl && (
            <img alt={`${message.senderName}'s avatar`} src={message.avatarUrl} className="size-9 shrink-0 rounded-full object-cover" />
          )}
          <div className={message.from === 'sent' ? 'text-right' : ''}>
            <p className="text-sm font-semibold text-gray-950">{message.senderName}</p>
            <p className="mt-0.5 text-sm text-gray-600">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
