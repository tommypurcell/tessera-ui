import type { HTMLAttributes } from 'react'

export type PollsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function PollsVariant1({ className, ...props }: PollsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-prose">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Where should we go for lunch?
          </h2>

          <p className="mt-4 text-pretty text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe maiores exercitationem
            id soluta eaque harum eligendi distinctio sapiente esse ad! Sit expedita eos quam
            numquam ea, assumenda officiis minus ut!
          </p>
        </div>

        <form action="#" className="mt-6 space-y-4">
          <fieldset className="space-y-4">
            <legend className="sr-only">Select an option</legend>

            <div className="flex items-center gap-4">
              <label
                htmlFor="Option1"
                className="relative block flex-1 overflow-hidden rounded border border-gray-300 px-4 py-2 shadow-sm"
              >
                <div
                  className="absolute inset-y-0 left-0 rounded bg-gray-100"
                  style={{ width: '45%' }}
                ></div>

                <div className="relative flex items-center gap-4">
                  <input
                    type="radio"
                    id="Option1"
                    name="Poll1"
                    className="size-5 border-gray-300 shadow-sm"
                  />

                  <span className="font-medium text-gray-900"> Option 1 </span>
                </div>
              </label>

              <span className="text-gray-700">45%</span>
            </div>

            <div className="flex items-center gap-4">
              <label
                htmlFor="Option2"
                className="relative block flex-1 overflow-hidden rounded border border-gray-300 px-4 py-2 shadow-sm"
              >
                <div
                  className="absolute inset-y-0 left-0 rounded bg-gray-100"
                  style={{ width: '25%' }}
                ></div>

                <div className="relative flex items-center gap-4">
                  <input
                    type="radio"
                    id="Option2"
                    name="Poll1"
                    className="size-5 border-gray-300 shadow-sm"
                  />

                  <span className="font-medium text-gray-900"> Option 2 </span>
                </div>
              </label>

              <span className="text-gray-700">25%</span>
            </div>

            <div className="flex items-center gap-4">
              <label
                htmlFor="Option3"
                className="relative block flex-1 overflow-hidden rounded border border-gray-300 px-4 py-2 shadow-sm"
              >
                <div
                  className="absolute inset-y-0 left-0 rounded bg-gray-100"
                  style={{ width: '30%' }}
                ></div>

                <div className="relative flex items-center gap-4">
                  <input
                    type="radio"
                    id="Option3"
                    name="Poll1"
                    className="size-5 border-gray-300 shadow-sm"
                  />

                  <span className="font-medium text-gray-900"> Option 3 </span>
                </div>
              </label>

              <span className="text-gray-700">30%</span>
            </div>
          </fieldset>
        </form>

        <p className="mt-4 text-sm text-gray-700">
          Ends on <time dateTime="2025-10-31">October 31, 2025</time>
        </p>
      </div>
    </div>
  )
}
