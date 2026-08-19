# Shivendu Nagar — Portfolio (Next.js)

A production-ready developer portfolio built with the Next.js App Router,
TypeScript, and Tailwind CSS. Same HUD/viewfinder design language as the
original single-file prototype, split into reusable data-driven components.

## Structure

```
app/
  layout.tsx              Root layout — fonts, global <head> metadata, Nav/Footer
  page.tsx                Homepage — assembles all sections
  globals.css              Design tokens (CSS vars) + shared component classes
  opengraph-image.tsx      Homepage OG image (generated at build time)
  not-found.tsx            Custom 404
  projects/[slug]/
    page.tsx                Case study route — generateStaticParams + generateMetadata
    opengraph-image.tsx      Per-project OG image

components/
  Nav.tsx, Hero.tsx, About.tsx, SkillsGrid.tsx,
  ProjectGrid.tsx, ProjectCard.tsx, CaseStudyLayout.tsx,
  OpenSource.tsx, Timeline.tsx, ContactForm.tsx, Footer.tsx

lib/
  site.ts        Name, contact info, social links, nav links
  projects.ts     Single source of truth for the project grid + case studies
  skills.ts       Skill categories
  timeline.ts     Education/certification timeline + stat numbers

public/
  projects/       Drop project screenshots here (see README.txt inside)
  resume.pdf      Add your resume here to power the "Download Resume" button
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customizing

- **Contact info / social links** → `lib/site.ts`
- **Projects, tags, case-study copy** → `lib/projects.ts` (this feeds both the
  grid on the homepage and every `/projects/[slug]` route automatically)
- **Skills** → `lib/skills.ts`
- **Education / certifications / stat numbers** → `lib/timeline.ts`
- **Colors, fonts, spacing tokens** → CSS variables at the top of
  `app/globals.css`, referenced throughout via Tailwind arbitrary values
  (`text-amber`, `bg-panel`, etc. are mapped in `tailwind.config.ts`)

## Adding real project images

Drop a screenshot in `public/projects/<slug>.png`, then set:

```ts
// lib/projects.ts
{
  slug: "safe-drive-application",
  image: "/projects/safe-drive-application.png",
  ...
}
```

`ProjectCard` automatically renders it via `next/image` with a blur
placeholder instead of the CSS placeholder pattern.

## Wiring up the contact form

`components/ContactForm.tsx` is a UI-only template. To make it functional,
either:

- Point it at a form endpoint service (Formspree, Getform, EmailJS), or
- Add a Next.js API route (`app/api/contact/route.ts`) that emails you or
  writes to a database, and `fetch()` it from the form's `onSubmit`.

## SEO / metadata

- Global metadata (title template, description, OG defaults) lives in
  `app/layout.tsx`.
- Each case-study route generates its own `<title>` and OG description via
  `generateMetadata()` in `app/projects/[slug]/page.tsx`.
- OG images are generated at build time with `next/og` — no external image
  assets required. Edit the JSX in `opengraph-image.tsx` files to restyle them.
- Update `siteConfig.url` in `lib/site.ts` to your real deployed domain before
  shipping — it's used as `metadataBase` for absolute OG/canonical URLs.

## Deployment

The path of least resistance is Vercel:

1. Push this repo to GitHub.
2. Import it at vercel.com — zero config needed for Next.js.
3. Add your real domain in `lib/site.ts` (`siteConfig.url`) and redeploy.

## Notes / TODOs left in the code

- `lib/site.ts` — `github` and `twitter` are placeholder `"#"` links.
- Each project in `lib/projects.ts` has placeholder `repoUrl`/`liveUrl` of
  `"#"` — replace with real links as repos go public / demos go live.
- `OpenSource.tsx` renders a deterministic placeholder contribution grid —
  swap for a real GitHub contributions embed once the profile is public.
