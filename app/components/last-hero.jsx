"use client"

import { useState } from "react";


export default function LastHero() {

    const [copied, setCopied] = useState(false);
      const email = "derradjiamineabdelbaset@gmail.com";

    const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


    return (

             <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left: identity */}
          <div className="space-y-3">
            <p className="text-xs text-center uppercase  tracking-widest text-neutral-400 font-medium">
              Open to work
            </p>
            <h2 className="text-3xl text-center font-bold text-white mt-5 leading-tight">
              Ready to bring your <span className="text-neutral-400 ">idea</span><br></br> to <span className="text-neutral-400 ">life</span> ?
            </h2>
            <p className="text-sm text-center mt-5 text-zinc-500 ">
              Available for freelance and part-time opportunities. <br></br> Let's discuss your next project !
            </p>
          </div>

          {/* Right: email CTA */}
          <div className="flex flex-col  items-center md:items-end gap-3">
            <span className="text-xs text-neutral-400 text-center uppercase tracking-widest">
              Get in touch
            </span>
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-neutral-400 text-white text-sm font-medium transition-all duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-4 h-4"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {copied ? "Copied!" : email}
            </button>
          </div>
        </div>
        </div>

    );
}