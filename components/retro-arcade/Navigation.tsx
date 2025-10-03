"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PixelCoin } from "./PixelCoin";

interface NavigationProps {
    currentSection?: string;
}

export function Navigation({ currentSection = "hero" }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: "hero", label: "HOME", href: "#hero" },
        { id: "about", label: "ABOUT", href: "#about" },
        { id: "projects", label: "PROJECTS", href: "#projects" },
        { id: "contact", label: "CONTACT", href: "#contact" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b-2 border-cyan-400/30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#hero" className="flex items-center space-x-2">
                        <PixelCoin size={32} animate={false} />
                        <span className="text-cyan-400 font-bold text-xl tracking-wider">
                            RETRO-DEV
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`relative px-3 py-2 text-sm font-bold tracking-wider transition-colors ${currentSection === item.id
                                        ? "text-cyan-400"
                                        : "text-gray-300 hover:text-cyan-400"
                                    }`}
                            >
                                {item.label}
                                {currentSection === item.id && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                                        layoutId="activeSection"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-cyan-400 hover:text-cyan-300"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-4 h-0.5 bg-current"
                                    animate={{
                                        rotate: isMenuOpen && i === 0 ? 45 : isMenuOpen && i === 2 ? -45 : 0,
                                        y: isMenuOpen && i === 0 ? 2 : isMenuOpen && i === 2 ? -2 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            ))}
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b-2 border-cyan-400/30 z-40 md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-6 py-4 space-y-2">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isMenuOpen ? 1 : 0,
                                x: isMenuOpen ? 0 : -20,
                            }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-3 text-sm font-bold tracking-wider border-l-2 transition-colors ${currentSection === item.id
                                        ? "text-cyan-400 border-cyan-400 bg-cyan-400/10"
                                        : "text-gray-300 hover:text-cyan-400 border-transparent hover:border-cyan-400/50"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
