export function MortgageCalculatorVariant1Dark() {
  return (
    <div className="rounded-lg border border-gray-800 p-5">
      <h3 className="text-sm font-semibold text-white">Mortgage calculator</h3>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-400">Home price</span>
          <div className="flex items-center rounded-md border border-gray-700 px-2.5 py-1.5 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
            <span className="text-sm text-gray-500">$</span>
            <input type="text" defaultValue="450,000" className="w-full border-0 bg-transparent p-0 pl-1 text-sm text-gray-100 focus:ring-0 focus:outline-none" />
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-400">Down payment</span>
          <div className="flex items-center rounded-md border border-gray-700 px-2.5 py-1.5 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
            <span className="text-sm text-gray-500">$</span>
            <input type="text" defaultValue="90,000" className="w-full border-0 bg-transparent p-0 pl-1 text-sm text-gray-100 focus:ring-0 focus:outline-none" />
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-400">Interest rate</span>
          <div className="flex items-center rounded-md border border-gray-700 px-2.5 py-1.5 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
            <input type="text" defaultValue="6.5" className="w-full border-0 bg-transparent p-0 text-sm text-gray-100 focus:ring-0 focus:outline-none" />
            <span className="text-sm text-gray-500">%</span>
          </div>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-400">Loan term</span>
          <div className="flex items-center rounded-md border border-gray-700 px-2.5 py-1.5 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-400">
            <input type="text" defaultValue="30" className="w-full border-0 bg-transparent p-0 text-sm text-gray-100 focus:ring-0 focus:outline-none" />
            <span className="text-sm text-gray-500">yrs</span>
          </div>
        </label>
      </div>

      <div className="mt-5 rounded-lg bg-indigo-950/50 px-4 py-3 text-center">
        <p className="text-xs font-medium text-indigo-300">Estimated monthly payment</p>
        <p className="mt-0.5 text-2xl font-bold text-white">$2,275</p>
      </div>
    </div>
  )
}
