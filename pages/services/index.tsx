import Head from "next/head";
import ServiceCard from "../../components/ServiceCard";
export default function index() {
  return (
    <>
      <Head>
        <title>Services - Option One Staffing Agency</title>
      </Head>
      <main className="p-4 my-16 md:container md:mx-auto max-w-7xl">
        <section className="mb-8">
          <div className="border-b border-gray-200">
            <div className="space-y-0.5 pb-6">
              <h1 className="text-xl font-medium text-gray-900">
                Your Bookmark Folders
              </h1>
              <p className="text-base text-gray-500">
                You can organize your bookmarks into folders to help you find
                them easier.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <ServiceCard Image="https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" Path="1" Headline="Lorem ipsum dolor sit amet." Supporting="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim." />
        </section>
      </main>
    </>
  );
}
