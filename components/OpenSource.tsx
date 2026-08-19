import { siteConfig } from "@/lib/site";

// Deterministic placeholder cells so server and client render identically.
// Swap this whole block for a real embed (e.g. github-readme-stats or a
// contributions-graph API) once the GitHub profile is public.
function placeholderCells() {
  const cells = [];
  for (let i = 0; i < 26 * 7; i++) {
    const v = (i * 37) % 100;
    const bg =
      v > 85 ? "var(--teal)" : v > 65 ? "#1c6b52" : v > 40 ? "#173029" : "var(--panel-2)";
    cells.push(bg);
  }
  return cells;
}

export default function OpenSource() {
  const cells = placeholderCells();

  return (
    <section id="opensource">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Open Source</div>
          <h2>GitHub activity</h2>
          <p>Contribution graph and public work — swap in your live GitHub embed once the profile is public.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-panel border border-border p-5" aria-label="GitHub contribution graph placeholder">
            <div className="grid grid-cols-[repeat(26,1fr)] gap-[3px]">
              {cells.map((bg, i) => (
                <i key={i} className="block pt-[100%] rounded-[1px]" style={{ background: bg }} />
              ))}
            </div>
          </div>

          <div>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                Entertainment Buddy, Personal Dashboard, Safe Drive Application and MotoBuddy are
                all planned for public repos —{" "}
                <a
                  href={siteConfig.github}
                  title="Add your GitHub link"
                  className="text-ink underline decoration-border"
                >
                  link them here
                </a>{" "}
                as they go live.
              </li>
              <li>
                Python Programming certification (CodSoft) — applied directly in the KNN-based
                Entertainment Buddy build.
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  title="Add your GitHub link"
                  className="text-ink underline decoration-border"
                >
                  View full GitHub profile →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
