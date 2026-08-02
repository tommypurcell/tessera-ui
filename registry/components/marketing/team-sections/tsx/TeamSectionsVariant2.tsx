import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TeamSectionsVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TeamSectionsVariant2({
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
}: TeamSectionsVariant2Props) {
  const defaultContent = (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-video rounded-lg object-cover"
            />

            <div className="mt-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 id="TeamMember1Name" className="text-lg/tight font-semibold text-gray-900">
                    Eric Johnson
                  </h3>

                  <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
                </div>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0072b1] transition-opacity hover:opacity-90"
                  aria-labelledby="TeamMember1Name LinkedInLabel1"
                >
                  <span id="LinkedInLabel1" className="sr-only">
                    LinkedIn
                  </span>

                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>

              <p className="mt-2 text-pretty text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat facere?
                Iste nostrum odio magnam?
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-video rounded-lg object-cover"
            />

            <div className="mt-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 id="TeamMember2Name" className="text-lg/tight font-semibold text-gray-900">
                    Eric Johnson
                  </h3>

                  <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
                </div>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0072b1] transition-opacity hover:opacity-90"
                  aria-labelledby="TeamMember2Name LinkedInLabel2"
                >
                  <span id="LinkedInLabel2" className="sr-only">
                    LinkedIn
                  </span>

                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>

              <p className="mt-2 text-pretty text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat facere?
                Iste nostrum odio magnam?
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="aspect-video rounded-lg object-cover"
            />

            <div className="mt-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 id="TeamMember3Name" className="text-lg/tight font-semibold text-gray-900">
                    Eric Johnson
                  </h3>

                  <p className="mt-0.5 text-sm text-gray-700">Product Designer</p>
                </div>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0072b1] transition-opacity hover:opacity-90"
                  aria-labelledby="TeamMember3Name LinkedInLabel3"
                >
                  <span id="LinkedInLabel3" className="sr-only">
                    LinkedIn
                  </span>

                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-7"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>

              <p className="mt-2 text-pretty text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat facere?
                Iste nostrum odio magnam?
              </p>
            </div>
          </div>
        </div>
      </div>
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
