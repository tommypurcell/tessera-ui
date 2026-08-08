export type LessonPlaylistNumberedLesson = {
  id: string
  number: number
  title: string
  duration: string
  status: 'completed' | 'current' | 'available' | 'locked'
  /** Playback progress percentage (0-100), shown only when status is 'current'. */
  progressPercent?: number
}

export type LessonPlaylistVariant2DarkProps = {
  lessons: LessonPlaylistNumberedLesson[]
  onSelect?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Compact numbered lesson list adapted for
 * dark surfaces.
 */
export function LessonPlaylist({ lessons, onSelect }: LessonPlaylistVariant2DarkProps) {
  return (
    <ol className="flex w-full max-w-sm flex-col gap-1">
      {lessons.map((lesson) => (
        <li key={lesson.id} className={lesson.status === 'current' ? 'rounded-md bg-gray-900' : undefined}>
          <button
            type="button"
            disabled={lesson.status === 'locked'}
            onClick={() => onSelect?.(lesson.id)}
            className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left disabled:cursor-not-allowed"
          >
            {lesson.status === 'locked' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 shrink-0 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            ) : (
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                  lesson.status === 'completed'
                    ? 'bg-green-500/15 text-green-400'
                    : lesson.status === 'current'
                      ? 'bg-blue-500 text-white'
                      : 'border border-gray-700 text-gray-400'
                }`}
              >
                {lesson.number}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-sm ${
                  lesson.status === 'completed'
                    ? 'text-gray-500 line-through'
                    : lesson.status === 'current'
                      ? 'font-medium text-white'
                      : lesson.status === 'locked'
                        ? 'text-gray-500'
                        : 'text-gray-300'
                }`}
              >
                {lesson.title}
              </p>
              {lesson.status === 'current' && typeof lesson.progressPercent === 'number' ? (
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-gray-800">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${lesson.progressPercent}%` }}
                  />
                </div>
              ) : null}
            </div>
            <span
              className={`shrink-0 text-xs ${lesson.status === 'current' ? 'font-medium text-blue-400' : 'text-gray-500'}`}
            >
              {lesson.duration}
            </span>
          </button>
        </li>
      ))}
    </ol>
  )
}
