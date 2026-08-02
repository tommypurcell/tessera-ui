import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DetailsListVariant4DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DetailsListVariant4Dark({
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
}: DetailsListVariant4DarkProps) {
  const defaultContent = (
    <>
      <div className="flow-root">
            <dl
              className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50 dark:divide-gray-700 dark:border-gray-800 dark:*:even:bg-gray-800"
            >
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">Title</dt>
      
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Mr</dd>
              </div>
      
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">Name</dt>
      
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">John Frusciante</dd>
              </div>
      
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">Occupation</dt>
      
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Guitarist</dd>
              </div>
      
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">Salary</dt>
      
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">$1,000,000+</dd>
              </div>
      
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 dark:text-white">Bio</dt>
      
                <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                  doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                  aspernatur neque molestiae labore aliquam soluta architecto?
                </dd>
              </div>
            </dl>
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
