import type { HTMLAttributes } from 'react'

export type MarqueeVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function MarqueeVariant1({ className, ...props }: MarqueeVariant1Props) {
  return (
    <div className={className} {...props}>
      <section className="ribbon" aria-label="Product signals">
            <div className="track">
              <div className="items">
                <span className="item"><span className="dot"></span><strong>94% faster</strong> component discovery</span>
                <a className="item" href="#"><span className="dot"></span><strong>Zero guesswork</strong> installation notes</a>
                <span className="item"><span className="dot"></span><strong>Built for teams</strong> that ship weekly</span>
                <a className="item" href="#"><span className="dot"></span><strong>One registry</strong> for every surface</a>
              </div>
              <div className="items" aria-hidden="true">
                <span className="item"><span className="dot"></span><strong>94% faster</strong> component discovery</span>
                <span className="item"><span className="dot"></span><strong>Zero guesswork</strong> installation notes</span>
                <span className="item"><span className="dot"></span><strong>Built for teams</strong> that ship weekly</span>
                <span className="item"><span className="dot"></span><strong>One registry</strong> for every surface</span>
              </div>
            </div>
          </section>
    </div>
  )
}
