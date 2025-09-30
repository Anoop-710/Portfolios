"use client";

import { HeroSection } from "@/components/forest-ui/HeroSection";
import { AboutSection } from "@/components/forest-ui/AboutSection";
import { ProjectsSection } from "@/components/forest-ui/ProjectsSection";
import { ContactSection } from "@/components/forest-ui/ContactSection";
import { Navigation } from "@/components/forest-ui/Navigation";
import { ThemeProvider } from "@/components/forest-ui/ThemeProvider";
import { Mist } from "@/components/forest/Mist";
import { Trees } from "@/components/forest/Trees";
import { FireFly } from "@/components/forest/FireFly";
import { useIsMobile, useReducedMotion } from "@/lib/animations";

export default function ForestTemplate() {
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    return (
        <ThemeProvider>
            <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
                {/* Forest Background Elements - optimized for performance */}
                <div className="fixed inset-0 z-0" style={{ contain: "layout style paint" }}>
                    <Mist />
                    <Trees />
                </div>

                {/* Dark Mode Forest Elements - only show when needed */}
                <div
                    className="fixed inset-0 z-0 dark:opacity-100 opacity-0 transition-opacity duration-1000"
                    style={{ contain: "layout style paint" }}
                >
                    <FireFly />
                </div>

                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <main
                    id="home"
                    className="relative z-10"
                    style={{
                        contain: "layout style paint",
                        // Improve scroll performance
                        willChange: isMobile ? "auto" : "scroll-position",
                    }}
                >
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
            </div>
        </ThemeProvider>
    );
}
