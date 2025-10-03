"use client";

import { Navigation } from "@/components/retro-arcade/Navigation";
import { HeroSection } from "@/components/retro-arcade/HeroSection";
import { AboutSection } from "@/components/retro-arcade/AboutSection";
import { ProjectsSection } from "@/components/retro-arcade/ProjectsSection";
import { ContactSection } from "@/components/retro-arcade/ContactSection";
import { ThemeProvider } from "@/components/retro-arcade/ThemeProvider";

export default function RetroArcadePage() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-black text-white">
                <Navigation />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <footer className="relative py-12 bg-black border-t-2 border-cyan-400/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-8 mb-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-cyan-400 font-mono tracking-wider">
                                    RETRO-DEV
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Crafting pixel-perfect digital experiences with 8-bit precision and modern technology.
                                    Let&apos;s build something amazing together.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4 text-yellow-400 font-mono">QUICK LINKS</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
                                    <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                                    <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                                    <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4 text-magenta-400 font-mono">TECHNOLOGIES</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>React & Next.js</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4 text-green-400 font-mono">STATUS</h4>
                                <div className="space-y-2 text-gray-300 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>Available for work</span>
                                    </div>
                                    <div>Response time: 24h</div>
                                    <div>Timezone: UTC+5:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-8 text-center">
                            <p className="text-gray-400 text-sm font-mono">
                                © 2025 RETRO-DEV. Built with ❤️ and lots of ☕. Game on!
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}
