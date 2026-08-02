import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ChartsVariant9Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ChartsVariant9({
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
}: ChartsVariant9Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Traffic sources</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="traffic-sources-polar-area-chart"
                role="img"
                aria-label="Traffic sources, polar area chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Traffic by source
              </caption>
              <thead>
                <tr>
                  <th scope="col">Source</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Organic</th>
                  <td>45%</td>
                </tr>
                <tr>
                  <th scope="row">Paid</th>
                  <td>25%</td>
                </tr>
                <tr>
                  <th scope="row">Referral</th>
                  <td>18%</td>
                </tr>
                <tr>
                  <th scope="row">Direct</th>
                  <td>12%</td>
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
