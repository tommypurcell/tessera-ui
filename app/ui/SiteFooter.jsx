export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Open-source UI components for people and coding agents.</p>
        <a className="transition-colors hover:text-gray-900" href="/blog">Read the blog</a>
      </div>
    </footer>
  )
}
