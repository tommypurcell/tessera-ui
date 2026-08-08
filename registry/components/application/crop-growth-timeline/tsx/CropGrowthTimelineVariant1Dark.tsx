import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CropGrowthTimelineVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function CropGrowthTimelineVariant1Dark({
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
}: CropGrowthTimelineVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xl rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Field 3 — Sweet Corn</p>
          <p className="text-xs text-gray-400">Planted Apr 12 · Est. harvest Jul 28</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400"></span>
          Day 62 of 108
        </span>
      </div>

      <div className="mt-6">
        <div className="relative flex justify-between">
          <div className="absolute left-4 right-4 top-4 h-0.5 bg-gray-700"></div>
          <div className="absolute left-4 top-4 h-0.5 bg-emerald-500" style={{width: '46%'}}></div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-xs font-medium text-white">Seeded</p>
              <p className="text-[11px] text-gray-400">Apr 12</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </span>
            <div className="text-center">
              <p className="text-xs font-medium text-white">Sprouted</p>
              <p className="text-[11px] text-gray-400">Apr 21</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <span aria-current="true" className="flex size-8 items-center justify-center rounded-full bg-emerald-500 text-white ring-4 ring-emerald-500/20">
              <span className="size-2.5 rounded-full bg-white"></span>
            </span>
            <div className="text-center">
              <p className="text-xs font-semibold text-white">Vegetative</p>
              <p className="text-[11px] text-gray-400">May 20 – Jun 18</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-900 text-xs font-medium text-gray-500">4</span>
            <div className="text-center">
              <p className="text-xs font-medium text-gray-400">Flowering</p>
              <p className="text-[11px] text-gray-500">Jun 19 – Jul 9</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-900 text-xs font-medium text-gray-500">5</span>
            <div className="text-center">
              <p className="text-xs font-medium text-gray-400">Harvest</p>
              <p className="text-[11px] text-gray-500">Jul 28</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-md border border-gray-700 bg-gray-800/60 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-amber-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <div>
            <p className="text-xs font-medium text-white">78°F · Sunny</p>
            <p className="text-[11px] text-gray-400">Growing degree days: 842</p>
          </div>
        </div>
        <p className="text-xs text-gray-400">Next: side-dress fertilizer in 4 days</p>
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
