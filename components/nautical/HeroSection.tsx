"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroSectionProps {
    setCurrentSection: (section: string) => void;
}

export default function HeroSection({ setCurrentSection }: HeroSectionProps) {
    const [trailProgress, setTrailProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrailProgress(prev => (prev + 1) % 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const scrollToAbout = () => {
        setCurrentSection("about");
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-amber-50 to-slate-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-800">
                {/* Animated waves */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)"
                    }}
                />
            </div>

            {/* Treasure trail animation */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <motion.path
                        d="M100,500 Q250,300 400,400 T700,350 T900,500"
                        stroke="rgba(245, 158, 11, 0.6)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="10,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: trailProgress / 100 }}
                        transition={{ duration: 0.1 }}
                    />
                    {Array.from({ length: 20 }, (_, i) => (
                        <motion.circle
                            key={i}
                            r="4"
                            fill="#f59e0b"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: `${trailProgress}%` }}
                            style={{
                                offsetPath: "path('M100,500 Q250,300 400,400 T700,350 T900,500')",
                                offsetRotate: "0deg"
                            }}
                        />
                    ))}
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Compass Rose */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="mb-8 relative"
                >
                    <div className="w-48 h-48 mx-auto relative">
                        {/* Outer compass ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-8 border-amber-600/30 dark:border-amber-400/30 rounded-full"
                        >
                            {/* Compass directions */}
                            {["N", "NE", "E", "SE", "S", "SW", "W", "NW"].map((direction, index) => (
                                <motion.div
                                    key={direction}
                                    className="absolute text-amber-700 dark:text-amber-300 font-bold text-lg"
                                    style={{
                                        top: index % 2 === 0 ? "-20px" : "50%",
                                        left: index % 2 === 0 ? "50%" : index < 4 ? "calc(100% - 20px)" : "-20px",
                                        transform: `translateX(-50%) ${index % 2 === 0 ? "translateY(0)" : "translateY(-50%)"}`,
                                    }}
                                >
                                    {direction}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Inner compass */}
                        <div className="absolute inset-4 border-4 border-amber-600 dark:border-amber-400 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50">
                            {/* Compass needle */}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-1 h-16 bg-red-600 dark:bg-red-400 rounded-full shadow-lg" />
                                <div className="absolute top-0 w-6 h-1 bg-red-600 dark:bg-red-400 rounded-full" />
                            </motion.div>

                            {/* Center point */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-4 h-4 bg-amber-600 dark:bg-amber-400 rounded-full shadow-lg" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-6"
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 dark:from-amber-300 dark:via-amber-100 dark:to-amber-300 bg-clip-text text-transparent">
                        CAPTAIN
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                        Code Explorer
                    </h2>
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xl text-amber-600 dark:text-amber-400 font-medium"
                    >
                        ⚓ Full-Stack Developer & Digital Navigator ⚓
                    </motion.div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Charting courses through complex codebases, discovering hidden treasures in technology,
                    and navigating the ever-changing seas of software development with expertise and precision.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <motion.button
                        onClick={scrollToAbout}
                        className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>View Captain&apos;s Log</span>
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                📜
                            </motion.span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 dark:from-amber-600 dark:to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>

                    <motion.button
                        onClick={() => setCurrentSection("projects")}
                        className="group px-8 py-4 border-2 border-amber-600 dark:border-amber-400 text-amber-700 dark:text-amber-300 font-bold rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="flex items-center space-x-2">
                            <span>Discover Treasures</span>
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💎
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-8 text-6xl opacity-20 hidden lg:block"
                >
                    🌊
                </motion.div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-8 text-6xl opacity-20 hidden lg:block"
                >
                    ⚓
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-600 dark:text-amber-400"
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
