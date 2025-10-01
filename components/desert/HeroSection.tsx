'use client';

import { motion } from 'framer-motion';
import { useDesertTheme } from './ThemeProvider';
import { memo } from 'react';

const HeroSection = memo(() => {
    const theme = useDesertTheme();

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-100" />

            {/* Animated Dune Silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2">
                <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 right-0"
                >
                    <svg viewBox="0 0 1200 400" className="w-full h-full">
                        <motion.path
                            d="M0,300 C150,250 300,320 450,280 C600,240 750,300 900,260 C1050,220 1200,280 1200,280 L1200,400 L0,400 Z"
                            fill="url(#heroDuneGradient)"
                            stroke="url(#heroDuneStroke)"
                            strokeWidth="2"
                            initial={{ d: "M0,350 C150,300 300,370 450,330 C600,290 750,350 900,310 C1050,270 1200,330 1200,330 L1200,400 L0,400 Z" }}
                            animate={{
                                d: [
                                    "M0,300 C150,250 300,320 450,280 C600,240 750,300 900,260 C1050,220 1200,280 1200,280 L1200,400 L0,400 Z",
                                    "M0,290 C200,240 350,310 500,270 C650,230 800,290 950,250 C1100,210 1200,270 1200,270 L1200,400 L0,400 Z",
                                    "M0,300 C150,250 300,320 450,280 C600,240 750,300 900,260 C1050,220 1200,280 1200,280 L1200,400 L0,400 Z"
                                ]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <defs>
                            <linearGradient id="heroDuneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={theme.colors.dune} stopOpacity="0.8" />
                                <stop offset="50%" stopColor={theme.colors.gold} stopOpacity="0.9" />
                                <stop offset="100%" stopColor={theme.colors.bronze} stopOpacity="1" />
                            </linearGradient>
                            <linearGradient id="heroDuneStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={theme.colors.accent} stopOpacity="0.6" />
                                <stop offset="100%" stopColor={theme.colors.shadow} stopOpacity="0.8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>

            {/* Shimmering Mirage Effect */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scaleX: [0.8, 1.2, 0.8],
                    x: [-50, 50, -50]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            {/* Heat Distortion Effect */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                    backgroundSize: "200px 200px"
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Name/Title with Mirage Reflection */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-8"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-4"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            background: `linear-gradient(45deg, ${theme.colors.bronze}, ${theme.colors.gold}, ${theme.colors.amber}, ${theme.colors.bronze})`,
                            backgroundSize: "300% 300%",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        Desert Nomad
                    </motion.h1>

                    {/* Mirage Reflection Effect */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scaleY: [0.3, 0.6, 0.3],
                            filter: ["blur(4px)", "blur(2px)", "blur(4px)"]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="h-8 bg-gradient-to-r from-amber-200/20 via-yellow-200/30 to-amber-200/20 rounded-full mx-auto"
                        style={{
                            transform: "perspective(500px) rotateX(60deg)",
                            maxWidth: "400px"
                        }}
                    />
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl md:text-2xl text-amber-800 mb-12 font-light"
                >
                    Crafting Digital Mirages in the Sands of Code
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ${theme.textures.leather}`}
                    >
                        Explore My Oasis
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 30px rgba(139, 115, 85, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 border-2 border-amber-600 text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-all duration-300 ${theme.textures.woven}`}
                    >
                        Send a Message
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating Desert Elements */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.sin(i) * 10, 0],
                        rotate: [0, 360],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                        duration: 6 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${15 + i * 10}%`,
                        top: `${20 + (i % 3) * 15}%`,
                        fontSize: "2rem"
                    }}
                >
                    {i % 3 === 0 ? "🏜️" : i % 3 === 1 ? "🌵" : "⭐"}
                </motion.div>
            ))}

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-600"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
