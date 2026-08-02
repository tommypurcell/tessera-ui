import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ChartsVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ChartsVariant3Dark({
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
}: ChartsVariant3DarkProps) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-sm font-medium text-white">Orders by status</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="order-status-donut-chart"
                role="img"
                aria-label="Orders by status, donut chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Orders by status
              </caption>
              <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Paid</th>
                  <td>68%</td>
                </tr>
                <tr>
                  <th scope="row">Pending</th>
                  <td>22%</td>
                </tr>
                <tr>
                  <th scope="row">Refunded</th>
                  <td>10%</td>
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
