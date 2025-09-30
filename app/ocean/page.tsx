"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/ocean/HeroSection";
import AboutSection from "@/components/ocean/AboutSection";
import ProjectsSection from "@/components/ocean/ProjectsSection";
import ContactSection from "@/components/ocean/ContactSection";
import { OceanThemeProvider, useTheme } from "@/components/ocean/ThemeProvider";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-800/30 rounded-full shadow-lg hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <AnimatePresence mode="wait">
                {theme === "light" ? (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl"
                    >
                        🌙
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl"
                    >
                        ☀️
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

function OceanContent() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    const mobileScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <ThemeToggle />

            {/* Desktop Navigation */}
            <motion.nav
                className="fixed top-1/2 left-6 transform -translate-y-1/2 z-40 hidden lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <div className="flex flex-col gap-3">
                    {[
                        { id: "hero", label: "Home", icon: "🏠" },
                        { id: "about", label: "About", icon: "👤" },
                        { id: "projects", label: "Projects", icon: "🚀" },
                        { id: "contact", label: "Contact", icon: "📧" },
                    ].map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-12 h-12 rounded-full backdrop-blur-sm border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${activeSection === item.id
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg"
                                : "bg-white/20 dark:bg-slate-800/20 border-cyan-200/30 dark:border-cyan-800/30 text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title={item.label}
                        >
                            {item.icon}
                        </motion.button>
                    ))}
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.button
                className="fixed top-6 left-6 z-50 lg:hidden p-3 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-800/30 rounded-full shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </motion.div>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="absolute top-20 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-cyan-200/50 dark:border-cyan-800/50 shadow-xl"
                            initial={{ opacity: 0, y: -50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-6 space-y-4">
                                {[
                                    { id: "hero", label: "Home", icon: "🏠" },
                                    { id: "about", label: "About", icon: "👤" },
                                    { id: "projects", label: "Projects", icon: "🚀" },
                                    { id: "contact", label: "Contact", icon: "📧" },
                                ].map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => mobileScrollToSection(item.id)}
                                        className="w-full flex items-center gap-4 p-4 text-left text-slate-800 dark:text-slate-200 hover:bg-cyan-100/50 dark:hover:bg-cyan-900/30 rounded-xl transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="font-semibold">{item.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="hero">
                <HeroSection />
            </section>

            <section id="about">
                <AboutSection />
            </section>

            <section id="projects">
                <ProjectsSection />
            </section>

            <section id="contact">
                <ContactSection />
            </section>

            {/* Footer */}
            <motion.footer
                className="py-12 px-6 bg-gradient-to-r from-slate-900/50 via-blue-900/50 to-indigo-900/50 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm border-t border-cyan-200/20 dark:border-cyan-800/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        className="flex justify-center items-center gap-2 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-2xl">🌊</span>
                        <span className="text-xl font-bold text-slate-800 dark:text-slate-200">
                            Ocean Portfolio
                        </span>
                    </motion.div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion
                    </p>

                    <div className="flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <span>© 2025 Alex Chen</span>
                        <span>•</span>
                        <span>Designed with ❤️ for the digital ocean</span>
                    </div>
                </div>
            </motion.footer>
        </>
    );
}

function Navigation() {
    const [activeSection, setActiveSection] = useState("hero");

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    return (
        <motion.nav
            className="fixed top-1/2 left-6 transform -translate-y-1/2 z-40 hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <div className="flex flex-col gap-3">
                {[
                    { id: "hero", label: "Home", icon: "🏠" },
                    { id: "about", label: "About", icon: "👤" },
                    { id: "projects", label: "Projects", icon: "🚀" },
                    { id: "contact", label: "Contact", icon: "📧" },
                ].map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-12 h-12 rounded-full backdrop-blur-sm border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${activeSection === item.id
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg"
                            : "bg-white/20 dark:bg-slate-800/20 border-cyan-200/30 dark:border-cyan-800/30 text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={item.label}
                    >
                        {item.icon}
                    </motion.button>
                ))}
            </div>
        </motion.nav>
    );
}

function OceanNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <motion.button
                className="fixed top-6 left-6 z-50 lg:hidden p-3 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-800/30 rounded-full shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </motion.div>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.div
                            className="absolute top-20 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-cyan-200/50 dark:border-cyan-800/50 shadow-xl"
                            initial={{ opacity: 0, y: -50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-6 space-y-4">
                                {[
                                    { id: "hero", label: "Home", icon: "🏠" },
                                    { id: "about", label: "About", icon: "👤" },
                                    { id: "projects", label: "Projects", icon: "🚀" },
                                    { id: "contact", label: "Contact", icon: "📧" },
                                ].map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="w-full flex items-center gap-4 p-4 text-left text-slate-800 dark:text-slate-200 hover:bg-cyan-100/50 dark:hover:bg-cyan-900/30 rounded-xl transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="font-semibold">{item.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function PortfolioContent() {
    return (
        <div className="relative">
            <OceanContent />
        </div>
    );
}

export default function OceanPage() {
    return (
        <OceanThemeProvider>
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-500">
                <PortfolioContent />
            </div>
        </OceanThemeProvider>
    );
}
