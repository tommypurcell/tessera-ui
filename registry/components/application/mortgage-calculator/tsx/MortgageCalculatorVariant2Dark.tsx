export function MortgageCalculatorVariant2Dark() {
  return (
    <div className="rounded-lg border border-gray-800 p-5">
      <p className="text-xs font-medium text-gray-400">Estimated monthly payment</p>
      <p className="mt-1 text-3xl font-bold text-white">$2,584</p>

      <div className="mt-4 flex flex-col gap-2.5 border-t border-gray-800 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-400">
            <span className="size-2.5 rounded-full bg-indigo-500" />
            Principal &amp; interest
          </span>
          <span className="font-medium text-white">$2,275</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-400">
            <span className="size-2.5 rounded-full bg-sky-400" />
            Property taxes
          </span>
          <span className="font-medium text-white">$225</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-400">
            <span className="size-2.5 rounded-full bg-gray-600" />
            Home insurance
          </span>
          <span className="font-medium text-white">$84</span>
        </div>
      </div>

      <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-gray-800">
        <div className="h-full bg-indigo-500" style={{ width: '88%' }} />
        <div className="h-full bg-sky-400" style={{ width: '9%' }} />
        <div className="h-full bg-gray-600" style={{ width: '3%' }} />
      </div>
    </div>
  )
}
