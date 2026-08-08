import { useState } from 'react'

export type FollowState = 'not-following' | 'following' | 'requested'

export type FollowButtonVariant1DarkProps = {
  state: FollowState
  onFollow?: () => void
  onUnfollow?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Stateful follow button:
 * "Follow", "Following" (swaps to red "Unfollow" on hover/focus), and a
 * disabled "Requested" state for pending follow requests.
 */
export function FollowButton({ state, onFollow, onUnfollow, className }: FollowButtonVariant1DarkProps) {
  const [hovering, setHovering] = useState(false)

  if (state === 'not-following') {
    return (
      <button
        type="button"
        onClick={onFollow}
        className={`rounded-md bg-indigo-500 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 ${className ?? ''}`}
      >
        Follow
      </button>
    )
  }

  if (state === 'requested') {
    return (
      <button
        type="button"
        disabled
        className={`w-24 cursor-not-allowed rounded-md border border-gray-800 bg-gray-900/60 px-4 py-1.5 text-sm font-medium text-gray-600 ${className ?? ''}`}
      >
        Requested
      </button>
    )
  }

  return (
    <button
      type="button"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
      onClick={onUnfollow}
      className={
        hovering
          ? `w-24 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 shadow-sm ${className ?? ''}`
          : `w-24 rounded-md border border-gray-700 bg-gray-900 px-4 py-1.5 text-sm font-medium text-gray-200 shadow-sm ${className ?? ''}`
      }
    >
      {hovering ? 'Unfollow' : 'Following'}
    </button>
  )
}
