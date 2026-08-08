export type SecretRevealFieldVariant2Props = {
  label: string
  value: string
  /** Whether the secret is currently shown as plain text. */
  revealed: boolean
  onToggleReveal?: () => void
  onCopy?: () => void
  onRotate?: () => void
  /** Rotation reminder, e.g. "This key hasn't been rotated in 8 months...". */
  rotationNote: string
}

/**
 * Copy-and-own Tailwind component. Secret field with a Rotate key action and
 * a rotation-age warning note, for keys that should be periodically
 * refreshed for security hygiene.
 */
export function SecretRevealField({
  label,
  value,
  revealed,
  onToggleReveal,
  onCopy,
  onRotate,
  rotationNote,
}: SecretRevealFieldVariant2Props) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <label htmlFor="secret-value-2" className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <button type="button" onClick={onRotate} className="text-xs font-medium text-blue-600 hover:text-blue-700">
          Rotate key
        </button>
      </div>
      <div className="mt-1.5 flex items-center gap-1 rounded-md border border-blue-300 bg-blue-50 py-2 pr-2 pl-3">
        <input
          id="secret-value-2"
          type={revealed ? 'text' : 'password'}
          readOnly
          value={value}
          className="min-w-0 flex-1 border-0 bg-transparent p-0 font-mono text-sm text-blue-900 focus:outline-none"
        />
        <button
          type="button"
          aria-label={revealed ? 'Hide secret' : 'Show secret'}
          aria-pressed={revealed}
          onClick={onToggleReveal}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-blue-500 hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {revealed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          aria-label="Copy secret"
          onClick={onCopy}
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-blue-500 hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 flex items-start gap-2 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-0.5 size-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        {rotationNote}
      </div>
    </div>
  )
}
