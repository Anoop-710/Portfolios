"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/cyberpunk/Navigation";
import { HeroSection } from "@/components/cyberpunk/HeroSection";
import { AboutSection } from "@/components/cyberpunk/AboutSection";
import { ProjectsSection } from "@/components/cyberpunk/ProjectsSection";
import { ContactSection } from "@/components/cyberpunk/ContactSection";
import { ThemeProvider } from "@/components/cyberpunk/ThemeProvider";
import { ParticlesBackground, RainEffect, HolographicGrid } from "@/components/cyberpunk/Particles";

export default function CyberpunkPortfolio() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-cyan-950 text-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="fixed inset-0 z-0">
                    <ParticlesBackground />
                    <RainEffect />
                    <HolographicGrid />
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
