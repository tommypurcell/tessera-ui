import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CtasVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CtasVariant1Dark({
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
}: CtasVariant1DarkProps) {
  const defaultContent = (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
              etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet
              amet volutpat quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-2 focus:ring-yellow-400 focus:outline-hidden"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt=""
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?auto=format&fit=crop&q=80&w=1160"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
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
