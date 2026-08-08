import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StickySectionHeaderVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StickySectionHeaderVariant1Dark({
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
}: StickySectionHeaderVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="h-72 overflow-y-auto rounded-lg border border-gray-800 bg-gray-900">
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-800 bg-gray-800/95 px-4 py-1.5 text-xs font-semibold text-gray-400 backdrop-blur">
                A
              </h2>
              <ul role="list">
                <li className="flex items-center gap-3 border-b border-gray-800/60 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-semibold text-blue-300">AC</span>
                  <span className="text-sm text-gray-300">Amara Chukwu</span>
                </li>
                <li className="flex items-center gap-3 border-b border-gray-800/60 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-xs font-semibold text-purple-300">AK</span>
                  <span className="text-sm text-gray-300">Ana Kovač</span>
                </li>
              </ul>
            </div>
      
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-800 bg-gray-800/95 px-4 py-1.5 text-xs font-semibold text-gray-400 backdrop-blur">
                B
              </h2>
              <ul role="list">
                <li className="flex items-center gap-3 border-b border-gray-800/60 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-xs font-semibold text-green-300">BL</span>
                  <span className="text-sm text-gray-300">Ben Lachlan</span>
                </li>
                <li className="flex items-center gap-3 border-b border-gray-800/60 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-xs font-semibold text-amber-300">BR</span>
                  <span className="text-sm text-gray-300">Bianca Rossi</span>
                </li>
              </ul>
            </div>
      
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-800 bg-gray-800/95 px-4 py-1.5 text-xs font-semibold text-gray-400 backdrop-blur">
                C
              </h2>
              <ul role="list">
                <li className="flex items-center gap-3 border-b border-gray-800/60 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-xs font-semibold text-rose-300">CM</span>
                  <span className="text-sm text-gray-300">Carlos Mendes</span>
                </li>
                <li className="flex items-center gap-3 border-b border-gray-800/60 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-xs font-semibold text-indigo-300">CY</span>
                  <span className="text-sm text-gray-300">Chloe Yang</span>
                </li>
                <li className="flex items-center gap-3 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-xs font-semibold text-teal-300">CP</span>
                  <span className="text-sm text-gray-300">Clara Petit</span>
                </li>
              </ul>
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
