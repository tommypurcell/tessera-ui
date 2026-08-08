import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SankeyFlowDiagramVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SankeyFlowDiagramVariant1({
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
}: SankeyFlowDiagramVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">Signup funnel by channel</p>
      <p className="mt-0.5 text-xs text-gray-500">Last 30 days, by traffic source</p>

      <div className="relative mt-4">
        <svg viewBox="0 0 560 260" className="w-full">
          <path d="M44.0,20.0 C157.0,20.0 157.0,20.0 270.0,20.0 L270.0,114.5 C157.0,114.5 157.0,114.5 44.0,114.5 Z" fill="rgba(59,130,246,0.18)" />
          <path d="M44.0,114.5 C157.0,114.5 157.0,177.0 270.0,177.0 L270.0,208.5 C157.0,208.5 157.0,146.0 44.0,146.0 Z" fill="rgba(59,130,246,0.18)" />
          <path d="M44.0,156.0 C157.0,156.0 157.0,114.5 270.0,114.5 L270.0,167.0 C157.0,167.0 157.0,208.5 44.0,208.5 Z" fill="rgba(139,92,246,0.18)" />
          <path d="M44.0,208.5 C157.0,208.5 157.0,208.5 270.0,208.5 L270.0,240.0 C157.0,240.0 157.0,240.0 44.0,240.0 Z" fill="rgba(139,92,246,0.18)" />
          <path d="M284.0,20.0 C397.0,20.0 397.0,20.0 510.0,20.0 L510.0,104.0 C397.0,104.0 397.0,108.2 284.0,108.2 Z" fill="rgba(148,163,184,0.25)" />
          <path d="M284.0,108.2 C397.0,108.2 397.0,114.0 510.0,114.0 L510.0,170.0 C397.0,170.0 397.0,167.0 284.0,167.0 Z" fill="rgba(148,163,184,0.25)" />
          <path d="M284.0,177.0 C397.0,177.0 397.0,180.0 510.0,180.0 L510.0,240.0 C397.0,240.0 397.0,240.0 284.0,240.0 Z" fill="rgba(203,213,225,0.35)" />
          <rect x="30" y="20.0" width="14" height="126.0" rx="2" fill="#3b82f6" />
          <rect x="30" y="156.0" width="14" height="84.0" rx="2" fill="#8b5cf6" />
          <rect x="270" y="20.0" width="14" height="147.0" rx="2" fill="#94a3b8" />
          <rect x="270" y="177.0" width="14" height="63.0" rx="2" fill="#cbd5e1" />
          <rect x="510" y="20.0" width="14" height="84.0" rx="2" fill="#10b981" />
          <rect x="510" y="114.0" width="14" height="56.0" rx="2" fill="#f59e0b" />
          <rect x="510" y="180.0" width="14" height="60.0" rx="2" fill="#ef4444" />
        </svg>
        <div className="absolute flex whitespace-nowrap items-start text-left flex-col" style={{left: '5.36%', top: '31.92%', width: '16.07%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Organic</span><span className="text-[11px]" style={{color: '#6b7280'}}>60</span></div>
        <div className="absolute flex whitespace-nowrap items-start text-left flex-col" style={{left: '5.36%', top: '76.15%', width: '16.07%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Paid ads</span><span className="text-[11px]" style={{color: '#6b7280'}}>40</span></div>
        <div className="absolute flex whitespace-nowrap items-center text-center flex-col" style={{left: '39.29%', top: '35.96%', width: '20.36%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Signed up</span><span className="text-[11px]" style={{color: '#6b7280'}}>70</span></div>
        <div className="absolute flex whitespace-nowrap items-center text-center flex-col" style={{left: '39.29%', top: '80.19%', width: '20.36%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Bounced</span><span className="text-[11px]" style={{color: '#6b7280'}}>30</span></div>
        <div className="absolute flex whitespace-nowrap items-end text-right flex-col" style={{left: '75.00%', top: '23.85%', width: '17.86%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Paying</span><span className="text-[11px]" style={{color: '#6b7280'}}>42</span></div>
        <div className="absolute flex whitespace-nowrap items-end text-right flex-col" style={{left: '75.00%', top: '54.62%', width: '17.86%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Trial</span><span className="text-[11px]" style={{color: '#6b7280'}}>28</span></div>
        <div className="absolute flex whitespace-nowrap items-end text-right flex-col" style={{left: '75.00%', top: '80.77%', width: '17.86%', transform: 'translateY(-50%)'}}><span className="text-xs font-medium" style={{color: '#374151'}}>Lost</span><span className="text-[11px]" style={{color: '#6b7280'}}>30</span></div>
      </div>
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
