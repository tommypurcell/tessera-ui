import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductionLineStatusVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function ProductionLineStatusVariant1({
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
}: ProductionLineStatusVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Line 4 — Assembly</h2>
          <p className="text-xs text-gray-500">6 stations · shift ends 6:00 PM</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          <span className="size-1.5 rounded-full bg-emerald-500"></span>
          82% throughput
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="rounded-lg border border-gray-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-500">Station 1</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">Weld cell</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-900">124<span className="text-xs font-medium text-gray-400"> u/hr</span></p>
          <p className="text-[11px] text-gray-500">Target 120 · Running</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-500">Station 2</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">Paint booth</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-900">98<span className="text-xs font-medium text-gray-400"> u/hr</span></p>
          <p className="text-[11px] text-gray-500">Target 100 · Running</p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-red-700">Station 3</p>
            <span className="size-2 rounded-full bg-red-500"></span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">Torque check</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-900">0<span className="text-xs font-medium text-gray-400"> u/hr</span></p>
          <p className="text-[11px] font-medium text-red-700">Fault: sensor E-04</p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-amber-700">Station 4</p>
            <span className="size-2 rounded-full bg-amber-500"></span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">Trim fit</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-900">61<span className="text-xs font-medium text-gray-400"> u/hr</span></p>
          <p className="text-[11px] text-amber-700">Below target · slow cycle</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-500">Station 5</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">Final QA</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-900">116<span className="text-xs font-medium text-gray-400"> u/hr</span></p>
          <p className="text-[11px] text-gray-500">Target 110 · Running</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-500">Station 6</p>
            <span className="size-2 rounded-full bg-gray-400"></span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-500">Packaging</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-400">0<span className="text-xs font-medium text-gray-400"> u/hr</span></p>
          <p className="text-[11px] text-gray-500">Stopped · scheduled break</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2.5">
        <p className="text-xs text-gray-500"><span className="font-medium text-gray-900">1</span> fault · <span className="font-medium text-gray-900">1</span> below target</p>
        <button type="button" className="text-xs font-medium text-gray-600 hover:text-gray-900">View line detail</button>
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
