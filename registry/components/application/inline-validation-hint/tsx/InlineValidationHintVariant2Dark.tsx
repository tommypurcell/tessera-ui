import type { InputHTMLAttributes } from 'react'

export type ValidationStatus = 'success' | 'error'

export type InlineValidationHintVariant2DarkProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  id: string
  label: string
  status: ValidationStatus
  message: string
}

const statusStyles: Record<ValidationStatus, { border: string; text: string; icon: string }> = {
  success: {
    border: 'border-green-600 focus:border-green-500',
    text: 'text-green-400',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  error: {
    border: 'border-red-500 focus:border-red-500',
    text: 'text-red-400',
    icon: 'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
}

/**
 * Copy-and-own Tailwind component. Field-level validation hint with a
 * trailing status icon inside the input, adapted for dark surfaces.
 */
export function InlineValidationHint({
  id,
  label,
  status,
  message,
  className,
  ...props
}: InlineValidationHintVariant2DarkProps) {
  const style = statusStyles[status]
  const hintId = `${id}-hint`

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-invalid={status === 'error'}
          aria-describedby={hintId}
          className={`w-full rounded-md border bg-gray-900 py-2 pr-9 pl-3 text-sm text-white shadow-sm focus:outline-none ${style.border} ${className ?? ''}`}
          {...props}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute top-1/2 right-3 size-4 -translate-y-1/2 transition-opacity duration-150 ${style.text}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={style.icon} />
        </svg>
      </div>
      <p
        id={hintId}
        role={status === 'error' ? 'alert' : undefined}
        className={`text-xs transition-opacity duration-150 ${style.text}`}
      >
        {message}
      </p>
    </div>
  )
}
