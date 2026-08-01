import type { HTMLAttributes } from 'react'

export type QuantityInputsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function QuantityInputsVariant1({ className, ...props }: QuantityInputsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div>
            <label htmlFor="Quantity" className="sr-only"> Quantity </label>
      
            <div className="flex items-center gap-1">
              <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                &minus;
              </button>
      
              <input
                type="number"
                id="Quantity"
                value="1"
                className="h-10 w-24 rounded-sm border-gray-200 sm:text-sm"
              />
      
              <button type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
                &plus;
              </button>
            </div>
          </div>
    </div>
  )
}
