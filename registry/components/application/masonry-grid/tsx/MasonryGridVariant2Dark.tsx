export type MasonryGridCard = {
  title: string
  description: string
}

export type MasonryGridVariant2DarkProps = {
  cards: MasonryGridCard[]
  /** Number of CSS columns at the default breakpoint. */
  columns?: 2 | 3 | 4
}

const columnClasses: Record<NonNullable<MasonryGridVariant2DarkProps['columns']>, string> = {
  2: 'columns-2',
  3: 'columns-3',
  4: 'columns-4',
}

/**
 * Copy-and-own Tailwind component. CSS-only card masonry adapted for dark
 * surfaces.
 */
export function MasonryGrid({ cards, columns = 3 }: MasonryGridVariant2DarkProps) {
  return (
    <div className={`gap-4 ${columnClasses[columns]}`}>
      {cards.map((card) => (
        <article
          key={card.title}
          className="mb-4 break-inside-avoid rounded-lg border border-gray-800 bg-gray-900 p-4"
        >
          <h3 className="text-sm font-semibold text-white">{card.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{card.description}</p>
        </article>
      ))}
    </div>
  )
}
