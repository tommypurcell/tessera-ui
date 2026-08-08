const items = [
  { name: 'Margherita Pizza', desc: 'Tomato, mozzarella, basil', price: '$16' },
  { name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons', price: '$12' },
  { name: 'Tiramisu', desc: 'Espresso, mascarpone, cocoa', price: '$9' },
]

export function MenuItemRowVariant2() {
  return (
    <ul className="flex flex-col divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.name} className="flex items-center justify-between gap-4 py-3">
          <div>
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="text-sm font-medium text-gray-900">{item.price}</span>
            <button
              type="button"
              aria-label={`Add ${item.name} to order`}
              className="flex size-7 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
