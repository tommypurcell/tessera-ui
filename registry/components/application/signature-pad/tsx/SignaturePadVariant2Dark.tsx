import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SignaturePadVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SignaturePadVariant2Dark({
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
}: SignaturePadVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div role="tablist" aria-label="Signature method" className="inline-flex rounded-md bg-gray-800 p-0.5 text-sm">
              <button type="button" role="tab" aria-selected="false" className="rounded-[5px] px-3 py-1 font-medium text-gray-400 hover:text-gray-200">
                Draw
              </button>
              <button type="button" role="tab" aria-selected="true" className="rounded-[5px] bg-gray-900 px-3 py-1 font-medium text-white shadow-sm">
                Type
              </button>
            </div>
      
            <div className="mt-3">
              <label htmlFor="signature-pad-typed-dark" className="sr-only">Type your full name</label>
              <input
                id="signature-pad-typed-dark"
                type="text"
                value="Jordan Ellis"
                placeholder="Type your full name"
                className="block w-full rounded-md border-gray-700 bg-gray-800 text-sm text-gray-200 shadow-sm focus:border-white focus:ring-white"
              />
              <div className="mt-3 flex h-20 items-center justify-center rounded-md border border-dashed border-gray-700 bg-gray-800/60">
                <p className="text-3xl text-white" style={{fontFamily: ''Brush Script MT', cursive'}}>Jordan Ellis</p>
              </div>
            </div>
      
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs text-gray-400">By typing your name you agree this is your signature.</p>
              <button type="button" className="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-gray-200">
                Confirm
              </button>
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
