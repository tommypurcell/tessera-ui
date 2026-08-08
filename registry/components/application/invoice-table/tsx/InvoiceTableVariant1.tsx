export type InvoiceLineItem = {
  id: string
  description: string
  quantity: number
  unitPrice: number
}

export type InvoiceStatus = 'paid' | 'pending' | 'overdue'

export type InvoiceTableVariant1Props = {
  invoiceNumber: string
  status: InvoiceStatus
  items: InvoiceLineItem[]
  taxRate: number
}

const statusStyles: Record<InvoiceStatus, string> = {
  paid: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
  overdue: 'bg-red-100 text-red-700',
}

const statusLabels: Record<InvoiceStatus, string> = {
  paid: 'Paid',
  pending: 'Pending',
  overdue: 'Overdue',
}

const currency = (n: number) => `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

/**
 * Copy-and-own Tailwind component. Line-item invoice table with a
 * computed subtotal/tax/total footer — every dollar figure is derived
 * from the real `items` array and `taxRate`, never hand-typed.
 */
export function InvoiceTable({ invoiceNumber, status, items, taxRate }: InvoiceTableVariant1Props) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const tax = subtotal * taxRate
  const total = subtotal + tax

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <span className="text-sm font-medium text-gray-900">Invoice {invoiceNumber}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}>{statusLabels[status]}</span>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs text-gray-500">
            <th scope="col" className="px-4 py-2 font-medium">
              Description
            </th>
            <th scope="col" className="px-4 py-2 text-right font-medium">
              Qty
            </th>
            <th scope="col" className="px-4 py-2 text-right font-medium">
              Unit price
            </th>
            <th scope="col" className="px-4 py-2 text-right font-medium">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-50">
              <td className="px-4 py-2.5 text-gray-900">{item.description}</td>
              <td className="px-4 py-2.5 text-right text-gray-600">{item.quantity}</td>
              <td className="px-4 py-2.5 text-right text-gray-600">{currency(item.unitPrice)}</td>
              <td className="px-4 py-2.5 text-right font-medium text-gray-900">{currency(item.quantity * item.unitPrice)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="px-4 py-2 text-right text-gray-500">
              Subtotal
            </td>
            <td className="px-4 py-2 text-right text-gray-900">{currency(subtotal)}</td>
          </tr>
          <tr>
            <td colSpan={3} className="px-4 py-2 text-right text-gray-500">
              Tax ({(taxRate * 100).toFixed(1)}%)
            </td>
            <td className="px-4 py-2 text-right text-gray-900">{currency(tax)}</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td colSpan={3} className="px-4 py-2.5 text-right text-sm font-semibold text-gray-900">
              Total
            </td>
            <td className="px-4 py-2.5 text-right text-sm font-semibold text-gray-900">{currency(total)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
