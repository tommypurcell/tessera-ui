import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AutocompleteAddressFieldVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AutocompleteAddressFieldVariant2({
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
}: AutocompleteAddressFieldVariant2Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm space-y-3">
      <div>
        <label htmlFor="addr2-street" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-gray-700">
          Street address
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-3.5 text-emerald-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75 6 14.25l7.5-7.5" />
          </svg>
        </label>
        <input type="text" id="addr2-street" defaultValue="128 Market St" className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900" />
      </div>

      <div>
        <label htmlFor="addr2-unit" className="mb-1.5 block text-sm font-medium text-gray-700">Apt / suite <span className="font-normal text-gray-400">(optional)</span></label>
        <input type="text" id="addr2-unit" placeholder="Apt 4B" className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="addr2-city" className="mb-1.5 block text-sm font-medium text-gray-700">City</label>
          <input type="text" id="addr2-city" defaultValue="San Francisco" className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900" />
        </div>
        <div>
          <label htmlFor="addr2-state" className="mb-1.5 block text-sm font-medium text-gray-700">State</label>
          <input type="text" id="addr2-state" defaultValue="CA" className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900" />
        </div>
      </div>

      <div className="w-1/2 pr-1.5">
        <label htmlFor="addr2-zip" className="mb-1.5 block text-sm font-medium text-gray-700">ZIP code</label>
        <input type="text" id="addr2-zip" defaultValue="94105" className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-900" />
      </div>

      <p className="flex items-center gap-1.5 text-xs text-gray-500">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5 text-emerald-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75 6 14.25l7.5-7.5" />
        </svg>
        Filled from address lookup — edit any field if needed.
      </p>
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
