import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ChartsVariant10DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ChartsVariant10Dark({
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
}: ChartsVariant10DarkProps) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-sm font-medium text-white">Ad spend vs conversions</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="ad-spend-conversions-scatter-chart"
                role="img"
                aria-label="Ad spend vs conversions, scatter chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Ad spend and conversions per campaign
              </caption>
              <thead>
                <tr>
                  <th scope="col">Spend ($)</th>
                  <th scope="col">Conversions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">90</th>
                  <td>8</td>
                </tr>
                <tr>
                  <th scope="row">120</th>
                  <td>12</td>
                </tr>
                <tr>
                  <th scope="row">140</th>
                  <td>14</td>
                </tr>
                <tr>
                  <th scope="row">150</th>
                  <td>15</td>
                </tr>
                <tr>
                  <th scope="row">180</th>
                  <td>18</td>
                </tr>
                <tr>
                  <th scope="row">200</th>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">220</th>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row">260</th>
                  <td>30</td>
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
