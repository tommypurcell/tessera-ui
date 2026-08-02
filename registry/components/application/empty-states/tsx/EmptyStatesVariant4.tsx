import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EmptyStatesVariant4Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function EmptyStatesVariant4({
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
}: EmptyStatesVariant4Props) {
  const defaultContent = (
    <>
      <div className="max-w-md text-center">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-auto size-20 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
      
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Get started in seconds</h2>
      
            <p className="mt-4 text-pretty text-gray-700">
              Complete these quick steps to set up your workspace.
            </p>
      
            <ol className="mt-6 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <span
                  className="grid size-6 shrink-0 place-content-center rounded-full bg-indigo-600 text-sm font-medium text-white"
                >
                  1
                </span>
      
                <span className="text-sm text-gray-700">Create your first project</span>
              </li>
      
              <li className="flex items-center gap-2">
                <span
                  className="grid size-6 shrink-0 place-content-center rounded-full bg-indigo-600 text-sm font-medium text-white"
                >
                  2
                </span>
      
                <span className="text-sm text-gray-700">Invite team members</span>
              </li>
      
              <li className="flex items-center gap-2">
                <span
                  className="grid size-6 shrink-0 place-content-center rounded-full bg-indigo-600 text-sm font-medium text-white"
                >
                  3
                </span>
      
                <span className="text-sm text-gray-700">Start collaborating</span>
              </li>
            </ol>
      
            <button
              className="mt-6 block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Create Project
            </button>
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
