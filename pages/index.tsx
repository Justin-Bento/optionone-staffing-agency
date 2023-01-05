import Head from "next/head";
// Start Of Imports
import Hero from "../components/Home/Hero";
import PrimaryFeatures from "../components/Home/PrimaryFeatures";
import CallToActionPrimary from "../components/Home/CallToActionPrimary";
import CallToActionSecondary from "../components/Home/CallToActionSecondary";
import SecondaryFeatures from "../components/Home/SecondaryFeatures";
import Stats from "../components/Home/Stats";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Option One Staffing Agency</title>
        <meta name="title" content="Option One Staffing Agency" />
        <meta name="description" content="We understand that potential can be realized through the right investments,  We believe in providing a platform for individuals with complex needs to pursue their dreams and reach their goals." />
      </Head>
      <main className="">
        <div className="pt-16 space-y-16">
          <Hero />
          <PrimaryFeatures />
          <CallToActionPrimary />
          <SecondaryFeatures />
          <Testimonials />
          <CallToActionSecondary />
        </div>
        <Stats />
        {/* 
        <CallToActionSecondary />
         */}
      </main>
    </>
  )
}
