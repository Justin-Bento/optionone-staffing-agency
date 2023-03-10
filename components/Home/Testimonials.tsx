import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        <BackgroundPattern />
        <div className="relative">
          <Image width={32} height={32} className="h-8 mx-auto" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg" alt="Workcation" />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-2xl font-medium leading-9 text-center text-gray-900">
              <h5>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
              </h5>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image width={40} height={40} className="w-10 h-10 mx-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Judith Black</div>
                  <IconDash />
                  <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function IconDash() {
  return (
    <svg className="hidden w-5 h-5 mx-1 text-indigo-600 md:block" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11 0h3L9 20H6l5-20z" />
    </svg>
  )
}

function BackgroundPattern() {
  return (
    <svg
      className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
      width={404}
      height={404}
      fill="none"
      viewBox="0 0 404 404"
      role="img"
      aria-labelledby="svg-workcation"
    >
      <title id="svg-workcation">Workcation</title>
      <defs>
        <pattern
          id="ad119f34-7694-4c31-947f-5c9d249b21f3"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
    </svg>
  )
}