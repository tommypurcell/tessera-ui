import type { HTMLAttributes } from 'react'

export type AgentWorkspaceWorkflowProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AgentWorkspaceWorkflow({
  className,
  ...props
}: AgentWorkspaceWorkflowProps) {
  return (
    <div className={className} {...props}>
      <section className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Agent workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A stricter workflow makes better pages easier to repeat.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The path is simple: search the registry, choose known sections, and ship a page that
              still feels deliberate because the system already carries hierarchy and spacing.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10">
              <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-teal-400/10 text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/20">
                01
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">Search by intent</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The agent starts from section metadata and chooses patterns by purpose, not by
                trying to infer structure from screenshots.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10">
              <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-teal-400/10 text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/20">
                02
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">Compose saved sections</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Every visible block comes from a Tessera component, which keeps the page coherent
                and prevents the usual drift into ad hoc markup.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/10">
              <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-teal-400/10 text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/20">
                03
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">Refine inside the system</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                If a page needs a stronger section, the fix is to save a better component back into
                the library and reuse it from there.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
