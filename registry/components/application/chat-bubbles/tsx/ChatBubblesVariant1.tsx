import type { HTMLAttributes } from 'react'

export type ChatMessage = {
  text: string
  from: 'sent' | 'received'
}

export type ChatBubblesVariant1Props = HTMLAttributes<HTMLDivElement> & {
  messages?: ChatMessage[]
}

const defaultMessages: ChatMessage[] = [
  { text: 'Quick question — did the invoice go out for the Meridian account yet?', from: 'received' },
  { text: 'Not yet, sending it this afternoon.', from: 'sent' },
  { text: 'Perfect, no rush. Just wanted to close the loop.', from: 'received' },
]

/**
 * Minimal, squared message cards. Pass a `messages` array to render your own conversation.
 */
export function ChatBubblesVariant1({ className, messages = defaultMessages, ...props }: ChatBubblesVariant1Props) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.from === 'sent' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={
              message.from === 'sent'
                ? 'max-w-[75%] rounded-md border border-gray-900 bg-gray-900 px-3.5 py-2 text-sm text-white'
                : 'max-w-[75%] rounded-md border border-gray-200 bg-white px-3.5 py-2 text-sm text-gray-800 shadow-sm'
            }
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}
