export type PublicNoticeCardVariant1DarkProps = {
  category: string
  date: string
  dateLabel: string
  title: string
  summary: string
  readMoreHref: string
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Formal civic/government
 * notice card: category badge, date, title, summary, and a read-more link —
 * no author identity.
 */
export function PublicNoticeCard({ category, date, dateLabel, title, summary, readMoreHref, className }: PublicNoticeCardVariant1DarkProps) {
  return (
    <article className={`rounded-lg border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-300">{category}</span>
        <time dateTime={date} className="text-xs text-gray-500">{dateLabel}</time>
      </div>

      <h3 className="mt-3 text-sm font-semibold text-gray-100">{title}</h3>

      <p className="mt-1.5 text-sm text-gray-400">{summary}</p>

      <a href={readMoreHref} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300">
        Read full notice
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </article>
  )
}
