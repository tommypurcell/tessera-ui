import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type OnboardingChecklistVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function OnboardingChecklistVariant1Dark({
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
}: OnboardingChecklistVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex size-11 shrink-0 items-center justify-center">
                  <svg className="size-11 -rotate-90" viewBox="0 0 40 40" aria-hidden="true">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-800" />
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke-dasharray="100.5"
                      stroke-dashoffset="37.7"
                      className="text-blue-400"
                    />
                  </svg>
                  <span className="absolute text-xs font-semibold text-white">2/3</span>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">Finish setting up</h2>
                  <p className="text-xs text-gray-400">1 step left to go live</p>
                </div>
              </div>
      
              <button
                type="button"
                aria-label="Dismiss checklist"
                className="shrink-0 rounded-md p-1 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
      
            <ul className="mt-5 flex flex-col gap-3" role="list">
              <li className="flex items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-900/50 text-green-400">
                  <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500 line-through">Create your account</span>
              </li>
      
              <li className="flex items-center gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-green-900/50 text-green-400">
                  <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-gray-500 line-through">Verify your email</span>
              </li>
      
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-md -mx-2 px-2 py-1 transition hover:bg-gray-800"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-blue-400"></span>
                  <span className="text-sm font-medium text-white group-hover:text-blue-400">Invite your team</span>
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
