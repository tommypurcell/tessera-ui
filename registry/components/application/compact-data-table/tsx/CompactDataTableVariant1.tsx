export type CompactDataTableRow = {
  id: string
  skuLabel: string
  name: string
  stockLabel: string
  priceLabel: string
}

export type CompactDataTableVariant1Props = {
  rows: CompactDataTableRow[]
  maxHeightClassName?: string
}

/**
 * Copy-and-own Tailwind component. High-density zebra-striped table with a
 * condensed row height and a sticky header for scrolling through many rows
 * in a fixed-height panel. Distinct from application-tables, which covers
 * general-purpose semantic tables without a density-focused, scroll-container
 * treatment.
 */
export function CompactDataTable({
  rows,
  maxHeightClassName = 'max-h-64',
}: CompactDataTableVariant1Props) {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200">
      <div className={`${maxHeightClassName} overflow-y-auto`}>
        <table className="w-full border-collapse text-left text-xs">
          <thead className="sticky top-0 z-10 bg-gray-50">
            <tr>
              <th scope="col" className="border-b border-gray-200 px-3 py-1.5 font-medium text-gray-500">
                SKU
              </th>
              <th scope="col" className="border-b border-gray-200 px-3 py-1.5 font-medium text-gray-500">
                Name
              </th>
              <th scope="col" className="border-b border-gray-200 px-3 py-1.5 font-medium text-gray-500">
                Stock
              </th>
              <th
                scope="col"
                className="border-b border-gray-200 px-3 py-1.5 text-right font-medium text-gray-500"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-3 py-1 text-gray-500">{row.skuLabel}</td>
                <td className="px-3 py-1 font-medium text-gray-900">{row.name}</td>
                <td className="px-3 py-1 text-gray-700">{row.stockLabel}</td>
                <td className="px-3 py-1 text-right text-gray-900">{row.priceLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
