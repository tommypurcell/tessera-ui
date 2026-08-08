import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MilestoneCardVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MilestoneCardVariant1Dark({
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
}: MilestoneCardVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-400">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                  <path fillRule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm12.735 5.235a.75.75 0 0 0-1.06-1.06l-6.905 6.905-3.14-3.14a.75.75 0 1 0-1.06 1.06l3.67 3.67a.75.75 0 0 0 1.06 0l7.435-7.435Z" clipRule="evenodd" />
                </svg>
                Milestone
              </span>
              <span className="text-xs text-gray-500">Due Oct 15</span>
            </div>
      
            <h3 className="mt-2.5 text-sm font-semibold text-white">Public beta launch</h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-400">
              Ship the beta build to the first 500 waitlist signups and open feedback channels.
            </p>
      
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Progress</span>
                <span className="font-medium text-white">7/10 tasks</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                <div className="h-full w-[70%] rounded-full bg-indigo-500"></div>
              </div>
            </div>
      
            <div className="mt-3 flex items-center justify-between border-t border-gray-700 pt-3">
              <div className="flex -space-x-1.5">
                <img src="https://i.pravatar.cc/48?img=12" alt="" className="size-6 rounded-full object-cover ring-2 ring-gray-900" />
                <img src="https://i.pravatar.cc/48?img=32" alt="" className="size-6 rounded-full object-cover ring-2 ring-gray-900" />
                <img src="https://i.pravatar.cc/48?img=5" alt="" className="size-6 rounded-full object-cover ring-2 ring-gray-900" />
              </div>
              <a href="#" className="text-xs font-medium text-gray-300 hover:text-white hover:underline">View tasks</a>
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
