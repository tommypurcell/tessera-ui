import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LikertScaleVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LikertScaleVariant1Dark({
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
}: LikertScaleVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <fieldset>
              <legend className="text-sm font-medium text-white">The onboarding process was easy to follow.</legend>
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="w-20 shrink-0 text-xs text-gray-400">Disagree</span>
                <div className="flex flex-1 items-center justify-between px-2">
                  <label className="flex flex-col items-center gap-1.5">
                    <input type="radio" name="likert-onboarding-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" />
                    <span className="text-[10px] text-gray-500">1</span>
                  </label>
                  <label className="flex flex-col items-center gap-1.5">
                    <input type="radio" name="likert-onboarding-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" />
                    <span className="text-[10px] text-gray-500">2</span>
                  </label>
                  <label className="flex flex-col items-center gap-1.5">
                    <input type="radio" name="likert-onboarding-dark" checked className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" />
                    <span className="text-[10px] text-gray-500">3</span>
                  </label>
                  <label className="flex flex-col items-center gap-1.5">
                    <input type="radio" name="likert-onboarding-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" />
                    <span className="text-[10px] text-gray-500">4</span>
                  </label>
                  <label className="flex flex-col items-center gap-1.5">
                    <input type="radio" name="likert-onboarding-dark" className="size-4 border-gray-600 bg-gray-800 text-white focus:ring-white" />
                    <span className="text-[10px] text-gray-500">5</span>
                  </label>
                </div>
                <span className="w-20 shrink-0 text-right text-xs text-gray-400">Agree</span>
              </div>
            </fieldset>
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
