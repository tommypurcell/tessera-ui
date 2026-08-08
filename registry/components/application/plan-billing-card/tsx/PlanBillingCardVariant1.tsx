export type PlanBillingCardVariant1Props = {
  planName: string
  price: string
  status?: string
  usageLabel: string
  usageCurrent: number
  usageLimit: number
  renewalDate: string
  onManage?: () => void
  onUpgrade?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Current-plan summary card: plan name, price,
 * an active-status badge, a usage bar with current/limit counts, the renewal
 * date, and Manage/Upgrade actions. Distinct from Usage Meter (a bare quota
 * tile) and Pricing (a plan-comparison table) — this is the account-settings
 * "what am I on right now" summary.
 */
export function PlanBillingCard({
  planName,
  price,
  status = 'Active',
  usageLabel,
  usageCurrent,
  usageLimit,
  renewalDate,
  onManage,
  onUpgrade,
  className,
}: PlanBillingCardVariant1Props) {
  const percent = Math.min(100, Math.round((usageCurrent / usageLimit) * 100))

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-gray-400 uppercase">Current plan</p>
          <div className="mt-1 flex items-baseline gap-1">
            <h3 className="text-lg font-semibold text-gray-900">{planName}</h3>
            <span className="text-sm text-gray-500">&middot; {price}</span>
          </div>
        </div>
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">{status}</span>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-gray-700">{usageLabel}</span>
          <span className="text-gray-500">
            {usageCurrent.toLocaleString()} / {usageLimit.toLocaleString()}
          </span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gray-100">
          <div className="h-full rounded-full bg-indigo-600" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Renews on <span className="font-medium text-gray-700">{renewalDate}</span>
      </p>

      <div className="mt-4 flex gap-2">
        <button type="button" onClick={onManage} className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Manage plan
        </button>
        <button type="button" onClick={onUpgrade} className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">
          Upgrade
        </button>
      </div>
    </div>
  )
}
