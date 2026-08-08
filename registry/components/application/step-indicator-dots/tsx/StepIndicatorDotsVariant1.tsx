import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StepIndicatorDotsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StepIndicatorDotsVariant1({
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
}: StepIndicatorDotsVariant1Props) {
  const defaultContent = (
    <>
      <ol className="flex items-center" aria-label="Progress">
            <li className="flex items-center">
              <span className="size-2.5 rounded-full bg-gray-900"></span>
            </li>
            <li className="h-px w-8 bg-gray-900" aria-hidden="true"></li>
            <li className="flex items-center">
              <span className="relative flex size-3.5 items-center justify-center rounded-full bg-gray-900" aria-current="step">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gray-900 opacity-40"></span>
              </span>
            </li>
            <li className="h-px w-8 bg-gray-200" aria-hidden="true"></li>
            <li className="flex items-center">
              <span className="size-2.5 rounded-full bg-gray-200"></span>
            </li>
            <li className="h-px w-8 bg-gray-200" aria-hidden="true"></li>
            <li className="flex items-center">
              <span className="size-2.5 rounded-full bg-gray-200"></span>
            </li>
          </ol>
      
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900">Choose your plan</p>
            <p className="text-xs text-gray-500">Step 2 of 4</p>
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
