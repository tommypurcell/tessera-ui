import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type WishlistHeartToggleVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function WishlistHeartToggleVariant2({
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
}: WishlistHeartToggleVariant2Props) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <div className="relative aspect-square bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=320&h=320&fit=crop"
                alt="White low-top sneaker"
                className="size-full object-cover"
              />
      
              <input type="checkbox" id="wish-card" className="peer sr-only" checked />
              <label
                htmlFor="wish-card"
                className="absolute top-2 right-2 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-400 shadow-sm backdrop-blur transition hover:scale-105 peer-checked:text-red-500"
              >
                <span className="sr-only">Toggle wishlist</span>
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </label>
            </div>
      
            <div className="p-3">
              <p className="text-sm font-medium text-gray-900">Court sneaker</p>
              <p className="mt-0.5 text-sm text-gray-500">$88.00</p>
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
