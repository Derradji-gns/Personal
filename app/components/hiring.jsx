import React from "react";
import { Spotlight } from "./ui/Spotlight";

function SpotlightPreview() {
  return (
    <div
      className="relative flex h-[16rem] w-full mt-20 overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className="bg-black" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1
          className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Hiring Me ?
        </h1>
        <p
          className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Do you want to make your ideas real ? you are in the right place , send me a message and we will make a deal ! 
        </p>
      </div>
    </div>
  );
}


export default SpotlightPreview;