import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DiffStatBarVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DiffStatBarVariant2({
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
}: DiffStatBarVariant2Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <p className="text-sm font-semibold text-gray-900">4 files changed</p>
              <p className="text-xs font-medium tabular-nums text-gray-500">
                <span className="text-green-600">+128</span> <span className="text-red-600">-54</span>
              </p>
            </div>
      
            <ul className="divide-y divide-gray-100" role="list">
              <li className="flex items-center gap-3 px-4 py-2.5">
                <p className="min-w-0 flex-1 truncate font-mono text-xs text-gray-600">src/components/Header.tsx</p>
                <span className="shrink-0 text-xs tabular-nums text-green-600">+64</span>
                <span className="shrink-0 text-xs tabular-nums text-red-600">-8</span>
                <div className="flex h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100" role="img" aria-label="64 lines added, 8 lines removed">
                  <span className="h-full bg-green-500" style={{width: '89%'}}></span>
                  <span className="h-full bg-red-500" style={{width: '11%'}}></span>
                </div>
              </li>
      
              <li className="flex items-center gap-3 px-4 py-2.5">
                <p className="min-w-0 flex-1 truncate font-mono text-xs text-gray-600">src/lib/api/client.ts</p>
                <span className="shrink-0 text-xs tabular-nums text-green-600">+21</span>
                <span className="shrink-0 text-xs tabular-nums text-red-600">-30</span>
                <div className="flex h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100" role="img" aria-label="21 lines added, 30 lines removed">
                  <span className="h-full bg-green-500" style={{width: '41%'}}></span>
                  <span className="h-full bg-red-500" style={{width: '59%'}}></span>
                </div>
              </li>
      
              <li className="flex items-center gap-3 px-4 py-2.5">
                <p className="min-w-0 flex-1 truncate font-mono text-xs text-gray-600">src/styles/tokens.css</p>
                <span className="shrink-0 text-xs tabular-nums text-green-600">+37</span>
                <span className="shrink-0 text-xs tabular-nums text-red-600">-9</span>
                <div className="flex h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100" role="img" aria-label="37 lines added, 9 lines removed">
                  <span className="h-full bg-green-500" style={{width: '80%'}}></span>
                  <span className="h-full bg-red-500" style={{width: '20%'}}></span>
                </div>
              </li>
      
              <li className="flex items-center gap-3 px-4 py-2.5">
                <p className="min-w-0 flex-1 truncate font-mono text-xs text-gray-600">tests/header.test.ts</p>
                <span className="shrink-0 text-xs tabular-nums text-green-600">+6</span>
                <span className="shrink-0 text-xs tabular-nums text-red-600">-7</span>
                <div className="flex h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100" role="img" aria-label="6 lines added, 7 lines removed">
                  <span className="h-full bg-green-500" style={{width: '46%'}}></span>
                  <span className="h-full bg-red-500" style={{width: '54%'}}></span>
                </div>
              </li>
            </ul>
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
