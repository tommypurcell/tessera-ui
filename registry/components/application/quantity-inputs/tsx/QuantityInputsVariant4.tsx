import type { HTMLAttributes } from 'react'

export type QuantityInputsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function QuantityInputsVariant4({ className, ...props }: QuantityInputsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div>
        <label htmlFor="Quantity" className="sr-only">
          {' '}
          Quantity{' '}
        </label>

        <div className="flex items-center rounded-sm border border-gray-200">
          <button
            type="button"
            className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            &minus;
          </button>

          <input
            type="number"
            id="Quantity"
            value="1"
            className="h-10 w-16 border-transparent text-center [-moz-appearance:textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          />

          <button
            type="button"
            className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            &plus;
          </button>
        </div>
      </div>
    </div>
  )
}
