import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <title>Option One Staffing Agency</title>
        <meta name="title" content="Option One Staffing Agency" />
        <meta name="description" content="Option One is a practical staffing agency that provides qualified staff for companies. We strive for excellence in service and staff integrity." />
      </Head>
      <main className="p-4 my-16 space-y-24 sm:wrapper">
        <section className="">
          <h1 className="mb-6 leading-[1.25] lg:leading-normal text-center display-medium lg:display-medium max-w-5xl mx-auto">
            We Invest In Your Potential, <br /> Choosing Us Should Be Option
            One.
          </h1>
          <p className="max-w-3xl px-0 mb-6 text-xl text-center body-large lg:mx-auto">
            The the power of potential. We understand that potential can be
            realized through the right investments, and that&#39;s why we&#39;re
            committed to investing in your future.
          </p>
          <div className="flex flex-col justify-start gap-2 mb-4 space-x-0 md:flex-row md:justify-center md:mb-8">
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              Get Started
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              What Do We Offer?
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="w-full mx-auto mt-20 text-center h-[720px] relative">
            <Image
              fill
              quality={40}
              src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              alt="Hellonext feedback boards software screenshot"
              className="object-cover w-full rounded-lg"
            />
          </div>
          {/* End Of Hero Main Image */}
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Full Time Hiring</p>
              <p className="mt-2 body-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, repellat corporis distinctio minus.
              </p>
            </div>
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Part Time Hiring</p>
              <p className="mt-2 body-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, repellat corporis distinctio minus.
              </p>
            </div>
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Freelance Hiring</p>
              <p className="mt-2 body-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, repellat corporis distinctio minus.
              </p>
            </div>
          </div>
        </section>
        {/* End Of Section 1 */}
        <section className="bg-blue-900 rounded-xl">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h6 className="text-4xl font-bold tracking-tight text-white">
                Boost your productivity.
                <br />
                Unlock Your Business&#39;s Potential.
              </h6>
              <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-slate-200">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-slate-600 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Of Section 2 */}
        <section className="">
          <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div>
              <h2 className="mb-4 font-semibold headline-medium">
                Expert Staffing Solutions Tailored to Your Business Needs
              </h2>
              <p className="mb-5 prose">
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
              </p>
              <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
                Learn More
              </a>
            </div>
            <div className="w-full relative h-[480px]">
              <Image
                fill
                quality={40}
                src="/media/backing-sora-shimazaki.jpg"
                alt="people doing business"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
            <div className="order-none md:order-2">
              <h3 className="mb-4 font-semibold headline-medium">
                Uncover Top Talent with Option One Staffing - Your Partner in
                Hiring
              </h3>
              <p className="mb-5 prose">
                Love to code? Next to our ready-made and free plugins you can
                use our expansive yet simple API; decide how you integrate
                Payments and build advanced and reliable products yourself from
                scratch.
              </p>
              <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
                Learn More
              </a>
            </div>
            <div className="w-full relative h-[480px]">
              <Image
                fill
                quality={40}
                src="/media/backing-sora-shimazaki.jpg"
                alt="people doing business"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </section>
        {/* End Of Section 3 */}
        <section className="">
          {/* <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus exercitationem eligendi harum adipisci, repellat fuga iusto in voluptatibus quam? Voluptate voluptatem assumenda esse. Quasi dignissimos blanditiis cum distinctio ab.</p> */}
          <div className="w-full p-16 py-24 mt-4 rounded bg-slate-200 h-96">
            <h4 className="max-w-xl headline-medium">
              Achieve Your Business Goals Faster with the Right Staffing
              Solutions
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Find Talent</p>
              <p className="mt-2 body-medium">
                Understand our client&#39;s specific needs and find the right
                person to fit their criteria. Let us help you increase your
                productivity and profitability.
              </p>
            </div>
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Employers</p>
              <p className="mt-2 body-medium">
                find the right person to fit your clients needs Whether
                you&#39;re looking for a temporary, permanent or administrative
                staff.
              </p>
            </div>
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Job Seekers</p>
              <p className="mt-2 body-medium">
                We deliver fulfilling opportunities to you by providing
                opportunities that will connect you to the right employer and
                working environment.
              </p>
            </div>
            <div className="w-full p-6 rounded bg-slate-200">
              <p className="title-medium">Training</p>
              <p className="mt-2 body-medium">
                We train our associates with the proper certifications that are
                needed to ensure a Healthy and Safe environment..
              </p>
            </div>
          </div>
          {/* End Of Hero Main Image */}
        </section>
        {/* End Of Section 4 */}
        <section className="">
          <div className="wrapper">
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
              <div className="">
                <h5 className="pb-8 font-extrabold headline-medium">
                  Streamline Your Hiring Process and Save Time with Option One
                  Staffing
                </h5>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 1</p>
                    <p className="text-gray-700">
                      All recipes are written using certain conventions, which
                      define the characteristics of common ingredients. The
                      rules vary from place to place.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 2</p>
                    <p className="text-gray-700">
                      The first mate and his Skipper too will do their very best
                      to make the others comfortable in their tropic island
                      nest. Michael Knight a young loner.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 3</p>
                    <p className="text-gray-700">
                      Tell them I hate them. Is the Space Pope reptilian!? Tell
                      her she looks thin. Hello, little man. I will destroy you!
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 4</p>
                    <p className="text-gray-700">
                      If one examines precultural libertarianism, one is faced
                      with a choice: either accept rationalism or conclude that
                      context is a product.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-6 text-gray-600"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="mb-2 text-lg font-bold">Success</p>
                    <p className="text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="relative w-full h-96 lg:h-full">
                <Image
                  fill
                  quality={40}
                  className="inset-0 object-cover object-bottom rounded"
                  src="/media/succeed-anna-shvets.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Of Section 5 */}
        <section className="bg-slate-900 rounded-xl">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h6 className="text-4xl font-bold tracking-tight text-white">
                Boost your productivity.
                <br />
                Unlock Your Business&#39;s Potential.
              </h6>
              <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-slate-200">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-slate-600 shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Of Section 6 */}
      </main>
    </>
  );
}
