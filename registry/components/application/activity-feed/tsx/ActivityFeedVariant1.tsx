import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ActivityFeedVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component with content slots and explicit application states.
 * Omitting the optional props preserves the original markup and visual design.
 */
export function ActivityFeedVariant1({
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
}: ActivityFeedVariant1Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="text-sm font-semibold text-gray-900">Recent activity</h2>
      
            <ol className="mt-4 flex flex-col gap-4">
              <li className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
                  alt=""
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Priya Patel</span> merged pull request
                    <span className="font-medium text-gray-900">#482</span>
                  </p>
                  <time dateTime="2026-08-08T08:32:00Z" className="text-xs text-gray-400">2 minutes ago</time>
                </div>
              </li>
      
              <li className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces"
                  alt=""
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Jordan Lee</span> commented on
                    <span className="font-medium text-gray-900">Q3 roadmap</span>
                  </p>
                  <time dateTime="2026-08-08T07:58:00Z" className="text-xs text-gray-400">36 minutes ago</time>
                </div>
              </li>
      
              <li className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces"
                  alt=""
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Sam Okafor</span> created project
                    <span className="font-medium text-gray-900">Design system v2</span>
                  </p>
                  <time dateTime="2026-08-08T06:15:00Z" className="text-xs text-gray-400">2 hours ago</time>
                </div>
              </li>
      
              <li className="flex gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
                  alt=""
                  className="size-8 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Mika Chen</span> archived
                    <span className="font-medium text-gray-900">Legacy API</span>
                  </p>
                  <time dateTime="2026-08-07T18:00:00Z" className="text-xs text-gray-400">Yesterday</time>
                </div>
              </li>
            </ol>
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
