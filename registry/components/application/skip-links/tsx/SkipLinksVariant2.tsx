import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SkipLinksVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SkipLinksVariant2({
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
}: SkipLinksVariant2Props) {
  const defaultContent = (
    <>
      <nav
        className="absolute top-0 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-full rounded-sm bg-gray-100 p-4 transition-transform focus-within:translate-y-4"
        aria-label="Skip to"
      >
        <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">Skip to:</p>

        <div className="mt-1 flex flex-wrap gap-2">
          <a
            href="#mainNavigation"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
          >
            Navigation
          </a>

          <a
            href="#mainContent"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
          >
            Content
          </a>

          <a
            href="#mainFooter"
            className="text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 active:text-blue-600"
          >
            Footer
          </a>
        </div>
      </nav>
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
