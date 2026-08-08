import type { InputHTMLAttributes } from 'react'

export type ValidationStatus = 'success' | 'error'

export type InlineValidationHintVariant1DarkProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  id: string
  label: string
  status: ValidationStatus
  message: string
}

const statusStyles: Record<ValidationStatus, { border: string; text: string; icon: string }> = {
  success: { border: 'border-green-600 focus:border-green-500', text: 'text-green-400', icon: 'M4.5 12.75l6 6 9-13.5' },
  error: {
    border: 'border-red-500 focus:border-red-500',
    text: 'text-red-400',
    icon: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
  },
}

/**
 * Copy-and-own Tailwind component. Field-level validation hint adapted for
 * dark surfaces.
 */
export function InlineValidationHint({
  id,
  label,
  status,
  message,
  className,
  ...props
}: InlineValidationHintVariant1DarkProps) {
  const style = statusStyles[status]
  const hintId = `${id}-hint`

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={status === 'error'}
        aria-describedby={hintId}
        className={`rounded-md border bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:outline-none ${style.border} ${className ?? ''}`}
        {...props}
      />
      <p
        id={hintId}
        role={status === 'error' ? 'alert' : undefined}
        className={`flex items-center gap-1.5 text-xs transition-opacity duration-150 ${style.text}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={style.icon} />
        </svg>
        {message}
      </p>
    </div>
  )
}
