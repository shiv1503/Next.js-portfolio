import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectGrid from "@/components/ProjectGrid";
import OpenSource from "@/components/OpenSource";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <ProjectGrid />
      <OpenSource />
      <Timeline />
      <ContactForm />
    </>
  );
}
