import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DataUsageRingVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DataUsageRingVariant2Dark({
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
}: DataUsageRingVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="flex items-center gap-4 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
            <div className="relative flex size-16 shrink-0 items-center justify-center">
              <svg className="size-16 -rotate-90" viewBox="0 0 72 72" role="img" aria-label="9.2 of 10 gigabytes used, nearing limit">
                <circle cx="36" cy="36" r="32" fill="none" stroke="currentColor" strokeWidth="6" className="text-red-500/20" />
                <circle
                  cx="36"
                  cy="36"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  stroke-dasharray="201.1"
                  stroke-dashoffset="16.1"
                  className="text-red-400"
                />
              </svg>
              <p className="absolute font-mono text-xs font-semibold text-red-300">92%</p>
            </div>
      
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">9.2 of 10 GB used</p>
              <p className="text-xs text-red-400">Nearing your data limit</p>
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
