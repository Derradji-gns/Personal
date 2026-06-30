"use client"

import { useState } from "react";

const certifications = [
  {
    id: 1,
    logo: "https://tse2.mm.bing.net/th/id/OIP.kdBobVGnu5Uu9yLi2wSsJgHaHZ?r=0&w=3545&h=3544&rs=1&pid=ImgDetMain&o=7&rm=3",
    issuer: "Huawei Cloud",
    name: "Huawei Certified Cloud service — Associate",
    issuedDate: "Oct 2025",
    expiryDate: "Oct 2028",
    noExpiry: false,
    status: "valid",
    category: "Cloud",
    verifyUrl: "#",
  },
  {
    id: 2,
    logo: "https://networkwalks.com/wp-content/uploads/2020/04/huawei-HCNA_.jpg",
    issuer: "Huawei",
    name: "Huawei Certified Datacom — Associate",
    issuedDate: "Jan 2026",
    expiryDate: "Fev 2029",
    noExpiry: true,
    status: "valid",
    category: "Networking",
    verifyUrl: "#",
  },
  {
    id: 3,
    logo: "https://th.bing.com/th/id/R.b7fc8025c0338f9fb0f163e318f8c081?rik=7B0He0LlfW3ZTQ&pid=ImgRaw&r=0",
    issuer: "The Linux Fondation",
    name: "Kubernetes and Cloud Native Essentials",
    issuedDate: "Mar 2026",
    expiryDate: null,
    noExpiry: true,
    status: "valid",
    category: "DevOps",
    verifyUrl: "#",
  },
  {
    id: 4,
    logo: "https://res-static.hc-cdn.cn/cloudbu-site/china/zh-cn/newHWCdeveloper/kaifazherengzheng1920.png",
    issuer: "Huawei Cloud",
    name: "Huawei Certified Cloud Developer — Associate",
    issuedDate: "Jun 2021",
    expiryDate: "Jun 2024",
    noExpiry: false,
    status: "valid",
    category: "Cloud",
    verifyUrl: "#",
  },
  {
    id: 5,
    logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/639bcaa2445b133a4e942436/CEW-OjXkRkDNmTxSu8Egh.png",
    issuer: "IBM",
    name: "IBM Javascript Full Stack Developer Certificate",
    issuedDate: "Jul 2026",
    expiryDate: null,
    noExpiry: true,
    status: "valid",
    category: "Development",
    verifyUrl: "#",
  },
];

const FILTERS = ["All", "Cloud", "DevOps", "Development", "Networking"];

function StatusBadge({ status }) {
  return status === "valid" ? (
    <span className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
      Valid
    </span>
  ) : (
    <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-400 border border-zinc-200">
      Expired
    </span>
  );
}

function CertCard({ logo, issuer, name, issuedDate, expiryDate, noExpiry, status, category, verifyUrl }) {
  return (
    <div className="group flex flex-col gap-3.5 bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-400 transition-colors duration-150">
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="w-10 h-10 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center text-xl flex-shrink-0">
          <img src={logo} alt="" />
        </div>
        <StatusBadge status={status} />
      </div>

      {/* Body */}
      <div>
        <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">{issuer}</p>
        <p className="text-sm font-medium text-zinc-900 leading-snug">{name}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-xs text-zinc-400">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          </svg>
          Issued {issuedDate}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400">
          {noExpiry ? (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 8v4l2 2"/><circle cx="12" cy="12" r="9"/>
              </svg>
              No expiry
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 8v4l2 2"/><circle cx="12" cy="12" r="9"/>
              </svg>
              {status === "expired" ? "Expired" : "Expires"} {expiryDate}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
        <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-500">
          {category}
        </span>
        <a
          href={verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-500 flex items-center gap-1 hover:underline"
        >
          Verify
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 bg-black sm:py-24">

      {/* ── Hero ── */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span className="text-xs uppercase tracking-widest text-white">
            Credentials
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none">
          My certifications
        </h1>
        <p className="mt-7 text-base text-white leading-7 max-w-lg">
          A collection of certifications and courses I've completed — covering
          cloud infrastructure, Full-stack development, and software engineering.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-4 py-1.5 rounded-full bg-zinc-100 text-black border transition-colors duration-150 ${
                activeFilter === f
                  ? "bg-indigo-50 border-indigo-300 text-indigo-600"
                  : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <div className="border-t border-zinc-200 mb-8" />

      {/* ── Grid ── */}
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <span className="text-sm font-medium text-zinc-900">
            {activeFilter === "All" ? "All certificates" : activeFilter}
          </span>
          <span className="text-xs text-zinc-400">
            {filtered.length} credential{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-400 py-10 text-center">
            No certifications in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((cert) => (
              <CertCard key={cert.id} {...cert} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}