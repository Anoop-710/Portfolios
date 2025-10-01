"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function HeroSection() {
    const { theme } = useTheme();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Main Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 text-sm font-medium mb-8">
                            🍂 Welcome to the Harvest Season
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-orange-700 to-red-800 dark:from-amber-200 dark:via-orange-300 dark:to-red-300 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Alex Chen
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        className="text-2xl md:text-4xl font-light text-amber-700 dark:text-amber-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Full Stack Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-amber-600 dark:text-amber-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Crafting digital experiences with the warmth of autumn leaves and the precision of harvest season.
                        Passionate about creating beautiful, functional web applications that bring ideas to life.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work 🍁
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-8 py-4 border-2 border-amber-600 dark:border-amber-400 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 font-semibold rounded-full transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch 🌾
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-1/4 left-10 text-6xl opacity-20"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        y: [0, -10, 10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🍂
                </motion.div>

                <motion.div
                    className="absolute top-1/3 right-10 text-4xl opacity-20"
                    animate={{
                        rotate: [0, -5, 5, 0],
                        y: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                >
                    🍁
                </motion.div>

                <motion.div
                    className="absolute bottom-1/4 left-20 text-5xl opacity-15"
                    animate={{
                        rotate: [0, 3, -3, 0],
                        x: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                >
                    🌾
                </motion.div>

                <motion.div
                    className="absolute bottom-1/3 right-20 text-3xl opacity-15"
                    animate={{
                        rotate: [0, -3, 3, 0],
                        x: [0, -5, 5, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                    }}
                >
                    🎃
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-amber-600 dark:border-amber-400 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-amber-600 dark:bg-amber-400 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
