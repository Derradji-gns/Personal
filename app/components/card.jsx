
import React from "react";
import { Meteors } from "./ui/meteors";

function MeteorsDemo({title, desc, link, src}) {
  return (
    <div className=" flex justify-center ">
      <article
  className="rounded-lg border  p-4 w-[90%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition hover:shadow-lg sm:p-6 border-gray-800 bg-gray-900 dark:shadow-gray-700/25"
>
  <div className="flex items-center gap-4 mt-2 mb-2">
  <span className="inline-block   rounded-sm text-white ">
    <img className="w-auto h-8 rounded-sm" src={src} alt="" />
 
</span>
  <a href="#">
    <h3 className=" text-lg font-medium text-white">
      {title}
    </h3>
  </a> </div>

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
    {desc}
  </p>

  <a href={link} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Find out more

    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
      &rarr;
    </span>
  </a>
</article>
    </div>
  );
}

export default MeteorsDemo;
