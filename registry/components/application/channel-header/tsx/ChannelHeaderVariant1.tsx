import { useState } from 'react'

export type ChannelHeaderVariant1Props = {
  channelName: string
  subscriberCount: number
  videoCount: number
  initialSubscribed?: boolean
  onSubscribeChange?: (subscribed: boolean) => void
  className?: string
}

function formatCount(count: number) {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K`
  return `${count}`
}

/**
 * Copy-and-own Tailwind component. Channel header — gradient banner, avatar, formatted
 * subscriber/video counts, and a real toggling subscribe button whose label and style
 * reflect actual subscribed state rather than a static "Subscribe" label.
 */
export function ChannelHeaderVariant1({
  channelName,
  subscriberCount,
  videoCount,
  initialSubscribed = false,
  onSubscribeChange,
  className,
}: ChannelHeaderVariant1Props) {
  const [subscribed, setSubscribed] = useState(initialSubscribed)

  function toggleSubscribed() {
    const next = !subscribed
    setSubscribed(next)
    onSubscribeChange?.(next)
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      <div className="h-24 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

      <div className="flex items-end justify-between px-5">
        <div aria-hidden="true" className="-mt-8 size-16 shrink-0 rounded-full border-4 border-white bg-gradient-to-br from-cyan-400 to-blue-500" />
      </div>

      <div className="flex items-start justify-between gap-4 px-5 pt-3 pb-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-gray-900">{channelName}</h3>
          <p className="mt-0.5 text-sm text-gray-500">
            {formatCount(subscriberCount)} subscribers &middot; {videoCount} videos
          </p>
        </div>

        <button
          type="button"
          onClick={toggleSubscribed}
          aria-pressed={subscribed}
          className={
            subscribed
              ? 'shrink-0 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50'
              : 'shrink-0 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700'
          }
        >
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  )
}
