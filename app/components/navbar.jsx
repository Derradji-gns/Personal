"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser, IconBriefcaseFilled, IconFolderOpen} from "@tabler/icons-react";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "portfolio",
      link: "/portfolio",
      icon: (
        <IconBriefcaseFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "portfolio",
      link: "/portfolio",
      icon: (
        <IconFolderOpen className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

