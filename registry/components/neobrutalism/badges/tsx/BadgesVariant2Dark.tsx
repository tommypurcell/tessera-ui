import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type BadgesVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function BadgesVariant2Dark({
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
}: BadgesVariant2DarkProps) {
  const defaultContent = (
    <>
      <span className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white">
        <span className="size-2 bg-green-600 dark:bg-green-300"></span>
        Success
      </span>

      <span className="inline-flex items-center gap-1.5 border-2 border-black bg-white px-3 py-1.5 text-sm/none font-semibold text-black shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white">
        <span className="size-2 bg-red-600 dark:bg-red-300"></span>
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
