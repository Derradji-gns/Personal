"use client"

import { useState, forwardRef, useImperativeHandle } from "react";

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
    name: "WordPress development",
    desc: "Custom themes, plugins, and full site builds",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    name: "Shopify store setup",
    desc: "Storefronts, product pages, and checkout flows",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    name: "Landing page design",
    desc: "High-converting pages built from scratch",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    iconBg: "bg-orange-50",
    iconColor: "text-orange-700",
    name: "Custom web app",
    desc: "React, Next.js, and full-stack applications",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    name: "UI/UX design",
    desc: "Wireframes, prototypes, and design systems",
  },
];

function ServiceRow({ icon, iconBg, iconColor, name, desc }) {
  return (
    <div className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors duration-100 cursor-pointer group">
      <div
        className={`w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center flex-shrink-0 ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-zinc-900 leading-tight">{name}</p>
        <p className="text-xs text-zinc-400 mt-0.5">{desc}</p>
      </div>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-500 flex-shrink-0 transition-colors duration-100"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  );
}

const ServicesPanel = forwardRef(function ServicesPanel({ onServiceClick }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open:   () => setIsOpen(true),
    close:  () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  }));

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Backdrop — click outside to close */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Panel — centered in viewport */}
      <div
        role="dialog"
        aria-label="Services panel"
        aria-hidden={!isOpen}
        className={`
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
          w-full max-w-sm px-4
          transition-all duration-300 origin-center
          ${isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-zinc-900">
              What I can build for you
            </p>
            <button
              onClick={close}
              aria-label="Close services panel"
              className="w-6 h-6 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-50 transition-colors duration-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Service rows */}
          <div className="flex flex-col gap-0.5">
            {services.map((s) => (
              <div
                key={s.id}
                onClick={() => {
                  onServiceClick?.(s);
                  close();
                }}
              >
                <ServiceRow {...s} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
});

export default ServicesPanel;