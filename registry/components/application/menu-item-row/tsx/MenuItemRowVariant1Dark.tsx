export function MenuItemRowVariant1Dark() {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-800 py-4">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-white">Roasted Beet Salad</h3>
          <span className="rounded bg-green-900/40 px-1.5 py-0.5 text-[10px] font-semibold text-green-300">VEGAN</span>
          <span className="rounded bg-orange-900/40 px-1.5 py-0.5 text-[10px] font-semibold text-orange-300">GF</span>
        </div>
        <p className="mt-1 text-sm text-gray-400">Roasted beets, whipped goat cheese, candied walnuts, arugula, citrus vinaigrette.</p>
        <p className="mt-2 text-sm font-medium text-white">$14</p>
      </div>

      <button
        type="button"
        aria-label="Add Roasted Beet Salad to order"
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  )
}
