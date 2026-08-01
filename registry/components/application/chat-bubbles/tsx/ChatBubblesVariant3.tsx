import type { HTMLAttributes } from 'react'

export type TeamChatMessage = {
  text: string
  senderName: string
  initials: string
  color: string
  time: string
  footer?: string
}

export type ChatBubblesVariant3Props = HTMLAttributes<HTMLDivElement> & {
  messages?: TeamChatMessage[]
}

const defaultMessages: TeamChatMessage[] = [
  { text: 'The staging deploy just went out 🚀', senderName: 'Priya Shah', initials: 'PS', color: 'bg-violet-500', time: '9:41 AM' },
  {
    text: "Great, I'll run the smoke tests now.",
    senderName: 'You',
    initials: 'YO',
    color: 'bg-emerald-500',
    time: '9:42 AM',
    footer: 'Seen by 3 people',
  },
]

/**
 * Colorful team-chat thread. Pass a `messages` array (senderName/initials/color/time) to render your own conversation.
 */
export function ChatBubblesVariant3({ className, messages = defaultMessages, ...props }: ChatBubblesVariant3Props) {
  return (
    <div className={`flex flex-col gap-4 bg-gray-950 p-6 ${className ?? ''}`} {...props}>
      {messages.map((message, index) => (
        <div key={index} className="flex gap-3">
          <div className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white ${message.color}`}>
            {message.initials}
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">{message.senderName}</span>
              <time className="text-xs text-gray-500">{message.time}</time>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-300">{message.text}</p>
            {message.footer && <span className="mt-1 inline-block text-xs text-gray-600">{message.footer}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}
