"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
    const [currentText, setCurrentText] = useState(0);
    const titles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Creative Thinker"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* City Skyline Silhouette */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/20 to-transparent"
                    animate={{
                        background: [
                            "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)",
                            "linear-gradient(to top, rgba(0,255,255,0.1) 0%, transparent 100%)",
                            "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)",
                        ],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating geometric shapes */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400/30"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Main Title */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Alex Chen
                        </span>
                    </h1>

                    {/* Animated typing effect */}
                    <motion.h2
                        key={currentText}
                        className="text-2xl md:text-4xl text-gray-300 h-12 flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {titles[currentText]}
                    </motion.h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Crafting immersive digital experiences in the cyberpunk era.
                    <br />
                    Building the future, one pixel at a time.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.button
                        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>

                    <motion.button
                        className="group px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex justify-center space-x-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {[
                        { Icon: Github, href: "https://github.com", label: "GitHub" },
                        { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                        { Icon: Mail, href: "mailto:alex@example.com", label: "Email" },
                    ].map(({ Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            className="p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={label}
                        >
                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <button
                        onClick={scrollToAbout}
                        className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors"
                        aria-label="Scroll to about section"
                    >
                        <ChevronDown className="w-6 h-6 text-cyan-400" />
                    </button>
                </motion.div>
            </div>

            {/* Neon Border Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scaleX: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scaleX: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                    }}
                />
            </div>
        </section>
    );
}
