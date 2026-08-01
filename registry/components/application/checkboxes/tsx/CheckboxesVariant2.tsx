import type { HTMLAttributes } from 'react'

export type CheckboxesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CheckboxesVariant2({ className, ...props }: CheckboxesVariant2Props) {
  return (
    <div className={className} {...props}>
      <fieldset>
            <legend className="sr-only">Checkboxes</legend>
      
            <div className="flex flex-col items-start gap-3">
              <label htmlFor="Option1" className="inline-flex items-start gap-3">
                <input
                  type="checkbox"
                  className="my-0.5 size-5 rounded border-gray-300 shadow-sm"
                  id="Option1"
                />
      
                <div>
                  <span className="font-medium text-gray-700"> Option 1 </span>
      
                  <p className="mt-0.5 text-sm text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
                  </p>
                </div>
              </label>
      
              <label htmlFor="Option2" className="inline-flex items-start gap-3">
                <input
                  type="checkbox"
                  className="my-0.5 size-5 rounded border-gray-300 shadow-sm"
                  id="Option2"
                />
      
                <div>
                  <span className="font-medium text-gray-700"> Option 2 </span>
      
                  <p className="mt-0.5 text-sm text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
                  </p>
                </div>
              </label>
      
              <label htmlFor="Option3" className="inline-flex items-start gap-3">
                <input
                  type="checkbox"
                  className="my-0.5 size-5 rounded border-gray-300 shadow-sm"
                  id="Option3"
                />
      
                <div>
                  <span className="font-medium text-gray-700"> Option 3 </span>
      
                  <p className="mt-0.5 text-sm text-gray-700">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
                  </p>
                </div>
              </label>
            </div>
          </fieldset>
    </div>
  )
}
