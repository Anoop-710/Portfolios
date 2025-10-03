"use client";

import { ThemeProvider } from "@/components/norse/ThemeProvider";
import { Navigation } from "@/components/norse/Navigation";
import { FjordBackground } from "@/components/norse/FjordBackground";
import { HeroSection } from "@/components/norse/HeroSection";
import { AboutSection } from "@/components/norse/AboutSection";
import { ProjectsSection } from "@/components/norse/ProjectsSection";
import { ContactSection } from "@/components/norse/ContactSection";

export default function NorsePortfolio() {
    return (
        <ThemeProvider defaultTheme="dark">
            <div className="min-h-screen bg-slate-900 text-white">
                <Navigation />

                <FjordBackground>
                    <HeroSection />
                </FjordBackground>

                <AboutSection />
                <ProjectsSection />
                <ContactSection />

                {/* Footer */}
                <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">ᚱ</span>
                            </div>
                            <span className="text-xl font-bold text-white">Norse Saga Portfolio</span>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Built with the wisdom of ancient runes and modern web technologies
                        </p>
                        <div className="flex justify-center space-x-8 text-sm text-slate-500">
                            <span>⚔️ React & Next.js</span>
                            <span>🛡️ TypeScript</span>
                            <span>⚡ Framer Motion</span>
                            <span>🎨 Tailwind CSS</span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <p className="text-slate-600">
                                © 2025 Norse Warrior. Forged in the digital realms.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}
