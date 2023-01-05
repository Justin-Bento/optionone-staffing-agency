import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="p-4 wrapper">
        <div className="hidden sm:mb-4 sm:flex sm:justify-center">
          <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <span className="text-gray-600">
              View Listen To Our Success Stories.{" "}
              <Link href="/stories" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
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
            href="/signup"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Unlock Your Full Potential
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Our Services
          </Link>
        </div>
        <Image
          src="/media/support-services.jpg"
          alt="Image Of Company"
          width={640}
          height={600}
          className="mt-8 md:w-full rounded-xl"
        />
        <Incentivess />
      </section>
    </>
  );
}

function Incentivess() {
  const incentives = [
    {
      name: 'Grow and develop',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "From mentorship programs to resume writing and job search assistance, we are dedicated to help you develop your potential.",
    },
    {
      name: 'Stay Supported',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "We are here to provide support and guidance every step of the way as you reach your potential.",
    },
    {
      name: 'Specialized Tools',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "We are dedicated to providing you with the tools, resources, and support necessary to help you reach your goals.",
    },
  ]
  return (
    <section className="">
      <div className="max-w-2xl px-4 mx-auto lg:max-w-none">
        <div className="grid grid-cols-1 mt-16 gap-y-10 md:gap-16 gap-x-8 lg:grid-cols-3 place-items-start">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="sm:flex lg:block">
              <div className="sm:flex-shrink-0">
                <Image width={48} height={48} src={incentive.imageSrc} alt={incentive.name} />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h2 className="type-title-medium">{incentive.name}</h2>
                <p className="mt-2 type-body-small">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}