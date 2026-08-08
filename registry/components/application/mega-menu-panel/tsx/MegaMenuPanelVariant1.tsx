import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MegaMenuPanelVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MegaMenuPanelVariant1({
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
}: MegaMenuPanelVariant1Props) {
  const defaultContent = (
    <>
<nav className="flex items-center gap-6 border-b border-gray-200 bg-white px-6 py-3">
      <span className="text-sm font-semibold text-gray-900">Tessera</span>
      <button type="button" aria-expanded="true" className="flex items-center gap-1 text-sm font-medium text-gray-900">
        Products
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <span className="text-sm font-medium text-gray-500">Solutions</span>
      <span className="text-sm font-medium text-gray-500">Pricing</span>
      <span className="text-sm font-medium text-gray-500">Docs</span>
    </nav>

    <div className="border-b border-gray-200 bg-white shadow-lg shadow-gray-900/5">
      <div className="mx-auto grid max-w-3xl grid-cols-[1fr_1fr_1fr_1.1fr] gap-6 px-6 py-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Build</p>
          <ul className="mt-3 space-y-3">
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Component Registry</a><p className="mt-0.5 text-xs text-gray-500">Copy-and-own UI primitives</p></li>
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Theme Engine</a><p className="mt-0.5 text-xs text-gray-500">Token-based restyling</p></li>
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">CLI</a><p className="mt-0.5 text-xs text-gray-500">Install components locally</p></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Ship</p>
          <ul className="mt-3 space-y-3">
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Dark Mode Generator</a><p className="mt-0.5 text-xs text-gray-500">Auto-derive dark variants</p></li>
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Screenshot Previews</a><p className="mt-0.5 text-xs text-gray-500">Verify visually, every time</p></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Learn</p>
          <ul className="mt-3 space-y-3">
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Documentation</a></li>
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Changelog</a></li>
            <li><a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-600">Blog</a></li>
          </ul>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <span className="inline-flex items-center rounded-full bg-gray-900 px-2 py-0.5 text-[11px] font-medium text-white">New</span>
          <p className="mt-2 text-sm font-semibold text-gray-900">Theme Scan v2</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-600">Learns your design tokens straight from an existing Tailwind config.</p>
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gray-900 hover:underline">
            Read the announcement
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
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
