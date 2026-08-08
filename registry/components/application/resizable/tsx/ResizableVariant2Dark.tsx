import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ResizableVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ResizableVariant2Dark({
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
}: ResizableVariant2DarkProps) {
  const defaultContent = (
    <>
      <div
            className="flex h-80 w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm"
          >
            <div className="flex-1 overflow-auto p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Preview</h3>
              <div className="mt-3 flex h-32 items-center justify-center rounded-md border border-dashed border-gray-700 text-sm text-gray-500">
                Canvas preview area
              </div>
            </div>
      
            <div
              role="separator"
              aria-orientation="horizontal"
              aria-label="Resize panels"
              tabIndex={0}
              className="group relative h-px shrink-0 cursor-row-resize bg-gray-700 focus:outline-none"
            >
              <span
                className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 group-hover:bg-white/5 group-focus-visible:bg-white/10"
              ></span>
              <span
                className="absolute left-1/2 top-1/2 h-1 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-600 group-hover:bg-gray-500"
              ></span>
            </div>
      
            <div className="h-28 overflow-auto bg-black p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Console</h3>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-gray-300">$ pnpm dev
      ▲ Local:   http://localhost:4321
      ▲ ready in 312ms</pre>
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
