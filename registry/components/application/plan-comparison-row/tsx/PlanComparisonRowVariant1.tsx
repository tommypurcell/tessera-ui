export type TelecomPlan = {
  name: string
  talk: string
  text: string
  data: string
  price: number
  isSelected?: boolean
}

export type PlanComparisonRowVariant1Props = {
  plans: TelecomPlan[]
}

/**
 * Copy-and-own Tailwind component. Fixed talk/text/data/price columns
 * for comparing telecom plans — distinct from feature-comparison-matrix,
 * which takes an arbitrary set of feature rows across any number of
 * plans rather than a fixed telecom-specific column shape.
 */
export function PlanComparisonRow({ plans }: PlanComparisonRowVariant1Props) {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2 border-b border-gray-100 px-4 py-2 text-xs font-medium text-gray-500">
        <span>Plan</span>
        <span className="text-center">Talk</span>
        <span className="text-center">Text</span>
        <span className="text-center">Data</span>
        <span className="text-right">Price</span>
      </div>
      <ul className="divide-y divide-gray-100">
        {plans.map((plan) => (
          <li
            key={plan.name}
            className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center gap-2 px-4 py-3 text-sm ${
              plan.isSelected ? 'bg-blue-50' : ''
            }`}
          >
            <span className={`truncate ${plan.isSelected ? 'font-semibold text-blue-900' : 'font-medium text-gray-900'}`}>
              {plan.name}
              {plan.isSelected ? <span className="ml-1.5 text-xs font-medium text-blue-600">(current)</span> : null}
            </span>
            <span className="text-center text-gray-600">{plan.talk}</span>
            <span className="text-center text-gray-600">{plan.text}</span>
            <span className="text-center text-gray-600">{plan.data}</span>
            <span className="text-right font-medium text-gray-900">${plan.price}/mo</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
