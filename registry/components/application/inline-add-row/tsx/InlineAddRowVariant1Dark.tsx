import type { HTMLAttributes } from 'react'

export type InlineAddRowItem = {
  id: string
  task: string
  assignee: string
}

export type InlineAddRowVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  taskHeader?: string
  assigneeHeader?: string
  items: InlineAddRowItem[]
  draftTask: string
  draftAssignee: string
  onDraftTaskChange?: (value: string) => void
  onDraftAssigneeChange?: (value: string) => void
  onAdd?: () => void
  onCancel?: () => void
}

/**
 * Copy-and-own Tailwind component. Table with an always-visible inline add row
 * taking a real items/draft contract — pass your own list data and draft state instead of hand-editing markup.
 */
export function InlineAddRowDark({
  className,
  taskHeader = 'Task',
  assigneeHeader = 'Assignee',
  items,
  draftTask,
  draftAssignee,
  onDraftTaskChange,
  onDraftAssigneeChange,
  onAdd,
  onCancel,
  ...props
}: InlineAddRowVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-900">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
              {taskHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
              {assigneeHeader}
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800 bg-gray-900">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-300">{item.task}</td>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-400">{item.assignee}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="border-t border-gray-800 bg-gray-900">
          <tr>
            <td colSpan={2} className="px-2 py-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Task name"
                  value={draftTask}
                  onChange={(event) => onDraftTaskChange?.(event.target.value)}
                  className="w-full rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1.5 text-sm text-white shadow-sm placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Assignee"
                  value={draftAssignee}
                  onChange={(event) => onDraftAssigneeChange?.(event.target.value)}
                  className="w-32 shrink-0 rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1.5 text-sm text-white shadow-sm placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
                />
                <button type="button" onClick={onAdd} className="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200">
                  Add
                </button>
                <button type="button" aria-label="Cancel adding task" onClick={onCancel} className="shrink-0 text-gray-500 hover:text-gray-300">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
