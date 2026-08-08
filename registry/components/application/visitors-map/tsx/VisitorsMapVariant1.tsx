import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type VisitorsMapVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function VisitorsMapVariant1({
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
}: VisitorsMapVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Live visitors</h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                </span>
                Live
              </span>
            </div>
      
            <p className="mt-1 text-3xl font-bold text-gray-900">1,284</p>
            <p className="text-xs text-gray-500">active right now</p>
      
            <div className="relative mt-3 h-32 overflow-hidden rounded-md bg-gray-50">
              <svg viewBox="0 0 300 130" className="size-full">
                <g fill="#d1d5db">
                  <circle cx="20" cy="40" r="2" /><circle cx="30" cy="35" r="2" /><circle cx="40" cy="45" r="2" />
                  <circle cx="55" cy="30" r="2" /><circle cx="65" cy="50" r="2" /><circle cx="80" cy="35" r="2" />
                  <circle cx="95" cy="55" r="2" /><circle cx="110" cy="40" r="2" /><circle cx="125" cy="60" r="2" />
                  <circle cx="140" cy="35" r="2" /><circle cx="155" cy="50" r="2" /><circle cx="170" cy="30" r="2" />
                  <circle cx="185" cy="45" r="2" /><circle cx="200" cy="60" r="2" /><circle cx="215" cy="35" r="2" />
                  <circle cx="230" cy="50" r="2" /><circle cx="245" cy="40" r="2" /><circle cx="260" cy="55" r="2" />
                  <circle cx="275" cy="35" r="2" /><circle cx="50" cy="75" r="2" /><circle cx="70" cy="90" r="2" />
                  <circle cx="90" cy="80" r="2" /><circle cx="120" cy="95" r="2" /><circle cx="150" cy="85" r="2" />
                  <circle cx="180" cy="95" r="2" /><circle cx="210" cy="80" r="2" /><circle cx="240" cy="90" r="2" />
                </g>
                <circle cx="65" cy="50" r="4" fill="#10b981" opacity="0.9" />
                <circle cx="65" cy="50" r="9" fill="#10b981" opacity="0.2" />
                <circle cx="185" cy="45" r="4" fill="#10b981" opacity="0.9" />
                <circle cx="185" cy="45" r="9" fill="#10b981" opacity="0.2" />
                <circle cx="230" cy="50" r="3.5" fill="#10b981" opacity="0.9" />
                <circle cx="230" cy="50" r="8" fill="#10b981" opacity="0.2" />
                <circle cx="120" cy="95" r="3" fill="#10b981" opacity="0.8" />
              </svg>
            </div>
      
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>North America · 512</span>
              <span>Europe · 398</span>
              <span>Asia · 374</span>
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
