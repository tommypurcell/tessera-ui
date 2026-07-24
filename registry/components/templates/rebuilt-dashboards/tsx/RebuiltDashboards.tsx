import type { HTMLAttributes, ReactNode } from 'react'
type Props = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')
export const DashboardTemplate = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'grid min-h-72 grid-cols-[9rem_1fr] overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950',
      className,
    )}
    {...props}
  >
    <nav
      aria-label="Primary"
      className="hidden border-r border-slate-200 p-3 sm:grid sm:content-start sm:gap-1 dark:border-slate-800"
    >
      <strong className="mb-3 px-2 text-sm">Tessera</strong>
      {['Overview', 'Projects', 'Settings'].map((item, index) => (
        <a
          href="#"
          key={item}
          className={cx(
            'rounded-md px-2 py-2 text-xs',
            index === 0
              ? 'bg-blue-50 font-semibold text-blue-700'
              : 'text-slate-500 hover:bg-slate-50',
          )}
        >
          {item}
        </a>
      ))}
    </nav>
    <main className="grid content-start gap-4 p-5">
      <div>
        <p className="text-xs text-slate-500">Overview</p>
        <h1 className="text-xl font-semibold tracking-tight">Good morning, Alex</h1>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Active projects</p>
          <strong className="text-xl">12</strong>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Usage</p>
          <strong className="text-xl">68%</strong>
        </div>
        <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-xs text-slate-500">Uptime</p>
          <strong className="text-xl">99.9%</strong>
        </div>
      </div>
    </main>
  </div>
)
export const DashboardShell = DashboardTemplate
export const SettingsLayout = ({ className, ...props }: Props) => (
  <div
    className={cx(
      'grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[10rem_1fr] dark:border-slate-800 dark:bg-slate-950',
      className,
    )}
    {...props}
  >
    <nav aria-label="Settings" className="grid content-start gap-1">
      <strong className="mb-2 text-sm">Settings</strong>
      {['Profile', 'Notifications', 'Billing'].map((item, index) => (
        <a
          href="#"
          key={item}
          className={cx(
            'rounded-md px-2 py-1.5 text-sm',
            index === 0 ? 'bg-slate-100 font-medium' : 'text-slate-500',
          )}
        >
          {item}
        </a>
      ))}
    </nav>
    <section>
      <h1 className="text-lg font-semibold">Profile</h1>
      <p className="mt-1 text-sm text-slate-500">Update the details your team sees.</p>
      <div className="mt-5 h-10 rounded-lg border border-slate-300" />
    </section>
  </div>
)
