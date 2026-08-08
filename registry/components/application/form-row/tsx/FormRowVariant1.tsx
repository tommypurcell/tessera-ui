import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from 'react'

export type FormRowVariant1Props = {
  label: string
  htmlFor?: string
  helpText?: string
  error?: string
  required?: boolean
  className?: string
  children?: ReactNode
}

/**
 * Copy-and-own Tailwind component. Wires a label, help text, and error state to a real
 * form control via id/aria-describedby/aria-invalid — pass an input as `children` and the
 * accessibility plumbing is handled for you.
 */
export function FormRow({ label, htmlFor, helpText, error, required, className, children }: FormRowVariant1Props) {
  const generatedId = useId()
  const inputId = htmlFor ?? generatedId
  const helpId = helpText ? `${inputId}-help` : undefined
  const errorId = error ? `${inputId}-error` : undefined
  const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined

  const control =
    isValidElement(children)
      ? cloneElement(children as ReactElement<Record<string, unknown>>, {
          id: inputId,
          'aria-invalid': error ? true : undefined,
          'aria-describedby': describedBy,
        })
      : (
          <input
            id={inputId}
            type="text"
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
          />
        )

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-0.5 text-red-600">
            *
          </span>
        ) : null}
      </label>

      {control}

      {helpText ? (
        <p id={helpId} className="text-xs text-gray-500">
          {helpText}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} role="alert" className="text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  )
}
