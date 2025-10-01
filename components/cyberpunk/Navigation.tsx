"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    animate={{
                        textShadow: [
                            "0 0 10px rgba(0, 255, 255, 0.5)",
                            "0 0 20px rgba(0, 255, 255, 0.8)",
                            "0 0 10px rgba(0, 255, 255, 0.5)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    CYBER.DEV
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                        </motion.button>
                    ))}

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-cyan-400" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <motion.button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {theme === "dark" ? (
                            <Sun className="w-4 h-4 text-yellow-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-cyan-400" />
                        )}
                    </motion.button>

                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-cyan-400" />
                        ) : (
                            <Menu className="w-6 h-6 text-cyan-400" />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                className="md:hidden bg-slate-900/95 dark:bg-black/95 backdrop-blur-md"
                initial={false}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
            >
                <div className="px-6 py-4 space-y-4">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {item.name}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}
