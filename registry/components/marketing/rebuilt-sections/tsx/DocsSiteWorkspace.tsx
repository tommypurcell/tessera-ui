'use client'

import { Fragment, useMemo, useState, type HTMLAttributes, type ReactNode } from 'react'
import { Callout, type CalloutTone } from '../../../building-blocks/callouts/tsx/Callout'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DocsSiteWorkspaceProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g)
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <code key={index} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            {part.slice(1, -1)}
          </code>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  )
}

type DocPage =
  | 'introduction'
  | 'installation'
  | 'configuration'
  | 'components'
  | 'theming'
  | 'cli'
  | 'api-reference'
  | 'faq'

const navGroups: Array<{
  label: string
  icon: 'rocket' | 'book' | 'code'
  pages: Array<{ id: DocPage; label: string }>
}> = [
  {
    label: 'Getting started',
    icon: 'rocket',
    pages: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'configuration', label: 'Configuration' },
    ],
  },
  {
    label: 'Guides',
    icon: 'book',
    pages: [
      { id: 'components', label: 'Using components' },
      { id: 'theming', label: 'Theming' },
      { id: 'cli', label: 'CLI reference' },
    ],
  },
  {
    label: 'Reference',
    icon: 'code',
    pages: [
      { id: 'api-reference', label: 'API reference' },
      { id: 'faq', label: 'FAQ' },
    ],
  },
]

function NavGroupIcon({ icon }: { icon: 'rocket' | 'book' | 'code' }) {
  if (icon === 'rocket') {
    return (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.72m5.96 5.65a14.98 14.98 0 01-5.96-5.65m0 0a14.98 14.98 0 00-5.85 2.58M9.63 8.72L5.7 4.79m4.83 15.16A6 6 0 015.7 12.87v4.79" />
      </svg>
    )
  }
  if (icon === 'book') {
    return (
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  }
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  )
}

type DocSection = {
  id: string
  heading: string
  body: string[]
  command?: { prompt: string; output?: string[] }
  callout?: { tone: CalloutTone; title: string; body: string }
  steps?: Array<{ title: string; body: string }>
  table?: { columns: string[]; rows: string[][] }
}

const pageContent: Record<
  DocPage,
  {
    eyebrow: string
    title: string
    summary: string
    sections: DocSection[]
  }
> = {
  introduction: {
    eyebrow: 'Getting started',
    title: 'Introduction',
    summary: 'A searchable component registry with structured metadata for humans and coding agents.',
    sections: [
      {
        id: 'what-you-get',
        heading: 'What you get',
        body: [
          'Every component ships as plain HTML and Tailwind classes, with a matching `.tsx` file you copy directly into your project. There is no runtime package to install and no dependency to keep in sync.',
        ],
      },
      {
        id: 'structured-metadata',
        heading: 'Structured metadata',
        body: [
          'Each component also carries structured metadata — when to use it, when to avoid it, accessibility notes, and related components — so an agent reading the registry can make the same decisions a designer would.',
        ],
        callout: {
          tone: 'note',
          title: 'Built for agents and humans.',
          body: 'The same registry.json that documents a component for a person also gives a coding agent enough context to use it correctly on the first try.',
        },
      },
      {
        id: 'quickstart',
        heading: 'Quickstart',
        body: ['Most people are copying their first component in under a minute.'],
        steps: [
          { title: 'Install the CLI', body: 'Run it once with your package manager — nothing to configure first.' },
          { title: 'Find a component', body: 'Browse by category or search by name, then open the variant you want.' },
          { title: 'Copy it in', body: 'Add it with the CLI, or copy the HTML or TSX straight from the code panel.' },
        ],
      },
    ],
  },
  installation: {
    eyebrow: 'Getting started',
    title: 'Installation',
    summary: 'Add the CLI once, then pull individual components as you need them.',
    sections: [
      {
        id: 'install-the-cli',
        heading: 'Install the CLI',
        body: [
          'Install the CLI globally or run it directly with your package manager. It fetches a component’s HTML and TSX source and drops both files into your project unmodified.',
        ],
        command: {
          prompt: 'pnpm dlx tessera-ui add badges',
          output: ['Fetching application/badges...', 'Added 5 variants to src/components/badges/', 'Done in 0.6s'],
        },
      },
      {
        id: 'no-lockfile-entry',
        heading: 'No lockfile entry',
        body: [
          'Because nothing is bundled or published as a runtime dependency, there is no version to upgrade later — you own the code the moment it lands in your repo.',
        ],
        callout: {
          tone: 'tip',
          title: 'No lockfile entry.',
          body: 'Components are copied, not installed, so they never show up in your dependency tree or need a major-version migration.',
        },
      },
      {
        id: 'verify-the-install',
        heading: 'Verify the install',
        body: ['Confirm the CLI can see your project before pulling in more components.'],
        command: {
          prompt: 'pnpm dlx tessera-ui list',
          output: ['6 categories, 148 components', 'application, marketing, building-blocks, templates, neobrutalism'],
        },
      },
    ],
  },
  configuration: {
    eyebrow: 'Getting started',
    title: 'Configuration',
    summary: 'Point the CLI at the right source folder and it takes care of the rest.',
    sections: [
      {
        id: 'project-detection',
        heading: 'Project detection',
        body: [
          'The CLI looks for a `src` directory and a `tailwind.config` or Tailwind v4 CSS entry point. If it finds both, it starts working immediately with no separate init command.',
        ],
      },
      {
        id: 'options',
        heading: 'Options',
        body: ['Every command accepts the same three flags.'],
        table: {
          columns: ['Flag', 'Default', 'Description'],
          rows: [
            ['--dir', 'src/components', 'Where copied components are written'],
            ['--category', 'all', 'Limit list or add to one category'],
            ['--dry-run', 'false', 'Print what would change without writing files'],
          ],
        },
        callout: {
          tone: 'note',
          title: 'No config file.',
          body: 'These are command flags, not a persisted config — pass --dir once per command if your components live somewhere other than src/components.',
        },
      },
    ],
  },
  components: {
    eyebrow: 'Guides',
    title: 'Using components',
    summary: 'Browse by category, then copy the variant that matches your layout.',
    sections: [
      {
        id: 'browse-by-category',
        heading: 'Browse by category',
        body: [
          'Components are grouped into Product UI, Marketing, Building Blocks, Templates, and Neobrutalism. Each collection page lists every variant with a live preview, a dark-mode toggle, and a code view.',
        ],
      },
      {
        id: 'copy-a-variant',
        heading: 'Copy a variant',
        body: [
          'Once you find a variant, use the CLI to pull it in, or copy the HTML or TSX directly from the code panel. Both are always kept in sync with the live preview.',
        ],
        callout: {
          tone: 'note',
          title: 'Variants, not options.',
          body: 'Instead of one component with a dozen props, each visual style is its own variant — so the code you copy is exactly what you saw in the preview.',
        },
      },
      {
        id: 'dark-mode-toggle',
        heading: 'Dark mode toggle',
        body: [
          'Every preview has a dark-mode toggle in its top-right corner. If a variant has a matching dark file, the toggle swaps between them instantly so you can check both before copying.',
        ],
      },
    ],
  },
  theming: {
    eyebrow: 'Guides',
    title: 'Theming',
    summary: 'Every component is plain Tailwind utility classes, so theming is just editing class names.',
    sections: [
      {
        id: 'no-token-layer',
        heading: 'No token layer',
        body: [
          'There is no design-token layer to configure before a component looks right. Colors, spacing, and radii are written directly as Tailwind classes, which means find-and-replace across a copied component is often all a rebrand needs.',
        ],
      },
      {
        id: 'dark-mode',
        heading: 'Dark mode',
        body: [
          'Dark mode uses a single dark: variant convention throughout the registry, so toggling a project into dark mode means wiring up the same class your Tailwind config already understands.',
        ],
        callout: {
          tone: 'warning',
          title: 'One place to change.',
          body: 'If a color needs to change, it changes in the component file you already have open — not in a separate theme object three files away.',
        },
      },
      {
        id: 'brand-colors',
        heading: 'Common brand colors',
        body: ['Swap the gray/slate scale first — most rebrands only need these three colors changed.'],
        table: {
          columns: ['Utility', 'Default', 'Typical replacement'],
          rows: [
            ['bg-slate-950', '#020617', 'Your primary brand color'],
            ['text-slate-600', '#475569', 'A neutral body-text gray'],
            ['border-slate-200', '#e2e8f0', 'A soft border matching your palette'],
          ],
        },
      },
    ],
  },
  cli: {
    eyebrow: 'Guides',
    title: 'CLI reference',
    summary: 'A small surface: list, add, and diff.',
    sections: [
      {
        id: 'commands',
        heading: 'Commands',
        body: [
          'The CLI has three commands. list shows every component and category. add copies a component’s HTML and TSX into your project. diff compares a component already in your project against the current registry version, in case an update landed upstream.',
        ],
        command: {
          prompt: 'pnpm dlx tessera-ui list --category marketing',
          output: ['22 components in marketing', 'buttons, cards, ctas, pricing, product-cards, ...'],
        },
      },
      {
        id: 'no-setup-step',
        heading: 'No setup step',
        body: [
          'There is no init step and no config file — the CLI works the moment it is run inside a project with a src directory.',
        ],
        callout: {
          tone: 'tip',
          title: 'Nothing to configure.',
          body: 'There is no init step and no config file — the CLI works the moment it is run inside a project with a src directory.',
        },
      },
      {
        id: 'exit-codes',
        heading: 'Exit codes',
        body: ['Scripts and CI can check the exit code directly instead of parsing output.'],
        table: {
          columns: ['Code', 'Meaning'],
          rows: [
            ['0', 'Command completed with no changes needed'],
            ['1', 'Command failed — bad flag or component not found'],
            ['2', 'Partial success — some components copied, some skipped'],
          ],
        },
      },
    ],
  },
  'api-reference': {
    eyebrow: 'Reference',
    title: 'API reference',
    summary: 'Every registry.json field, in one place.',
    sections: [
      {
        id: 'registry-fields',
        heading: 'registry.json fields',
        body: [
          'Each component ships one `registry.json` describing it. The fields below are the ones an agent or a script is most likely to read.',
        ],
        table: {
          columns: ['Field', 'Type', 'Description'],
          rows: [
            ['name', 'string', 'Unique id, e.g. application-badges'],
            ['useWhen', 'string[]', 'Situations this component fits'],
            ['avoidWhen', 'string[]', 'Situations to reach for something else instead'],
            ['variants', 'Variant[]', 'Each visual style, with its own source paths'],
          ],
        },
      },
      {
        id: 'variant-shape',
        heading: 'Variant shape',
        body: ['Every entry in variants points at the exact HTML and TSX files that back it.'],
        command: {
          prompt: 'cat registry/components/application/badges/registry.json',
          output: ['"id": "badges-1"', '"appearance": "light"', '"source": { "html": "...", "tsx": "..." }'],
        },
      },
    ],
  },
  faq: {
    eyebrow: 'Reference',
    title: 'FAQ',
    summary: 'Short answers to the questions that come up most.',
    sections: [
      {
        id: 'framework-support',
        heading: 'Does this work outside React?',
        body: [
          'Yes. Every component has a plain HTML and Tailwind source file alongside its TSX file, so it works anywhere Tailwind runs — not just in a React or Next.js project.',
        ],
      },
      {
        id: 'updates',
        heading: 'What happens when a component updates upstream?',
        body: [
          'Nothing changes in your project automatically — components are copied, not linked. Run the CLI’s diff command against a component you already copied to see what changed upstream before deciding whether to pull it in.',
        ],
        callout: {
          tone: 'note',
          title: 'You are always on the version you copied.',
          body: 'That is the tradeoff for owning the code outright: no silent updates, but also no surprise breaking changes.',
        },
      },
      {
        id: 'licensing',
        heading: 'Can I use this in a commercial project?',
        body: ['Yes — the registry and every component in it are MIT licensed.'],
      },
    ],
  },
}

function TerminalBlock({ prompt, output }: { prompt: string; output?: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-500" />
        <span className="size-2.5 rounded-full bg-amber-500" />
        <span className="size-2.5 rounded-full bg-emerald-500" />
        <span className="ml-2 font-mono text-xs text-slate-400">terminal</span>
      </div>
      <div className="space-y-1.5 p-4 font-mono text-sm">
        <p className="flex gap-2 text-slate-100">
          <span className="select-none text-emerald-400">$</span>
          <span>{prompt}</span>
        </p>
        {output?.map((line) => (
          <p key={line} className="pl-5 text-slate-400">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export function DocsSiteWorkspace({
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
}: DocsSiteWorkspaceProps) {
  const [activePage, setActivePage] = useState<DocPage>('introduction')
  const [activeSection, setActiveSection] = useState<string | null>(pageContent.introduction.sections[0]?.id ?? null)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isOutlineOpen, setIsOutlineOpen] = useState(false)
  const allPages = useMemo(() => navGroups.flatMap((group) => group.pages), [])
  const active = pageContent[activePage]

  function goToPage(pageId: DocPage) {
    setActivePage(pageId)
    setActiveSection(pageContent[pageId].sections[0]?.id ?? null)
    setIsNavOpen(false)
  }

  function scrollToSection(sectionId: string) {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOutlineOpen(false)
  }

  function renderNavList() {
    return (
      <nav aria-label="Documentation navigation" className="space-y-6">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="flex items-center gap-1.5 px-3 text-sm font-semibold text-slate-950 dark:text-white">
              <NavGroupIcon icon={group.icon} />
              {group.label}
            </p>
            <ul className="mt-1 space-y-0.5 border-l border-slate-200 dark:border-slate-800">
              {group.pages.map((page) => (
                <li key={page.id}>
                  <button
                    type="button"
                    onClick={() => goToPage(page.id)}
                    aria-current={activePage === page.id ? 'page' : undefined}
                    className={`-ml-px block cursor-pointer border-l-2 px-3 py-1 text-left text-sm transition ${
                      activePage === page.id
                        ? 'border-emerald-600 font-medium text-emerald-700 dark:border-emerald-500 dark:text-emerald-400'
                        : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-950 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-white'
                    }`}
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    )
  }

  function renderOutlineList() {
    return (
      <ul className="space-y-1.5">
        {active.sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`flex w-full cursor-pointer items-center gap-2 px-3 text-left text-sm transition ${
                  isActive ? 'font-medium text-emerald-700 dark:text-emerald-400' : 'text-slate-500 hover:text-slate-950 dark:text-slate-500 dark:hover:text-white'
                }`}
              >
                <span className={`size-1.5 shrink-0 rounded-full ${isActive ? 'bg-emerald-600 dark:bg-emerald-400' : 'bg-transparent'}`} />
                {section.heading}
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  const defaultContent = (
    <>
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg bg-slate-950 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">D</div>
            <span className="text-sm font-semibold text-slate-950 dark:text-white">Docs</span>
          </div>
          <nav aria-label="Primary" className="hidden items-center gap-1 text-sm font-medium text-slate-600 sm:flex dark:text-slate-400">
            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-950 dark:bg-slate-800 dark:text-white">Docs</span>
            <span className="px-3 py-1.5">Components</span>
            <span className="px-3 py-1.5">Blog</span>
          </nav>
          <div className="ml-auto hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-500 sm:flex dark:border-slate-800 dark:text-slate-400">
            <span>Search docs</span>
            <span className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-xs dark:border-slate-700 dark:bg-slate-800">/</span>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsNavOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
              Menu
            </button>
            <div className="relative ml-auto">
              <button
                type="button"
                onClick={() => setIsOutlineOpen((open) => !open)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z" />
                </svg>
                On this page
              </button>
              {isOutlineOpen && (
                <div className="absolute top-full right-0 z-20 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  {renderOutlineList()}
                </div>
              )}
            </div>
          </div>

          {isNavOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsNavOpen(false)}
                className="absolute inset-0 cursor-pointer bg-slate-950/40"
              />
              <div className="absolute inset-y-0 left-0 w-72 max-w-[85vw] overflow-y-auto bg-white p-4 shadow-xl dark:bg-slate-950">
                <button
                  type="button"
                  onClick={() => setIsNavOpen(false)}
                  aria-label="Close menu"
                  className="mb-4 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400"
                >
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
                {renderNavList()}
              </div>
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)_200px]">
            <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start">{renderNavList()}</aside>

            <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-4">
                <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
                  <span>{active.eyebrow}</span>
                  <span aria-hidden="true">/</span>
                  <span>{active.title}</span>
                </p>
                <button
                  type="button"
                  className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600"
                >
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  Copy page
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
              <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{active.title}</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">{active.summary}</p>

              <div className="mt-8 space-y-8">
                {active.sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-8">
                    <h2 className="font-serif text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{section.heading}</h2>
                    <div className="mt-3 space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-300">
                          <InlineText text={paragraph} />
                        </p>
                      ))}
                    </div>

                    {section.steps && (
                      <ol className="mt-4 max-w-2xl space-y-4">
                        {section.steps.map((step, index) => (
                          <li key={step.title} className="flex gap-3">
                            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-slate-950 text-xs font-semibold text-white dark:bg-white dark:text-slate-950">
                              {index + 1}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-slate-950 dark:text-white">{step.title}</p>
                              <p className="mt-0.5 text-sm leading-6 text-slate-600 dark:text-slate-400">{step.body}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    )}

                    {section.table && (
                      <div className="mt-4 max-w-2xl overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                              {section.table.columns.map((column) => (
                                <th key={column} className="px-4 py-2 font-semibold text-slate-700 dark:text-slate-300">
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex > 0 ? 'border-t border-slate-200 dark:border-slate-800' : ''}>
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className={
                                      cellIndex === 0
                                        ? 'px-4 py-2 font-mono text-xs text-slate-900 dark:text-slate-100'
                                        : 'px-4 py-2 text-slate-600 dark:text-slate-400'
                                    }
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.command && (
                      <div className="mt-4 max-w-2xl">
                        <TerminalBlock prompt={section.command.prompt} output={section.command.output} />
                      </div>
                    )}

                    {section.callout && (
                      <Callout tone={section.callout.tone} title={section.callout.title} className="mt-4 max-w-2xl">
                        {section.callout.body}
                      </Callout>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
                {(() => {
                  const index = allPages.findIndex((page) => page.id === activePage)
                  const previous = allPages[index - 1]
                  const next = allPages[index + 1]
                  return (
                    <>
                      {previous ? (
                        <button
                          type="button"
                          onClick={() => goToPage(previous.id)}
                          className="cursor-pointer text-left text-sm text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                        >
                          <span className="block text-xs text-slate-400 dark:text-slate-500">Previous</span>
                          <span className="font-medium">{previous.label}</span>
                        </button>
                      ) : (
                        <span />
                      )}
                      {next ? (
                        <button
                          type="button"
                          onClick={() => goToPage(next.id)}
                          className="cursor-pointer text-right text-sm text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                        >
                          <span className="block text-xs text-slate-400 dark:text-slate-500">Next</span>
                          <span className="font-medium">{next.label}</span>
                        </button>
                      ) : (
                        <span />
                      )}
                    </>
                  )
                })()}
              </div>
            </div>

            <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start">
              <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">On this page</p>
              <div className="mt-2">{renderOutlineList()}</div>
            </aside>
          </div>
        </div>
      </section>
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
