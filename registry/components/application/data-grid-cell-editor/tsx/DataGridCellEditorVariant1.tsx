import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DataGridCellEditorVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DataGridCellEditorVariant1({
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
}: DataGridCellEditorVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="w-10 border-b border-r border-gray-200 px-2 py-2"></th>
            <th className="border-b border-r border-gray-200 px-3 py-2 text-left font-medium text-gray-500">Product</th>
            <th className="border-b border-r border-gray-200 px-3 py-2 text-right font-medium text-gray-500">Price</th>
            <th className="border-b border-r border-gray-200 px-3 py-2 text-right font-medium text-gray-500">Qty</th>
            <th className="border-b border-gray-200 px-3 py-2 text-right font-medium text-gray-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-r border-gray-200 px-2 py-2 text-center text-xs text-gray-400">1</td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-gray-900">Standing desk</td>
            <td className="relative border-b border-r border-gray-200 p-0">
              <div className="absolute inset-0 rounded-[2px] ring-2 ring-gray-900">
                <input
                  type="text"
                  defaultValue="349.00"
                  className="h-full w-full border-0 bg-white px-3 py-2 text-right text-gray-900 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="invisible px-3 py-2 text-right">349.00</div>
            </td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-right text-gray-900">1</td>
            <td className="border-b border-gray-200 px-3 py-2 text-right text-gray-900">$349.00</td>
          </tr>
          <tr>
            <td className="border-b border-r border-gray-200 px-2 py-2 text-center text-xs text-gray-400">2</td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-gray-900">Monitor arm</td>
            <td className="relative border-b border-r border-gray-200 px-3 py-2 text-right">
              <span className="rounded-[2px] bg-amber-50 px-1 -mx-1 text-gray-900">89.00</span>
              <span className="absolute right-1 top-1 size-1.5 rounded-full bg-amber-500" title="Unsaved change"></span>
            </td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-right text-gray-900">2</td>
            <td className="border-b border-gray-200 px-3 py-2 text-right text-gray-900">$178.00</td>
          </tr>
          <tr>
            <td className="border-b border-r border-gray-200 px-2 py-2 text-center text-xs text-gray-400">3</td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-gray-900">Keyboard tray</td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-right text-gray-900">64.00</td>
            <td className="border-b border-r border-gray-200 px-3 py-2 text-right text-gray-900">1</td>
            <td className="border-b border-gray-200 px-3 py-2 text-right text-gray-900">$64.00</td>
          </tr>
          <tr>
            <td className="px-2 py-2 text-center text-xs text-gray-400">4</td>
            <td className="border-r border-gray-200 px-3 py-2 text-gray-900">Cable tray</td>
            <td className="border-r border-gray-200 px-3 py-2 text-right text-gray-900">22.00</td>
            <td className="border-r border-gray-200 px-3 py-2 text-right text-gray-900">3</td>
            <td className="px-3 py-2 text-right text-gray-900">$66.00</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center gap-1.5 border-t border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-500">
        <span className="size-1.5 rounded-full bg-amber-500"></span>
        1 unsaved change
        <span className="mx-1 text-gray-300">·</span>
        Use arrow keys to navigate, Enter to edit
      </div>
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
