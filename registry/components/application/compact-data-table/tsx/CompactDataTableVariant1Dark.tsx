export type CompactDataTableRow = {
  id: string
  skuLabel: string
  name: string
  stockLabel: string
  priceLabel: string
}

export type CompactDataTableVariant1DarkProps = {
  rows: CompactDataTableRow[]
  maxHeightClassName?: string
}

/**
 * Copy-and-own Tailwind component. Compact data table adapted for dark
 * surfaces.
 */
export function CompactDataTable({
  rows,
  maxHeightClassName = 'max-h-64',
}: CompactDataTableVariant1DarkProps) {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-800">
      <div className={`${maxHeightClassName} overflow-y-auto`}>
        <table className="w-full border-collapse text-left text-xs">
          <thead className="sticky top-0 z-10 bg-gray-900">
            <tr>
              <th scope="col" className="border-b border-gray-800 px-3 py-1.5 font-medium text-gray-400">
                SKU
              </th>
              <th scope="col" className="border-b border-gray-800 px-3 py-1.5 font-medium text-gray-400">
                Name
              </th>
              <th scope="col" className="border-b border-gray-800 px-3 py-1.5 font-medium text-gray-400">
                Stock
              </th>
              <th
                scope="col"
                className="border-b border-gray-800 px-3 py-1.5 text-right font-medium text-gray-400"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="odd:bg-gray-950 even:bg-gray-900/60">
                <td className="px-3 py-1 text-gray-500">{row.skuLabel}</td>
                <td className="px-3 py-1 font-medium text-white">{row.name}</td>
                <td className="px-3 py-1 text-gray-300">{row.stockLabel}</td>
                <td className="px-3 py-1 text-right text-white">{row.priceLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
