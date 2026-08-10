"use client"
import { useRef } from "react";
import ServicesPanel from "../components/servicePanel";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Waypoints,
  Rocket,
  BookOpen,
  Bot,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    icon: FileText,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Admin Dashboard - ERP",
    description:
      "CoreLink is an ERP solution designed to streamline business operations by organizing tasks such as authentication, data management, reporting, and collaboration into a scalable backend architecture.",
    tags: ["authentication", "Dashboard", "Integrated portal"],
    link: "https:/core-link-nu.vercel.app",
  },
  {
    id: 2,
    icon: Waypoints,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    title: "SDN-WEB Sumilation Platform",
    description:
      "A web-based SDN platform that simulates shortest path routing using advanced algorithms and complex logic to demonstrate intelligent network control.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "http://sdn-web.vercel.app",
  },
  {
    id: 3,
    icon: Rocket,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Landing Page",
    description:
      "A clean, focused entry point designed to capture attention and drive user action",
    tags: ["Shopify", "Remix"],
    link: "https://landing-page44.vercel.app",
  },
  {
    id: 4,
    icon: BookOpen,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Educational Platform",
    description:
      "A platform delivering IT courses across diverse domains to make learning simple and accessible.",
    tags: ["React.js", "Firebase"],
    link: "https://igenergystudentclub.github.io/Platform/",
  },
  {
    id: 5,
    icon: Bot,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Scientific Club Website",
    description:
      "Collaborative website for a scientific club, designed to share research, publish articles, and organize events that connect students and professionals across multiple scientific domains",
    tags: ["React.js", "Tailwind"],
    link: "https://igenergystudentclub.github.io/Website/",
  },
];

function ProjectCard({ icon: Icon, iconBg, iconColor, title, description, tags, link }) {
  return (
    <Card className="group relative flex flex-col justify-between gap-4 rounded-xl border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-200">
      <CardHeader className="gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg} ${iconColor} ring-1 ring-inset ring-black/5`}
        >
          <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
        </div>
        <div>
          <CardTitle className="text-sm font-medium text-zinc-900">{title}</CardTitle>
          <CardDescription className="text-sm text-zinc-500 leading-relaxed mt-1">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex items-center justify-between pt-3 border-t border-zinc-100">
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-normal hover:bg-zinc-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          asChild
          size="icon"
          variant="outline"
          className="w-8 h-8 rounded-full border-zinc-200 text-zinc-500 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200"
        >
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
          </a>
        </Button>
      </CardFooter>
    </Card>
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
          <Button
            onClick={() => panelRef.current?.toggle()}
            className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors duration-150 h-auto"
          >
            Explore Services
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-5 py-2.5 rounded-lg border border-zinc-300 bg-zinc-100 hover:bg-white text-zinc-800 text-sm font-medium transition-colors duration-150 h-auto"
          >
            <a href="mailto:derradjiamineabdelbaset@gmail.com">Hire Me ?</a>
          </Button>
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