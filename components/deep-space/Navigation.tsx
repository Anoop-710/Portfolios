"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="backdrop-blur-md bg-black/20 border border-white/10 rounded-full px-8 py-4">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id
                                    ? "text-white"
                                    : "text-gray-300 hover:text-gray-100"
                                    }`}
                            >
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full border border-blue-300/30"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 font-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.nav
                className="fixed top-4 right-4 z-50 md:hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
            >
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 rounded-full backdrop-blur-md bg-black/20 border border-white/10"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="fixed inset-0 z-40 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 backdrop-blur-md bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <motion.div
                        className="absolute top-20 right-4 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 min-w-[200px]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2 }}
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                                        ? "bg-blue-400/30 text-blue-300"
                                        : "text-gray-300 hover:bg-gray-800"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
