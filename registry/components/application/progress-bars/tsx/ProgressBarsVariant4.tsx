import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProgressBarsVariant4Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant4({
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
}: ProgressBarsVariant4Props) {
  const defaultContent = (
    <>
      <div className="text-center">
            <div
              className="relative mx-auto size-32"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-labelledby="LoadingCircleLabel"
            >
              <svg className="size-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200"
                />
      
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  stroke-dasharray="70.7 282.7"
                  strokeLinecap="round"
                  className="origin-center text-blue-600"
                  style={{transform: 'rotate(-90deg)'}}
                />
              </svg>
      
              <div className="absolute inset-0 grid place-content-center">
                <span className="text-xl font-semibold text-gray-900">25%</span>
              </div>
            </div>
      
            <p id="LoadingCircleLabel" className="mt-2 text-sm text-gray-700">Loading</p>
          </div>
      
          <div className="text-center">
            <div
              className="relative mx-auto size-32"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-labelledby="NearlyDoneCircleLabel"
            >
              <svg className="size-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200"
                />
      
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  stroke-dasharray="212.1 282.7"
                  strokeLinecap="round"
                  className="origin-center text-green-600"
                  style={{transform: 'rotate(-90deg)'}}
                />
              </svg>
      
              <div className="absolute inset-0 grid place-content-center">
                <span className="text-xl font-semibold text-gray-900">75%</span>
              </div>
            </div>
      
            <p id="NearlyDoneCircleLabel" className="mt-2 text-sm text-gray-700">Nearly done</p>
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
