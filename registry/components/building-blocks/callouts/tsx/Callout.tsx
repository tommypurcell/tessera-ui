import type { HTMLAttributes, ReactNode } from 'react'

export type CalloutTone = 'note' | 'tip' | 'warning'

export type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  tone?: CalloutTone
  title?: string
  children: ReactNode
}

const toneStyles: Record<CalloutTone, { box: string; icon: string; title: string; body: string }> = {
  note: {
    box: 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-900 dark:text-blue-300',
    body: 'text-blue-900 dark:text-blue-200',
  },
  tip: {
    box: 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40',
    icon: 'text-emerald-600 dark:text-emerald-400',
    title: 'text-emerald-900 dark:text-emerald-300',
    body: 'text-emerald-900 dark:text-emerald-200',
  },
  warning: {
    box: 'border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40',
    icon: 'text-amber-600 dark:text-amber-400',
    title: 'text-amber-900 dark:text-amber-300',
    body: 'text-amber-900 dark:text-amber-200',
  },
}

const toneIconPaths: Record<CalloutTone, string> = {
  note: 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z',
  tip: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  warning:
    'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
}

/**
 * Icon-led tinted callout. Pass tone ("note" | "tip" | "warning"), an optional title, and body children.
 */
export function Callout({ tone = 'note', title, children, className, ...props }: CalloutProps) {
  const styles = toneStyles[tone]

  return (
    <div className={`flex items-start gap-2.5 rounded-xl border p-4 ${styles.box} ${className ?? ''}`} {...props}>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`mt-0.5 size-4 shrink-0 ${styles.icon}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={toneIconPaths[tone]} />
      </svg>
      <p className={`text-sm leading-6 ${styles.body}`}>
        {title && <span className={`font-semibold ${styles.title}`}>{title} </span>}
        {children}
      </p>
    </div>
  )
}
