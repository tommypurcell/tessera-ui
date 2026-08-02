import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TimelinesVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TimelinesVariant3Dark({
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
}: TimelinesVariant3DarkProps) {
  const defaultContent = (
    <>
      <ol className="relative flex gap-8 before:absolute before:-mt-px before:h-0.5 before:w-full before:rounded-full before:bg-gray-200 dark:before:bg-gray-700">
        <li className="relative -mt-1.5">
          <span className="block size-3 rounded-full bg-blue-600"></span>

          <div className="mt-4">
            <time className="text-xs/none font-medium text-gray-700 dark:text-gray-200">
              12/02/2025
            </time>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Kickoff</h3>

            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
              adipisci tenetur sunt quae exercitationem sed pariatur porro!
            </p>
          </div>
        </li>

        <li className="relative -mt-1.5">
          <span className="block size-3 rounded-full bg-blue-600"></span>

          <div className="mt-4">
            <time className="text-xs/none font-medium text-gray-700 dark:text-gray-200">
              15/03/2025
            </time>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white">First Milestone</h3>

            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
              adipisci tenetur sunt quae exercitationem sed pariatur porro!
            </p>
          </div>
        </li>

        <li className="relative -mt-1.5">
          <span className="block size-3 rounded-full bg-blue-600"></span>

          <div className="mt-4">
            <time className="text-xs/none font-medium text-gray-700 dark:text-gray-200">
              24/04/2025
            </time>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Launch</h3>

            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
              adipisci tenetur sunt quae exercitationem sed pariatur porro!
            </p>
          </div>
        </li>
      </ol>
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
