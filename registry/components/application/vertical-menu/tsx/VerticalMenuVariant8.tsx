import type { HTMLAttributes } from 'react'

export type VerticalMenuVariant8Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function VerticalMenuVariant8({ className, ...props }: VerticalMenuVariant8Props) {
  return (
    <div className={className} {...props}>
      <div className="flow-root">
        <ul className="-my-2 divide-y divide-gray-100">
          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Profile
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Meetings
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Update
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Help
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Settings
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2">
            <form action="#">
              <button
                type="submit"
                className="block w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Logout
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  )
}
