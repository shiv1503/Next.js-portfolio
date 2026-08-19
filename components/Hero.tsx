"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function loop() {
      const word = siteConfig.roles[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timeout = setTimeout(loop, 1400);
          return;
        }
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % siteConfig.roles.length;
        }
      }
      timeout = setTimeout(loop, deleting ? 40 : 75);
    }
    loop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="wrap grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-center min-h-[calc(100vh-64px)] py-16"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div>
        <h1 className="text-[clamp(38px,5.4vw,64px)] leading-[1.03] mb-4">
          <span className="block text-muted font-medium text-[0.4em] mb-2 tracking-widest">
            Hi, I&apos;m
          </span>
          {siteConfig.name}
        </h1>

        <div
          className="mono text-[clamp(16px,2vw,20px)] text-amber min-h-[1.6em] mb-5"
          aria-live="polite"
        >
          {text}
          <span className="inline-block w-[9px] bg-amber ml-0.5 animate-blink">
            &nbsp;
          </span>
        </div>

        <p className="text-muted max-w-[52ch] text-base mb-8">
          Aspiring software developer and MCA graduate who likes building things
          that watch, learn and organize — a computer-vision safety app, a KNN
          recommender, a contacts dashboard. Comfortable across Java, Python and
          React, with a soft spot for backend logic and data.
        </p>

        <div className="flex gap-3.5 flex-wrap mb-8">
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a
            href={siteConfig.resumeUrl}
            download="ATS_Resume_Shivendu_Nagar.pdf"
            className="btn btn-ghost"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-4" aria-label="Social links">
          <a
            href={siteConfig.github}
            aria-label="GitHub profile"
            title={
              siteConfig.github === "#" ? "Add your GitHub link" : "GitHub"
            }
            className="w-[38px] h-[38px] border border-border rounded-[2px] flex items-center justify-center mono text-xs text-muted hover:text-teal hover:border-teal transition-colors"
          >
            GH
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn profile"
            className="w-[38px] h-[38px] border border-border rounded-[2px] flex items-center justify-center mono text-xs text-muted hover:text-teal hover:border-teal transition-colors"
          >
            IN
          </a>
          <a
            href={siteConfig.twitter}
            aria-label="X / Twitter profile"
            title={siteConfig.twitter === "#" ? "Add your X link" : "X"}
            className="w-[38px] h-[38px] border border-border rounded-[2px] flex items-center justify-center mono text-xs text-muted hover:text-teal hover:border-teal transition-colors"
          >
            X
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div
          className="relative w-[min(280px,80vw)] h-[min(280px,80vw)] flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />
          <div className="w-[78%] h-[78%] rounded-full border border-border relative overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_35%_30%,#1b2229,#0d1114_75%)]">
            <div className="scan-line animate-scan" />
            <span className="display font-bold text-[64px] text-ink opacity-90">
              SN
            </span>
          </div>
        </div>
        <div className="mono text-[11px] text-muted tracking-widest uppercase">
          Tracking <span className="text-teal">status: active</span>
        </div>

        <div
          className="mt-2 w-[min(300px,84vw)] bg-panel border border-border rounded-[2px] overflow-hidden"
          aria-hidden="true"
        >
          <div className="flex gap-1.5 px-3 py-2 bg-panel2 border-b border-border">
            <span className="w-[9px] h-[9px] rounded-full bg-border" />
            <span className="w-[9px] h-[9px] rounded-full bg-border" />
            <span className="w-[9px] h-[9px] rounded-full bg-border" />
          </div>
          <div className="p-3.5 mono text-[12.5px] text-muted">
            <div>
              <span className="text-teal">$</span> whoami
            </div>
            <div className="text-ink">shivendu_nagar — dev, noida</div>
            <div>
              <span className="text-teal">$</span> cat skills.txt | head -3
            </div>
            <div className="text-ink">java · python · react</div>
          </div>
        </div>
      </div>
    </section>
  );
}
