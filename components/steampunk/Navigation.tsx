"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-100/80 via-orange-100/80 to-yellow-100/80 dark:from-slate-900/90 dark:via-amber-900/90 dark:to-orange-900/90 backdrop-blur-md border-b border-amber-600/30 dark:border-amber-400/30"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 rounded-full flex items-center justify-center">
                            <span className="text-white dark:text-slate-900 font-bold text-sm">A</span>
                        </div>
                        <span className="font-bold text-lg bg-gradient-to-r from-amber-800 to-orange-800 dark:from-amber-200 dark:to-orange-200 bg-clip-text text-transparent">
                            Alex Chen
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                className="relative px-3 py-2 text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                                onClick={() => scrollToSection(item.href)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.button>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            className="p-2 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <motion.button
                            className="p-2 rounded-full bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>

                        <motion.button
                            className="p-2 rounded-md bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className="md:hidden overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: isMenuOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                className="block w-full text-left px-4 py-3 text-amber-800 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-800/50 rounded-md transition-colors"
                                onClick={() => scrollToSection(item.href)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
