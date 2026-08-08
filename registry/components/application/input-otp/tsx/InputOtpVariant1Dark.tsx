import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type InputOtpVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * Copy-and-own Tailwind component with content slots and explicit application states.
 * Omitting the optional props preserves the original markup and visual design.
 */
export function InputOtpVariant1Dark({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: InputOtpVariant1DarkProps) {
  const defaultContent = (
    <>
      {/* Single grouped OTP field */}
          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-medium text-gray-200">Verification code</legend>
            <p className="text-xs text-gray-400">Enter the 6-digit code we sent to your phone.</p>
            <div className="flex items-center gap-2" role="group" aria-label="One-time code">
              <input inputmode="numeric" maxlength="1" value="4" aria-label="Digit 1" className="h-12 w-11 rounded-lg border border-gray-700 bg-gray-900 text-center text-lg font-semibold text-white shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="8" aria-label="Digit 2" className="h-12 w-11 rounded-lg border border-gray-700 bg-gray-900 text-center text-lg font-semibold text-white shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="2" aria-label="Digit 3" className="h-12 w-11 rounded-lg border border-gray-700 bg-gray-900 text-center text-lg font-semibold text-white shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 focus:outline-none" />
              <span aria-hidden="true" className="px-1 text-lg text-gray-600">–</span>
              <input inputmode="numeric" maxlength="1" value="1" aria-label="Digit 4" className="h-12 w-11 rounded-lg border-2 border-indigo-400 bg-gray-900 text-center text-lg font-semibold text-white shadow-sm ring-2 ring-indigo-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="" aria-label="Digit 5" className="h-12 w-11 rounded-lg border border-gray-700 bg-gray-900 text-center text-lg font-semibold text-white shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="" aria-label="Digit 6" className="h-12 w-11 rounded-lg border border-gray-700 bg-gray-900 text-center text-lg font-semibold text-white shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 focus:outline-none" />
            </div>
          </fieldset>
      
          {/* Error state */}
          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-medium text-gray-200">Confirm code</legend>
            <div className="flex items-center gap-2" role="group" aria-label="One-time code, invalid">
              <input inputmode="numeric" maxlength="1" value="0" aria-invalid="true" aria-label="Digit 1" className="h-12 w-11 rounded-lg border border-red-500/70 bg-gray-900 text-center text-lg font-semibold text-red-300 shadow-sm focus:border-red-400 focus:ring-2 focus:ring-red-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="0" aria-invalid="true" aria-label="Digit 2" className="h-12 w-11 rounded-lg border border-red-500/70 bg-gray-900 text-center text-lg font-semibold text-red-300 shadow-sm focus:border-red-400 focus:ring-2 focus:ring-red-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="0" aria-invalid="true" aria-label="Digit 3" className="h-12 w-11 rounded-lg border border-red-500/70 bg-gray-900 text-center text-lg font-semibold text-red-300 shadow-sm focus:border-red-400 focus:ring-2 focus:ring-red-400/40 focus:outline-none" />
              <input inputmode="numeric" maxlength="1" value="0" aria-invalid="true" aria-label="Digit 4" className="h-12 w-11 rounded-lg border border-red-500/70 bg-gray-900 text-center text-lg font-semibold text-red-300 shadow-sm focus:border-red-400 focus:ring-2 focus:ring-red-400/40 focus:outline-none" />
            </div>
            <p role="alert" className="text-xs text-red-400">That code is incorrect. Please try again.</p>
          </fieldset>
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
