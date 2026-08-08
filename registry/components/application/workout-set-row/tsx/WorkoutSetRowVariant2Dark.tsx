export function WorkoutSetRowVariant2Dark() {
  return (
    <ul className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-800">
      <li className="flex items-center justify-between gap-3 p-3">
        <div>
          <p className="text-sm font-medium text-white">Barbell Bench Press</p>
          <p className="text-xs text-gray-500">3 sets &middot; 135&ndash;140 lb &middot; 8&ndash;10 reps</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-900/40 px-2 py-0.5 text-xs font-medium text-green-300">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Complete
        </span>
      </li>

      <li className="flex items-center justify-between gap-3 p-3">
        <div>
          <p className="text-sm font-medium text-white">Incline Dumbbell Press</p>
          <p className="text-xs text-gray-500">2 of 3 sets &middot; 50 lb &middot; 12 reps</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-300">In progress</span>
      </li>

      <li className="flex items-center justify-between gap-3 p-3">
        <div>
          <p className="text-sm font-medium text-white">Cable Fly</p>
          <p className="text-xs text-gray-500">3 sets &middot; not started</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-500">Not started</span>
      </li>
    </ul>
  )
}
