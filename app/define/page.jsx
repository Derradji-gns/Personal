const projects = [
  {
    id: 1,
    icon: "🧩",
    iconBg: "bg-indigo-50",
    title: "DesignKit UI",
    description:
      "Open-source component library built with React and Tailwind. 40+ components, dark mode, and full a11y coverage.",
    tags: ["React", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    icon: "📊",
    iconBg: "bg-green-50",
    title: "Trackly",
    description:
      "Habit tracking app with streak analytics. Built in 48h during a solo hackathon. 1.2k active users.",
    tags: ["Next.js", "Prisma"],
    link: "#",
  },
  {
    id: 3,
    icon: "🤖",
    iconBg: "bg-purple-50",
    title: "DocChat",
    description:
      "Upload any PDF and chat with it using the Claude API. Streams responses in real time with source highlighting.",
    tags: ["AI", "TypeScript"],
    link: "#",
  },
  {
    id: 4,
    icon: "🛒",
    iconBg: "bg-orange-50",
    title: "Storefronts",
    description:
      "Headless e-commerce starter on top of Shopify. Optimized for Core Web Vitals — 98 Lighthouse score.",
    tags: ["Shopify", "Remix"],
    link: "#",
  },
];

function ProjectCard({ icon, iconBg, title, description, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 transition-colors duration-150"
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${iconBg}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-medium text-zinc-900 mb-1">{title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-indigo-500 group-hover:underline">
          View ↗
        </span>
      </div>
    </a>
  );
}

export default function page() {
  return (
    <main className="max-w-4xl mx-auto px-6 bg-black py-16 sm:py-24">

      {/* ── Hero ── */}
      <section className="pb-14 border-b border-zinc-200">
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

        {/* Bio */}
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
        
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="pt-12">
        <div className="flex items-baseline justify-between mb-7">
          <h2 className=" font-medium text-white">
            Main Projects
          </h2>
          <span className="text-xs text-zinc-400">
            {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

    </main>
  );
}