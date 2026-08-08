import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CodeLanguageTabsVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CodeLanguageTabsVariant2Dark({
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
}: CodeLanguageTabsVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-black">
            <input type="radio" id="pkg-npm" name="pkg-tabs-1" className="peer/npm sr-only" checked />
            <input type="radio" id="pkg-pnpm" name="pkg-tabs-1" className="peer/pnpm sr-only" />
            <input type="radio" id="pkg-yarn" name="pkg-tabs-1" className="peer/yarn sr-only" />
      
            <div className="flex items-center gap-1 border-b border-gray-800 p-1">
              <label
                htmlFor="pkg-npm"
                className="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium text-gray-400 transition peer-checked/npm:bg-gray-800 peer-checked/npm:text-white"
              >
                npm
              </label>
              <label
                htmlFor="pkg-pnpm"
                className="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium text-gray-400 transition peer-checked/pnpm:bg-gray-800 peer-checked/pnpm:text-white"
              >
                pnpm
              </label>
              <label
                htmlFor="pkg-yarn"
                className="cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium text-gray-400 transition peer-checked/yarn:bg-gray-800 peer-checked/yarn:text-white"
              >
                yarn
              </label>
            </div>
      
            <div className="hidden items-center gap-2 px-4 py-3 font-mono text-sm text-gray-300 peer-checked/npm:flex">
              <span className="select-none text-emerald-400">$</span>
              npm install tessera-ui
            </div>
            <div className="hidden items-center gap-2 px-4 py-3 font-mono text-sm text-gray-300 peer-checked/pnpm:flex">
              <span className="select-none text-emerald-400">$</span>
              pnpm add tessera-ui
            </div>
            <div className="hidden items-center gap-2 px-4 py-3 font-mono text-sm text-gray-300 peer-checked/yarn:flex">
              <span className="select-none text-emerald-400">$</span>
              yarn add tessera-ui
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
