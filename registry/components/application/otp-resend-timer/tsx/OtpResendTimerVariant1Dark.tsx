import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OtpResendTimerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OtpResendTimerVariant1Dark({
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
}: OtpResendTimerVariant1DarkProps) {
  const defaultContent = (
    <>
      <p className="text-sm font-medium text-gray-200">Enter the 6-digit code</p>
      
          <div className="flex gap-2" role="group" aria-label="One-time code">
            <span className="flex size-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800 text-sm font-semibold text-white">4</span>
            <span className="flex size-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800 text-sm font-semibold text-white">1</span>
            <span className="flex size-10 items-center justify-center rounded-md border border-gray-100 bg-gray-900 text-sm font-semibold text-white">2</span>
            <span className="flex size-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800"></span>
            <span className="flex size-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800"></span>
            <span className="flex size-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800"></span>
          </div>
      
          <p className="text-sm text-gray-400" role="status" aria-live="polite">
            Resend code in <span id="otp-timer-1-dark" className="font-mono font-medium text-gray-200">00:24</span>
          </p>
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
