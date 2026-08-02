import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TerminalBlocksVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TerminalBlocksVariant2Dark({
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
}: TerminalBlocksVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="space-y-1.5 rounded-lg border border-gray-800 bg-black p-4 font-mono text-sm">
            <p className="flex gap-2 text-gray-100">
              <span className="select-none text-emerald-400">$</span>
              <span>pnpm test</span>
            </p>
            <p className="pl-5 text-emerald-400">✓ renders the empty state (12ms)</p>
            <p className="pl-5 text-emerald-400">✓ submits the form on enter (8ms)</p>
            <p className="pl-5 text-red-400">✗ focuses the first invalid field (41ms)</p>
            <p className="pl-5 text-gray-500">3 tests, 1 failed</p>
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
