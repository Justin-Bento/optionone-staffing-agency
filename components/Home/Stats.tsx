import Image from "next/image";

export default function Stats() {
  const metrics = [
    {
      id: 1,
      stat: "8K+",
      emphasis: "Companies",
      rest: "use laoreet amet lacus nibh integer quis.",
    },
    {
      id: 2,
      stat: "25K+",
      emphasis: "Countries around the globe",
      rest: "lacus nibh integer quis.",
    },
    {
      id: 3,
      stat: "98%",
      emphasis: "Customer satisfaction",
      rest: "laoreet amet lacus nibh integer quis.",
    },
    {
      id: 4,
      stat: "12M+",
      emphasis: "Issues resolved",
      rest: "lacus nibh integer quis.",
    },
  ];
  return (
    <>
      {/* Stats section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
          <div className="w-full h-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <Image
                width={500}
                height={500}
                className="object-cover w-full h-full opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl px-6 mx-auto lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h6 className="text-base font-semibold">
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text">
                Valuable Metrics
              </span>
            </h6>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white">
              Get actionable data that will help you grow!
            </p>
            <p className="mt-5 text-lg text-gray-300">
              At Option One, we understand that data is essential for growth.
              That&#39;s why we provide actionable data that can help you identify
              opportunities for growth and development. Our data-driven insights
              will provide you with the information you need to make informed
              decisions and reach your goals. With our data-driven insights, you
              can be sure that you have the tools and resources to reach your
              full potential.
            </p>
            <div className="grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">
                    {item.stat}
                  </span>
                  <span className="block mt-1 text-base text-gray-300">
                    <span className="font-medium text-white">
                      {item.emphasis}
                    </span>{" "}
                    {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
