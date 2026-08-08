import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PhoneNumberInputVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PhoneNumberInputVariant2Dark({
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
}: PhoneNumberInputVariant2DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm">
      <label htmlFor="phone-input-2-dark" className="mb-1.5 block text-sm font-medium text-gray-300">Phone number</label>
      <div className="relative">
        <div className="flex items-stretch rounded-md border border-gray-100 bg-gray-900 shadow-sm ring-1 ring-gray-100">
          <button
            type="button"
            aria-expanded="true"
            aria-haspopup="listbox"
            className="flex shrink-0 items-center gap-1.5 rounded-l-md border-r border-gray-700 bg-gray-800 px-3 text-sm text-gray-200"
          >
            <span className="text-base leading-none" aria-hidden="true">🇬🇧</span>
            <span className="text-gray-400">+44</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <input
            type="tel"
            id="phone-input-2-dark"
            defaultValue="20 7946 0958"
            className="h-10 w-full border-0 bg-transparent px-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-0"
          />
        </div>

        <ul role="listbox" aria-label="Country code" className="absolute left-0 top-full z-10 mt-1.5 w-56 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 py-1 shadow-lg shadow-black/40">
          <li role="option" aria-selected="false" className="flex cursor-pointer items-center justify-between px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇺🇸</span>United States <span className="text-gray-500">+1</span></span>
          </li>
          <li role="option" aria-selected="true" className="flex cursor-pointer items-center justify-between bg-white/5 px-3 py-1.5 text-sm font-medium text-white">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇬🇧</span>United Kingdom <span className="text-gray-500">+44</span></span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-3.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </li>
          <li role="option" aria-selected="false" className="flex cursor-pointer items-center justify-between px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇩🇪</span>Germany <span className="text-gray-500">+49</span></span>
          </li>
          <li role="option" aria-selected="false" className="flex cursor-pointer items-center justify-between px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5">
            <span className="flex items-center gap-2"><span aria-hidden="true">🇯🇵</span>Japan <span className="text-gray-500">+81</span></span>
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
