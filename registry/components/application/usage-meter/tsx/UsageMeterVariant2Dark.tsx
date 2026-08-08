import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type UsageMeterVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function UsageMeterVariant2Dark({
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
}: UsageMeterVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-red-500/30 bg-red-500/5 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">API requests</h3>
              <span className="text-sm font-medium text-red-400">96,400 <span className="font-normal text-gray-500">/ 100,000</span></span>
            </div>
      
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-800">
              <div className="h-full rounded-full bg-red-500" style={{width: '96%'}}></div>
            </div>
      
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs text-red-400">96% used · resets in 3 days</p>
              <a
                href="#"
                className="shrink-0 rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-200"
              >
                Upgrade plan
              </a>
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
