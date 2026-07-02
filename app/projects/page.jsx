"use client"
import { useRef } from "react";
import ServicesPanel from "../components/servicePanel";

const projects = [
  {
    id: 1,
    icon: "🔀",
    iconBg: "bg-indigo-50",
    title: "SDN-WEB Sumilation Platform",
    description:
      "A web-based SDN platform that simulates shortest path routing using advanced algorithms and complex logic to demonstrate intelligent network control.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "http://sdn-web.vercel.app",
  },
  {
    id: 2,
    icon: "🛒",
    iconBg: "bg-orange-50",
    title: "Storefronts",
    description:
      "Headless e-commerce starter on top of Shopify. Optimized for Core Web Vitals — 98 Lighthouse score.",
    tags: ["Shopify", "Wordpress", "custom"],
    link: "#",
  },
  {
    id: 3,
    icon: "🚀",
    iconBg: "bg-orange-100",
    title: "Landing Page",
    description:
      "A clean, focused entry point designed to capture attention and drive user action",
    tags: ["Shopify", "Remix"],
    link: "https://landing-page44.vercel.app",
  },
  {
    id: 4,
    icon: "📖",
    iconBg: "bg-zinc-200",
    title: "Educational Platform",
    description:
      "A platform delivering IT courses across diverse domains to make learning simple and accessible.",
    tags: ["React.js", "Firebase"],
    link: "https://igenergystudentclub.github.io/Platform/",
  },
  {
    id: 5,
    icon: "🤖",
    iconBg: "bg-purple-50",
    title: "Scientific Club Website",
    description:
      "Collaborative website for a scientific club, designed to share research, publish articles, and organize events that connect students and professionals across multiple scientific domains",
    tags: ["React.js", "Tailwind"],
    link: "https://igenergystudentclub.github.io/Website/",
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
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-zinc-900 mb-1">{title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-600">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-indigo-500 group-hover:underline">View ↗</span>
      </div>
    </a>
  );
}

export default function PortfolioPage() {
  const panelRef = useRef();

  return (
    <main className="max-w-4xl bg-black mx-auto px-6 py-16 sm:py-24">

      {/* ── Hero ── */}
      <section className="mb-12 mt-[60px]">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <span className="text-xs uppercase tracking-widest text-white">
            Developer Projects
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
          My Projects
        </h1>
        <p className="mt-5 text-base text-white leading-7 max-w-lg">
          Each project I build reflects my journey as a junior software engineer and full stack
          developer. From web applications to cloud-based solutions, I focus on creating tools
          that are scalable, accessible, and practical. My work often combines React, Next.js,
          Node.js, and Express with modern infrastructure like Docker and Kubernetes, ensuring
          that ideas move seamlessly from concept to deployment.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* ✅ Wired to ServicesPanel via ref */}
          <button
            onClick={() => panelRef.current?.toggle()}
            className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors duration-150"
          >
            Explore Services
          </button>

          <a
            href="mailto:derradjiamineabdelbaset@gmail.com"
            className="px-5 py-2.5 rounded-lg border border-zinc-300 bg-zinc-100 hover:bg-white text-zinc-800 text-sm font-medium transition-colors duration-150"
          >
            Hire Me ?
          </a>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="pt-12 border-t text-white">
        <div className="flex items-baseline justify-between mb-7">
          <h2 className="text-sm font-medium text-white">Selected projects</h2>
          <span className="text-xs text-zinc-400">{projects.length} projects</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* ✅ ServicesPanel — controlled externally by panelRef */}
      <ServicesPanel
        ref={panelRef}
        onServiceClick={(s) => console.log("Selected service:", s.name)}
      />

    </main>
  );
}