import Link from "next/link";

export default function CallToActionSecondary() {
  return (
    <div className="bg-red-600">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-red-50">Start your free trial today.</span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="#" className="inline-flex items-center px-4 py-2 text-base font-medium text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
