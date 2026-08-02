import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RebuiltMotionVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RebuiltMotionVariant1({
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
}: RebuiltMotionVariant1Props) {
  const defaultContent = (
    <>
      <div className="grid w-full max-w-2xl gap-4">
            <div
              className="overflow-hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600"
            >
              <div className="whitespace-nowrap">
                Clear signals · Calm motion · Better focus &nbsp; · &nbsp; Clear signals · Calm motion ·
                Better focus
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="row-span-2 rounded-2xl bg-slate-900 p-5 text-white">
                Focus<br /><span className="text-sm text-slate-300">A quiet primary surface.</span>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4 text-blue-900">Compose</div>
              <div className="rounded-2xl border border-slate-200 p-4">Ship</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold tabular-nums">48,240</span
              ><span className="text-sm text-emerald-700">+12.8%</span>
            </div>
            <div className="relative h-px overflow-hidden bg-slate-200">
              <span className="absolute inset-y-0 left-0 w-1/4 bg-blue-500"></span>
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
