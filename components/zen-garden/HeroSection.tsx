"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingPetal {
    id: number;
    x: number;
    delay: number;
    duration: number;
    scale: number;
}

export default function HeroSection() {
    const [floatingPetals, setFloatingPetals] = useState<FloatingPetal[]>([]);

    useEffect(() => {
        const generatePetals = () => {
            const newPetals: FloatingPetal[] = [];
            for (let i = 0; i < 12; i++) {
                newPetals.push({
                    id: i,
                    x: Math.random() * 100,
                    delay: Math.random() * 8,
                    duration: 6 + Math.random() * 8,
                    scale: 0.3 + Math.random() * 0.5,
                });
            }
            setFloatingPetals(newPetals);
        };

        generatePetals();
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
            {/* Main Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white/60 to-emerald-50/80 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80" />

            {/* Cherry Blossom Tree */}
            <div className="absolute right-8 md:right-16 bottom-0 w-64 md:w-96 h-96 md:h-[500px]">
                {/* Tree Trunk */}
                <motion.div
                    className="absolute bottom-0 right-16 w-8 h-32 bg-gradient-to-t from-amber-800 to-amber-700 dark:from-amber-900 dark:to-amber-800 rounded-lg"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Tree Branches */}
                <motion.div
                    className="absolute bottom-24 right-8 w-32 h-2 bg-gradient-to-r from-amber-700 to-amber-600 dark:from-amber-800 dark:to-amber-700 rounded-full"
                    initial={{ scaleX: 0, rotate: 15 }}
                    animate={{ scaleX: 1, rotate: 15 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                />
                <motion.div
                    className="absolute bottom-32 right-4 w-28 h-2 bg-gradient-to-r from-amber-700 to-amber-600 dark:from-amber-800 dark:to-amber-700 rounded-full"
                    initial={{ scaleX: 0, rotate: -20 }}
                    animate={{ scaleX: 1, rotate: -20 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                />
                <motion.div
                    className="absolute bottom-40 right-12 w-24 h-2 bg-gradient-to-r from-amber-700 to-amber-600 dark:from-amber-800 dark:to-amber-700 rounded-full"
                    initial={{ scaleX: 0, rotate: 30 }}
                    animate={{ scaleX: 1, rotate: 30 }}
                    transition={{ duration: 1.2, delay: 0.9 }}
                />

                {/* Cherry Blossoms Clusters */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            right: `${Math.random() * 200 + 50}px`,
                            bottom: `${Math.random() * 200 + 200}px`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1.2, 1],
                            opacity: [0, 0.8, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            delay: 1 + Math.random() * 2,
                            ease: "easeOut",
                        }}
                    >
                        <div className="relative w-8 h-8">
                            {[...Array(5)].map((_, j) => (
                                <motion.div
                                    key={j}
                                    className="absolute w-3 h-3 bg-gradient-to-br from-pink-300 to-pink-400 dark:from-pink-400 dark:to-pink-500 rounded-full"
                                    style={{
                                        left: `${Math.random() * 20 - 10}px`,
                                        top: `${Math.random() * 20 - 10}px`,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: j * 0.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Floating Petals around Tree */}
            {floatingPetals.map((petal) => (
                <motion.div
                    key={petal.id}
                    className="absolute"
                    style={{
                        right: `${petal.x}%`,
                        bottom: "60%",
                    }}
                    initial={{
                        y: 0,
                        x: 0,
                        rotate: 0,
                        scale: petal.scale,
                        opacity: 0.6
                    }}
                    animate={{
                        y: [0, 100, 80],
                        x: [0, -30, 20],
                        rotate: [0, 180, 360],
                        opacity: [0.6, 0.8, 0],
                    }}
                    transition={{
                        duration: petal.duration,
                        delay: petal.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" className="text-pink-300 dark:text-pink-400">
                        <path
                            d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z"
                            fill="currentColor"
                            opacity="0.7"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Name/Title with Japanese Characters */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 dark:from-slate-200 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent">
                                Alex
                            </span>
                            <br />
                            <span className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-rose-500 to-emerald-500 bg-clip-text text-transparent font-light">
                                Developer
                            </span>
                        </h1>
                        <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-light">
                            アレックス・デベロッパー
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Crafting serene digital experiences with the tranquility of a Japanese zen garden
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
