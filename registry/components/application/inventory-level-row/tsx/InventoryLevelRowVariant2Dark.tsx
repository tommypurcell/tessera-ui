const rows = [
  { name: 'USB-C Cable 2m', sku: 'CBL-USC-2M', width: '82%', bar: 'bg-green-500', count: '164 units', countColor: 'text-gray-300' },
  { name: 'Wireless Mouse', sku: 'WM-2201-BLK', width: '18%', bar: 'bg-amber-500', count: '36 units', countColor: 'text-amber-400' },
  { name: 'Laptop Stand', sku: 'LPS-ALU-01', width: '2%', bar: 'bg-red-500', count: '0 units', countColor: 'text-red-400' },
]

export function InventoryLevelRowVariant2Dark() {
  return (
    <ul className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-800">
      {rows.map((row) => (
        <li key={row.sku} className="flex items-center gap-4 p-3">
          <div className="w-32 shrink-0">
            <p className="truncate text-sm font-medium text-white">{row.name}</p>
            <p className="text-xs text-gray-500">{row.sku}</p>
          </div>
          <div className="relative h-2 flex-1 rounded-full bg-gray-800">
            <div className={`h-full rounded-full ${row.bar}`} style={{ width: row.width }} />
          </div>
          <span className={`w-16 shrink-0 text-right text-xs font-medium ${row.countColor}`}>{row.count}</span>
        </li>
      ))}
    </ul>
  )
}
