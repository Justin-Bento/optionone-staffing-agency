import Head from "next/head";

export default function FAQs() {
  let questions = [
    { _id: 1, title: "Question 1", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo quaerat ducimus, odit laudantium maiores perspiciatis adipisci. Minus, vero ea." },
    { _id: 2, title: "Question 2", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo quaerat ducimus, odit laudantium maiores perspiciatis adipisci. Minus, vero ea." },
    { _id: 3, title: "Question 3", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo quaerat ducimus, odit laudantium maiores perspiciatis adipisci. Minus, vero ea." },
    { _id: 4, title: "Question 4", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo quaerat ducimus, odit laudantium maiores perspiciatis adipisci. Minus, vero ea." },
    { _id: 5, title: "Question 5", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo quaerat ducimus, odit laudantium maiores perspiciatis adipisci. Minus, vero ea." },
    { _id: 6, title: "Question 6", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo quaerat ducimus, odit laudantium maiores perspiciatis adipisci. Minus, vero ea." },
  ]
  return (
    <>
      <Head>
        <title>FAQs - Option One Staffing Agency</title>
      </Head>
      <main className="my-16">
        <div className="wrapper">
          <section className="mb-8">
            <h2 className="type-headline-large">Frequently asked questions</h2>
            <p className="mt-2 type-body-large">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">customer support</a>
              &nbsp;team.
            </p>
          </section>
          {/* End of FAQ Header */}
          <section className="grid grid-cols-1 gap-8 mt-16 mb-16 lg:grid-cols-3 lg:gap-16">
            {questions.map((data) => {
              return (
                <div className="" key={data._id}>
                  <h2 className="type-title-medium">{data.title}</h2>
                  <p className="mt-2 text-gray-500 type-body-large">{data.body}</p>
                </div>
              )
            })}
          </section>
        </div>
        <Newsletter />
      </main>
    </>
  );
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

function Newsletter() {
  return (
    <div className="bg-gray-800">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:flex lg:items-center lg:py-24 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-white type-headline-medium" id="newsletter-headline">
            Sign up for our newsletter
          </h2>
          <p className="text-gray-300 text-body-large max-w-prose">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 border border-transparent rounded-md focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            We care about the protection of your data. Read our{' '}
            <a href="#" className="font-medium text-white underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
