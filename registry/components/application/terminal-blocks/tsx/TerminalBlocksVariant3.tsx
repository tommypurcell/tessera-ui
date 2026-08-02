import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TerminalBlocksVariant3Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TerminalBlocksVariant3({
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
}: TerminalBlocksVariant3Props) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-950">
            <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-red-500"></span>
              <span className="size-2.5 rounded-full bg-amber-500"></span>
              <span className="size-2.5 rounded-full bg-emerald-500"></span>
              <span className="ml-2 font-mono text-xs text-gray-400">deploy.sh</span>
            </div>
            <div className="space-y-1.5 p-4 font-mono text-sm">
              <p className="flex gap-2 text-gray-100">
                <span className="select-none text-emerald-400">$</span>
                <span>./deploy.sh --env production</span>
              </p>
              <p className="pl-5 text-gray-400">Building assets...</p>
              <p className="pl-5 text-gray-400">Uploading to edge network...</p>
              <p className="pl-5 text-emerald-400">Deployed to production in 4.2s</p>
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
