import Head from "next/head";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>Option One Staffing Agency</title>
      </Head>
      <main className="p-4 py-20 space-y-20 md:p-6 lg:p-8">
        <section className="max-w-5xl mx-auto mt-12">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="text-gray-600">
                View Listen To Our Success Stories.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div>
          <h1 className="max-w-3xl leading-tight type-display-medium md:text-center text-start md:mx-auto">
            We Invest In Your Potential, Choosing Us Should Be Option One.
          </h1>
          <p className="max-w-3xl mx-auto mt-4 type-body-large text-start md:text-center">
            Our dedicated staff is devoted to providing you the best possible
            service and in doing so, we make sure that every step of the process
            is handled in a professional and timely manner. Our team of
            experienced and knowledgeable staff are here to assist you in
            finding the perfect employee for your needs.
          </p>
          <div className="flex flex-col justify-start gap-4 mt-8 md:flex-row md:justify-center">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Button text
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Button text
            </button>
          </div>
          <Image
            src="/media/support-services.jpg"
            alt="Image Of Company"
            width={640}
            height={600}
            className="mt-8 md:w-full rounded-xl"
          />
        </section>
      </main>
    </>
  );
}
