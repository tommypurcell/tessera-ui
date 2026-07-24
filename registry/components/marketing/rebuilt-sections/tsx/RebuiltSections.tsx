import type { HTMLAttributes, ReactNode } from 'react'
type Props = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ')
export const Navigation = ({ className, ...props }: Props) => (
  <header
    className={cx(
      'flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950',
      className,
    )}
    {...props}
  >
    <strong className="tracking-tight">Tessera</strong>
    <nav aria-label="Main" className="hidden gap-5 text-sm text-slate-600 sm:flex">
      <a href="#">Product</a>
      <a href="#">Resources</a>
      <a href="#">Company</a>
    </nav>
    <a href="#" className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
      Get started
    </a>
  </header>
)
export const AuthenticationLayout = ({ className, ...props }: Props) => (
  <main
    className={cx(
      'mx-auto grid max-w-sm gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950',
      className,
    )}
    {...props}
  >
    <div>
      <h1 className="text-xl font-semibold">Welcome back</h1>
      <p className="mt-1 text-sm text-slate-500">Sign in to continue to Tessera.</p>
    </div>
    <label className="grid gap-1 text-sm font-medium">
      Email
      <input type="email" className="h-10 rounded-lg border border-slate-300 px-3" />
    </label>
    <button type="button" className="h-10 rounded-lg bg-blue-600 text-sm font-semibold text-white">
      Continue
    </button>
  </main>
)
export const Pricing = ({ className, ...props }: Props) => (
  <section className={cx('grid gap-3 sm:grid-cols-3', className)} {...props}>
    {['Starter', 'Team', 'Scale'].map((plan, index) => (
      <article
        key={plan}
        className={cx(
          'rounded-2xl border p-5',
          index === 1 ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-slate-200 bg-white',
        )}
      >
        <h2 className="font-semibold">{plan}</h2>
        <p className="mt-3 text-2xl font-semibold">
          ${index === 0 ? '12' : index === 1 ? '32' : '80'}
          <span className="text-sm font-normal text-slate-500"> / month</span>
        </p>
        <button
          type="button"
          className={cx(
            'mt-5 h-10 w-full rounded-lg text-sm font-semibold',
            index === 1 ? 'bg-blue-600 text-white' : 'border border-slate-300',
          )}
        >
          Choose {plan}
        </button>
      </article>
    ))}
  </section>
)
