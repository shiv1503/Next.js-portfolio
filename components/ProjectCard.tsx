import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-card">
      <div className="p-shot">
        {project.image ? (
          // Drop a real screenshot in /public/projects/<slug>.png and set `image`
          // in lib/projects.ts to replace this placeholder.
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxMjE3MWMiLz48L3N2Zz4="
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span className="p-tag mono">{project.cardLabel}</span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[21px] mb-2">{project.title}</h3>
        <p className="mono text-[13px] text-teal mb-2.5">{project.outcome}</p>
        <p className="text-muted text-sm mb-4 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3.5 items-center mono text-[12.5px]">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              title={project.repoUrl === "#" ? "Add your GitHub repo link" : "Repository"}
              className="hover:text-amber transition-colors"
            >
              Repo ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              title={project.liveUrl === "#" ? "Add your live demo link" : "Live demo"}
              className="hover:text-amber transition-colors"
            >
              Live ↗
            </a>
          )}
          <Link href={`/projects/${project.slug}`} className="hover:text-amber transition-colors">
            Case study →
          </Link>
        </div>
      </div>
    </article>
  );
}
