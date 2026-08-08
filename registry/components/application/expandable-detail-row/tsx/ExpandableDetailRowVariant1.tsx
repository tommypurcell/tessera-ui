import type { HTMLAttributes } from 'react'

export type ExpandableDetailLineItem = {
  label: string
  value: string
  emphasized?: boolean
}

export type ExpandableDetailRow = {
  id: string
  orderNumber: string
  customer: string
  total: string
  expanded?: boolean
  lineItems: ExpandableDetailLineItem[]
}

export type ExpandableDetailRowVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  rows: ExpandableDetailRow[]
  onToggle?: (row: ExpandableDetailRow) => void
}

/**
 * Copy-and-own Tailwind component. Table with inline-expandable detail rows
 * taking a real rows/lineItems contract — pass your own order data instead of hand-editing markup.
 */
export function ExpandableDetailRow({ className, rows, onToggle, ...props }: ExpandableDetailRowVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-8 px-3 py-2.5" />
            <th scope="col" className="px-2 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Order
            </th>
            <th scope="col" className="px-2 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Customer
            </th>
            <th scope="col" className="px-2 py-2.5 text-right text-xs font-medium uppercase tracking-wide text-gray-500">
              Total
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row) => (
            <>
              <tr key={row.id}>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    aria-expanded={row.expanded}
                    aria-label={row.expanded ? `Collapse order ${row.orderNumber}` : `Expand order ${row.orderNumber}`}
                    onClick={() => onToggle?.(row)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d={row.expanded ? 'm19.5 8.25-7.5 7.5-7.5-7.5' : 'm8.25 4.5 7.5 7.5-7.5 7.5'} />
                    </svg>
                  </button>
                </td>
                <td className="whitespace-nowrap px-2 py-3 text-sm font-medium text-gray-900">{row.orderNumber}</td>
                <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-600">{row.customer}</td>
                <td className="whitespace-nowrap px-2 py-3 text-right text-sm text-gray-600">{row.total}</td>
              </tr>
              {row.expanded ? (
                <tr key={`${row.id}-detail`}>
                  <td colSpan={4} className="bg-gray-50 px-3 py-3">
                    <div className="pl-8 text-sm text-gray-600">
                      {row.lineItems.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between py-1 ${
                            item.emphasized ? 'border-t border-gray-200 py-1.5 pt-2 font-medium text-gray-900' : ''
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className={item.emphasized ? undefined : 'text-gray-900'}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ) : null}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
