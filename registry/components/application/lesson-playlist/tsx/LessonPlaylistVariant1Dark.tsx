export type LessonPlaylistLesson = {
  id: string
  title: string
  duration: string
  status: 'completed' | 'current' | 'available' | 'locked'
}

export type LessonPlaylistVariant1DarkProps = {
  moduleTitle: string
  completedCount: number
  totalCount: number
  lessons: LessonPlaylistLesson[]
  onSelect?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Ordered course-lesson list adapted for
 * dark surfaces.
 */
export function LessonPlaylist({
  moduleTitle,
  completedCount,
  totalCount,
  lessons,
  onSelect,
}: LessonPlaylistVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900">
      <div className="border-b border-gray-800 px-4 py-3">
        <h2 className="text-sm font-semibold text-white">{moduleTitle}</h2>
        <p className="mt-0.5 text-xs text-gray-400">
          {completedCount} of {totalCount} lessons complete
        </p>
      </div>
      <ol className="divide-y divide-gray-800">
        {lessons.map((lesson) => (
          <li key={lesson.id} className={lesson.status === 'current' ? 'bg-blue-500/10' : undefined}>
            <button
              type="button"
              disabled={lesson.status === 'locked'}
              onClick={() => onSelect?.(lesson.id)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left disabled:cursor-not-allowed"
            >
              {lesson.status === 'completed' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : lesson.status === 'locked' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-600"
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
                  className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    lesson.status === 'current' ? 'border-blue-500' : 'border-gray-700'
                  }`}
                  aria-hidden="true"
                />
              )}
              <span
                className={`min-w-0 flex-1 truncate text-sm ${
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
              </span>
              <span
                className={`shrink-0 text-xs ${lesson.status === 'current' ? 'font-medium text-blue-400' : 'text-gray-500'}`}
              >
                {lesson.duration}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
