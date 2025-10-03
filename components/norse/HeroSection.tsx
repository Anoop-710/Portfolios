"use client";

import { motion } from "framer-motion";
import { RavenAnimation } from "./RavenAnimation";

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
            {/* Rune Stone Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Outer stone ring */}
                    <div className="w-96 h-96 rounded-full border-8 border-slate-600 dark:border-slate-400 relative">
                        {/* Stone texture overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 dark:from-slate-300 dark:to-slate-500 opacity-20" />

                        {/* Inner carved area */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800 flex items-center justify-center">
                            {/* Rune patterns */}
                            <div className="absolute inset-0 rounded-full border-2 border-slate-400 dark:border-slate-500 opacity-30" />
                            <div className="absolute inset-4 rounded-full border border-slate-400 dark:border-slate-500 opacity-20" />

                            {/* Central runes */}
                            <div className="text-center z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="mb-4"
                                >
                                    <div className="text-6xl md:text-8xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                                        ᚱᚢᚾᛖ
                                    </div>

                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="space-y-2"
                                >
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                        Developer & Designer
                                    </h1>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                                        Crafting digital experiences with the wisdom of ancient runes and modern technology
                                    </p>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 1 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                    >
                                        View My Saga
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 border-2 border-slate-400 dark:border-slate-500 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                    >
                                        Contact the Warrior
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Glow effect */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-30 blur-sm"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Raven Animation */}
            <RavenAnimation />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }, (_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
