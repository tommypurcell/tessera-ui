import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SlideOverFormVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SlideOverFormVariant1({
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
}: SlideOverFormVariant1Props) {
  const defaultContent = (
    <>
<div className="fixed inset-0 bg-gray-900/30" aria-hidden="true"></div>

    <div role="dialog" aria-modal="true" aria-labelledby="slide-over-title" className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-gray-200 bg-white shadow-xl">
      <div className="flex shrink-0 items-start justify-between border-b border-gray-200 px-5 py-4">
        <div>
          <h2 id="slide-over-title" className="text-sm font-semibold text-gray-900">New team member</h2>
          <p className="mt-0.5 text-xs text-gray-500">Invite someone and set their role.</p>
        </div>
        <button type="button" aria-label="Close" className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="so-name" className="mb-1.5 block text-sm font-medium text-gray-700">Full name</label>
            <input type="text" id="so-name" defaultValue="Priya Nair" className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900" />
          </div>
          <div>
            <label htmlFor="so-email" className="mb-1.5 block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="so-email" defaultValue="priya@acme.com" className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900" />
          </div>
          <div>
            <label htmlFor="so-role" className="mb-1.5 block text-sm font-medium text-gray-700">Role</label>
            <select id="so-role" defaultValue="Admin" className="h-10 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900">
              <option>Member</option>
              <option>Admin</option>
              <option>Owner</option>
            </select>
          </div>
          <div>
            <label htmlFor="so-note" className="mb-1.5 block text-sm font-medium text-gray-700">Note (optional)</label>
            <textarea id="so-note" rows={3} className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900" placeholder="Add context for the rest of the team…"></textarea>
          </div>
          <label className="flex items-start gap-2">
            <input type="checkbox" defaultChecked className="mt-0.5 size-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
            <span className="text-sm text-gray-600">Send an email invite immediately</span>
          </label>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end gap-2 border-t border-gray-200 bg-gray-50 px-5 py-3">
        <button type="button" className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">Cancel</button>
        <button type="button" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800">Send invite</button>
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
