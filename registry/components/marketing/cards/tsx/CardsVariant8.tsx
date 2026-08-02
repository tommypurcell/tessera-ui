import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CardsVariant8Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CardsVariant8({
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
}: CardsVariant8Props) {
  const defaultContent = (
    <>
      <article className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div>
          </div>

          <div>
            <strong className="rounded-sm border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              Episode #101
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <a href="#" className="hover:underline">
                {' '}
                Some Interesting Podcast Title{' '}
              </a>
            </h3>

            <p className="mt-1 text-sm text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla amet voluptatum
              sit rerum, atque, quo culpa ut necessitatibus eius suscipit eum accusamus, aperiam
              voluptas exercitationem facere aliquid fuga. Sint.
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  aria-hidden="true"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                <p className="text-xs font-medium">48:32 minutes</p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                Featuring-3
                <a href="#" className="underline hover:text-gray-700">
                  Barry
                </a>
                ,
                <a href="#" className="underline hover:text-gray-700">
                  Sandra
                </a>{' '}
                and
                <a href="#" className="underline hover:text-gray-700">
                  August
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
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
