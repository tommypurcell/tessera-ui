import type { HTMLAttributes } from 'react'

export type VerticalMenuVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function VerticalMenuVariant1({ className, ...props }: VerticalMenuVariant1Props) {
  return (
    <div className={className} {...props}>
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            General
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Teams
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Billing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Invoices
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Account
          </a>
        </li>
      </ul>
    </div>
  )
}
