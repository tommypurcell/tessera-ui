import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CommandBarBreadcrumbVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CommandBarBreadcrumbVariant1({
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
}: CommandBarBreadcrumbVariant1Props) {
  const defaultContent = (
    <>
<nav aria-label="Breadcrumb" className="w-full max-w-lg">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        <li className="flex items-center gap-1">
          <a href="#" className="rounded px-1.5 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900">Workspace</a>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5 text-gray-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </li>
        <li className="relative flex items-center gap-1">
          <button type="button" aria-expanded="true" aria-haspopup="listbox" className="flex items-center gap-1 rounded bg-gray-100 px-1.5 py-1 font-medium text-gray-900">
            Design System
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5 text-gray-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

          <ul role="listbox" aria-label="Sibling projects" className="absolute left-0 top-full z-10 mt-1.5 w-52 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg shadow-gray-900/10">
            <li role="option" aria-selected="true" className="flex cursor-pointer items-center justify-between bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900">
              Design System
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-3.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </li>
            <li role="option" aria-selected="false" className="cursor-pointer px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Marketing Site</li>
            <li role="option" aria-selected="false" className="cursor-pointer px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Mobile App</li>
            <li role="option" aria-selected="false" className="cursor-pointer px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Internal Tools</li>
          </ul>
        </li>
        <li className="flex items-center gap-1">
          <a href="#" className="rounded px-1.5 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900">Components</a>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5 text-gray-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </li>
        <li aria-current="page" className="rounded px-1.5 py-1 font-medium text-gray-900">Hover Card</li>
      </ol>
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
