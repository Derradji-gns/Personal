"use client"
import LogoLoop from './ui/loop';
import { SiReact, SiNextdotjs, SiNodedotjs,SiHuawei,SiGit,SiGithub, SiSupabase, SiFirebase,  SiKubernetes, SiExpress,SiMongodb, SiTailwindcss, SiDocker } from 'react-icons/si';


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs/>, title: "Nodejs", href: "https://www.nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "Github", href: "https://github.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
    { node: <SiHuawei />, title: "Huawei Cloud", href: "https://www.huaweicloud.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
];

// Alternative with image sources

export default function SkillsLoop() {
  return (
    <div className="container">
        <div className="py-3 flex items-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 mb-10 ">Materials</div>
    <div style={{ height: 'auto', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        className="text-white bg-black"
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        
        
        ariaLabel="Technology partners"
      />
    </div>
    </div>
  );
}