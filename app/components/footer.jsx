"use client"
import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Derradji-gns",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/derradji-amine-abdelbasset?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm7.99 6.408a10.21 10.21 0 0 1 2.312 5.988c-.339-.065-3.732-.758-7.151-.328-.077-.188-.148-.382-.23-.574-.214-.524-.446-1.05-.69-1.56 3.793-1.547 5.523-3.77 5.759-3.526zM12 2.108a9.886 9.886 0 0 1 6.648 2.554c-.198.222-1.76 2.308-5.436 3.676-1.7-3.12-3.585-5.677-3.872-6.064A10.11 10.11 0 0 1 12 2.108zM7.282 2.986c.275.372 2.126 2.94 3.849 6.001C6.64 10.148 2.99 10.12 2.596 10.11A9.942 9.942 0 0 1 7.282 2.986zM2.086 12.02v-.264c.382.009 4.682.063 9.26-1.284.26.503.505 1.013.735 1.524a4.64 4.64 0 0 0-.218.067C7.165 13.49 4.556 17.34 4.344 17.693A9.906 9.906 0 0 1 2.086 12.02zm9.914 9.894a9.87 9.87 0 0 1-6.014-2.03c.171-.338 2.14-4.14 7.367-5.885l.063-.021a34.95 34.95 0 0 1 1.812 6.436 9.9 9.9 0 0 1-3.228.5zm5.14-1.31a37.4 37.4 0 0 0-1.68-6.018c3.237-.517 6.069.33 6.43.44a9.935 9.935 0 0 1-4.75 5.578z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function PortfolioFooter() {
 

  return (
    <footer className=" text-zinc-400 bg-black border-zinc-800">
     

        {/* Divider */}
        <div className="my-5 border-t border-zinc-500" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 justify-center gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="p-2 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all duration-150"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 mb-2 text-xs text-center text-zinc-700">
          © {new Date().getFullYear()} Derradji Amine. v1.7.0
        </p>
      
    </footer>
  );
};
