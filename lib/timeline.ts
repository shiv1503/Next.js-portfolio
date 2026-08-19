export type TimelineItem = {
  date: string;
  title: string;
  org: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2019 — 2022",
    title: "Bachelor of Computer Applications",
    org: "Surajmal Agarwal Degree College · 69.5%",
    description:
      "Foundations in programming, databases and computer science theory.",
  },
  {
    date: "2023 — 2025",
    title: "Master of Computer Applications",
    org: "Graphic Era Hill University · 8.6 CGPA",
    description:
      "Deepened focus on backend development, data structures & algorithms, and computer networks & security — alongside the projects featured above.",
  },
  {
    date: "Certification",
    title: "Python Programming",
    org: "CodSoft",
    description:
      "Applied Python skills that fed directly into the Entertainment Buddy and Safe Drive projects.",
  },
  {
    date: "Certification",
    title: "Digital Marketing",
    org: "Adobe / Coursera",
    description:
      "A deliberate step outside pure engineering, useful for understanding users and product framing.",
  },
];

export const stats = [
  { num: "8.6", label: "MCA CGPA" },
  { num: "4", label: "Projects Shipped" },
  { num: "2", label: "Certifications" },
  { num: "2025", label: "Graduating" },
];
