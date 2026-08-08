import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EmailReadingPaneVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EmailReadingPaneVariant1Dark({
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
}: EmailReadingPaneVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="flex w-full max-w-xl flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="flex items-center gap-1 border-b border-gray-700 px-4 py-2">
        <button type="button" aria-label="Reply" className="rounded-md p-1.5 text-gray-400 hover:bg-white/5 hover:text-white">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 6 6v3" />
          </svg>
        </button>
        <button type="button" aria-label="Reply all" className="rounded-md p-1.5 text-gray-400 hover:bg-white/5 hover:text-white">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15 1.5 9m0 0 6-6M1.5 9h9a6 6 0 0 1 6 6v3m-9-9 6-6m-6 6 6 6" />
          </svg>
        </button>
        <button type="button" aria-label="Forward" className="rounded-md p-1.5 text-gray-400 hover:bg-white/5 hover:text-white">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0-6-6m6 6H9a6 6 0 0 0-6 6v3" />
          </svg>
        </button>
        <span className="mx-1 h-4 w-px bg-gray-700"></span>
        <button type="button" aria-label="Archive" className="rounded-md p-1.5 text-gray-400 hover:bg-white/5 hover:text-white">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375C2.754 3.75 2.25 4.254 2.25 4.875v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        </button>
        <button type="button" aria-label="Delete" className="ml-auto rounded-md p-1.5 text-gray-400 hover:bg-red-950 hover:text-red-400">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>
      </div>

      <div className="border-b border-gray-800 px-5 py-4">
        <h2 className="text-base font-semibold text-white">Q3 roadmap review — feedback needed by Friday</h2>
        <div className="mt-3 flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-900 text-xs font-semibold text-blue-300">JM</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="truncate text-sm font-medium text-white">Jamie Morales</p>
              <span className="shrink-0 text-xs text-gray-500">Mar 12, 9:41 AM</span>
            </div>
            <p className="truncate text-xs text-gray-400">To: design-team@acme.com, you</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-3 px-5 py-4 text-sm leading-relaxed text-gray-300">
        <p>Hi team,</p>
        <p>Attaching the draft Q3 roadmap for review. A few things I'd love feedback on before we finalize: the theming milestone timeline, and whether the CLI work should be split across two sprints.</p>
        <p>Let me know your thoughts by end of day Friday so we can lock this in for the planning meeting.</p>
        <p>Thanks,<br />Jamie</p>
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
