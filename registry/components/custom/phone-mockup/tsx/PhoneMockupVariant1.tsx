import type { HTMLAttributes } from 'react'

export type PhoneMockupVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function PhoneMockupVariant1({ className, ...props }: PhoneMockupVariant1Props) {
  return (
    <div className={className} {...props}>
      <section className="scene" aria-label="Mobile product preview">
            <div className="halo" aria-hidden="true"></div>
            <div className="device">
              <div className="screen">
                <div className="wallpaper" aria-hidden="true"><i className="orb one"></i><i className="orb two"></i></div>
                <div className="status"><span>9:41</span><span className="icons">▮▮▮ ◒</span></div>
                <div className="island" aria-label="Front camera and sensor"><i className="lens"></i></div>
                <div className="card"><small>Daily focus</small><h1>Make room<br />for what matters.</h1><div className="card-row"><span>3 collaborators</span><div className="avatar-stack" aria-hidden="true"><i className="avatar"></i><i className="avatar"></i><i className="avatar"></i></div></div></div>
                <div className="home" aria-hidden="true"></div>
              </div>
            </div>
          </section>
    </div>
  )
}
