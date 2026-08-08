export type MasonryGridImage = {
  src: string
  alt: string
}

export type MasonryGridVariant1DarkProps = {
  images: MasonryGridImage[]
  /** Number of CSS columns at the default breakpoint. */
  columns?: 2 | 3 | 4
}

const columnClasses: Record<NonNullable<MasonryGridVariant1DarkProps['columns']>, string> = {
  2: 'columns-2',
  3: 'columns-3',
  4: 'columns-4',
}

/**
 * Copy-and-own Tailwind component. CSS-only image masonry gallery adapted
 * for dark surfaces, with a subtle ring in place of a shadow so each image
 * still reads as a distinct tile against a dark background.
 */
export function MasonryGrid({ images, columns = 3 }: MasonryGridVariant1DarkProps) {
  return (
    <div className={`gap-4 ${columnClasses[columns]}`}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="mb-4 w-full rounded-lg object-cover ring-1 ring-white/10"
        />
      ))}
    </div>
  )
}
