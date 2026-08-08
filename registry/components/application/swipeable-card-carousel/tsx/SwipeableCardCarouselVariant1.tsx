import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SwipeableCardCarouselVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function SwipeableCardCarouselVariant1({
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
}: SwipeableCardCarouselVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-gray-900">Recommended for you</h2>
        <button type="button" className="text-xs font-medium text-gray-500">See all</button>
      </div>

      <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pl-1 pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-indigo-200 to-indigo-400"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-gray-900">Wireless earbuds</p>
            <p className="mt-0.5 text-xs text-gray-500">Active noise cancelling</p>
            <p className="mt-1.5 text-sm font-bold text-gray-900">$89.00</p>
          </div>
        </div>

        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-amber-200 to-amber-400"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-gray-900">Desk lamp</p>
            <p className="mt-0.5 text-xs text-gray-500">Adjustable warm light</p>
            <p className="mt-1.5 text-sm font-bold text-gray-900">$34.00</p>
          </div>
        </div>

        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-emerald-200 to-emerald-400"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-gray-900">Ceramic mug set</p>
            <p className="mt-0.5 text-xs text-gray-500">Set of 4, dishwasher safe</p>
            <p className="mt-1.5 text-sm font-bold text-gray-900">$28.00</p>
          </div>
        </div>

        <div className="w-[72%] shrink-0 snap-start rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="h-28 w-full rounded-t-xl bg-gradient-to-br from-rose-200 to-rose-400"></div>
          <div className="p-3">
            <p className="text-sm font-semibold text-gray-900">Travel backpack</p>
            <p className="mt-0.5 text-xs text-gray-500">Water-resistant, 24L</p>
            <p className="mt-1.5 text-sm font-bold text-gray-900">$64.00</p>
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-4 rounded-full bg-gray-900"></span>
        <span className="size-1.5 rounded-full bg-gray-300"></span>
        <span className="size-1.5 rounded-full bg-gray-300"></span>
        <span className="size-1.5 rounded-full bg-gray-300"></span>
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
