import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Projects</div>
          <h2>Featured builds</h2>
          <p>
            Four projects, four different problems — a recommender, a dashboard, a safety system,
            and a community app still in motion.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
