import Link from 'next/link'

export default function Error404() {
  return (
    <section className="flex items-center h-screen">
      <div className="flex flex-col items-center justify-center wrapper">
        <div className="text-center max-w-prose">
          <h2 className="mb-8 type-display-large text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="mb-2 type-headline-large">Sorry, we couldn&apos;t find this page.</p>
          <p className="mt-4 mb-8 type-body-large">But dont worry, you can find plenty of other things on our homepage.</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
            <Link rel="noopener noreferrer" href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Previous Session</Link>
            <Link rel="noopener noreferrer" href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Home Page</Link>
          </div>
        </div>
      </div>
    </section>
  )
}