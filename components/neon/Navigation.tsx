"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
        <>
            {/* Desktop Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 hidden md:block"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="backdrop-blur-md bg-black/20 border-b border-pink-500/30">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <motion.div
                                className="text-2xl font-bold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/" className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent hover:from-cyan-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
                                    NEON
                                </Link>
                            </motion.div>

                            {/* Desktop Menu */}
                            <div className="flex items-center space-x-8">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                                        >
                                            {item.name}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                                            />
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* CTA Button */}
                                <motion.button
                                    className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 md:hidden"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="backdrop-blur-md bg-black/20 border-b border-pink-500/30">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                NEON
                            </Link>

                            {/* Mobile Menu Button */}
                            <motion.button
                                className="p-2 text-white"
                                onClick={() => setIsOpen(!isOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <motion.span
                                        className="w-5 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 block"
                                        animate={{
                                            rotate: isOpen ? 45 : 0,
                                            y: isOpen ? 2 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="w-5 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 block mt-1"
                                        animate={{
                                            opacity: isOpen ? 0 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.span
                                        className="w-5 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 block mt-1"
                                        animate={{
                                            rotate: isOpen ? -45 : 0,
                                            y: isOpen ? -2 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <motion.div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    initial={{ opacity: 0, pointerEvents: "none" }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        pointerEvents: isOpen ? "auto" : "none",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    y: isOpen ? 0 : 20,
                                }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-medium mt-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                scale: isOpen ? 1 : 0.8,
                            }}
                            transition={{ delay: 0.4 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* Spacer for fixed navbar */}
            <div className="h-16 md:h-20" />
        </>
    );
}
