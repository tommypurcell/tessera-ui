import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FieldSensorMapVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  children?: ReactNode
  renderContent?: (defaultContent: ReactNode) => ReactNode
  before?: ReactNode
  after?: ReactNode
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

export function FieldSensorMapVariant1Dark({
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
}: FieldSensorMapVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-lg rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-700 p-4">
        <div>
          <h2 className="text-sm font-semibold text-white">North Field — Sensor Map</h2>
          <p className="text-xs text-gray-400">18 plots · updated 4 min ago</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1"><span className="size-2.5 rounded-sm bg-amber-400"></span>Dry</span>
          <span className="flex items-center gap-1"><span className="size-2.5 rounded-sm bg-sky-400"></span>Moist</span>
          <span className="flex items-center gap-1"><span className="size-2.5 rounded-sm bg-sky-600"></span>Saturated</span>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-1.5 p-4">
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">A1</span>
          <span className="text-[10px] font-medium">64°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">A2</span>
          <span className="text-[10px] font-medium">65°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-amber-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">A3</span>
          <span className="text-[10px] font-medium">71°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-amber-500 text-white transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">A4</span>
          <span className="text-[10px] font-medium">73°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">A5</span>
          <span className="text-[10px] font-medium">63°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-600 text-white transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">A6</span>
          <span className="text-[10px] font-medium">60°F</span>
        </button>

        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-600 text-white transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">B1</span>
          <span className="text-[10px] font-medium">61°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">B2</span>
          <span className="text-[10px] font-medium">64°F</span>
        </button>
        <button type="button" aria-current="true" className="relative flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-amber-500 text-white ring-2 ring-white ring-offset-1 ring-offset-gray-900 transition">
          <span className="text-[11px] font-semibold">B3</span>
          <span className="text-[10px] font-medium">74°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-amber-600 text-white transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">B4</span>
          <span className="text-[10px] font-medium">76°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">B5</span>
          <span className="text-[10px] font-medium">63°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">B6</span>
          <span className="text-[10px] font-medium">62°F</span>
        </button>

        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-amber-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">C1</span>
          <span className="text-[10px] font-medium">70°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-amber-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">C2</span>
          <span className="text-[10px] font-medium">69°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">C3</span>
          <span className="text-[10px] font-medium">65°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-400 text-gray-950 transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">C4</span>
          <span className="text-[10px] font-medium">64°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-600 text-white transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">C5</span>
          <span className="text-[10px] font-medium">60°F</span>
        </button>
        <button type="button" className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-md bg-sky-600 text-white transition hover:ring-2 hover:ring-white hover:ring-offset-1 hover:ring-offset-gray-900">
          <span className="text-[11px] font-semibold">C6</span>
          <span className="text-[10px] font-medium">59°F</span>
        </button>
      </div>

      <div className="flex items-center justify-between border-t border-gray-700 px-4 py-2.5">
        <p className="text-xs text-gray-400">Selected: <span className="font-medium text-white">B3</span> · 22% VWC · 74°F</p>
        <button type="button" className="text-xs font-medium text-gray-400 hover:text-white">View history</button>
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
