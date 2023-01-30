import Head from "next/head";
import Link from "next/link";
import { sanityClient } from "../sanity";


export default function faqs({ questions }: any) {
  return (
    <>
      <Head>
        <title>FAQs - Option One Staffing Agency</title>
      </Head>
      <main className="mt-16 space-y-16">
        <section className="wrapper">
          <h1 className="display-small">Frequently asked questions</h1>
          <p className="mt-4 prose">This can be used for blogs or articles where you want to possibly display next and previous article buttons</p>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:wrapper">
          {questions.map((question: any) => {
            return (
              <>
                <div key={question._id} className="px-4 py-3 bg-gray-50 rounded-xl">
                  <h2 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{question.question}</h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{question.answer}</p>
                </div>
              </>
            )
          })}
        </section>
        <Call_To_Action_Email />
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const query = `*[_type == "questions"]{_id, question, answer}`;
  const questions = await sanityClient.fetch(query);
  return {
    props: {
      questions,
    }, // will be passed to the page component as props
  };
}
function Call_To_Action_Email() {
  return (
    <div className="bg-blue-100">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Don&#39;t See Your Question Here?
          <br />
          Send your question and we well awnser it for you!
        </h2>
        <div className="flex items-center mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="mailto:"
            className="rounded-md bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Send Question
          </Link>
        </div>
      </div>
    </div>
  )
}