import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LikertScaleVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LikertScaleVariant2Dark({
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
}: LikertScaleVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/2"></th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-500">SD</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-500">D</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-500">N</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-500">A</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-500">SA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="py-2.5 pr-2 text-sm text-gray-300">Support response time was fast</td>
                  <td className="text-center"><input type="radio" name="likert-q1-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1-dark" checked className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 text-sm text-gray-300">The product is easy to use</td>
                  <td className="text-center"><input type="radio" name="likert-q2-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2-dark" checked className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 text-sm text-gray-300">I would recommend this to a colleague</td>
                  <td className="text-center"><input type="radio" name="likert-q3-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3-dark" checked className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" /></td>
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
