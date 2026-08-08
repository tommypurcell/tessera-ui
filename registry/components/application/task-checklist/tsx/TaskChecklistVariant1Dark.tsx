import { useState, type KeyboardEvent } from 'react'

export type TaskChecklistItem = {
  id: string
  label: string
  done: boolean
}

export type TaskChecklistVariant1DarkProps = {
  title: string
  items: TaskChecklistItem[]
  onAddItem?: (label: string) => void
}

/**
 * Copy-and-own Tailwind component. Checkable task list adapted for dark
 * surfaces, with a real toggle state, a computed "N/M complete" progress
 * count, and an add-item input.
 */
export function TaskChecklistDark({ title, items: initialItems, onAddItem }: TaskChecklistVariant1DarkProps) {
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
    <div className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium text-gray-100">{title}</h2>
        <span className="text-xs text-gray-500">
          {doneCount}/{items.length} complete
        </span>
      </div>

      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-1 hover:bg-gray-800">
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
                className="size-4 shrink-0 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-400"
              />
              <span className={`text-sm ${item.done ? 'text-gray-600 line-through' : 'text-gray-300'}`}>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 border-t border-gray-800 pt-2.5">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Add a task…"
          className="flex-1 rounded-md border-0 bg-transparent text-sm text-gray-100 placeholder:text-gray-500 focus:ring-0 focus:outline-none"
        />
        <button
          type="button"
          onClick={addItem}
          className="text-xs font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
        >
          Add
        </button>
      </div>
    </div>
  )
}
