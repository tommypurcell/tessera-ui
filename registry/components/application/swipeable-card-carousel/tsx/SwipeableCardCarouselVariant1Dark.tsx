import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SwipeableCardCarouselVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function SwipeableCardCarouselVariant1Dark({
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
}: SwipeableCardCarouselVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-white">Recommended for you</h2>
        <button type="button" className="text-xs font-medium text-gray-400">See all</button>
      </div>

      <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pl-1 pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-700 bg-gray-900 shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-indigo-500/40 to-indigo-700/60"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-white">Wireless earbuds</p>
            <p className="mt-0.5 text-xs text-gray-400">Active noise cancelling</p>
            <p className="mt-1.5 text-sm font-bold text-white">$89.00</p>
          </div>
        </div>

        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-700 bg-gray-900 shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-amber-500/40 to-amber-700/60"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-white">Desk lamp</p>
            <p className="mt-0.5 text-xs text-gray-400">Adjustable warm light</p>
            <p className="mt-1.5 text-sm font-bold text-white">$34.00</p>
          </div>
        </div>

        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-700 bg-gray-900 shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-emerald-500/40 to-emerald-700/60"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-white">Ceramic mug set</p>
            <p className="mt-0.5 text-xs text-gray-400">Set of 4, dishwasher safe</p>
            <p className="mt-1.5 text-sm font-bold text-white">$28.00</p>
          </div>
        </div>

        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-700 bg-gray-900 shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-rose-500/40 to-rose-700/60"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-white">Travel backpack</p>
            <p className="mt-0.5 text-xs text-gray-400">Water-resistant, 24L</p>
            <p className="mt-1.5 text-sm font-bold text-white">$64.00</p>
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-4 rounded-full bg-white"></span>
        <span className="size-1.5 rounded-full bg-gray-600"></span>
        <span className="size-1.5 rounded-full bg-gray-600"></span>
        <span className="size-1.5 rounded-full bg-gray-600"></span>
      </div>
    </div>
    </>
  )

  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? defaultContent)
      : state === 'empty'
        ? (emptyContent ?? defaultContent)
        : state === 'error'
          ? (errorContent ?? defaultContent)
          : (renderContent ? renderContent(defaultContent) : defaultContent))

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
