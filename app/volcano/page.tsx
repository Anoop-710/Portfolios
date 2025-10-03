"use client";

import { ThemeProvider } from "@/components/volcano/ThemeProvider";
import { Navigation } from "@/components/volcano/Navigation";
import { HeroSection } from "@/components/volcano/HeroSection";
import { AboutSection } from "@/components/volcano/AboutSection";
import { ProjectsSection } from "@/components/volcano/ProjectsSection";
import { ContactSection } from "@/components/volcano/ContactSection";
export default function VolcanoPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-volcano-black text-volcano-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-volcano-black via-volcano-dark to-volcano-black" />
                    <div className="volcano-background-pattern" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <Navigation />
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </div>
            </div>
        </ThemeProvider>
    );
}
