"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { Github, Linkedin, MapPin, Download } from "lucide-react";
import { useIsMobile, useReducedMotion } from "@/lib/animations";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export function HeroSection() {
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                    style={{
                        // Improve performance on mobile
                        willChange: isMobile ? "auto" : "transform, opacity",
                    }}
                >
                    {/* Main heading */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-800 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-300 bg-clip-text text-transparent leading-tight"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {personalInfo.name}
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-3xl font-light text-muted-foreground"
                            variants={itemVariants}
                        >
                            {personalInfo.role}
                        </motion.h2>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* Location and social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{personalInfo.location}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <motion.a
                                href={personalInfo.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </motion.a>

                            {personalInfo.linkedinUrl && (
                                <motion.a
                                    href={personalInfo.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </motion.a>
                            )}

                            {personalInfo.resumeUrl && (
                                <motion.a
                                    href={personalInfo.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Resume</span>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                    >
                        <motion.button
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            className="px-8 py-3 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white rounded-full font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating elements for visual interest - reduced on mobile */}
            {!isMobile && !prefersReducedMotion && (
                <>
                    <motion.div
                        className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-400/30 rounded-full"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className="absolute top-1/3 right-16 w-3 h-3 bg-green-400/20 rounded-full"
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />

                    <motion.div
                        className="absolute bottom-1/4 left-20 w-2 h-2 bg-emerald-300/40 rounded-full"
                        animate={{
                            y: [0, -25, 0],
                            opacity: [0.4, 0.9, 0.4],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </>
            )}
        </section>
    );
}
