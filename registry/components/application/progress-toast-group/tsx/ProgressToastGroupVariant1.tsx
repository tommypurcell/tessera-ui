export type ProgressToastTask = {
  id: string
  label: string
  progressPct: number
  isComplete: boolean
}

export type ProgressToastGroupVariant1Props = {
  tasks: ProgressToastTask[]
  onDismiss?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Stack of concurrent task-progress
 * toasts — each toast's bar fill and "Done" state are driven by the
 * real `progressPct`/`isComplete` fields, distinct from toast-stack's
 * plain message toasts (no per-toast progress bar).
 */
export function ProgressToastGroup({ tasks, onDismiss }: ProgressToastGroupVariant1Props) {
  if (tasks.length === 0) return null

  return (
    <div aria-live="polite" aria-label="Task progress" className="flex w-full max-w-sm flex-col gap-2">
      {tasks.map((task) => (
        <div key={task.id} role="status" className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-sm font-medium text-gray-900">{task.label}</span>
            <span className="shrink-0 text-xs text-gray-500">{task.isComplete ? 'Done' : `${task.progressPct}%`}</span>
          </div>

          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-1.5 rounded-full transition-[width] ${task.isComplete ? 'bg-green-500' : 'bg-blue-600'}`}
              style={{ width: `${task.isComplete ? 100 : task.progressPct}%` }}
              role="img"
              aria-label={`${task.label}: ${task.isComplete ? 'complete' : `${task.progressPct}% complete`}`}
            />
          </div>

          {task.isComplete && onDismiss ? (
            <button
              type="button"
              onClick={() => onDismiss(task.id)}
              className="mt-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            >
              Dismiss
            </button>
          ) : null}
        </div>
      ))}
    </div>
  )
}
