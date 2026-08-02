import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductGalleryCardsVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProductGalleryCardsVariant3Dark({
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
}: ProductGalleryCardsVariant3DarkProps) {
  const defaultContent = (
    <>
      <div className="max-w-60 overflow-hidden rounded-xl border border-gray-800 shadow-sm">
            <figure className="cycle-gallery">
              <img alt="Sage green t-shirt, worn" src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?auto=format&fit=crop&q=80&w=400" />
              <img alt="Plain white t-shirt, worn" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400" />
            </figure>
            <div className="bg-gray-900 p-4">
              <h2 className="text-sm font-semibold text-gray-100">Sage Cotton Tee</h2>
              <div className="mt-1 flex items-center gap-1 text-amber-400">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85z" /></svg>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85z" /></svg>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85z" /></svg>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85z" /></svg>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" className="size-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.73.99-5.8-4.21-4.1 5.82-.85z" /></svg>
                <span className="ml-1 text-xs text-gray-500">(128)</span>
              </div>
              <div className="mt-2 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-gray-400">$28</span>
                <button type="button" className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-950">Add to bag</button>
              </div>
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
