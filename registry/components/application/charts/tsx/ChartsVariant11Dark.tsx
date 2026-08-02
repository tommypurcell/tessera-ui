import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ChartsVariant11DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ChartsVariant11Dark({
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
}: ChartsVariant11DarkProps) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-sm font-medium text-white">Campaign performance</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="campaign-performance-bubble-chart"
                role="img"
                aria-label="Campaign performance, bubble chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Campaign spend, conversions, and reach
              </caption>
              <thead>
                <tr>
                  <th scope="col">Campaign</th>
                  <th scope="col">Spend ($)</th>
                  <th scope="col">Conversions</th>
                  <th scope="col">Reach index</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Search</th>
                  <td>3,200</td>
                  <td>18,000</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">Social</th>
                  <td>2,400</td>
                  <td>9,500</td>
                  <td>16</td>
                </tr>
                <tr>
                  <th scope="row">Display</th>
                  <td>1,800</td>
                  <td>5,200</td>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>900</td>
                  <td>7,800</td>
                  <td>14</td>
                </tr>
                <tr>
                  <th scope="row">Video</th>
                  <td>2,600</td>
                  <td>6,100</td>
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
