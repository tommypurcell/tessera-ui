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
          <label htmlFor="Option1" className="inline-flex items-start gap-3 text-black">
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black"
              id="Option1"
            />

            <div>
              <strong className="font-semibold"> Option 1 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>

          <label htmlFor="Option2" className="inline-flex items-start gap-3 text-black">
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black"
              id="Option2"
            />

            <div>
              <strong className="font-semibold"> Option 2 </strong>

              <p className="mt-0.5 text-sm text-pretty">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, distinctio.
              </p>
            </div>
          </label>

          <label htmlFor="Option3" className="inline-flex items-start gap-3 text-black">
            <input
              type="checkbox"
              className="size-6 border-2 border-black bg-white shadow-[2px_2px_0_0] shadow-black checked:bg-black focus:ring-2 focus:ring-black"
              id="Option3"
            />

            <div>
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
