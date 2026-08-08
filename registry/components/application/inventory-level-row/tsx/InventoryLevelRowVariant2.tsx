const rows = [
  { name: 'USB-C Cable 2m', sku: 'CBL-USC-2M', width: '82%', bar: 'bg-green-500', count: '164 units', countColor: 'text-gray-700' },
  { name: 'Wireless Mouse', sku: 'WM-2201-BLK', width: '18%', bar: 'bg-amber-500', count: '36 units', countColor: 'text-amber-700' },
  { name: 'Laptop Stand', sku: 'LPS-ALU-01', width: '2%', bar: 'bg-red-500', count: '0 units', countColor: 'text-red-700' },
]

export function InventoryLevelRowVariant2() {
  return (
    <ul className="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-200">
      {rows.map((row) => (
        <li key={row.sku} className="flex items-center gap-4 p-3">
          <div className="w-32 shrink-0">
            <p className="truncate text-sm font-medium text-gray-900">{row.name}</p>
            <p className="text-xs text-gray-500">{row.sku}</p>
          </div>
          <div className="relative h-2 flex-1 rounded-full bg-gray-200">
            <div className={`h-full rounded-full ${row.bar}`} style={{ width: row.width }} />
          </div>
          <span className={`w-16 shrink-0 text-right text-xs font-medium ${row.countColor}`}>{row.count}</span>
        </li>
      ))}
    </ul>
  )
}
