import { useState } from 'react'

export type ColorOption = {
  value: string
  label: string
  swatch: string
  inStock?: boolean
}

export type SizeOption = {
  value: string
  label: string
  inStock?: boolean
}

export type VariantSelectorVariant1Props = {
  colorOptions?: ColorOption[]
  sizeOptions?: SizeOption[]
  defaultColor?: string
  defaultSize?: string
  onColorChange?: (value: string) => void
  onSizeChange?: (value: string) => void
  onSizeGuideClick?: () => void
  className?: string
}

const DEFAULT_COLORS: ColorOption[] = [
  { value: 'matte-black', label: 'Matte Black', swatch: '#111827' },
  { value: 'cloud-white', label: 'Cloud White', swatch: '#ffffff' },
  { value: 'ocean-blue', label: 'Ocean Blue', swatch: '#2563eb' },
  { value: 'sunset-red', label: 'Sunset Red', swatch: '#f43f5e', inStock: false },
]

const DEFAULT_SIZES: SizeOption[] = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL', inStock: false },
]

/**
 * Copy-and-own Tailwind component. Product variant selector — color swatches and size
 * buttons as accessible radiogroups, with a real out-of-stock state that disables (not
 * just dims) unavailable options.
 */
export function VariantSelectorVariant1({
  colorOptions = DEFAULT_COLORS,
  sizeOptions = DEFAULT_SIZES,
  defaultColor,
  defaultSize,
  onColorChange,
  onSizeChange,
  onSizeGuideClick,
  className,
}: VariantSelectorVariant1Props) {
  const [color, setColor] = useState(defaultColor ?? colorOptions.find((c) => c.inStock !== false)?.value)
  const [size, setSize] = useState(defaultSize ?? sizeOptions.find((s) => s.inStock !== false)?.value)

  const selectedColorLabel = colorOptions.find((c) => c.value === color)?.label
  const selectedSizeLabel = sizeOptions.find((s) => s.value === size)?.label

  const handleColorSelect = (value: string) => {
    setColor(value)
    onColorChange?.(value)
  }

  const handleSizeSelect = (value: string) => {
    setSize(value)
    onSizeChange?.(value)
  }

  return (
    <div className={`flex flex-col gap-5 ${className ?? ''}`}>
      <div>
        <p className="text-sm font-medium text-gray-900">
          Color: <span className="font-normal text-gray-500">{selectedColorLabel}</span>
        </p>

        <div role="radiogroup" aria-label="Color" className="mt-2 flex items-center gap-2">
          {colorOptions.map((option) => {
            const isSelected = option.value === color
            const outOfStock = option.inStock === false

            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                aria-disabled={outOfStock || undefined}
                aria-label={outOfStock ? `${option.label}, out of stock` : option.label}
                onClick={() => !outOfStock && handleColorSelect(option.value)}
                className={`relative flex size-8 items-center justify-center rounded-full ${
                  outOfStock
                    ? 'cursor-not-allowed opacity-40 ring-1 ring-inset ring-gray-200'
                    : isSelected
                      ? 'ring-2 ring-offset-2 ring-gray-900'
                      : 'ring-1 ring-inset ring-gray-200 hover:ring-gray-300'
                }`}
              >
                <span
                  className="size-6 rounded-full border border-gray-200"
                  style={{ backgroundColor: option.swatch }}
                />
                {outOfStock ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-gray-400"
                    style={{
                      background:
                        'linear-gradient(to top right, transparent calc(50% - 1px), #9ca3af, transparent calc(50% + 1px))',
                    }}
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">
            Size: <span className="font-normal text-gray-500">{selectedSizeLabel}</span>
          </p>
          <button
            type="button"
            onClick={onSizeGuideClick}
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            Size guide
          </button>
        </div>

        <div role="radiogroup" aria-label="Size" className="mt-2 grid grid-cols-5 gap-2">
          {sizeOptions.map((option) => {
            const isSelected = option.value === size
            const outOfStock = option.inStock === false

            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                aria-disabled={outOfStock || undefined}
                onClick={() => !outOfStock && handleSizeSelect(option.value)}
                className={`relative rounded-md py-1.5 text-sm ${
                  outOfStock
                    ? 'cursor-not-allowed border border-gray-200 text-gray-300'
                    : isSelected
                      ? 'border-2 border-gray-900 font-semibold text-gray-900'
                      : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {option.label}
                {outOfStock ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gray-300"
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
