import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LeaderboardPodiumVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LeaderboardPodiumVariant2({
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
}: LeaderboardPodiumVariant2Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3 rounded-md bg-amber-50 p-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-white">🥇</span>
              <img src="https://i.pravatar.cc/64?img=12" alt="" className="size-8 shrink-0 rounded-full object-cover" />
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-gray-900">Priya Shah</span>
              <span className="shrink-0 text-sm font-bold text-gray-900">10,980</span>
            </div>
      
            <div className="mt-1.5 flex items-center gap-3 rounded-md p-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">🥈</span>
              <img src="https://i.pravatar.cc/64?img=32" alt="" className="size-8 shrink-0 rounded-full object-cover" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-700">Ethan Kim</span>
              <span className="shrink-0 text-sm font-semibold text-gray-600">8,420</span>
            </div>
      
            <div className="mt-1.5 flex items-center gap-3 rounded-md p-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-200 text-sm font-bold text-orange-700">🥉</span>
              <img src="https://i.pravatar.cc/64?img=5" alt="" className="size-8 shrink-0 rounded-full object-cover" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-700">Sofia Rossi</span>
              <span className="shrink-0 text-sm font-semibold text-gray-600">7,110</span>
            </div>
      
            <div className="mt-1.5 flex items-center gap-3 rounded-md p-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center text-xs font-semibold text-gray-400">4</span>
              <img src="https://i.pravatar.cc/64?img=8" alt="" className="size-8 shrink-0 rounded-full object-cover" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-gray-700">Yuki Tanaka</span>
              <span className="shrink-0 text-sm font-semibold text-gray-600">5,860</span>
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
