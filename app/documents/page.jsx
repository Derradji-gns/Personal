"use client"

import { useState } from "react";

const documents = [
  {
    id: 1,
    category: "Networking",

    title: "Design and implementation of Cloud Provider Networks - Using SDN & NFV",
    date: "Jan 2026",
    pages: 11,
    tag: "Cloud & Networks",
    fileUrl: "/docs/SDN.pdf",
  },
  {
    id: 2,
    category: "Web",
    title: "Firebase — Beginner Guide ",
    date: "Jan 2025",
    pages: 13,
    tag: "Web",
    fileUrl: "/docs/Firebase.pdf",
  },
  {
    id: 3,
    category: "Web",
    title: "DNS Service — several web hosting cases",
    date: "Dec 2025",
    pages: 9,
    tag: "Web & Network",
    fileUrl: "/docs/DNS_Search.pdf",
  },
    {
    id: 4,
    category: "Cloud",

    title: "Servers & Cloud Concepts",
    date: "Oct 2025",
    pages: 11,
    tag: "Cloud & Networks",
    fileUrl: "/docs/Cloud_infrastructure.pdf",
  },
  {
    id: 5,
    category: "DevOps",
    title: "Docker Guide",
    date: "Fev 2026",
    pages: 14,
    tag: "DevOps",
    fileUrl: "/docs/Docker_guide.pdf",
  },
];

const FILTERS = ["All", "Cloud", "Web", "Networking", "DevOps"];

/* Mini PDF page illustration rendered in pure divs */
function PdfThumb() {
  return (
    <div className="w-14 bg-white border border-zinc-200 rounded p-1.5 flex flex-col gap-1">
      {[80, 55, 80, 55, 80, 55].map((w, i) => (
        <div
          key={i}
          className="h-[3px] rounded-full bg-zinc-300"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

function DocCard({ category, title, date, pages, tag, fileUrl }) {
  return (
    <div className="group flex flex-col bg-zinc-100 border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-400 transition-colors duration-150">

      {/* Thumbnail */}
      <div className="relative h-32 bg-zinc-50 border-b border-zinc-200 flex items-center justify-center">
        <PdfThumb />
        {/* PDF badge */}
        <span className="absolute bottom-2.5 right-2.5 flex items-center justify-center w-6 h-6 rounded-md bg-red-50 border border-red-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5 text-red-500">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="9" y1="13" x2="15" y2="13"/>
            <line x1="9" y1="17" x2="12" y2="17"/>
          </svg>
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2.5 p-4 flex-1">
        <span className="text-xs uppercase tracking-wider text-zinc-400">
          {category}
        </span>
        <p className="text-sm font-medium text-zinc-900 leading-snug">
          {title}
        </p>
        <div className="flex items-center gap-3 text-xs text-zinc-400 mt-auto pt-1">
          {/* Calendar */}
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            {date}
          </span>
          {/* Pages */}
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            {pages} pages
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-100">
        <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-500">
          {tag}
        </span>
        <a
          href={fileUrl}
          download
          className="flex items-center gap-1 text-xs text-indigo-500 hover:underline"
          aria-label={`Download ${title}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}

export default function DocumentationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? documents
      : documents.filter((d) => d.category === activeFilter);

  return (
    <main className="max-w-4xl bg-black mx-auto px-6 py-16 sm:py-24">

      {/* ── Hero ── */}
      <section className="mb-10 mt-[60px]">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-xs uppercase tracking-widest text-white">
           Developer Resources
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
          Documentation
        </h1>
        <p className="mt-3 text-base text-white leading-7 max-w-lg">
          Technical write-ups, architecture notes, and project docs I've
          authored — available to read or download.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-4 py-1.5 rounded-full  border transition-colors duration-150 ${
                activeFilter === f
                  ? "bg-blue-400 border-white text-white"
                  : "border-white text-white hover:border-zinc-400 "
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <div className="border-t border-zinc-200 mb-7" />

      {/* ── Section header ── */}
      <div className="flex items-baseline justify-between mb-5">
        <span className="text-sm font-medium text-white">
          {activeFilter === "All" ? "All documents" : activeFilter}
        </span>
        <span className="text-xs text-zinc-400">
          {filtered.length} file{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <p className="text-sm text-zinc-400 py-12 text-center">
          No documents in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc) => (
            <DocCard key={doc.id} {...doc} />
          ))}
        </div>
      )}
    </main>
  );
}