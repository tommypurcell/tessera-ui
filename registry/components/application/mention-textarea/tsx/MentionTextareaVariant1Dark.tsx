import { useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react'

export type MentionTextareaUser = {
  id: string
  name: string
}

export type MentionTextareaVariant1DarkProps = {
  label: string
  users?: MentionTextareaUser[]
  placeholder?: string
  onSubmit?: (value: string) => void
}

const DEFAULT_USERS: MentionTextareaUser[] = [
  { id: 'priya', name: 'Priya Shah' },
  { id: 'marcus', name: 'Marcus Lee' },
  { id: 'dana', name: 'Dana Osei' },
  { id: 'lena', name: 'Lena Fischer' },
]

/**
 * Copy-and-own Tailwind component. Composer textarea with @-mention
 * autocomplete adapted for dark surfaces — typing "@" opens a filtered
 * popover of real users below the textarea; picking one inserts
 * "@Name " at the trigger position.
 */
export function MentionTextareaDark({ label, users = DEFAULT_USERS, placeholder, onSubmit }: MentionTextareaVariant1DarkProps) {
  const [value, setValue] = useState('')
  const [mentionQuery, setMentionQuery] = useState<string | null>(null)
  const [triggerIndex, setTriggerIndex] = useState<number | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const filtered = useMemo(
    () => (mentionQuery === null ? [] : users.filter((u) => u.name.toLowerCase().includes(mentionQuery.toLowerCase()))),
    [users, mentionQuery],
  )

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const next = event.target.value
    const caret = event.target.selectionStart
    setValue(next)

    const beforeCaret = next.slice(0, caret)
    const match = beforeCaret.match(/(?:^|\s)@([\w-]*)$/)
    if (match) {
      setTriggerIndex(caret - match[1].length - 1)
      setMentionQuery(match[1])
    } else {
      setMentionQuery(null)
      setTriggerIndex(null)
    }
  }

  function pickMention(user: MentionTextareaUser) {
    if (triggerIndex === null) return
    const caret = textareaRef.current?.selectionStart ?? value.length
    const next = `${value.slice(0, triggerIndex)}@${user.name} ${value.slice(caret)}`
    setValue(next)
    setMentionQuery(null)
    setTriggerIndex(null)
    requestAnimationFrame(() => textareaRef.current?.focus())
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (mentionQuery !== null && event.key === 'Escape') {
      setMentionQuery(null)
      setTriggerIndex(null)
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="mention-textarea-dark" className="text-sm font-medium text-gray-300">
        {label}
      </label>

      <div className="relative">
        <textarea
          ref={textareaRef}
          id="mention-textarea-dark"
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          className="w-full resize-none rounded-md border border-gray-700 bg-gray-900 p-2.5 text-sm text-gray-100 placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
        />

        {mentionQuery !== null ? (
          <ul
            role="listbox"
            aria-label="Mention a user"
            className="absolute z-10 mt-1 w-56 overflow-hidden rounded-md border border-gray-700 bg-gray-900 py-1 shadow-lg"
          >
            {filtered.length > 0 ? (
              filtered.map((user) => (
                <li
                  key={user.id}
                  role="option"
                  aria-selected="false"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pickMention(user)}
                  className="cursor-pointer px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-800"
                >
                  {user.name}
                </li>
              ))
            ) : (
              <li role="option" aria-disabled="true" aria-selected="false" className="px-3 py-1.5 text-sm text-gray-500">
                No matches
              </li>
            )}
          </ul>
        ) : null}
      </div>

      <button
        type="button"
        onClick={() => onSubmit?.(value)}
        className="self-end rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-950"
      >
        Post
      </button>
    </div>
  )
}
