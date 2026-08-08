export type MasonryGridImage = {
  src: string
  alt: string
}

export type MasonryGridVariant1Props = {
  images: MasonryGridImage[]
  /** Number of CSS columns at the default breakpoint. */
  columns?: 2 | 3 | 4
}

const columnClasses: Record<NonNullable<MasonryGridVariant1Props['columns']>, string> = {
  2: 'columns-2',
  3: 'columns-3',
  4: 'columns-4',
}

/**
 * Copy-and-own Tailwind component. CSS-only image masonry gallery using
 * multi-column layout — no JS layout engine required. Images of varying
 * natural height balance across columns automatically as the browser flows
 * content top-to-bottom within each column.
 */
export function MasonryGrid({ images, columns = 3 }: MasonryGridVariant1Props) {
  return (
    <div className={`gap-4 ${columnClasses[columns]}`}>
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt} className="mb-4 w-full rounded-lg object-cover" />
      ))}
    </div>
  )
}
