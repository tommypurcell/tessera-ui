import type { HTMLAttributes } from 'react'
import type { ChatThreadMessage } from './ChatBubblesVariant2'

export type ChatBubblesVariant2DarkProps = HTMLAttributes<HTMLDivElement> & {
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
 * Dark-mode pairing for ChatBubblesVariant2. Pass a `messages` array to render your own conversation.
 */
export function ChatBubblesVariant2Dark({ className, messages = defaultMessages, ...props }: ChatBubblesVariant2DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex gap-3 p-4 ${index < messages.length - 1 ? 'border-b border-gray-800' : ''} ${
            message.from === 'sent' ? 'justify-end bg-gray-900' : ''
          }`}
        >
          {message.avatarUrl && (
            <img alt={`${message.senderName}'s avatar`} src={message.avatarUrl} className="size-9 shrink-0 rounded-full object-cover" />
          )}
          <div className={message.from === 'sent' ? 'text-right' : ''}>
            <p className="text-sm font-semibold text-gray-100">{message.senderName}</p>
            <p className="mt-0.5 text-sm text-gray-400">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
