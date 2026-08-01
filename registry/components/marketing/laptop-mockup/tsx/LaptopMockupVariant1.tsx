import type { HTMLAttributes } from 'react'

export type LaptopMockupVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LaptopMockupVariant1({ className, ...props }: LaptopMockupVariant1Props) {
  return (
    <div className={className} {...props}>
      <section className="scene" aria-label="Desktop product preview"><div className="glow" aria-hidden="true"></div><div className="laptop"><div className="screen"><i className="camera" aria-label="Front camera"></i><div className="window"><aside className="side"><small>Workspace</small><i className="nav"></i><i className="nav"></i><i className="nav"></i><i className="nav"></i></aside><article className="content"><small>Weekly momentum</small><h1>Where the work is moving.</h1><div className="chart" aria-label="Weekly progress chart"><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i></div></article></div></div><div className="deck" aria-hidden="true"></div></div></section>
    </div>
  )
}
