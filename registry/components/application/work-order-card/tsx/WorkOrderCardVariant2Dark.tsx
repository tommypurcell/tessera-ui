export type WorkOrderRow = {
  id: string
  orderNumberLabel: string
  title: string
  partSummaryLabel: string
  dueDateLabel: string
  stageSummaryLabel: string
  statusColor: 'amber' | 'blue' | 'green'
}

export type WorkOrderCardVariant2DarkProps = {
  orders: WorkOrderRow[]
}

const statusDotClass: Record<WorkOrderRow['statusColor'], string> = {
  amber: 'bg-amber-400',
  blue: 'bg-blue-400',
  green: 'bg-green-400',
}

/**
 * Copy-and-own Tailwind component. Compact work-order list row adapted for
 * dark surfaces.
 */
export function WorkOrderCardList({ orders }: WorkOrderCardVariant2DarkProps) {
  return (
    <ul className="w-full max-w-md divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-900">
      {orders.map((order) => (
        <li key={order.id} className="flex items-center gap-3 px-4 py-3">
          <span
            className={`size-2 shrink-0 rounded-full ${statusDotClass[order.statusColor]}`}
            aria-hidden="true"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{order.title}</p>
            <p className="mt-0.5 text-xs text-gray-400">
              {order.orderNumberLabel} &middot; {order.partSummaryLabel}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs font-medium text-white">{order.dueDateLabel}</p>
            <p className="text-xs text-gray-400">{order.stageSummaryLabel}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
