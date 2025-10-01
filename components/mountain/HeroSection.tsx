"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Sun/Moon Animation */}
            <motion.div
                className="absolute top-20 right-20 z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Sun for light mode */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 dark:hidden shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 animate-pulse" />
                </div>

                {/* Moon for dark mode */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 hidden dark:block shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-300 relative">
                        {/* Moon craters */}
                        <div className="absolute top-4 left-6 w-3 h-3 bg-slate-400 rounded-full opacity-60" />
                        <div className="absolute top-8 right-8 w-2 h-2 bg-slate-400 rounded-full opacity-40" />
                        <div className="absolute bottom-6 left-10 w-4 h-4 bg-slate-400 rounded-full opacity-50" />
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-pink-100 dark:from-white dark:via-orange-200 dark:to-pink-200 bg-clip-text text-transparent drop-shadow-lg"
                        style={{
                            x: mousePosition.x * 10,
                            y: mousePosition.y * 10,
                        }}
                    >
                        Alex Chen
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <motion.h2
                        className="text-2xl md:text-4xl font-light mb-8 text-white dark:text-slate-300 drop-shadow-md"
                        style={{
                            x: mousePosition.x * 5,
                            y: mousePosition.y * 5,
                        }}
                    >
                        Full Stack Developer
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p className="text-lg md:text-xl text-white dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
                        Crafting beautiful digital experiences with modern web technologies.
                        Passionate about creating intuitive user interfaces and robust backend systems.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="px-8 py-4 border-2 border-orange-500 dark:border-orange-400 text-white dark:text-slate-300 font-semibold rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-slate-900 transition-all duration-300 drop-shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-orange-300/30 dark:bg-white/20 rounded-full"
                        style={{
                            left: `${(i * 7.3) % 100}%`,
                            top: `${(i * 11.7) % 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + (i % 3) * 1.5,
                            repeat: Infinity,
                            delay: (i % 5) * 0.8,
                        }}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
