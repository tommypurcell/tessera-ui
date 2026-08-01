import type { HTMLAttributes } from 'react'

export type AgentWorkspaceTrustStripProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AgentWorkspaceTrustStrip({
  className,
  ...props
}: AgentWorkspaceTrustStripProps) {
  return (
    <div className={className} {...props}>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-center">
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                Trust signals
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Stronger pages come from stronger constraints.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Tessera gives agents a smaller, clearer search space: usable sections, consistent
                Tailwind sources, and metadata that explains when each pattern belongs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">Selection model</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Intent-first
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Agents choose sections by job to be done, not by visual guesswork.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">Source format</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Tailwind TSX
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  The implementation is copy-and-own, readable, and simple to adapt.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-500">Outcome</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Less drift
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Reuse keeps hierarchy, spacing, and page rhythm from fragmenting.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
