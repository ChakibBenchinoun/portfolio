import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection className="container mx-auto px-8 py-20 sm:py-[245px] lg:py-60 xl:py-[265px] mt-20" />
      <div className="bg-gray-900 mb-20">
        {/* About */}
        <AboutSection className="container mx-auto px-8 py-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 scroll-mt-20" />
        {/* Skills */}
        <SkillsSection className="container mx-auto px-8 py-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 -scroll-mt-5" />
        {/* Project Section */}
        <ProjectsSection className="container mx-auto px-8 py-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 -scroll-mt-10" />
        {/* Let's Work Together */}
        <ContactSection className="container mx-auto px-8 pb-32 sm:py-40 md:py-44 lg:py-48 xl:py-52" />
      </div>
    </div>
  );
}
