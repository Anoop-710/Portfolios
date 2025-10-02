"use client";

import { motion } from "framer-motion";
import { VenetianMask } from "./VenetianMask";
import { CandleFlame } from "./CandleFlame";
import { CurtainReveal } from "./CurtainReveal";

export function HeroSection() {
    return (
        <section id="hero" className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-black relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                {/* Damask pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-repeat" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Candle light ambiance */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <CandleFlame size="lg" intensity="high" />
                </motion.div>

                <motion.div
                    className="absolute top-32 right-32"
                    animate={{
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1,
                        ease: "easeInOut"
                    }}
                >
                    <CandleFlame size="md" intensity="medium" />
                </motion.div>

                <motion.div
                    className="absolute bottom-40 left-1/4"
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 2,
                        ease: "easeInOut"
                    }}
                >
                    <CandleFlame size="sm" intensity="low" />
                </motion.div>
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
                        {/* Developer title with curtain reveal */}
                        <CurtainReveal delay={500} className="mb-8">
                            <div className="inline-flex items-center px-6 py-3 bg-gold-400/20 border border-gold-400/30 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-gold-300 text-sm font-medium tracking-wide">Full Stack Developer & Digital Artisan</span>
                            </div>
                        </CurtainReveal>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-gold-200 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
                                    Behind the Mask
                                </span>
                                <br />
                                <span className="text-white">of Code</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                Crafting elegant digital experiences in the grand theater of technology.
                                A masquerade of algorithms and artistry, where every line of code tells a story.
                            </p>
                        </motion.div>

                        {/* Call to action buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.8 }}
                        >
                            <motion.button
                                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-gold-500/25 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Reveal My Portfolio
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 border-2 border-gold-400 text-gold-300 hover:text-white hover:border-gold-300 font-semibold rounded-lg transition-all backdrop-blur-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Behind the Scenes
                            </motion.button>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
                                <motion.div
                                    className="w-1 h-3 bg-gold-400 rounded-full mt-2"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Venetian Mask Display */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        <CurtainReveal delay={1000} className="relative">
                            <div className="relative">
                                {/* Decorative frame */}
                                <motion.div
                                    className="absolute -inset-8 bg-gradient-to-br from-gold-400/20 via-yellow-500/10 to-gold-400/20 rounded-3xl blur-xl"
                                    animate={{
                                        rotate: [0, 2, -2, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Main Venetian mask */}
                                <motion.div
                                    className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl border border-gold-400/30 backdrop-blur-sm"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <VenetianMask className="w-48 h-32 text-gold-400" />

                                    {/* Mystical glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-gold-400/5 via-transparent to-purple-500/5 rounded-3xl"
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>

                                {/* Floating accent elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full opacity-60"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 180, 360],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        rotate: [360, 180, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </CurtainReveal>
                    </motion.div>
                </div>
            </div>

            {/* Ambient lighting effects */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 2,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}
