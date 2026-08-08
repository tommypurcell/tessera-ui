import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DurationInputVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DurationInputVariant1Dark({
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
}: DurationInputVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs">
            <span className="block text-sm font-medium text-gray-300" id="duration-input-label-dark">Estimated time</span>
            <div role="group" aria-labelledby="duration-input-label-dark" className="mt-1.5 flex items-center gap-2">
              <div className="flex items-center rounded-md border border-gray-700 bg-gray-900 pr-3 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                <label htmlFor="duration-input-hours-dark" className="sr-only">Hours</label>
                <input
                  id="duration-input-hours-dark"
                  type="text"
                  inputmode="numeric"
                  value="2"
                  className="w-12 border-0 bg-transparent py-2 pl-3 text-right text-sm text-white focus:outline-none focus:ring-0"
                />
                <span className="text-sm text-gray-500">h</span>
              </div>
      
              <div className="flex items-center rounded-md border border-gray-700 bg-gray-900 pr-3 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                <label htmlFor="duration-input-minutes-dark" className="sr-only">Minutes</label>
                <input
                  id="duration-input-minutes-dark"
                  type="text"
                  inputmode="numeric"
                  value="45"
                  className="w-12 border-0 bg-transparent py-2 pl-3 text-right text-sm text-white focus:outline-none focus:ring-0"
                />
                <span className="text-sm text-gray-500">m</span>
              </div>
            </div>
            <p className="mt-1.5 text-xs text-gray-400">Total: 2h 45m</p>
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
