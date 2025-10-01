"use client";

import { HeroSection } from "@/components/mountain/HeroSection";
import { AboutSection } from "@/components/mountain/AboutSection";
import { ProjectsSection } from "@/components/mountain/ProjectsSection";
import { ContactSection } from "@/components/mountain/ContactSection";
import { Navigation } from "@/components/mountain/Navigation";
import { CloudAnimation } from "@/components/mountain/CloudAnimation";
import { BirdAnimation } from "@/components/mountain/BirdAnimation";
import { SunMoonAnimation } from "@/components/mountain/SunMoonAnimation";
import { MountainLayers } from "@/components/mountain/MountainLayers";

export default function MountainPortfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-200 via-orange-100 to-pink-100 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 text-slate-900 dark:text-white relative overflow-hidden">
            {/* Background Elements */}
            <MountainLayers />
            <CloudAnimation />
            <BirdAnimation />
            <SunMoonAnimation />

            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
}
