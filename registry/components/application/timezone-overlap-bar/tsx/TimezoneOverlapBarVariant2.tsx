export function TimezoneOverlapBarVariant2() {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900">Team availability</h3>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-xs font-medium text-gray-600">Austin</span>
          <div className="relative h-5 flex-1 rounded-md bg-gray-100">
            <div className="absolute inset-y-0 rounded-md bg-emerald-400" style={{ left: '33.3%', width: '33.3%' }} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-xs font-medium text-gray-600">Berlin</span>
          <div className="relative h-5 flex-1 rounded-md bg-gray-100">
            <div className="absolute inset-y-0 rounded-md bg-emerald-400" style={{ left: '37.5%', width: '33.3%' }} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-xs font-medium text-gray-600">Singapore</span>
          <div className="relative h-5 flex-1 rounded-md bg-gray-100">
            <div className="absolute inset-y-0 rounded-md bg-emerald-400" style={{ left: '4.1%', width: '33.3%' }} />
          </div>
        </div>

        <div className="relative h-6">
          <div className="absolute inset-y-0 rounded-md bg-amber-400/70" style={{ left: '37.5%', width: '4%' }} />
        </div>

        <div className="ml-[92px] flex justify-between text-[10px] text-gray-400">
          <span>12am</span>
          <span>6am</span>
          <span>12pm</span>
          <span>6pm</span>
          <span>12am</span>
        </div>
      </div>

      <p className="mt-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span className="font-medium text-amber-600">1 hour</span> when all three teams overlap
      </p>
    </div>
  )
}
