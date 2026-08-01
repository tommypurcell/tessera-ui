import type { HTMLAttributes } from 'react'
import type { ChatMessage } from './ChatBubblesVariant1'

export type ChatBubblesVariant1DarkProps = HTMLAttributes<HTMLDivElement> & {
  messages?: ChatMessage[]
}

const defaultMessages: ChatMessage[] = [
  { text: 'Quick question — did the invoice go out for the Meridian account yet?', from: 'received' },
  { text: 'Not yet, sending it this afternoon.', from: 'sent' },
  { text: 'Perfect, no rush. Just wanted to close the loop.', from: 'received' },
]

/**
 * Dark-mode pairing for ChatBubblesVariant1. Pass a `messages` array to render your own conversation.
 */
export function ChatBubblesVariant1Dark({ className, messages = defaultMessages, ...props }: ChatBubblesVariant1DarkProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.from === 'sent' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={
              message.from === 'sent'
                ? 'max-w-[75%] rounded-md border border-gray-100 bg-gray-100 px-3.5 py-2 text-sm text-gray-950'
                : 'max-w-[75%] rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm text-gray-100'
            }
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}
