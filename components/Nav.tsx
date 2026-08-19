"use client";

import { useState } from "react";
import { navLinks } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-[rgba(10,13,16,0.85)] backdrop-blur-md"
      data-open={open}
    >
      <div className="wrap flex items-center justify-between h-16">
        <a href="#home" className="mono font-semibold text-[15px] tracking-wide border border-border px-2.5 py-1.5">
          [<b className="text-amber">SN</b>]
        </a>

        <nav aria-label="Primary" className="hidden md:flex gap-7 items-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-[13px] text-muted tracking-wide hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 mono text-xs text-teal">
          <span className="w-[7px] h-[7px] rounded-full bg-teal shadow-[0_0_8px_var(--teal)] animate-pulse2" />
          OPEN TO WORK
        </div>

        <button
          className="md:hidden w-10 h-10 border border-border text-ink rounded-[2px]"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-[18px] h-[2px] bg-ink mx-auto my-[4px]" />
          <span className="block w-[18px] h-[2px] bg-ink mx-auto my-[4px]" />
          <span className="block w-[18px] h-[2px] bg-ink mx-auto my-[4px]" />
        </button>
      </div>

      {open && (
        <nav id="mobileMenu" aria-label="Mobile" className="wrap flex flex-col gap-4 py-4 border-t border-border md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
