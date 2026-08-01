import type { HTMLAttributes } from 'react'

export type AgentWorkspacePricingProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AgentWorkspacePricing({ className, ...props }: AgentWorkspacePricingProps) {
  return (
    <div className={className} {...props}>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Clear plans for teams building with agents
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Enough structure for reliable output, without turning the library into a closed
              system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-lg font-semibold text-slate-950 dark:text-white">Starter</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                For solo builders testing a registry-first workflow.
              </p>
              <p className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white">$19</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">per month</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>3 active projects</li>
                <li>Registry browsing</li>
                <li>Copy-and-own TSX sources</li>
                <li>Email support</li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600"
              >
                Start with Starter
              </a>
            </article>

            <article className="rounded-3xl border border-slate-950 bg-slate-950 p-8 text-white shadow-lg shadow-slate-950/10 dark:border-white dark:bg-white dark:text-slate-950 dark:shadow-none">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold">Team</p>
                <span className="rounded-full bg-teal-400/15 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/30 dark:bg-teal-500/15 dark:text-teal-700 dark:ring-teal-500/30">
                  Recommended
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300 dark:text-slate-600">
                For small teams that need shared patterns and predictable delivery.
              </p>
              <p className="mt-6 text-5xl font-semibold tracking-tight">$59</p>
              <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">per month</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-200 dark:text-slate-700">
                <li>Unlimited projects</li>
                <li>Shared section library</li>
                <li>Registry validation workflows</li>
                <li>Priority support</li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
              >
                Start with Team
              </a>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-lg font-semibold text-slate-950 dark:text-white">Enterprise</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                For organizations standardizing agent-built marketing and product UI.
              </p>
              <p className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white">Custom</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">annual contract</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>Custom component packs</li>
                <li>Governed design system rollout</li>
                <li>Dedicated implementation support</li>
                <li>Migration planning</li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-600"
              >
                Talk to sales
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
