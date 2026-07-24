import Link from 'next/link'

export default function NotFound() {
  return <main id="main-content" className="mx-auto flex min-h-[50vh] max-w-3xl flex-col justify-center px-4 py-16"><p className="text-sm font-medium text-gray-500">404</p><h1 className="mt-2 text-4xl font-semibold tracking-tight">Page not found</h1><p className="mt-4 text-gray-600">The page you requested does not exist or has moved.</p><Link href="/" className="mt-8 w-fit rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white">Back to home</Link></main>
}
