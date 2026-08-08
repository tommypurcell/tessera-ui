import { useState, type FormEvent } from 'react'

export type Comment = {
  id: string
  authorName: string
  authorAvatarSrc: string
  timestamp: string
  body: string
  likeCount?: number
  replies?: Comment[]
}

export type CommentThreadVariant1DarkProps = {
  comments: Comment[]
  currentUserAvatarSrc?: string
  /** Called with the composer's text when the form is submitted. */
  onSubmit?: (body: string) => void
  className?: string
}

function CommentRow({ comment }: { comment: Comment }) {
  return (
    <li className="flex gap-3">
      <img src={comment.authorAvatarSrc} alt="" className="size-8 shrink-0 rounded-full" />

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-white">{comment.authorName}</span>
          <span className="text-xs text-gray-500">{comment.timestamp}</span>
        </div>

        <p className="mt-0.5 text-sm leading-relaxed text-gray-300">{comment.body}</p>

        <div className="mt-2 flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            {comment.likeCount ?? 0}
          </button>

          <button type="button" className="text-xs font-medium text-gray-400 hover:text-white">
            Reply
          </button>
        </div>

        {comment.replies && comment.replies.length > 0 ? (
          <ol className="mt-4 flex flex-col gap-4 border-l-2 border-gray-800 pl-4">
            {comment.replies.map((reply) => (
              <CommentRow key={reply.id} comment={reply} />
            ))}
          </ol>
        ) : null}
      </div>
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Nested comment thread adapted for dark surfaces, with
 * avatars, timestamps, a like count, reply affordance, and a composer footer.
 */
export function CommentThreadVariant1Dark({
  comments,
  currentUserAvatarSrc,
  onSubmit,
  className,
}: CommentThreadVariant1DarkProps) {
  const [draft, setDraft] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!draft.trim()) return
    onSubmit?.(draft)
    setDraft('')
  }

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-sm ${className ?? ''}`}>
      <ol className="flex flex-col gap-4">
        {comments.map((comment) => (
          <CommentRow key={comment.id} comment={comment} />
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="mt-5 flex gap-3 border-t border-gray-800 pt-4">
        {currentUserAvatarSrc ? (
          <img src={currentUserAvatarSrc} alt="" className="size-8 shrink-0 rounded-full" />
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <label htmlFor="comment-composer" className="sr-only">
            Write a comment
          </label>
          <textarea
            id="comment-composer"
            rows={2}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Write a comment…"
            className="w-full resize-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
          />

          <button
            type="submit"
            disabled={!draft.trim()}
            className="self-end rounded-md bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  )
}
