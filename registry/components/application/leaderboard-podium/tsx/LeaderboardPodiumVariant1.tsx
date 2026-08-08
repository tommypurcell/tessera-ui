import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LeaderboardPodiumVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LeaderboardPodiumVariant1({
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
}: LeaderboardPodiumVariant1Props) {
  const defaultContent = (
    <>
      <div className="flex w-full max-w-sm items-end justify-center gap-2">
            <div className="flex flex-1 flex-col items-center">
              <img src="https://i.pravatar.cc/64?img=32" alt="" className="size-11 rounded-full object-cover ring-2 ring-gray-300" />
              <p className="mt-1.5 truncate text-xs font-semibold text-gray-900">Ethan Kim</p>
              <p className="text-[11px] text-gray-500">8,420 pts</p>
              <div className="mt-2 flex h-20 w-full items-start justify-center rounded-t-md bg-gray-200 pt-1.5">
                <span className="text-lg font-bold text-gray-500">2</span>
              </div>
            </div>
      
            <div className="flex flex-1 flex-col items-center">
              <span className="text-xl">👑</span>
              <img src="https://i.pravatar.cc/64?img=12" alt="" className="mt-0.5 size-14 rounded-full object-cover ring-2 ring-amber-400" />
              <p className="mt-1.5 truncate text-sm font-semibold text-gray-900">Priya Shah</p>
              <p className="text-xs text-gray-500">10,980 pts</p>
              <div className="mt-2 flex h-28 w-full items-start justify-center rounded-t-md bg-amber-400 pt-1.5">
                <span className="text-xl font-bold text-white">1</span>
              </div>
            </div>
      
            <div className="flex flex-1 flex-col items-center">
              <img src="https://i.pravatar.cc/64?img=5" alt="" className="size-11 rounded-full object-cover ring-2 ring-orange-300" />
              <p className="mt-1.5 truncate text-xs font-semibold text-gray-900">Sofia Rossi</p>
              <p className="text-[11px] text-gray-500">7,110 pts</p>
              <div className="mt-2 flex h-14 w-full items-start justify-center rounded-t-md bg-orange-300 pt-1.5">
                <span className="text-lg font-bold text-white">3</span>
              </div>
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
