import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SwipeActionRowVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SwipeActionRowVariant1Dark({
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
}: SwipeActionRowVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-800 px-4 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-blue-300">JK</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Jordan Kim</p>
          <p className="truncate text-xs text-gray-400">Approved your PR review</p>
        </div>
        <span className="shrink-0 text-xs text-gray-500">2h</span>
      </div>

      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-y-0 right-0 flex">
          <button type="button" className="flex w-16 items-center justify-center bg-amber-600 text-white">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375C2.754 3.75 2.25 4.254 2.25 4.875v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </button>
          <button type="button" className="flex w-16 items-center justify-center bg-red-600 text-white">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>

        <div className="relative flex -translate-x-32 items-center gap-3 bg-gray-900 px-4 py-3 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.4)] transition-transform">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-900 text-sm font-semibold text-violet-300">SL</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Sara Lin</p>
            <p className="truncate text-xs text-gray-400">Mentioned you in #general</p>
          </div>
          <span className="shrink-0 text-xs text-gray-500">4h</span>
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-sm font-semibold text-emerald-300">MT</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Marcus Tran</p>
          <p className="truncate text-xs text-gray-400">Shared a new document</p>
        </div>
        <span className="shrink-0 text-xs text-gray-500">1d</span>
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
