export type DishCardVariant2DarkProps = {
  imageUrl: string
  imageAlt: string
  name: string
  /** Number of chili icons to show (0 = not spicy). */
  spiceLevel: number
  description: string
  priceLabel: string
  quantity: number
  onDecrease?: () => void
  onIncrease?: () => void
}

const spiceLevelLabel: Record<number, string> = {
  0: 'Not spicy',
  1: 'Mild',
  2: 'Hot',
  3: 'Extra hot',
}

/**
 * Copy-and-own Tailwind component. Horizontal menu-row dish card adapted for
 * dark surfaces.
 */
export function DishCard({
  imageUrl,
  imageAlt,
  name,
  spiceLevel,
  description,
  priceLabel,
  quantity,
  onDecrease,
  onIncrease,
}: DishCardVariant2DarkProps) {
  return (
    <div className="flex w-full max-w-md items-center gap-3 rounded-lg border border-gray-800 bg-gray-900 p-3">
      <img src={imageUrl} alt={imageAlt} className="size-16 shrink-0 rounded-md object-cover" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-medium text-white">{name}</h3>
          {spiceLevel > 0 ? (
            <span
              className="flex items-center gap-0.5"
              role="img"
              aria-label={`Spice level: ${spiceLevelLabel[spiceLevel] ?? spiceLevel}`}
            >
              {Array.from({ length: spiceLevel }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a5.5 5.5 0 005.5-5.5c0-2.5-1.5-4-2.5-5.5-.5 1-1.5 1.5-2 1-.5-1-.5-3-1-4.5-2 1.5-4.5 5-4.5 9a5.5 5.5 0 005.5 5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </span>
          ) : null}
        </div>
        <p className="truncate text-xs text-gray-400">{description}</p>
        <p className="mt-1 text-sm font-semibold text-white">{priceLabel}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2 rounded-md border border-gray-700 px-1 py-1">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={onDecrease}
          className="flex size-6 items-center justify-center rounded text-gray-400 hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
          </svg>
        </button>
        <span className="w-4 text-center text-sm font-medium text-white">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={onIncrease}
          className="flex size-6 items-center justify-center rounded text-gray-400 hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
