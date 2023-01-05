import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <title>Option One Staffing Agency</title>
      </Head>
      <main className="py-12 space-y-12">
        <Hero />
        <PrimaryFeatures />
        <CallToActionPrimary />
        <SecondaryFeatures />
        <CallToActionSecondary />
        <Testimonials />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="wrapper">
      <div className="hidden sm:mb-4 sm:flex sm:justify-center">
        <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <span className="text-gray-600">
            View Listen To Our Success Stories.{" "}
            <a href="#" className="font-semibold text-blue-600">
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
        At Option One, we believe in the power of potential. We understand that
        potential can be realized through the right investments, and that’s why
        we’re committed to investing in your future. We believe in providing a
        platform for individuals to pursue their dreams and reach their goals
      </p>
      <div className="flex flex-col justify-start gap-4 mt-8 md:flex-row md:justify-center">
        <Link
          href="/services"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Our Programs
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Check Out Our Staff
        </Link>
      </div>
      <Image
        src="/media/support-services.jpg"
        alt="Image Of Company"
        width={640}
        height={600}
        className="mt-8 md:w-full rounded-xl"
      />
    </section>
  );
}
function PrimaryFeatures() {
  return (
    <section className="">
      <div className="wrapper">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border rounded-xl">
            <h2 className="type-title-medium">Find Talent</h2>
            <p className="type-body-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
          </div>
          <div className="p-4 border rounded-xl">
            <h2 className="type-title-medium">Employers</h2>          
            <p className="type-body-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
          </div>
          <div className="p-4 border rounded-xl">
            <h2 className="type-title-medium">Hiring Managers</h2>
            <p className="type-body-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToActionPrimary() {
  return (
    <div className="bg-blue-600">
      <div className="wrapper">1</div>
    </div>
  );
}
function CallToActionSecondary() {
  return (
    <div className="bg-red-600">
      <div className="wrapper">1</div>
    </div>
  );
}
function SecondaryFeatures() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="type-headline-medium">Protect your device</h2>
          <p className="mt-2 type-body-1">
            As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
            fabric sleeve that matches in quality and looks.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-2">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative max-w-5xl px-6 pt-20 pb-12 mx-auto lg:px-8 lg:py-20">
        <svg
          className="absolute left-0 transform -translate-y-24 top-full translate-x-80 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={784}
            height={404}
            fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
          />
        </svg>

        <svg
          className="absolute hidden transform translate-x-1/2 -translate-y-1/2 right-full top-1/2 lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
          />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="w-64 h-64 rounded-full xl:h-80 xl:w-80"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 text-blue-200 transform -translate-x-8 -translate-y-24 opacity-50 h-36 w-36"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="type-title-large">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="type-title-medium">
                      Judith Black
                    </div>
                    <div className="text-blue-600 type-title-small">
                      CEO, Tuple
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    name: 'Minimal and thoughtful',
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Refined details',
    description:
      'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}