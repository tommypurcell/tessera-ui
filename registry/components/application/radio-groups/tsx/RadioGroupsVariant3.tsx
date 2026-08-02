import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RadioGroupsVariant3Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RadioGroupsVariant3({
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
}: RadioGroupsVariant3Props) {
  const defaultContent = (
    <>
      <fieldset className="flex flex-wrap gap-3">
            <legend className="sr-only">Color</legend>
      
            <label
              htmlFor="ColorBlack"
              className="block size-8 rounded-full bg-black shadow-sm has-checked:ring-2 has-checked:ring-black has-checked:ring-offset-2"
            >
              <input
                type="radio"
                name="ColorOption"
                value="ColorBlack"
                id="ColorBlack"
                className="sr-only"
                checked
              />
      
              <span className="sr-only">Black</span>
            </label>
      
            <label
              htmlFor="ColorRed"
              className="block size-8 rounded-full bg-red-500 shadow-sm has-checked:ring-2 has-checked:ring-red-500 has-checked:ring-offset-2"
            >
              <input type="radio" name="ColorOption" value="ColorRed" id="ColorRed" className="sr-only" />
      
              <span className="sr-only">Red</span>
            </label>
      
            <label
              htmlFor="ColorBlue"
              className="block size-8 rounded-full bg-blue-500 shadow-sm has-checked:ring-2 has-checked:ring-blue-500 has-checked:ring-offset-2"
            >
              <input type="radio" name="ColorOption" value="ColorBlue" id="ColorBlue" className="sr-only" />
      
              <span className="sr-only">Blue</span>
            </label>
      
            <label
              htmlFor="ColorGold"
              className="block size-8 rounded-full bg-amber-500 shadow-sm has-checked:ring-2 has-checked:ring-amber-500 has-checked:ring-offset-2"
            >
              <input type="radio" name="ColorOption" value="ColorGold" id="ColorGold" className="sr-only" />
      
              <span className="sr-only">Gold</span>
            </label>
          </fieldset>
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
