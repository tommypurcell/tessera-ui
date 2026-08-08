import { useState } from 'react'

export type CartLineItemVariant1Props = {
  imageSrc: string
  imageAlt: string
  title: string
  variantLabel?: string
  unitPrice: number
  initialQuantity?: number
  minQuantity?: number
  maxQuantity?: number
  onQuantityChange?: (quantity: number) => void
  onRemove?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Cart line item — thumbnail, product/variant name, a
 * quantity stepper, computed unit and line-total price, and a remove action, all driven
 * by real quantity state.
 */
export function CartLineItemVariant1({
  imageSrc,
  imageAlt,
  title,
  variantLabel,
  unitPrice,
  initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 99,
  onQuantityChange,
  onRemove,
  className,
}: CartLineItemVariant1Props) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const updateQuantity = (next: number) => {
    const clamped = Math.min(maxQuantity, Math.max(minQuantity, next))
    setQuantity(clamped)
    onQuantityChange?.(clamped)
  }

  return (
    <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      <div className="flex gap-3 p-4">
        <img src={imageSrc} alt={imageAlt} className="size-16 shrink-0 rounded-lg object-cover" />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900">{title}</p>
              {variantLabel ? <p className="text-xs text-gray-500">{variantLabel}</p> : null}
            </div>

            <button
              type="button"
              aria-label={`Remove ${title} from cart`}
              onClick={onRemove}
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div role="group" aria-label={`Quantity for ${title}`} className="flex items-center rounded-md border border-gray-300">
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= minQuantity}
                onClick={() => updateQuantity(quantity - 1)}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>
              <span className="w-7 text-center text-sm text-gray-900" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                disabled={quantity >= maxQuantity}
                onClick={() => updateQuantity(quantity + 1)}
                className="flex size-7 items-center justify-center text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">${(unitPrice * quantity).toFixed(2)}</p>
              <p className="text-xs text-gray-400">${unitPrice.toFixed(2)} each</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
