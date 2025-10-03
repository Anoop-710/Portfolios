"use client";

import { HeroSection } from "@/components/industrial-steampunk/HeroSection";
import { Navigation } from "@/components/industrial-steampunk/Navigation";
import { AboutSection } from "@/components/industrial-steampunk/AboutSection";
import { ProjectsSection } from "@/components/industrial-steampunk/ProjectsSection";
import { ContactSection } from "@/components/industrial-steampunk/ContactSection";
import { ThemeProvider } from "@/components/industrial-steampunk/ThemeProvider";
import { GearBackground } from "@/components/industrial-steampunk/GearBackground";
import { SteamParticles } from "@/components/industrial-steampunk/SteamParticles";

export default function IndustrialSteampunkPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
                {/* Animated Background */}
                <GearBackground />
                <SteamParticles />

                {/* Navigation */}
                <Navigation />

                {/* Main Content */}
                <main className="relative z-10">
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Decorative Elements */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                    {/* Copper pipe borders */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 opacity-60" />
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 opacity-60" />
                    <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-amber-600 via-orange-600 to-amber-600 opacity-60" />
                    <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-b from-amber-600 via-orange-600 to-amber-600 opacity-60" />

                    {/* Corner rivets */}
                    <div className="absolute top-2 left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-400 rounded-full shadow-lg" />
                </div>
            </div>
        </ThemeProvider>
    );
}
