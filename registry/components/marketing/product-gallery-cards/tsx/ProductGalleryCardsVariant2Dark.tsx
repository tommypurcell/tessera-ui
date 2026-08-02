import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductGalleryCardsVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProductGalleryCardsVariant2Dark({
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
}: ProductGalleryCardsVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="max-w-60 overflow-hidden rounded-xl border border-gray-800 shadow-sm">
            <figure className="cycle-gallery">
              <span className="absolute top-2 left-2 z-10 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-950">New</span>
              <img alt="Plain white t-shirt, worn" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" />
              <img alt="Sage green t-shirts on a rack" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" />
            </figure>
            <div className="bg-gray-900 p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold text-gray-100">Classic White Tee</h2>
                <span className="text-sm font-medium text-gray-400">$24</span>
              </div>
              <p className="mt-1 text-sm text-gray-400">A no-fuss staple cut from soft, breathable cotton.</p>
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
