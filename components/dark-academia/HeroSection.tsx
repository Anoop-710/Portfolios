"use client";

import { motion } from "framer-motion";
import { StainedGlassWindow } from "./StainedGlassWindow";
import { DustParticles } from "./DustParticles";

export function HeroSection() {
    return (
        <section id="hero" className="min-h-screen bg-gradient-to-b from-slate-900 via-stone-800 to-slate-900 relative overflow-hidden">
            {/* Background stone texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-stone-700 to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Atmospheric dust particles */}
            <DustParticles count={25} className="opacity-60" />

            {/* Gothic architecture elements */}
            <div className="absolute inset-0">
                {/* Stone columns */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-800 to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-600/50 to-transparent" />
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-800 to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-l from-stone-600/50 to-transparent" />
                </div>

                {/* Vaulted ceiling effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                    <div className="w-full h-64 bg-gradient-radial from-stone-600/30 via-transparent to-transparent rounded-full blur-3xl" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left side - Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Developer title */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-amber-400/20 border border-amber-400/30 rounded-full mb-6">
                                <span className="text-amber-300 text-sm font-medium">Full Stack Developer</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                    Alexandria
                                </span>
                                <br />
                                <span className="text-slate-100">Rivers</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                Crafting digital experiences in the ancient halls of code.
                                A scholar of algorithms and architect of elegant solutions in the modern digital cathedral.
                            </p>
                        </motion.div>

                        {/* Call to action buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <motion.button
                                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View My Codex
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 border-2 border-slate-400 text-slate-300 hover:text-white hover:border-amber-400 font-semibold rounded-lg transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Read the Archives
                            </motion.button>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Stained Glass Window */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -inset-8 bg-gradient-to-br from-amber-400/20 via-orange-500/10 to-yellow-400/20 rounded-3xl blur-xl" />

                            {/* Main stained glass window */}
                            <StainedGlassWindow className="w-full max-w-lg" />

                            {/* Candle light effects */}
                            <motion.div
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="w-16 h-8 bg-gradient-radial from-yellow-300/40 via-orange-400/20 to-transparent rounded-full blur-lg" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ambient lighting effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </section>
    );
}
