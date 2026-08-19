export type Skill = { glyph: string; label: string };
export type SkillCategory = { name: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { glyph: "JAVA", label: "Java" },
      { glyph: "PY", label: "Python" },
      { glyph: "C", label: "C" },
      { glyph: "C++", label: "C++" },
      { glyph: "C#", label: "C#" },
    ],
  },
  {
    name: "Web",
    skills: [
      { glyph: "HTML", label: "HTML" },
      { glyph: "CSS", label: "CSS" },
      { glyph: "JS", label: "JavaScript" },
      { glyph: "RCT", label: "React" },
      { glyph: "TW", label: "Tailwind CSS" },
      { glyph: "NODE", label: "Node.js" },
    ],
  },
  {
    name: "Database",
    skills: [{ glyph: "SQL", label: "MySQL" }],
  },
  {
    name: "Libraries & Tools",
    skills: [
      { glyph: "PD", label: "Pandas" },
      { glyph: "NP", label: "NumPy" },
      { glyph: "PLT", label: "Matplotlib" },
      { glyph: "CV", label: "OpenCV" },
      { glyph: "TF", label: "TensorFlow" },
    ],
  },
  {
    name: "Concepts",
    skills: [
      { glyph: "OOP", label: "OOP" },
      { glyph: "DSA", label: "Data Structures" },
      { glyph: "NET", label: "Networks & Security" },
      { glyph: "AGL", label: "Agile" },
    ],
  },
  {
    name: "Other",
    skills: [
      { glyph: "LNX", label: "Linux" },
      { glyph: "GIT", label: "Git" },
      { glyph: "GH", label: "GitHub" },
      { glyph: "PBI", label: "Power BI" },
      { glyph: "TBL", label: "Tableau" },
      { glyph: "AND", label: "Android Studio" },
    ],
  },
];
