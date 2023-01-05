import { HiOutlineMenu, HiOutlinePhone, } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="my-16 bg-white">
      <main className="overflow-hidden">
        <ContactHeader />
        <ContactForm />
        <ContactBusiness />
      </main>
    </div>
  );
}
function ContactHeader() {
  {/* Header */ }
  return (
    <div className="bg-warm-gray-50">
      <div className="relative z-10 wrapper">
        <h1 className="type-headline-large">Get in touch</h1>
        <p className="max-w-3xl mt-1 type-body-large">
          If you&#39;re looking for a partner to help you reach your financial
          goals, Option One is here to help. We specialize in providing a
          comprehensive suite of services that enable you to make the most
          of your money.
        </p>
      </div>
    </div>
  )
}
function ContactForm() {
  {/* Header */ }
  return (
    <section className="relative bg-white" aria-labelledby="contact-heading">
      <div className="absolute h-1/2 bg-warm-gray-50" aria-hidden="true" />
      {/* Decorative dot pattern */}
      <div className="wrapper">
        <div className="relative bg-white border">
          <h2 id="contact-heading" className="sr-only">Contact us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative px-6 py-10 overflow-hidden bg-gradient-to-b from-blue-500 to-blue-600 sm:px-10 xl:p-12">
              {/* Decorative angle backgrounds */}
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">
                Contact information
              </h3>
              <p className="max-w-3xl mt-3 type-body-medium text-blue-50">
                Contact us today to learn more about how we can help you reach your potential.
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-blue-50">
                  <HiOutlinePhone
                    className="flex-shrink-0 w-6 h-6 text-blue-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-blue-50">
                  <HiOutlineMenu
                    className="flex-shrink-0 w-6 h-6 text-blue-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">support@workcation.com</span>
                </dd>
              </dl>
            </div>

            {/* Contact form */}
            <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-warm-gray-900">
                Send us a message
              </h3>
              <form action="#" method="POST" className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="type-label-large" >First name</label>
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-warm-gray-300 text-warm-gray-900 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="first-name" className="type-label-large" >Last name</label>
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-warm-gray-300 text-warm-gray-900 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="type-label-large">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-warm-gray-300 text-warm-gray-900 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="type-label-large">Subject</label>
                  <input type="text" name="subject" id="subject" className="block w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-warm-gray-300 text-warm-gray-900 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="type-label-large">Message</label>
                    <span id="message-max" className="type-label-small">Max. 500 characters</span>
                  </div>
                  <textarea id="message" name="message" rows={4} className="block w-full px-4 py-3 mt-1 border rounded-md shadow-sm border-warm-gray-300 text-warm-gray-900 focus:border-blue-500 focus:ring-blue-500" aria-describedby="message-max" defaultValue={""} />
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function ContactBusiness() {
  const offices = [
    {
      id: 1,
      city: "Los Angeles",
      address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"],
    },
    {
      id: 2,
      city: "New York",
      address: ["886 Walter Streets", "New York, NY 12345"],
    },
    {
      id: 3,
      city: "Toronto",
      address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    },
    { id: 4, city: "London", address: ["114 Cobble Lane", "London N1 2EF"] },
  ];

  return (
    <section aria-labelledby="offices-heading">
      <div className="wrapper">
        <h2
          id="offices-heading"
          className="text-3xl font-bold tracking-tight text-warm-gray-900"
        >
          Our offices
        </h2>
        <p className="max-w-3xl mt-4 type-body-large">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
          id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
          fames.
        </p>
        <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="type-title-medium">{office.city}</h3>
              <p className="mt-2 type-body-medium">
                {office.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
