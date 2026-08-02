import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TimelinesVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TimelinesVariant2({
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
}: TimelinesVariant2Props) {
  const defaultContent = (
    <>
      <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

            <div className="-mt-2">
              <time className="text-xs/none font-medium text-gray-700">12/02/2025</time>

              <h3 className="text-lg font-bold text-gray-900">Kickoff</h3>

              <p className="mt-0.5 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                adipisci tenetur sunt quae exercitationem sed pariatur porro!
              </p>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

            <div className="-mt-2">
              <time className="text-xs/none font-medium text-gray-700">5/03/2025</time>

              <h3 className="text-lg font-bold text-gray-900">First Milestone</h3>

              <p className="mt-0.5 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                adipisci tenetur sunt quae exercitationem sed pariatur porro!
              </p>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

            <div className="-mt-2">
              <time className="text-xs/none font-medium text-gray-700">24/04/2025</time>

              <h3 className="text-lg font-bold text-gray-900">Launch</h3>

              <p className="mt-0.5 text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                adipisci tenetur sunt quae exercitationem sed pariatur porro!
              </p>
            </div>
          </div>

          <div aria-hidden="true"></div>
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
