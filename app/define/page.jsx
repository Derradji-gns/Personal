

export default function page() {
  return (
    <main className="max-w-4xl mx-auto  px-6 bg-black py-16 sm:py-24">

      {/* ── Hero ── */}
      <section className="pb-14 border-b mt-[60px] border-zinc-200">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs uppercase tracking-widest text-white">
            About the developer
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none text-white">
          Hi, I'm{" "}
          <span className="text-zinc-500">Derradji Abdelbasset</span>
        </h1>

        {/* Role */}
        <p className="mt-7 text-lg text-zinc-200 font-normal">
          Full-stack developer · ICT Student
        </p>

        {/* Bio */}
        <p className="mt-5 text-base text-white leading-7 max-w-xl">
          My name is Derradji Amine Abdelbasset, algerian ICT student interested in networking and software engineering, I am a junior Full stack web developer and I use JS technologies to build performed platforms and websites with friendly and modern UIs for different scenarios.
        </p>

        {/* CTAs */}

         <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-zinc-500 hover:bg-zinc-600 text-white text-sm font-medium transition-colors duration-150"
          >
            View my work
          </a>
          <a
            href="mailto:derradjiamineabdelbaset@gmail.com"
            className="px-5 py-2.5 rounded-lg border border-zinc-300 bg-zinc-100 hover:bg-zinc-50 text-zinc-800 text-sm font-medium transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>

        
      </section>

      <div className="section">
        
        {/* Bio */}
        <h1 className="mt-10 text-2xl font-medium text-white ">Development</h1>
        <p className="mt-3 text-base text-white leading-7 max-w-xl">
          I can develop web solutions matchs the requirments of modern development using Docker, Kubernetes and micro-services architect. <br />
          I am able to realise a full cloud infrastructure using poviders's  for sevral cases like web hosting and basic scenarios
        </p>

        {/* CTAs */}

        {/* Bio */}
        <p className="mt-3 text-base text-white leading-7 max-w-xl">
           I am a Third year student at <strong> Higher National School of Telecommunications and ICT -ENSTTIC- </strong> and Huwaei Certified Network Associate looking for strenght my knowledge in networking and data communication
        </p>

        {/* CTAs */}
      </div>

     

    </main>
  );
}