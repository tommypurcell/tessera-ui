import type { HTMLAttributes } from 'react'

export type RadioGroupsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RadioGroupsVariant2({ className, ...props }: RadioGroupsVariant2Props) {
  return (
    <div className={className} {...props}>
      <fieldset className="space-y-3">
        <legend className="sr-only">Delivery</legend>

        <div>
          <label
            htmlFor="DeliveryStandard"
            className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
          >
            <div>
              <p className="text-gray-700">Standard</p>

              <p className="text-gray-900">Free</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryStandard"
              id="DeliveryStandard"
              className="size-5 border-gray-300"
              checked
            />
          </label>
        </div>

        <div>
          <label
            htmlFor="DeliveryPriority"
            className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600"
          >
            <div>
              <p className="text-gray-700">Next Day</p>

              <p className="text-gray-900">£9.99</p>
            </div>

            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryPriority"
              id="DeliveryPriority"
              className="size-5 border-gray-300"
            />
          </label>
        </div>
      </fieldset>
    </div>
  )
}
