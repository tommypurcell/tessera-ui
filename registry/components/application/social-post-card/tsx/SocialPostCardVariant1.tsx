import { useState } from 'react'

export type SocialPostCardVariant1Props = {
  authorName: string
  timestamp: string
  caption: string
  likeCount: number
  commentCount: number
  liked?: boolean
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

/**
 * Copy-and-own Tailwind component. Social post card with an avatar
 * header, media body, and a real toggleable like action — the like
 * count increments/decrements from its real base count when toggled,
 * never hand-typed per state.
 */
export function SocialPostCard({ authorName, timestamp, caption, likeCount, commentCount, liked = false }: SocialPostCardVariant1Props) {
  const [isLiked, setIsLiked] = useState(liked)
  const displayedLikes = likeCount + (isLiked && !liked ? 1 : !isLiked && liked ? -1 : 0)

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center gap-2.5 p-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-700">
          {initials(authorName)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900">{authorName}</p>
          <p className="text-xs text-gray-400">{timestamp}</p>
        </div>
      </div>

      <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-50" />

      <div className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsLiked((v) => !v)}
            aria-pressed={isLiked}
            aria-label={isLiked ? `Unlike, ${displayedLikes} likes` : `Like, ${displayedLikes} likes`}
            className="flex items-center gap-1.5 rounded-md p-1 text-gray-600 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill={isLiked ? 'currentColor' : 'none'}
              className={`size-5 ${isLiked ? 'text-red-500' : ''}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span className="text-sm">{displayedLikes.toLocaleString()}</span>
          </button>

          <span className="flex items-center gap-1.5 text-gray-600">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <span className="text-sm">{commentCount.toLocaleString()}</span>
          </span>

          <button
            type="button"
            aria-label="Share"
            className="ml-auto rounded-md p-1 text-gray-600 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-gray-700">
          <span className="font-medium text-gray-900">{authorName}</span> {caption}
        </p>
      </div>
    </div>
  )
}
