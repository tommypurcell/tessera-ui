import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductCardsVariant5Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProductCardsVariant5({
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
}: ProductCardsVariant5Props) {
  const defaultContent = (
    <>
      <a href="#" className="group block">
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&q=80&w=1160"
          alt=""
          className="h-87.5 w-full object-cover sm:h-112.5"
        />

        <div className="mt-1.5">
          <p className="text-xs text-gray-500">Space Grey</p>

          <div className="mt-1.5 flex gap-1">
            <form>
              <fieldset>
                <legend className="sr-only">Color</legend>
              </fieldset>

              <div className="flex flex-wrap justify-center gap-1">
                <div>
                  <input type="checkbox" id="ColorSg" className="sr-only" />

                  <label
                    htmlFor="ColorSg"
                    className="block size-4 cursor-pointer rounded-full bg-[#595759]"
                  >
                    <span className="sr-only"> Space Gray </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorS" className="sr-only" />

                  <label
                    htmlFor="ColorS"
                    className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4]"
                  >
                    <span className="sr-only"> Silver </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorP" className="sr-only" />

                  <label
                    htmlFor="ColorP"
                    className="block size-4 cursor-pointer rounded-full bg-[#d89f97]"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorG" className="sr-only" />

                  <label
                    htmlFor="ColorG"
                    className="block size-4 cursor-pointer rounded-full bg-[#afbfab]"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorSb" className="sr-only" />

                  <label
                    htmlFor="ColorSb"
                    className="block size-4 cursor-pointer rounded-full bg-[#91a5bb]"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              Small Headphones
            </h3>

            <p className="text-gray-900">$299</p>
          </div>
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
