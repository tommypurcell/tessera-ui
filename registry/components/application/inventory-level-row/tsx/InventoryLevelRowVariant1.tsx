export function InventoryLevelRowVariant1() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-900">Wireless Mouse &ndash; Black</p>
          <p className="text-xs text-gray-500">SKU WM-2201-BLK</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-3L13.74 4a2 2 0 00-3.48 0L3.33 16a2 2 0 001.74 3z" />
          </svg>
          Below reorder point
        </span>
      </div>

      <div className="relative mt-3 h-2.5 w-full rounded-full bg-gray-200">
        <div className="h-full rounded-full bg-amber-500" style={{ width: '18%' }} />
        <div className="absolute inset-y-0 border-l-2 border-dashed border-gray-500" style={{ left: '30%' }} aria-hidden="true" />
      </div>

      <div className="mt-1.5 flex items-center justify-between text-xs text-gray-500">
        <span>36 units in stock</span>
        <span>Reorder at 60</span>
      </div>
    </div>
  )
}
