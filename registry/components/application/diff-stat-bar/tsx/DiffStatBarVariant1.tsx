import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DiffStatBarVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DiffStatBarVariant1({
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
}: DiffStatBarVariant1Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="truncate font-mono text-sm text-gray-700">src/lib/auth/session.ts</p>
      
              <div className="flex shrink-0 items-center gap-2 text-xs font-medium tabular-nums">
                <span className="text-green-600">+42</span>
                <span className="text-red-600">-17</span>
              </div>
            </div>
      
            <div
              className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-gray-100"
              role="img"
              aria-label="42 lines added, 17 lines removed"
            >
              <span className="h-full bg-green-500" style={{width: '71%'}}></span>
              <span className="h-full bg-red-500" style={{width: '29%'}}></span>
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
