export type Project = {
  slug: string;
  title: string;
  /** One-line business/user outcome shown on the card */
  outcome: string;
  /** Short card description */
  desc: string;
  tags: string[];
  /** Short all-caps label shown on the card image placeholder */
  cardLabel: string;
  status: string;
  /** Optional path under /public/projects — falls back to a styled placeholder if omitted */
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    constraints: string;
    /** Plain-text diagram rendered in a monospace box — swap for a real diagram/image later */
    architecture: string;
    results: string;
  };
};

export const projects: Project[] = [
  {
    slug: "entertainment-buddy",
    title: "Entertainment Buddy",
    outcome: "One recommender for movies, anime and TV — instead of three tabs.",
    desc: "A KNN-based recommendation system for movies, anime, and TV series, served through an interactive Streamlit app.",
    tags: ["Python", "KNN", "Pandas", "NumPy", "Streamlit"],
    cardLabel: "RECOMMENDER · PYTHON",
    status: "Status: Completed — academic + personal project",
    repoUrl: "#",
    liveUrl: "#",
    caseStudy: {
      problem:
        "Deciding what to watch across movies, anime and TV series usually means checking three different apps. Entertainment Buddy consolidates that into one place, aimed at casual viewers who want a quick, relevant pick without endless scrolling.",
      constraints:
        "Chose K-Nearest Neighbors over a deep learning model — with a modest dataset, KNN gave interpretable, fast similarity matching without the training overhead a neural recommender would need. Streamlit was picked over a full custom frontend to prioritize iteration speed on the recommendation logic itself.",
      architecture:
        "Raw dataset (movies/anime/TV)\n        │\n        ▼\n  Pandas + NumPy cleanup\n        │\n        ▼\n   KNN similarity model\n        │\n        ▼\n   Streamlit UI  →  user picks a title, gets ranked recommendations",
      results:
        "Learned to optimize a data preprocessing pipeline with Pandas/NumPy so recommendations return quickly, and how far a well-tuned KNN model can go before deep learning is actually necessary.",
    },
  },
  {
    slug: "personal-dashboard",
    title: "Personal Dashboard",
    outcome: "Centralizes contacts and interaction history in one clean UI.",
    desc: "A React-based dashboard for organizing and tracking professional interactions and contact information.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    cardLabel: "DASHBOARD · REACT",
    status: "Status: Completed — personal project",
    repoUrl: "#",
    liveUrl: "#",
    caseStudy: {
      problem:
        "Professional contacts and the context around them (who, when, why) tend to end up scattered across notes apps and inboxes. This dashboard gives that information one home.",
      constraints:
        "Built as a fully client-side app: state management had to carry the load a backend normally would, so component boundaries and reusable UI pieces mattered more than usual to keep the data flow predictable.",
      architecture:
        "React component tree\n        │\n        ▼\n Reusable UI components (cards, forms, lists)\n        │\n        ▼\n  Local state management\n        │\n        ▼\n  Responsive dashboard view",
      results:
        "Improved accessibility of professional records by centralizing them, and got hands-on practice designing reusable components and state flow without a backend to lean on.",
    },
  },
  {
    slug: "safe-drive-application",
    title: "Safe Drive Application",
    outcome: "Real-time drowsiness alerts from face and eye tracking.",
    desc: "A Python + OpenCV driver monitoring system that tracks face and eye movement to detect drowsiness and trigger real-time alerts.",
    tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    cardLabel: "COMPUTER VISION · PYTHON",
    status: "Status: Completed — academic project",
    repoUrl: "#",
    liveUrl: "#",
    caseStudy: {
      problem:
        "Fatigue-related accidents often happen because drowsiness goes undetected until it's too late. Safe Drive targets that gap with continuous face and eye monitoring while driving.",
      constraints:
        "Needed to run detection in real time rather than as a batch process, which meant balancing accuracy of eye-tracking (especially under variable lighting) against the processing speed available on typical hardware.",
      architecture:
        "Camera feed\n        │\n        ▼\n OpenCV face + eye landmark detection\n        │\n        ▼\n Drowsiness scoring (eye closure / duration)\n        │\n        ▼\n Real-time alert trigger",
      results:
        "Built a working real-time alert loop end-to-end, and came away with practical experience in facial detection algorithms and the tradeoffs of running vision models live rather than offline.",
    },
  },
  {
    slug: "motobuddy",
    title: "MotoBuddy",
    outcome: "A dedicated social space for car & bike owners with more than one ride.",
    desc: "Vehicle Enthusiast Social Platform — register, manage and showcase multiple vehicles, share posts, and connect with other owners. Currently under development.",
    tags: ["Java", "MySQL", "Android (planned)", "Firebase (optional)"],
    cardLabel: "IN PROGRESS · JAVA / ANDROID",
    status: "Status: Under development",
    repoUrl: "#",
    caseStudy: {
      problem:
        "Car and bike enthusiasts who own more than one vehicle don't have a natural home to register, document and show them off — most social apps assume a single-vehicle user. MotoBuddy is built around owning a garage, not just a car.",
      constraints:
        "The core tradeoff so far is scope: the database has to support multiple vehicles per user with categorized content (cars vs. motorcycles) from day one, while features like events, clubs and a marketplace are deliberately deferred to keep the MVP shippable.",
      architecture:
        "Java backend\n        │\n        ▼\n MySQL schema (users → vehicles → posts)\n        │\n        ▼\n Auth + profile + vehicle registration\n        │\n        ▼\n Android client (planned)  +  Firebase (optional, for realtime features)",
      results:
        "Roadmap: event management, vehicle clubs, marketplace integration, maintenance tracking, and cross-platform mobile support once the core platform is stable.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
