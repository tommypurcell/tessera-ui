import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LikertScaleVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LikertScaleVariant2({
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
}: LikertScaleVariant2Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/2"></th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-400">SD</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-400">D</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-400">N</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-400">A</th>
                  <th className="pb-2 text-center text-[10px] font-medium text-gray-400">SA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2.5 pr-2 text-sm text-gray-700">Support response time was fast</td>
                  <td className="text-center"><input type="radio" name="likert-q1" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1" checked className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q1" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 text-sm text-gray-700">The product is easy to use</td>
                  <td className="text-center"><input type="radio" name="likert-q2" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q2" checked className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 text-sm text-gray-700">I would recommend this to a colleague</td>
                  <td className="text-center"><input type="radio" name="likert-q3" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3" checked className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
                  <td className="text-center"><input type="radio" name="likert-q3" className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900" /></td>
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
