import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type HoverCardVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function HoverCardVariant2Dark({
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
}: HoverCardVariant2DarkProps) {
  const defaultContent = (
    <>
      <p className="max-w-sm text-sm leading-relaxed text-gray-400">
            Read the full write-up on
            <span className="relative inline-block">
              <a href="#" className="font-medium text-white underline decoration-gray-600 underline-offset-2 hover:decoration-gray-400">tessera-ui.com/blog/theming</a>
      
              <span className="absolute left-0 top-full z-10 mt-2 w-80 rounded-lg border border-gray-700 bg-gray-900 shadow-lg shadow-black/40">
                <span className="block aspect-[2/1] w-full rounded-t-lg bg-gradient-to-br from-gray-800 to-gray-700"></span>
                <span className="block p-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500">tessera-ui.com</span>
                  <span className="mt-1 block text-sm font-semibold text-white">Theming Tessera components with CSS variables</span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-400">A walkthrough of the token layer that lets you restyle every component without touching source.</span>
                </span>
              </span>
            </span>
            before the workshop.
          </p>
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
