import { useState } from 'react'

export type ChannelHeaderVariant1DarkProps = {
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
 * Copy-and-own Tailwind component. Dark-surface variant of the channel header.
 */
export function ChannelHeaderVariant1Dark({
  channelName,
  subscriberCount,
  videoCount,
  initialSubscribed = false,
  onSubscribeChange,
  className,
}: ChannelHeaderVariant1DarkProps) {
  const [subscribed, setSubscribed] = useState(initialSubscribed)

  function toggleSubscribed() {
    const next = !subscribed
    setSubscribed(next)
    onSubscribeChange?.(next)
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      <div className="h-24 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />

      <div className="flex items-end justify-between px-5">
        <div aria-hidden="true" className="-mt-8 size-16 shrink-0 rounded-full border-4 border-gray-950 bg-gradient-to-br from-cyan-400 to-blue-500" />
      </div>

      <div className="flex items-start justify-between gap-4 px-5 pt-3 pb-5">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-white">{channelName}</h3>
          <p className="mt-0.5 text-sm text-gray-400">
            {formatCount(subscriberCount)} subscribers &middot; {videoCount} videos
          </p>
        </div>

        <button
          type="button"
          onClick={toggleSubscribed}
          aria-pressed={subscribed}
          className={
            subscribed
              ? 'shrink-0 rounded-full border border-gray-700 bg-gray-950 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-900'
              : 'shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200'
          }
        >
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  )
}
