function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`size-3.5 ${filled ? 'text-amber-400' : 'text-gray-700'}`}
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.454 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export type ProductCardVariant1DarkProps = {
  imageSrc: string
  imageAlt: string
  title: string
  price: number
  comparePrice?: number
  discountLabel?: string
  rating?: number
  reviewCount?: number
  onQuickView?: () => void
  onAddToCart?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. E-commerce product card adapted for dark surfaces —
 * image with a hover quick-view overlay, title, star rating, price, and add-to-cart.
 */
export function ProductCardVariant1Dark({
  imageSrc,
  imageAlt,
  title,
  price,
  comparePrice,
  discountLabel,
  rating = 0,
  reviewCount = 0,
  onQuickView,
  onAddToCart,
  className,
}: ProductCardVariant1DarkProps) {
  const roundedRating = Math.round(rating)

  return (
    <div className={`group overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      <div className="relative">
        <img src={imageSrc} alt={imageAlt} className="aspect-square w-full object-cover" />

        {discountLabel ? (
          <span className="absolute left-2 top-2 rounded-full bg-rose-600 px-2 py-0.5 text-xs font-semibold text-white">
            {discountLabel}
          </span>
        ) : null}

        {onQuickView ? (
          <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              onClick={onQuickView}
              className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Quick view
            </button>
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-white">{title}</h3>

        {reviewCount > 0 ? (
          <div
            className="mt-1 flex items-center gap-1"
            role="img"
            aria-label={`Rated ${rating} out of 5 stars, ${reviewCount} reviews`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} filled={i < roundedRating} />
            ))}
            <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
          </div>
        ) : null}

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold text-white">${price.toFixed(2)}</span>
            {comparePrice ? (
              <span className="text-xs text-gray-500 line-through">${comparePrice.toFixed(2)}</span>
            ) : null}
          </div>

          <button
            type="button"
            aria-label={`Add ${title} to cart`}
            onClick={onAddToCart}
            className="inline-flex size-8 items-center justify-center rounded-md bg-white text-gray-900 shadow-sm hover:bg-gray-200"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.876-4.759 2.212-7.298a.75.75 0 0 0-.749-.821H5.324M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
