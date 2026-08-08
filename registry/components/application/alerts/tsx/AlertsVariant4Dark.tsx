import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AlertsVariant4DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AlertsVariant4Dark({
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
}: AlertsVariant4DarkProps) {
  const defaultContent = (
    <>
      <div
            className="flex gap-3 rounded-md border border-l-4 border-gray-200 border-l-indigo-500 bg-white p-4 dark:border-gray-800 dark:border-l-indigo-400 dark:bg-gray-900"
            role="status"
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Scheduled maintenance</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our services will be briefly unavailable on Sunday, June 22 from 2:00–4:00 AM UTC.
              </p>
            </div>
          </div>
      
          <div
            className="flex gap-3 rounded-md border border-l-4 border-gray-200 border-l-red-500 bg-white p-4 dark:border-gray-800 dark:border-l-red-400 dark:bg-gray-900"
            role="alert"
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Connection lost</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We couldn't reach the server. Check your network and try again.
              </p>
            </div>
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
