import Head from "next/head";

export default function Services_Slug() {
  return (
    <>
      <Head>
        <title>Services - Option One Staffing Agency</title>
      </Head>
      <main className="my-16 space-y-12 wrapper">
        <section className="">
        <h2 className="text-lg font-semibold text-blue-600">Services Page Title</h2>
          <h1 className="my-2 text-3xl font-bold leading-8 tracking-tight text-netural-900 sm:text-4xl lg:text-5xl lg:leading-normal">Option One: Your Partner in Finding the Right Staff for Your Business</h1>
          <p className="text-lg text-netural-500">Are you in need of qualified and reliable employees for your business? Look no further than Option One staffing agency. Established in 2006, we have a proven track record of providing companies with the right staff to meet their needs.</p>
        </section>
        <section className=" bg-gray-200 w-full h-[320px] lg:h-[500px]  rounded-xl"></section>
        <section className="space-y-8 prose lg:prose-xl ">
          <p className="body-large text-netural-600">At Option One, we understand the importance of having the right staff for your business to succeed. That&#39;s why we take great care in thoroughly screening our candidates to ensure integrity and professionalism. We pride ourselves in providing the best possible service to our clients, and it&#39;s this commitment to excellence that sets us apart from other staffing agencies.</p>
          <p className="body-large text-netural-600">Whether you are in need of temporary or permanent staff, Option One has the resources and expertise to find the right fit for your business. We specialize in providing staffing solutions across a wide range of industries and are dedicated to finding the right candidate for the job.</p>
          <p className="body-large text-netural-600">Don&#39;t waste any more time and energy on the tedious task of finding the right staff for your business. Let Option One handle it for you. Contact us today to learn more about our services and how we can help you find the right staff for your business.</p>
        </section>
      </main>
    </>
  )
}
