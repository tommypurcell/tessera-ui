import { useState, type KeyboardEvent } from 'react'

export type TaskChecklistItem = {
  id: string
  label: string
  done: boolean
}

export type TaskChecklistVariant1Props = {
  title: string
  items: TaskChecklistItem[]
  onAddItem?: (label: string) => void
}

/**
 * Copy-and-own Tailwind component. Checkable task list with a real
 * toggle state, a computed "N/M complete" progress count, and an
 * add-item input — the count is derived from the actual items array,
 * never hand-typed.
 */
export function TaskChecklist({ title, items: initialItems, onAddItem }: TaskChecklistVariant1Props) {
  const [items, setItems] = useState(initialItems)
  const [draft, setDraft] = useState('')

  const doneCount = items.filter((item) => item.done).length

  function toggle(id: string) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  function addItem() {
    const label = draft.trim()
    if (!label) return
    setItems((prev) => [...prev, { id: `${Date.now()}`, label, done: false }])
    onAddItem?.(label)
    setDraft('')
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') addItem()
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium text-gray-900">{title}</h2>
        <span className="text-xs text-gray-500">
          {doneCount}/{items.length} complete
        </span>
      </div>

      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
                className="size-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className={`text-sm ${item.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 border-t border-gray-100 pt-2.5">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Add a task…"
          className="flex-1 rounded-md border-0 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
        />
        <button
          type="button"
          onClick={addItem}
          className="text-xs font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
        >
          Add
        </button>
      </div>
    </div>
  )
}
