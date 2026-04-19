import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollArrow } from "@/components/scroll-arrow";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
	return (
		<div className="overflow-hidden">
			{/* Hero Section */}
			<HeroSection className="container mx-auto min-h-[100svh] px-8 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 xl:pt-44 xl:pb-28" />
			<div className="bg-gray-900 relative mb-20">
				<ScrollArrow />
				{/* About */}
				<AboutSection className="container mx-auto px-8 py-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 scroll-mt-20" />
				{/* Skills */}
				<SkillsSection className="container mx-auto px-8 py-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 -scroll-mt-5" />
				{/* Project Section */}
				<ProjectsSection className="container mx-auto px-8 py-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 -scroll-mt-10" />
				{/* Let's Work Together */}
				<ContactSection className="container mx-auto px-8 pb-32 sm:py-40 md:py-44 lg:py-48 xl:py-52 p-" />
			</div>
		</div>
	);
}
