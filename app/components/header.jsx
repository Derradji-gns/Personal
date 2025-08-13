import { cn } from "./ui/lib/utils";
import React from "react";

function GridSmallBackgroundDemo() {
  return (
    <div className="relative flex flex-col h-[40rem] w-full items-center justify-center bg-black dark:bg-black">
      {/* Grid background - darker lines */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient overlay - dark center glow */}
      <div className="pointer-events-none absolute inset-0 bg-black/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Name */}
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-5xl text-center font-bold text-transparent  sm:text-9xl">
        Derradji Amine Abdelbasset
      </p>

      {/* Subtitle */}
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-sm text-center w-[80%] mt-10 font-bold text-transparent">
        Front-end Web developer and ICT Student from Algeria, dedicated to building responsive and user-friendly web interfaces
      </p>
    </div>
  );
}

export default GridSmallBackgroundDemo;
