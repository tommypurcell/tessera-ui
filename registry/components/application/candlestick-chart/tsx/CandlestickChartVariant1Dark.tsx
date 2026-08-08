import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CandlestickChartVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component with content slots and explicit application states.
 * Omitting the optional props preserves the original markup and visual design.
 */
export function CandlestickChartVariant1Dark({
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
}: CandlestickChartVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-2xl rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-sm font-semibold text-white">TSSR</p>
          <p className="text-xs text-gray-400">Tessera Inc. &middot; NASDAQ</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-white">$98.75</p>
          <p className="text-xs font-medium text-red-400">-1.3% (24d)</p>
        </div>
      </div>

      <svg viewBox="0 0 560 262" className="mt-4 w-full">
          <line x1="0" y1="0.0" x2="560" y2="0.0" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="66.7" x2="560" y2="66.7" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="133.3" x2="560" y2="133.3" stroke="#374151" strokeWidth="1" />
          <line x1="0" y1="200.0" x2="560" y2="200.0" stroke="#374151" strokeWidth="1" />
          <line x1="11.7" y1="118.2" x2="11.7" y2="159.2" stroke="#f87171" strokeWidth="1.5" />
          <rect x="5.2" y="132.8" width="12.8" height="2.3" fill="#f87171" />
          <line x1="35.0" y1="117.4" x2="35.0" y2="140.0" stroke="#34d399" strokeWidth="1.5" />
          <rect x="28.6" y="132.7" width="12.8" height="2.5" fill="#34d399" />
          <line x1="58.3" y1="99.0" x2="58.3" y2="135.1" stroke="#34d399" strokeWidth="1.5" />
          <rect x="51.9" y="119.7" width="12.8" height="13.0" fill="#34d399" />
          <line x1="81.7" y1="98.6" x2="81.7" y2="171.4" stroke="#f87171" strokeWidth="1.5" />
          <rect x="75.2" y="119.7" width="12.8" height="33.6" fill="#f87171" />
          <line x1="105.0" y1="84.7" x2="105.0" y2="170.4" stroke="#34d399" strokeWidth="1.5" />
          <rect x="98.6" y="109.8" width="12.8" height="43.5" fill="#34d399" />
          <line x1="128.3" y1="109.4" x2="128.3" y2="151.4" stroke="#f87171" strokeWidth="1.5" />
          <rect x="121.9" y="109.8" width="12.8" height="27.8" fill="#f87171" />
          <line x1="151.7" y1="131.4" x2="151.7" y2="163.5" stroke="#f87171" strokeWidth="1.5" />
          <rect x="145.2" y="137.7" width="12.8" height="25.0" fill="#f87171" />
          <line x1="175.0" y1="140.7" x2="175.0" y2="179.6" stroke="#f87171" strokeWidth="1.5" />
          <rect x="168.6" y="162.7" width="12.8" height="3.4" fill="#f87171" />
          <line x1="198.3" y1="147.0" x2="198.3" y2="178.0" stroke="#34d399" strokeWidth="1.5" />
          <rect x="191.9" y="164.3" width="12.8" height="1.8" fill="#34d399" />
          <line x1="221.7" y1="93.5" x2="221.7" y2="186.2" stroke="#34d399" strokeWidth="1.5" />
          <rect x="215.2" y="119.5" width="12.8" height="44.8" fill="#34d399" />
          <line x1="245.0" y1="113.5" x2="245.0" y2="141.2" stroke="#f87171" strokeWidth="1.5" />
          <rect x="238.6" y="119.5" width="12.8" height="14.2" fill="#f87171" />
          <line x1="268.3" y1="98.4" x2="268.3" y2="155.7" stroke="#34d399" strokeWidth="1.5" />
          <rect x="261.9" y="108.9" width="12.8" height="24.8" fill="#34d399" />
          <line x1="291.7" y1="45.4" x2="291.7" y2="108.9" stroke="#34d399" strokeWidth="1.5" />
          <rect x="285.2" y="67.5" width="12.8" height="41.4" fill="#34d399" />
          <line x1="315.0" y1="18.0" x2="315.0" y2="93.0" stroke="#34d399" strokeWidth="1.5" />
          <rect x="308.6" y="30.2" width="12.8" height="37.3" fill="#34d399" />
          <line x1="338.3" y1="13.8" x2="338.3" y2="85.7" stroke="#f87171" strokeWidth="1.5" />
          <rect x="331.9" y="30.2" width="12.8" height="35.2" fill="#f87171" />
          <line x1="361.7" y1="56.7" x2="361.7" y2="124.4" stroke="#f87171" strokeWidth="1.5" />
          <rect x="355.2" y="65.4" width="12.8" height="33.9" fill="#f87171" />
          <line x1="385.0" y1="92.9" x2="385.0" y2="133.2" stroke="#f87171" strokeWidth="1.5" />
          <rect x="378.6" y="99.3" width="12.8" height="31.3" fill="#f87171" />
          <line x1="408.3" y1="98.5" x2="408.3" y2="145.1" stroke="#34d399" strokeWidth="1.5" />
          <rect x="401.9" y="103.1" width="12.8" height="27.5" fill="#34d399" />
          <line x1="431.7" y1="84.0" x2="431.7" y2="131.5" stroke="#f87171" strokeWidth="1.5" />
          <rect x="425.2" y="103.1" width="12.8" height="25.0" fill="#f87171" />
          <line x1="455.0" y1="117.1" x2="455.0" y2="165.0" stroke="#f87171" strokeWidth="1.5" />
          <rect x="448.6" y="128.1" width="12.8" height="31.4" fill="#f87171" />
          <line x1="478.3" y1="96.0" x2="478.3" y2="167.4" stroke="#34d399" strokeWidth="1.5" />
          <rect x="471.9" y="117.0" width="12.8" height="42.5" fill="#34d399" />
          <line x1="501.7" y1="106.7" x2="501.7" y2="162.5" stroke="#f87171" strokeWidth="1.5" />
          <rect x="495.2" y="117.0" width="12.8" height="23.2" fill="#f87171" />
          <line x1="525.0" y1="114.4" x2="525.0" y2="178.6" stroke="#f87171" strokeWidth="1.5" />
          <rect x="518.6" y="140.2" width="12.8" height="32.8" fill="#f87171" />
          <line x1="548.3" y1="139.0" x2="548.3" y2="180.7" stroke="#34d399" strokeWidth="1.5" />
          <rect x="541.9" y="147.6" width="12.8" height="25.4" fill="#34d399" />
          <rect x="5.2" y="230.5" width="12.8" height="31.5" fill="#7f1d1d" />
          <rect x="28.6" y="228.4" width="12.8" height="33.6" fill="#065f46" />
          <rect x="51.9" y="237.6" width="12.8" height="24.4" fill="#065f46" />
          <rect x="75.2" y="249.1" width="12.8" height="12.9" fill="#7f1d1d" />
          <rect x="98.6" y="223.9" width="12.8" height="38.1" fill="#065f46" />
          <rect x="121.9" y="248.4" width="12.8" height="13.6" fill="#7f1d1d" />
          <rect x="145.2" y="230.5" width="12.8" height="31.5" fill="#7f1d1d" />
          <rect x="168.6" y="222.8" width="12.8" height="39.2" fill="#7f1d1d" />
          <rect x="191.9" y="238.7" width="12.8" height="23.3" fill="#065f46" />
          <rect x="215.2" y="219.8" width="12.8" height="42.2" fill="#065f46" />
          <rect x="238.6" y="247.9" width="12.8" height="14.1" fill="#7f1d1d" />
          <rect x="261.9" y="234.0" width="12.8" height="28.0" fill="#065f46" />
          <rect x="285.2" y="241.7" width="12.8" height="20.3" fill="#065f46" />
          <rect x="308.6" y="233.5" width="12.8" height="28.5" fill="#065f46" />
          <rect x="331.9" y="239.1" width="12.8" height="22.9" fill="#7f1d1d" />
          <rect x="355.2" y="217.6" width="12.8" height="44.4" fill="#7f1d1d" />
          <rect x="378.6" y="248.3" width="12.8" height="13.7" fill="#7f1d1d" />
          <rect x="401.9" y="231.3" width="12.8" height="30.7" fill="#065f46" />
          <rect x="425.2" y="222.6" width="12.8" height="39.4" fill="#7f1d1d" />
          <rect x="448.6" y="239.1" width="12.8" height="22.9" fill="#7f1d1d" />
          <rect x="471.9" y="212.0" width="12.8" height="50.0" fill="#065f46" />
          <rect x="495.2" y="222.7" width="12.8" height="39.3" fill="#7f1d1d" />
          <rect x="518.6" y="239.6" width="12.8" height="22.4" fill="#7f1d1d" />
          <rect x="541.9" y="247.8" width="12.8" height="14.2" fill="#065f46" />
      </svg>
    </div>
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
