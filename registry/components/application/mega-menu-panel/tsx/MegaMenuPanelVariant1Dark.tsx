import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MegaMenuPanelVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MegaMenuPanelVariant1Dark({
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
}: MegaMenuPanelVariant1DarkProps) {
  const defaultContent = (
    <>
<nav className="flex items-center gap-6 border-b border-gray-700 bg-gray-900 px-6 py-3">
      <span className="text-sm font-semibold text-white">Tessera</span>
      <button type="button" aria-expanded="true" className="flex items-center gap-1 text-sm font-medium text-white">
        Products
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <span className="text-sm font-medium text-gray-400">Solutions</span>
      <span className="text-sm font-medium text-gray-400">Pricing</span>
      <span className="text-sm font-medium text-gray-400">Docs</span>
    </nav>

    <div className="border-b border-gray-700 bg-gray-900 shadow-lg shadow-black/40">
      <div className="mx-auto grid max-w-3xl grid-cols-[1fr_1fr_1fr_1.1fr] gap-6 px-6 py-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Build</p>
          <ul className="mt-3 space-y-3">
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Component Registry</a><p className="mt-0.5 text-xs text-gray-400">Copy-and-own UI primitives</p></li>
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Theme Engine</a><p className="mt-0.5 text-xs text-gray-400">Token-based restyling</p></li>
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">CLI</a><p className="mt-0.5 text-xs text-gray-400">Install components locally</p></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Ship</p>
          <ul className="mt-3 space-y-3">
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Dark Mode Generator</a><p className="mt-0.5 text-xs text-gray-400">Auto-derive dark variants</p></li>
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Screenshot Previews</a><p className="mt-0.5 text-xs text-gray-400">Verify visually, every time</p></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Learn</p>
          <ul className="mt-3 space-y-3">
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Documentation</a></li>
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Changelog</a></li>
            <li><a href="#" className="block text-sm font-medium text-white hover:text-gray-300">Blog</a></li>
          </ul>
        </div>

        <div className="rounded-lg bg-white/5 p-4">
          <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-gray-900">New</span>
          <p className="mt-2 text-sm font-semibold text-white">Theme Scan v2</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-400">Learns your design tokens straight from an existing Tailwind config.</p>
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white hover:underline">
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
