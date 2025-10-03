"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 py-20">
            {/* Main Content Container */}
            <div className="max-w-6xl mx-auto text-center relative z-20">
                {/* Animated Brass Plaque */}
                <motion.div
                    className="relative mb-12"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Plaque Background */}
                    <div className="relative bg-gradient-to-br from-amber-700 via-amber-800 to-orange-900 p-12 md:p-16 rounded-2xl shadow-2xl border-4 border-amber-600">
                        {/* Rivet Details */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-400 rounded-full shadow-lg" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full shadow-lg" />
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-400 rounded-full shadow-lg" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-400 rounded-full shadow-lg" />

                        {/* Decorative Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-amber-500/50 pointer-events-none" />

                        {/* Gear Animation Border */}
                        <div className="absolute -inset-4 rounded-2xl">
                            {Array.from({ length: 8 }, (_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-6 h-6"
                                    style={{
                                        top: `${Math.sin((i * Math.PI * 2) / 8) * 100 + 100}%`,
                                        left: `${Math.cos((i * Math.PI * 2) / 8) * 100 + 100}%`,
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2,
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" className="w-full h-full text-amber-500/60">
                                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                                        {Array.from({ length: 8 }, (_, j) => (
                                            <line
                                                key={j}
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                transform={`rotate(${j * 45} 12 12)`}
                                            />
                                        ))}
                                    </svg>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Title */}
                        <div className="relative">
                            <motion.h1
                                className="text-4xl md:text-7xl font-bold text-amber-100 mb-4 tracking-tight"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                                    ALEXANDER COGSWORTH
                                </span>
                            </motion.h1>

                            <motion.div
                                className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />

                            <motion.h2
                                className="text-xl md:text-3xl font-semibold text-amber-200 mb-8"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                Master Steam Engineer & Code Architect
                            </motion.h2>

                            <motion.p
                                className="text-lg md:text-xl text-amber-100/90 max-w-3xl mx-auto leading-relaxed"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                            >
                                Crafting digital locomotives with precision engineering, brass gears of logic,
                                and steam-powered innovation. Full-stack developer specializing in mechanical
                                web applications and industrial-grade software solutions.
                            </motion.p>
                        </div>

                        {/* Loading Animation */}
                        {!isLoaded && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center bg-amber-900/90 rounded-2xl"
                                exit={{ opacity: 0, scale: 1.1 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <motion.div
                                        className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                    <span className="text-amber-200 text-lg font-semibold">Initializing Steam Engine...</span>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <motion.button
                        className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        <span className="relative z-10">View My Workshop</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                    <motion.button
                        className="group px-8 py-4 border-2 border-amber-400 text-amber-300 font-semibold text-lg rounded-xl hover:bg-amber-400 hover:text-amber-900 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Send Telegram
                    </motion.button>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute -top-8 -left-8 w-16 h-16 border-4 border-amber-500/30 rounded-full"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute -bottom-8 -right-8 w-12 h-12 border-2 border-orange-400/40 rounded-full"
                    animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Background Steam Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 6 }, (_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-8 bg-gradient-to-t from-amber-400/20 to-transparent rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            bottom: "10%",
                        }}
                        animate={{
                            height: [32, 48, 32],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
