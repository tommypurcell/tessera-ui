import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductGalleryCardsVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProductGalleryCardsVariant1Dark({
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
}: ProductGalleryCardsVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="max-w-60 overflow-hidden rounded-xl border border-gray-800 shadow-sm">
            <figure className="cycle-gallery">
              <img alt="Sage green t-shirt, worn" src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?auto=format&fit=crop&q=80&w=400" />
              <img alt="Sage green t-shirts on a rack" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" />
            </figure>
            <div className="bg-gray-900 p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-semibold text-gray-100">Sage Cotton Tee</h2>
                <span className="text-sm font-medium text-gray-400">$28</span>
              </div>
              <p className="mt-1 text-sm text-gray-400">Heavyweight cotton with a relaxed, garment-dyed finish.</p>
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
