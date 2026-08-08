import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MobileFormStepperVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MobileFormStepperVariant1({
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
}: MobileFormStepperVariant1Props) {
  const defaultContent = (
    <>
      <div>
            <div className="flex items-center justify-between">
              <button type="button" aria-label="Back" className="rounded-md p-1 text-gray-400 transition hover:bg-gray-50 hover:text-gray-600">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
      
              <div className="flex items-center gap-1.5" aria-label="Step 2 of 4">
                <span className="size-1.5 rounded-full bg-gray-200"></span>
                <span className="size-1.5 rounded-full bg-gray-900"></span>
                <span className="size-1.5 rounded-full bg-gray-200"></span>
                <span className="size-1.5 rounded-full bg-gray-200"></span>
              </div>
      
              <span className="w-5"></span>
            </div>
      
            <h1 className="mt-8 text-xl font-semibold text-gray-900">What's your email?</h1>
            <p className="mt-1 text-sm text-gray-500">We'll send your confirmation here.</p>
      
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-6 w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
            />
          </div>
      
          <button type="button" className="w-full rounded-md bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-700">
            Continue
          </button>
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
