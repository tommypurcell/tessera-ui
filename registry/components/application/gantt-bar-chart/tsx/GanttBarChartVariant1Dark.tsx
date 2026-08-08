export type GanttTask = {
  label: string
  startCol: number
  span: number
  color: 'indigo' | 'violet' | 'emerald' | 'amber' | 'rose'
  milestone?: boolean
  dependsOnIndex?: number
}

export type GanttBarChartVariant1DarkProps = {
  columns: string[]
  tasks: GanttTask[]
  todayCol?: number
  className?: string
}

const barColor: Record<GanttTask['color'], string> = {
  indigo: 'bg-indigo-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
}

/**
 * Copy-and-own Tailwind component (dark surface). Horizontal Gantt chart: a task-name
 * column plus a day/week grid where each task renders as a positioned bar (or a
 * milestone diamond), an optional dependency arrow, and a vertical "today" line.
 */
export function GanttBarChart({ columns, tasks, todayCol, className }: GanttBarChartVariant1DarkProps) {
  const colCount = columns.length
  const pct = (n: number) => `${(n / colCount) * 100}%`

  return (
    <div className={`overflow-hidden rounded-lg border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="relative grid grid-cols-[10rem_1fr]">
        <div className="border-r border-b border-gray-800 bg-gray-950 px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Task</div>
        <div className="grid border-b border-gray-800 bg-gray-950" style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
          {columns.map((col, i) => (
            <div key={i} className={`px-2 py-2 text-center text-xs font-medium text-gray-400 ${i < colCount - 1 ? 'border-r border-gray-800' : ''}`}>
              {col}
            </div>
          ))}
        </div>

        {tasks.map((task, taskIndex) => {
          const isLast = taskIndex === tasks.length - 1
          const dependsOn = task.dependsOnIndex !== undefined ? tasks[task.dependsOnIndex] : undefined

          return (
            <div key={task.label} className="contents">
              <div className={`flex items-center border-r px-3 py-3 text-sm text-gray-300 ${isLast ? 'border-gray-800' : 'border-b border-gray-800'}`}>
                {task.label}
              </div>
              <div className={`relative grid ${isLast ? '' : 'border-b border-gray-800'}`} style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
                {columns.map((_, i) => (
                  <div key={i} className={i < colCount - 1 ? 'border-r border-gray-800/60' : ''} />
                ))}

                {task.milestone ? (
                  <div className="absolute inset-y-0 flex items-center" style={{ left: pct(task.startCol) }}>
                    <span className={`h-3 w-3 rotate-45 rounded-[2px] shadow-sm ${barColor[task.color]}`} aria-hidden="true" />
                    <span className="sr-only">{task.label} milestone</span>
                  </div>
                ) : (
                  <div className="absolute inset-y-0 flex items-center px-1 py-1.5" style={{ left: pct(task.startCol), width: pct(task.span) }}>
                    <div className={`flex h-full w-full items-center rounded-md px-2 text-xs font-medium text-white shadow-sm ${barColor[task.color]}`}>
                      {task.label}
                    </div>
                  </div>
                )}

                {dependsOn ? (
                  <svg
                    className="pointer-events-none absolute -top-4 h-8 w-[6%]"
                    style={{ left: pct(dependsOn.startCol + dependsOn.span - 0.3) }}
                    viewBox="0 0 40 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 4 L2 24 Q2 28 6 28 L34 28" stroke="#6b7280" strokeWidth="1.5" fill="none" />
                    <path d="M30 24 L36 28 L30 32" stroke="#6b7280" strokeWidth="1.5" fill="none" />
                  </svg>
                ) : null}
              </div>
            </div>
          )
        })}

        {todayCol !== undefined ? (
          <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `calc(10rem + ${pct(todayCol)})` }}>
            <div className="relative h-full w-px bg-red-400">
              <span className="absolute top-1 left-1/2 -translate-x-1/2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap text-white">
                Today
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
