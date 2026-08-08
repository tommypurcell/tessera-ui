import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DiffVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DiffVariant2Dark({
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
}: DiffVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-950">
            <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-2">
              <p className="font-mono text-xs text-gray-400">config/settings.json</p>
              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="text-green-400">+1</span>
                <span className="text-red-400">-1</span>
              </div>
            </div>
      
            <ol className="divide-y divide-gray-800 font-mono text-sm">
              <li className="flex">
                <span className="w-10 shrink-0 select-none py-1.5 text-center text-gray-600">12</span>
                <span className="flex-1 px-3 py-1.5 text-gray-400">&nbsp;&nbsp;"timeout": 30,</span>
              </li>
              <li className="flex bg-red-950/40">
                <span className="w-10 shrink-0 select-none py-1.5 text-center text-red-500/70">13</span>
                <span className="flex-1 px-3 py-1.5 text-red-400"
                  ><span aria-hidden="true">-</span> &nbsp;"retries": 2,</span
                >
                <span className="sr-only">Removed:</span>
              </li>
              <li className="flex bg-green-950/40">
                <span className="w-10 shrink-0 select-none py-1.5 text-center text-green-500/70">13</span>
                <span className="flex-1 px-3 py-1.5 text-green-400"
                  ><span aria-hidden="true">+</span> &nbsp;"retries": 5,</span
                >
                <span className="sr-only">Added:</span>
              </li>
              <li className="flex">
                <span className="w-10 shrink-0 select-none py-1.5 text-center text-gray-600">14</span>
                <span className="flex-1 px-3 py-1.5 text-gray-400">&nbsp;&nbsp;"strict": true</span>
              </li>
            </ol>
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
