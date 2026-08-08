import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PhoneNumberInputVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PhoneNumberInputVariant2({
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
}: PhoneNumberInputVariant2Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm">
      <label htmlFor="phone-input-2" className="mb-1.5 block text-sm font-medium text-gray-700">Phone number</label>
      <div className="relative">
        <div className="flex items-stretch rounded-md border border-gray-900 bg-white shadow-sm ring-1 ring-gray-900">
          <button
            type="button"
            aria-expanded="true"
            aria-haspopup="listbox"
            className="flex shrink-0 items-center gap-1.5 rounded-l-md border-r border-gray-200 bg-gray-50 px-3 text-sm text-gray-700"
          >
            <span className="text-base leading-none" aria-hidden="true">🇬🇧</span>
            <span className="text-gray-500">+44</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <input
            type="tel"
            id="phone-input-2"
            defaultValue="20 7946 0958"
            className="h-10 w-full border-0 bg-transparent px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
        </div>

        <ul role="listbox" aria-label="Country code" className="absolute left-0 top-full z-10 mt-1.5 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg shadow-gray-900/10">
          <li role="option" aria-selected="false" className="flex cursor-pointer items-center justify-between px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇺🇸</span>United States <span className="text-gray-400">+1</span></span>
          </li>
          <li role="option" aria-selected="true" className="flex cursor-pointer items-center justify-between bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-900">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇬🇧</span>United Kingdom <span className="text-gray-400">+44</span></span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-3.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </li>
          <li role="option" aria-selected="false" className="flex cursor-pointer items-center justify-between px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇩🇪</span>Germany <span className="text-gray-400">+49</span></span>
          </li>
          <li role="option" aria-selected="false" className="flex cursor-pointer items-center justify-between px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇯🇵</span>Japan <span className="text-gray-400">+81</span></span>
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
