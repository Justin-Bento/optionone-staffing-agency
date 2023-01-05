import Head from "next/head";
import { HiMail, HiPhone } from "react-icons/hi";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up - Option One Staffing Agency</title>
      </Head>
      <main className="s">
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="px-6 py-16 bg-gray-50 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="type-headline-medium">Start The Process</h2>
                <p className="mt-3 type-body-large">
                  Our team of experts will provide the guidance and support you
                  need to keep pushing forward.
                </p>
                <dl className="mt-8 type-body-large">
                  <div>
                    <dt className="sr-only">Postal address</dt>
                    <dd>
                      <p>300 - 10 Milner Business Court</p>
                      <p>Scarborough ON, M1B 3C6</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <HiPhone
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <HiMail
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">support@example.com</span>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-base text-gray-500">
                  Looking for careers?{" "}
                  <a href="#" className="font-medium text-gray-700 underline">
                    View all job openings
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="px-6 py-16 bg-white lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form
                  action="#"
                  method="POST"
                  className="grid grid-cols-1 gap-y-6"
                >
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Company Name / Full Name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Company Name / Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Address
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Address"
                    />
                  </div>
                  <div className="flex justify-between gap-8">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Start Time"
                    />
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="End Time"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm ring-gray-600 ring-1 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
