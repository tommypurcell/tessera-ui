export function StoryRingRowVariant2Dark() {
  return (
    <ul className="flex gap-3" aria-label="Stories">
      <li>
        <span className="inline-flex rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
          <span className="inline-flex rounded-full bg-gray-950 p-0.5">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=72&h=72&fit=crop&crop=faces"
              alt="Ava Wilson's story, unseen"
              className="size-11 rounded-full object-cover"
            />
          </span>
        </span>
      </li>
      <li>
        <span className="inline-flex rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-0.5">
          <span className="inline-flex rounded-full bg-gray-950 p-0.5">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=72&h=72&fit=crop&crop=faces"
              alt="Marcus Chen's story, unseen"
              className="size-11 rounded-full object-cover"
            />
          </span>
        </span>
      </li>
      <li>
        <span className="inline-flex rounded-full bg-gray-700 p-0.5">
          <span className="inline-flex rounded-full bg-gray-950 p-0.5">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=72&h=72&fit=crop&crop=faces"
              alt="Sofia Ramirez's story, seen"
              className="size-11 rounded-full object-cover"
            />
          </span>
        </span>
      </li>
      <li>
        <button
          type="button"
          aria-label="View 5 more stories"
          className="flex size-11 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-gray-300 hover:bg-gray-700"
        >
          +5
        </button>
      </li>
    </ul>
  )
}
