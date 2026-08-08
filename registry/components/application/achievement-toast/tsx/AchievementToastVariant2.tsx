import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AchievementToastVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AchievementToastVariant2({
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
}: AchievementToastVariant2Props) {
  const defaultContent = (
    <>
      <div role="status" className="flex items-center gap-2.5 rounded-full border border-blue-200 bg-white py-2 pr-4 pl-2 shadow-md">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]">
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L12 14.27l-4.77 2.44.91-5.32-3.87-3.77 5.34-.78L12 2z" />
              </svg>
            </div>
      
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-900">First Steps</p>
              <p className="text-[11px] font-medium text-blue-600">+50 XP earned</p>
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
