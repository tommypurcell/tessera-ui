import type { HTMLAttributes } from 'react'
import type { SmsThreadMessage } from './ChatBubblesVariant5'

export type ChatBubblesVariant5DarkProps = HTMLAttributes<HTMLDivElement> & {
  messages?: SmsThreadMessage[]
}

const defaultMessages: SmsThreadMessage[] = [
  { text: 'Running about 15 minutes behind, kicking off the drive now.', from: 'received', timestampDivider: 'Yesterday 8:34 PM' },
  { text: "No rush, we haven't sat down yet", from: 'sent' },
  { text: "Table's ready whenever you get here", from: 'received', timestampDivider: 'Today 10:36 AM' },
  { text: 'Pulling in now, two minutes out', from: 'sent' },
  { text: 'See you in a sec', from: 'sent', receipt: 'Delivered' },
]

const bubbleBase = 'relative max-w-[75%] rounded-[18px] px-3.5 py-2 text-[15px] leading-snug before:absolute before:bottom-0 before:size-5'
const receivedBubble =
  'rounded-bl-[4px] bg-gray-800 text-gray-100 before:left-[-7px] before:bg-gray-800 before:[mask-image:radial-gradient(circle_10px_at_20px_0,transparent_99%,#000_100%)]'
const sentBubble =
  'rounded-br-[4px] bg-blue-500 text-white before:right-[-7px] before:bg-blue-500 before:[mask-image:radial-gradient(circle_10px_at_0_0,transparent_99%,#000_100%)]'

/**
 * Dark-mode pairing for ChatBubblesVariant5. Pass a `messages` array to render your own conversation.
 */
export function ChatBubblesVariant5Dark({ className, messages = defaultMessages, ...props }: ChatBubblesVariant5DarkProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div key={index}>
          {message.timestampDivider && (
            <p className="my-2 text-center text-xs font-medium text-gray-500">{message.timestampDivider}</p>
          )}
          <div className={`flex ${message.from === 'sent' ? 'justify-end' : 'justify-start'}`}>
            <div className={`${bubbleBase} ${message.from === 'sent' ? sentBubble : receivedBubble}`}>{message.text}</div>
          </div>
          {message.receipt && <p className="mt-1 pr-1 text-right text-xs text-gray-500">{message.receipt}</p>}
        </div>
      ))}
    </div>
  )
}
