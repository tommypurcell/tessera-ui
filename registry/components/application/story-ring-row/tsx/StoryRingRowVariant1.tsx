export function StoryRingRowVariant1() {
  return (
    <ul className="flex gap-4 overflow-x-auto pb-1" aria-label="Stories">
      <li className="flex shrink-0 flex-col items-center gap-1.5">
        <button
          type="button"
          aria-label="Add to your story"
          className="relative flex size-16 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-500"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <span className="text-xs text-gray-600">Your story</span>
      </li>

      <li className="flex shrink-0 flex-col items-center gap-1.5">
        <span className="inline-flex rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-1">
          <span className="inline-flex rounded-full bg-white p-0.5">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"
              alt="Ava Wilson's story, unseen"
              className="size-14 rounded-full object-cover"
            />
          </span>
        </span>
        <span className="text-xs text-gray-600">Ava</span>
      </li>

      <li className="flex shrink-0 flex-col items-center gap-1.5">
        <span className="inline-flex rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-1">
          <span className="inline-flex rounded-full bg-white p-0.5">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces"
              alt="Marcus Chen's story, unseen"
              className="size-14 rounded-full object-cover"
            />
          </span>
        </span>
        <span className="text-xs text-gray-600">Marcus</span>
      </li>

      <li className="flex shrink-0 flex-col items-center gap-1.5">
        <span className="inline-flex rounded-full bg-gray-200 p-1">
          <span className="inline-flex rounded-full bg-white p-0.5">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces"
              alt="Sofia Ramirez's story, seen"
              className="size-14 rounded-full object-cover"
            />
          </span>
        </span>
        <span className="text-xs text-gray-400">Sofia</span>
      </li>
    </ul>
  )
}
