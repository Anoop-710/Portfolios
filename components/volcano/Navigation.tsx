"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-volcano-black/80 backdrop-blur-md border-b border-volcano-red/30"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-8 h-8 bg-gradient-lava rounded-lg flex items-center justify-center">
                            <span className="text-volcano-black font-bold text-sm">V</span>
                        </div>
                        <span className="text-volcano-white font-bold text-xl">John Doe</span>
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
                                whileHover={{
                                    color: "#ff6b35",
                                    textShadow: "0 0 8px rgba(255, 107, 53, 0.5)"
                                }}
                                className="text-volcano-ash hover:text-volcano-glow transition-all duration-300 font-medium"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-volcano-gray/50 text-volcano-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-volcano-ash hover:text-volcano-glow hover:bg-volcano-gray/30 rounded-lg transition-all duration-300"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
