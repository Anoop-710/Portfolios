"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/deep-space/HeroSection";
import { AboutSection } from "@/components/deep-space/AboutSection";
import { ProjectsSection } from "@/components/deep-space/ProjectsSection";
import { ContactSection } from "@/components/deep-space/ContactSection";
import { Navigation } from "@/components/deep-space/Navigation";
import { ThemeProvider } from "@/components/deep-space/ThemeProvider";
import { Starfield } from "@/components/deep-space/Starfield";

export default function DeepSpacePortfolio() {
    const [activeSection, setActiveSection] = useState("hero");

    return (
        <ThemeProvider>
            <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
                {/* Animated Starfield Background */}
                <Starfield />

                {/* Navigation */}
                <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

                {/* Main Content */}
                <main className="relative z-10">
                    <AnimatePresence mode="wait">
                        {activeSection === "hero" && (
                            <HeroSection key="hero" setActiveSection={setActiveSection} />
                        )}
                        {activeSection === "about" && (
                            <AboutSection key="about" setActiveSection={setActiveSection} />
                        )}
                        {activeSection === "projects" && (
                            <ProjectsSection key="projects" setActiveSection={setActiveSection} />
                        )}
                        {activeSection === "contact" && (
                            <ContactSection key="contact" setActiveSection={setActiveSection} />
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </ThemeProvider>
    );
}
