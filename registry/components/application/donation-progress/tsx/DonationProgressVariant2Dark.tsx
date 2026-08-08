import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DonationProgressVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DonationProgressVariant2Dark({
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
}: DonationProgressVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-900 p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=96&h=96&fit=crop"
                alt=""
                className="size-14 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">School library rebuild</p>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[42%] rounded-full bg-indigo-500"></div>
                </div>
                <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
                  <span><span className="font-medium text-white">$8,400</span> of $20,000</span>
                  <span>128 donors</span>
                </div>
              </div>
              <button type="button" className="shrink-0 rounded-md bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-400">
                Give
              </button>
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
