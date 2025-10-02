"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroSectionProps {
    className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
    const [displayText, setDisplayText] = useState("");
    const fullText = "Full Stack Developer";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className={`min-h-screen flex items-center justify-center relative ${className}`}>
            {/* Background lava effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-32 lava-glow" />
                <div className="absolute bottom-32 left-0 right-0 h-16 bg-gradient-to-t from-orange-900/20 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-8"
                >
                    {/* Main Title */}
                    <div className="space-y-4">
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold rune-glow mb-4"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="block text-amber-100">Portfolio</span>
                        </motion.h1>

                        <motion.div
                            className="text-2xl md:text-4xl text-amber-200 font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </motion.div>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Forging digital experiences in the fires of{" "}
                        <span className="text-orange-400 font-semibold">innovation</span> and{" "}
                        <span className="text-red-400 font-semibold">creativity</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.button
                            onClick={scrollToAbout}
                            className="px-8 py-4 dragon-gradient rounded-lg text-amber-100 font-semibold text-lg ember-glow hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 heat-shimmer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>

                        <motion.button
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.button>
                    </motion.div>


                </motion.div>
            </div>

            {/* Floating rune symbols */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }, (_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl text-orange-400/20"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 360],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        {i % 2 === 0 ? "ᚱ" : "ᚦ"}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
