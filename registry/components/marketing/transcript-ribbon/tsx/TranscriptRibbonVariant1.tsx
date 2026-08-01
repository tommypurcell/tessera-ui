import type { HTMLAttributes } from 'react'

export type TranscriptRibbonVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TranscriptRibbonVariant1({ className, ...props }: TranscriptRibbonVariant1Props) {
  return (
    <div className={className} {...props}>
      <section className="stage" aria-labelledby="transcript-title">
            <p className="eyebrow">Voice, in motion</p>
            <h1 id="transcript-title">Let the idea move first.</h1>
            <p className="ghost" aria-hidden="true">Start with a thought. Keep the detail. Let the next line find its shape.</p>
            <div className="ribbon-wrap" aria-label="A moving transcript">
              <div className="ribbon">
                <div className="track">
                  <div className="words"><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span></div>
                  <div className="words" aria-hidden="true"><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span></div>
                </div>
              </div>
            </div>
            <div className="recorder" aria-label="Voice activity" role="img"><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i></div>
          </section>
    </div>
  )
}
