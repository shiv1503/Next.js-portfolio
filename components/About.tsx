import { stats } from "@/lib/timeline";

export default function About() {
  return (
    <section id="about">
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-14">
        <div>
          <div className="eyebrow">About</div>
          <h2 className="text-[32px] mb-4">Building, breaking, rebuilding.</h2>
          <p className="text-muted mb-4">
            <strong className="text-ink">Currently:</strong> finished MCA at Graphic Era Hill
            University, spending most nights on side projects instead of Netflix — which is a
            little ironic since one of them is a recommendation engine.
          </p>
          <p className="text-muted mb-4">
            My path runs from a BCA in 2022 to an MCA with an 8.6 CGPA, picking up backend
            development, data structures, and computer vision along the way. I like projects with
            a clear before/after: a driver who wasn&apos;t being watched for drowsiness, now is; a
            pile of contacts in someone&apos;s notes app, now a dashboard.
          </p>
          <p className="text-muted mb-4">
            Outside of code: I play games competitively enough that &quot;gaming reflexes&quot;
            made it onto my résumé as a soft skill — and it&apos;s genuinely helped with debugging
            under pressure.
          </p>
          <div className="border-l-2 border-teal pl-4 py-3 bg-panel text-sm text-muted mt-5">
            Fun fact — MotoBuddy, my current side project, exists because I couldn&apos;t find a
            single app where car and bike enthusiasts could properly catalogue more than one
            vehicle.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-panel p-5">
              <div className="display font-bold text-[34px] text-amber">{s.num}</div>
              <div className="mono text-[11px] text-muted uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
