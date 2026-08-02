import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductCardsVariant3Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProductCardsVariant3({
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
}: ProductCardsVariant3Props) {
  const defaultContent = (
    <>
      <a href="#" className="group block">
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&q=80&w=1160"
          alt=""
          className="h-87.5 w-full object-cover sm:h-112.5"
        />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              Small Headphones
            </h3>

            <p className="mt-1.5 text-xs text-pretty text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta
              quisquam voluptatem nemo.
            </p>
          </div>

          <p className="text-gray-900">$299</p>
        </div>
      </a>
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
