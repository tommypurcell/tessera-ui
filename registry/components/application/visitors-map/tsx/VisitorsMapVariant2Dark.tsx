import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type VisitorsMapVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function VisitorsMapVariant2Dark({
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
}: VisitorsMapVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
              </span>
              <h3 className="text-sm font-semibold text-white">342 people online</h3>
            </div>
      
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-24 shrink-0 text-xs text-gray-400">United States</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <span className="block h-full w-[68%] rounded-full bg-emerald-500"></span>
                </span>
                <span className="w-8 shrink-0 text-right text-xs font-medium text-white">142</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-24 shrink-0 text-xs text-gray-400">Germany</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <span className="block h-full w-[40%] rounded-full bg-emerald-500"></span>
                </span>
                <span className="w-8 shrink-0 text-right text-xs font-medium text-white">84</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-24 shrink-0 text-xs text-gray-400">Japan</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <span className="block h-full w-[28%] rounded-full bg-emerald-500"></span>
                </span>
                <span className="w-8 shrink-0 text-right text-xs font-medium text-white">58</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-24 shrink-0 text-xs text-gray-400">Brazil</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-800">
                  <span className="block h-full w-[18%] rounded-full bg-emerald-500"></span>
                </span>
                <span className="w-8 shrink-0 text-right text-xs font-medium text-white">38</span>
              </li>
            </ul>
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
