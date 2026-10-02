"use client";

import { useEffect } from "react";
import GridSmallBackgroundDemo from "./components/header";
import Tasks from "./components/task";
import SkillsLoop from "./components/skillsLoop";
import LastHero from "./components/last-hero";

export default function Home() {
  useEffect(() => {
    fetch("/api/ip").catch(console.error);
  }, []);

  return (
    <div className="bg-black overflow-x-hidden h-auto">
      <GridSmallBackgroundDemo />
      <SkillsLoop />
      <Tasks />
      <LastHero />
    </div>
  );
}