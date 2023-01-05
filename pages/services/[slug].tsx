import { sanityClient, urlFor } from "../../sanity";
import Head from "next/head";
import { HiChevronRight, HiHome } from "react-icons/hi";
import Link from "next/link";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const query = `*[_type == "post"]{_id, slug { current }}`;
  const programs = await sanityClient.fetch(query);
  const paths = programs.map((program: any) => ({
    params: {
      slug: program.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: any) {
  const query = `*[_type == "post" && slug.current == $slug][0]{_id, title, description, slug, body, mainImage{ asset->{ _id, url }} }`;
  const programs = await sanityClient.fetch(query, { slug: params?.slug });
  return {
    props: {
      programs,
    },
    //after 60s it will updated the old cache.
    revalidate: 60,
  };
}

export default function ServiceSlug({ programs }: any) {
  console.log(programs);
  return (
    <>
      <Head>
        <title>Slug - Option One Staffing Agency</title>
      </Head>
      <main className="wrapper">
        <Breadcrumbs NavLink="Getting Started Guide for Option One" />
        <div className="max-w-3xl mt-12">
          <p className="mt-4 tracking-wide text-blue-700 uppercase type-body-small">
            Introduction
          </p>
          <h1 className="mt-2 type-headline-medium">
            Getting Started Guide for Option One!
          </h1>
          <p className="max-w-3xl my-2 type-body-large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            iure suscipit architecto, inventore placeat, ratione amet deleniti
            ullam error exercitationem qui nulla ea? Dolores, beatae.
            Consequatur.
          </p>
          <hr className="mt-8" />
        </div>
        <article className="max-w-3xl mt-16 type-body-large">
          <p className="type-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, nihil voluptas voluptatibus accusamus maxime ut sit
            error cumque illo dicta ab quo eum, culpa nobis velit magni,
            aspernatur modi vel!
          </p>
        </article>
      </main>
    </>
  );
}
interface BreadcrumbsProps {
  NavLink: string;
}
function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HiHome className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <HiChevronRight
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
            <Link
              href={`/services`}
              className="ml-4 type-body-medium hover:text-gray-700"
            >
              Services
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <HiChevronRight
              className="flex-shrink-0 w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
            <Link
              href={`/services/${props.NavLink}`}
              className="ml-4 type-body-medium hover:text-gray-700"
            >
              Getting Started Guide For Option One!
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
