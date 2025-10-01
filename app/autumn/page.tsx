"use client";

import { useState, useEffect } from "react";

import { Navigation } from "@/components/autumn/Navigation";
import { HeroSection } from "@/components/autumn/HeroSection";
import { AboutSection } from "@/components/autumn/AboutSection";
import { ProjectsSection } from "@/components/autumn/ProjectsSection";
import { ContactSection } from "@/components/autumn/ContactSection";
import { ParallaxBackground } from "@/components/autumn/ParallaxBackground";
import { FallingLeaves } from "@/components/autumn/FallingLeaves";
import { ThemeProvider } from "@/components/autumn/ThemeProvider";
export default function AutumnPortfolio() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ThemeProvider>
            <div className="relative min-h-screen overflow-hidden">
                {/* Parallax Background */}
                <ParallaxBackground />

                {/* Falling Leaves Animation */}
                <FallingLeaves />

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
