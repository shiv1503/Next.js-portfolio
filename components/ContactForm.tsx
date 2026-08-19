"use client";

import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to Formspree, EmailJS, or your own API route
    // (e.g. app/api/contact/route.ts) to actually receive messages.
    alert("Demo form — connect this to Formspree, EmailJS, or your own backend to receive messages.");
  }

  return (
    <section id="contact">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <div className="eyebrow">Contact</div>
          <h2 className="text-[32px] mb-4">Interested in working together?</h2>
          <p className="text-muted max-w-[44ch] mb-6">
            Open to full-time roles, internships, and freelance or backend collaboration. If a
            project needs someone who&apos;ll actually read the whole spec, I&apos;m around.
          </p>

          <div className="mono text-[14.5px] flex items-center gap-3 mb-4">
            ✉{" "}
            <a href={`mailto:${siteConfig.email}`} className="border-b border-border hover:border-teal hover:text-teal">
              {siteConfig.email}
            </a>
          </div>
          <div className="mono text-[14.5px] flex items-center gap-3 mb-4">
            ☎{" "}
            <a href={`tel:${siteConfig.phoneHref}`} className="border-b border-border hover:border-teal hover:text-teal">
              {siteConfig.phone}
            </a>
          </div>
          <div className="mono text-[14.5px] flex items-center gap-3 mb-4">
            ↗{" "}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener"
              className="border-b border-border hover:border-teal hover:text-teal"
            >
              linkedin.com/in/shivendu-nagar
            </a>
          </div>
          <div className="mono text-[14.5px] flex items-center gap-3 mb-4">⌖ {siteConfig.location}</div>

          <div className="mt-6 border-l-2 border-teal pl-3.5 text-[13px] text-muted">
            Usually responds within 24–48 hours.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-name" className="mono text-[11px] text-muted uppercase tracking-wide">
              Name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="bg-panel border border-border rounded-[2px] text-ink px-3.5 py-3 text-sm focus:border-teal outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-email" className="mono text-[11px] text-muted uppercase tracking-wide">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="bg-panel border border-border rounded-[2px] text-ink px-3.5 py-3 text-sm focus:border-teal outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-msg" className="mono text-[11px] text-muted uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="cf-msg"
              name="message"
              required
              rows={5}
              className="bg-panel border border-border rounded-[2px] text-ink px-3.5 py-3 text-sm focus:border-teal outline-none resize-y"
            />
          </div>
          <button type="submit" className="btn btn-primary self-start">
            Send Message
          </button>
          <p className="text-xs text-muted">
            This form is a UI template — wire it to Formspree, EmailJS, or your own API route to
            make it functional.
          </p>
        </form>
      </div>
    </section>
  );
}
