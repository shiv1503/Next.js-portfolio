import { skillCategories } from "@/lib/skills";

export default function SkillsGrid() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Skills</div>
          <h2>Stack &amp; tools</h2>
          <p>Grouped the way I actually reach for them — not ranked, just organized.</p>
        </div>

        {skillCategories.map((cat) => (
          <div key={cat.name} className="mb-9">
            <h3 className="mono text-[13px] text-teal uppercase tracking-widest mb-4 font-semibold">
              {cat.name}
            </h3>
            <div className="chip-grid">
              {cat.skills.map((s) => (
                <div key={s.label} className="chip">
                  <div className="glyph">{s.glyph}</div>
                  <span className="label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
