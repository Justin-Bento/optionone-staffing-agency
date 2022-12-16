import Head from "next/head";
import BlogCard from "../../components/BlogCard";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog - Option One Staffing Agency</title>
      </Head>
      <main className="md:container md:mx-auto max-w-7xl">
        <section className="mt-16 mb-8">
          <h1 className="text-3xl">Option One Staffing Blog</h1>
          <p className="mt-2 text-lg">Stay in the loop with the latest news, infromation, and resources with option one staffing agency. so you are</p>
          <hr className="mt-4 mb-8" />
        </section>
        <section className="grid grid-cols-1 gap-8 mg:grid-cols-2 lg:grid-cols-3">
          <BlogCard Image="https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" Path="/blog/1" Headline="Blog Card" Subhead="Any Additional Infromation" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius minus expedita mollitia enim sed veniam porro, soluta harum animi." />
          <BlogCard Image="https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" Path="/blog/1" Headline="Blog Card" Subhead="Any Additional Infromation" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius minus expedita mollitia enim sed veniam porro, soluta harum animi." />
          <BlogCard Image="https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" Path="/blog/1" Headline="Blog Card" Subhead="Any Additional Infromation" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius minus expedita mollitia enim sed veniam porro, soluta harum animi." />
          <BlogCard Image="https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" Path="/blog/1" Headline="Blog Card" Subhead="Any Additional Infromation" Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius minus expedita mollitia enim sed veniam porro, soluta harum animi." />
        </section>
      </main>
    </>
  );
}
