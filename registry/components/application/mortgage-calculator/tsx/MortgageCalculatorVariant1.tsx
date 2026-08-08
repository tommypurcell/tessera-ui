export function MortgageCalculatorVariant1() {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <h3 className="text-sm font-semibold text-gray-900">Mortgage calculator</h3>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-600">Home price</span>
          <div className="flex items-center rounded-md border border-gray-300 px-2.5 py-1.5 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <span className="text-sm text-gray-400">$</span>
            <input type="text" defaultValue="450,000" className="w-full border-0 p-0 pl-1 text-sm text-gray-900 focus:ring-0 focus:outline-none" />
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-600">Down payment</span>
          <div className="flex items-center rounded-md border border-gray-300 px-2.5 py-1.5 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <span className="text-sm text-gray-400">$</span>
            <input type="text" defaultValue="90,000" className="w-full border-0 p-0 pl-1 text-sm text-gray-900 focus:ring-0 focus:outline-none" />
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-600">Interest rate</span>
          <div className="flex items-center rounded-md border border-gray-300 px-2.5 py-1.5 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <input type="text" defaultValue="6.5" className="w-full border-0 p-0 text-sm text-gray-900 focus:ring-0 focus:outline-none" />
            <span className="text-sm text-gray-400">%</span>
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-600">Loan term</span>
          <div className="flex items-center rounded-md border border-gray-300 px-2.5 py-1.5 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <input type="text" defaultValue="30" className="w-full border-0 p-0 text-sm text-gray-900 focus:ring-0 focus:outline-none" />
            <span className="text-sm text-gray-400">yrs</span>
          </div>
        </label>
      </div>

      <div className="mt-5 rounded-lg bg-indigo-50 px-4 py-3 text-center">
        <p className="text-xs font-medium text-indigo-700">Estimated monthly payment</p>
        <p className="mt-0.5 text-2xl font-bold text-indigo-900">$2,275</p>
      </div>
    </div>
  )
}
