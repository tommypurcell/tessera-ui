export type CloudLogo = {
  id: string
  name: string
  icon: React.ReactNode
}

export type LogoCloudGridVariant1DarkProps = {
  heading?: string
  logos: CloudLogo[]
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Customer logo cloud: a
 * "Trusted by teams at" heading above a grid of monochrome partner/customer
 * logos separated by subtle interior dividers.
 */
export function LogoCloudGrid({ heading = 'Trusted by teams at', logos, className }: LogoCloudGridVariant1DarkProps) {
  return (
    <div className={className}>
      <p className="text-center text-sm font-medium text-gray-400">{heading}</p>

      <div className="mt-6 grid grid-cols-3 divide-x divide-y divide-gray-800 overflow-hidden rounded-xl border border-gray-800 sm:grid-cols-4">
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-6">
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
