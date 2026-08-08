import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AutocompleteAddressFieldVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AutocompleteAddressFieldVariant1({
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
}: AutocompleteAddressFieldVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm">
      <label htmlFor="addr-input" className="mb-1.5 block text-sm font-medium text-gray-700">Street address</label>
      <div className="relative">
        <div className="relative">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <input
            type="text"
            id="addr-input"
            defaultValue="128 Market"
            role="combobox"
            aria-expanded="true"
            aria-controls="addr-listbox"
            aria-autocomplete="list"
            className="h-10 w-full rounded-md border border-gray-900 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 shadow-sm ring-1 ring-gray-900 focus:outline-none"
          />
        </div>

        <ul id="addr-listbox" role="listbox" className="absolute left-0 top-full z-10 mt-1.5 w-full overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg shadow-gray-900/10">
          <li role="option" aria-selected="true" className="cursor-pointer bg-gray-50 px-3 py-2">
            <p className="text-sm font-medium text-gray-900">128 Market St</p>
            <p className="text-xs text-gray-500">San Francisco, CA 94105</p>
          </li>
          <li role="option" aria-selected="false" className="cursor-pointer px-3 py-2 hover:bg-gray-50">
            <p className="text-sm font-medium text-gray-900">128 Market Ave</p>
            <p className="text-xs text-gray-500">Portland, OR 97201</p>
          </li>
          <li role="option" aria-selected="false" className="cursor-pointer px-3 py-2 hover:bg-gray-50">
            <p className="text-sm font-medium text-gray-900">1280 Market St</p>
            <p className="text-xs text-gray-500">San Francisco, CA 94102</p>
          </li>
          <li role="option" aria-selected="false" className="cursor-pointer px-3 py-2 hover:bg-gray-50">
            <p className="text-sm font-medium text-gray-900">128 Market Blvd</p>
            <p className="text-xs text-gray-500">Austin, TX 78701</p>
          </li>
        </ul>
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
