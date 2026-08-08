import type { ReactNode } from 'react'

export type AuthCardShellVariant1DarkProps = {
  logo?: ReactNode
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Centered auth layout shell: logo
 * mark, heading, a form slot for the actual sign-in/sign-up fields, and a footer
 * slot for the "switch flow" link.
 */
export function AuthCardShell({ logo, title, subtitle, children, footer, className }: AuthCardShellVariant1DarkProps) {
  return (
    <div className={`w-full rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-sm ${className ?? ''}`}>
      <div className="flex flex-col items-center text-center">
        {logo ?? <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-sm font-bold text-white">T</span>}
        <h1 className="mt-4 text-lg font-semibold text-gray-100">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-gray-400">{subtitle}</p> : null}
      </div>

      <div className="mt-6">{children}</div>

      {footer ? <div className="mt-6 text-center text-sm text-gray-400">{footer}</div> : null}
    </div>
  )
}
