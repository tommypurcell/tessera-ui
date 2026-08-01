import type { HTMLAttributes } from 'react'

export type QuantityInputsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function QuantityInputsVariant4Dark({ className, ...props }: QuantityInputsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <div>
            <label htmlFor="Quantity" className="sr-only"> Quantity </label>
      
            <div className="flex items-center rounded-sm border border-gray-200 dark:border-gray-800">
              <button
                type="button"
                className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
              >
                &minus;
              </button>
      
              <input
                type="number"
                id="Quantity"
                value="1"
                className="h-10 w-16 border-transparent text-center [-moz-appearance:textfield] sm:text-sm dark:bg-gray-900 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />
      
              <button
                type="button"
                className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
              >
                &plus;
              </button>
            </div>
          </div>
    </div>
  )
}
