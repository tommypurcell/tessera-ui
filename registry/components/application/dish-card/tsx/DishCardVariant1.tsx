export type DishCardVariant1Props = {
  imageUrl: string
  imageAlt: string
  dietaryTag?: string
  name: string
  description: string
  rating: number
  priceLabel: string
  onAdd?: () => void
}

/**
 * Copy-and-own Tailwind component. Vertical menu-item card with a dietary
 * tag, rating, and an "Add to order" action — distinct from
 * application-product-card since it carries food-specific framing (dietary
 * tags, order language) rather than generic e-commerce cart semantics.
 */
export function DishCard({
  imageUrl,
  imageAlt,
  dietaryTag,
  name,
  description,
  rating,
  priceLabel,
  onAdd,
}: DishCardVariant1Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative">
        <img src={imageUrl} alt={imageAlt} className="aspect-[3/2] w-full object-cover" />
        {dietaryTag ? (
          <div className="absolute top-2 left-2 flex gap-1">
            <span className="rounded-full bg-white/95 px-2 py-0.5 text-xs font-medium text-green-700">
              {dietaryTag}
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <div className="flex shrink-0 items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3.5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.454 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs text-gray-500">{rating}</span>
          </div>
        </div>
        <p className="mt-1 text-xs text-gray-500">{description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">{priceLabel}</span>
          <button
            type="button"
            onClick={onAdd}
            className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-gray-700"
          >
            Add to order
          </button>
        </div>
      </div>
    </div>
  )
}
