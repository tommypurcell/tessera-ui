import type { ReactNode } from 'react'

export type AuthCardShellVariant1Props = {
  logo?: ReactNode
  title: string
  subtitle?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

/**
 * Copy-and-own Tailwind component. Centered auth layout shell: logo mark, heading,
 * a form slot for the actual sign-in/sign-up fields, and a footer slot for the
 * "switch flow" link (e.g. "Don't have an account? Sign up"). The shell owns
 * layout and chrome only — pair it with your own form fields as children.
 */
export function AuthCardShell({ logo, title, subtitle, children, footer, className }: AuthCardShellVariant1Props) {
  return (
    <div className={`w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className ?? ''}`}>
      <div className="flex flex-col items-center text-center">
        {logo ?? <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">T</span>}
        <h1 className="mt-4 text-lg font-semibold text-gray-900">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-gray-500">{subtitle}</p> : null}
      </div>

      <div className="mt-6">{children}</div>

      {footer ? <div className="mt-6 text-center text-sm text-gray-500">{footer}</div> : null}
    </div>
  )
}
