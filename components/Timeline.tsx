import { timeline } from "@/lib/timeline";

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Timeline</div>
          <h2>Education &amp; certifications</h2>
          <p>No industry role yet — here&apos;s the academic and self-directed path that got the projects above built.</p>
        </div>

        <div className="relative pl-7 border-l border-border">
          {timeline.map((item, i) => (
            <div key={i} className="relative pb-9 last:pb-0">
              <span
                className="absolute -left-[33px] top-1 w-[9px] h-[9px] rounded-full bg-amber"
                style={{ boxShadow: "0 0 0 4px var(--bg), 0 0 0 5px var(--border)" }}
                aria-hidden="true"
              />
              <div className="mono text-xs text-amber mb-1.5">{item.date}</div>
              <h3 className="text-[19px] mb-1">{item.title}</h3>
              <div className="text-teal text-[13.5px] mb-2">{item.org}</div>
              <p className="text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
