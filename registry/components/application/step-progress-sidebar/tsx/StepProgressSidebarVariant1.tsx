import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StepProgressSidebarVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StepProgressSidebarVariant1({
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
}: StepProgressSidebarVariant1Props) {
  const defaultContent = (
    <>
<div className="flex w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <nav aria-label="Onboarding steps" className="w-56 shrink-0 border-r border-gray-200 bg-gray-50 p-5">
        <ol className="space-y-1">
          <li>
            <div className="flex items-center gap-3 rounded-md px-2 py-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-3.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-500">Account details</span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 rounded-md px-2 py-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-3.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-500">Workspace setup</span>
            </div>
          </li>
          <li>
            <div aria-current="step" className="flex items-center gap-3 rounded-md bg-white px-2 py-2 shadow-sm ring-1 ring-gray-200">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">3</span>
              <span className="text-sm font-semibold text-gray-900">Invite your team</span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 rounded-md px-2 py-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-xs font-medium text-gray-400">4</span>
              <span className="text-sm font-medium text-gray-400">Connect billing</span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3 rounded-md px-2 py-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-xs font-medium text-gray-400">5</span>
              <span className="text-sm font-medium text-gray-400">Review &amp; finish</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex-1 p-6">
        <h2 className="text-sm font-semibold text-gray-900">Invite your team</h2>
        <p className="mt-1 text-xs text-gray-500">Add teammates by email — you can always invite more later.</p>

        <div className="mt-4 space-y-2">
          <div className="h-10 rounded-md border border-gray-200 bg-gray-50"></div>
          <div className="h-10 rounded-md border border-gray-200 bg-gray-50"></div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-700">Back</button>
          <button type="button" className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800">Continue</button>
        </div>
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
