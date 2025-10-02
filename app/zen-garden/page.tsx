"use client";

import { ThemeProvider } from "@/components/zen-garden/ThemeProvider";
import Navigation from "@/components/zen-garden/Navigation";
import HeroSection from "@/components/zen-garden/HeroSection";
import AboutSection from "@/components/zen-garden/AboutSection";
import ProjectsSection from "@/components/zen-garden/ProjectsSection";
import ContactSection from "@/components/zen-garden/ContactSection";
import KoiPond from "@/components/zen-garden/KoiPond";
import SakuraPetals from "@/components/zen-garden/SakuraPetals";
import StoneLanterns from "@/components/zen-garden/StoneLanterns";
export default function ZenGardenPortfolio() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden">
                {/* Background Elements */}
                <div className="fixed inset-0 z-0">
                    <KoiPond />
                </div>

                {/* Floating Petals */}
                <SakuraPetals />

                {/* Stone Lanterns Background */}
                <StoneLanterns />

                {/* Main Content */}
                <div className="relative z-10">
                    <Navigation />
                    <main>
                        <HeroSection />
                        <AboutSection />
                        <ProjectsSection />
                        <ContactSection />
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}
