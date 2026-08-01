import type { HTMLAttributes } from 'react'

export type RadioGroupsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RadioGroupsVariant1Dark({ className, ...props }: RadioGroupsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <fieldset className="space-y-3">
            <legend className="sr-only">Delivery</legend>
      
            <div>
              <label
                htmlFor="DeliveryStandard"
                className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <p className="text-gray-700 dark:text-gray-200">Standard</p>
      
                <p className="text-gray-900 dark:text-white">Free</p>
      
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryStandard"
                  id="DeliveryStandard"
                  className="sr-only"
                  checked
                />
              </label>
            </div>
      
            <div>
              <label
                htmlFor="DeliveryPriority"
                className="flex items-center justify-between gap-4 rounded border border-gray-300 bg-white p-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 has-checked:border-blue-600 has-checked:ring-1 has-checked:ring-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <p className="text-gray-700 dark:text-gray-200">Next Day</p>
      
                <p className="text-gray-900 dark:text-white">£9.99</p>
      
                <input
                  type="radio"
                  name="DeliveryOption"
                  value="DeliveryPriority"
                  id="DeliveryPriority"
                  className="sr-only"
                />
              </label>
            </div>
          </fieldset>
    </div>
  )
}
