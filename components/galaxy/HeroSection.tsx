"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        setMounted(true);
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Main Title */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                        Cosmic
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Developer
                    </h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Crafting digital experiences across the vast expanse of the web universe,
                    where code meets constellations and innovation knows no bounds.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore My Universe
                    </motion.button>
                    <motion.button
                        className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.button>
                </motion.div>

                {/* Glowing Rune Circle */}
                <motion.div
                    className="relative w-64 h-64 mx-auto"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    {/* Outer Rune Circle */}
                    <motion.div
                        className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Rune Symbols */}
                        {Array.from({ length: 8 }, (_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-4 h-4 text-purple-400"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transformOrigin: "0 0",
                                }}
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <div
                                    className="w-full h-full"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                                    }}
                                >
                                    <div className="w-1 h-8 bg-gradient-to-t from-purple-400 to-transparent mx-auto" />
                                    <div className="w-8 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Inner Pulsing Circle */}
                    <motion.div
                        className="absolute inset-8 border border-blue-400/50 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Center Core */}
                    <motion.div
                        className="absolute inset-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(147, 51, 234, 0.5)",
                                "0 0 40px rgba(147, 51, 234, 0.8)",
                                "0 0 20px rgba(147, 51, 234, 0.5)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-8 h-8 bg-white rounded-full opacity-80" />
                    </motion.div>
                </motion.div>

                {/* Floating Particles */}
                {mounted && (
                    <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 20 }, (_, i) => {
                            const randomValues = {
                                left: Math.random() * 100,
                                top: Math.random() * 100,
                                duration: 3 + Math.random() * 2,
                                delay: Math.random() * 2,
                            };

                            return (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full"
                                    style={{
                                        left: `${randomValues.left}%`,
                                        top: `${randomValues.top}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: randomValues.duration,
                                        delay: randomValues.delay,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-white/50 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
