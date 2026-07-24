import type { HTMLAttributes } from 'react'

export type CardsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CardsVariant4Dark({ className, ...props }: CardsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <article className="border-2 border-black bg-white text-black shadow-[4px_4px_0_0,8px_8px_0_0] shadow-black dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-white">
        <div className="bg-yellow-200 p-3 dark:bg-yellow-700">
          <div className="flex items-center justify-between">
            <strong className="text-xs/none font-bold uppercase">System Message</strong>

            <div className="flex gap-1">
              <div className="size-3 border-2 border-black bg-white dark:border-white dark:bg-gray-900"></div>
              <div className="size-3 border-2 border-black bg-white dark:border-white dark:bg-gray-900"></div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black p-4 sm:p-6 dark:border-white">
          <h3 className="text-lg font-semibold">Retro Window</h3>

          <p className="mt-2 text-sm text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, sit quod quos
            quibusdam quam ducimus dolore necessitatibus delectus perspiciatis.
          </p>
        </div>
      </article>
    </div>
  )
}
