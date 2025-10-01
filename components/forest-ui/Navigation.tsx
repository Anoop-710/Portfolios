"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    if (!mounted) return null;

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                            {/* Campfire SVG Icon */}
                            <svg
                                className="w-5 h-5 text-white"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                {/* Campfire logs */}
                                <ellipse cx="12" cy="18" rx="8" ry="2" fill="currentColor" opacity="0.8" />
                                <ellipse cx="10" cy="19" rx="6" ry="1.5" fill="currentColor" opacity="0.6" />
                                <ellipse cx="14" cy="19" rx="6" ry="1.5" fill="currentColor" opacity="0.6" />

                                {/* Flames */}
                                <motion.path
                                    d="M8 14 Q10 8 12 12 Q14 8 16 14 Q14 16 12 14 Q10 16 8 14"
                                    fill="currentColor"
                                    opacity="0.9"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.9, 1, 0.9],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Inner flame */}
                                <motion.path
                                    d="M9 12 Q10 6 12 10 Q14 6 15 12 Q13 14 12 12 Q11 14 9 12"
                                    fill="currentColor"
                                    opacity="0.7"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 0.9, 0.7],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    }}
                                />

                                {/* Sparks */}
                                <motion.circle
                                    cx="10"
                                    cy="10"
                                    r="0.5"
                                    fill="currentColor"
                                    animate={{
                                        y: [0, -8, -4],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                        delay: Math.random(),
                                    }}
                                />
                                <motion.circle
                                    cx="14"
                                    cy="9"
                                    r="0.5"
                                    fill="currentColor"
                                    animate={{
                                        y: [0, -10, -5],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                        delay: Math.random() * 2,
                                    }}
                                />
                            </svg>
                        </div>
                        <span className="font-bold text-xl text-foreground">Alex Chen</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-lg bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-lg bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            )}
                        </motion.button>

                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5 text-muted-foreground" />
                            ) : (
                                <Menu className="w-5 h-5 text-muted-foreground" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <motion.div
                    className="md:hidden overflow-hidden"
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 transition-all duration-300 rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    x: isOpen ? 0 : -20,
                                }}
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
