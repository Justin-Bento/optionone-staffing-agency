import Head from "next/head";

export default function Home() {
  let company = "option one staffing agency";
  return (
    <>
      <Head>
        <title>Option One Staffing Agency</title>
      </Head>
      <main className="mt-16 space-y-10">
        <section className="p-4 space-y-8 text-start lg:text-center md:container md:mx-auto">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight">We Invest In Your Portential, <span className="md:block">Choosing Us Should Be Option One!</span></h1>
          <p className="mt-4 text-gray-600 md:text-lg max-w-prose lg:mx-auto">Start your journey with {company}. Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>
          <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:justify-center">
            <button className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-blue-700 border border-blue-700 rounded appearance-none cursor-pointer select-none shrink-0 hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Sign Up Today
            </button>
            <button className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-gray-800 transition bg-white border border-gray-200 rounded appearance-none cursor-pointer select-none shrink-0 hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
              View Programs
            </button>
          </div>
          <div className="bg-gray-200 w-full h-[720px] rounded-xl"></div>
        </section>
        <section className="bg-slate-600 text-slate-50">
          <div className="px-4 py-16 md:container md:mx-auto">
            <h2 className="text-3xl font-semibold capitalize">Call To Action</h2>
            <p className=""></p>
          </div>
        </section>
        <section className="px-4 py-16 md:container md:mx-auto">
          <h3 className="text-3xl font-semibold capitalize">Headline 3</h3>
          <p className=""></p>
        </section>
        <section className="px-4 py-16 md:container md:mx-auto">
          <h4 className="text-3xl font-semibold capitalize">Headline 4</h4>
          <p className=""></p>
        </section>
        <section className="bg-slate-600 text-slate-50">
          <div className="px-4 py-16 md:container md:mx-auto">
            <h5 className="text-3xl font-semibold capitalize">Call To Action</h5>
            <p className=""></p>
          </div>
        </section>
        <section className="px-4 py-16 md:container md:mx-auto">
          <h6 className="text-3xl font-semibold capitalize">Headline 6</h6>
          <p className=""></p>
        </section>
        <section className="bg-slate-600 text-slate-50">
          <div className="px-4 py-16 md:container md:mx-auto">
            <h2 className="text-3xl font-semibold capitalize">Call To Action</h2>
            <p className=""></p>
          </div>
        </section>
      </main>
    </>
  );
}
