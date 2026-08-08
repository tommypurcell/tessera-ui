import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OnboardingChecklistVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OnboardingChecklistVariant2Dark({
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
}: OnboardingChecklistVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-white">Get started with Tessera</h2>
              <span className="text-xs font-medium text-gray-400">3 of 4 complete</span>
            </div>
      
            <div
              className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-800"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="h-full w-3/4 rounded-full bg-blue-500"></div>
            </div>
      
            <ul className="mt-5 flex flex-col gap-3" role="list">
              <li className="flex items-center gap-3">
                <svg className="size-4 shrink-0 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500 line-through">Connect your workspace</span>
              </li>
      
              <li className="flex items-center gap-3">
                <svg className="size-4 shrink-0 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500 line-through">Import your first project</span>
              </li>
      
              <li className="flex items-center gap-3">
                <svg className="size-4 shrink-0 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-500 line-through">Customize your theme</span>
              </li>
      
              <li>
                <a href="#" className="group flex items-center gap-3 rounded-md -mx-2 px-2 py-1 transition hover:bg-gray-800">
                  <span className="size-4 shrink-0 rounded-full border-2 border-gray-700 group-hover:border-blue-400"></span>
                  <span className="text-sm font-medium text-white group-hover:text-blue-400">Invite a teammate</span>
                </a>
              </li>
            </ul>
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
