import React from "react";
import Link from "next/link";
import { ServiceCardInterface } from "../typings";
import { HiChevronRight } from "react-icons/hi";

export default function ServiceCard(props: ServiceCardInterface) {
  return (
    <Link href={`/services/${props.Path}`} className="relative w-full h-64 rounded-lg">
      <img src={props.Image} alt="" className="absolute z-0 object-cover w-full h-64 rounded-lg" />
      <div className="absolute z-0 w-full h-64 transition-all rounded-lg bg-gray-900/70 hover:bg-gray-900/60 active:bg-gray-900/60"></div>
      <div className="text-gray-50">
        <div className="absolute bottom-0 left-0 p-8">
        <h2 className="text-xl font-bold capitalize">{props.Headline}</h2>
        <p className="">{props.Supporting}</p>
        <button className="inline-flex gap-2">
          Learn More
          <HiChevronRight />
        </button>
      </div>
      </div>
    </Link>
  );
}
