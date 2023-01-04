import Head from "next/head";
import { HiOutlineBookOpen, HiOutlineCamera, HiOutlineCubeTransparent } from "react-icons/hi";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Option One Staffing Agency</title>
      </Head>
      <main className="mb-16 space-y-16">
        <section className="py-16 bg-slate-700 text-slate-50">
          <div className="p-4 md:container md:mx-auto max-w-7xl">
            <h1 className="font-serif text-lg tracking-wider">Our Mission</h1>
            <p className="max-w-5xl text-xl italic tracking-wide">
              Our goal is to provide you with the best-customized support in
              this rapidly growing economy. While you strive for excellence with
              aid from our qualified staff who are devoted to providing you the
              best possible service.
            </p>
          </div>
        </section>
        <section className="p-4 md:container md:mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="1">
              <HiOutlineBookOpen size={"2rem"} className="text-blue-700" />
              <h2 className="mt-4 type-headline-small">Honesty</h2>
              <p className="type-body-large">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                et eligendi, ut doloribus eum beatae, nihil quas quo quibusdam
                officiis obcaecati labore esse cupiditate veniam. Molestiae
                asperiores quam!
              </p>
            </div>
            <div className="1">
              <HiOutlineCamera size={"2rem"} className="text-blue-700" />
              <h2 className="mt-4 type-headline-small">Excellence</h2>
              <p className="type-body-large">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                et eligendi, ut doloribus eum beatae, nihil quas quo quibusdam
                officiis obcaecati labore esse cupiditate veniam. Molestiae
                asperiores quam!
              </p>
            </div>
            <div className="1">
              <HiOutlineCubeTransparent size={"2rem"} className="text-blue-700" />
              <h2 className="mt-4 type-headline-small">Quality of service</h2>
              <p className="type-body-large">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                et eligendi, ut doloribus eum beatae, nihil quas quo quibusdam
                officiis obcaecati labore esse cupiditate veniam. Molestiae
                asperiores quam!
              </p>
            </div>
          </div>
        </section>
        <section className="p-4 md:container md:mx-auto max-w-7xl">
          <h3 className="type-headline-medium">Headline 3</h3>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam
            veritatis earum!
          </p>
        </section>
        <section className="p-4 md:container md:mx-auto max-w-7xl">
          <h4 className="type-headline-medium">Headline 4</h4>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam
            veritatis earum!
          </p>
        </section>
        <section className="p-4 md:container md:mx-auto max-w-7xl">
          <h5 className="type-headline-medium">Headline 5</h5>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam
            veritatis earum!
          </p>
        </section>
        <section className="p-4 md:container md:mx-auto max-w-7xl">
          <h6 className="type-headline-medium">Headline 6</h6>
          <p className="type-body-large">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, et
            eligendi, ut doloribus eum beatae, nihil quas quo quibusdam officiis
            obcaecati labore esse cupiditate veniam. Molestiae asperiores quam
            veritatis earum!
          </p>
        </section>
      </main>
    </>
  );
}
