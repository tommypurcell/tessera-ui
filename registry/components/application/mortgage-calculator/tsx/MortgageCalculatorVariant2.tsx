export function MortgageCalculatorVariant2() {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <p className="text-xs font-medium text-gray-500">Estimated monthly payment</p>
      <p className="mt-1 text-3xl font-bold text-gray-900">$2,584</p>

      <div className="mt-4 flex flex-col gap-2.5 border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-600">
            <span className="size-2.5 rounded-full bg-indigo-500" />
            Principal &amp; interest
          </span>
          <span className="font-medium text-gray-900">$2,275</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-600">
            <span className="size-2.5 rounded-full bg-sky-400" />
            Property taxes
          </span>
          <span className="font-medium text-gray-900">$225</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-600">
            <span className="size-2.5 rounded-full bg-gray-300" />
            Home insurance
          </span>
          <span className="font-medium text-gray-900">$84</span>
        </div>
      </div>

      <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full bg-indigo-500" style={{ width: '88%' }} />
        <div className="h-full bg-sky-400" style={{ width: '9%' }} />
        <div className="h-full bg-gray-300" style={{ width: '3%' }} />
      </div>
    </div>
  )
}
