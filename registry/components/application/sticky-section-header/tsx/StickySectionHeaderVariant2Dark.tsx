import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StickySectionHeaderVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StickySectionHeaderVariant2Dark({
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
}: StickySectionHeaderVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="h-80 overflow-y-auto rounded-lg border border-gray-800 bg-gray-900">
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-800 bg-gray-900/95 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Account
              </h2>
              <ul role="list" className="divide-y divide-gray-800/60">
                <li className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-300">Profile information</span>
                  <svg className="size-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-300">Password &amp; security</span>
                  <svg className="size-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
            </div>
      
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-800 bg-gray-900/95 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Notifications
              </h2>
              <ul role="list" className="divide-y divide-gray-800/60">
                <li className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-300">Email preferences</span>
                  <svg className="size-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-300">Push notifications</span>
                  <svg className="size-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
            </div>
      
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-800 bg-gray-900/95 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Billing
              </h2>
              <ul role="list" className="divide-y divide-gray-800/60">
                <li className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-300">Payment methods</span>
                  <svg className="size-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-300">Billing history</span>
                  <svg className="size-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
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
