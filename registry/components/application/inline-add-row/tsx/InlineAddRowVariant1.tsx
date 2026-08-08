import type { HTMLAttributes } from 'react'

export type InlineAddRowItem = {
  id: string
  task: string
  assignee: string
}

export type InlineAddRowVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function InlineAddRow({
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
}: InlineAddRowVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              {taskHeader}
            </th>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              {assigneeHeader}
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">{item.task}</td>
              <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">{item.assignee}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="border-t border-gray-200 bg-gray-50">
          <tr>
            <td colSpan={2} className="px-2 py-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Task name"
                  value={draftTask}
                  onChange={(event) => onDraftTaskChange?.(event.target.value)}
                  className="w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Assignee"
                  value={draftAssignee}
                  onChange={(event) => onDraftAssigneeChange?.(event.target.value)}
                  className="w-32 shrink-0 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
                />
                <button type="button" onClick={onAdd} className="shrink-0 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-700">
                  Add
                </button>
                <button type="button" aria-label="Cancel adding task" onClick={onCancel} className="shrink-0 text-gray-400 hover:text-gray-600">
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
