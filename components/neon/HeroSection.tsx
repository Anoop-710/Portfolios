"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
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
    }, [currentIndex]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl mx-auto text-center relative z-20">
                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-4"
                        animate={{
                            textShadow: [
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff",
                                "0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff",
                                "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff8000, #8000ff)",
                            backgroundSize: "400% 400%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "gradientShift 3s ease-in-out infinite",
                        }}
                    >
                        JOHN DOE
                    </motion.h1>

                    {/* Animated Subtitle */}
                    <motion.div
                        className="text-2xl md:text-4xl font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            {displayText}
                        </span>
                        <motion.span
                            className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            |
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    Crafting digital experiences with cutting-edge technology and
                    <span className="text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text font-semibold">
                        {" "}neon aesthetics
                    </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 1 }}
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(255, 0, 255, 0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                        }}
                    >
                        View My Work
                    </motion.button>

                    <motion.button
                        className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.button>
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={`floating-${i}`}
                            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 40}%`,
                                boxShadow: "0 0 10px currentColor",
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
                        animate={{
                            borderColor: ["#00ffff", "#ff00ff", "#00ffff"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-pink-400 rounded-full mt-2"
                            animate={{
                                y: [0, 12, 0],
                                background: [
                                    "linear-gradient(to bottom, #00ffff, #ff00ff)",
                                    "linear-gradient(to bottom, #ff00ff, #00ffff)",
                                    "linear-gradient(to bottom, #00ffff, #ff00ff)",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Pulsing Circles */}
                {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                        key={`circle-${i}`}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-pink-500/30 rounded-full"
                        style={{
                            width: `${300 + i * 200}px`,
                            height: `${300 + i * 200}px`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3],
                            borderColor: [
                                "rgba(255, 0, 255, 0.3)",
                                "rgba(0, 255, 255, 0.3)",
                                "rgba(255, 0, 255, 0.3)",
                            ],
                        }}
                        transition={{
                            duration: 4 + i * 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
