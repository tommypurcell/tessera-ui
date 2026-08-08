import type { LabelHTMLAttributes, ReactNode } from 'react'

export type LabelVariant1DarkProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
  required?: boolean
  optional?: boolean
  disabled?: boolean
  info?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Standalone label primitive for
 * pairing with any control via htmlFor — required asterisk, optional hint, disabled
 * tone, or an info button slot for a tooltip trigger.
 */
export function Label({ children, required, optional, disabled, info, className, ...props }: LabelVariant1DarkProps) {
  return (
    <span className={`flex items-center justify-between text-sm font-medium ${disabled ? 'text-gray-600' : 'text-gray-200'} ${className ?? ''}`}>
      <span className="flex items-center gap-1.5">
        <label {...props}>
          {children}
          {required ? (
            <span aria-hidden="true" className="ml-0.5 text-red-400">
              *
            </span>
          ) : null}
        </label>
        {info ? (
          <button type="button" aria-label={info} className="text-gray-500 hover:text-gray-300">
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : null}
      </span>
      {optional ? <span className="text-xs font-normal text-gray-500">Optional</span> : null}
    </span>
  )
}
