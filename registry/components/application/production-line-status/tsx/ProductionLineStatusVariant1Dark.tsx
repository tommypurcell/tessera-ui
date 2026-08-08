import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProductionLineStatusVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function ProductionLineStatusVariant1Dark({
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
}: ProductionLineStatusVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-2xl rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-700 p-4">
        <div>
          <h2 className="text-sm font-semibold text-white">Line 4 — Assembly</h2>
          <p className="text-xs text-gray-400">6 stations · shift ends 6:00 PM</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400"></span>
          82% throughput
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="rounded-lg border border-gray-700 bg-gray-800/60 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-400">Station 1</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-white">Weld cell</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-white">124<span className="text-xs font-medium text-gray-500"> u/hr</span></p>
          <p className="text-[11px] text-gray-400">Target 120 · Running</p>
        </div>

        <div className="rounded-lg border border-gray-700 bg-gray-800/60 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-400">Station 2</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-white">Paint booth</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-white">98<span className="text-xs font-medium text-gray-500"> u/hr</span></p>
          <p className="text-[11px] text-gray-400">Target 100 · Running</p>
        </div>

        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-red-400">Station 3</p>
            <span className="size-2 rounded-full bg-red-400"></span>
          </div>
          <p className="mt-1 text-sm font-semibold text-white">Torque check</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-white">0<span className="text-xs font-medium text-gray-500"> u/hr</span></p>
          <p className="text-[11px] font-medium text-red-400">Fault: sensor E-04</p>
        </div>

        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-amber-400">Station 4</p>
            <span className="size-2 rounded-full bg-amber-400"></span>
          </div>
          <p className="mt-1 text-sm font-semibold text-white">Trim fit</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-white">61<span className="text-xs font-medium text-gray-500"> u/hr</span></p>
          <p className="text-[11px] text-amber-400">Below target · slow cycle</p>
        </div>

        <div className="rounded-lg border border-gray-700 bg-gray-800/60 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-400">Station 5</p>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400"></span>
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-white">Final QA</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-white">116<span className="text-xs font-medium text-gray-500"> u/hr</span></p>
          <p className="text-[11px] text-gray-400">Target 110 · Running</p>
        </div>

        <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-gray-500">Station 6</p>
            <span className="size-2 rounded-full bg-gray-600"></span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-400">Packaging</p>
          <p className="mt-2 text-lg font-bold tabular-nums text-gray-500">0<span className="text-xs font-medium text-gray-600"> u/hr</span></p>
          <p className="text-[11px] text-gray-500">Stopped · scheduled break</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-700 px-4 py-2.5">
        <p className="text-xs text-gray-400"><span className="font-medium text-white">1</span> fault · <span className="font-medium text-white">1</span> below target</p>
        <button type="button" className="text-xs font-medium text-gray-400 hover:text-white">View line detail</button>
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
