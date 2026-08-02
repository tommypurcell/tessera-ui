import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CardsVariant4Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function CardsVariant4({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: CardsVariant4Props) {
  const defaultContent = (
    <>
      <article className="border-2 border-black bg-white text-black shadow-[4px_4px_0_0,8px_8px_0_0] shadow-black">
        <div className="bg-yellow-200 p-3">
          <div className="flex items-center justify-between">
            <strong className="text-xs/none font-bold uppercase">System Message</strong>

            <div className="flex gap-1">
              <div className="size-3 border-2 border-black bg-white"></div>
              <div className="size-3 border-2 border-black bg-white"></div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black p-4 sm:p-6">
          <h3 className="text-lg font-semibold">Retro Window</h3>

          <p className="mt-2 text-sm text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, sit quod quos
            quibusdam quam ducimus dolore necessitatibus delectus perspiciatis.
          </p>
        </div>
      </article>
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
