import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MultiStepProgressVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MultiStepProgressVariant2Dark({
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
}: MultiStepProgressVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Shipping details</p>
              <span className="text-xs font-medium text-gray-400">Step 3 of 5</span>
            </div>
      
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-3/5 rounded-full bg-indigo-500"></div>
            </div>
      
            <div className="mt-4 rounded-md border border-dashed border-gray-700 p-6 text-center">
              <p className="text-sm text-gray-400">Shipping address form fields go here</p>
            </div>
      
            <div className="mt-4 flex justify-between">
              <button type="button" className="rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Back
              </button>
              <button type="button" className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-400">
                Continue
              </button>
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
