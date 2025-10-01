"use client";

import { ThemeProvider } from "@/components/steampunk/ThemeProvider";
import { Navigation } from "@/components/steampunk/Navigation";
import { HeroSection } from "@/components/steampunk/HeroSection";
import { AboutSection } from "@/components/steampunk/AboutSection";
import { ProjectsSection } from "@/components/steampunk/ProjectsSection";
import { ContactSection } from "@/components/steampunk/ContactSection";
import { GearBackground } from "@/components/steampunk/GearBackground";
export default function SteampunkPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-amber-900/20 dark:to-orange-900/20 relative overflow-hidden">
                {/* Animated Gear Background */}
                <GearBackground />

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
        </ThemeProvider>
    );
}
