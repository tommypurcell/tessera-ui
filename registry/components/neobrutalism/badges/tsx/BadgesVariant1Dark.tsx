import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type BadgesVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function BadgesVariant1Dark({
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
}: BadgesVariant1DarkProps) {
  const defaultContent = (
    <>
      <span className="border-2 border-black bg-blue-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-blue-800 dark:text-white dark:shadow-white">
        Info
      </span>

      <span className="border-2 border-black bg-green-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-green-800 dark:text-white dark:shadow-white">
        Success
      </span>

      <span className="border-2 border-black bg-red-100 px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-red-800 dark:text-white dark:shadow-white">
        Error
      </span>
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
