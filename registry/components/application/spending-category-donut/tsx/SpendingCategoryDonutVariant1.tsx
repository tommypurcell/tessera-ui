import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SpendingCategoryDonutVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SpendingCategoryDonutVariant1({
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
}: SpendingCategoryDonutVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">Spending by category</p>
      <p className="text-xs text-gray-500">This month</p>

      <div className="mt-4 flex items-center gap-6">
        <div className="relative shrink-0" style={{width: '180px', height: '180px'}}>
          <svg viewBox="0 0 180 180" className="size-full">
            <circle cx="90.0" cy="90.0" r="70" fill="none" stroke="#f3f4f6" strokeWidth="22" />
            <circle cx="90.0" cy="90.0" r="70" fill="none" stroke="#3b82f6" strokeWidth="22" strokeDasharray="227.77 212.06" strokeDashoffset="0.00" transform="rotate(-90 90.0 90.0)" />
          <circle cx="90.0" cy="90.0" r="70" fill="none" stroke="#8b5cf6" strokeWidth="22" strokeDasharray="97.39 342.43" strokeDashoffset="-227.77" transform="rotate(-90 90.0 90.0)" />
          <circle cx="90.0" cy="90.0" r="70" fill="none" stroke="#ec4899" strokeWidth="22" strokeDasharray="53.41 386.42" strokeDashoffset="-325.15" transform="rotate(-90 90.0 90.0)" />
          <circle cx="90.0" cy="90.0" r="70" fill="none" stroke="#f59e0b" strokeWidth="22" strokeDasharray="28.27 411.55" strokeDashoffset="-378.56" transform="rotate(-90 90.0 90.0)" />
          <circle cx="90.0" cy="90.0" r="70" fill="none" stroke="#10b981" strokeWidth="22" strokeDasharray="32.99 406.84" strokeDashoffset="-406.84" transform="rotate(-90 90.0 90.0)" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold text-gray-900">$2,800</span>
            <span className="text-xs text-gray-500">total</span>
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="size-2.5 rounded-full" style={{backgroundColor: '#3b82f6'}}></span><span className="text-gray-900">Housing</span></span><span className="text-gray-500">$1,450 <span className="ml-1 text-xs">(52%)</span></span></div>
        <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="size-2.5 rounded-full" style={{backgroundColor: '#8b5cf6'}}></span><span className="text-gray-900">Food</span></span><span className="text-gray-500">$620 <span className="ml-1 text-xs">(22%)</span></span></div>
        <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="size-2.5 rounded-full" style={{backgroundColor: '#ec4899'}}></span><span className="text-gray-900">Transport</span></span><span className="text-gray-500">$340 <span className="ml-1 text-xs">(12%)</span></span></div>
        <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="size-2.5 rounded-full" style={{backgroundColor: '#f59e0b'}}></span><span className="text-gray-900">Subscriptions</span></span><span className="text-gray-500">$180 <span className="ml-1 text-xs">(6%)</span></span></div>
        <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2"><span className="size-2.5 rounded-full" style={{backgroundColor: '#10b981'}}></span><span className="text-gray-900">Other</span></span><span className="text-gray-500">$210 <span className="ml-1 text-xs">(8%)</span></span></div>
        </div>
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
