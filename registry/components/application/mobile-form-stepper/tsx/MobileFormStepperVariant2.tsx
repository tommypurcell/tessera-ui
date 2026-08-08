import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MobileFormStepperVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MobileFormStepperVariant2({
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
}: MobileFormStepperVariant2Props) {
  const defaultContent = (
    <>
      <div>
            <div className="flex items-center justify-between">
              <button type="button" aria-label="Back" className="rounded-md p-1 text-gray-400 transition hover:bg-gray-50 hover:text-gray-600">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
      
              <div className="flex items-center gap-1.5" aria-label="Step 3 of 4">
                <span className="size-1.5 rounded-full bg-gray-900"></span>
                <span className="size-1.5 rounded-full bg-gray-900"></span>
                <span className="size-1.5 rounded-full bg-gray-900"></span>
                <span className="size-1.5 rounded-full bg-gray-200"></span>
              </div>
      
              <span className="w-5"></span>
            </div>
      
            <h1 className="mt-8 text-xl font-semibold text-gray-900">How will you use Tessera?</h1>
            <p className="mt-1 text-sm text-gray-500">Pick the option that fits best.</p>
      
            <fieldset className="mt-6 flex flex-col gap-2">
              <legend className="sr-only">Use case</legend>
      
              <label className="flex cursor-pointer items-center gap-3 rounded-md border-2 border-gray-900 bg-gray-50 px-3 py-3">
                <input type="radio" name="use-case" checked className="sr-only" />
                <span className="text-sm font-medium text-gray-900">Personal project</span>
              </label>
      
              <label className="flex cursor-pointer items-center gap-3 rounded-md border-2 border-gray-200 px-3 py-3">
                <input type="radio" name="use-case" className="sr-only" />
                <span className="text-sm font-medium text-gray-700">Team / company</span>
              </label>
      
              <label className="flex cursor-pointer items-center gap-3 rounded-md border-2 border-gray-200 px-3 py-3">
                <input type="radio" name="use-case" className="sr-only" />
                <span className="text-sm font-medium text-gray-700">Freelance client work</span>
              </label>
            </fieldset>
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
