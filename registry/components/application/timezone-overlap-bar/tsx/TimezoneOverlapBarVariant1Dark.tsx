export function TimezoneOverlapBarVariant1Dark() {
  return (
    <div className="rounded-lg border border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Working hours overlap</h3>
        <p className="text-xs font-medium text-indigo-400">4h overlap</p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-xs font-medium text-gray-400">San Francisco</span>
          <div className="relative h-6 flex-1 rounded-md bg-gray-800">
            <div className="absolute inset-y-0 rounded-md bg-indigo-900" style={{ left: '37.5%', width: '33.3%' }} />
            <div className="absolute inset-y-0 rounded-md bg-indigo-500" style={{ left: '41.6%', width: '16.6%' }} />
          </div>
          <span className="w-16 shrink-0 text-right text-xs text-gray-500">9am&ndash;5pm</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-24 shrink-0 text-xs font-medium text-gray-400">London</span>
          <div className="relative h-6 flex-1 rounded-md bg-gray-800">
            <div className="absolute inset-y-0 rounded-md bg-indigo-900" style={{ left: '41.6%', width: '33.3%' }} />
            <div className="absolute inset-y-0 rounded-md bg-indigo-500" style={{ left: '41.6%', width: '16.6%' }} />
          </div>
          <span className="w-16 shrink-0 text-right text-xs text-gray-500">5pm&ndash;1am</span>
        </div>

        <div className="ml-[108px] flex justify-between text-[10px] text-gray-500">
          <span>12am</span>
          <span>6am</span>
          <span>12pm</span>
          <span>6pm</span>
          <span>12am</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-indigo-900" />
          Working hours
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-sm bg-indigo-500" />
          Overlap (1&ndash;5pm SF)
        </span>
      </div>
    </div>
  )
}
