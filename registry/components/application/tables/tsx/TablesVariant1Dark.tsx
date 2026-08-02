import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TablesVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TablesVariant1Dark({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: TablesVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">DoB</th>
              <th className="px-3 py-2 whitespace-nowrap">Role</th>
              <th className="px-3 py-2 whitespace-nowrap">Salary</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
              <td className="px-3 py-2 whitespace-nowrap">04/06/1262</td>
              <td className="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
              <td className="px-3 py-2 whitespace-nowrap">$0</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
              <td className="px-3 py-2 whitespace-nowrap">19/10/1678</td>
              <td className="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
              <td className="px-3 py-2 whitespace-nowrap">$0</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
              <td className="px-3 py-2 whitespace-nowrap">15/03/1593</td>
              <td className="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
              <td className="px-3 py-2 whitespace-nowrap">$0</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
              <td className="px-3 py-2 whitespace-nowrap">01/09/1971</td>
              <td className="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
              <td className="px-3 py-2 whitespace-nowrap">$53,000</td>
            </tr>

            <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
              <td className="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
              <td className="px-3 py-2 whitespace-nowrap">18/11/1991</td>
              <td className="px-3 py-2 whitespace-nowrap">Familiar/Vampire Hunter</td>
              <td className="px-3 py-2 whitespace-nowrap">$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
