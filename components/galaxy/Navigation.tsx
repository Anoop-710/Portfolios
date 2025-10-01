"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

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
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">G</span>
                        </div>
                        <span className="text-white font-bold text-lg">Galaxy</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-slate-300 hover:text-white transition-colors relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                            <motion.span
                                className="w-full h-0.5 bg-white block"
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 2 : 0 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white block"
                                animate={{ opacity: isOpen ? 0 : 1 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white block"
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -2 : 0 }}
                            />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className="md:hidden overflow-hidden"
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    x: isOpen ? 0 : -20
                                }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    );
}
