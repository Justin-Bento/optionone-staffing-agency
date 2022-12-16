import Link from "next/link";
import React from "react";
import { BlogCardInterface } from "../typings";

export default function BlogCard(props: BlogCardInterface) {
  return (
    <article className="border rounded">
      <section className="">
        {/* This div represents an the image for the card */}
        <img src={props.Image} className="w-full h-64 bg-gray-700 rounded-t" />
      </section>
      <section className="px-6 py-4">
        <h2 className="text-xl font-bold">{props.Headline}</h2>
        <p className="mt-2 text-base font-medium text-slate-600 max-w-prose">{props.Subhead}</p>
        <p className="mt-2 text-base font-normal text-slate-600 max-w-prose">{props.Supporting}</p>
      </section>
      <hr className="" />
      <section className="px-6 py-4">
      <Link href={props.Path} className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-blue-700 border border-blue-700 rounded appearance-none cursor-pointer select-none shrink-0 hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Learn More
      </Link>
      </section>
    </article>
  );
}
