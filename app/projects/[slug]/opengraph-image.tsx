import { ImageResponse } from "next/og";
import { projects, getProjectBySlug } from "@/lib/projects";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  const title = project?.title ?? "Case Study";
  const outcome = project?.outcome ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0d10",
          color: "#e8ecef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 4, color: "#ffb020", textTransform: "uppercase" }}>
          Case Study
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 20, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 26, color: "#8b96a0", marginTop: 18, maxWidth: 860 }}>{outcome}</div>
      </div>
    ),
    { ...size }
  );
}
