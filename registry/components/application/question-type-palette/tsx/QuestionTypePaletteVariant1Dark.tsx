import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type QuestionTypePaletteVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function QuestionTypePaletteVariant1Dark({
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
}: QuestionTypePaletteVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
      <p className="text-sm font-semibold text-white">Add a question</p>
      <p className="mt-0.5 text-xs text-gray-400">Drag a type onto your form</p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" className="group flex cursor-grab flex-col items-start gap-2 rounded-md border border-gray-700 p-3 text-left transition-colors hover:border-gray-100 hover:bg-white/5">
          <span className="flex size-8 items-center justify-center rounded-md bg-blue-900 text-blue-300">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span>
          <span className="text-xs font-medium text-white">Multiple choice</span>
        </button>

        <button type="button" className="group flex cursor-grab flex-col items-start gap-2 rounded-md border border-gray-700 p-3 text-left transition-colors hover:border-gray-100 hover:bg-white/5">
          <span className="flex size-8 items-center justify-center rounded-md bg-amber-900 text-amber-300">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-xs font-medium text-white">Rating</span>
        </button>

        <button type="button" className="group flex cursor-grab flex-col items-start gap-2 rounded-md border border-gray-700 p-3 text-left transition-colors hover:border-gray-100 hover:bg-white/5">
          <span className="flex size-8 items-center justify-center rounded-md bg-violet-900 text-violet-300">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </span>
          <span className="text-xs font-medium text-white">Short text</span>
        </button>

        <button type="button" className="group flex cursor-grab flex-col items-start gap-2 rounded-md border border-gray-700 p-3 text-left transition-colors hover:border-gray-100 hover:bg-white/5">
          <span className="flex size-8 items-center justify-center rounded-md bg-emerald-900 text-emerald-300">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
          <span className="text-xs font-medium text-white">Scale (1–5)</span>
        </button>
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
