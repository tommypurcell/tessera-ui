import { Fragment } from 'react'

const sets = [
  { set: 1, reps: '10', weight: '135 lb', done: true },
  { set: 2, reps: '10', weight: '135 lb', done: true },
  { set: 3, reps: '8', weight: '140 lb', done: false },
]

export function WorkoutSetRowVariant1() {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900">Barbell Bench Press</h3>

      <div className="mt-3 grid grid-cols-[2rem_1fr_1fr_2.5rem] items-center gap-x-3 gap-y-2">
        <span className="text-xs font-medium text-gray-400">Set</span>
        <span className="text-xs font-medium text-gray-400">Reps</span>
        <span className="text-xs font-medium text-gray-400">Weight</span>
        <span className="text-xs font-medium text-gray-400">Done</span>

        {sets.map((s) => (
          <Fragment key={s.set}>
            <span className="text-sm font-medium text-gray-700">{s.set}</span>
            <input
              type="text"
              defaultValue={s.reps}
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="text"
              defaultValue={s.weight}
              className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-900 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:outline-none"
            />
            <input
              type="checkbox"
              defaultChecked={s.done}
              className="size-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              aria-label={`Set ${s.set} done`}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
