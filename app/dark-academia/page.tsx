"use client";

import { Navigation } from "@/components/dark-academia/Navigation";
import { HeroSection } from "@/components/dark-academia/HeroSection";
import { AboutSection } from "@/components/dark-academia/AboutSection";
import { ProjectsSection } from "@/components/dark-academia/ProjectsSection";
import { ContactSection } from "@/components/dark-academia/ContactSection";
import { ThemeProvider } from "@/components/dark-academia/ThemeProvider";

export default function DarkAcademiaPage() {
    return (
        <ThemeProvider defaultTheme="dark">
            <div className="min-h-screen bg-slate-900">
                <Navigation />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <footer className="bg-slate-950 border-t border-slate-800 py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                                        <span className="text-slate-900 font-bold text-sm">G</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">Dark Academia Codex</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    A digital sanctuary where code meets craftsmanship,
                                    and innovation flows like ink across ancient parchment.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-amber-300 mb-4">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#hero" className="text-slate-400 hover:text-amber-400 transition-colors">Home</a></li>
                                    <li><a href="#about" className="text-slate-400 hover:text-amber-400 transition-colors">About</a></li>
                                    <li><a href="#projects" className="text-slate-400 hover:text-amber-400 transition-colors">Projects</a></li>
                                    <li><a href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-amber-300 mb-4">Connect</h4>
                                <div className="flex space-x-4">
                                    <a href="mailto:alexandria@digitalcodex.dev" className="text-slate-400 hover:text-amber-400 transition-colors">
                                        <span className="text-lg">📧</span>
                                    </a>
                                    <a href="https://github.com/alexandriarivers" className="text-slate-400 hover:text-amber-400 transition-colors">
                                        <span className="text-lg">🐙</span>
                                    </a>
                                    <a href="https://linkedin.com/in/alexandriarivers" className="text-slate-400 hover:text-amber-400 transition-colors">
                                        <span className="text-lg">💼</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-slate-800 pt-8 text-center">
                            <p className="text-slate-500 text-sm">
                                © 2025 Alexandria Rivers. Crafted with ❤️ in the digital cathedral.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}
