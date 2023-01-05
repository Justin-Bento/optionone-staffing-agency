import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";

export default function ServicesIndex({ programs }: any) {
  console.log(programs);
  return (
    <main className="my-8 wrapper">
      <section className="">
        <h1 className="type-headline-medium">
          Unlock The Power Of Your Potential!
          {/* Post Headline Goes Here */}
        </h1>
        <p className="max-w-prose type-body-large">
          Option One is here to help. We specialize in providing a comprehensive
          suite of services that enable you to be the best and get the ground
          running.
          {/* Post Supporting Text Goes Here */}
        </p>
      </section>
      {/* End of Header */}
      <section className="flex flex-col mt-8 space-y-8">
        {programs.map((data: any) => {
          return (
            <Link key={data._id} href={`/services/${data._id}`}>
              <article className="">
                <div className="relative w-full h-64 bg-gray-200 rounded-xl">
                  <Image src={urlFor(data.mainImage.asset.url).url()} alt="" className="object-cover w-full h-full grayscale rounded-xl" width={960} height={500} />
                  <div className="absolute top-0 w-full h-full bg-blue-500 opacity-70 rounded-xl"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-8">
                    <h2 className="type-title-medium text-blue-50"> {data.title} </h2>
                    <p className="type-body-medium text-blue-50"> {data.description} </p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const query = `*[_type == "post"]{_id, title, description, slug, mainImage{ asset->{ _id, url }} }`;
  const programs = await sanityClient.fetch(query);
  return {
    props: {
      programs,
    }, // will be passed to the page component as props
  };
}
