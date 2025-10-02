"use client";

import { ThemeProvider } from "@/components/neon/ThemeProvider";
import { Navigation } from "@/components/neon/Navigation";
import { HeroSection } from "@/components/neon/HeroSection";
import { AboutSection } from "@/components/neon/AboutSection";
import { ProjectsSection } from "@/components/neon/ProjectsSection";
import { ContactSection } from "@/components/neon/ContactSection";
import { NeonGrid } from "@/components/neon/NeonGrid";
import { SynthwaveSun } from "@/components/neon/SynthwaveSun";

export default function NeonPortfolio() {
    return (
        <ThemeProvider>
            <div className="relative min-h-screen bg-black overflow-hidden">
                {/* Animated Background */}
                <NeonGrid />
                <SynthwaveSun />

                {/* Main Content */}
                <div className="relative z-10">
                    <Navigation />
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <ProjectsSection />
                        <ContactSection />
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}
