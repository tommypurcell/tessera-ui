export type LocalePreview = {
  locale: string
  localeLabel: string
  currency: string
}

export type NumberFormatPreviewVariant1Props = {
  amount: number
  date: Date
  locales: LocalePreview[]
}

/**
 * Copy-and-own Tailwind component. Locale-aware number/currency/date
 * preview rows computed live via Intl.NumberFormat and
 * Intl.DateTimeFormat — distinct from currency-input, which is an
 * editable single-locale input rather than a read-only multi-locale
 * comparison of the same underlying value.
 */
export function NumberFormatPreview({ amount, date, locales }: NumberFormatPreviewVariant1Props) {
  return (
    <table className="w-full max-w-xl border-collapse overflow-hidden rounded-lg border border-gray-200 bg-white text-sm">
      <thead>
        <tr className="border-b border-gray-100 text-left text-xs text-gray-500">
          <th className="px-4 py-2 font-medium">Locale</th>
          <th className="px-4 py-2 font-medium">Number</th>
          <th className="px-4 py-2 font-medium">Currency</th>
          <th className="px-4 py-2 font-medium">Date</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {locales.map((loc) => (
          <tr key={loc.locale}>
            <td className="px-4 py-2.5 font-mono text-xs text-gray-500">{loc.localeLabel}</td>
            <td className="px-4 py-2.5 text-gray-900">{new Intl.NumberFormat(loc.locale).format(amount)}</td>
            <td className="px-4 py-2.5 text-gray-900">
              {new Intl.NumberFormat(loc.locale, { style: 'currency', currency: loc.currency }).format(amount)}
            </td>
            <td className="px-4 py-2.5 text-gray-900">
              {new Intl.DateTimeFormat(loc.locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(date)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
