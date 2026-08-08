import { useRef, useState, type KeyboardEvent } from 'react'

export type InlineEditFieldVariant1Props = {
  label: string
  value: string
  onSave: (next: string) => void
  placeholder?: string
}

/**
 * Copy-and-own Tailwind component. Click-to-edit text that swaps to an
 * input with save/cancel affordances. Enter saves, Escape cancels and
 * reverts to the last saved value. `onSave` only fires with the committed
 * value — cancelling never calls it.
 */
export function InlineEditField({ label, value, onSave, placeholder }: InlineEditFieldVariant1Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  function startEditing() {
    setDraft(value)
    setEditing(true)
    requestAnimationFrame(() => inputRef.current?.select())
  }

  function commit() {
    setEditing(false)
    if (draft.trim() !== value) onSave(draft.trim())
  }

  function cancel() {
    setDraft(value)
    setEditing(false)
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') commit()
    else if (event.key === 'Escape') cancel()
  }

  if (editing) {
    return (
      <div className="flex items-center gap-1.5">
        <label className="sr-only" htmlFor={`inline-edit-${label}`}>
          {label}
        </label>
        <input
          ref={inputRef}
          id={`inline-edit-${label}`}
          type="text"
          value={draft}
          placeholder={placeholder}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          onBlur={commit}
          className="rounded-md border border-blue-500 px-2 py-1 text-sm text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        />

        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={commit}
          aria-label="Save"
          className="rounded-md p-1 text-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>

        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={cancel}
          aria-label="Cancel"
          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={startEditing}
      aria-label={`Edit ${label}: ${value || placeholder || 'empty'}`}
      className="group inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-left text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <span className={value ? '' : 'text-gray-400 italic'}>{value || placeholder}</span>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="size-3.5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
        />
      </svg>
    </button>
  )
}
