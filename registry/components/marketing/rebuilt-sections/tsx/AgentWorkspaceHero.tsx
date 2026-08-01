import type { HTMLAttributes } from 'react'

export type AgentWorkspaceHeroProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AgentWorkspaceHero({ className, ...props }: AgentWorkspaceHeroProps) {
  return (
    <div className={className} {...props}>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-300">
              <span className="size-2 rounded-full bg-teal-500" />
              Built by an agent with Tessera UI
            </span>

            <h1 className="mt-6 max-w-3xl text-6xl font-semibold tracking-tight text-slate-950 sm:text-7xl dark:text-white">
              The UI library agents don&apos;t have to guess with.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Agent Workspace shows what happens when the UI library is the source of truth: clear
              building blocks, predictable composition, and pages assembled from real components
              instead of one-off markup.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/components/marketing/"
                className="inline-flex items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Browse marketing components
              </a>

              <a
                href="/example-sites/"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-transparent dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
              >
                View example sites
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3 dark:border-slate-800">
              <div>
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-500">Source of truth</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Registry-first
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-500">Composition model</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Copy-and-own
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-500">Primary benefit</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  Predictable UI
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                      Agent workspace
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                      Component plan for a product landing page
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-900">
                    Valid
                  </span>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Selected sections</p>
                    <ul className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-center justify-between gap-4">
                        <span>Hero</span>
                        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-800">
                          rebuilt-section
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Trust strip</span>
                        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-800">
                          rebuilt-section
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Workflow</span>
                        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-800">
                          rebuilt-section
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Pricing</span>
                        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-800">
                          rebuilt-section
                        </span>
                      </li>
                      <li className="flex items-center justify-between gap-4">
                        <span>Closing CTA</span>
                        <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:ring-slate-800">
                          rebuilt-section
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                        Agent guardrail
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        No bespoke sections
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Every visible block comes from Tessera UI.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
                        Design outcome
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">
                        Better hierarchy
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Clearer sections, cleaner pacing, less noise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-500">
              Trusted by teams shipping fast
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              <span className="text-center text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-950 dark:text-slate-600 dark:hover:text-white">
                Northlane
              </span>
              <span className="text-center text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-950 dark:text-slate-600 dark:hover:text-white">
                Vaultform
              </span>
              <span className="text-center text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-950 dark:text-slate-600 dark:hover:text-white">
                Ridgeline
              </span>
              <span className="text-center text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-950 dark:text-slate-600 dark:hover:text-white">
                Circuiton
              </span>
              <span className="text-center text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-950 dark:text-slate-600 dark:hover:text-white">
                Fernwell
              </span>
              <span className="text-center text-lg font-bold tracking-tight text-slate-400 transition hover:text-slate-950 dark:text-slate-600 dark:hover:text-white">
                Basecove
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
