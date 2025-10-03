"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import WatercolorBlot from "./WatercolorBlot";
import InkSplatter from "./InkSplatter";

export default function HeroSection() {
    const [splatterTrigger, setSplatterTrigger] = useState(false);

    const handleSplatter = () => {
        setSplatterTrigger(!splatterTrigger);
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
            {/* Animated watercolor background blots */}
            <div className="absolute inset-0 pointer-events-none">
                <WatercolorBlot
                    delay={0}
                    duration={12}
                    size={300}
                    color="rgba(236, 72, 153, 0.2)"
                    className="absolute top-20 left-10"
                />
                <WatercolorBlot
                    delay={3}
                    duration={15}
                    size={250}
                    color="rgba(59, 130, 246, 0.2)"
                    className="absolute top-40 right-20"
                />
                <WatercolorBlot
                    delay={6}
                    duration={10}
                    size={200}
                    color="rgba(34, 197, 94, 0.2)"
                    className="absolute bottom-40 left-1/4"
                />
                <WatercolorBlot
                    delay={9}
                    duration={14}
                    size={280}
                    color="rgba(168, 85, 247, 0.2)"
                    className="absolute bottom-20 right-10"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Main Title */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
                            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Creative
                            </span>
                            <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-pink-600 bg-clip-text text-transparent">
                                Developer
                            </span>
                        </h1>
                        <motion.p
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Painting digital experiences with watercolor aesthetics and modern technology
                        </motion.p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.button
                            onClick={handleSplatter}
                            className="relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">View My Work</span>
                            <InkSplatter
                                trigger={splatterTrigger}
                                color="#ffffff"
                                size={150}
                                className="absolute -top-6 -left-6"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                layoutId="button-bg"
                            />
                        </motion.button>

                        <motion.a
                            href="#about"
                            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-lg rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.div
                            className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center mx-auto"
                            animate={{ borderColor: ["#94a3b8", "#64748b", "#94a3b8"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute top-1/4 right-10 w-20 h-20 opacity-20"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
                    <path d="M50 10 Q70 30 50 50 Q30 70 50 90" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </motion.div>
        </section>
    );
}
