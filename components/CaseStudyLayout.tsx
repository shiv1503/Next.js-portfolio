import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <article className="wrap py-24 max-w-[820px]">
      <Link href="/#projects" className="mono text-xs text-muted hover:text-teal">
        ← Back to projects
      </Link>

      <div className="eyebrow mt-8">Case Study</div>
      <h1 className="text-[38px] mb-1.5">{project.title}</h1>
      <div className="mono text-xs text-amber mb-9">{project.status}</div>

      <div className="mb-7">
        <h2 className="mono text-xs uppercase tracking-wide text-teal mb-2.5">Problem &amp; User Context</h2>
        <p className="text-muted text-[14.5px]">{project.caseStudy.problem}</p>
      </div>

      <div className="mb-7">
        <h2 className="mono text-xs uppercase tracking-wide text-teal mb-2.5">Constraints &amp; Tradeoffs</h2>
        <p className="text-muted text-[14.5px]">{project.caseStudy.constraints}</p>
      </div>

      <div className="mb-7">
        <h2 className="mono text-xs uppercase tracking-wide text-teal mb-2.5">Architecture / Data Flow</h2>
        {/* Plain-text diagram for now — swap for an actual diagram image or
            embedded SVG under /public/projects once one exists. */}
        <div className="diagram-box">{project.caseStudy.architecture}</div>
      </div>

      <div className="mb-7">
        <h2 className="mono text-xs uppercase tracking-wide text-teal mb-2.5">Results &amp; Lessons</h2>
        <p className="text-muted text-[14.5px]">{project.caseStudy.results}</p>
      </div>

      <div className="flex gap-5 mono text-[13px] mt-9">
        {project.repoUrl && (
          <a href={project.repoUrl} title={project.repoUrl === "#" ? "Add your GitHub repo link" : "Repository"} className="hover:text-amber">
            GitHub repository →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} title={project.liveUrl === "#" ? "Add your live demo link" : "Live demo"} className="hover:text-amber">
            Live demo →
          </a>
        )}
      </div>
    </article>
  );
}
