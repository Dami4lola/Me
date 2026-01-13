'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import WorkExperienceTimeline from './components/WorkExperienceTimeline';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<WorkExperienceTimeline />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
