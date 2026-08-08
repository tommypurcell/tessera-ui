import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RequestBuilderVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RequestBuilderVariant1({
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
}: RequestBuilderVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-200 p-3">
        <label htmlFor="rb-method" className="sr-only">HTTP method</label>
        <select id="rb-method" defaultValue="POST" className="h-9 shrink-0 rounded-md border border-gray-300 bg-emerald-50 px-2.5 text-sm font-semibold text-emerald-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-900">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input
          type="text"
          defaultValue="https://api.tessera-ui.com/v1/components"
          className="h-9 w-full rounded-md border border-gray-300 px-3 font-mono text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
        />
        <button type="button" className="h-9 shrink-0 rounded-md bg-gray-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800">Send</button>
      </div>

      <div className="flex items-center gap-4 border-b border-gray-200 px-3 text-sm">
        <button type="button" className="border-b-2 border-transparent py-2 font-medium text-gray-500 hover:text-gray-700">Params</button>
        <button type="button" aria-current="true" className="border-b-2 border-gray-900 py-2 font-medium text-gray-900">Headers</button>
        <button type="button" className="border-b-2 border-transparent py-2 font-medium text-gray-500 hover:text-gray-700">Body</button>
        <button type="button" className="border-b-2 border-transparent py-2 font-medium text-gray-500 hover:text-gray-700">Auth</button>
      </div>

      <div className="p-3">
        <div className="grid grid-cols-[1fr_1fr_auto] gap-2 text-xs font-medium text-gray-400">
          <span>KEY</span>
          <span>VALUE</span>
          <span></span>
        </div>
        <div className="mt-1.5 space-y-1.5">
          <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-2">
            <input type="text" defaultValue="Content-Type" className="h-8 rounded-md border border-gray-200 px-2 font-mono text-xs text-gray-700" />
            <input type="text" defaultValue="application/json" className="h-8 rounded-md border border-gray-200 px-2 font-mono text-xs text-gray-700" />
            <button type="button" aria-label="Remove header" className="rounded p-1 text-gray-300 hover:bg-gray-100 hover:text-gray-600">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-2">
            <input type="text" defaultValue="Authorization" className="h-8 rounded-md border border-gray-200 px-2 font-mono text-xs text-gray-700" />
            <input type="text" defaultValue="Bearer &bull;&bull;&bull;&bull;&bull;&bull;" className="h-8 rounded-md border border-gray-200 px-2 font-mono text-xs text-gray-700" />
            <button type="button" aria-label="Remove header" className="rounded p-1 text-gray-300 hover:bg-gray-100 hover:text-gray-600">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <button type="button" className="mt-2 flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add header
        </button>
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
