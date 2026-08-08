import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StickySectionHeaderVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StickySectionHeaderVariant1({
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
}: StickySectionHeaderVariant1Props) {
  const defaultContent = (
    <>
      <div className="h-72 overflow-y-auto rounded-lg border border-gray-100 bg-white">
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-100 bg-gray-50/95 px-4 py-1.5 text-xs font-semibold text-gray-500 backdrop-blur">
                A
              </h2>
              <ul role="list">
                <li className="flex items-center gap-3 border-b border-gray-50 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">AC</span>
                  <span className="text-sm text-gray-700">Amara Chukwu</span>
                </li>
                <li className="flex items-center gap-3 border-b border-gray-50 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-700">AK</span>
                  <span className="text-sm text-gray-700">Ana Kovač</span>
                </li>
              </ul>
            </div>
      
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-100 bg-gray-50/95 px-4 py-1.5 text-xs font-semibold text-gray-500 backdrop-blur">
                B
              </h2>
              <ul role="list">
                <li className="flex items-center gap-3 border-b border-gray-50 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-semibold text-green-700">BL</span>
                  <span className="text-sm text-gray-700">Ben Lachlan</span>
                </li>
                <li className="flex items-center gap-3 border-b border-gray-50 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">BR</span>
                  <span className="text-sm text-gray-700">Bianca Rossi</span>
                </li>
              </ul>
            </div>
      
            <div>
              <h2 className="sticky top-0 z-10 border-b border-gray-100 bg-gray-50/95 px-4 py-1.5 text-xs font-semibold text-gray-500 backdrop-blur">
                C
              </h2>
              <ul role="list">
                <li className="flex items-center gap-3 border-b border-gray-50 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-semibold text-rose-700">CM</span>
                  <span className="text-sm text-gray-700">Carlos Mendes</span>
                </li>
                <li className="flex items-center gap-3 border-b border-gray-50 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">CY</span>
                  <span className="text-sm text-gray-700">Chloe Yang</span>
                </li>
                <li className="flex items-center gap-3 px-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">CP</span>
                  <span className="text-sm text-gray-700">Clara Petit</span>
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
