import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
export default function contact() {
  return (
    <main className="my-12 space-y-12">
      <section className="p-4 rounded-xl bg-gray-50 sm:wrapper sm:py-24">
        <div className="">
          <h1 className="headline-medium md:display-small">Get In Touch</h1>
          <p className="mt-3 prose prose-neutral">Convallis feugiat et aliquet pellentesque dictum nisi, velit. Egestas fermentum adipiscing risus quam ac consectetur mattis turpis tristique.</p>
        </div>
      </section>
      <Contact_Information />
      <Call_To_Action_Contact />
    </main>
  )
}

function Contact_Information() {
  return (
    <>
      <div className="relative bg-white wrapper">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative w-full h-56 lg:h-[1200px]">
              <Image
                fill
                quality={40}
                className="object-cover"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative px-6 py-16 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&#39;s work together</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                We&#39;d love to hear from you! Send us a message using the form opposite, or email us. We&#39;d love to hear
                from you! Send us a message using the form opposite, or email us.
              </p>
              <form action="#" method="POST" className="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <span id="phone-description" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <span id="how-can-we-help-description" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                  <div className="grid grid-cols-1 mt-4 gap-y-4">
                    <div className="flex items-center">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        defaultValue="under_25k"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-under-25k" className="ml-3">
                        <span className="block text-sm text-gray-700">Hiring Managers</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        defaultValue="25k-50k"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-25k-50k" className="ml-3">
                        <span className="block text-sm text-gray-700">Employers</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        defaultValue="50k-100k"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-50k-100k" className="ml-3">
                        <span className="block text-sm text-gray-700">Job Seekers</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        defaultValue="over_100k"
                        type="radio"
                        className="w-4 h-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                      />
                      <label htmlFor="budget-over-100k" className="ml-3">
                        <span className="block text-sm text-gray-700">Other</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                    How did you hear about us?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="how-did-you-hear-about-us"
                      id="how-did-you-hear-about-us"
                      className="block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-grape-600 hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* CTA Section */}
      </div>

    </>
  )
}

function Call_To_Action_Contact() {
  return (
    <div className="p-4 bg-blue-400 rounded-xl sm:wrapper sm:py-24">
    <div className="max-w-md px-6 py-16 mx-auto text-center sm:max-w-2xl sm:py-24 lg:px-8 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="block text-white">Looking for a new career?</span>
        <span className="block text-grape-900">We’re hiring.</span>
      </h2>
      <Link
        href="/signup"
        className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium bg-white border border-transparent rounded-md shadow-md text-grape-600 hover:bg-grape-50 sm:w-auto"
      >
        <span>Sign Up</span>
        <HiArrowRight className="flex-shrink-0 w-5 h-5 ml-3 text-gray-400" aria-hidden="true" />
      </Link>
    </div>
  </div>
  )
}