import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductCardsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProductCardsVariant1({
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
}: ProductCardsVariant1Props) {
  const defaultContent = (
    <>
      <a href="#" className="group block overflow-hidden">
        <div className="relative h-87.5 sm:h-112.5">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1160"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          />

          <img
            src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?auto=format&fit=crop&q=80&w=1160"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>

        <div className="relative bg-white pt-3">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            Limited Edition Sports Trainer
          </h3>

          <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
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
