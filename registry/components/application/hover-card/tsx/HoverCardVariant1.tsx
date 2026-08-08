import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type HoverCardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function HoverCardVariant1({
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
}: HoverCardVariant1Props) {
  const defaultContent = (
    <>
      <p className="max-w-sm text-sm leading-relaxed text-gray-600">
            Design review scheduled by
            <span className="relative inline-block">
              <a href="#" className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500">@sophia-chen</a>
      
              <span className="absolute left-1/2 top-full z-10 mt-2 w-72 -translate-x-1/2 rounded-lg border border-gray-200 bg-white p-4 text-left align-top shadow-lg shadow-gray-900/5">
                <span className="absolute -top-1.5 left-1/2 block size-3 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white"></span>
                <span className="relative flex gap-3">
                  <img src="https://i.pravatar.cc/64?img=47" alt="" className="size-10 shrink-0 rounded-full" />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-sm font-semibold text-gray-900">Sophia Chen</span>
                    <span className="text-sm text-gray-500">@sophia-chen</span>
                    <span className="mt-2 block text-sm leading-relaxed text-gray-600">Product design lead. Building the design system at Tessera.</span>
                    <span className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                      <span><span className="font-semibold text-gray-900">312</span> following</span>
                      <span><span className="font-semibold text-gray-900">4,209</span> followers</span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
            for this afternoon.
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
