"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/forest-ui/HeroSection";
import { AboutSection } from "@/components/forest-ui/AboutSection";
import { ProjectsSection } from "@/components/forest-ui/ProjectsSection";
import { ContactSection } from "@/components/forest-ui/ContactSection";
import { Navigation } from "@/components/forest-ui/Navigation";
import { ThemeProvider } from "@/components/forest-ui/ThemeProvider";
import { Mist } from "@/components/forest/Mist";
import { Trees } from "@/components/forest/Trees";
import { FireFly } from "@/components/forest/FireFly";

export default function ForestTemplate() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeProvider>
            <div className="relative min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
                {/* Forest Background Elements - only render when mounted */}
                {mounted && (
                    <>
                        <div className="fixed inset-0 z-0">
                            <Mist />
                            <Trees />
                        </div>

                        {/* Dark Mode Forest Elements */}
                        <div className="fixed inset-0 z-0 dark:opacity-100 opacity-0 transition-opacity duration-1000">
                            <FireFly />
                        </div>
                    </>
                )}

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
