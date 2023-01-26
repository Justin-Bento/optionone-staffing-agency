import Head from "next/head";
import { sanityClient } from "../sanity";

interface FAQSProps {
  _id: string
  question: string,
  answer: string,
}

export default function faqs({questions}:FAQSProps ) {
  return (
    <>
      <Head>
        <title>FAQs - Option One Staffing Agency</title>
      </Head>
      <main className="my-16">
        <section className="wrapper">
          <h1 className="display-small">Frequently asked questions</h1>
          <p className="mt-4 prose">This can be used for blogs or articles where you want to possibly display next and previous article buttons</p>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:wrapper">
          {questions.map((question: any) => {
            return (
              <>
                <div key={question._id} className="p-6 py-8 bg-gray-50 rounded-xl">
                  <h2 className="title-medium">{question.question}</h2>
                  <p className="mt-2 text-gray-500 body-large">{question.answer}</p>
                </div>
              </>
            )
          })}
        </section>
        <hr className="my-4" />
        <section className="wrapper">
          <h3 className="title-medium">If Your Question Is not asked here please send us an email.</h3>
        </section>
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