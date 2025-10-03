"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import InkSplatter from "./InkSplatter";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [splatterTrigger, setSplatterTrigger] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const handleSplatter = () => {
        setSplatterTrigger(!splatterTrigger);
    };

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <button
                        onClick={handleSplatter}
                        className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-green-600 bg-clip-text text-transparent relative overflow-hidden"
                    >
                        🎨 Watercolor Studio
                        <InkSplatter
                            trigger={splatterTrigger}
                            color="#ec4899"
                            size={120}
                            className="absolute -top-4 -left-4"
                        />
                    </button>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="relative text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium px-3 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {item.name}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </motion.button>

                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-6 py-4 space-y-3">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="block text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-medium py-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isMenuOpen ? 1 : 0,
                                x: isMenuOpen ? 0 : -20
                            }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}
