import { useState } from 'react'

export type CharacterCountTextareaVariant1Props = {
  label: string
  initialValue?: string
  maxLength: number
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the
 * character-count textarea.
 */
export function CharacterCountTextarea({ label, initialValue = '', maxLength }: CharacterCountTextareaVariant1Props) {
  const [value, setValue] = useState(initialValue)
  const remaining = maxLength - value.length
  const isOverLimit = remaining < 0

  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <label htmlFor="cc-textarea-dark" className="text-sm font-medium text-gray-100">
        {label}
      </label>
      <textarea
        id="cc-textarea-dark"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        aria-describedby="cc-textarea-dark-count"
        className={`w-full rounded-md border bg-gray-900 px-3 py-2 text-sm text-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-950 ${
          isOverLimit ? 'border-red-500 focus-visible:ring-red-400' : 'border-gray-700 focus-visible:ring-blue-400'
        }`}
      />
      <div id="cc-textarea-dark-count" className="flex justify-end text-xs" aria-live="polite">
        <span className={isOverLimit ? 'font-medium text-red-400' : 'text-gray-500'}>
          {isOverLimit ? `${Math.abs(remaining)} characters over limit` : `${remaining} characters remaining`}
        </span>
      </div>
    </div>
  )
}
