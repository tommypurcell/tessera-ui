import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ColorPickerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ColorPickerVariant1Dark({
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
}: ColorPickerVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="relative inline-block">
            <button
              type="button"
              aria-expanded="true"
              aria-haspopup="dialog"
              className="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-900 py-1.5 pl-1.5 pr-3 text-sm font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-100 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <span className="size-5 rounded border border-white/10" style={{backgroundColor: '#6366f1'}}></span>
              Brand color
            </button>
      
            <div
              role="dialog"
              aria-label="Choose a color"
              className="absolute left-0 top-full z-10 mt-2 w-64 rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-lg shadow-black/40"
            >
              <div className="grid grid-cols-8 gap-1.5">
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#ef4444'}} aria-label="Red"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#f97316'}} aria-label="Orange"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#f59e0b'}} aria-label="Amber"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#eab308'}} aria-label="Yellow"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#84cc16'}} aria-label="Lime"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#22c55e'}} aria-label="Green"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#10b981'}} aria-label="Emerald"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#14b8a6'}} aria-label="Teal"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#06b6d4'}} aria-label="Cyan"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#0ea5e9'}} aria-label="Sky"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#3b82f6'}} aria-label="Blue"></button>
                <button
                  type="button"
                  aria-label="Indigo"
                  aria-current="true"
                  className="relative size-6 rounded-full ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                  style={{backgroundColor: '#6366f1'}}
                >
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="absolute inset-0 m-auto size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#a855f7'}} aria-label="Purple"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#d946ef'}} aria-label="Fuchsia"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#ec4899'}} aria-label="Pink"></button>
                <button type="button" className="size-6 rounded-full border border-white/10" style={{backgroundColor: '#64748b'}} aria-label="Slate"></button>
              </div>
      
              <div className="mt-4 flex items-center gap-2 border-t border-gray-700 pt-3">
                <span className="size-7 shrink-0 rounded-md border border-white/10" style={{backgroundColor: '#6366f1'}}></span>
                <label htmlFor="color-picker-hex-dark" className="sr-only">Hex color</label>
                <input
                  id="color-picker-hex-dark"
                  type="text"
                  value="#6366F1"
                  className="block w-full rounded-md border-gray-700 bg-gray-800 font-mono text-sm text-gray-200 shadow-sm focus:border-white focus:ring-white"
                />
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
