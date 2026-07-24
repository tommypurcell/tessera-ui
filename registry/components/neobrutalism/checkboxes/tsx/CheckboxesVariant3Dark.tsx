import type { HTMLAttributes } from 'react'

export type CheckboxesVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CheckboxesVariant3Dark({ className, ...props }: CheckboxesVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="flex flex-col items-start divide-y-2 divide-black border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black dark:divide-white dark:border-white dark:bg-gray-900 dark:shadow-white">
          <label
            htmlFor="Option1"
            className="inline-flex items-start gap-3 p-4 focus-within:bg-yellow-200 hover:bg-yellow-200 dark:focus-within:bg-yellow-700 dark:hover:bg-yellow-700"
          >
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-white"
              id="Option1"
            />

            <div className="text-black dark:text-white">
              <strong className="font-semibold"> Option 1 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="inline-flex items-start gap-3 p-4 focus-within:bg-yellow-200 hover:bg-yellow-200 dark:focus-within:bg-yellow-700 dark:hover:bg-yellow-700"
          >
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-white"
              id="Option2"
            />

            <div className="text-black dark:text-white">
              <strong className="font-semibold"> Option 2 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="inline-flex items-start gap-3 p-4 focus-within:bg-yellow-200 hover:bg-yellow-200 dark:focus-within:bg-yellow-700 dark:hover:bg-yellow-700"
          >
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-white"
              id="Option3"
            />

            <div className="text-black dark:text-white">
              <strong className="font-semibold"> Option 3 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  )
}
