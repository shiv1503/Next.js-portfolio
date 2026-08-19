import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Software Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#35d0a3",
            }}
          />
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#ffb020", textTransform: "uppercase" }}>
            Developer Portfolio
          </div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 30, color: "#8b96a0", marginTop: 20, maxWidth: 820 }}>
          {siteConfig.role} — Java, Python, React &amp; computer vision projects
        </div>
      </div>
    ),
    { ...size }
  );
}
