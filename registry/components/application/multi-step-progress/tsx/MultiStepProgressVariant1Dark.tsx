import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MultiStepProgressVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MultiStepProgressVariant1Dark({
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
}: MultiStepProgressVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
            <nav aria-label="Form progress">
              <ol className="flex items-center">
                <li className="flex flex-1 items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-900">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-xs font-medium text-white">Account</span>
                  <span className="ml-2 h-0.5 flex-1 bg-white"></span>
                </li>
                <li className="flex flex-1 items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-900">2</span>
                  <span className="text-xs font-medium text-white">Profile</span>
                  <span className="ml-2 h-0.5 flex-1 bg-gray-700"></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-600 text-xs font-semibold text-gray-500">3</span>
                  <span className="text-xs font-medium text-gray-500">Review</span>
                </li>
              </ol>
            </nav>
      
            <div className="mt-5 rounded-md border border-dashed border-gray-700 p-6 text-center">
              <p className="text-sm text-gray-400">Step 2 — profile details form fields go here</p>
            </div>
      
            <div className="mt-4 flex justify-between">
              <button type="button" className="rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-200 hover:bg-gray-800">
                Back
              </button>
              <button type="button" className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-200">
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
