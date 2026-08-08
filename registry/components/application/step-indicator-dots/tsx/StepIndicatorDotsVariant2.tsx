import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StepIndicatorDotsVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StepIndicatorDotsVariant2({
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
}: StepIndicatorDotsVariant2Props) {
  const defaultContent = (
    <>
      <ol className="flex items-center" aria-label="Progress">
            <li className="flex items-center">
              <span className="flex size-7 items-center justify-center rounded-full bg-green-600 text-white">
                <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="sr-only">Step 1 complete</span>
              </span>
            </li>
            <li className="h-px w-6 bg-green-600" aria-hidden="true"></li>
            <li className="flex items-center">
              <span className="flex size-7 items-center justify-center rounded-full bg-green-600 text-white">
                <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="sr-only">Step 2 complete</span>
              </span>
            </li>
            <li className="h-px w-6 bg-gray-200" aria-hidden="true"></li>
            <li className="flex items-center">
              <span
                className="flex size-7 items-center justify-center rounded-full border-2 border-gray-900 text-sm font-semibold text-gray-900"
                aria-current="step"
              >
                3
              </span>
            </li>
            <li className="h-px w-6 bg-gray-200" aria-hidden="true"></li>
            <li className="flex items-center">
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-gray-200 text-sm font-medium text-gray-400">
                4
              </span>
            </li>
          </ol>
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
