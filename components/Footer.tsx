import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <p className="mono text-xs text-muted">
        // built by {siteConfig.name} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
