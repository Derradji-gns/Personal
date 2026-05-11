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
    <div className="w-full h-[200px] mb-15">
        <div className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text  text-4xl font-bold text-transparent  text-center mb-10">Materials</div>
    <div style={{ height: 'auto', position: 'relative', overflow: 'hidden'}}>
      

      <LogoLoop
        logos={techLogos}
        className="text-neutral-400 mt-5"
        speed={80}
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