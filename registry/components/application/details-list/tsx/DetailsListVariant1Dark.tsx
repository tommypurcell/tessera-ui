import type { HTMLAttributes } from 'react'

export type DetailsListVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DetailsListVariant1Dark({ className, ...props }: DetailsListVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-200 text-sm dark:divide-gray-700">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 dark:text-white">Title</dt>

            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Mr</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 dark:text-white">Name</dt>

            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">John Frusciante</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 dark:text-white">Occupation</dt>

            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">Guitarist</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 dark:text-white">Salary</dt>

            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">$1,000,000+</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 dark:text-white">Bio</dt>

            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
              doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
              aspernatur neque molestiae labore aliquam soluta architecto?
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
