"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroSectionProps {
    name?: string;
    role?: string;
}

export default function HeroSection({
    name = "Alex Chen",
    role = "Full Stack Developer"
}: HeroSectionProps) {
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Water Ripple Effect */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating Bubbles */}
                {Array.from({ length: 20 }).map((_, i) => {
                    // Fixed positions to prevent hydration mismatch
                    const positions = [
                        { left: "15%", top: "20%" }, { left: "85%", top: "15%" },
                        { left: "45%", top: "10%" }, { left: "25%", top: "75%" },
                        { left: "70%", top: "60%" }, { left: "10%", top: "50%" },
                        { left: "90%", top: "40%" }, { left: "35%", top: "85%" },
                        { left: "65%", top: "25%" }, { left: "5%", top: "65%" },
                        { left: "95%", top: "75%" }, { left: "50%", top: "5%" },
                        { left: "20%", top: "35%" }, { left: "80%", top: "80%" },
                        { left: "30%", top: "15%" }, { left: "75%", top: "45%" },
                        { left: "15%", top: "80%" }, { left: "85%", top: "35%" },
                        { left: "40%", top: "60%" }, { left: "60%", top: "20%" }
                    ];

                    const pos = positions[i] || { left: "50%", top: "50%" };

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-200/40 dark:bg-cyan-400/20 rounded-full"
                            style={{
                                left: pos.left,
                                top: pos.top,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.sin(i) * 50, 0],
                                scale: [0.5, 1, 0.5],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 8 + (i * 0.2),
                                repeat: Infinity,
                                delay: i * 0.25,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Parallax Fish */}
                <motion.div
                    className="absolute text-4xl opacity-20 dark:opacity-40"
                    style={{
                        left: "10%",
                        top: "20%",
                    }}
                    animate={{
                        x: mousePosition.x * 20,
                        y: mousePosition.y * 20,
                        rotate: mousePosition.x * 10,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    🐠
                </motion.div>

                <motion.div
                    className="absolute text-3xl opacity-15 dark:opacity-35"
                    style={{
                        right: "15%",
                        top: "60%",
                    }}
                    animate={{
                        x: mousePosition.x * -15,
                        y: mousePosition.y * -15,
                        rotate: mousePosition.x * -8,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 25 }}
                >
                    🐟
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-400 dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                        }}
                    >
                        {name}
                    </motion.h1>

                    <motion.p
                        className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-light"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        {role}
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    >
                        Crafting immersive digital experiences with modern web technologies,
                        diving deep into the ocean of code to bring ideas to life.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    >
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore My Work
                        </motion.button>

                        <motion.button
                            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full font-semibold text-lg transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                borderColor: "rgb(59 130 246)",
                                color: "rgb(59 130 246)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
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
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
