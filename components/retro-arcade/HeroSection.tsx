"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PixelCoin } from "./PixelCoin";
import { CRTScanlines } from "./CRTScanlines";

export function HeroSection() {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "RETRO ARCADE DEVELOPER";
    const typingSpeed = 40; // milliseconds

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.4,
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 25% 25%, #00ffff 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #ff00ff 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, #ffff00 1px, transparent 1px)
            `,
                        backgroundSize: "100px 100px, 100px 100px, 50px 50px",
                    }}
                />
            </div>

            {/* CRT Scanlines Effect */}
            <CRTScanlines className="z-10" />

            {/* Main Content */}
            <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Pixelated Title */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="relative">
                            {/* Glowing border effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 opacity-20 blur-lg animate-pulse" />

                            <h1
                                className="relative text-6xl md:text-8xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent"
                                style={{
                                    fontFamily: '"Courier New", monospace',
                                    textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                                    WebkitTextStroke: '1px rgba(0, 255, 255, 0.3)',
                                }}
                            >
                                {displayText}
                                <motion.span
                                    className="text-cyan-400"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    _
                                </motion.span>
                            </h1>
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <p className="text-xl md:text-2xl text-gray-300 font-mono tracking-wide">
                            LEVEL UP YOUR WEB EXPERIENCE
                        </p>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Crafting pixel-perfect digital experiences with 8-bit precision and modern technology
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <motion.button
                            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold text-lg tracking-wider border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">START GAME</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.button>

                        <motion.button
                            className="group px-8 py-4 border-2 border-magenta-400 text-magenta-400 font-bold text-lg tracking-wider hover:bg-magenta-400 hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 255, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            VIEW SCORES
                        </motion.button>
                    </motion.div>

                    {/* Floating Coins */}
                    <motion.div variants={itemVariants} className="absolute top-20 left-10 hidden lg:block">
                        <PixelCoin size={40} />
                    </motion.div>

                    <motion.div variants={itemVariants} className="absolute top-32 right-16 hidden lg:block">
                        <PixelCoin size={32} />
                    </motion.div>

                    <motion.div variants={itemVariants} className="absolute bottom-32 left-20 hidden lg:block">
                        <PixelCoin size={36} />
                    </motion.div>

                    <motion.div variants={itemVariants} className="absolute bottom-20 right-10 hidden lg:block">
                        <PixelCoin size={28} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-mono tracking-wider">SCROLL DOWN</span>
                    <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
