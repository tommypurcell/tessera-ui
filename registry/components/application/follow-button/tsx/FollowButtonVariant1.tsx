import { useState } from 'react'

export type FollowState = 'not-following' | 'following' | 'requested'

export type FollowButtonVariant1Props = {
  state: FollowState
  onFollow?: () => void
  onUnfollow?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Stateful follow button: "Follow" when not
 * following, "Following" that swaps to a red "Unfollow" on hover/focus, and a
 * disabled "Requested" state for pending follow requests (e.g. private
 * accounts). Distinct from Wishlist Heart Toggle, which is a binary favorite
 * icon rather than a three-state social relationship control.
 */
export function FollowButton({ state, onFollow, onUnfollow, className }: FollowButtonVariant1Props) {
  const [hovering, setHovering] = useState(false)

  if (state === 'not-following') {
    return (
      <button
        type="button"
        onClick={onFollow}
        className={`rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 ${className ?? ''}`}
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
        className={`w-24 cursor-not-allowed rounded-md border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-400 ${className ?? ''}`}
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
          ? `w-24 rounded-md border border-red-300 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700 shadow-sm ${className ?? ''}`
          : `w-24 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm ${className ?? ''}`
      }
    >
      {hovering ? 'Unfollow' : 'Following'}
    </button>
  )
}
