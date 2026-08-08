import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type InputGroupVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function InputGroupVariant1Dark({
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
}: InputGroupVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
        <label htmlFor="search-input-group-dark" className="mb-1.5 block text-sm font-medium text-gray-300">Search components</label>
        <div className="flex items-center rounded-md border border-gray-700 bg-gray-900 shadow-sm transition-colors focus-within:border-gray-100 focus-within:ring-1 focus-within:ring-gray-100">
          <span className="flex items-center pl-3 text-gray-500">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
          <input
            type="text"
            id="search-input-group-dark"
            placeholder="Search “hover card”…"
            className="h-10 w-full border-0 bg-transparent px-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-0"
          />
          <kbd className="mr-2.5 hidden shrink-0 items-center rounded border border-gray-700 bg-gray-800 px-1.5 py-0.5 text-xs font-medium text-gray-400 sm:inline-flex">⌘K</kbd>
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
