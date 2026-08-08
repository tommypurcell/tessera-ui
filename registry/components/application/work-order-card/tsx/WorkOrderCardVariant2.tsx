export type WorkOrderRow = {
  id: string
  orderNumberLabel: string
  title: string
  partSummaryLabel: string
  dueDateLabel: string
  stageSummaryLabel: string
  statusColor: 'amber' | 'blue' | 'green'
}

export type WorkOrderCardVariant2Props = {
  orders: WorkOrderRow[]
}

const statusDotClass: Record<WorkOrderRow['statusColor'], string> = {
  amber: 'bg-amber-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
}

/**
 * Copy-and-own Tailwind component. Compact list-row variant for scanning
 * many work orders at once — pairs with WorkOrderCard Variant 1's detail view.
 */
export function WorkOrderCardList({ orders }: WorkOrderCardVariant2Props) {
  return (
    <ul className="w-full max-w-md divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white">
      {orders.map((order) => (
        <li key={order.id} className="flex items-center gap-3 px-4 py-3">
          <span
            className={`size-2 shrink-0 rounded-full ${statusDotClass[order.statusColor]}`}
            aria-hidden="true"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">{order.title}</p>
            <p className="mt-0.5 text-xs text-gray-500">
              {order.orderNumberLabel} &middot; {order.partSummaryLabel}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs font-medium text-gray-900">{order.dueDateLabel}</p>
            <p className="text-xs text-gray-500">{order.stageSummaryLabel}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
