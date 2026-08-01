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
      
            <div className="flow-root">
              <div className="-my-3 flex flex-col items-start divide-y divide-gray-200 dark:divide-gray-700">
                <label htmlFor="Option1" className="inline-flex items-start gap-3 py-3">
                  <input
                    type="checkbox"
                    className="my-0.5 size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                    id="Option1"
                  />
      
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-200"> Option 1 </span>
      
                    <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
                    </p>
                  </div>
                </label>
      
                <label htmlFor="Option2" className="inline-flex items-start gap-3 py-3">
                  <input
                    type="checkbox"
                    className="my-0.5 size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                    id="Option2"
                  />
      
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-200"> Option 2 </span>
      
                    <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
                    </p>
                  </div>
                </label>
      
                <label htmlFor="Option3" className="inline-flex items-start gap-3 py-3">
                  <input
                    type="checkbox"
                    className="my-0.5 size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                    id="Option3"
                  />
      
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-200"> Option 3 </span>
      
                    <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>
    </div>
  )
}
