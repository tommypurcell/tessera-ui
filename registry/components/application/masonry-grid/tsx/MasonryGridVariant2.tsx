export type MasonryGridCard = {
  title: string
  description: string
}

export type MasonryGridVariant2Props = {
  cards: MasonryGridCard[]
  /** Number of CSS columns at the default breakpoint. */
  columns?: 2 | 3 | 4
}

const columnClasses: Record<NonNullable<MasonryGridVariant2Props['columns']>, string> = {
  2: 'columns-2',
  3: 'columns-3',
  4: 'columns-4',
}

/**
 * Copy-and-own Tailwind component. CSS-only card masonry for content of
 * varying length (e.g. notes or activity cards) — break-inside-avoid keeps
 * each card intact within a single column instead of splitting across the
 * column break.
 */
export function MasonryGrid({ cards, columns = 3 }: MasonryGridVariant2Props) {
  return (
    <div className={`gap-4 ${columnClasses[columns]}`}>
      {cards.map((card) => (
        <article
          key={card.title}
          className="mb-4 break-inside-avoid rounded-lg border border-gray-200 bg-white p-4"
        >
          <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{card.description}</p>
        </article>
      ))}
    </div>
  )
}
