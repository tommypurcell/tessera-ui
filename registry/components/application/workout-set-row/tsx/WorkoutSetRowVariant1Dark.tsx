import { Fragment } from 'react'

const sets = [
  { set: 1, reps: '10', weight: '135 lb', done: true },
  { set: 2, reps: '10', weight: '135 lb', done: true },
  { set: 3, reps: '8', weight: '140 lb', done: false },
]

export function WorkoutSetRowVariant1Dark() {
  return (
    <div className="rounded-lg border border-gray-800 p-4">
      <h3 className="text-sm font-semibold text-white">Barbell Bench Press</h3>

      <div className="mt-3 grid grid-cols-[2rem_1fr_1fr_2.5rem] items-center gap-x-3 gap-y-2">
        <span className="text-xs font-medium text-gray-500">Set</span>
        <span className="text-xs font-medium text-gray-500">Reps</span>
        <span className="text-xs font-medium text-gray-500">Weight</span>
        <span className="text-xs font-medium text-gray-500">Done</span>

        {sets.map((s) => (
          <Fragment key={s.set}>
            <span className="text-sm font-medium text-gray-300">{s.set}</span>
            <input
              type="text"
              defaultValue={s.reps}
              className="w-full rounded-md border border-gray-700 bg-transparent px-2 py-1 text-sm text-gray-100 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none"
            />
            <input
              type="text"
              defaultValue={s.weight}
              className="w-full rounded-md border border-gray-700 bg-transparent px-2 py-1 text-sm text-gray-100 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none"
            />
            <input
              type="checkbox"
              defaultChecked={s.done}
              className="size-5 rounded border-gray-700 bg-gray-900 text-indigo-500 focus:ring-indigo-400"
              aria-label={`Set ${s.set} done`}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
