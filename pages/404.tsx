import Link from 'next/link'

export default function Error404() {
  return (
    <section className="flex items-center h-screen p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center max-w-prose">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="mb-2 text-2xl font-medium leading-none tracking-tight text-gray-900 capitalize">Sorry, we couldn&apos;t find this page.</p>
          <p className="mt-4 mb-8 text-gray-700 whitespace-pre-line">But dont worry, you can find plenty of other things on our homepage.</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
            <Link rel="noopener noreferrer" href="/" className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-blue-700 border border-blue-700 rounded appearance-none cursor-pointer select-none shrink-0 hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Previous Session</Link>
            <Link rel="noopener noreferrer" href="/" className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-gray-800 transition bg-white border border-gray-200 rounded appearance-none cursor-pointer select-none shrink-0 hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">Home Page</Link>
          </div>
        </div>
      </div>
    </section>
  )
}