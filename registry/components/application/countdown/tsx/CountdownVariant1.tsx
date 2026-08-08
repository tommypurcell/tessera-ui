import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CountdownVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CountdownVariant1({
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
}: CountdownVariant1Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-6">
            <p className="text-sm font-medium text-gray-700">Sale ends in</p>
      
            <div className="mt-4 grid grid-cols-4 gap-2" role="timer" aria-live="polite" aria-atomic="true">
              <div className="flex flex-col items-center gap-1 rounded-md bg-gray-50 py-3">
                <span className="font-mono text-2xl font-semibold tabular-nums text-gray-900">02</span>
                <span className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">Days</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-md bg-gray-50 py-3">
                <span className="font-mono text-2xl font-semibold tabular-nums text-gray-900">14</span>
                <span className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">Hours</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-md bg-gray-50 py-3">
                <span className="font-mono text-2xl font-semibold tabular-nums text-gray-900">36</span>
                <span className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">Mins</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-md bg-gray-50 py-3">
                <span className="font-mono text-2xl font-semibold tabular-nums text-blue-600">09</span>
                <span className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">Secs</span>
              </div>
            </div>
      
            <p className="sr-only" aria-live="off">Time remaining: 2 days, 14 hours, 36 minutes, 9 seconds.</p>
          </div>
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
