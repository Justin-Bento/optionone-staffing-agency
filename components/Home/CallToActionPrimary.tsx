import Link from "next/link";

export default function CallToActionPrimary() {
  return (
    <div className="bg-blue-700">
      <div className="py-24 wrapper">
        <div className="xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h3 className="type-headline-medium text-blue-50">
              Sign up to Grow and develop your potential!
            </h3>
            <p className="max-w-xl text-blue-100 type-body-large">
              We make sure that you stay on top of your potential through our
              personalized coaching sessions, to help you move in the right
              direction.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-blue-200">
              We care about the protection of your data. Read our{" "}
              <Link
                href="/privacy"
                className="font-medium text-white underline"
              >
                Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
