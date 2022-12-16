import Head from "next/head";
import Link from "next/link";

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
          <Link href="/services/1"className="relative w-full h-64 transition-all rounded-lg bg-slate-200 hover:opacity-90">
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-xl font-bold capitalize"> Lorem ipsum dolor sit amet.</h2>
              <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim.</p>
            </div>
          </Link>
          <Link href="/services/1"className="relative w-full h-64 transition-all rounded-lg bg-slate-200 hover:opacity-90">
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-xl font-bold capitalize"> Lorem ipsum dolor sit amet.</h2>
              <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim.</p>
            </div>
          </Link>
          <Link href="/services/1"className="relative w-full h-64 transition-all rounded-lg bg-slate-200 hover:opacity-90">
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-xl font-bold capitalize"> Lorem ipsum dolor sit amet.</h2>
              <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim.</p>
            </div>
          </Link>
          <Link href="/services/1" className="relative w-full h-64 transition-all rounded-lg bg-slate-200 hover:opacity-90">
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-xl font-bold capitalize"> Lorem ipsum dolor sit amet.</h2>
              <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim.</p>
            </div>
          </Link>
          <Link href="/services/1" className="relative w-full h-64 transition-all rounded-lg bg-slate-200 hover:opacity-90">
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-xl font-bold capitalize"> Lorem ipsum dolor sit amet.</h2>
              <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim.</p>
            </div>
          </Link>
          <Link href="/services/1" className="relative w-full h-64 transition-all rounded-lg bg-slate-200 hover:opacity-90">
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-xl font-bold capitalize"> Lorem ipsum dolor sit amet.</h2>
              <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum, quas nostrum placeat cupiditate sunt cum laudantium quod nulla enim.</p>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
