"use client";

import { Navigation } from "@/components/galaxy/Navigation";
import { HeroSection } from "@/components/galaxy/HeroSection";
import { AboutSection } from "@/components/galaxy/AboutSection";
import { ProjectsSection } from "@/components/galaxy/ProjectsSection";
import { ContactSection } from "@/components/galaxy/ContactSection";
import { FloatingOrbs } from "@/components/galaxy/FloatingOrbs";
import { Starfield } from "@/components/galaxy/Starfield";
import { ThemeProvider } from "@/components/galaxy/ThemeProvider";

export default function GalaxyPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
                {/* Background Elements */}
                <Starfield />
                <FloatingOrbs />

                {/* Main Content */}
                <Navigation />
                <main className="relative z-10">
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
            </div>
        </ThemeProvider>
    );
}
