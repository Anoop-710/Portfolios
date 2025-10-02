"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface NavigationProps {
    currentSection: string;
    setCurrentSection: (section: string) => void;
}

const navigationItems = [
    { id: "hero", label: "Port", icon: "⚓" },
    { id: "about", label: "Captain's Log", icon: "📜" },
    { id: "projects", label: "Treasures", icon: "💎" },
    { id: "contact", label: "Message", icon: "🗨️" },
];

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (sectionId: string) => {
        setCurrentSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-nautical-parchment-light/80 dark:bg-nautical-parchment-dark/80 backdrop-blur-md border-b-2 border-amber-600/30 dark:border-amber-400/30"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Compass Logo */}
                <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative w-10 h-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 border-4 border-amber-600 dark:border-amber-400 rounded-full relative"
                        >
                            <div className="absolute top-0 left-1/2 w-1 h-3 bg-amber-600 dark:bg-amber-400 transform -translate-x-1/2" />
                            <div className="absolute bottom-0 left-1/2 w-1 h-3 bg-amber-600 dark:bg-amber-400 transform -translate-x-1/2" />
                            <div className="absolute left-0 top-1/2 w-3 h-1 bg-amber-600 dark:bg-amber-400 transform -translate-y-1/2" />
                            <div className="absolute right-0 top-1/2 w-3 h-1 bg-amber-600 dark:bg-amber-400 transform -translate-y-1/2" />
                        </motion.div>
                        <div className="absolute inset-0 w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <span className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        Sea Wolf Dev
                    </span>
                </motion.div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigationItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${currentSection === item.id
                                    ? "text-amber-600 dark:text-amber-400"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                            {currentSection === item.id && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-amber-100 dark:bg-amber-900/30 rounded-lg border border-amber-300 dark:border-amber-600"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </motion.button>

                    {/* Mobile menu button */}
                    <motion.button
                        className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="md:hidden bg-nautical-parchment-light/95 dark:bg-nautical-parchment-dark/95 backdrop-blur-md border-t border-amber-600/20"
            >
                <div className="px-6 py-4 space-y-2">
                    {navigationItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3 ${currentSection === item.id
                                    ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-600"
                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}
