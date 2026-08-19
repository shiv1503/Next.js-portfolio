import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import CaseStudyLayout from "@/components/CaseStudyLayout";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.outcome,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.outcome,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <CaseStudyLayout project={project} />;
}
