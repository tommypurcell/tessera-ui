import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RangeInputsVariant5Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RangeInputsVariant5({
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
}: RangeInputsVariant5Props) {
  const defaultContent = (
    <>
      <label htmlFor="maxVolume">
            <span className="block text-sm font-medium text-gray-900">Max Volume</span>
      
            <input
              type="range"
              name="maxVolume"
              id="maxVolume"
              min="0"
              max="100"
              value="20"
              list="volumeTicks"
              className="mt-1 w-full"
            />
      
            <datalist
              id="volumeTicks"
              className="flex w-full flex-col justify-between [writing-mode:vertical-lr]"
            >
              <option value="0" label="0"></option>
              <option value="25" label="25"></option>
              <option value="50" label="50"></option>
              <option value="75" label="75"></option>
              <option value="100" label="100"></option>
            </datalist>
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
