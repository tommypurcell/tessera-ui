import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ChartsVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ChartsVariant2Dark({
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
}: ChartsVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-sm font-medium text-white">Orders this week</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="weekly-orders-bar-chart"
                role="img"
                aria-label="Orders this week, bar chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Orders per day this week
              </caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Orders</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mon</th>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">Tue</th>
                  <td>19</td>
                </tr>
                <tr>
                  <th scope="row">Wed</th>
                  <td>14</td>
                </tr>
                <tr>
                  <th scope="row">Thu</th>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">Fri</th>
                  <td>27</td>
                </tr>
                <tr>
                  <th scope="row">Sat</th>
                  <td>32</td>
                </tr>
                <tr>
                  <th scope="row">Sun</th>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
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
