import type { HTMLAttributes } from 'react'

export type CheckboxesVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CheckboxesVariant1Dark({ className, ...props }: CheckboxesVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <fieldset>
            <legend className="sr-only">Checkboxes</legend>
      
            <div className="flex flex-col items-start gap-3">
              <label htmlFor="Option1" className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  id="Option1"
                />
      
                <span className="font-medium text-gray-700 dark:text-gray-200"> Option 1 </span>
              </label>
      
              <label htmlFor="Option2" className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  id="Option2"
                />
      
                <span className="font-medium text-gray-700 dark:text-gray-200"> Option 2 </span>
              </label>
      
              <label htmlFor="Option3" className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  id="Option3"
                />
      
                <span className="font-medium text-gray-700 dark:text-gray-200"> Option 3 </span>
              </label>
            </div>
          </fieldset>
    </div>
  )
}
