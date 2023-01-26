import Head from "next/head";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Head>
        <title>About -  Believe Support Services</title>
      </Head>
      <main className="my-16 space-y-16 wrapper">
        <section className="bg-gray-900 rounded-xl">
          <div className="p-16">
            <h1 className="text-white label-large">Our Mission</h1>
            <p className="italic font-normal text-gray-200 title-large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam cum dolores nesciunt quaerat velit exercitationem, eum odit aut excepturi cupiditate. Perspiciatis doloribus quibusdam neque pariatur eius placeat nam.</p>
          </div>
        </section>
        {/* END: Mission */}
        <section className="">
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            <div className="bg-gray-200 rounded-xl sm:p-6 lg:p-8">
              <h2 className="mb-2 text-xl font-medium text-netural-900">Company Value Headline</h2>
              <p className="italic font-normal text-netural-600 body-large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam cum dolores nesciunt quaerat velit exercitationem, eum odit aut excepturi cupiditate. Perspiciatis doloribus quibusdam neque pariatur eius placeat nam.</p>
            </div>
            {/* Company Value 1 */}
            <div className="bg-gray-200 rounded-xl sm:p-6 lg:p-8">
              <h2 className="mb-2 text-xl font-medium text-netural-900">Company Value Headline</h2>
              <p className="italic font-normal text-netural-600 body-large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam cum dolores nesciunt quaerat velit exercitationem, eum odit aut excepturi cupiditate. Perspiciatis doloribus quibusdam neque pariatur eius placeat nam.</p>
            </div>
            {/* Company Value 2 */}
            <div className="bg-gray-200 rounded-xl sm:p-6 lg:p-8">
              <h2 className="mb-2 text-xl font-medium text-netural-900">Company Value Headline</h2>
              <p className="italic font-normal text-netural-600 body-large">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dignissimos quibusdam cum dolores nesciunt quaerat velit exercitationem, eum odit aut excepturi cupiditate. Perspiciatis doloribus quibusdam neque pariatur eius placeat nam.</p>
            </div>
            {/* Company Value 3 */}
          </div>
        </section>
        {/* END: Values */}
        <section className="">
          <div className="px-4 py-24 mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div>
                <h3 className="mb-4 font-bold headline-large">Clear overview for efficient tracking</h3>
                <p className="mb-5 body-large">
                  Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
                </p>
              </div>
              <div className="w-full h-full py-48 bg-gray-200 rounded-xl"></div>
            </div>
            <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div className="order-none md:order-2">
                <h4 className="mb-4 font-bold headline-large">Decide how you integrate Payments</h4>
                <p className="mb-5 body-large">
                  Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
                  scratch.
                </p>
              </div>
              <div className="w-full h-full py-48 bg-gray-200 rounded-xl"></div>
            </div>
          </div>

        </section>
        {/* END: Features */}
        <section className="bg-gray-100 rounded-xl">
          <div className="py-24 wrapper">
            <div className="text-left md:text-center">
              <p className="mb-8 text-xs font-bold tracking-widest text-purple-800 uppercase">Why Companies Love Us</p>
              <h5 className="mb-10 font-serif text-xl italic font-thin text-gray-800 md:leading-snug md:text-3xl">
                “We endeavour to build a truly human AND high-performing workplace, where everyone can do the best work of their lives. This product is a key part of facilitating this culture by being our
                one-stop-shop for all things performance development.”
              </h5>
            </div>
            <div className="flex items-center justify-start md:justify-center">
              <div className="relative w-10 h-10">
                <Image fill quality={40} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Photo of Praveen Juge" className="rounded-full" /></div>
              <div className="ml-4">
                <p className="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase">Praveen Juge</p>
                <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">CEO, Birds</p>
              </div>
            </div>
          </div>
        </section>
        {/* END: Testimonials */}
        <section className="">
          <h6 className="mb-2 headline-medium">Office Location</h6>
          <p className="max-w-3xl mb-6 body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt commodi voluptatibus dicta quis accusamus cumque rerum rem deleniti dolor numquam!</p>
          <div className=" relative w-full h-[480px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.2353929007513!2d-79.23791728428796!3d43.78872835167391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d503a2ed115d71%3A0x13eb857699b1b85b!2sOption%20One%20Staffing%20Agency!5e0!3m2!1sen!2sca!4v1674770446075!5m2!1sen!2sca" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full rounded-xl"></iframe>
          </div>
        </section>
        {/* END: Office Location */}
      </main>
    </>
  )
}