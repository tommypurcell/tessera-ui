import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FormFieldWizardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FormFieldWizardVariant1({
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
}: FormFieldWizardVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Form DS-11 &middot; Passport Application</p>
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-900">Application sections</h2>
          <span className="text-xs font-medium text-gray-500">3 of 5 complete</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
          <div className="h-full w-3/5 rounded-full bg-gray-900"></div>
        </div>
      </div>

      <ul className="divide-y divide-gray-100">
        <li>
          <button type="button" className="flex w-full items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-900">Personal information</span>
            </div>
            <span className="text-xs text-gray-400">Complete</span>
          </button>
        </li>
        <li>
          <button type="button" className="flex w-full items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-900">Contact details</span>
            </div>
            <span className="text-xs text-gray-400">Complete</span>
          </button>
        </li>
        <li>
          <button type="button" aria-current="true" className="flex w-full items-center justify-between bg-gray-50 px-5 py-3.5 text-left ring-1 ring-inset ring-gray-900">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-gray-900">Travel history</span>
            </div>
            <span className="text-xs font-medium text-gray-900">Editing</span>
          </button>
        </li>
        <li>
          <button type="button" className="flex w-full items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-xs font-medium text-gray-400">4</span>
              <span className="text-sm font-medium text-gray-600">Supporting documents</span>
            </div>
            <span className="text-xs text-gray-400">Not started</span>
          </button>
        </li>
        <li>
          <button type="button" className="flex w-full items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-xs font-medium text-gray-400">5</span>
              <span className="text-sm font-medium text-gray-600">Review &amp; sign</span>
            </div>
            <span className="text-xs text-gray-400">Not started</span>
          </button>
        </li>
      </ul>

      <div className="flex items-center justify-between border-t border-gray-200 p-4">
        <button type="button" className="text-sm font-medium text-gray-600 hover:text-gray-900">Save &amp; continue later</button>
        <button type="button" className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800">Continue editing</button>
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
