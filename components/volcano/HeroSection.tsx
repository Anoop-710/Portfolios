"use client";

import { motion } from "framer-motion";
import { LavaCrackOverlay } from "./LavaCrackOverlay";

export function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-volcano">
                <div className="volcano-background-pattern opacity-50" />
            </div>

            {/* Animated Ember Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-volcano-bright-orange rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -100, -200],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Lava Crack Overlay */}
            <LavaCrackOverlay />

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Name/Title carved into molten rock */}
                    <motion.div
                        className="mb-8 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-volcano-white mb-4 relative">
                            <span className="relative z-10 text-shadow-glow">
                                JOHN DOE
                            </span>
                            {/* Molten rock background effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-lava opacity-20 blur-xl"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </h1>

                        {/* Glowing lava cracks around text */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 400 200">
                                <motion.path
                                    d="M50,100 Q100,50 150,100 T250,100 Q300,130 350,100"
                                    stroke="url(#lavaGradient)"
                                    strokeWidth="3"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                                <motion.path
                                    d="M30,150 Q80,120 130,150 T230,150 Q280,180 330,150"
                                    stroke="url(#lavaGradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, delay: 1 }}
                                />
                                <defs>
                                    <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#dc2626" />
                                        <stop offset="50%" stopColor="#f97316" />
                                        <stop offset="100%" stopColor="#fbbf24" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl text-volcano-ash mb-12 font-light"
                    >
                        Full-Stack Developer & UI/UX Designer
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(255, 107, 53, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-lava text-volcano-black font-bold text-lg rounded-lg border-2 border-volcano-bright-orange box-shadow-volcano transition-all duration-300"
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 107, 53, 0.1)",
                                borderColor: "#ff6b35"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-volcano-ash text-volcano-white font-bold text-lg rounded-lg hover:text-volcano-glow transition-all duration-300"
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-volcano-ash rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-3 bg-volcano-glow rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
