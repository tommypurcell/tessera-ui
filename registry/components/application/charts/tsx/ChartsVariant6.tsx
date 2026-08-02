import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ChartsVariant6Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ChartsVariant6({
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
}: ChartsVariant6Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-sm font-medium text-gray-900">Revenue vs target</h2>
      
            <div className="mt-4 h-64">
              <canvas
                id="revenue-target-combo-chart"
                role="img"
                aria-label="Revenue vs target, combo chart"
              ></canvas>
            </div>
      
            <table className="sr-only">
              <caption>
                Monthly revenue against quarterly target
              </caption>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Jan</th>
                  <td>$28,000</td>
                  <td>$32,000</td>
                </tr>
                <tr>
                  <th scope="row">Feb</th>
                  <td>$34,000</td>
                  <td>$32,000</td>
                </tr>
                <tr>
                  <th scope="row">Mar</th>
                  <td>$31,000</td>
                  <td>$32,000</td>
                </tr>
                <tr>
                  <th scope="row">Apr</th>
                  <td>$39,000</td>
                  <td>$40,000</td>
                </tr>
                <tr>
                  <th scope="row">May</th>
                  <td>$42,000</td>
                  <td>$40,000</td>
                </tr>
                <tr>
                  <th scope="row">Jun</th>
                  <td>$48,000</td>
                  <td>$40,000</td>
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
