import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection className="px-8 py-20 sm:py-[245px] lg:py-60 xl:py-[265px] mt-20 max-w-7xl mx-auto" />
      <div id="about" className="bg-gray-900 pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* About */}
          <AboutSection />
          {/* Skills */}
          <SkillsSection />
          {/* Project Section */}
          <ProjectsSection />
          {/* Let's Work Together */}
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
