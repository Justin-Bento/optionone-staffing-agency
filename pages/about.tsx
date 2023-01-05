import Head from "next/head";
import {
  HiOutlineBookOpen,
  HiOutlineCamera,
  HiOutlineCubeTransparent,
} from "react-icons/hi";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Option One Staffing Agency</title>
      </Head>
      <main className="mb-16 space-y-16">
        <About_Company_Mission />
        <About_Company_Values />
        <About_Company_What />
        <About_Company_Who />
        <About_Company_Extra />
        <About_Company_Office />
      </main>
    </>
  );
}

function About_Company_Mission() {
  return (
    <section className="py-16 bg-slate-700 text-slate-50">
      <div className="wrapper">
        <h1 className="font-serif text-lg tracking-wider">Our Mission</h1>
        <p className="max-w-5xl text-xl italic tracking-wide">
          Our goal is to provide you with the best-customized support in this
          rapidly growing economy. While you strive for excellence with aid from
          our qualified staff who are devoted to providing you the best possible
          service.
        </p>
      </div>
    </section>
  );
}
function About_Company_What() {
  return (
    <section className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <h3 className="type-headline-medium">What we do?</h3>
        </div>
        <div className="mt-4 space-y-8 md:mt-0">
          <p className="type-body-large">
            At Option One, we recognize that investing in potential is the key
            to success. We strive to help you reach your full potential by
            providing resources and support to help you grow and excel. Our
            services include career coaching, job search assistance, resume
            writing, and mentorship programs. We also provide access to
            industry-leading tools and resources to ensure you have the best
            chance of success. Our commitment to you is to provide the highest
            quality of service and to be with you every step of the way as you
            journey to success.
          </p>
          <p className="type-body-large">
            we make sure that you stay on top of your potential through our
            personalized coaching sessions. Our coaches provide the tools and
            resources necessary to make sure that you are reaching your goals
            and moving in the right direction. We will provide you with the
            knowledge and advice needed to stay motivated and focused while you
            reach your potential.
          </p>
          <p className="type-body-large">
            we make sure that you stay on top of your potential through our
            personalized coaching sessions. Our coaches provide the tools and
            resources necessary to make sure that you are reaching your goals
            and moving in the right direction. We will provide you with the
            knowledge and advice needed to stay motivated and focused while you
            reach your potential.
          </p>
        </div>
      </div>
    </section>
  );
}
function About_Company_Values() {
  return (
    <section className="wrapper">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="1">
          <HiOutlineBookOpen size={"2rem"} className="text-blue-700" />
          <h2 className="mt-4 type-headline-small">Honesty</h2>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam!
          </p>
        </div>
        <div className="1">
          <HiOutlineCamera size={"2rem"} className="text-blue-700" />
          <h2 className="mt-4 type-headline-small">Excellence</h2>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam!
          </p>
        </div>
        <div className="1">
          <HiOutlineCubeTransparent size={"2rem"} className="text-blue-700" />
          <h2 className="mt-4 type-headline-small">Quality of service</h2>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam!
          </p>
        </div>
      </div>
    </section>
  );
}
function About_Company_Who() {
  return (
    <section className="wrapper">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <h4 className="type-headline-medium">Who we are</h4>
        <p className="type-body-large">
          Option One is a practical staffing agency offering employment and
          staffing services that fits today&#39;s needs. Option One was
          established in October 2006, we take great pride in providing
          companies with the right and qualified staff. We are dedicated and
          devoted to providing you the best possible service.
        </p>
      </div>
    </section>
  )
}
function About_Company_Extra() {
  return (
    <section className="wrapper">
      <h5 className="type-headline-medium">Headline 5</h5>
      <p className="type-body-large">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
        eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
        obcaecati labore esse cupiditate veniam. Molestiae asperiores quam
        veritatis earum!
      </p>
    </section>
  )
}
function About_Company_Office() {
  return (

    <section className="wrapper">
      <h6 className="type-headline-medium">Our Office</h6>
      <p className="type-body-large">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
        eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
        obcaecati labore esse cupiditate veniam. Molestiae asperiores quam
        veritatis earum!
      </p>
    </section>

  )
}