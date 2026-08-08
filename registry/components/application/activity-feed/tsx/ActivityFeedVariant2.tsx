import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ActivityFeedVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ActivityFeedVariant2({
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
}: ActivityFeedVariant2Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="text-sm font-semibold text-gray-900">Activity</h2>
      
            <ol className="mt-4 flex flex-col">
              <li className="relative flex gap-3 pb-6">
                <span className="absolute top-8 left-3.5 h-full w-px bg-gray-200" aria-hidden="true"></span>
                <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Deploy</span> to production succeeded
                  </p>
                  <time dateTime="2026-08-08T08:40:00Z" className="text-xs text-gray-400">Just now</time>
                </div>
              </li>
      
              <li className="relative flex gap-3 pb-6">
                <span className="absolute top-8 left-3.5 h-full w-px bg-gray-200" aria-hidden="true"></span>
                <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 13h6m-9 8l-2-2H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H9l-2 2z" />
                  </svg>
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">3 new comments</span> on the design review thread
                  </p>
                  <time dateTime="2026-08-08T07:10:00Z" className="text-xs text-gray-400">1 hour ago</time>
                </div>
              </li>
      
              <li className="relative flex gap-3 pb-6">
                <span className="absolute top-8 left-3.5 h-full w-px bg-gray-200" aria-hidden="true"></span>
                <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">Rate limit warning</span> on the billing API
                  </p>
                  <time dateTime="2026-08-08T05:22:00Z" className="text-xs text-gray-400">3 hours ago</time>
                </div>
              </li>
      
              <li className="relative flex gap-3">
                <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">New workspace</span> created for Acme Inc.
                  </p>
                  <time dateTime="2026-08-07T14:00:00Z" className="text-xs text-gray-400">Yesterday</time>
                </div>
              </li>
            </ol>
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
