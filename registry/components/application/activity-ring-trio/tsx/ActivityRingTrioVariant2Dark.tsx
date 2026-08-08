import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ActivityRingTrioVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ActivityRingTrioVariant2Dark({
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
}: ActivityRingTrioVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900 px-4 py-3">
            <svg className="size-14 shrink-0 -rotate-90" viewBox="0 0 56 56" role="img" aria-label="Move 100%, Exercise 93%, Stand 75% of daily goals">
              <circle cx="28" cy="28" r="22" fill="none" stroke="currentColor" strokeWidth="5" className="text-red-500/15" />
              <circle
                cx="28"
                cy="28"
                r="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                stroke-dasharray="138.2"
                stroke-dashoffset="0"
                className="text-red-400"
              />
      
              <circle cx="28" cy="28" r="16" fill="none" stroke="currentColor" strokeWidth="5" className="text-green-500/15" />
              <circle
                cx="28"
                cy="28"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                stroke-dasharray="100.5"
                stroke-dashoffset="6.7"
                className="text-green-400"
              />
      
              <circle cx="28" cy="28" r="10" fill="none" stroke="currentColor" strokeWidth="5" className="text-blue-500/15" />
              <circle
                cx="28"
                cy="28"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                stroke-dasharray="62.8"
                stroke-dashoffset="15.7"
                className="text-blue-400"
              />
            </svg>
      
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Today's activity</p>
              <p className="text-xs text-gray-400">2 of 3 rings closed</p>
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
