import Image from "next/image";
import Link from "next/link";
import { HiScale, HiOutlineKey } from "react-icons/hi"

export default function SecondaryFeatures() {
  return (
    <>
      <section className="p-4 space-y-16 wrapper">
        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="">
            <span className="flex flex-col gap-4 mb-4">
              <HiScale size="2rem" />
              <h4 className="type-headline-medium">Stay on top of your potential .</h4>
              <p className="type-body-large">We understand that having support is essential for success. That&#39;s why we provide a wide range of services and resources to ensure that you have the best chance of success. We are here to provide support and guidance every step of the way as you reach your potential.</p>
            </span>
            <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Action 1</Link>
          </div>
            <Image src="/media/backing-sora-shimazaki.jpg" width={650} height={440} alt="Backing Business Work" className="rounded-xl" />
        </article>
        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16 lg:items-center">
        <Image src="/media/succeed-anna-shvets.jpg" width={650} height={440} alt="Happy Dance After Task" className="rounded-xl" />
          <div className="">
            <span className="flex flex-col gap-4 mb-4">
              <HiOutlineKey size="2rem" />
              <h4 className="type-headline-medium">Keys To Help You Succeed</h4>
              <p className="type-body-large">Our team of experienced professionals is dedicated to helping you unlock your potential and reach your goals. We&#39;re here to help guide you and provide the resources to help you reach your goals. With our commitment to your success, you can be sure that you have the best chance of reaching your full potential.</p>
            </span>
            <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Action 1</Link>
          </div>
        </article>
      </section>
    </>
  );
}