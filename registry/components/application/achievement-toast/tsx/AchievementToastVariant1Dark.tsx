import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AchievementToastVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AchievementToastVariant1Dark({
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
}: AchievementToastVariant1DarkProps) {
  const defaultContent = (
    <>
      <div
            role="status"
            className="relative flex items-center gap-3 overflow-hidden rounded-lg border border-amber-500/40 bg-gray-900 p-4 shadow-lg"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent"></div>
      
            <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-[0_0_20px_rgba(245,158,11,0.65)]">
              <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L12 14.27l-4.77 2.44.91-5.32-3.87-3.77 5.34-.78L12 2z" />
              </svg>
            </div>
      
            <div className="relative min-w-0">
              <p className="text-[11px] font-semibold tracking-wide text-amber-400 uppercase">Legendary unlocked</p>
              <p className="text-sm font-semibold text-white">Speed Runner</p>
              <p className="text-xs text-gray-400">Completed the tutorial in under 2 minutes</p>
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
