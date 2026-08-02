import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SelectsVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SelectsVariant2({
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
}: SelectsVariant2Props) {
  const defaultContent = (
    <>
      <label htmlFor="Headline" className="text-black">
        <span className="text-sm font-semibold"> Headliner </span>

        <select
          name="Headline"
          id="Headline"
          className="mt-0.5 w-full border-2 border-black bg-white placeholder-black shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm"
        >
          <option value="">Please select</option>

          <optgroup label="A">
            <option value="AK">Albert King</option>
          </optgroup>

          <optgroup label="B">
            <option value="BBK">B.B King</option>
            <option value="BG">Buddy Guy</option>
          </optgroup>

          <optgroup label="E">
            <option value="EC">Eric Clapton</option>
          </optgroup>

          <optgroup label="J">
            <option value="JM">John Mayer</option>
            <option value="JH">Jimi Hendrix</option>
          </optgroup>

          <optgroup label="S">
            <option value="SRV">Stevie Ray Vaughn</option>
          </optgroup>
        </select>
      </label>
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
