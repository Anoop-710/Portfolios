"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const navItems = [
        { name: "Saga Prologue", href: "/" },
        { name: "Clan Chronicle", href: "#about" },
        { name: "Saga of Battles", href: "#projects" },
        { name: "Hall of Oaths", href: "#testimonials" },
        { name: "Rune of Contact", href: "#contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-700 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 min-w-0">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">ᚱ</span>
                            </div>
                            <span className="text-white font-bold text-lg">Norse Saga</span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-slate-300 hover:text-amber-400 transition-colors duration-200 font-medium relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Theme Toggle & Mobile Menu */}
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex-shrink-0"
                            >
                                {theme === "dark" ? (
                                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </motion.button>

                            {/* Mobile menu button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex-shrink-0"
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                                    <motion.span
                                        animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
                                        className="w-full h-0.5 bg-white block"
                                    />
                                    <motion.span
                                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                        className="w-full h-0.5 bg-white block"
                                    />
                                    <motion.span
                                        animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
                                        className="w-full h-0.5 bg-white block"
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-16 left-0 right-0 bg-slate-900 border-b border-slate-700 md:hidden z-40"
                    >
                        <div className="px-6 py-4 space-y-3">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 font-medium py-2"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
