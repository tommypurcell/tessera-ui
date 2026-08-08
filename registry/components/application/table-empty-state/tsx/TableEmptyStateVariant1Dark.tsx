export type TableEmptyStateVariant1DarkProps = {
  columns: string[]
  title: string
  description: string
  ctaLabel: string
  onCreate?: () => void
}

/**
 * Copy-and-own Tailwind component. Full-width empty state embedded inside a
 * real table (header row intact, a single spanning row underneath) with an
 * illustration, message, and an add-first-row call to action.
 */
export function TableEmptyStateDark({ columns, title, description, ctaLabel, onCreate }: TableEmptyStateVariant1DarkProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-700">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:px-4 *:py-2.5 *:text-xs *:font-medium *:text-gray-400">
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={columns.length} className="px-4 py-12">
              <div className="mx-auto max-w-xs text-center">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-12 text-gray-600">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-gray-400">{description}</p>
                <button type="button" onClick={onCreate} className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  {ctaLabel}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
