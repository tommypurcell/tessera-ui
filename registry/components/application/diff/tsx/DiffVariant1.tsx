import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DiffVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DiffVariant1({
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
}: DiffVariant1Props) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500">
              <p className="px-4 py-2">Before</p>
              <p className="px-4 py-2">After</p>
            </div>
      
            <div className="grid grid-cols-2 divide-x divide-gray-200 font-mono text-sm">
              <div>
                <p className="px-4 py-1.5 text-gray-500">function greet(name) {</p>
                <p className="bg-red-50 px-4 py-1.5 text-red-700">&nbsp;&nbsp;return 'Hi ' + name;</p>
                <p className="px-4 py-1.5 text-gray-500">}</p>
              </div>
              <div>
                <p className="px-4 py-1.5 text-gray-500">function greet(name) {</p>
                <p className="bg-green-50 px-4 py-1.5 text-green-700">&nbsp;&nbsp;return `Hello, ${name}!`;</p>
                <p className="px-4 py-1.5 text-gray-500">}</p>
              </div>
            </div>
          </div>
      
          <p className="sr-only">
            Line 2 changed from "return 'Hi ' + name;" to "return `Hello, ${name}!`;"
          </p>
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
