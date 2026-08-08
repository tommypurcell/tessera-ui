import { useState } from 'react'

export type CharacterCountTextareaVariant1Props = {
  label: string
  initialValue?: string
  maxLength: number
}

/**
 * Copy-and-own Tailwind component. Textarea with a live character count
 * and an over-limit warning derived from the real input length — distinct
 * from a plain textarea, which has no counting or limit-warning behavior.
 */
export function CharacterCountTextarea({ label, initialValue = '', maxLength }: CharacterCountTextareaVariant1Props) {
  const [value, setValue] = useState(initialValue)
  const remaining = maxLength - value.length
  const isOverLimit = remaining < 0

  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <label htmlFor="cc-textarea" className="text-sm font-medium text-gray-900">
        {label}
      </label>
      <textarea
        id="cc-textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        aria-describedby="cc-textarea-count"
        className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
          isOverLimit ? 'border-red-400 focus-visible:ring-red-500' : 'border-gray-300 focus-visible:ring-blue-500'
        }`}
      />
      <div id="cc-textarea-count" className="flex justify-end text-xs" aria-live="polite">
        <span className={isOverLimit ? 'font-medium text-red-600' : 'text-gray-400'}>
          {isOverLimit ? `${Math.abs(remaining)} characters over limit` : `${remaining} characters remaining`}
        </span>
      </div>
    </div>
  )
}
