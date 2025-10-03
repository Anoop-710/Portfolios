"use client";

import ThemeProvider from "@/components/watercolor/ThemeProvider";
import Navigation from "@/components/watercolor/Navigation";
import HeroSection from "@/components/watercolor/HeroSection";
import AboutSection from "@/components/watercolor/AboutSection";
import ProjectsSection from "@/components/watercolor/ProjectsSection";
import ContactSection from "@/components/watercolor/ContactSection";

export default function WatercolorPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
                {/* Watercolor blot background animations */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 opacity-30">
                        <div className="w-64 h-64 bg-gradient-radial from-pink-300/20 to-transparent rounded-full blur-3xl animate-pulse" />
                    </div>
                    <div className="absolute top-3/4 right-1/4 opacity-20">
                        <div className="w-48 h-48 bg-gradient-radial from-blue-300/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
                    </div>
                    <div className="absolute top-1/2 left-3/4 opacity-25">
                        <div className="w-56 h-56 bg-gradient-radial from-green-300/20 to-transparent rounded-full blur-3xl animate-pulse delay-2000" />
                    </div>
                </div>

                <Navigation />
                <main className="relative">
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
            </div>
        </ThemeProvider>
    );
}
