import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CartsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CartsVariant1({
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
}: CartsVariant1Props) {
  const defaultContent = (
    <>
      <div
        className="relative w-screen max-w-sm border border-gray-300 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        aria-label="Shopping cart"
        tabIndex={-1}
      >
        <button className="absolute inset-e-4 top-4 text-gray-600 transition hover:scale-110">
          <span className="sr-only">Close cart</span>

          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1160"
                alt=""
                className="size-16 rounded-sm object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1160"
                alt=""
                className="size-16 rounded-sm object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1160"
                alt=""
                className="size-16 rounded-sm object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>
            </li>
          </ul>

          <div className="space-y-4 text-center">
            <a
              href="#"
              className="block rounded-sm border border-gray-300 bg-gray-50 px-5 py-3 text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              View my cart (2)
            </a>

            <a
              href="#"
              className="block rounded-sm border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-blue-700 hover:bg-blue-700"
            >
              Checkout
            </a>

            <a
              href="#"
              className="inline-block text-sm text-gray-600 underline underline-offset-4 transition-colors hover:text-gray-700"
            >
              Continue shopping
            </a>
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
