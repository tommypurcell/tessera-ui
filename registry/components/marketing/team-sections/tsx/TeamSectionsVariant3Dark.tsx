import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TeamSectionsVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TeamSectionsVariant3Dark({
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
}: TeamSectionsVariant3DarkProps) {
  const defaultContent = (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900 dark:text-white">
                Eric Johnson
              </h3>

              <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900 dark:text-white">
                Eric Johnson
              </h3>

              <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900 dark:text-white">
                Eric Johnson
              </h3>

              <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900 dark:text-white">
                Eric Johnson
              </h3>

              <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900 dark:text-white">
                Eric Johnson
              </h3>

              <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">Product Designer</p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-square rounded-full object-cover"
            />

            <div className="mt-4 text-center">
              <h3 className="text-lg/tight font-semibold text-gray-900 dark:text-white">
                Eric Johnson
              </h3>

              <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">Product Designer</p>
            </div>
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
