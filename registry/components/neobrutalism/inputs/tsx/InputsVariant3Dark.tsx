import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type InputsVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function InputsVariant3Dark({
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
}: InputsVariant3DarkProps) {
  const defaultContent = (
    <>
      <label htmlFor="Search">
        <span className="sr-only"> Search </span>

        <div className="flex border-2 border-black shadow-[4px_4px_0_0] shadow-black focus-within:ring-2 focus-within:ring-yellow-300 dark:border-white dark:shadow-white dark:focus-within:ring-yellow-600">
          <input
            type="search"
            id="Search"
            className="w-full border-none bg-white text-black focus:ring-0 sm:text-sm dark:bg-gray-900 dark:text-white"
          />

          <button
            type="submit"
            className="bg-yellow-300 px-4 py-2 text-xs/none font-bold tracking-wide uppercase hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-0 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:bg-yellow-500"
          >
            Search
          </button>
        </div>
      </label>
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
